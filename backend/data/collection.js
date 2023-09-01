import mongoose from "mongoose"
const collection=[
    {
        title:'morning routine',
        description:'desc',
        tasks:[
           new mongoose.Types.ObjectId('64f0bedf724dfa340fce084a')
        ]
    },
    {
        title:'afternoon routine',
        tasks:[
           new mongoose.Types.ObjectId('64f0bedf724dfa340fce084b'),
            new mongoose.Types.ObjectId('64f0bedf724dfa340fce084c')
        ]

        
    },
]

export default collection