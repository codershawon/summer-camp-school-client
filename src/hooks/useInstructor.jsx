import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';
import useAuth from './useAuth';

const useInstructor = () => {
  const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure("http://localhost:4000");
    const { data: isInstructor,isInstructorLoading } = useQuery(["isInstructor", user?.email], async () => {
      const response = await axiosSecure.get(`/user/instructor/${user?.email}`);
      console.log("is instructor response", response);
      return response.data.instructor;
    }, {
      enabled: !loading
    });
  
    return [isInstructor,isInstructorLoading];
};

export default useInstructor;




