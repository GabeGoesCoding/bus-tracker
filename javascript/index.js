import { busMap } from './data.js';
import { Bus } from './models/bus.js';
import { Student } from './models/student.js';


// update/display the bus ids in the side nav bar
function displayNavBar() {
    tearDownNavBar();
    addCreateButtonForBussesToNavBar();
    renderBussesInNavBar();
}

function tearDownNavBar() {
    const navBar = document.getElementById('nav-bar');
    navBar.innerHTML = "";
}

function addCreateButtonForBussesToNavBar() {
    const navBar = document.getElementById('nav-bar');
    const createBusButtonElem = document.createElement('button');
    createBusButtonElem.setAttribute('id','create-bus');
    createBusButtonElem.innerHTML = "Create New Bus";
    createBusButtonElem.addEventListener('click', openCreateBusFormOnMainBusInfo);
    navBar.appendChild(createBusButtonElem);
}

function openCreateBusFormOnMainBusInfo() {
    groupTearDownOfBusInfo();

    document.getElementById('bus-info-header').innerHTML = "Create New Bus";

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

    tearDownCreateBusForm();
    displayNavBar();
}

function renderBussesInNavBar() {
    const navBar = document.getElementById('nav-bar');
    const busses = Array.from(busMap.values());
    
    busses.forEach( bus => {
        const busButton = document.createElement('button');
        busButton.setAttribute('bus-id', bus.busId);
        busButton.innerHTML = `Bus #${bus.busId}`;
        if (bus.capacity === "full") {
            busButton.setAttribute('class', 'full-bus-button');
        }
        if (bus.capacity === "partial") {
            busButton.setAttribute('class', 'partial-bus-button');
        }
        if (bus.capacity === "empty") {
            busButton.setAttribute('class', 'empty-bus-button');
        }
        busButton.addEventListener('click', displayBusInfo);
        navBar.appendChild(busButton);
    });
}

// create and array of all the bus ids in the data store
function getBusIds() {
    return Array.from(busMap.keys());``
}

// TODO: display button to add students
// TODO: display button to remove students
// tear down the previous bus information, and display updated information from the data store
function displayBusInfo() {
    groupTearDownOfBusInfo()
    const busId = event.target.getAttribute('bus-id');
    renderBusInfoHeader(busId);
    addAddStudentButtonToBusInfo(busId);
    // addRemoveStudentButtonToBusInfo()
    renderBusCapacityToBusInfo(busId);
    renderStudentListToBusInfo(busId);
}

function groupTearDownOfBusInfo() {
    tearDownBusInfoHeader();
    tearDownCreateBusForm();
    tearDownAddStudentForm();
    tearDownAddStudentButtonToBusInfo();
    // tearDownRemoveStudentButtonToBusInfo();
    tearDownBusCapacityToBusInfo();
    tearDownStudentListToBusInfo();
    
}

function tearDownBusInfoHeader() {
    document.getElementById('bus-info-header').innerHTML = "";
}

function tearDownCreateBusForm() {
    document.getElementById('create-bus-form').innerHTML = "";
}

function tearDownAddStudentForm() {
    document.getElementById('add-student-form').innerHTML = "";
}

function tearDownAddStudentButtonToBusInfo() {
    document.getElementById('button-container').innerHTML = "";
}

function tearDownRemoveStudentButtonToBusInfo() {

}

function tearDownBusCapacityToBusInfo() {
    document.getElementById('bus-capacity').innerHTML = "";
}

function tearDownStudentListToBusInfo() {
    document.getElementById('students-list').innerHTML = "";
}


function renderBusInfoHeader(busId) {
    document.getElementById('bus-info-header').innerHTML = `Tracking Bus #${busId}`;
}

function addAddStudentButtonToBusInfo(busId) {
    const buttonContainer = document.getElementById('button-container');
    const addStudentButtonElem = document.createElement('button');
    addStudentButtonElem.setAttribute('bus-id', busId);
    addStudentButtonElem.innerHTML = `Add Student to Bus #${busId}`;
    addStudentButtonElem.addEventListener('click', openAddStudentFormOnMainBusInfo);
    buttonContainer.appendChild(addStudentButtonElem);
}

// TODO: Tear down main bus info to render a form for adding a student
function openAddStudentFormOnMainBusInfo() {
    groupTearDownOfBusInfo();

    document.getElementById('bus-info-header').innerHTML = "Add New Student";

    // render a new form
    const formElem = document.getElementById('add-student-form');
    let formHTML = `
    <label for="student-name">Student Name:</label>
    <input type="text" name="student-name" id="student-name"><br><br>
    <button type="submit" id="add-student-button">Submit</button>
    `;
    formElem.innerHTML = formHTML;

    // prepare form for user entry
    const buttonElem = document.getElementById('add-student-button');
    const busId = event.target.getAttribute('bus-id');
    buttonElem.setAttribute('bus-id', busId);
    buttonElem.addEventListener('click', addStudent);
}

function addStudent(event) {
    // After form is submitted, do not refresh the page.
    event.preventDefault();

    // Grab the form information from the event    
    const form = event.target.form;

    // Using the form, grab the inputs with querySelector
    const studentNameInput = form.querySelector('#student-name');

    // Extract the value from the inputs
    const studentName = studentNameInput.value;

    // Grab a bus with busId and add a new student to the map
    const busId = event.target.getAttribute('bus-id');
    const bus = busMap.get(busId);
    bus.addStudent(new Student(studentName));

    alert(`Success: Bus #${busId} has a new student: ${studentName}`);

    tearDownAddStudentForm();
    displayNavBar();
}

function addRemoveStudentButtonToBudInfo(busId) {
}

function renderBusCapacityToBusInfo(busId) {
    const bus = busMap.get(busId);
    document.getElementById('bus-capacity').innerHTML = bus.capacity.toUpperCase();
}

function renderStudentListToBusInfo(busId) {
    const studentList = document.getElementById('students-list');
    const bus = busMap.get(busId);
    bus.students.forEach(student => {
        const pElem = document.createElement('p');
        pElem.innerHTML = `${student.name}, ${student.isPresent} `;
        const bElem = document.createElement('button');
        bElem.setAttribute('bus-id', busId);
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
            displayNavBar();
            displayBusInfo();
        });
        
        // append button to student info
        pElem.appendChild(bElem);

        // append student info to student list
        studentList.appendChild(pElem);
    });
}   

// // Function to convert a Map to an array of key-value pairs
// function mapToArray(map) {
//   return Array.from(map.entries());
// }

// // Function to convert an array of key-value pairs to a Map
// function arrayToMap(array) {
//   return new Map(array);
// }

// function setBusMapInLocalStorage(busMap) {
//     const serializedBusMap = JSON.stringify(mapToArray(busMap));
//     localStorage.setItem('busMap', serializedBusMap)
// }

// function getBusMapFromLocalStorage() {
//     const serializedBusMapFromLocalStorage = localStorage.getItem('busMap');
//     const deserializedBusMap = arrayToMap(JSON.parse(serializedBusMapFromLocalStorage))
//     return deserializedBusMap;
// }

function getBusMapFromJavaScript() {
    return busMap;
}

displayNavBar();
