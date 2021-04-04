import * as axios from "axios";

const instance = axios.create({
    // withCredentails: true, 
    // headers: (),
    baseURL: 'http://127.0.0.1:8000/'
});

export const usersAPI = {
    SendtoLogin (email, password) {
        return instance.post(
       'login', 
        {
          user_data: {
            email: email,
            passwordhash: password,
          }
        }
      ).then(response => {
        return response.data        
      }, (error) => {
        console.log(error)
      });
    },
    
    SendtoRegistration (email, password) {
        return instance.post(
       'registration', 
        {
          user_data: {
            email: email,
            passwordhash: password,
          }
        }
      ).then(response => {
        return response.data        
      }, (error) => {
        console.log(error)
      });
    }
}
