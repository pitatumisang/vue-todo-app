import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Todo from '@/components/Todo.vue';

const routes = [
    { name: 'all', path: '/', component: Todo },
    { name: 'complete', path: '/complete', component: Todo },
    { name: 'incomplete', path: '/incomplete', component: Todo },
];

// create vue router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
