import React, {Component} from 'react'
import {Link} from 'react-router'

class Header extends Component{
  render(){
    return (
      <header>
        <h1><Link to={'/pokemons'}>React Pokemons</Link></h1>
      </header>
    )
  }
}

export default Header
