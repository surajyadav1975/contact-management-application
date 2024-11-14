const mongoose=require('mongoose');

const contactsSchema=mongoose.Schema({
    phone: String,
    email: String,
    firstname: String,
    lastname: String,
    company: String,
    jobtitle: String,
});

module.exports=mongoose.model('contact',contactsSchema);