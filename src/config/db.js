const {Sequelize}=require("sequelize");

const sequelize=new Sequelize(
    "test","3Nq2JrNXCcUHHjS.root","JdvGgYv9gbGMi7MD",
    {
        host:"gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
        port:4000,
        dialect:"mysql",
        logging:false,
        dialectOptions: {
        ssl: {
            rejectUnauthorized: true,
            }   
        }
    }
);

module.exports=sequelize;