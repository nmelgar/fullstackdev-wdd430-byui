//////////// primitives: number, string, boolean
let age: number = 24;
age = 12.4;

let userName: string = "peter";
userName = "anna";

let isTeacher: boolean = true;
isTeacher = false;

// type inference
// ts infers the type based on the assigned value
let course1 = "React - The Complete Guide";
// union type
let course2: string | number = "React - The Complete Guide";

//////////// more complex: arrays, objects
let hobbies: string[] = ["sports", "cooking"];
let ages: number[] = [12, 34, 56];

let person: {
  // object type definition
  name: string;
  age: number;
};
person = { name: "Max", age: 32 };

let people: {
  // array of objects
  name: string;
  age: number;
}[];

// type aliases
type Person = {
  name: string;
  age: number;
};

let people: Person[];
let person: Person;

//////////// function & types
// return type is after the parentheses:
function add(a: number, b: number): number {
  return a + b;
}
// void return type
// void means the function doesn't return anything
// e.g. it just prints something to the console
function print(value: any): void {
  console.log(value);
}

//////////// generics
// help you write functions that can work with different types
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

//////////// classes
class Student {
  //   firstName: string;
  //   lastName: string;
  //   age: number;
  //   private courses: string[];

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.courses = courses;
  }
  // method shorthand notation
  enroll(courseName: string) {
    this.courses.push(courseName);
  }
  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student("Max", "Schwarz", 32, ["Angular"]);
student.enroll("React");
student.listCourses();

//////////// interfaces
// object type definition
interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;
max = {
  firstName: "Max",
  age: 32,
  greet() {
    console.log("Hello!");
  },
};
