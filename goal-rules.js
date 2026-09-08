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
