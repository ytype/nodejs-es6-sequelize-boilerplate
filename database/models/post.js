'use strict'
export default (sequelize, DataTypes) => {
    const post = sequelize.define('post', {
        title: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        writer: {
            type:DataTypes.STRING,
            allowNull: false
        }
    }, {})
    post.associate = function(models) {
    
    }
    return post
}