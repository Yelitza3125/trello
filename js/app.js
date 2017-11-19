window.addEventListener('load', function(event) {

  var insertList = document.getElementById('insert-list');
  var formContainer = document.getElementById('form-container');
  var listContainer = document.getElementById('list-container');
  var textAreaContainer = document.getElementById('textarea-container');

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
    input.setAttribute('autofocus', true);
    var button = document.createElement('button');
    form.appendChild(button);
    button.setAttribute('type', 'submit');
    button.textContent = 'Guardar';
    formContainer.appendChild(form);
    form.classList.add('form-style');
    button.classList.add('button-style');
    input.classList.add('input-style');
    
    // console.log(form);
   
    button.addEventListener('click', function showList(event) {
      if (input.value) {
        var containerList = document.createElement('div');
        var titleList = document.createElement('h5');
        var link = document.createElement('a');
        titleList.textContent = input.value;
        containerList.appendChild(titleList);
        containerList.appendChild(link);
        link.textContent = 'Añadir una tarea';
        listContainer.appendChild(containerList);
        link.setAttribute('href', '#');
        containerList.classList.add('list-container');
        titleList.classList.add('title-list');
        link.classList.add('link');
        form.classList.add('hidden');

        // input.value = '';
        event.preventDefault();
      }; 

      link.addEventListener('click', function textArea() {
        var nameList = document.createElement('h5');
        nameList.textContent = input.value;
        textAreaContainer.appendChild(nameList);  
        var textArea = document.createElement('textarea');
        textArea.setAttribute('rows', '4');
        textArea.setAttribute('type', 'text');
        textArea.setAttribute('resize', 'vertical');
        textAreaContainer.appendChild(textArea);
        var buttonArea = document.createElement('button');
        buttonArea.setAttribute('type', 'submit');
        buttonArea.textContent = 'Añadir';
        textAreaContainer.appendChild(buttonArea);
        


      });
      
    });
  };




});