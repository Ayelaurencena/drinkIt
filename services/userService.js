const { Query } = require("mongoose");
const User = require("./../models/userModel");

class UserService {
    
    async getUserByName(name) {

        const query = await User.findOne({ name: name }).exec();
// la query devuelve el user OK
        return query
    }
}

module.exports = UserService;

