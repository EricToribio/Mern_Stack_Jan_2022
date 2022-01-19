const express = require("express");
const faker = require('@faker-js/faker');

const app = express();
const port=8000
// req is short for request
// res is short for response

// we can hard code some users like this
// later on we will want to store users in a database
class User {
    constructor(){
        this.id = faker.datatype.uuid()
        this.FirstName = faker.name.firstName()
        this.lastName =faker.name.lastName()
        this.phoneNumber= faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company{
    constructor() {
        this.id = faker.datatype.uuid()
        this.name = faker.company.companyName()
        this.address ={
            street:faker.address.streetAddress() ,
            city:faker.address.city() ,
            state:faker.address.state() ,
            zip: faker.address.zipCode() ,
            country:faker.address.country() ,
        }
    }
}

app.get("/api/users/new", (req, res) => {
  res.json(new User);
});
app.get("/api/company/new", (req, res) => {
    res.json(new Company);
  });
app.get("/api/user/company", (req, res) => {
    res.json({ user :new User ,
    company: new Company});
});

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
