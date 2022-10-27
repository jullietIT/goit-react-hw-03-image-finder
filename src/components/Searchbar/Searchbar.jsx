import React, { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import s from './Searchbar.module.css';

const INITIAL_QUERY = 'Напишіть, що шукаєте';

class Searchbar extends Component {
  state = {
    searchQuery: INITIAL_QUERY,
  };

  inputRef = React.createRef();

  componentDidMount() {
    this.props.searchQueryToUp(this.state.searchQuery);

    this.setState({ searchQuery: '' });

    if (!this.state.searchQuery) {
      return (this.inputRef.current.placeholder = 'search');
    }
    this.inputRef.current.placeholder = this.state.searchQuery;
  }

  handleInputChange = e =>
    this.setState({ searchQuery: e.currentTarget.value });

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.warn('Напишіть, що шукаєте!', {
        autoClose: 2000,
        theme: 'colored',
        icon: false,
      });
      return;
    }
    this.props.searchQueryToUp(this.state.searchQuery);
    this.inputRef.current.placeholder = this.state.searchQuery;
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    const { handleInputChange, handleSubmit } = this;
    return (
      <div className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <ImSearch />
          </button>
          <label>
            <input
              className={s.SearchFormInput}
              type="text"
              name="searchInput"
              ref={this.inputRef}
              placeholder="search"
              value={searchQuery}
              onChange={handleInputChange}
              pattern="^[0-9a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Щоб щось знайти, введіть пошукове слово, що складається з букв,апострофа,тире, цифр и пробілу."
            />
          </label>
        </form>
      </div>
    );
  }
}

Searchbar.propTypes = {
  searchQuery: PropTypes.string,
};

export default Searchbar;
