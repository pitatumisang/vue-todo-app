<script setup>
import { useTodoStore } from '@/stores/todo';
import { ref, onMounted } from 'vue';
import Button from './Button.vue';

const store = useTodoStore();

let todoTitle = ref('');

const props = defineProps({
    todo: Object,
});

todoTitle.value = props.todo.title;
</script>

<template>
    <div
        class="bg-[rgba(0,0,0,0.6)] absolute top-0 right-0 left-0 bottom-0 z-10"
    >
        <div class="bg-white mt-20 rounded-md p-6 container mx-auto max-w-lg">
            <div class="mb-6 flex justify-between items-center">
                <h1 class="text-xl font-semibold uppercase">Edit Todo</h1>
                <i
                    @click="store.hideModal()"
                    class="fa-solid fa-times bg-red-400 py-2 px-3 cursor-pointer hover:bg-red-600 rounded-sm text-white"
                ></i>
            </div>
            <form action="" class="space-y-4">
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    v-model="todoTitle"
                    class="block w-full p-2 rounded-md border-2 border-purple-400 focus:outline-none"
                />

                <Button
                    :isActive="todoTitle.length === 0"
                    @click.prevent="store.updateTodo(todo.id, todoTitle)"
                    >Update Todo</Button
                >
            </form>
        </div>
    </div>
</template>
