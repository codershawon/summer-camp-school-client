import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useClass = () => {
  const { user } = useAuth();
  console.log(user);
  const [axiosSecure] = useAxiosSecure(
    "https://summer-camp-school-server-side.vercel.app"
  );
  const {
    isLoading,
    refetch,
    data: bookedClass = [],
  } = useQuery(["bookedClass", user?.email], async () => {
    const response = await axiosSecure.get(`/bookedClass?email=${user?.email}`);
    return response.data;
  });
  return [bookedClass, refetch, isLoading];
};

export default useClass;
