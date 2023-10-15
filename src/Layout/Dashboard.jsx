import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Container from "../Pages/Shared/Container";
import "./Dashboard.css";
import { AiFillHome, AiOutlineSelect } from "react-icons/ai";
import { MdClass, MdOutlineClass } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import useClass from "../hooks/useClass";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { FaDollarSign, FaHistory, FaPersonBooth, FaWallet } from "react-icons/fa";
import {
  HiMenuAlt3,
  HiOutlineUserGroup,
  HiX,
} from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import {
  RiLogoutCircleRLine,
} from "react-icons/ri";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Dashboard = () => {
  
  const [open, setOpen] = useState(true);
  const { user, logout } = useAuth();
  const [bookedClass] = useClass();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to LogOut?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No!",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout() 
        .then(() => {
          navigate(from, { replace: true });
        })
        .catch((error) => console.log(error));
        Swal.fire("LogOut successfully");
        navigate(from, { replace: true });
      }
    });
  };
  const getDashboardLinks = () => {
    if (isAdmin) {
      return adminDashboardLinks;
    } else if (isInstructor) {
      return instructorDashboardLinks;
    } else {
      return userDashboardLinks;
    }
  };
  const adminDashboardLinks = [
   

    {name: `Admin Home`,link: "/dashboard/admin",icon: MdOutlineDashboard,},
    {name: `Manage Class`,link: "/dashboard/manageClasses",icon: MdClass,},
    {name: `Manage Users`,link: "/dashboard/manageUsers",icon: HiOutlineUserGroup,},
    { name: `Home`, link: "/", icon: AiFillHome },
    { name: `Instructors`, link: "/instructors", icon: GiTeacher },
    { name: `Classes`, link: "/classes", icon: SiGoogleclassroom, margin: true },
  ];
  const  instructorDashboardLinks = [
   

    {name: `Instructor Home`,link: "/dashboard/instructor",icon: MdOutlineDashboard,},
    {name: `Add a class`,link: "/dashboard/addClass",icon: MdClass,},
    {name: `My Class`,link: "/dashboard/myClass",icon: MdClass,},
    { name: `Home`, link: "/", icon: AiFillHome },
    { name: `Instructors`, link: "/instructors", icon: GiTeacher },
    { name: `Classes`, link: "/classes", icon: SiGoogleclassroom, margin: true },
  ];
  const userDashboardLinks = [

    {name: `Student Home`,link: "/dashboard/student",icon: MdOutlineDashboard,},
    {name: `Selected Class`,link: "/dashboard/bookedClass",icon: MdClass,},
    {name: `Payment`,link: "/dashboard/payments",icon: FaWallet,},
    {name: `Enrolled Classes`,link: "/dashboard/enrolledClasses",icon: FaPersonBooth,},
    {name: `Payment History`,link: "/dashboard/paymentHistory",icon: FaHistory,},
    { name: `Home`, link: "/", icon: AiFillHome },
    { name: `Instructors`, link: "/instructors", icon: GiTeacher },
    { name: `Classes`, link: "/classes", icon: SiGoogleclassroom, margin: true },
  ];

  return (
      <section className="flex gap-2 md:gap-6">
      <div
        className={` min-h-screen  bg-[#07332F]  ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}>
        <div className="py-3 flex justify-end">
          {open ? (
            <>
              <HiX
                title="Close SideBar"
                size={26}
                className="cursor-pointer "
                onClick={() => setOpen(!open)}
              />
            </>
          ) : (
            <>
              <HiMenuAlt3
                title="Open SideBar"
                size={26}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </>
          )}
        </div>

        {/* User Profile */}

        <Link
          title="User Profile"
          className={`${
            open ? "avatar onl flex mt-6" : "avatar online flex mt-6"
          }`}>
          <div
            className={`w-20 mx-auto rounded-full ring ring-white ring-offset-base-100 ring-offset-2 duration-500 ${
              !open &&
              "w-10 rounded-full ring ring-white ring-offset-base-100 ring-offset-1"
            }`}>
            <img
              src={user?.photoURL}
              alt={user?.displayName}
              title={user?.displayName}
            />
          </div>
        </Link>

        {/* User Information */}
        {open ? (
          <>
            <div
              className={`whitespace-pre duration-500 text-center my-5 ${
                !open && "opacity-0 translate-x-28 overflow-hidden "
              }`}>
              <h4
                className={`text-xl ${
                  !open && "opacity-0 translate-x-28 overflow-hidden text-lg text-gray-300 font-bold"
                }`}>
                {user?.displayName}
              </h4>
              <p
                className={`text-xs text-gray-300 font-bold ${
                  !open && "opacity-0 translate-x-28 overflow-hidden "
                }`}>
                {user?.email}
              </p>
            </div>
          </>
        ) : (
          <></>
        )}

<div className="my-8 flex flex-col gap-3 relative duration-500 active-class">
     {getDashboardLinks().map((menu, i) => (
            <React.Fragment key={i}>
              {menu.link === "/" && <hr className="my-2 border-gray-600 border" />} {/* Add hr before Home link */}
              <NavLink
                to={menu.link}
                className={`${
                  menu.margin && ""
                } group flex items-center gap-3.5  p-2 duration-500 hover:bg-gray-800 rounded-md text-base text-gray-300 font-bold ${
                  menu.link === "/"
                    ? "topMarginLink"
                    : ""
                }`}
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>

              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu.name}
              </h2>
            </NavLink>
            </React.Fragment>
          ))}
        </div>

        {/* Logout sections */}

        <div
          onClick={handleLogout}
          title="LogOut"
          className={` flex gap-4 cursor-pointer p-2 bg-gray-800 hover:bg-gray-50 hover:text-black rounded-md duration-500 ${
            !open && "p-2 "
          } `}>
          <div className={` duration-500 ${!open && "duration-500"}`}>
            <RiLogoutCircleRLine className="text-2xl" />
          </div>
          <div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}>
              Logout
            </h2>
          </div>
        </div>
      </div>

      {/* Components Start */}
      <div className="m-3 w-full text-gray-900  ">
        <Outlet />
      </div>
      {/* Components End */}
    </section>
  );
};

export default Dashboard;


