const main = document.getElementById('main');
const sortByCountOfVisitorsButton = document.getElementById('sort_by_visitors');
const sortByCountOfAnimalsButton = document.getElementById('sort_by_animals');
const calculateSumButton = document.getElementById('calculate_sum');
const labelFindByName = document.getElementById('label_find_by_name');

const findInput = document.getElementById("find_by_name");
const findButton = document.getElementById("find_button");
const cancelButton = document.getElementById("cancel_button");
const nameInput = document.getElementById("name_input");
const countOfVisitors = document.getElementById("count_of_visitors_input");
const countOfAnimals = document.getElementById("count_of_animals_input");

const form = document.getElementById("add_zoo_block-left");

let zooArray = [];
let zooArrayTemp = [];

import {deleteZoo, getAllZoos, postZoo, updateZoo} from './api.js'

function cleanInputs(){
    nameInput.setCustomValidity('');
    nameInput.value = "";
    countOfAnimals.value = "";
    countOfVisitors.value = ""; 
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newZoo = {
        name: `${nameInput.value }`,
        countOfAnimals: `${countOfAnimals.value}`,
        countOfVisitors: `${countOfVisitors.value}`
    };
    
    if(zooArray.filter(zoo => zoo.name === nameInput.value).length > 0){
        nameInput.setCustomValidity('This zoo is alredy in the list of zoos'); 
    } else {
        if(nameInput.value.trim().length === 0){}
        else {
            let name = newZoo.name;
            let countOfAnimals = newZoo.countOfAnimals;
            let countOfVisitors = newZoo.countOfVisitors;
            console.log(zooArray);
            postZoo({
                name,
                countOfAnimals,
                countOfVisitors,
            }).then(refetchAllZoos).then(console.log);
            updateDOM(zooArray);
            cleanInputs() ;
        }
    }
})

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
    if(labelFindByName.options[labelFindByName.selectedIndex].text == "Find by name"){
        zooArrayTemp = zooArray.filter(
            (zoo) => zoo.name.search(findInput.value) !== -1);
    }
    else if(labelFindByName.options[labelFindByName.selectedIndex].text == "Delete by name"){
        deleteZoo(zooArray.find(zoo => zoo.name == findInput.value).id).then(refetchAllZoos);
    }
    else if(labelFindByName.options[labelFindByName.selectedIndex].text == "Update by name"){
        nameInput.value = zooArray.find(zoo => zoo.name == findInput.value).name;
        countOfVisitors.value = zooArray.find(zoo => zoo.name == findInput.value).countOfVisitors;
        countOfAnimals.value = zooArray.find(zoo => zoo.name == findInput.value).countOfAnimals;
        deleteZoo(zooArray.find(zoo => zoo.name == findInput.value).id).then(refetchAllZoos);
    }

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

function updateDOM(providedZoos) {
    main.innerHTML = '';

    const element = document.createElement('div');
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    providedZoos.forEach(item => {
        element.innerHTML += `<ul  margin-bottom: 20px; id="ul_zoo"  ">
                                    <li style="width:100px;" class="li_zoo">${item.name}</li> 
                                    <li style="position: relative; right:70px">${item.countOfVisitors}</li>  
                                    <li style="position: relative; right:40px">${item.countOfAnimals}</li>
                                </ul>`;  
        main.appendChild(element);
    });
    
}

sortByCountOfVisitorsButton.addEventListener('click', sortByCountOfVisitors);
sortByCountOfAnimalsButton.addEventListener('click', sortByCountOfAnimals);
calculateSumButton.addEventListener('click', calculateSum);
findButton.addEventListener('click', findZooByName);
cancelButton.addEventListener('click', cancel);


const refetchAllZoos = async () => {
    const allZoos = await getAllZoos();

    zooArray = allZoos;

    updateDOM(zooArray);
}

refetchAllZoos();
getAllZoos().then(console.log);
