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

const displaybus = (bus) => {
    // Create a list item for each student and render it on the page.
    bus.students.forEach(student => {
        const listNode = document.createElement('li'); 
        const listTextNode = document.createTextNode(`${student.name}, ${student.isPresent}`);
        listNode.appendChild(listTextNode);
        document.getElementById("bus-display").appendChild(listNode);
    });
}

displaybus(bus1);
displaySideNav(busses);