class UserController {
    constructor(userService, drinkService){
        this.userService = userService;
        this.drinkService = drinkService;
    }

    async getUserByName(req, res) {;
        const { name } = req.params;
        const user = await this.userService.getUserByName(name);
        //console.log(user, "de bebida")
        const drink = await this.drinkService.getDrinkByName(user.favDrink)
        const data = {
            name: user.name,
            favDrink: user.favDrink,
            main: drink.mainIngrediente

        }

        res.json(data);
    }
}

module.exports = UserController;