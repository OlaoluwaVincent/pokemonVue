<template>
  <aside>
    <SectionTitle title="Moves" />
    <ul>
      <li v-for="(move, key) in moves" :key="key">
        {{ move }}
      </li>
    </ul>
  </aside>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue';
const props = defineProps({
  moves: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
ul {
  list-style-type: none;
  text-transform: capitalize;
  display: flex;
  gap: 10px 8px;
  flex-wrap: wrap;
  text-align: center;
}

li {
  font-weight: 300;
  color: var(--text-color);
  border-right: 1px solid var(--text-color);
  padding-right: 8px;
}

li:last-child {
  border: none;
}
</style>
