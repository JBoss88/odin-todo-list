// const changeTaskVisibility = (() => {
//     const taskBtn = document.querySelector('.add-task');
//     const cancelBtn = document.querySelector('.cancel');

//     taskBtn.addEventListener('click', () => {
//         document.querySelector('.center-task-container').style.visibility = '';
//     })

//     cancelBtn.addEventListener('click', () => {
//         document.querySelector('.center-task-container').style.visibility = 'hidden';
//     })
// })();

// const submitForm = (() => {
//     function TaskData(title, description, dueDate, priorityLevel) {
//         this.title = title;
//         this.description = description;
//         this.dueDate = dueDate;
//         this.priorityLevel = priorityLevel;
//     }

//     const form = document.querySelector('#myForm');

//     form.addEventListener('submit', (e) => {
//         resetTaskData();
//         document.querySelector('.center-task-container').style.visibility = 'hidden';
//         e.preventDefault();

//         let title = document.querySelector('.task-title').value;
//         let description = document.querySelector('.task-description').value;
//         let dueDate = document.querySelector('.task-date').value;
//         let priorityLevel = document.querySelector('.task-priority').value;
        
//         const newObj = new TaskData(title, description, dueDate, priorityLevel);

//         const resetTaskData = () => {
//             title = '';
//             description = '';
//             dueDate = '';
//             priorityLevel = '';
//         }
//     });
// })();
