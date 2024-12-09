import * as axios from "axios";

//Настройка конфигурации экземпляра axios
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, x-access-token',
  }
});

export const authAPI = {
  me(token) {
    return instance.get('user/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },

  registration(email, password) {
    return instance.post('auth/sign-up', {
        email: email,
        password: password,
    })
  },

  login(email, password) {
    return instance.post('auth/sign-in', {
        email: email,
        password: password,
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
    return instance.post('mosquitto/launch', {
      mosquitto_on: true
    },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
  },
  mosquittoOff(token) {
    return instance.post('/mosquitto/launch', {
      mosquitto_on: false
    },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
  },
}

export const topicAPI = {
  create_topic(name, passwordtopic, token) {
    return instance.post('topic/', {
        name: name,
        can_read: true,
        can_write: true
    }, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    }
    );
  },

  list_topics(token) {
    return instance.get('topic/', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },

  delete_topic(token, id) {
    return instance.delete(`topic/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  },

}