export default function(sequelize, DataTypes){
    let user = sequelize.define("User", {
        userID: {
            filed: "user_id",
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false
        },
        password: {
            field: "password",
            type: DataTypes.STRING(30),
            allowNull: false
        }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: "user"
    })
    return user
}

//모델링 및 암호화: https://victorydntmd.tistory.com/33?category=677306
//테스트: http://webframeworks.kr/tutorials/expressjs/expressjs_test_code/