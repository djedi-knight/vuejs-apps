import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://axios-app.firebaseio.com'
})

export default instance
