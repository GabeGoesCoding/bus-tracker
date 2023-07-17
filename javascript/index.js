import { Student } from './models/student.js';
import { Bus } from './models/bus.js';

const busMap = new Map();

const mockBus1 = new Bus("501", "Mrs. Puff");
busMap.set("501", mockBus1);
mockBus1.addStudent(new Student("Squidward"));
mockBus1.addStudent(new Student("Spongebob"));
mockBus1.addStudent(new Student("Patrick"));
mockBus1.addStudent(new Student("Eugene"));
mockBus1.addStudent(new Student("Sandy"));
mockBus1.addStudent(new Student("Gary"));


const mockBus2 = new Bus("426", "Roshi");
busMap.set("426", mockBus2);
mockBus2.addStudent(new Student("Goku"));
mockBus2.addStudent(new Student("Piccolo"));
mockBus2.addStudent(new Student("Kirllin"));
mockBus2.addStudent(new Student("Gohan"));
mockBus2.addStudent(new Student("Vegeta"));
mockBus2.addStudent(new Student("Trunks"));

const mockBus3 = new Bus("525", "Yoda");
busMap.set("525", mockBus3);
mockBus3.addStudent(new Student("Han Solo"));
mockBus3.addStudent(new Student("Ben"));
mockBus3.addStudent(new Student("Leah"));
mockBus3.addStudent(new Student("Luke"));
mockBus3.addStudent(new Student("Darth Vader"));
mockBus3.addStudent(new Student("Chewbacca"));

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

function displayBusCapacity() {
    const bus = grabBusFromBusIdFromSearchParams();
    document.getElementById('bus-capacity').innerHTML = bus.capacity.toUpperCase();
}

function grabBusByBusIdFromEvent(event) {
    // grab busId from search params
    const busId = event.target.getAttribute('bus-id');

    
    // grab bus from busId
    return busMap.get(busId);
}

displaySideNavBarWithBusIds();
