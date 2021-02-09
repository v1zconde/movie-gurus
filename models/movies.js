// var Sequelize = require('sequelize');

// module.exports = function (sequelize, Datatypes) {
//     var Movies = sequelize.define('Movies', {
//         id: {
//             type: Datatypes.INTERGER,
//             autoIncrement: true,
//             primaryKey: true,
//             allowNull: false
//         },
//         show_id: {
//             type: Datatypes.VARCHAR,
//         },
//         type: {
//             type: Datatypes.VARCHAR,
//             allowNull: false,
//         },
//         title: {
//             type: Datatypes.VARCHAR,
//             allowNull: false,
//         },
//         director: {
//             type: Datatypes.VARCHAR,
//             defaultValue: false

//         },
//         cast: {
//             type: Datatypes.TEXT,
//             allowNull: false
//         },
//         country: {
//             type: Datatypes.VARCHAR,
//             allowNull: false
//         },
//         date_added: {
//             type: Datatypes.VARCHAR,
//             defaultValue: false
//         },
//         release_year: {
//             type: Datatypes.VARCHAR

//         },
//         rating: {
//             type: Datatypes.VARCHAR
//         },
//         duration: {
//             type: Datatypes.VARCHAR
//         },
//         listed_in: {
//             type: Datatypes.VARCHAR
//         },
//         description: {
//             type: Datatypes.TEXT

//         },
//         watched: {
//             type: Datatypes.VARCHAR

//         },
//         personal_rating: {
//             type: Datatypes.VARCHAR

//         }



//     })
//     return Movies;
// }