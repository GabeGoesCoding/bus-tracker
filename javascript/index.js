import { busMap } from './data.js';

// Landing page will shoe all the available busIds in the nav bar, and the default page
function displayLandingPage() {
    // pull all available busses from busMap
    const busIdsArray = Array.from(busMap.keys());

    const sideNavNode = document.getElementById('sideNav');

    // for each busId create a button in the sideNav bar
    busIdsArray.forEach(busId => {
        const buttonNode = document.createElement('button');
        buttonNode.setAttribute('bus-id', busId);
        buttonNode.innerHTML = `Bus: ${busId}`;
        buttonNode.addEventListener('click', displayStudents);
        sideNavNode.appendChild(buttonNode);
    });

}

// // Display all the busses in the database on 'sideNav' bar.
// function displaySideNav() {
//     const sideNavNode = document.getElementById('sideNav');
//     const createBusButton = document.createElement('button');
//     createBusButton.setAttribute('id', 'create-bus');
//     createBusButton.innerHTML = 'Create Bus';
//     createBusButton.addEventListener('click', displayCreateBus)
//     sideNavNode.appendChild(createBusButton);
    

//     const busIdsArray = Array.from(busMap.keys());
//     busIdsArray.forEach(busId => {
//         const aNode = document.createElement('a');
//         aNode.setAttribute('href', `index.html?busId=${busId}`);
//         aNode.innerHTML = `Bus: ${busId}`;
//         aNode.addEventListener('click', displayStudents());
//         sideNavNode.appendChild(aNode);
//     });
// }

// Create a list item for each student and render it on the page.
function displayStudents() {
    const busId = event.target.getAttribute('bus-id');
    const bus = busMap.get(busId);

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
function getBusFromParams(busId) {
    // TO DO: displayStudents is automically rendering for the first bus
    // When there are no search Params, then we will access the first bus with busId: 501
    
    return busMap.get(currentBusId); 
    }

// function displayCreateBus() {
//     document.getElementById('bus-display').innerHTML = "";
//     document.getElementById('bus-capacity').innerHTML = "";

//     const createBusForm = document.getElementById('create-bus');
//     document.createElement('input');


// displaySideNav();
displayLandingPage();