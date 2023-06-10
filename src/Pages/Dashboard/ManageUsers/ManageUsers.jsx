import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUserShield } from 'react-icons/fa'
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
import Swal from 'sweetalert2';
const ManageUsers = () => {
    const[axiosSecure]=useAxiosSecure("http://localhost:4000")
    const {data:user=[],refetch}=useQuery(["user"],async()=>{
        const res= await axiosSecure.get(`/user`)
        return res.data
    })
    const handleMakeAdmin=user=>{
        fetch(`http://localhost:4000/user/admin/${user._id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }).then(res=>res.json()).then(data=>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor=user=>{
        fetch(`http://localhost:4000/user/instructor/${user._id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }).then(res=>res.json()).then(data=>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is instructor now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleDelete = (user) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:4000/user/${user._id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  refetch();
                  Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
              });
          }
        });
      };
    return (
        <div>
            <h1
          id="classes"
          className="text-center text-4xl font-bold mx-auto uppercase mb-10 mt-20"
        >
          Selected Classes
        </h1>
           <div className="bg-gray-100 w-[990px] p-10 rounded-lg">
           <div className="overflow-x-auto">
            <table className="table w-[920px] mx-auto mt-4 text-white">
              {/* head */}
              <thead>
                <tr className="text-white uppercase">
                  <th className="bg-[#07332F]"></th>
                  <th className="bg-[#07332F]">Name</th>
                  <th className="bg-[#07332F]">Email</th>
                  <th className="bg-[#07332F]">Make Admin</th>
                  <th className="bg-[#07332F]">Make Instructor</th>
                  <th className="bg-[#07332F]">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {user.map((item, index) => (
                  <tr key={item._id}>
                    <th className="bg-gray text-black">{index + 1}</th>
                    <td className="bg-gray text-black">{item.name}</td>
                    <td className="bg-gray text-black">
                      {item.email}
                    </td>
                    <td className="bg-gray text-black">
                     {item.role==="admin"?  <FaUserShield className="disable opacity-30 bg-[#07332F] w-8 h-8 p-1 rounded-sm text-white" />:<span onClick={() => handleMakeAdmin(item)} >
                      <FaUserShield className="bg-[#07332F] w-8 h-8 p-1 rounded-sm text-white" />
                    </span>}
                    </td>
                    <td className="bg-gray text-black">
                    {item.role==="instructor"? <GiTeacher className="disable opacity-30 bg-[#07332F] w-8 h-8 p-1 rounded-sm text-white" />:<span onClick={() => handleMakeInstructor(item)}>
                      <GiTeacher className="bg-[#07332F] w-8 h-8 p-1 rounded-sm text-white" />
                    </span>}
                    </td>
                    <td className="bg-gray text-black">
                      <span onClick={() => handleDelete(item)}>
                        <MdOutlineDeleteOutline className="bg-[#07332F] w-8 h-8 p-1 rounded-sm text-white" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
           </div>
        </div>
    );
};

export default ManageUsers;