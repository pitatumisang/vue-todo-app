<script setup>
defineProps({
    isActive: {
        type: Boolean,
    },
});
</script>

<template>
    <button
        :class="[
            { 'cursor-not-allowed': isActive },
            'bg-purple-500 hover:bg-purple-600',
        ]"
        class="py-2 px-4 rounded-md text-white text-sm font-medium"
        :disabled="isActive"
    >
        <slot />
    </button>
</template>
