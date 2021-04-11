import * as axios from "axios";

const instance = axios.create({ 
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, x-access-token',
  }
});
 


export const authAPI = {
  me(token) {
    console.log(token)
    return instance.get('me',{
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },
  
  registration(email, password) {
    return instance.post('registration', {
      user_data: {
        email: email,
        passwordhash: password,
      }
    })
  },

  login(email, password) {
    return instance.post('login', {
        user_data: {
        email: email,
        passwordhash: password,
      }});
  },
  logout() {
    return instance.delete('login');
  },
}