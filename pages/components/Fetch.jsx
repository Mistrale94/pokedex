import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Fetch() {

  const { isLoading, data, error } = useQuery(["pokemon"], () =>
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return error;

  return <>
    {data.results.map((item, index) => (
    <li key={index}>
      <Link href={`./components/${item.name}`}>
        <a>
          <img src={item.image} alt={item.name} />
          <span>{index + 1}</span>
          <h2>{item.name}</h2>
        </a>
      </Link>
    </li>
    ))}
  </>;

}