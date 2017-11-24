import Home from './components/Home.vue'
import User from './components/User/User.vue'

export const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/user/:userId',
    component: User,
    props: true
  }
]
