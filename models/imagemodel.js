
var mongoose  =  require('mongoose');  
   
var ImageSchema = new mongoose.Schema({  
    name:{  
        type:String  
    },  
   img:{
    type:String
   }
},);  

module.exports = mongoose.model('imagemodel',ImageSchema);