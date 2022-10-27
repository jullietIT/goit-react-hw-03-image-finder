import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    searchQuery: '',
  };

  searchQuerySubmit = query => this.setState({ searchQuery: query }); //запрос, пришедший с поисковой формы (снизу) передается в эту ф-цию и записывается в стейт, оттуда передается в проп галереи - запускается рендер

  render() {
    const { searchQuery } = this.state;
    const { searchQuerySubmit } = this;

    return (
      <div className="App">
        <Searchbar searchQueryToUp={searchQuerySubmit} />

        <ImageGallery searchQuery={searchQuery} />

        <ToastContainer />

        <Button />
      </div>
    );
  }
}

export default App;
