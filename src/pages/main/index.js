import React, { Component } from 'react';
import api from '../../services/api';


export default class Main extends Component {
  // métodos de ciclo de vida, de montagem, de exibição do componente na tela.
  componentDidMount() {
    this.loadProducts()
  }

  loadProducts = async () => {
    const response = await api.get(`/products`)
    console.log(response)
  }

  render() {
    return <h1>Helloooo!</h1>
  }
}