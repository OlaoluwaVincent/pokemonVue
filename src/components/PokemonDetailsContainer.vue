<template>
  <section class="details">
    <div class="imgWrapper">
      <img
        :src="pokemonData.sprites.front_default"
        :alt="pokemonData.name"
        class="result__img"
      />
      <span class="first">{{ pokemonData.weight }} G</span>
      <span class="second">{{ pokemonData.base_experience }} PT.</span>
    </div>

    <PokemonAbility :abilities="abilities" />

    <TeamCallToAction :pokemon="pokemonData" />

    <PokemonMoves :moves="moves" />

    <PokemonStat :stats="stats" />
  </section>
</template>

<script setup>
import { computed } from 'vue';
import PokemonAbility from '@/components/PokemonAbility.vue';
import TeamCallToAction from '@/components/TeamCallToAction.vue';
import PokemonMoves from '@/components/PokemonMoves.vue';
import PokemonStat from '@/components/PokemonStat.vue';

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

const moves = computed(() =>
  props.pokemonData.moves.map((move) => move.move.name)
);

const stats = computed(() =>
  props.pokemonData.stats.map((stat) => ({
    statValue: stat.base_stat,
    statName: stat.stat.name,
  }))
);
</script>

<style scoped>
.details {
  background: var(--light-bg-color);
  padding: 10px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  height: 100%;
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

.first,
.second {
  position: absolute;
  background: var(--text-color);
  color: var(--mid-color);
  font-weight: 500;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 20px;
}

.first {
  top: 0;
  right: 2px;
}

.second {
  bottom: 0;
  left: 2px;
}
</style>
