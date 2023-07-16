// constructor for bus class: params @busId, @driver
export class Bus {
    constructor(busId, driver) {
        this.busId = busId;
        this.capacity = "empty";
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

    // checks and updates the capacity of the bus based on the students array
    updateCapacity() {
        const partialCapacity = this.students.some((student) => student.isPresent === false);
        const emptyCapacity = this.students.every((student) => student.isPresent === false);

        if (emptyCapacity) {
            this.capacity = "empty"
        } else if (partialCapacity) {
            this.capacity = "partial";
        } else {
            this.capacity = "full";
        }
    }
}