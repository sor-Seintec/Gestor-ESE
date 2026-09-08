const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'firebase-gestor.js'), 'utf8');
const context = vm.createContext({ schoolSupervisorIds: () => [] });
vm.runInContext(source.slice(source.indexOf('function asDate('), source.indexOf('async function changedCollection(')), context);
const visits = [
  ['planned', 'completed'], ['direct', 'completed'], ['private', 'completed'],
  ['planned', 'cancelled'], ['planned', 'postponed'], ['planned', 'justified'],
  [undefined, 'completed'], ['private', 'cancelled'], ['unknown', 'completed']
].map(([visitType, statusCode], id) => ({id: String(id), visitType, statusCode, supervisorId: 'a', visitDate: '2026-09-08T12:00:00Z'}));
const data = context.composeGestorData({users: new Map(), supervisors: new Map([['a', {displayName: 'Ana'}]]), schools: [], agenda: [], visits, goalJustifications: [], monthlyGoals: [], visitCorrectionRequests: []});
assert.equal(data.visits.length, 6);
assert.equal(data.visitRows.filter(row => row.Status === 'Realizada').length, 3);
assert.equal(data.plannedVisitRows.filter(row => row.Status === 'Realizada').length, 2);
assert.equal(data.visitRows.some(row => ['private', 'unknown'].includes(row._raw.visitType)), false);
assert.equal(visits.length, 9, 'O filtro não deve modificar os registros de origem');

const html = fs.readFileSync(path.join(root, 'DMC.html'), 'utf8');
assert.match(html, /const dadosVistorias = payload\.plannedVisitRows;/);
const elements = new Map();
const document = {getElementById(id) {
  if (!elements.has(id)) elements.set(id, {style: {}, innerHTML: '', textContent: ''});
  return elements.get(id);
}};
const dashboard = vm.createContext({
  document, dadosNuvemGlobais: data.plannedVisitRows,
  selectMes: {value: '8', selectedOptions: [{text: 'Setembro'}]},
  selectAno: {value: '2026'},
  selectSup: {value: 'todos', options: [{value: 'todos'}, {value: 'Ana'}, {value: 'Bruno'}]},
  metaDoSupervisor: () => ({mensal: 10, semanal: 3}),
  isSemanaAtual: () => true, getIniciais: name => name[0], formatarDataCurta: () => '-'
});
vm.runInContext(html.slice(html.indexOf('    function getStatus('), html.indexOf('    // Lógica Unificada do Tooltip')), dashboard);
vm.runInContext('atualizarDashboard()', dashboard);
assert.equal(elements.get('kpi-total-visitas').innerHTML, '2');
assert.equal(elements.get('kpi-real-semana').innerHTML, '2');
assert.equal(elements.get('kpi-meta-mensal').innerHTML, '20');
assert.equal(elements.get('kpi-faltam').innerHTML, '18');
assert.match(elements.get('tabela-body').innerHTML, /Bruno/);
dashboard.selectSup.value = 'Bruno';
vm.runInContext('atualizarDashboard()', dashboard);
assert.equal(elements.get('kpi-total-visitas').innerHTML, '0');
assert.equal(elements.get('kpi-meta-mensal').innerHTML, '10');
console.log('OK: métricas gerais, panorama, status, legado e supervisor sem planejamento.');
