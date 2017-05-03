import $ from 'jquery-ajax'

class PokemonModel {
  static all(){
    let request = $.ajax({
      url: "https://super-crud.herokuapp.com/pokemon",
      method: 'GET'
    })
    return request
  }
}

export default PokemonModel
