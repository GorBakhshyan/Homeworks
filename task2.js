
class UniversityMember {
    constructor(name, age, role, energy = 24) {
        this.name = name,
            this.age = age,
            this.role = role,
            this.energy = energy
    }
}
const universityMember1 = new UniversityMember("Bob", 23, "students");
class Student extends UniversityMember {
    constructor(name, age, role, energy) {
        super(name, age, role, energy)
    }
}
const student = new Student("Jhon", 20, "Student");
class Teacher extends UniversityMember {
    constructor(name, age, role, energy) {
        super(name, age, role, energy)
    }
}
const teacher = new Teacher("Lily", 25, "Teacher");
class University {
    constructor(students, teachers) {
        this.students = students
        this.teachers = teachers
    }
    addMember(user) {
        if (user.role === "Student") {
            this.students.push(user);
        } else if (user.role === "Teacher")
            this.teachers.push(user);
    }
    removeMember(user) {
        let index;
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].name === user.name) {
                index = i;
                break;
            }
        }
        this.students.splice(index, index + 1)
    }
    startLesson() {
        for (let i = 0; i < this.students.length; i++) {
            this.students[i].energy = this.students[i].energy - 2;
        }
        // console.log(this.students.energy.value -2)
        for (let i = 0; i < this.teachers.length; i++) {
            this.teachers[i].energy = this.teachers[i].energy - 5;
        }
    }
}
const university = new University([student], [teacher]);
const student1 = new Student("Pavel", 19, "Student");
university.addMember(student1);
// console.log(university.students);
// university.removeMember(student1);
university.startLesson()
console.log(university.students);
console.log(university.teachers);



