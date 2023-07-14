// Mocked data for bus1, bus2, and bus3.
const bus1 = {
    busId: '19990501',
    status: "FULL",
    driver: "Mrs. Puff",
    students: [
        { name: "Squidward", isPresent: true },
        { name: "Spongebob", isPresent: true },
        { name: "Patrick", isPresent: true },
        { name: "Eugene", isPresent: true },
        { name: "Sandy", isPresent: true },
        { name: "Gary", isPresent: true },
    ]
}

const bus2 = {
    busId: '19890426',
    status: "PARTIAL",
    driver: "Roshi",
    students: [
        { name: "Goku", isPresent: false },
        { name: "Piccolo", isPresent: false },
        { name: "Krillin", isPresent: true },
        { name: "Gohan", isPresent: true },
        { name: "Vegeta", isPresent: true },
        { name: "Trunks", isPresent: true },
    ]
}

const bus3 = {
    busId: '19770525',
    status: "EMPTY",
    driver: "Yoda",
    students: [
        { name: "Han Solo", isPresent: false },
        { name: "Ben", isPresent: false },
        { name: "Leah", isPresent: false },
        { name: "Luke", isPresent: false },
        { name: "Darth Vader", isPresent: false },
        { name: "Chewbacca", isPresent: false },
    ]
}

const busses = [bus1, bus2, bus3];

// Display all the busses in the database on 'sideNav' bar.
const displaySideNav = (busses) => {
    busses.forEach(bus => {
        const aNode = document.createElement('a');
        aNode.setAttribute('href', `index.html?busId=${bus.busId}`);
        aNode.innerHTML = `Bus: ${bus.busId}`
        aNode.addEventListener('onclick', checkBus());
        document.getElementById('sideNav').appendChild(aNode);
    });
}

// Create a list item for each student and render it on the page.
const displayStudents = (bus) => {
    // remove 'bus-display' content
    document.getElementById('bus-display').innerHTML = "";

    // for each student, display name, status, and create a button to track state.
    bus.students.forEach(student => {
        const buttonNode = document.createElement('button')
        var studentStatus = student.isPresent ? "here" : "not here";
        buttonNode.innerHTML = student.isPresent ? "Mark as absent" : "Mark as present"; 
        buttonNode.addEventListener('click', () => {
            if (student.isPresent) {
                student.isPresent = false;
                buttonNode.innerHTML = "Present";
            } else {
                student.isPresent = true;
                buttonNode.innerHTML = "Absent";
            }
            checkBus(bus);
        });
        const pNode = document.createElement('p'); 
        pNode.innerHTML += `${student.name} is ${studentStatus} `;
        pNode.appendChild(buttonNode);

        // add new paragraph for each student
        document.getElementById("bus-display").appendChild(pNode);
    });
}

    // grabs 'busId' from urlSearchParams to display the students for that bus
    function checkBus() {
        var urlParams = new URLSearchParams(window.location.search);
        var currentBusId = urlParams.get('busId');

        busses.forEach((bus) => {
            if (currentBusId === bus.busId) {
                checkBusCapacity(bus);
                displayStudents(bus);
            }
        });
    }

    // Iterate through students to determine the bus capacity
    function checkBusCapacity(bus) {
        const partialCapacity = bus.students.some((student) => student.isPresent === false);
        const emptyCapacity = bus.students.every((student) => student.isPresent === false);

        if (emptyCapacity) {
            bus.busCapacity = "empty"
        } else if (partialCapacity) {
            bus.busCapacity = "partial";
        } else {
            bus.busCapacity = "full";
        }

        // set 'bus-capacity' to current busCapacity
        document.getElementById('bus-capacity').innerHTML = bus.busCapacity.toUpperCase();
    }

displaySideNav(busses);