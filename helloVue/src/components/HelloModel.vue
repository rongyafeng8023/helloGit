<template>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
</template>
<script setup>
import { ref } from 'vue'

const message = ref('')
</script>