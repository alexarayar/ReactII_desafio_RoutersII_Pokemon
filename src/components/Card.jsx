import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      {/* Agregar el botón de retroceso */}
      <Link to="/pokemones">
        <button className="back-button">Atrás</button>
      </Link>

      <div className="col">
        <h3>{pokemon.name}</h3>
        <img src={pokemon?.sprites?.front_default} alt="{pokemon.name}" />

        <div className="types">
          {pokemon?.types?.map((type) => {
            return <p key={type.type.name}>{type.type.name}</p>;
          })}
        </div>
      </div>
      <div className="col">
        <div className="stats">
          {pokemon?.stats?.map((stat) => {
            return (
              <p key={stat.stat.name}>
                {stat.stat.name} :<span>{stat.base_stat}</span>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
