import { Student } from './models/student.js';
import { Bus } from './models/bus.js';

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
mockBus2.addStudent(new Student("Krillin"));
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

const mockBus4 = new Bus("425", "Gunther");
busMap.set("425", mockBus4);
mockBus4.addStudent(new Student("Joey"));
mockBus4.addStudent(new Student("Chandler"));
mockBus4.addStudent(new Student("Monica"));
mockBus4.addStudent(new Student("Ross"));
mockBus4.addStudent(new Student("Phoebe"));
mockBus4.addStudent(new Student("Rachel"));

const mockBus5 = new Bus("319", "Minato");
busMap.set("319", mockBus5);
mockBus5.addStudent(new Student("Itachi"));
mockBus5.addStudent(new Student("Sakura"));
mockBus5.addStudent(new Student("Shikamaru"));
mockBus5.addStudent(new Student("Naruto"));
mockBus5.addStudent(new Student("Hinata"));
mockBus5.addStudent(new Student("Rock Lee"));

const mockBus6 = new Bus("203", "Saul");
busMap.set("203", mockBus6);
mockBus6.addStudent(new Student("Jesse"));
mockBus6.addStudent(new Student("Walter"));
mockBus6.addStudent(new Student("Mike"));
mockBus6.addStudent(new Student("Tuco"));
mockBus6.addStudent(new Student("Gustavo"));
mockBus6.addStudent(new Student("Hank"));

const mockBus7 = new Bus("771", "Bart");
busMap.set("771", mockBus7);
mockBus7.addStudent(new Student("Marge"));
mockBus7.addStudent(new Student("Lisa"));
mockBus7.addStudent(new Student("Krusty"));
mockBus7.addStudent(new Student("Ned"));
mockBus7.addStudent(new Student("Homer"));
mockBus7.addStudent(new Student("Lisa"));

const mockBus8 = new Bus("365", "Hagrid");
busMap.set("365", mockBus8);
mockBus8.addStudent(new Student("Ron"));
mockBus8.addStudent(new Student("Hermione"));
mockBus8.addStudent(new Student("Dobby"));
mockBus8.addStudent(new Student("Snape"));
mockBus8.addStudent(new Student("Voldemort"));
mockBus8.addStudent(new Student("Harry"));

const mockBus9 = new Bus("771", "Dwight");
busMap.set("771", mockBus7);
mockBus9.addStudent(new Student("Michael"));
mockBus9.addStudent(new Student("Pam"));
mockBus9.addStudent(new Student("Stanley"));
mockBus9.addStudent(new Student("Jim"));
mockBus9.addStudent(new Student("Ryan"));
mockBus9.addStudent(new Student("Kelly"));