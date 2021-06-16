import * as axios from "axios";

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8080/',
  headers: {
    'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, x-access-token',
  }
});

export const authAPI = {
  me(token) {
    return instance.get('api/profile/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },

  registration(email, password) {
    return instance.post('auth/sign-up', {
      user_data: {
        email: email,
        password: password,
      }
    })
  },

  login(email, password) {
    return instance.post('auth/sign-in', {
      user_data: {
        email: email,
        password: password,
      },
      headers: {
        "Access-Control-Allow-Headers": "*"
      }
    });
  }
}

export const topicAPI = {
  create_topic(topicname, passwordtopic, token) {
    return instance.post('api/topics/create', {
      topic_data: {
        topicname: topicname,
        passwordtopic: passwordtopic
      }
    }, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    }
    );
  },

  list_topics(token) {
    return instance.get('api/topics/', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },

  delete_topic(token, id) {
    return instance.delete(`api/topics/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },

  mosquittoOn(token) {
    return instance.post('api/profile/mosquitto', {
      mosquitto_data: {
        mosquittoOn: true
      }
    },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
  },

  mosquittoOff(token) {
    return instance.delete('api/profile/mosquitto', 
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
  },

}