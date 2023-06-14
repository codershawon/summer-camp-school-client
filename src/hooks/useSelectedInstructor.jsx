import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';
import useAuth from './useAuth';

const useSelectedInstructor = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure("https://summer-camp-school-server-side.vercel.app");
    const { isLoading, refetch, data: instructor = [] } = useQuery(
        ["instructor", user?.email],
        async () => {
            if (user?.email) {
                const response = await axiosSecure.get(`/classes?email=${user.email}`);
                const instructorData = response.data;
                const filteredData = instructorData.filter(data => data.email === user.email);
                return filteredData;
            }
            return [];
        }
    );

    return [instructor, refetch, isLoading];
}

export default useSelectedInstructor;

