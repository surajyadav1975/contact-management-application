import React, { useState, useContext } from 'react';
import { PencilSquareIcon, TrashIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import MyContext from '../context/createContext';

const Post = ({ post}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    firstname: post.firstname,
    lastname: post.lastname,
    jobtitle: post.jobtitle,
    email: post.email,
    phone: post.phone,
    company: post.company,
  });

  const {onUpdatePost,onDeletePost}=useContext(MyContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handledelete= async (e) =>{
    e.preventDefault();
    await onDeletePost(post._id);
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await onUpdatePost(post._id, editData); 
    setIsEditing(false); 
  };

  return (
    <div className="w-5/12 postlist h-5/12 mx-auto my-2 bg-white rounded-lg overflow-hidden">
      
      <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-gray-800">
        {post.firstname} {post.lastname}
      </h3>
      <p className="text-gray-600">{post.jobtitle}</p>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <span className="font-medium">Email:</span> {post.email}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-medium">Phone:</span> {post.phone}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-medium">Company:</span> {post.company}
        </p>
      </div>
      
    </div>

      <div className="">
        {isEditing && (
          <form onSubmit={handleEditSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              name="firstname"
              value={editData.firstname}
              onChange={handleInputChange}
              placeholder="First Name"
              className="p-2 border border-gray-300 rounded mt-2"
              required
            />
            <input
              type="text"
              name="lastname"
              value={editData.lastname}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="jobtitle"
              value={editData.jobtitle}
              onChange={handleInputChange}
              placeholder="Job Title"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="email"
              value={editData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="phone"
              value={editData.phone}
              onChange={handleInputChange}
              placeholder="Phone No."
              className="p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="company"
              value={editData.company}
              onChange={handleInputChange}
              placeholder="Company"
              className="p-2 border border-gray-300 rounded"
              required
            />
            <button type="submit" className="mt-2 bg-indigo-500 text-white rounded-lg px-4 py-2">
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="mt-2 bg-gray-500 text-white rounded-lg px-4 py-1"
            >
              Cancel
            </button>
          </form>
        )}
      </div>

      <div className="border-t border-gray-200 border-t-1 border-black">
      <div className="flex justify-evenly">
        <div
          className="flex cursor-pointer justify-center p-2 w-full h-full"
          onClick={() => setIsEditing(true)}
           >
          <PencilSquareIcon className="w-5 h-5 mr-1" />
          <span className="text-sm font-semibold text-gray-800">Edit</span>
        </div>
        <div
         className="flex cursor-pointer justify-center p-2 w-full h-full "
          onClick={handledelete}
        >
          <TrashIcon className="w-5 h-5 mr-1" />
          <span className="text-sm font-semibold text-gray-800">Delete</span>
         </div>
      </div>
      </div>
    </div>
  );
};

export default Post;

