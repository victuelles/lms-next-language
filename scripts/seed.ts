const {PrismaClient} = require("@prisma/client")

const database = new PrismaClient()

async function main(){

    try {

        console.log("Resetting the database and seeding.");

        await database.category.deleteMany({})

        await database.course.deleteMany({})

        await database.category.createMany({
            data:[
                {name:"Computer Science"},
                {name:"Music"},
                {name:"Fitness"},
                {name:"Photography"},
                {name:"Accounting"},
                {name:"Engineering"},
                {name:"Filming"},
            ]
        })

        // await database.course.createMany({
        //     data:[
        //         {title:"Tagalog- Basic",
        //         description:"Basic day to day terms ",
        //         imageUrl:"https://utfs.io/f/TCTFDrU70C5YtWbaxr9k6eJi9gfPcQ2hCNw8obEI1M4qWTpZ",


        //         }
                
        //     ]
        // })
        console.log("Success...")
    } catch (error) {
        console.log("Error seeding the database categories and courses ...",error)
        
    }finally{
        await database.$disconnect()
    }
}

main()