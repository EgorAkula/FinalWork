const list = document.querySelector('#list');
const myButton = document.querySelector('#myButton');

const nameInput = document.querySelector('#nameInput');
const nameInput2 = document.querySelector('#nameInput2');
const nameInput3 = document.querySelector('#nameInput3');
let sum = 0;

myButton.addEventListener('click', addTask);

myButton.addEventListener('keyup', (event)=> {
    if(event.key === 'enter') {
        addTask();
        addPrice();
    }
})

function addTask() {
    if(nameInput.value != '') {

        const modal = document.querySelector('#modal');
        const delBtnModal = document.querySelector('#del');
        const cancel = document.querySelector('#cancel');
        
        const newItem = document.createElement('li');


        newItem.classList.add('item');
        newItem.innerHTML = `<span>Название продукта: "${nameInput.value}", цена: "${nameInput2.value}"<span>`;
        sum+= +nameInput2.value;
        console.log(sum);        

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить'


        list.appendChild(newItem);
        newItem.appendChild(deleteButton);

        deleteButton.addEventListener('click', (event)=> {
            modal.style.display = 'block';

            function removeTask() {
                list.removeChild(newItem);
                modal.style.display = 'none';
            }
            delBtnModal.addEventListener('click', removeTask);

            cancel.addEventListener('click', ()=> {
                modal.style.display = 'none';
                delBtnModal.removeEventListener('click', removeTask);
            })
        })

        nameInput.value = '';
    }else {
        alert('Заполните поле!');
    }
}

function addPrice() {

}