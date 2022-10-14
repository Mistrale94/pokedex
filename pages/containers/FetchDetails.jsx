import React from "react";
import { useQuery } from "@tanstack/react-query";
import Pokemon from "../components/Pokemon";
import style from '../../styles/Home.module.scss';

export default function Fetch() {

    const { id } = context.query;

  const { isLoading, data, error } = useQuery(["pokemon"], () =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return error;

  return <div className={style.pokemon_container}>
      {data.results.map((item, index) => (
        <Pokemon key={index} pokemon={item} index={index}/>
      ))}
  </div>

}