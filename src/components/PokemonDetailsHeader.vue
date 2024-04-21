<template>
  <div class="header">
    <h3 class="title">{{ props.name }}</h3>
    <h3 class="id"><span>#</span>{{ props.id }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 30px;
}

.title {
  text-transform: capitalize;
  color: var(--dark-text-color);
}

.id {
  color: var(--text-color);
  font-size: 80%;
}

.id span {
  font-weight: 700;
  color: var(--light-bg-color);
}
</style>
