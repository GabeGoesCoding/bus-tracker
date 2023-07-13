// Mocked data for bus1, bus2, and bus3.
const bus1 = {
    busId: 19990501,
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
    busId: 19890426,
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
    busId: 19770525,
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
        aNode.setAttribute('href', `#${bus.busId}`);
        const aTextNode = document.createTextNode(`Bus: ${bus.busId}`);
        aNode.appendChild(aTextNode);
        document.getElementById('sideNav').appendChild(aNode);
    });
}


// Create a list item for each student and render it on the page.
const displaybus = (bus) => {

    // remove 'bus-display' content
    document.getElementById('bus-display').innerHTML = "";

    // for each student, display name, status, and create a button to track state.
    bus.students.forEach(student => {
        const buttonNode = document.createElement('button')
        buttonNode.innerHTML = student.isPresent;
        buttonNode.addEventListener('click', () => {
            if (student.isPresent) {
                student.isPresent = false;
                buttonNode.innerHTML = false;
            } else {
                student.isPresent = true;
                buttonNode.innerHTML = true;
            }
            displaybus(bus);
        });
        const pNode = document.createElement('p'); 
        pNode.innerHTML += `${student.name} here is ${student.isPresent} `;
        pNode.appendChild(buttonNode);

        // add new paragraph for each student
        document.getElementById("bus-display").appendChild(pNode);
    });
}

displaybus(bus1);
displaySideNav(busses);