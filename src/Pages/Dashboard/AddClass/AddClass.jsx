import React from "react";
import "./AddClass.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { name, instructorName, email, availableSeats, price, image } = data;
    const newClass = {
      name,
      instructorName,
      email,
      availableSeats,
      price: parseFloat(price),
      image,
    };
    console.log(newClass);
    
    fetch("http://localhost:4000/classes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add New Class Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };


  return (
    <div>
      <h1
        id="classes"
        className="text-center text-4xl font-bold mx-auto uppercase mb-10 mt-20"
      >
        Add a Class
      </h1>
     
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-gray-300 w-[600px] p-10 rounded-lg mx-auto">
        <div className="font-bold">
          <h5>Name</h5>
          <input
            className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
          <div>
            {errors.name && (
              <span className="text-red-800">Name is required</span>
            )}
          </div>
        </div>
        <div className="font-bold mt-5 ">
          <h5>Image</h5>
          <input
            type="text"
            name="image"
            placeholder="Enter Image URL"
            className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
            {...register("image", { required: true })}
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
            {...register("instructorName", { required: true })}
          />
          <div>
            {errors.instructorName && (
              <span className="text-red-800">Instructor Name is required</span>
            )}
          </div>
        </div>
        <div className="font-bold mt-5">
          <h5>Instructor Email</h5>
          <input
            className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
            type="email"
            name="email"
            id=""
            placeholder="Enter Instructor Email"
            {...register("email", {
              required: true,
            })}
          />

          <div>
            {" "}
            {errors.email?.type === "required" && (
              <span className="text-red-800">Email is required</span>
            )}
          </div>
        </div>
        <div className="font-bold mt-5">
          <h5>Available Seats</h5>
          <input
            className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
            type="number"
            name="availableSeats"
            id=""
            placeholder="Enter Available Seats"
            {...register("availableSeats", {
              required: true,
            })}
          />

          <div>
            {" "}
            {errors.availableSeats?.type === "required" && (
              <span className="text-red-800">Available Field is required</span>
            )}
          </div>
        </div>
        <div className="font-bold mt-5">
          <h5>Price</h5>
          <input
            className="w-[450px] h-[50px] bg-[#F3F3F3] rounded-lg pl-3"
            type="number"
            name="price"
            id=""
            placeholder="Enter price"
            {...register("price", {
              required: true,
            })}
          />

          <div>
            {" "}
            {errors.price?.type === "required" && (
              <span className="text-red-800">Price Field is required</span>
            )}
          </div>
        </div>
        <input
          className="btn mt-5 w-[450px] text-white"
          style={{ backgroundColor: "#07332F" }}
          type="submit"
          value="Add Class"
        />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
