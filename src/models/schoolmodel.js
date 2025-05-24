const db=require("../config/db")
const {DataTypes}=require("sequelize")

const Schools=db.define("schools",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    latitude:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    longitude:{
        type:DataTypes.FLOAT,
        allowNull:false
    }},
    {
        timestamps:false
    }
)

module.exports=Schools;

