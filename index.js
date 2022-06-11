// Write your solution in this file!

var customerName = "bob";
const error = "test"
function upperCaseCustomerName() {

    customerName = customerName.toUpperCase();
}
function setBestCustomer() {


   bestCustomer = "not bob"

}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

overwriteBestCustomer();

function changeLeastFavoriteCustomer() {
    error = "no error"
}
changeLeastFavoriteCustomer()