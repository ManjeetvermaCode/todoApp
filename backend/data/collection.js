import mongoose from "mongoose"
const collection=[
    {
        title:'morning routine',
        description:'desc',
        tasks:[
           new mongoose.Types.ObjectId('64f19e6644de5ea0d7ead4ba')
        ]
    },
    {
        title:'afternoon routine',
        tasks:[
           new mongoose.Types.ObjectId('64f19e6644de5ea0d7ead4bb'),
            new mongoose.Types.ObjectId('64f19e6644de5ea0d7ead4bc')
        ]

        
    },
]

export default collection