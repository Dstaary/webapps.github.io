const formOption = document.querySelector('form.form_fuel_options');
const divAddOption = document.querySelector('div.options_list');
const listOptions = document.getElementsByClassName('option');
const inputOptionName = document.querySelector('input.optionName');
const inputOptionCost = document.querySelector('input.optionCost');

let optionNameList = [];
let optionCostList = [];

const addNewOption = (e) => {
  e.preventDefault();
    const optionName = inputOptionName.value;
    const optionCost = inputOptionCost.value;
    const newOption = optionCost + optionName;
    if(newOption === "") return; 

    const addNewOption = document.createElement('div');
    addNewOption.innerHTML = `<div class="option"><p> ${optionName}</p><span class="cost">${optionCost}</span></div>`;

    
    optionNameList.push(optionName);
    optionCostList.push(optionCost);
    
    divAddOption.appendChild(addNewOption);
    inputOptionCost.value = "";
    inputOptionName.value = "";

    // addNewOption.querySelector('.deleteOption_btn').addEventListener
    // ('click', removeAddTask)


}

formOption.addEventListener('submit', addNewOption)

// const removeAddOption = (e) => {
//   e.target.parentNode.remove();
//   const index = e.target.parentNode.dataset.key;
//   optionNameList.splice(index, 1);
//   optionCostList.splice(index, 1);
//   renderOptionList();
// }

// const renderOptionList = () => {
//   divAddOption.textContent = "";
//   optionNameList.forEach((optionNameElement, key) => {
//     optionNameElement.dataset.key = key;
//    divAddOption.appendChild(optionNameElement);
//   })
//   optionCostList.forEach((optionCostElement, key) => {
//     optionCostElement.dataset.key = key;
//     divAddOption.appendChild(optionCostElement);
//    })
//  }
//  formTasks.addEventListener('submit', addTask)

 clearAll.addEventListener('click', () => {
  dystans.value = "";
  spalanie.value = "";
  cenaPaliwa.value = "";
  iloscOsob.value = "";
  newSpan.innerHTML = "";
  divAddOption.innerHTML = "";
  optionCostList = [];
  optionNameList = [];
})
