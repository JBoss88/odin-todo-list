import "./styles.css";
import {createTodos} from "./home.js";
import {taskDom} from "./task.js";

(() => {
    const taskBtn = document.querySelector('.add-task');
    taskBtn.addEventListener('click', () => {
        taskDom();
    })
})();