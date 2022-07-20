module.exports = (sequelize, Sequelize) => {
    const Login = sequelize.define("login", {
      /**
       * Primary key 'id' auto added
       */
       identifier: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  
    const User = require("./user.model.js")(sequelize, Sequelize);
    /**
     * field creatorId auto added to the login table
     * as foreign key for User.id
     */
    Login.belongsTo(User, { as: "creator", foreignKey: { allowNull: false } });
  
    return Login;
  }