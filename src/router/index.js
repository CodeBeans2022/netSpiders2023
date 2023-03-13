import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ForgotPassView from '../views/ForgotPassView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CommunitiesView from '../views/CommunitiesView.vue'
import SingleComView from '../views/SingleComView.vue'
import DevelopersView from '../views/DevelopersView.vue'
import SingleDevView from '../views/SingleDevView.vue'
import ContactView from '../views/ContactView.vue'
import CheckoutDevView from '../views/CheckoutDevView.vue'
import AdminView from '../views/AdminView.vue'
import UserProfile from '../views/UserProfileView.vue'
import ProjTracker from '../views/ProjTrackerView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/communities',
    name: 'communities',
    component: CommunitiesView
  },
  {
    path: '/singleCommunity',
    name: 'singleCommunity',
    component: SingleComView
  },
  {
    path: '/developers',
    name: 'developers',
    component: DevelopersView
  },
  {
    path: '/singleDeveloper',
    name: 'singleDeveloper',
    component: SingleDevView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutDevView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/forgotPass',
    name: 'forgotPassword',
    component: ForgotPassView
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: UserProfile
  },
  {
    path: '/projTracker',
    name: 'projTracker',
    component: ProjTracker
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
