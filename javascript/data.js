import { Student } from './student.js';
import { Bus } from './bus.js';

export const busMap = new Map();

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