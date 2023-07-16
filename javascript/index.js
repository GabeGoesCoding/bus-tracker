import { busMap } from './data.js';

// Display all the busses in the database on 'sideNav' bar.
function displaySideNav() {
    const sideNavNode = document.getElementById('sideNav');
    const createBusButton = document.createElement('button');
    createBusButton.setAttribute('id', 'create-bus');
    createBusButton.innerHTML = 'Create Bus';
    createBusButton.addEventListener('click', displayCreateBus)
    sideNavNode.appendChild(createBusButton);
    

    const busIdsArray = Array.from(busMap.keys());
    busIdsArray.forEach(busId => {
        const aNode = document.createElement('a');
        aNode.setAttribute('href', `index.html?busId=${busId}`);
        aNode.innerHTML = `Bus: ${busId}`;
        aNode.addEventListener('click', displayStudents());
        sideNavNode.appendChild(aNode);
    });
}

// Create a list item for each student and render it on the page.
function displayStudents() {
    const bus = getBusFromParams();
    displayBusCapacity(bus);
    // remove 'bus-display' content
    document.getElementById('bus-display').innerHTML = "";
    // for each student, display name, status, and create a button to track state.
    bus.students.forEach(student => {
        const buttonNode = document.createElement('button')
        var studentStatus = student.isPresent ? "here" : "not here";
        buttonNode.innerHTML = student.isPresent ? "Mark as absent" : "Mark as present"; 
        buttonNode.addEventListener('click', () => {
            if (student.isPresent) {
                student.markAbsent();
            } else {
                student.markPresent();
            }
            displayStudents();
        });
        const pNode = document.createElement('p'); 
        pNode.innerHTML += `${student.name} is ${studentStatus} `;
        pNode.appendChild(buttonNode);

        // add new paragraph for each student
        document.getElementById("bus-display").appendChild(pNode);
    });
}

// updates the bus capacity and displays it on the page
function displayBusCapacity(bus) {
    bus.updateCapacity();
    document.getElementById('bus-capacity').innerHTML = bus.capacity.toUpperCase();
}

// graps a bus from the busMap by using the busId params
function getBusFromParams() {
    // TO DO: displayStudents is automically rendering for the first bus
    // When there are no search Params, then we will access the first bus with busId: 501
    if (window.location.search === '') {
        return busMap.get('501');
    } else {
    var urlParams = new URLSearchParams(window.location.search);
    var currentBusId = urlParams.get('busId');
    return busMap.get(currentBusId); 
    }
}

function displayCreateBus() {
    document.getElementById('bus-display').innerHTML = "";
    document.getElementById('bus-capacity').innerHTML = "";

    const createBusForm = document.getElementById('create-bus');
    document.createElement('input');

    } 

    // function createBus(busId, driver) {
        // const newBus = new Bus(busId, driver);
        // busses.push(newBus);
    // }

    // function createStudent(busId, name) {
        // const newStudent = new Student(name);
        // let currentBus = new Bus();
        // busses.forEach(bus => {
            // if (bus.busId == busId) {
                // currentBus = bus;
            // }
        // });
        // currentBus.addStudent(newStudent);
    // }
     
    // function createStudentWithBusObject(bus, name) {
        // const newStudent = new Student(name);
        // bus.addStudent(newStudent);
    // }

displaySideNav();