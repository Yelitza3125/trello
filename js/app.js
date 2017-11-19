window.addEventListener('load', function(event) {

  var insertList = document.getElementById('insert-list');
  var formContainer = document.getElementById('form-container');

  insertList.addEventListener('click', function hideInsert(event) {
    insertList.classList.remove('insert');
    insertList.classList.add('hidden');
    showForm();
  });
  
  function showForm(event) {
    var form = document.createElement('form');
    form.setAttribute('method', 'get');
    var input = document.createElement('input');
    form.appendChild(input);
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Añadir una lista...');
    var button = document.createElement('button');
    form.appendChild(button);
    button.setAttribute('type', 'submit');
    button.textContent = 'Añadir';
    formContainer.appendChild(form);
    form.classList.add('form-style');
    button.classList.add('button-style');
    
    // console.log(form);
  };
  

});