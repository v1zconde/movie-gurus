// Creating our Movies model
module.exports = function (Sequelize, Datatypes) {
    const Movies = Sequelize.define('Movies', {
        show_id: {
            type: Datatypes.STRING,
        },
        type: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        director: {
            type: Datatypes.STRING,
            defaultValue: false
        },
        cast: {
            type: Datatypes.TEXT,
            allowNull: false
        },
        country: {
            type: Datatypes.STRING,
            allowNull: false
        },
        date_added: {
            type: Datatypes.STRING,
            defaultValue: false
        },
        release_year: {
            type: Datatypes.STRING
        },
        rating: {
            type: Datatypes.STRING
        },
        duration: {
            type: Datatypes.STRING
        },
        listed_in: {
            type: Datatypes.STRING
        },
        description: {
            type: Datatypes.TEXT
        },
        watched: {
            type: Datatypes.STRING
        },
        personal_rating: {
            type: Datatypes.STRING
        }

    });

    return Movies;
}