class Student {
    constructor({name , grade , favorite}){
        if(!name || !grade){
           throw "name and grade are required"
        }
        this.name = name ;
        this.grade = grade;
        this.favorite =favorite;  
    }
   
    }


module.exports = Student;

