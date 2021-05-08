const mongoose= require('mongoose');
const contactsSchema= mongoose.Schema({
    
   firstname:{
       type:String,
       required: true
   },
   lastname:{
    type:String,
    required: true
},
    phone:{
    type:String,
    required: true
},

});
const Contact= mongoose.model('contacts', contactsSchema);
module.exports=Contact;