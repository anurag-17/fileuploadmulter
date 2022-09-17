var mongoose  =  require('mongoose');  
   
var excelSchema = new mongoose.Schema({  
    name:{  
        type:String  
    },  
   img:{
    type:String
   }
},{"strict":false});  

module.exports = mongoose.model('excelldata',excelSchema);  