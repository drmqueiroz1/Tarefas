// Função para salvar a lista no localStorage
function saveList() {
  const listItems = [];
  const items = document.querySelectorAll('#myUL li');
  items.forEach(item => {
    listItems.push({
      text: item.firstChild.textContent,
      checked: item.classList.contains('checked')
    });
  });
  localStorage.setItem('myList', JSON.stringify(listItems));
}

// Função para carregar a lista do localStorage
function loadList() {
  const savedList = JSON.parse(localStorage.getItem('myList'));
  if (!savedList) return;

  savedList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.text;
    if (item.checked) {
      li.classList.add('checked');
    }

    const span = document.createElement('SPAN');
    const txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

   span.onclick = function() {
  var div = this.parentElement;
  div.remove(); // remove o elemento do DOM
  saveList();
};

    document.getElementById('myUL').appendChild(li);
  });
}

// Evento para marcar/desmarcar itens e salvar a lista
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    saveList();
  }
}, false);

// Função para criar um novo item
function newElement() {
  var inputValue = document.getElementById("myInput").value;
  if (inputValue === '') {
    alert("You must write something!");
    return;
  }

  var li = document.createElement("li");
  li.textContent = inputValue;

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

span.onclick = function() {
  var div = this.parentElement;
  div.remove(); // remove o elemento do DOM
  saveList();
};

  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = "";

  saveList();
}

// Carrega a lista ao iniciar a página
window.onload = function() {
  loadList();
};