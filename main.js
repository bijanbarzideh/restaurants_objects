//PART 1
//______________________________________________________________________________________________________________________________________________________
// Define a constructor for the following object. Add parameters to the constructor for the given properties and add them as instance variables.
function ingredient(ingredientName,calories){
// string name
    this.ingredientName = ingredientName;
// number calories
    this.calories = calories;
// boolean vegan
    this.vegan = false;
// boolean glutenFree
    this.glutenFree = false;
// boolean citrusFree
    this.citrusFree = false;
};
// Define a stringify method on the constructors prototype. It should return a string description of the food including its name,
// calories, and dietary information, formatted as you choose. stringify should not have any side effects. Instantiate three different
// FoodItems and store each in a separate variable. Call stringify on each instance and print the result to the console.
ingredient.prototype.listIngredient = function(){
    return "Food Choice: " + this.ingredientName + " Calories: " + this.calories  + " Vegan: " + !this.vegan + " Gluten Free: " + !this.glutenFree + " Citrus Free: " + !this.citrusFree
};
//PART 2
//______________________________________________________________________________________________________________________________________________________
//Drink Object

function Drink(drinkName , drinkDescription , drinkPrice,ingredientList){
    this.drinkName = drinkName;
    this.drinkDescription = drinkDescription;
    this.drinkPrice = drinkPrice;
    this.ingredientDrinkList = [];
};

    Drink.prototype.addIngredients = function(){
        for(var i = 0; i < arguments.length; i++){
        this.ingredientDrinkList.push(arguments[i])
        }
    };
//______________________________________________________________________________________________________________________________________________________
// Margarita
var Margarita = new Drink('Margarita',"Patron",160);

    var Tequila = new ingredient('Tequila',60,false,false,true);
    var Ice = new ingredient('Water',0,true,true,true);
    var margaritaSyrup =new ingredient('Margarita Syrup',100,true,true,true);


    Margarita.addIngredients(Tequila,Ice,margaritaSyrup);
//______________________________________________________________________________________________________________________________________________________
// Soda
var Soda = new Drink('Soda',"Bubbley",160);
    var Sugar = new ingredient('Sugar',60,true,true,true);
    //ice is already defined under Margarita
    var sodaSyrup =new ingredient('Soda Syrup',100,true,true,true);

    Soda.addIngredients(Sugar,Ice,sodaSyrup);
//______________________________________________________________________________________________________________________________________________________
//Plate Object
    function Plate(plateName , plateDescription , platePrice){
        this.plateName = plateName;
        this.plateDescription = plateDescription;
        this.platePrice = platePrice;
        this.ingredientPlateList = [];
    };

    Plate.prototype.addFoodIngredient = function (){
        for(var i = 0; i < arguments.length; i++){
        this.ingredientPlateList.push(arguments[i])
        }
    };
//______________________________________________________________________________________________________________________________________________________
//Burrito
    var Burrito = new Plate('Bean Buritto', 'a big plate', 8);

        var tortilla = new ingredient('tortilla',120,false,false,true);
        var beans = new ingredient('kidney',100,true,true,true);
        var rice = new ingredient('white',220,true,true,true);
        var cheese = new ingredient('cheese',240,false,true,true);

    Burrito.addFoodIngredient(tortilla, beans, rice, cheese);
//______________________________________________________________________________________________________________________________________________________
//Guacamole
 var Guacamole = new Plate('Guacamole', 'for dipping chips', 8);

    var avocado = new ingredient('avocado',190,true,true,true);
    var tomato = new ingredient('tomato',30,true,true,true);
    var jalepeno = new ingredient('jalapeno',30,true,true,true);
    var onion = new ingredient('onion',30,true,true,true);

    Guacamole.addFoodIngredient(avocado, tomato, jalepeno, onion);
//______________________________________________________________________________________________________________________________________________________
//Nachos
var Nachos = new Plate('Nachos', 'appitizer to share', 16);

    var chips = new ingredient('chips',360,false,true,true);
    var chicken = new ingredient('chicken',120,false,true,true);
    var beef = new ingredient('beef',150,false,true,true);
    var salsa = new ingredient('sals',80,true,true,false);
    //cheese is already defined under burrito

    Nachos.addFoodIngredient(chips, cheese, chicken, beef, salsa);
//______________________________________________________________________________________________________________________________________________________
//Salad
var Salad = new Plate('Salad', 'salad for boulder people', 16);

    var tofu = new ingredient('tofu',60,true,true,true);
    var lettuce = new ingredient('lettuce',10,true,true,true);
    var dressing = new ingredient('dressing',150,true,true,true);

    Salad.addFoodIngredient(tofu, lettuce, dressing)
//______________________________________________________________________________________________________________________________________________________
//Order Object
    function Order(plateSelection,drinkSelection){
        this.plate = plateSelection;
        this.drink = drinkSelection;
    };

    Order.prototype.orderPrint = function (){
        console.log("You have ordered: " + this.plate.plateName + " and the " + this.drink.drinkName +".")
    };

    var order1 = new Order(Burrito, Margarita);
    var order2 = new Order(Guacamole, Margarita);

    order1.orderPrint();
    order2.orderPrint();
//______________________________________________________________________________________________________________________________________________________
//Menu Object
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    function Menu(plate){
        this.plateMenu = []
    }
    Menu.prototype.addMenuItem = function(){
      for(var i = 0; i < arguments.length; i++){
        this.plateMenu.push(arguments[i])
      }
    }
    var menu = new Menu()
    menu.addMenuItem(Burrito, Guacamole, Nachos)

    var menu1 = new Menu(Burrito, Nachos, Margarita);


    //Print out the plates and drinks listed
    Menu.prototype.menuPrint = function (){
        console.log("Your menu is: " + this.plateMenu+ " " + this.drinkMenu +".")
    }

    menu.menuPrint()
