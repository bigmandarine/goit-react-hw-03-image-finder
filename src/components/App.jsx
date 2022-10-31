import { Component } from 'react';
import SearchInput from './Searchbar/Searchbar';
import { getApi } from './api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
class App extends Component {
  state = {
    galarry: [],
    id: '',
    page: 1,
    webformatURL: '',
    largeImageURL: '',
    searchName: '',
  };
  onSubmit = searchPicture => {
    this.setState({ searchName: searchPicture });
  };
  render() {
    const { searchName } = this.state;
    return (
      <div>
        <SearchInput onSubmit={this.onSubmit} />
        <ImageGallery />
        <div>{searchName}</div>
      </div>
    );
  }
}

export default App;
