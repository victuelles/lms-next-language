// const {PrismaClient} = require("@prisma/client")
import { PrismaClient } from '@prisma/client'


const database = new PrismaClient()

async function main(){

    try {

        console.log("Resetting the database and seeding.");

        await database.category.deleteMany({})

        await database.course.deleteMany({})

        await database.category.createMany({
            data:[
                {name:"Tagalog(Filipino)"},
                {name:"Pangasinan"},
                {name:"Ilocano"},
                {name:"Bisaya"},
                {name:"Pampango"},
                {name:"Bicol"},
                {name:"Ilongo"},
            ]
        })


        console.log("Success...")
    } catch (error) {
        console.log("Error seeding the database categories and courses ...",error)
        
    }finally{
        await database.$disconnect()
    }
}

main()