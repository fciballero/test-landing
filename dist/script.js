'use strict';
const coffees = {
  amanecer: { name: 'Amanecer', notes: 'Chocolate, panela y almendra. Una taza suave para empezar de a poco.', recipe: 'Ritual sugerido: filtro. Usá 15 g de café con molienda media y 250 ml de agua a unos 93 °C. Verté de a poco y probá ajustar a tu gusto.' },
  sobremesa: { name: 'Sobremesa', notes: 'Caramelo, cacao y nuez. Una excusa para alargar la conversación.', recipe: 'Ritual sugerido: prensa francesa. Usá 15 g de café con molienda gruesa y 250 ml de agua caliente. Dejá infusionar 4 minutos y presioná suavemente.' },
  domingo: { name: 'Domingo', notes: 'Frutos rojos, cítricos y miel. Un perfil imaginado para los días curiosos.', recipe: 'Ritual sugerido: café frío. Mezclá 30 g de café con molienda gruesa y 300 ml de agua. Refrigerá de 12 a 16 horas, filtrá y serví con hielo; diluí a gusto.' }
};
const dialog = document.querySelector('#detail');
function showCoffee(key) {
  const coffee = coffees[key];
  document.querySelector('#detail-title').textContent = coffee.name;
  document.querySelector('#detail-notes').textContent = coffee.notes;
  document.querySelector('#detail-recipe').textContent = coffee.recipe;
  dialog.showModal();
}
document.querySelectorAll('[data-coffee]').forEach(button => button.addEventListener('click', () => showCoffee(button.dataset.coffee)));
document.querySelector('#random').addEventListener('click', () => { const keys = Object.keys(coffees); showCoffee(keys[Math.floor(Math.random() * keys.length)]); });
document.querySelectorAll('.close, .close-action').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
