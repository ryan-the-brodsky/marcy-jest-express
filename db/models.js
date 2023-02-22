const { Sequelize, DataTypes } = require('sequelize');

// TODO: CHECK IF WE'RE IN A TESTING ENVIRONMENT
const databaseUri = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_SERVER}:5432/${process.env.PG_DB_NAME}`;

const sequelize = new Sequelize(databaseUri);

const Post = sequelize.define('Post', {
  // Model attributes are defined here
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// BONUS ROUND: Have Users that attach to Posts
// const User = sequelize.define('User', {
//   // Model attributes are defined here
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// });
  
// User.hasMany(Post);
// Post.belongsTo(User);

sequelize.sync({force: true})
  .then(()=>{
    console.log("db synced")
  })
  .catch((err)=>{
    console.log("db sync failure")
    console.log(err);
  })

module.exports = {
  Post
};