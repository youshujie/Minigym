var $ = function (selector) {
    if (document.querySelectorAll(selector).length === 1) {
        return document.querySelector(selector);
    } else {
        return document.querySelectorAll(selector);
    }
};

var money = $('.money');
var time = $('.time');
var price = $('.price');
var wtime = $('.pay-time').children;
var wprice = $('.pay-price').children;

money[0].addEventListener('touchstart', function () {
    clearClass(money);     
    var str = 'money active';
    this.className = str;
    wtime[0].innerHTML = time[0].innerHTML;
    wprice[0].innerHTML =  price[0].innerHTML;
})
money[1].addEventListener('touchstart', function () {
    clearClass(money);
    var str = 'money active';
    this.className = str;
    wtime[0].innerHTML = time[1].innerHTML;
    wprice[0].innerHTML =  price[1].innerHTML;
})
money[2].addEventListener('touchstart', function () {
    clearClass(money);
    var str = 'money active right';       
    this.className = str;
    wtime[0].innerHTML = time[2].innerHTML;
    wprice[0].innerHTML =  price[2].innerHTML;
})
money[3].addEventListener('touchstart', function () {
    clearClass(money);
    var str = 'money active';       
    this.className = str;
    wtime[0].innerHTML = time[3].innerHTML;
    wprice[0].innerHTML =  price[3].innerHTML;
})
money[4].addEventListener('touchstart', function () {
    clearClass(money);
    var str = 'money active';       
    this.className = str;
    wtime[0].innerHTML = time[4].innerHTML;
    wprice[0].innerHTML =  price[4].innerHTML;
})
money[5].addEventListener('touchstart', function () {
    clearClass(money);
    var str = 'money active';       
    this.className = str;
    wtime[0].innerHTML = time[5].innerHTML;
    wprice[0].innerHTML =  price[5].innerHTML;
})
money[5].addEventListener('touchstart', function () {
    clearClass(money);
    var str = 'money active right';       
    this.className = str;
    wtime[0].innerHTML = time[5].innerHTML;
    wprice[0].innerHTML =  price[5].innerHTML;
})

function clearClass(ele) {
    for (var i = 0; i < ele.length; i++) {
        ele[i].className = 'money';
    }
    ele[2].className = 'money right';
    ele[5].className = 'money right';
}