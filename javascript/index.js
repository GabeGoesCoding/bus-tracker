import { busMap } from './data.js';
import { Bus } from './models/bus.js';

// create and array of all the bus ids in the data store
function getBusIds() {
    return Array.from(busMap.keys());
}

// update/display the bus ids in the side nav bar
function displaySideNavBarWithBusIds() {
    const navBar = document.getElementById('sideNav');
    navBar.innerHTML = "";

    const createBusButtonElem = document.createElement('button');
    createBusButtonElem.setAttribute('id','create-bus');
    createBusButtonElem.innerHTML = "Create New Bus";
    createBusButtonElem.addEventListener('click', renderCreateBusForm);
    navBar.appendChild(createBusButtonElem)

    getBusIds().forEach( busId => {
        const busButton = document.createElement('button');
        busButton.setAttribute('bus-id', busId);
        busButton.innerHTML = `Bus #${busId}`;
        busButton.addEventListener('click', displayStudents);
        navBar.appendChild(busButton);
    });
}

// TODO: display button to add students
// TODO: display button to remove students
// tear down the previous bus information, and display updated information from the data store
function displayStudents(event) {

    // get bus from event attribute: 'bus-id'
    const bus = grabBusByBusIdFromEvent(event);
    
    // reset students-list
    tearDownStudentsList();
    const studentList = document.getElementById('students-list');

    // tear down bus form
    tearDownCreateBusForm();

    // tear down bus capacity
    tearDownBusCapacity();

    // display bus capacity
    displayBusCapacity(event);

    // list students from bus
    bus.students.forEach( student => {
        const pElem = document.createElement('p');
        pElem.innerHTML = `${student.name}, ${student.isPresent} `;
        
        const bElem = document.createElement('button');
        bElem.innerHTML = student.isPresent ? "Mark Absent" : "Mark Present";
        bElem.addEventListener('click', () => {
            if (student.isPresent) {
                student.markAbsent();
                bElem.innerHTML = "Mark Present";
            } else {
                student.markPresent();
                bElem.innerHTML = "Mark Absent";
            }
            bus.updateCapacity();
            displayStudents(event);
        });
        
        // append button to student info
        pElem.appendChild(bElem);

        // append student info to student list
        studentList.appendChild(pElem);
    });
}

function grabBusByBusIdFromEvent(event) {
    // grab busId from 'bus-id' on the event
    const busId = event.target.getAttribute('bus-id');

    // grab bus with busId
    return busMap.get(busId);
}

function displayBusCapacity(event) {
    const bus = grabBusByBusIdFromEvent(event);
    document.getElementById('bus-capacity').innerHTML = bus.capacity.toUpperCase();
}

function tearDownBusCapacity() {
    document.getElementById('bus-capacity').innerHTML = "";
}

function tearDownStudentsList() {
    document.getElementById('students-list').innerHTML = "";
}

function renderCreateBusForm() {
    // remove information about bus
    tearDownBusCapacity();
    tearDownStudentsList();

    // render a new form
    const formElem = document.getElementById('create-bus-form');
    let formHTML = `
    <label for="bus-id">Bus Number:</label>
    <input type="text" name="bus-id" id="bus-id"><br>
    <label for="driver-name">Driver Name:</label>
    <input type="text" name="driver-name" id="driver-name"><br>
    <button type="submit" id="create-bus-button">Submit</button>
    `;
    formElem.innerHTML = formHTML;

    // prepare form for user entry
    const buttonElem = document.getElementById('create-bus-button');
    buttonElem.addEventListener('click', createBus);
}

function tearDownCreateBusForm() {
    document.getElementById('create-bus-form').innerHTML = "";
}

// TODO: Do not allow users to input busIds that are not 3-digits
// TODO: Prevent users from creating duplicate busses
function createBus(event) {
    // After form is submitted, do not refresh the page.
    event.preventDefault();

    // Grab the form information from the event    
    const form = event.target.form;

    // Using the form, grab the inputs with querySelector
    const busIdInput = form.querySelector('#bus-id');
    const driverNameInput = form.querySelector('#driver-name');

    // Extract the value from the inputs
    const busId = busIdInput.value;
    const driverName = driverNameInput.value;

    // create a new Bus object, and set it on the busMap
    const bus = new Bus(busId, driverName);
    busMap.set(busId, bus);

    alert(`Success: Bus #${busId} has been created with ${driverName} driving.`);

    displaySideNavBarWithBusIds();
}

displaySideNavBarWithBusIds();
