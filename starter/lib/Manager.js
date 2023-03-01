// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")
//Manager constructor extends employee constructor
class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        // calling employee constructor
        super (name, id, email);
  
        this.offcieNumber = officeNumber;
    }

    // override employee role to Manager
    getRole() {
        return 'Manager'
    }
    
 
 };


module.exports = Manager;