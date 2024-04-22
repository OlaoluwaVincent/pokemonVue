<script setup>
import SearchPokemon from '@/components/SearchPokemon.vue';
import PokemonClip from '@/components/PokemonClip.vue';
import { ref } from 'vue';

const pokemonData = ref(null);

const resData = (res) => {
  pokemonData.value = res.value;
};
</script>

<template>
  <section class="homepage">
    <h1>Pokenmon World</h1>
    <p>Search for a Pokenmon (1-1025)</p>

    <SearchPokemon @pokemonAvailable="resData" />
    <div v-if="pokemonData && pokemonData.name">
      <PokemonClip :pokemonData="pokemonData" />
    </div>
  </section>
</template>

<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1 {
  color: var(--dark-text-color);
  font-size: 60px;
}

p {
  color: var(--text-color);
  text-align: center;
  font-size: 30px;
}

@media screen and (width<768px) {
  h1 {
    font-size: 30px;
  }
  p {
    font-size: 15px;
  }
}
</style>
