import React, {Component} from 'react'

class Pokemon extends Component {
  render(){
    return(
      <p data-todos-index={this.props.pokemon._id}>
        <img src={this.props.pokemon.image}></img>
        <h3>{this.props.pokemon.name}</h3>
        <h3>{this.props.pokemon.pokedex}</h3>
        <h3>{this.props.pokemon.evolves_from}</h3>
      </p>
    )
  }
}

export default Pokemon
