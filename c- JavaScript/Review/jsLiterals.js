//create obj with init properties
let contact = {};
contact.fname = "Cindy";
contact.lname = "Leps";

//add new properties
contact.tel = "0913-456-7890";
contact.email = "jsjs123@js.com";

// modify
contact.tel = "0913-653-3489";
contact.email = "manal00o@gmail.com";

//delete a property
delete contact.lname;

console.log(contact);
