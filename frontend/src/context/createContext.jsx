import {React ,createContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';

const apiurl = import.meta.env.VITE_API_URL;

const MyContext=createContext();

export const Myprovider=({children})=>{
    const [conts,setconts] =useState([]);
    const [loading, setLoading] = useState(true);

    const navigate=useNavigate();

    const createcontact=async (formdata)=>{
      let response=await fetch(`${apiurl}/contacts/add`,{
        method : "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
        credentials:'include',
        })

        if(response.ok){
          navigate('/');
        }
        else if(response.status===404){
          alert('already exist');
        }
        else{
          alert('someerroroccured');
        }
  }

    const fetchcontacts = async () => {
        try {
          const response = await fetch(`${apiurl}/contacts/getallcontacts`,{
            credentials:'include',
          }
        );
          const {contacts}= await response.json();
          setconts(contacts); 
          setLoading(false); 
        } catch (error) {
          alert(error.message);
          setLoading(false);
        }
      };

      const onUpdatePost = async (postId, updatedData) => {
        try {
          const response = await fetch(`${apiurl}/contacts/${postId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData),
            credentials:'include',
          });
          if (response.ok) {
            fetchcontacts();
          }
        } catch (error) {
          console.error('Error updating post:', error);
        }
      };
      
      const onDeletePost = async (postId) => {
        try {
          const response = await fetch(`${apiurl}/contacts/delete/${postId}`, {
            method: 'DELETE',
            credentials:'include',
          });
          if (response.ok) {
            fetchcontacts();
          }
        } catch (error) {
          console.error('Error deleting post:', error);
        }
      };

      return (
        <MyContext.Provider value={{loading,conts,fetchcontacts,createcontact,onUpdatePost,onDeletePost}}>
            {children}
        </MyContext.Provider>
    );
    
}

export default MyContext;