import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './screens/HomePage.vue';
import OverView from './screens/OverView.vue';
import ErrorPage from './screens/ErrorPage.vue';
import MyAccount from './screens/MyAccount.vue';
import SignIn from './screens/SignIn.vue';
import SignUp from './screens/SignUp.vue';
import Contact from './screens/Contact.vue';
import Privacy from './screens/Privacy.vue';
import Terms from './screens/Terms.vue';
import Post from './screens/PostAd.vue';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/overview/:user/:id',
            name: 'OverView',
            component: OverView,
            props: true,
        },
        {
            path: '/account',
            name: 'MyAccount',
            component: MyAccount,
        },
        {
            path: '/signin',
            name: 'SignIn',
            component: SignIn,
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp,
        },
        {
            path: '/post',
            name: 'Post',
            component: Post,
        },
        {
            path: '/privacy',
            name: 'Privacy',
            component: Privacy,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
        },
        {
            path: '/terms',
            name: 'Terms',
            component: Terms,
        },
        {
            path: '*',
            name: 'ErrorPage',
            component: ErrorPage
        }
    ],
});

export default router;