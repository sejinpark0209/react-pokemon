import React, {Component} from 'react'
import PokemonModel from '../models/Pokemon'
import PokemonList from '../components/PokemonList'

class PokemonsContainer extends Component {
  constructor(){
      super()
      this.state = {
        pokemons: []
      }
    }
    componentDidMount(){
      this.fetchData()
    }
    fetchData(){
      PokemonModel.all().then( (res) => {
        this.setState ({
          pokemons: res.pokemons
        })
      })
    }

  render(){
    return (
      <div className='pokemonsContainer'>
        <h2>This is the pokemons container</h2>
        <PokemonList
          pokemons={this.state.pokemons} />
      </div>
    )
  }
}

export default PokemonsContainer
