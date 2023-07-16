export class Student {
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