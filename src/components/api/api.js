const KEY = '30078668-25ca7b274b0e0bd0b8e169162';
export async function getApi(search, page) {
  const response = await fetch(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  const data = await response.json();
  return data.hits.map(({ id, webformatURL, largeImageURL }) => {
    return { id, webformatURL, largeImageURL };
  });
}
