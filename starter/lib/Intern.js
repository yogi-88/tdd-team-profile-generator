// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
//intern constructor extends employee constructor
class Intern extends Employee {
    constructor(name,id,email,school) {
        // calling employee constructor
        super (name, id, email);
  
        this.school = school;
    }

    
    getSchool() {
        return this.school;
    }
    // override employee role to intern
    getRole() {
        return 'Intern'
    }
    
 
 };


module.exports = Intern;