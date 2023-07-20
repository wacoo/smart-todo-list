import './style.css';

const root = document.getElementById('parent');
const listTodo = [
  {
    description: 'Wake up at 8:00 AM',
    completed: false,
    index: 0,
  },
  {
    description: 'Wash my face and brush my teeth.',
    completed: false,
    index: 1,
  },
  {
    description: 'Eat breakfast',
    completed: false,
    index: 2,
  },
  {
    description: 'Prepare for Microverse class',
    completed: false,
    index: 0,
  },
];

const createElement = (type, cls, id) => {
  const element = document.createElement(type);

  if (cls) {
    for (let i = 0; i < cls.length; i += 1) {
      element.classList.add(cls[i]);
    }
  }
  if (id) {
    element.id = id;
  }
  return element;
};

const appendElement = (child, parent) => {
  parent.appendChild(child);
};

const populatePage = () => {
  const h3 = createElement('h3', null, null);
  const head = createElement('div', ['head'], null);
  const ul = createElement('ul', null, null);
  const refresh = createElement('i', ['fa', 'fa-refresh'], null);
  const divInput = createElement('div', ['div_input'], null);
  const input = createElement('input', ['input'], null);
  const divClearAll = createElement('div', ['div_clear_all'], null);
  const btnClear = createElement('button', null, null);
  h3.innerHTML = 'Today\'s Todo';
  input.setAttribute('placeholder', 'Add your list...');

  appendElement(h3, head);
  appendElement(refresh, head);
  appendElement(input, divInput);
  appendElement(head, root);
  appendElement(divInput, root);
  for (let i = 0; i < listTodo.length; i += 1) {
    const li = createElement('li', null, null);
    li.innerHTML = `<input type="checkbox"><span>${listTodo[i].description}</span><i class="fa fa-ellipsis-v"></i>`;
    appendElement(li, ul);
  }
  appendElement(ul, root);

  btnClear.innerHTML = 'Clear all completed';
  appendElement(btnClear, divClearAll);
  appendElement(divClearAll, root);
};

populatePage();