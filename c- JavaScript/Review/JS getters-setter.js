let contact = {
    _age: 36,  

    firstName: "David",
    lastName: "Taylor",

  //get
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    //get
    get age() {
        return this._age;
    },

 //set
    set age(a) {
        if (a > 0) this._age = a;  // only sets age if valid
    }
};

// getter
console.log(contact.fullName);  // Output: "David Taylor"

// try setting an invalid age using the setter
contact.age = -20;  // won't update _age because -20 is not > 0

//set
console.log(contact.age);  // Output: 36
