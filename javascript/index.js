// constructor for student class: params @name
class Student {
    constructor(name) {
        this.name = name;
        this.isPresent = false;
    }
 
    // sets a student attendence to true
    markPresent() {
        this.isPresent = true;
    }

    // sets a student attendence to false
    markAbsent() {
        this.isPresent = false;
    }
}

// constructor for bus class: params @busId, @driver
class Bus {
    constructor(busId, driver) {
        this.busId = busId;
        this.status = "empty";
        this.driver = driver;
        this.students = [];
    }

    // adds a student object to the list of students for a bus
    addStudent(student) {
        this.students.push(student);
    }

    // finds student by index and removes student if index is not out of bounds
    removeStudent(studentName) {
        const index = this.students.findIndex(student => student.name === studentName);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }
}

const busses = [];

const mockBus1 = new Bus("501", "Mrs. Puff");
busses.push(mockBus1);
mockBus1.addStudent(new Student("Squidward"));
mockBus1.addStudent(new Student("Spongebob"));
mockBus1.addStudent(new Student("Patrick"));
mockBus1.addStudent(new Student("Eugene"));
mockBus1.addStudent(new Student("Sandy"));
mockBus1.addStudent(new Student("Gary"));


const mockBus2 = new Bus("426", "Roshi");
busses.push(mockBus2);
mockBus2.addStudent(new Student("Goku"));
mockBus2.addStudent(new Student("Piccolo"));
mockBus2.addStudent(new Student("Kirllin"));
mockBus2.addStudent(new Student("Gohan"));
mockBus2.addStudent(new Student("Vegeta"));
mockBus2.addStudent(new Student("Trunks"));

const mockBus3 = new Bus("525", "Yoda");
busses.push(mockBus3);
mockBus3.addStudent(new Student("Han Solo"));
mockBus3.addStudent(new Student("Ben"));
mockBus3.addStudent(new Student("Leah"));
mockBus3.addStudent(new Student("Luke"));
mockBus3.addStudent(new Student("Darth Vader"));
mockBus3.addStudent(new Student("Chewbacca"));

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
                } else {
                    student.isPresent = true;
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

    function createBus(busId, driver) {
        const newBus = new Bus(busId, driver);
        busses.push(newBus);
    }

    function createStudent(busId, name) {
        const newStudent = new Student(name);
        let currentBus = new Bus();
        busses.forEach(bus => {
            if (bus.busId == busId) {
                currentBus = bus;
            }
        });
        currentBus.addStudent(newStudent);
    }
     
    function createStudentWithBusObject(bus, name) {
        const newStudent = new Student(name);
        bus.addStudent(newStudent);
    }

displaySideNav(busses);