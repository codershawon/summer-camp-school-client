// import React from 'react';
// import useAxiosSecure from './useAxiosSecure';

// const instructor = () => {
//     const { user } = useAuth();
//   const [axiosSecure] = useAxiosSecure("https://summer-camp-school-server-side.vercel.app");
//   const { isLoading, refetch, data: enrolledClasses = [] } = useQuery(
//     ["enrolledClasses", user?.email],
//     async () => {
//       if (user?.email) {
//         const response = await axiosSecure.get(`/payments?email=${user.email}`);
//         const paymentData = response.data;
//         const filteredData = paymentData.filter(payment => payment.email === user.email);
//         return filteredData;
//       }
//       return [];
//     }
//   );

//   return [enrolledClasses, refetch, isLoading];
// };

// export default instructor;