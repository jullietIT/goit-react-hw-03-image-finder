import axios from 'axios';

class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.KEY = '30811171-825ab632a15afaa4bfdd1b4f2';
    this.BASE_URL = 'https://pixabay.com/api/';
    this.page = 1;
    this.orientation = 'all';
    this.imgType = 'all';
  }

  /* вариант используя async-away + axios + try-catch, который применен в ф-ции выше*/

  async fetchImages(query, page) {
    this.searchQuery = query;
    this.page = page;
    const url = `${this.BASE_URL}?image_type=${this.imgType}&orientation=${this.orientation}&page=${this.page}&per_page=12&key=${this.KEY}&q=${this.searchQuery}`;
    const response = await axios.get(url);
    return response;
  }
}

const apiService = new ImagesApiService();

export default apiService;
