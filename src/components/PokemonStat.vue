<template>
  <SectionTitle title="Stats" />
  <aside class="wrapper">
    <div v-for="(stat, key) in stats" :key="key">
      <div class="range-container">
        <input
          type="range"
          :value="stat.statValue"
          min="0"
          max="100"
          disabled
        />
        <div class="range-value">{{ stat.statValue }}</div>
      </div>
      <span>{{ stat.statName }}</span>
    </div>
  </aside>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue';
const props = defineProps({
  stats: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 16px;
}
.range-container {
  position: relative;
  width: 200px; /* Adjust width as needed */
}

input[type='range'] {
  width: 100%;
}

.range-value {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--mid-color);
  border: 1px solid var(--text-color);
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  color: var(--text-color);
}

span {
  color: var(--text-color);
  font-weight: 300;
  text-transform: capitalize;
}
</style>
