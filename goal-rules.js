// A continuidade começa em novembro de 2026; meses anteriores conservam a
// forma de cálculo antiga quando não possuírem uma meta mensal explícita.
const CONTINUOUS_GOALS_START = '2026-11';

function currentGoalPeriod() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit' }).formatToParts(new Date());
  return `${parts.find(part => part.type === 'year').value}-${parts.find(part => part.type === 'month').value}`;
}

function goalRecordValue(record, forward = false) {
  if (record === undefined || record === null) return undefined;
  if (typeof record === 'object') {
    if (forward && record.historicalOnly === true) return undefined;
    const value = forward && record.carryForwardValue != null ? record.carryForwardValue : record.monthlyGoal;
    if (value === undefined || value === null || value === '') return undefined;
    return Number.isFinite(Number(value)) && Number(value) >= 0 ? Number(value) : undefined;
  }
  return Number.isFinite(Number(record)) && Number(record) >= 0 ? Number(record) : undefined;
}

// O mapa é indexado por 'AAAA-MM|supervisorId'. Uma correção somente histórica
// vale no próprio mês; carryForwardValue mantém a referência anterior adiante.
function resolveMonthlyGoal(period, supervisorId, goals) {
  const exact = goalRecordValue(goals.get(`${period}|${supervisorId}`));
  if (exact !== undefined) return { value: exact, period, source: 'Firebase' };
  if (period < CONTINUOUS_GOALS_START) return null;
  let latest = '', value;
  for (const [key, record] of goals) {
    const separator = key.indexOf('|');
    if (separator < 0 || key.slice(separator + 1) !== supervisorId) continue;
    const previous = key.slice(0, separator);
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(previous) || previous >= period || previous <= latest) continue;
    const candidate = goalRecordValue(record, true);
    if (candidate !== undefined) { latest = previous; value = candidate; }
  }
  return value === undefined
    ? { value: 12, period: '', source: 'Padrão' }
    : { value, period: latest, source: `Herdada de ${latest}` };
}

// Semanas do calendário: domingo a sábado, incluindo semanas parciais.
function weeksInGoalMonth(period) {
  const [year, month] = period.split('-').map(Number);
  const firstWeekday = new Date(year, month - 1, 1).getDay();
  const days = new Date(year, month, 0).getDate();
  return Math.ceil((firstWeekday + days) / 7);
}

function weeklyGoal(monthly, period) {
  return Math.ceil(Math.max(0, Number(monthly) || 0) / weeksInGoalMonth(period));
}
