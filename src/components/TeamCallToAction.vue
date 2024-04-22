<template>
  <button class="add">Add to Team</button>
  <button class="remove">Remove from Team</button>
</template>

<script setup></script>

<style scoped>
button {
  border: none;
  outline: none;
  color: var(--text-color);
  text-transform: capitalize;
  font-weight: 500;
  padding: 6px 12px;
  cursor: pointer;
}

.add {
  background: var(--green);
}

.remove {
  background: var(--bg-color);
}
</style>
