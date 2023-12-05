function companyFullservice() {
  return {
    email: "fullservice@df.co",
    password: "dffullservice",
  };
}
function fake() {
  let num = Math.floor(Math.random() * 10000);
  return {
    email: "Testfullservice".concat(num).concat("@gmail.com"),
    name: "Mansoor Nasir",
    password: "Admin@123",
  };
}
const purchasePlan = {
  creditCard: "5555 5555 5555 4444",
  securityCode: "2444",
  expirationDate: "0454",
};
export { companyFullservice, fake, purchasePlan };
