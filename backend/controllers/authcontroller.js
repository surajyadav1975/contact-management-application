const express=require('express');
const contact_model=require('../models/contact-model');


exports.createcontact=async (req,res)=>{
    let {phone,email,firstname,lastname,company,jobtitle}=req.body;

    let em=await contact_model.find({email});
    if(em.email===email) return res.status(404).json({message:"same user details are already exist"});

    try{
        let contact=await contact_model.create({
          phone,
          email,
          firstname,
          lastname,
          company,
          jobtitle,
        })
        return res.status(200).json(contact);
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }
}

exports.getallcontact=async (req,res)=>{
    try{
        const contacts = await contact_model.find();
        return res.json({contacts});
    }
    catch(err){
        return res.json(err.message);
    }
}

exports.updatecontact= async (req, res) => {
    const { postId } = req.params;
    const {phone,email,firstname,lastname,company,jobtitle}=req.body;
    try {
      const updatedcont = await contact_model.findByIdAndUpdate(postId, { phone,email,firstname,lastname,company,jobtitle }, { new: true });
      return res.status(200).json(updatedcont);
    } catch (error) {
      return res.status(500).json({ message: 'Error updating post', error });
    }
  };


exports.deletecontact= async (req, res) => {
    const { postId } = req.params;
  try {
    const deletedcontact = await contact_model.findByIdAndDelete(postId);
    
    if (!deletedcontact) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully', post: deletedcontact });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
  };

  