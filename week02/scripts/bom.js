const input = document.querySelector('#favchap');
const button = document.getElementById('submit');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() === '') {
        input.setAttribute('placeholder', 'Please enter something.');
        input.focus();
    } else {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = '';
        input.focus();

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
    }
});