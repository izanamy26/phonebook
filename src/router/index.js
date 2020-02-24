import Vue from 'vue';
import Router from 'vue-router';

import Board from './../components/Board.vue';
import User from './../components/User.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Board},
        {path: '/user/:id', component: User}
    ]
});