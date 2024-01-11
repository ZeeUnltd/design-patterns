/*
    Inspired by Factory Design Pattern (Devsage) -> https://www.youtube.com/watch?v=kuirGzhGhyw
    Author: Zeeunltd
*/

function Developer(name) {
    this.name = name
    this.type = 'Developer'
}

function Tester(name) {
    this.name = name
    this.type = 'Tester'
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name)
                break;
            case 2:
                return new Tester(name)
                break;
            default:
                break;
        }
    }
}

function say() {
    console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Banji", 1))
employees.push(employeeFactory.create("Abu", 2))

employees.forEach(emp => {
    say.call(emp)
})
