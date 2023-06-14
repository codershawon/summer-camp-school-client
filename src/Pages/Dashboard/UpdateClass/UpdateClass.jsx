import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useClasses from '../../../hooks/useClasses';
import Swal from 'sweetalert2';

const UpdateClass = () => {
    const [classes]=useClasses()
    const {user}=useAuth()
    const handleUpdateClass=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const instructorName=form.instructorName.value;
        const email=form.email.value;
        const availableSeats=form.availableSeats.value;
        const  price=form.price.value;
        const  image=form.image.value;
        const updatedClass={name,instructorName,email,availableSeats,price,image}
        fetch(`https://summer-camp-school-server-side.vercel.app/classes/${classes._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedClass),
          }).then(res=>res.json()).then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
            Swal.fire({
                title: 'Class Updated Successful!',
                text: 'Your action was successful',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000,
              });
            form.reset()
        }
       })
    }
    return (
        <div>
            <SectionTitle heading="UPDATE CLASS" /> 
     
     <form onSubmit={handleUpdateClass}>
     <div className="bg-gray-300 w-[600px] p-10 rounded-lg mx-auto">
       <div className="font-bold">
         <h5>Name</h5>
         <input
           className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
           type="text"
           name="name"
           id=""
           placeholder="Enter your name"
         />
       </div>
       <div className="font-bold mt-5 ">
         <h5>Image</h5>
         <input
           type="text"
           name="image"
           placeholder="Enter Image URL"
           className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
         />
       </div>
       <div className="font-bold mt-5">
         <h5>Instructor Name</h5>
         <input
           className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
           type="text"
           name="instructorName"
           id=""
           placeholder="Enter Instructor Name"
           defaultValue={user?.displayName}
        //    readOnly
         />
       </div>
       <div className="font-bold mt-5">
         <h5>Instructor Email</h5>
         <input
           className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
           type="email"
           name="email"
           id=""
           placeholder="Enter Instructor Email"
           defaultValue={user?.email}
           readOnly 
         />
       </div>
       <div className="font-bold mt-5">
         <h5>Available Seats</h5>
         <input
           className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
           type="number"
           name="availableSeats"
           id=""
           placeholder="Enter Available Seats"
         />
       </div>
       <div className="font-bold mt-5">
         <h5>Price</h5>
         <input
           className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
           type="number"
           name="price"
           id=""
           placeholder="Enter price"
         />
       </div>
       <input
         className="btn mt-5 w-[450px] text-white"
         style={{ backgroundColor: "#07332F" }}
         type="submit"
         value="Update Class"
       />
       </div>
     </form>
        </div>
    );
};

export default UpdateClass;