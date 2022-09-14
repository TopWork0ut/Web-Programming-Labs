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

const form = document.getElementById("add_zoo_block-left");

let zooArray = [];
let zooNames = new Set();
let zooArrayTemp = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newZoo = {
        name: `${nameInput.value }`,
        countOfAnimals: `${countOfAnimals.value}`,
        countOfVisitors: `${countOfVisitors.value}`
    };
    
    if(zooNames.has(nameInput.value)){
        nameInput.setCustomValidity('This zoo is alredy in the list of zoos'); 
    } else {
        if(nameInput.value.trim().length === 0){}
        else {
            addZoo(newZoo);
            zooNames.add(nameInput.value );
            nameInput.setCustomValidity('');
            nameInput.value = "";
            countOfAnimals.value = "";
            countOfVisitors.value = "";
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
        element.innerHTML += `<ul  margin-bottom: 20px; id="ul_zoo"  ">
                                    <li style="width:30px;" class="li_zoo">${item.name}</li> 
                                    <li style="position: relative; left: 30px;">${item.countOfVisitors}</li>  
                                    <li style="position: relative; left: 90px;">${item.countOfAnimals}</li>
                                    <li style="position: relative; left: 80px;">
                                        <img src="assets/edit-icon.png" onclick="update(this)" > </img>
                                    </li>
                                    <li style="position: relative; left: 20px;">
                                        <img src="assets/delete-icon.png" onclick="remove(this)"> </img>
                                    </li>
                                </ul>`;  
        main.appendChild(element);
    });
    
}

function remove(el) {
    let element = el;
    const parent = element.parentElement.parentElement;


    let obj = zooArray.find(item => item.name === parent.firstElementChild.textContent);
    const indexArray = zooArray.indexOf(obj);
    zooArray.splice(indexArray,1);

    zooNames.delete(parent.firstElementChild.textContent);

    
    parent.remove();
    nameInput.setCustomValidity('');

    for(var i=0; i<zooArray.length; i++){
        console.log(zooArray[i]);
    }
}

function update(el){
    let element = el;
    const parent = element.parentElement.parentElement;
    nameInput.value = parent.children[0].textContent;
    countOfVisitors.value = parent.children[1].textContent;
    console.log(parent.children[1].textContent);
    console.log(parent.children[2].textContent);
    countOfAnimals.value = parent.children[2].textContent;


    remove(element);
}

sortByCountOfVisitorsButton.addEventListener('click', sortByCountOfVisitors);
sortByCountOfAnimalsButton.addEventListener('click', sortByCountOfAnimals);
calculateSumButton.addEventListener('click', calculateSum);
findButton.addEventListener('click', findZooByName);
cancelButton.addEventListener('click', cancel);