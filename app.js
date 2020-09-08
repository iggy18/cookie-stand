var time = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm","6pm","7pm"];

console.log('te4st');

seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    // sales: [],
    CPH: function () { 
        console.log('CPH');
        var customersThisHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        var cookiesThisHour = customersThisHour * this.avg;
        return Math.floor(cookiesThisHour);
    },
    generateDailySales: function () {
        var ulist = document.createElement("ul");
        for (let i = 0; i < time.length; i++) {
            var li = document.createElement("li");
            li.textContent = time[i] + ":  " + this.CPH();
            ulist.append(li);
        }
        var cityDiv = document.getElementById("seattle");
        cityDiv.append(ulist);
    }
}

seattle.generateDailySales();


 tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    CPH: function () { 
        console.log('CPH');
        var customersThisHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        var cookiesThisHour = customersThisHour * this.avg;
        return Math.floor(cookiesThisHour);
    },
    generateDailySales: function () {
        var ulist = document.createElement("ul");
        for (let i = 0; i < time.length; i++) {
            var li = document.createElement("li");
            li.textContent = time[i] + ":  " + this.CPH();
            ulist.append(li);
        }
        var cityDiv = document.getElementById("tokyo");
        cityDiv.append(ulist);
    }
}

tokyo.generateDailySales();

dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    CPH: function () { 
        console.log('CPH');
        var customersThisHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        var cookiesThisHour = customersThisHour * this.avg;
        return Math.floor(cookiesThisHour);
    },
    generateDailySales: function () {
        var ulist = document.createElement("ul");
        for (let i = 0; i < time.length; i++) {
            var li = document.createElement("li");
            li.textContent = time[i] + ":  " + this.CPH();
            ulist.append(li);
        }
        var cityDiv = document.getElementById("dubai");
        cityDiv.append(ulist);
    }
}

dubai.generateDailySales();

paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    CPH: function () { 
        console.log('CPH');
        var customersThisHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        var cookiesThisHour = customersThisHour * this.avg;
        return Math.floor(cookiesThisHour);
    },
    generateDailySales: function () {
        var ulist = document.createElement("ul");
        for (let i = 0; i < time.length; i++) {
            var li = document.createElement("li");
            li.textContent = time[i] + ":  " + this.CPH();
            ulist.append(li);
        }
        var cityDiv = document.getElementById("paris");
        cityDiv.append(ulist);
    }
}

paris.generateDailySales();

lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.2,
    CPH: function () { 
        console.log('CPH');
        var customersThisHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        var cookiesThisHour = customersThisHour * this.avg;
        return Math.floor(cookiesThisHour);
    },
    generateDailySales: function () {
        var ulist = document.createElement("ul");
        for (let i = 0; i < time.length; i++) {
            var li = document.createElement("li");
            li.textContent = time[i] + ":  " + this.CPH();
            ulist.append(li);
        }
        var cityDiv = document.getElementById("lima");
        cityDiv.append(ulist);
    }
}

lima.generateDailySales();
