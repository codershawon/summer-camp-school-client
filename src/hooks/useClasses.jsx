import React from 'react';
import { useQuery } from 'react-query';

const useClasses = () => {
    const{data:classes=[], isLoading:loading,refetch}=useQuery({
        queryKey:["classes"],
        queryFn:async()=>{
          const res= await fetch("https://summer-camp-school-server-side.vercel.app")
          return res.json()
        }
      })
      return[classes,loading,refetch]
};

export default useClasses;