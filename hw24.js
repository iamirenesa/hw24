class Components{
    constructor(price, calories){
        this.price = price;
        this.calories = calories;
    }
}

class Hamburger{
    static SIZE_SMALL = new Components(50, 20);
    static SIZE_HUGE = new Components(100, 40);
    static STUFFING_CHEESE = new Components(10, 20);
    static STUFFING_SALAD = new Components(20, 5);
    static STUFFING_POTATO = new Components(15, 10);
    static TOPPING_SAUCE = new Components(15, 0);
    static TOPPING_MAYO = new Components(20, 5);

    topping = [];

    changeSize(size){
        this.size = size;
    }
    changeStuff(stuff){
        this.stuff = stuff;
    }
    addTopping(topping){
        this.topping.push(topping);
    }

    constructor(...args) {
        args.forEach(this.changeComponents.bind(this));
    }

    changeComponents(element){
        switch (element) {
            case Hamburger.SIZE_SMALL:
            case Hamburger.SIZE_HUGE:
                this.changeSize(element);
                break;
            case Hamburger.STUFFING_CHEESE:
            case Hamburger.STUFFING_SALAD:
            case Hamburger.STUFFING_POTATO:
                this.changeStuff(element);
                break;
            default:
                this.addTopping(element);
        }
    }


    calculate(){
        return this.size.calories + this.stuff.calories + this.topping.reduce((totalCalories, toppingEl) => totalCalories + toppingEl.calories, 0);
    }
    calculatePrice(){
        return this.size.price + this.stuff.price + this.topping.reduce((totalPrice, toppingEl) => totalPrice + toppingEl.price, 0);
    }
}

// маленький гамбургер з начинкою з сиру
let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log(`Calories: ` + hamburger.calculate());

// скільки коштує
console.log(`Price: ` + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log(`Price with sauce: ` + hamburger.calculatePrice());