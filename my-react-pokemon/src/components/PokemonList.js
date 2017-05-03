import React, {Component} from 'react'
import Pokemon from './Pokemon'

class PokemonList extends Component {
  render(){
    let pokemonArray = this.props.pokemons.map( (pokemon) => {
      return (
        <Pokemon
          key={pokemon._id}
          pokemon={pokemon}/>
      )
    })
    return(
      <div className="pokemons">
        {pokemonArray}
      </div>
    )
  }
}

export default PokemonList
