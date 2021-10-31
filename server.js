const express = require("express");
var faker = require("faker");
const app = express();

class User {
  constructor() {
    this._id = faker.datatype.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this._id = faker.datatype.number();
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    };
  }
}
const user1 = new User();
const company1 = new Company();

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});
app.get("/api/users/new", (req, res) => {
  res.json(user1);
});
app.get("/api/companies/new", (req, res) => {
  res.json(company1);
});
app.get("/api/user/company", (req, res) => {
  const userAndCompany = [];
  userAndCompany.push(user1, company1);
  res.json(userAndCompany);
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
