<template>
  <aside>
    <SectionTitle title="Moves" />
    <ul>
      <li v-for="(move, key) in dataToShow" :key="key">
        {{ move }}
      </li>
    </ul>
    <p @click="handleToggleShow" v-if="more">show less...</p>
    <p @click="handleToggleShow" v-else>show more...</p>
  </aside>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue';
import { computed, ref } from 'vue';
const props = defineProps({
  moves: {
    type: Array,
    required: true,
  },
});
const more = ref(false);

const half = computed(() => {
  return props.moves.slice(0, 15);
});

const dataToShow = ref(half.value);

const handleToggleShow = () => {
  if (dataToShow.value.length === half.value.length) {
    dataToShow.value = props.moves;
    more.value = true;
  } else {
    dataToShow.value = half.value;
    more.value = false;
  }
};
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

p {
  cursor: pointer;
  /* color: var(--mid-color); */
}

@media (width < 540px) {
  li {
    font-size: 12px;
  }
}
</style>
