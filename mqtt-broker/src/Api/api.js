import * as axios from "axios";

const instance = axios.create({ 
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, x-access-token',
  }
});
 
export const authAPI = {
  me(token) {
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
        password: password,
      }
    })
  },

  login(email, password) {
    return instance.post('login', {
        user_data: {
        email: email,
        password: password,
      }});
  }
}

export const topicAPI = {

  create_topic (topicname, passwordtopic, token){
    return instance.post('create_topic', {
      topic_data: {
        topicname: topicname, 
        passwordtopic: passwordtopic
      }}, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },}
      );
  },

  list_topics(token) {
    return instance.get('topics',{
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },

  delete_topic(token, topicname) {
    return instance.delete('delete_topic',{
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      data: {
        topic_data: {
          topicname: topicname
        }
      }
    });
  },
}