const mongoose = require('mongoose');

const drinkSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mainIngrediente: {
        type: String,
        required: true
    }

})


module.exports = mongoose.model("Drink", drinkSchema)

