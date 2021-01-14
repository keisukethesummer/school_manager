import axios from 'axios';

const instance = axios.create({
  // firebase auth APIのエンドポイント:'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD5xWv0BoG0RWCI3Zx4eGL11-hAcT7Anno'
  baseURL: 'https://identitytoolkit.googleapis.com/v1'
});

export default instance;