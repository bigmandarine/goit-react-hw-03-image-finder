import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from './api/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonLoadMore } from './Button/ButtonLoad';
import { LoaderRing } from './Loader/Loader';
import { Modal } from './Modal/Modal';
class App extends Component {
  state = {
    galarry: [],
    id: '',
    page: 1,
    webformatURL: '',
    largeImageURL: '',
    searchName: '',
    status: 'idle',
    modal: false,
  };

  async componentDidUpdate(_, prevState) {
    const prevSearch = prevState.searchName;
    const newSearch = this.state.searchName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevSearch !== newSearch || prevPage !== nextPage) {
      this.setState({ status: 'pending' });
      if (prevSearch !== newSearch) {
        this.setState({ page: 1, galarry: [] });
      }

      try {
        const imageList = await fetchImages(newSearch, 42);
        this.setState(prevState => ({
          galarry: [...prevState.galarry, ...imageList],
          status: 'resolved',
        }));
        if (imageList.length === 0) {
        }
      } catch (error) {}
    }
  }

  onSubmit = searchPicture => {
    this.setState({ searchName: searchPicture, page: 1 });
  };

  resetSearch = () => {
    this.setState({ searchName: null });
  };
  onClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  onClickToggleModal = largeImage => {
    this.setState({ modal: !this.state.modal, largeImageURL: largeImage });
  };
  onClickBackDrop = e => {
    if (e.currentTarget === e.target) {
      this.setState({ modal: !this.state.modal, largeImageURL: '' });
    }
  };

  render() {
    const { galarry, status, modal, largeImageURL } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery gallery={galarry} onClick={this.onClickToggleModal} />
        {status === 'pending' && <LoaderRing />}
        {(galarry.length === 12 || galarry.length > 12) && (
          <ButtonLoadMore onClick={this.onClickLoadMore} />
        )}
        {modal && (
          <Modal image={largeImageURL} onClick={this.onClickBackDrop} />
        )}
      </div>
    );
  }
}

export default App;
