<!-- <template>
  <div class="container">
    <h1>📝 待办事项</h1>

    <div class="input-group">
      <input v-model="newTask" @keyup.enter="addTask" placeholder="请输入任务..." />
      <button @click="addTask">添加</button>
    </div>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.done" />
        <span :class="{ done: task.done }">{{ task.text }}</span>
        <button @click="removeTask(index)">🗑️</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref([])

function addTask() {
  if (newTask.value.trim()) {
    tasks.value.push({ text: newTask.value, done: false })
    newTask.value = ''
  }
}

function removeTask(index) {
  tasks.value.splice(index, 1)
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 2rem auto;
  font-family: sans-serif;
  text-align: center;
}

.input-group {
  display: flex;
  gap: 8px;
  margin-bottom: 1rem;
}

input[type="text"] {
  flex: 1;
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 8px 12px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6px 0;
}

.done {
  text-decoration: line-through;
  color: gray;
}
</style> -->
<template>
  <h1>Vue + Vite 示例</h1>
  <TrySetup />
  <HelloEvent/>
  <HelloModel/>
  <HelloWatch/>
</template>
<script setup>
import TrySetup from './components/TrySetup.vue'
import HelloEvent from './components/HelloEvent.vue'
import HelloModel from './components/HelloModel.vue';
import HelloWatch from './components/HelloWatch.vue';
// import { createApp } from 'vue'

// const app = createApp({});


// app.component('TrySetup', TrySetup)
// .component('HelloEvent', HelloEvent)
// .component('HelloModel', HelloModel)
// .component('HelloWatch', HelloEvent);
</script>

