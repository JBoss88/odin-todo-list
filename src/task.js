export const taskDom = () => {
    const container = document.querySelector('.container');

    const centerTaskContainer = document.createElement('div');
    centerTaskContainer.classList.add('center-task-container')

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const inputTitle = document.createElement('input');
    inputTitle.classList.add('input-title');
    inputTitle.placeholder = "Replace lightbulb tomorrow at 3pm";
    
    const taskDescription = document.createElement('input');
    taskDescription.classList.add('task-description');
    taskDescription.placeholder = "Description";

    const taskDate = document.createElement('input')
    taskDate.classList.add('task-date');
    taskDate.type = "date";

    taskContainer.append(inputTitle, taskDescription, taskDate);
    centerTaskContainer.append(taskContainer);
    container.append(centerTaskContainer);
}