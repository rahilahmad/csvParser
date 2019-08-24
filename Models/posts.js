const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    servings:{
        type:Number,
    },
    servingsize:{
        type:Number,
    },
    shipping_height:{
        type:Number,
    },
    shipping_length:{
        type:Number,
    },
    shipping_width:{
        type:Number,
    },
    volume:{
        type:Number
    },
    volumeunit:{
        type:String
    },
    warning:{
        type:String
    },
    weight:{
        type:Number
    },
    id:{
        type:Number
    },
    sdescription:{
        type:String
    }
})

module.exports = mongoose.model('Post',PostSchema)


