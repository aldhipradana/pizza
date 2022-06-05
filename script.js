
let pizzaPrice = 0
let sizePrice = 0
let toppingPrice = 0
let totalPrice = 0
let pizzaType 

const toping1 = [
    ['avocado', 'broccoli', 'onions', 'zucchini', 'tuna', 'ham'],
    [1, 1, 1, 1, 2, 3]
]
const toping2 = [
    ['broccoli', 'onions', 'zucchini', 'lobster','oyster', 'salmon', 'bacon', 'ham'],
    [1, 1, 1, 2, 2, 2, 3, 3]
]
const toping3 = [
    ['broccoli', 'onions', 'zucchini', 'tuna', 'bacon', 'duck', 'ham', 'sausage'],
    [1, 1, 1, 2, 3, 3, 3, 3]
]

const pizzaItem = document.getElementsByClassName("item-label")

function getPizza(e){
    pizzaType = e
    toppingPrice = 0

    const topingItem = document.getElementsByClassName("toppings-item")
    for (let i = 0; i < topingItem.length; i++) {
        topingItem[i].disabled = true
        topingItem[i].classList.remove("enabled");
    }
    
    switch (pizzaType) {
        case 1:
            pizzaPrice = 8
            enabler(toping1)
            break;
        case 2:
            pizzaPrice = 10

            enabler(toping2)
            break;
        case 3:
            pizzaPrice = 12
            enabler(toping3)
            break;
        default:
            break;
    }
    getToppings()
    sumPrice()
}

function enabler(arr){
    for (let i = 0; i < arr[0].length; i++) {
        const item = arr[0][i];
        const toppings = document.getElementById(item)
        toppings.disabled = false
        toppings.classList.add("enabled");
    }
}

function getSize(e){
    switch (e) {
        case 1:
            sizePrice = -1
            break;
        case 2:
            sizePrice = 0
            break;   
        case 3:
            sizePrice = 2
            break;
        default:
            break;
    }
    getToppings()
    sumPrice()
}

function getToppings(){
    switch (pizzaType) {
        case 1:
            sumTopping(toping1)
            break;
        case 2:
            sumTopping(toping2)
            break;
        case 3:
            sumTopping(toping3)
            break;
        default:
            break;
    }
    sumPrice()
}

function sumTopping( x ){
    toppingPrice = 0
    for (let i = 0; i < x[0].length; i++) {
        const toppings = document.getElementById(x[0][i])
        if(toppings.checked){
            toppingPrice += x[1][i]
        }
    }
}

function sumPrice(){
    totalPrice = pizzaPrice + sizePrice + toppingPrice
    document.getElementById("total-price").innerHTML = totalPrice;  
}


