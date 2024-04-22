<template>
  <aside>
    <SectionTitle title="Abilities" />
    <div class="abilities">
      <p v-for="(ability, key) in abilities" :key="key" class="ability">
        {{ ability }}
      </p>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import SectionTitle from '@/components/SectionTitle.vue';

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
  flex-wrap: wrap;
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

@media (width < 540px) {
  .abilities {
    flex-wrap: wrap;
    justify-content: center;
    font-size: 12px;
  }
}
</style>
