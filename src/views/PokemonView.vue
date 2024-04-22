<template>
  <section class="pokemonWrapper">
    <section v-if="pokemonData && pokemonData.name" class="body">
      <PokemonDetailsHeader :id="pokemonData.id" :name="pokemonData.name" />
      <PokemonDetailsContainer :pokemonData="pokemonData" />
    </section>
    <p v-else>Loading</p>
  </section>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import PokemonDetailsHeader from '@/components/PokemonDetailsHeader.vue';
import PokemonDetailsContainer from '@/components/PokemonDetailsContainer.vue';

const loading = ref(false);
const pokemonData = ref(null);
const errorMessage = ref('');

//Props ID:String  is gotten from the Params of the url.
const props = defineProps({
  id: String,
});

function searchPokemon() {
  loading.value = true;
  if (!props.id) {
    errorMessage.value = 'Please enter a Pokémon ID.';
    loading.value = false;
    return;
  }

  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
    .then((response) => {
      pokemonData.value = response.data;
      errorMessage.value = '';
      loading.value = false;
    })
    .catch((error) => {
      pokemonData.value = null;
      if (error.response && error.response.status === 404) {
        errorMessage.value = 'Pokémon not found.';
        pokemonData.value = null;
      } else {
        errorMessage.value = 'An error occurred while fetching Pokémon data.';
        pokemonData.value = null;
      }
      loading.value = false;
    });
}

onMounted(() => searchPokemon());
</script>

<style scoped>
.pokemonWrapper {
  height: 100%;
  padding: 5%;
}
.body {
  display: flex;
  flex-direction: column;
  gap: 60px;
}
</style>
