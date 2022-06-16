import { defineStore } from 'pinia';
import { faker } from '@faker-js/faker';

export const useTodoStore = defineStore('todo', {
    state: () => {
        return {
            todos: [],
            isModalActive: false,
            filter: 'all',
        };
    },
    getters: {
        getTodos: (state) => {
            if (state.filter === 'all') {
                return state.todos;
            }

            if (state.filter === 'complete') {
                return state.todos.filter((todo) => todo.isCompleted === true);
            }

            if (state.filter === 'incomplete') {
                return state.todos.filter((todo) => todo.isCompleted === false);
            }
        },

        getCount: (state) => {
            return {
                all: state.todos.length,
                complete: state.todos.filter(
                    (todo) => todo.isCompleted === true
                ).length,
                incomplete: state.todos.filter(
                    (todo) => todo.isCompleted === false
                ).length,
            };
        },
    },
    actions: {
        // Modal Actions
        showModal() {
            this.isModalActive = true;
        },
        hideModal() {
            this.isModalActive = false;
        },
        // Todo actions
        addTodo(title) {
            this.todos = [
                {
                    id: faker.random.numeric(),
                    title: title,
                    isCompleted: false,
                },
                ...this.todos,
            ];
        },
        updateTodo(id, title) {
            const todo = this.todos.find((curr) => curr.id === id);

            todo.title = title;

            this.hideModal();
        },
        deleteTodo(id) {
            this.todos = this.todos.filter((todo) => id !== todo.id);
        },

        setFilter(value) {
            this.filter = value;
        },
    },
});
