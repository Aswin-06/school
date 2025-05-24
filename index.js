const app=require("./src/app");
const db=require("./src/config/db")

async function index()
{
    try {
        await db.authenticate();
        console.log("database connection successful");
        await db.sync({ force: false });
        
        app.listen(8080,()=>
        {
            console.log("Server Started Successfully")
        })
    } catch (error) {
        console.log(error);
    }
}

index();
