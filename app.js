'use strict'
// global variables can be used anywhere
var time = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm","6pm","7pm"];
var mytable = document.getElementById('table')
var forms = document.getElementById('storeMaker')
var stores = [];

// makes store objects
function Store (name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.dailySales = [];
    this.grandTotal = 0;
    stores.push(this)
}

// Generates random numbers for daily sales 
Store.prototype.CPH = function() { 
    var customersThisHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    var cookiesThisHour = customersThisHour * this.avg;
    return Math.floor(cookiesThisHour);
}

// generates daily sales 
Store.prototype.generateDailySales = function() {
    var sum = 0
    for (let i = 0; i < time.length; i++) {
        var cookiethisHour = this.CPH();
        this.dailySales.push(cookiethisHour);
        sum += cookiethisHour;
    }
    this.grandTotal = sum;
}

// displays table on screen 
Store.prototype.render = function () {
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.textContent = this.name;
    row.appendChild(cell);
    var storeTotal = 0;
    for (let i = 0; i < time.length; i++) {
        var cell = document.createElement('td');
        cell.textContent = this.dailySales[i];
        row.appendChild(cell);
        storeTotal += this.dailySales[i];
    }
    mytable.appendChild(row);
    var last = document.createElement('td');
    last.textContent = storeTotal;
    row.append(last);
}

// time row
function tablehead () {
    var headerRow = document.createElement ('tr');
    mytable.appendChild(headerRow);
    var tableElement = document.createElement ('th');
    tableElement.textContent = 'Store location'
    headerRow.appendChild(tableElement);
        for (let i = 0; i < time.length; i++) {
            var head = document.createElement('th');
            head.textContent = time[i];
            headerRow.appendChild(head);
        }
}
tablehead();

// footer row 
function tablefooter () {
    var footerRow = document.createElement ('tr');
    mytable.appendChild(footerRow);
    var tableElement = document.createElement('td');
    tableElement.textContent = "total";
    footerRow.appendChild(tableElement);
    var grandTotal = 0;
    for (let i = 0; i < time.length; i++) {
       var sum = 0
        for (let j = 0; j < stores.length; j++) {
           sum += stores[j].dailySales[i];
           grandTotal += stores[j].dailySales[i];
        }
         var tableElement=document.createElement('td');
         tableElement.textContent = sum;
         footerRow.appendChild(tableElement);
   }
   tableElement = document.createElement('td');
   tableElement.textContent = grandTotal;
   footerRow.appendChild(tableElement);
}

// total column
function tabletotal () {

}
 
    
    
    
    // making stores and calling functions 
var seattle = new Store('Seattle', 23, 65, 6.3);
seattle.generateDailySales();
seattle.render();
    
    
var tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.generateDailySales();
tokyo.render();
    
var dubai = new Store('Dubai', 11, 38, 3.7);
dubai.generateDailySales();
dubai.render();
    
var paris = new Store("Paris", 20, 38, 2.3);
paris.generateDailySales();
paris.render();
    
var lima = new Store('lima', 2, 16, 4.2);
lima.generateDailySales();
lima.render();


tablefooter();

forms.addEventListener('submit', addStore)

function addStore (event) {
    event.preventDefault();
    var {Name, MinSales, MaxSales, AvgSales} = event.target;
    var store = new Store (Name.value, MinSales.value, MaxSales, AvgSales);
    store.generateDailySales();
    store.render();
}


    //     var name = event.target.Name.value;
//     var min = event.target.MinSales.value;
//     var max = event.target.MaxSales.value;
//     var avg = event.target.AvgSales.value;
//     var addStore = new Store(name,min,max,avg)
//     console.log('stores', stores);
// addStore.render();
// addStore();