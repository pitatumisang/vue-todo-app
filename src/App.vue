<script setup>
import { useTodoStore } from '@/stores/todo';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import Button from './components/Button.vue';

const todoTitle = ref('');

const route = useRoute();

const store = useTodoStore();

watch(
    () => route.name,
    () => store.setFilter(route.name)
);

const submit = () => {
    store.addTodo(todoTitle.value);
    todoTitle.value = '';
};
</script>

<template>
    <main class="items-center justify-center container mx-auto max-w-lg my-20">
        <h1 class="text-center text-2xl font-bold uppercase mb-4">Todo App</h1>
        <form action="" class="flex gap-2 mb-4">
            <input
                type="text"
                name="todo"
                id="todo"
                v-model="todoTitle"
                class="flex-1 py-1 px-2 text-sm tracking-wider rounded-md border-2 border-purple-400 focus:outline-none"
            />
            <Button
                :isActive="todoTitle.length === 0"
                @click.prevent="submit(todoTitle)"
                >Add Todo</Button
            >
        </form>
        <div
            class="bg-gray-100 border-2 border-gray-200 rounded-md p-4 space-y-6"
        >
            <section
                class="flex gap-3 text-xs font-semibold border-b border-gray-300"
            >
                <router-link
                    to="/"
                    :class="{
                        'border-b border-blue-500 font-bold':
                            route.name === 'all',
                    }"
                    class="text-blue-500 hover:border-b border-blue-500 uppercase hover:font-bold py-3 px-2 rounded-t-md"
                >
                    All Todos
                    <span
                        class="bg-purple-200 rounded-md py-1 ml-1 px-2 text-purple-700"
                    >
                        {{ store.getCount.all || 0 }}
                    </span>
                </router-link>
                <router-link
                    to="/complete"
                    :class="{
                        'border-b border-blue-500 font-bold':
                            route.name === 'complete',
                    }"
                    class="text-blue-500 hover:border-b border-blue-500 uppercase hover:font-bold py-3 px-2 rounded-t-md"
                >
                    Complete Todos
                    <span
                        class="bg-green-200 rounded-md py-1 ml-1 px-2 text-green-700"
                    >
                        {{ store.getCount.complete || 0 }}
                    </span>
                </router-link>
                <router-link
                    to="/incomplete"
                    :class="{
                        'border-b border-blue-500 font-bold':
                            route.name === 'incomplete',
                    }"
                    class="text-blue-500 hover:border-b border-blue-500 uppercase hover:font-bold py-3 px-2 rounded-t-md"
                >
                    Incomplete Todos
                    <span
                        class="bg-red-200 rounded-md py-1 ml-1 px-2 text-red-700"
                    >
                        {{ store.getCount.incomplete || 0 }}
                    </span>
                </router-link>
            </section>
            <!-- Todos -->
            <router-view></router-view>
        </div>
    </main>
</template>
