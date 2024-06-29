const baseUrl = import.meta.env.PUBLIC_API_URL;

const url = {
  auth: {
    signin: `${baseUrl}/auth/signin`,
    signup: `${baseUrl}/auth/signup`,
    logout: `${baseUrl}/auth/logout`,
  },
  oauth: {
    google: {
      login: `${baseUrl}/auth/google/login`,
      callback: `${baseUrl}/auth/google/callback`,
    },
    github: {
      login: `${baseUrl}/auth/github/login`,
      callback: `${baseUrl}/auth/github/callback`,
    },
    linkedin: {
      login: `${baseUrl}/auth/linkedin/login`,
      callback: `${baseUrl}/auth/linkedin/callback`,
    },
  },
  user: {
    me: `${baseUrl}/user/me`,
    update: `${baseUrl}/user/update`,
    delete: `${baseUrl}/user/delete`,
  },
};

export default url;
