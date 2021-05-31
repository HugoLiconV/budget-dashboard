type Config = {
  apiUrl: string;
  authDomain: string;
  authClientId: string;
  authAudience: string;
};

const config: Config = {
  apiUrl: process.env.REACT_APP_API_URL,
  authDomain: process.env.REACT_APP_AUTH0_DOMAIN,
  authClientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
  authAudience: process.env.REACT_APP_AUTH0_AUDIENCE,
};

export default config;
