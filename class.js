class fName{
    constructor(){
        this.father = 'Saef';
    }
}
class Student extends fName{
    constructor(sId, sName){
        super();
        this.id = sId;
        this.name = sName;
        this.school = "Nagdah High School";

    }
}
let student1 = new Student(34, "Shihab");
let student2 = new Student(23, "Roton");
console.log(student1.name, student2);