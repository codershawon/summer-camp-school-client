import React from 'react';
import { useQuery } from 'react-query';

const useEnrolledClasses = () => {
    const{data:enrolledClasses=[], isLoading:loading,refetch}=useQuery({
        queryKey:["enrolledClasses"],
        queryFn:async()=>{
          const res= await fetch("http://localhost:4000/enrolledClasses")
          return res.json()
        }
      })
      return[enrolledClasses,loading,refetch]
};

export default useEnrolledClasses;
