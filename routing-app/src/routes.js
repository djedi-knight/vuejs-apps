// import User from './components/User/User.vue'
// import UserDetail from './components/User/UserDetail.vue'
// import UserEdit from './components/User/UserEdit.vue'
// import UserStart from './components/User/UserStart.vue'
import Header from './components/Header.vue'
import Home from './components/Home.vue'

// tell Webpack to lazily load the User components
const User = resolve => {
  require.ensure(['./components/User/User.vue'], () => {
    resolve(require('./components/User/User.vue'))
  })
}
const UserDetail = resolve => {
  require.ensure(['./components/User/UserDetail.vue'], () => {
    resolve(require('./components/User/UserDetail.vue'))
  })
}
const UserEdit = resolve => {
  require.ensure(['./components/User/UserEdit.vue'], () => {
    resolve(require('./components/User/UserEdit.vue'))
  })
}
const UserStart = resolve => {
  require.ensure(['./components/User/UserStart.vue'], () => {
    resolve(require('./components/User/UserStart.vue'))
  })
}

export const routes = [{
  path: '',
  name: 'home',
  components: {
    default: Home,
    'header-top': Header
  }
}, {
  path: '/user',
  components: {
    default: User,
    'header-bottom': Header
  },
  children: [{
    path: '',
    component: UserStart
  }, {
    path: ':userId',
    component: UserDetail,
    props: true,
    beforeEnter(to, from, next) {
      console.log('route /user/:userId UserDetail.beforeEach() called')
      next()
    }
  }, {
    path: ':userId/edit',
    name: 'userEdit',
    component: UserEdit,
    props: true
  }]
}, {
  path: '/redirect-me',
  redirect: {
    name: 'home'
  }
}, {
  path: '*',
  redirect: {
    name: 'home'
  }
}]
