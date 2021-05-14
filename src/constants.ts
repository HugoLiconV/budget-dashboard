export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://google-sheets-budget-dashboard.herokuapp.com' 
  : 'http://192.168.101.5:8080'