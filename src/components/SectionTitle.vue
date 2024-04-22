<template>
  <h3>{{ title }}</h3>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
h3 {
  color: var(--text-color);
  font-weight: 500;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 10px;
}
</style>
