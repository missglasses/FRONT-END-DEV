<script setup>
import { ref } from "vue";

const tasks = ref([]);

const addTask = () => {
  tasks.value.push({ text: "", checked: false });
};

const clearAll = () => {
  const confirmed = window.confirm("Are you sure you want to clear all tasks?");
  if (confirmed) {
    tasks.value = [];
  }
};

const updateTask = (index, value) => {
  tasks.value[index].text = value;
};

const removeTask = (indexToRemove) => {
  tasks.value.splice(indexToRemove, 1);
};

const toggleChecked = (index) => {
  tasks.value[index].checked = !tasks.value[index].checked;
};
</script>

<template>
  <div class="todo-container">
    <h1>ToDo List</h1>

    <div class="optionsBtn">
      <button @click="addTask">Add Task</button>
      <button @click="clearAll">Clear All</button>
    </div>

    <div class="card">
      <div
        v-for="(task, index) in tasks"
        :key="index"
        :class="['task-card', { checked: task.checked }]"
      >
        <input
          type="text"
          v-model="task.text"
          :placeholder="`Task ${index + 1}`"
        />
        <button
          class="check-btn"
          @click="toggleChecked(index)"
          :aria-label="`Check/uncheck task ${index + 1}`"
        >
          ✔️
        </button>
        <button
          class="remove-btn"
          @click="removeTask(index)"
          :aria-label="`Remove task ${index + 1}`"
        >
          ✖️
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.todo-container {
  max-width: 500px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  text-align: center;
}

.optionsBtn {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.task-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.task-card input {
  flex: 1;
  padding: 5px;
}

.check-btn,
.remove-btn {
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
}

.checked input {
  text-decoration: line-through;
}
</style>
