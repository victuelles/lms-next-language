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
                {name:"Tagalog",
                imageSrc: "/tagalog.png"    ,
                description:`Iloco (also Ilokano; /iːloʊˈkɑːnoʊ/;[6] Ilocano: Pagsasao nga Iloko) is an Austronesian language predominantly spoken in the Philippines by the Ilocano people. It ranks as the third most widely spoken native language in the country and serves as a lingua franca in Northern Luzon, particularly among the Igorot people and the indigenous settlers of Cagayan Valley.

As an Austronesian language, Ilocano shares linguistic roots with other Philippine languages and is related to Malay (both Indonesian and Malaysian), Tetum, Chamorro, Fijian, Māori, Hawaiian, Samoan, Tahitian, Paiwan, and Malagasy. It exhibits close ties with several Austronesian languages in Northern Luzon and has some degree of mutual intelligibility with the Balangao language and certain eastern dialects of Bontoc. [7]

The Ilocano people historically utilized an indigenous writing system known as kur-itan. There have been proposals to revive this script by incorporating its instruction in public and private schools within Ilocos Norte and Ilocos Sur, where Ilocano is predominantly spoken.`,
},
                {name:"Pangasinan",
                    imageSrc: "/tagalog.png"    ,
                    description:`Iloco (also Ilokano; /iːloʊˈkɑːnoʊ/;[6] Ilocano: Pagsasao nga Iloko) is an Austronesian language predominantly spoken in the Philippines by the Ilocano people. It ranks as the third most widely spoken native language in the country and serves as a lingua franca in Northern Luzon, particularly among the Igorot people and the indigenous settlers of Cagayan Valley.
    
    As an Austronesian language, Ilocano shares linguistic roots with other Philippine languages and is related to Malay (both Indonesian and Malaysian), Tetum, Chamorro, Fijian, Māori, Hawaiian, Samoan, Tahitian, Paiwan, and Malagasy. It exhibits close ties with several Austronesian languages in Northern Luzon and has some degree of mutual intelligibility with the Balangao language and certain eastern dialects of Bontoc. [7]
    
    The Ilocano people historically utilized an indigenous writing system known as kur-itan. There have been proposals to revive this script by incorporating its instruction in public and private schools within Ilocos Norte and Ilocos Sur, where Ilocano is predominantly spoken.`,},
                {name:"Ilocano",
                    imageSrc: "/tagalog.png"    ,
                    description:`Iloco (also Ilokano; /iːloʊˈkɑːnoʊ/;[6] Ilocano: Pagsasao nga Iloko) is an Austronesian language predominantly spoken in the Philippines by the Ilocano people. It ranks as the third most widely spoken native language in the country and serves as a lingua franca in Northern Luzon, particularly among the Igorot people and the indigenous settlers of Cagayan Valley.
    
    As an Austronesian language, Ilocano shares linguistic roots with other Philippine languages and is related to Malay (both Indonesian and Malaysian), Tetum, Chamorro, Fijian, Māori, Hawaiian, Samoan, Tahitian, Paiwan, and Malagasy. It exhibits close ties with several Austronesian languages in Northern Luzon and has some degree of mutual intelligibility with the Balangao language and certain eastern dialects of Bontoc. [7]
    
    The Ilocano people historically utilized an indigenous writing system known as kur-itan. There have been proposals to revive this script by incorporating its instruction in public and private schools within Ilocos Norte and Ilocos Sur, where Ilocano is predominantly spoken.`,},
                {name:"Bisaya",
                    imageSrc: "/tagalog.png"    ,
                    description:`Iloco (also Ilokano; /iːloʊˈkɑːnoʊ/;[6] Ilocano: Pagsasao nga Iloko) is an Austronesian language predominantly spoken in the Philippines by the Ilocano people. It ranks as the third most widely spoken native language in the country and serves as a lingua franca in Northern Luzon, particularly among the Igorot people and the indigenous settlers of Cagayan Valley.
    
    As an Austronesian language, Ilocano shares linguistic roots with other Philippine languages and is related to Malay (both Indonesian and Malaysian), Tetum, Chamorro, Fijian, Māori, Hawaiian, Samoan, Tahitian, Paiwan, and Malagasy. It exhibits close ties with several Austronesian languages in Northern Luzon and has some degree of mutual intelligibility with the Balangao language and certain eastern dialects of Bontoc. [7]
    
    The Ilocano people historically utilized an indigenous writing system known as kur-itan. There have been proposals to revive this script by incorporating its instruction in public and private schools within Ilocos Norte and Ilocos Sur, where Ilocano is predominantly spoken.`,},
                {name:"Pampango",
                    imageSrc: "/tagalog.png"    ,
                    description:`Iloco (also Ilokano; /iːloʊˈkɑːnoʊ/;[6] Ilocano: Pagsasao nga Iloko) is an Austronesian language predominantly spoken in the Philippines by the Ilocano people. It ranks as the third most widely spoken native language in the country and serves as a lingua franca in Northern Luzon, particularly among the Igorot people and the indigenous settlers of Cagayan Valley.
    
    As an Austronesian language, Ilocano shares linguistic roots with other Philippine languages and is related to Malay (both Indonesian and Malaysian), Tetum, Chamorro, Fijian, Māori, Hawaiian, Samoan, Tahitian, Paiwan, and Malagasy. It exhibits close ties with several Austronesian languages in Northern Luzon and has some degree of mutual intelligibility with the Balangao language and certain eastern dialects of Bontoc. [7]
    
    The Ilocano people historically utilized an indigenous writing system known as kur-itan. There have been proposals to revive this script by incorporating its instruction in public and private schools within Ilocos Norte and Ilocos Sur, where Ilocano is predominantly spoken.`,},
                {name:"Bicol",
                    imageSrc: "/tagalog.png"    ,
                    description:`Iloco (also Ilokano; /iːloʊˈkɑːnoʊ/;[6] Ilocano: Pagsasao nga Iloko) is an Austronesian language predominantly spoken in the Philippines by the Ilocano people. It ranks as the third most widely spoken native language in the country and serves as a lingua franca in Northern Luzon, particularly among the Igorot people and the indigenous settlers of Cagayan Valley.
    
    As an Austronesian language, Ilocano shares linguistic roots with other Philippine languages and is related to Malay (both Indonesian and Malaysian), Tetum, Chamorro, Fijian, Māori, Hawaiian, Samoan, Tahitian, Paiwan, and Malagasy. It exhibits close ties with several Austronesian languages in Northern Luzon and has some degree of mutual intelligibility with the Balangao language and certain eastern dialects of Bontoc. [7]
    
    The Ilocano people historically utilized an indigenous writing system known as kur-itan. There have been proposals to revive this script by incorporating its instruction in public and private schools within Ilocos Norte and Ilocos Sur, where Ilocano is predominantly spoken.`,},
                {name:"Ilongo",
                    imageSrc: "/tagalog.png"    ,
                    description:`Iloco (also Ilokano; /iːloʊˈkɑːnoʊ/;[6] Ilocano: Pagsasao nga Iloko) is an Austronesian language predominantly spoken in the Philippines by the Ilocano people. It ranks as the third most widely spoken native language in the country and serves as a lingua franca in Northern Luzon, particularly among the Igorot people and the indigenous settlers of Cagayan Valley.
    
    As an Austronesian language, Ilocano shares linguistic roots with other Philippine languages and is related to Malay (both Indonesian and Malaysian), Tetum, Chamorro, Fijian, Māori, Hawaiian, Samoan, Tahitian, Paiwan, and Malagasy. It exhibits close ties with several Austronesian languages in Northern Luzon and has some degree of mutual intelligibility with the Balangao language and certain eastern dialects of Bontoc. [7]
    
    The Ilocano people historically utilized an indigenous writing system known as kur-itan. There have been proposals to revive this script by incorporating its instruction in public and private schools within Ilocos Norte and Ilocos Sur, where Ilocano is predominantly spoken.`,},
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