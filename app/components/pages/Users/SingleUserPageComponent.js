"use client";
import { fetchSingleUser } from "@/app/lib/apiCalls/homePageApiCalls";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const SingleUserPageComponent = ({ userId }) => {
  const { isLoading, data } = useQuery({
    queryKey: ["user", userId],
    queryFn: fetchSingleUser,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <Link href="/">Back</Link>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.website}</p>
      <p>{data.address.street}</p>
      <p>{data.address.suite}</p>
      <p>{data.address.city}</p>
      <p>{data.address.zipcode}</p>
      <p>{data.address.geo.lat}</p>
      <p>{data.address.geo.lng}</p>
    </div>
  );
};

export default SingleUserPageComponent;
