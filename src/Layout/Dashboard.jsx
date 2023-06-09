import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Container from "../Pages/Shared/Container";
import "./Dashboard.css";
import { AiFillHome, AiOutlineSelect } from "react-icons/ai";
import { MdOutlineClass } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import useClass from "../hooks/useClass";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [bookedClass] = useClass();
  const isAdmin = useAdmin();
  const isInstructor = useInstructor();

  return (
    <Container>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Dashboard
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#07332F] text-gray-400 text-lg font-bold">
            {/* Sidebar content here */}
            {isAdmin ? <>
              <li className="list-item">
              <NavLink to="/admin">
                <AiFillHome /> Admin Home
              </NavLink>
            </li>
              <li className="list-item">
              <NavLink to="/dashboard/manageClasses">
                <AiFillHome /> Manage Classes
              </NavLink>
            </li>
              <li className="list-item">
              <NavLink to="/dashboard/manageUsers">
                <AiFillHome /> Manage Users
              </NavLink>
            </li>
            </> : isInstructor ? <>
            <li className="list-item">
              <NavLink to="/instructor">
                <AiFillHome /> Instructor Home
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/addClass">
                <AiFillHome /> Add a Class
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/myClasses">
                <AiFillHome /> My Classes
              </NavLink>
            </li>
              </> : (
              <>
                <li className="list-item">
                  <NavLink to="/">
                    <AiFillHome /> Student Home
                  </NavLink>
                </li>
                <li className="list-item">
                  {" "}
                  <NavLink to="/dashboard/bookedClass">
                    <AiOutlineSelect /> Selected Classes
                    <span className="indicator ml-5">
                      <span className="indicator-item badge badge-primary">
                        {bookedClass?.length || 0}+
                      </span>
                    </span>
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink to="/dashboard/payments">
                    <MdOutlineClass /> Payment
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink to="/dashboard/enrolledClasses">
                    <MdOutlineClass /> Enrolled Classes
                  </NavLink>
                </li>
              </>
            )}

            <hr className="border-2 border-zinc-600 rounded-sm mb-6"></hr>
            <li className="list-item">
              <NavLink to="/">
                <AiFillHome /> Home
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/instructors">
                <GiTeacher /> Instructors
              </NavLink>
            </li>
            <li className="list-item">
              <NavLink to="/classes">
                <SiGoogleclassroom /> Classes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;

