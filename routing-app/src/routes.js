import Home from './components/Home.vue'
import User from './components/User/User.vue'
import UserDetail from './components/User/UserDetail.vue'
import UserEdit from './components/User/UserEdit.vue'
import UserStart from './components/User/UserStart.vue'

export const routes = [{
  path: '',
  name: 'home',
  component: Home
}, {
  path: '/user',
  component: User,
  children: [{
    path: '',
    component: UserStart
  }, {
    path: ':userId',
    component: UserDetail,
    props: true
  }, {
    path: ':userId/edit',
    name: 'userEdit',
    component: UserEdit,
    props: true
  }]
}]
