import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useAdmin = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure("https://summer-camp-school-server-side.vercel.app");
    const { data: isAdmin,isAdminLoading } = useQuery(["isAdmin", user?.email], async () => {
      const response = await axiosSecure.get(`/user/admin/${user?.email}`);
      console.log("is admin response", response);
      return response.data.admin;
    }, {
      enabled: !loading
    });
  
    return [isAdmin,isAdminLoading];
};

export default useAdmin;