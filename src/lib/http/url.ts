const baseUrl = import.meta.env.PUBLIC_API_URL;

const url = {
  auth: {
    signin: `${baseUrl}/auth/signin`,
    signup: `${baseUrl}/auth/signup`,
    logout: `${baseUrl}/auth/logout`,
  },
  oauth: {
    google: {
      login: `${baseUrl}/oauth/google/login`,
      callback: `${baseUrl}/oauth/google/callback`,
    },
    github: {
      login: `${baseUrl}/oauth/github/login`,
      callback: `${baseUrl}/oauth/github/callback`,
    },
    facebook: {
      login: `${baseUrl}/oauth/facebook/login`,
      callback: `${baseUrl}/oauth/facebook/callback`,
    },
  },
  user: {
    me: `${baseUrl}/user/me`,
    update: `${baseUrl}/user/update`,
    delete: `${baseUrl}/user/delete`,
  },
};

export default url;
