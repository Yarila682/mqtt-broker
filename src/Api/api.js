import * as axios from "axios";

//Настройка конфигурации экземпляра axios
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
  },

  logout() {
    return instance.delete('auth/sign-out');
  }
}

export const mosquittoAPI = {
  mosquittoOn(token) {
    return instance.post('api/mosquitto/launch', {
      mosquittoOn: true
    },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
  },
  mosquittoOff(token) {
    return instance.post('api/mosquitto/launch', {
      mosquittoOn: false
    },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
  },
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

}