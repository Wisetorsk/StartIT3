// Initialize Firebase

var config = {
    apiKey: "AIzaSyBXkAtIfQvzvT0JUwhqqWddPbofgm_Iprw",
    authDomain: "commerce-50190.firebaseapp.com",
    databaseURL: "https://commerce-50190.firebaseio.com",
    projectId: "commerce-50190",
    storageBucket: "commerce-50190.appspot.com",
    messagingSenderId: "579427523762"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();

const settings = {/* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);
let db = firebase.firestore();
let inventory = db.collection('Store').doc('HrGypMCyFiKs5k63PwHO').collection('Inventory');
let orders = db.collection('Store').doc('o3LaB1atNQl99DgWWroM').collection('Orders');
let allOrders = {};
let products = {}; // Object of available products in inventory. Update by function.
let inventoryData = {};
let numberOfOrders = 0;

function getAllOrders() {
    // Returns all registered orders from database
    orders.get()
        .then(writeToLocal)
        .catch(error => console.error(error));
    db.collection('Store').get()
        .then(updateNumberOfOrders)
        .catch(error => console.error(error));
}

function updateNumberOfOrders(response) {
        response.forEach(function (element) {
            if (element.data().TotalOrders) {
                numberOfOrders = parseInt(element.data().TotalOrders);
            }
        });
}

function writeToLocal(response) {
    console.log('Reading database');
    if (!response) {
        console.log('No response');
    } else {
        console.log('Got something: ', typeof (response));
        response.forEach(function (element) {
            allOrders[element.data().OrderNumber] = {
                customerId: element.data().CustomerId,
                orderNumber: element.data().OrderNumber,
                productName: element.data().ProductName,
                productNumber: element.data().ProductNumber
            }
        })
    }
}

function getOrder(orderNumber) {
    // Get a single order based on order number
    return allOrders[orderNumber];
}

function addOrder(orderNumber, productNumber, productName, customerId) {
    db.collection('Store').TotalOrders += 1;
    orders.add({
        CustomerId: customerId,
        OrderNumber: orderNumber,
        ProductName: productName,
        ProductNumber: productNumber
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

function addNewOrder() {
    let orderNumber = '';
    for (let i = 0; i < (8 - String(numberOfOrders + 1).length); i++) {
        orderNumber += '0';
    }
    orderNumber += String(numberOfOrders + 1);
    console.log(orderNumber);
    let productNumber = document.getElementById('productNumber').value;
    let customerId = document.getElementById('customerId').value;
    let productName = products[productNumber];
    addOrder(orderNumber, productNumber, productName, customerId);
}

function updateInventory(productNumber, change) {

}

function GetInventory() {

}

function dump(dir) {
    let dirEx = eval(dir);
    dirEx.get().then((snapshot) => {
        console.log(`Dumping ${dir}`);
        snapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            orders.doc(doc.id).get().then((snap) => {
                console.table(snap.data())
            });
        });
    });
}

function writeOrdersToPage() {
    let html = '<tr><th> Order Number</th><th>Product Number</th><th>Product Name</th><th>Customer ID</th></tr >';
    for (let key of Object.keys(allOrders)) {
        html += '<tr><td>' + allOrders[key].orderNumber + '</td>';
        html += '<td>' + allOrders[key].productNumber + '</td>';
        html += '<td>' + allOrders[key].productName + '</td>';
        html += '<td>' + allOrders[key].customerId + '</td></tr>';
    }
    
    document.getElementById('orders').innerHTML = html;
}

//dump('orders');

// Code injection!!!!!!
//dump('alert("Heisann, dette skal ikke skje")');