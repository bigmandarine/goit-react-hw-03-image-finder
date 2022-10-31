import { Component } from 'react';
import { Search } from './Searchbar.styled';
import { getApi } from 'components/api/api';
class SearchInput extends Component {
  state = {
    value: '',
  };

  handleChange = evt => {
    this.setState({ value: evt.target.value });
  };
  onSubmit = evt => {
    evt.preventDefault();
    if (this.state.value.length <= 0) {
      return alert('Not found');
    }
    this.props.onSubmit(this.state.value);
  };
  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Search>
          <button type="submit">find</button>
          <input type="text" onChange={this.handleChange} value={value}></input>
        </Search>
      </form>
    );
  }
}

export default SearchInput;
