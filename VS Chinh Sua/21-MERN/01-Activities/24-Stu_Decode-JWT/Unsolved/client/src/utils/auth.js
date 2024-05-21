import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  // isTokenExpired(token) {
  //   const decoded = decode(token);
  //   if (decoded.exp < Date.now()) {
  //     localStorage.removeItem('id_token');
  //     return true;
  //   }
  //   return false;
  // }


  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    // "exp": 1713160392
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }

// payLoad data example from the token:
// "email": "heomap123@gmail.com",
// "username": "khoi",
// "_id": "661ca354fb944fd9b7c2117a"
// },
// "iat": 1713153192,
// "exp": 1713160392

    // If token hasn't passed its expiration time, return `false`
    return false;
  }


  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
