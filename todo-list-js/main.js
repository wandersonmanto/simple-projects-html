console.log("javascript started");


document.querySelector("#push").onclick = function () {
  const task = document.querySelector("#newtask input").value;

  if (task.length == 0) {
    alert("Digite uma tarefa!");

  } else {
    document.querySelector("#tasks").style.display = "block";
    document.querySelector("#tasks").innerHTML += `
    <div class='task'
      <span id='task-name'>
        ${document.querySelector("#newtask input").value}
      </span>
      <button class="delete">
        <i class="far fa-trash-alt">-</i>
      </button>
    </div>
  `;

    let currentTask = document.querySelectorAll(".delete");
    for (let i = 0; i < currentTask.length; i++) {
      currentTask[i].onclick = function() {
        this.parentNode.remove();
      };
    }

  }
};

document.querySelector(".delete").onclick = function () {
  console.log('clicking delete')
}
