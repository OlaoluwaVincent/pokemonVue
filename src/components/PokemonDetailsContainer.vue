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

    <PokemonAbility :abilities="abilities" />

    <TeamCallToAction />
  </section>
</template>

<script setup>
import { computed } from 'vue';
import PokemonAbility from '@/components/PokemonAbility.vue';
import TeamCallToAction from '@/components/TeamCallToAction.vue';

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
</style>
