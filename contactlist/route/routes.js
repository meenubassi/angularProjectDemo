
const express = require('express');
const router= express.Router();

const Contact= require('../models/contacts');

router.get('/view', (req, res, next) =>{
    Contact.find(function(err, contacts){
        if(err)
        { res.send({status:500,message:'unable find customers'});}
        else
        {
          
          res.send({status:200, results: contacts});
        }
    
      });
     
  });
  router.post('/add', (req, res, next) =>{

    let newContact= new Contact({
        
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone:req.body.phone
        
    
      });
newContact.save(function(err,contact){

        if(err)
        { res.send({status:500,message:'unable to add cutomer'});}
        else
        {
          res.send({status:200,message:'add cutomer sucessfully'});
        }
        
    
      });
   
  });
  router.delete('/delete/:id', (req, res, next) =>{
      Contact.remove({_id:req.params.id},function(err,result){
          if(err){
              res.json(err);
          }
          else{
              res.json(result);
          }
      })
    
  });
  
router.get('/view/:id', function(req, res, next) {

  
  Contact.find({_id:req.params.id}, function(err, result){

    if(err)
    { res.send({message:'unable find customers'});}
    else
    {
    

     res.json(result)
    }

  });
 
});


router.put('/update/:id', (req, res, next) =>{
  
  let newContact= new Contact({

  
      _id:req.body._id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phone:req.body.phone,
   
      
  
    });
    const id= req.body._id;
   
    Contact.findByIdAndUpdate(id,newContact,{useFindAndModify:false}, function(err,customerresponse){
     
      if(err)
      {
          res.json("Not Find Customer");}
      else
      {
        
        res.json(customerresponse);
        
      }
      
    });
  });
 
 module.exports= router;