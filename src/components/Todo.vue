<script setup>
import { useTodoStore } from '../stores/todo';
import { ref } from 'vue';
import UpdateModal from './UpdateModal.vue';

const store = useTodoStore();

let currentTodo = ref({});

const showUpdateModal = (todo) => {
    currentTodo.value = todo;
    store.showModal();
};
</script>

<template>
    <div v-if="store.isModalActive">
        <UpdateModal :todo="currentTodo" />
    </div>

    <section v-if="store.todos.length > 0">
        <div v-for="(todo, index) in store.getTodos" :key="index">
            <div
                class="flex justify-between items-center bg-white rounded-md p-2 mb-3"
            >
                <div class="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name=""
                        id="checked"
                        v-model="todo.isCompleted"
                    />
                    <div class="flex flex-col">
                        <span
                            :class="{
                                'line-through text-gray-400': todo.isCompleted,
                            }"
                            class="text-xs font-bold"
                            >{{ todo.title }}</span
                        >
                    </div>
                </div>
                <div class="space-x-2">
                    <span
                        @click="showUpdateModal(todo)"
                        class="bg-gray-200 py-1 px-2 rounded-sm cursor-pointer"
                    >
                        <i class="fa-solid fa-pencil fa-sm"></i>
                    </span>
                    <span
                        @click.prevent="store.deleteTodo(todo.id)"
                        class="bg-gray-200 py-1 px-2 rounded-sm cursor-pointer"
                    >
                        <i class="fa-solid fa-trash fa-sm"></i>
                    </span>
                </div>
            </div>
        </div>
    </section>

    <section v-else>
        <h1 class="text-xl font-semibold">
            There are no todos yet, please add todos!
        </h1>
    </section>
</template>
