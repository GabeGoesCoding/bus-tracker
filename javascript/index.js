import { busMap } from './data.js';

function getBusIds() {
    return Array.from(busMap.keys());
}

function displaySideNavBarWithBusIds() {
    const navBar = document.getElementById('sideNav');
    navBar.innerHTML = "";
    getBusIds().forEach( busId => {
        const busButton = document.createElement('button');
        busButton.setAttribute('bus-id', busId);
        busButton.innerHTML = `Bus #${busId}`;
        busButton.addEventListener('click', displayStudents);
        navBar.appendChild(busButton);
    });
}

function displayStudents(event) {

    // get bus from search params
    const bus = grabBusByBusIdFromEvent(event);
    // reset students-list
    const studentList = document.getElementById('students-list')
    studentList.innerHTML = "";

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

        pElem.appendChild(bElem);
        studentList.appendChild(pElem);
    });
}

function displayBusCapacity(event) {
    const bus = grabBusByBusIdFromEvent(event);
    document.getElementById('bus-capacity').innerHTML = bus.capacity.toUpperCase();
}

function grabBusByBusIdFromEvent(event) {
    // grab busId from search params
    const busId = event.target.getAttribute('bus-id');

    // grab bus from busId
    return busMap.get(busId);
}

displaySideNavBarWithBusIds();
