"use client";
import { fetchUsers } from "@/app/lib/apiCalls/homePageApiCalls";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const HomePageComponents = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["home"],
    queryFn: fetchUsers,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data?.map((user) => {
        return (
          <div key={user.id}>
            <Link className="hover:text-blue-700" href={`/users/${user.id}`}>{user.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomePageComponents;
