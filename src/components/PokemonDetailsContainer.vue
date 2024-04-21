<template>
  <section class="details">
    <div class="imgWrapper">
      <img
        :src="pokemonData.sprites.front_default"
        :alt="pokemonData.name"
        class="result__img"
      />
      <span class="first">{{ pokemonData.weight }} G</span>
      <span class="second">{{ pokemonData.base_experience }} E</span>
    </div>

    <div class="abilities">
      <p v-for="(ability, key) in abilities" :key="key" class="ability">
        {{ ability }}
      </p>
    </div>

    <button class="add">Add to Team</button>
    <button class="remove">Remove from Team</button>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  pokemonData: {
    type: Object,
    required: true,
  },
});
const abilities = computed(() =>
  props.pokemonData.abilities.map((ability) =>
    ability.ability.name.split('-').join(' ')
  )
);
</script>

<style scoped>
.details {
  background: var(--light-bg-color);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

.imgWrapper {
  position: relative;
  width: fit-content;
  border: 1px solid var(--dark-text-color);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-block: 40px;
  margin-inline: auto;
}

.imgWrapper .first,
.imgWrapper .second {
  position: absolute;
  background: var(--text-color);
  color: var(--mid-color);
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 20px;
}

.imgWrapper .first {
  top: 0;
  right: 2px;
}

.imgWrapper .second {
  bottom: 0;
  left: 2px;
}

.abilities {
  display: flex;
  gap: 16px;
  align-items: center;
  text-transform: capitalize;
}

.ability {
  background: var(--dark-text-color);
  color: var(--mid-color);
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 10px;
}

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
