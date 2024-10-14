const {PrismaClient} = require("@prisma/client")

const database = new PrismaClient()

async function main(){

    try {
        console.log("Resetting the database");

        await database.category.deleteMany({})
        await database.course.deleteMany({})
        console.log("Success...")
    } catch (error) {
        console.log("Error resetting  the database   ...")
        
    }finally{
        await database.$disconnect()
    }
}

main()