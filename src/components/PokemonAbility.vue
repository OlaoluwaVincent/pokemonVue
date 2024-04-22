<template>
  <div class="abilities">
    <p v-for="(ability, key) in abilities" :key="key" class="ability">
      {{ ability }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  abilities: {
    type: Object,
    required: true,
  },
});
const abilities = ref(props.abilities);
</script>

<style scoped>
.abilities {
  display: flex;
  gap: 16px;
  align-items: center;
  text-transform: capitalize;
}

.ability {
  background: var(--text-color);
  color: var(--mid-color);
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 10px;
}
</style>
