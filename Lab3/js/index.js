const main = document.getElementById('main');
const animalsSumDisplay = document.getElementById('display_animals_sum');
const addZooBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const sortByCountOfVisitorsButton = document.getElementById('sort_by_visitors');
const sortByCountOfAnimalsButton = document.getElementById('sort_by_animals');
const calculateSumButton = document.getElementById('calculate_sum');

const findInput = document.getElementById("find_by_name");
const findButton = document.getElementById("find_button");
const cancelButton = document.getElementById("cancel_button");
const nameInput = document.getElementById("name_input");
const countOfVisitors = document.getElementById("count_of_visitors_input");
const countOfAnimals = document.getElementById("count_of_animals_input");

let zooArray = [];
let zooArrayTemp = [];

function createZoo() {
  const newZoo = {
    name: `${nameInput.value }`,
    countOfAnimals: `${countOfAnimals.value}`,
    countOfVisitors: `${countOfVisitors.value}`
  };
  
  addZoo(newZoo);
}

function sortByCountOfVisitors() {
    main.innerHTML = '';
    zooArray.sort((a, b) => b.countOfVisitors - a.countOfVisitors);

    updateDOM(zooArray);
}

function sortByCountOfAnimals() {
    main.innerHTML = '';
    zooArray.sort((a, b) => b.countOfAnimals - a.countOfAnimals);
    updateDOM(zooArray);
}

function findZooByName(){
    zooArrayTemp = zooArray.filter(
        (zoo) => zoo.name.search(findInput.value) !== -1);

    updateDOM(zooArrayTemp);
}

function cancel() {
    document.getElementById("find_by_name").value = "";
    updateDOM(zooArray);
}


function calculateSum() {
    const animalsSum = zooArray.reduce((acc, user) => (acc += parseInt(user.countOfAnimals)), 0);
    const vistitorsSum = zooArray.reduce((acc, user) => (acc += parseInt(user.countOfVisitors)), 0);
    const sum_ul = document.getElementById('sum_ul');
    sum_ul.innerHTML = '';

    let html = `<li style="margin-right:60px;">Visitors summary: ${vistitorsSum}  </li> 
    <li style="margin-right:60px;">Animals summary: ${animalsSum} </li>`;

    sum_ul.insertAdjacentHTML("afterbegin", html);
}

function addZoo(obj) {
    zooArray.push(obj);
    updateDOM(zooArray);
}


function updateDOM(providedZoos) {
    main.innerHTML = '';

    const element = document.createElement('div');
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    providedZoos.forEach(item => {
      element.innerHTML += `<ul style="display:flex; margin-bottom: 20px;"><li style="margin-right:60px;">${item.name}  </li> 
      <li style="margin-right:166px;">${item.countOfVisitors} </li>  
      <li">${item.countOfAnimals}</li></ul>`;  
      main.appendChild(element);
    });
}


addZooBtn.addEventListener('click', createZoo);
sortByCountOfVisitorsButton.addEventListener('click', sortByCountOfVisitors);
sortByCountOfAnimalsButton.addEventListener('click', sortByCountOfAnimals);
calculateSumButton.addEventListener('click', calculateSum);
findButton.addEventListener('click', findZooByName);
cancelButton.addEventListener('click', cancel);
