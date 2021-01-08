//const { Query } = require("mongoose");
const Drink = require("./../models/drinkModel");

//queremos conseguir el Main Ingredient, pero
//primero tenemos que llamar la entrada de ese trago
// en la collection drink (que es el Name en Drink que esta luego reflejado en User en Name)


class DrinkService {

     getDrinkByName(name) {
         const query =  Drink.findOne({ name: name}).exec();
        // Arroja null
         return query

    }
}

module.exports = DrinkService;