const formOption = document.querySelector('form.form_fuel_options');
const divAddOption = document.querySelector('div.options_list');
const listOptions = document.getElementsByClassName('option');
const inputOptionName = document.querySelector('input.optionName');
const inputOptionCost = document.querySelector('input.optionCost');

const optionNameList = [];
const optionCostList = [];

const addNewOption = (e) => {
  e.preventDefault();
    const optionName = inputOptionName.value;
    const optionCost = inputOptionCost.value;
    const newOption = optionCost + optionName;
    if(newOption === "") return; 

    const addNewOption = document.createElement('div');
    addNewOption.innerHTML = `<div class="option"><button class="deleteOption_btn">X</button><p> ${optionName}</p><span class="cost">${optionCost}</span></div>`;

    divAddOption.appendChild(addNewOption);
    inputOptionCost.value = "";
    inputOptionName.value = "";

    addNewOption.querySelector('.deleteOption_btn').addEventListener
    ('click', removeAddTask)

    optionNameList.push(optionName);
    optionCostList.push(optionCost);
}

formOption.addEventListener('submit', addNewOption)

const removeAddOption = (e) => {
  e.target.parentNode.remove();
  const index = e.target.parentNode.dataset.key;
  optionNameList.splice(index, 1),
  optionCostList.splice(index, 1)
  renderList();
}

const renderOptionList = () => {
  divAddOption.textContent = "";
  optionNameList.forEach((toDoElement, key) => {
   toDoElement.dataset.key = key;
   divAddOption.appendChild(toDoElement);
  })
  optionCostList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    divAddOption.appendChild(toDoElement);
   })
 }
 formTasks.addEventListener('submit', addTask)


