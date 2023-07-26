const form = document.querySelector('#task-planner');
const input = document.querySelector('#inputList');
const submit = document.querySelector('button');
const list = document.querySelector('#taskList');
const allClear = document.querySelector('#all-clear');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputList = input.value;

    if (input.value == "") {
        alert("enter the task")
        return;
    }

    const newLI = document.createElement('P');
    newLI.innerHTML = `<span class="icon"><i class="fas fa-arrow-right"></i></span>
    <span id="taskName">${input.value}</span> <button class="delete-btn button is-small"><span class="icon is-small"><i class="fa-regular fa-trash-can"></i></span></button>`


    const deleteBtn = newLI.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
        this.parentNode.remove();

    })


    list.append(newLI);

    input.value = "";

})


allClear.addEventListener('click', (e) => {
    list.innerHTML = "";
})




