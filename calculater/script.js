function insert(value) {
        document.querySelector('.input').value += value;
    }

function clearInput() {
        let inputElement = document.querySelector('.input');
        inputElement.value = '';
    }
function equal(){
        let exp = document.querySelector('.input').value; 
        document.querySelector('.input').value = eval(exp);
}