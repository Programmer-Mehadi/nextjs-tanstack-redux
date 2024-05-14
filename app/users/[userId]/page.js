import SingleUserPageComponent from "@/app/components/pages/Users/SingleUserPageComponent";
import { fetchSingleUser } from "@/app/lib/apiCalls/homePageApiCalls";
import { TanstackPrefetchQuery } from "@/app/lib/tanstack/TanstackPrefetchQuery";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data.map((user) => ({
    userId: user.id.toString(),
  }));
};


const UserDetailsPage = ({ params: { userId } }) => {
  TanstackPrefetchQuery({
    queryKey: ["user", userId],
    queryFn: fetchSingleUser,
  });
  return <SingleUserPageComponent userId={userId} />;
};

export default UserDetailsPage;
