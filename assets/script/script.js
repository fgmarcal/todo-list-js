let addTask = document.getElementById("list-table");
let inputValue = document.getElementById("add-task");
let buttonHandler = document.getElementById("btn");

const isAlphaNum = /^[a-zA-Z0-9() ]+$/;

inputValue.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        clickMe();}
});

buttonHandler.addEventListener("click", clickMe);

function clickMe(){
    if(inputValue.value ===""){
        alert("Nenhuma tarefa para inserir")
    }
    else if(!inputValue.value.match(isAlphaNum)){
        alert("É permitido inserir apenas letras e números");
    }
    else{
        let listValue = `<li class="todo">
                    <input type="checkbox" class="checkbox">
                    <p class="task">${inputValue.value}</p>
                    </li>`;
        addTask.innerHTML += listValue;
        inputValue.value = "";
        inputValue.focus();
    }
}


