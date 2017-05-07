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

for (let i = 0; i < money.length; i++) {
    money[i].addEventListener('touchstart', function () {
        clearClass(money);
        var str;       
        if (i == 2 || i == 5) {
            str = 'money active right ';
        } else {
            str = 'money active';
        }
        this.className = str;
        wtime[0].innerHTML = time[i].innerHTML;
        wprice[0].innerHTML =  price[i].innerHTML;
    })
}

function clearClass(ele) {
    for (var i = 0; i < ele.length; i++) {
        ele[i].className = 'money';
    }
    ele[2].className = 'money right';
    ele[5].className = 'money right';
}