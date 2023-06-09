import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useClass = () => {
    const {user}=useAuth()
    const [axiosSecure]=useAxiosSecure("http://localhost:4000")
    const {isLoading,
        refetch,
        data: selectedClass = [],
      }=useQuery(["bookedClass",user?.email], async ()=>{
        const response = await axiosSecure.get(`/bookedClass?email=${user?.email}`);
        return response.data;
      })
    return [selectedClass,refetch]
};

export default useClass;