const Drink = require("./../models/drinkModel");

//queremos conseguir el Main Ingredient, pero
//primero tenemos que llamar la entrada de ese trago
// en la collection drink (que es el Name en Drink que esta luego reflejado en User en Name)


class DrinkService {

    async getDrinkByName(name) {
        console.log(name, "name de drink service")
         const query = await Drink.findOne({ name: name}).exec();
         console.log(query, "drink")
         return query

    }
}

module.exports = DrinkService;