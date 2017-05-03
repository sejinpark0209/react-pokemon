import React from 'react'
import {Route} from 'react-router'
import App from '../App'
import PokemonsContainer from '../containers/PokemonsContainer'

module.exports = (
  <Route path='/' component={App}>
    <Route path='/pokemons' component={PokemonsContainer}/>
  </Route>
)
