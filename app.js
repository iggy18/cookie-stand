'use strict'

var time = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm","6pm","7pm"];
var mytable = document.getElementById('table')

function Store (name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.dailySales = [];
    this.grandTotal = 0;
}

Store.prototype.CPH = function() { 
    var customersThisHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    var cookiesThisHour = customersThisHour * this.avg;
    return Math.floor(cookiesThisHour);
}

Store.prototype.generateDailySales = function() {
    var sum = 0
    for (let i = 0; i < time.length; i++) {
        var cookiethisHour = this.CPH();
        this.dailySales.push(cookiethisHour);
        sum += cookiethisHour;
    }
    this.grandTotal = sum;
}

Store.prototype.render = function () {
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.textContent = this.name;
    row.appendChild(cell);
    for (let i = 0; i < time.length; i++) {
        var cell = document.createElement('td');
        cell.textContent = this.dailySales[i];
        row.appendChild(cell);
    }
    mytable.appendChild(row);
}

function tablehead() {
    var head = document.createElement('th');
    
    head.textContent = time[];
    tableElement.appendChild(table);
    for (let i = 0; i < time.length; i++) {
        
    }

}
tablehead();

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
