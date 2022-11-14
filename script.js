let section1 = document.querySelector("#section1");
let section2 = document.querySelector("#section2");
let section3 = document.querySelector("#section3");
let section4 = document.querySelector("#section4");
let order = document.querySelector("#order");
let sectionEnd = document.querySelector("#section-end");

let section1Input = document.querySelector("#section1-input");
let section2Input = document.querySelector("#section2-input");
let section3Input = document.querySelector("#section3-input");
let section4Input = document.querySelector("#section4-input");

let sumItems = document.querySelector("#sum-items");
let checkText = document.querySelector("#check-text");
let totalOrder = document.querySelector("#total-order");

let btn1Next = document.querySelector("#btn1-next");
let btn2Next = document.querySelector("#btn2-next");
let btn3Next = document.querySelector("#btn3-next");
let btn4Next = document.querySelector("#btn4-next");

let btn2Back = document.querySelector("#btn2-back");
let btn3Back = document.querySelector("#btn3-back");
let btn4Back = document.querySelector("#btn4-back");
let btn5Back = document.querySelector("#btn5-back");

let btnOrder = document.querySelector("#btn-order");

let products = [
    { name: "Wireless keyboard for computer", price: 55, ordered: 0 },
    { name: "Wireless computer mouse", price: 30, ordered: 0 },
    { name: "Mousepad", price: 20, ordered: 0 },
    { name: "Wireless headphones", price: 45, ordered: 0 }
];

let ordereds = [
    section1Input,
    section2Input,
    section3Input,
    section4Input
];

let clickBtn = 0;
let totalItem = 0;

function checkInput(section) {
    let inputStr = String(section.value).trim();
    if (inputStr.length == 0) {
        alert("ERROR: Empty string!");
        return false;
    }
    let inputNum = Number(inputStr);
    if  (isNaN(inputNum)) {
        alert("ERROR: It is not a number!");
        return false;
    }
    if (inputNum < 0) { 
        alert("ERROR: Number less than 0!");
        return false;
    }
    return true;
}

let sections = [section1, section2, section3, section4, order, sectionEnd];

function showBlock(block) {
    sections.forEach( section =>{
        if (section == block) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

function calculateButtonNEXT(){
    const name = products[clickBtn].name;
    const price = products[clickBtn].price;
    products[clickBtn].ordered = ordereds[clickBtn].value;
    totalItem += products[clickBtn].price * products[clickBtn].ordered;
    clickBtn++;
}

function calculateButtonBACK(){
    clickBtn--;
    totalItem -= products[clickBtn].price * products[clickBtn].ordered;
}

showBlock(section1);

// back
btn2Back.addEventListener("click", function() {
    calculateButtonBACK();
    showBlock(section1);
});
btn3Back.addEventListener("click", function() {
    calculateButtonBACK();
    showBlock(section2);
});
btn4Back.addEventListener("click", function() {
    calculateButtonBACK();
    showBlock(section3);
});
btn5Back.addEventListener("click", function() {
    calculateButtonBACK();
    showBlock(section4);
});

// next
btn1Next.addEventListener("click", function() {
    if(!checkInput(section1Input)) {
        return;
    }
    calculateButtonNEXT();
    showBlock(section2);
});
btn2Next.addEventListener("click", function() {
    if(!checkInput(section2Input)) {
        return;
    }
    calculateButtonNEXT();
    showBlock(section3);
});
btn3Next.addEventListener("click", function() {
    if(!checkInput(section3Input)) {
        return;
    }
    calculateButtonNEXT();
    showBlock(section4);
});
btn4Next.addEventListener("click", function() {
    if(!checkInput(section4Input)) {
        return;
    }
    calculateButtonNEXT();
    sumItems.innerHTML = totalItem + "$";
    let freeDelivery = totalItem > 1000;
    if (freeDelivery) {
        checkText.innerHTML = "Free";
        totalOrder.innerHTML = totalItem + "$";
    } else {
        checkText.innerHTML = "100$";
        totalOrder.innerHTML = totalItem + 100 + "$";
    }
    showBlock(order);
});

btnOrder.addEventListener("click", function() {
    showBlock(sectionEnd);
});
