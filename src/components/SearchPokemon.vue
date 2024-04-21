<template>
  <section>
    <form @submit.prevent="searchPokemon">
      <input
        type="number"
        name="pokemon"
        v-model="pokemonNumber"
        placeholder="Please enter a number"
        class="no-spinners"
      />
    </form>

    <p class="loading" v-if="loading">Loading...</p>

    <p class="error" v-if="errorMessage.length > 1">{{ errorMessage }}</p>
  </section>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const loading = ref(false);
const pokemonNumber = ref('');
const pokemonData = ref(null);
const errorMessage = ref('');
const emit = defineEmits(['pokemonAvailable']);

function searchPokemon() {
  loading.value = true;
  if (!pokemonNumber) {
    errorMessage.value = 'Please enter a Pokémon number.';
    loading.value = false;
    return;
  }

  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber.value}`)
    .then((response) => {
      pokemonData.value = response.data;
      errorMessage.value = '';
      loading.value = false;
      emit('pokemonAvailable', pokemonData);
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
</script>

<style scoped>
form {
  width: 100%;
}

.loading,
.error {
  color: var(--bg-color);
  font-size: 16px;
  font-weight: 700;
}

form input {
  width: 100%;
  margin-block: 20px;
  padding: 10px;
  font-weight: 500;
  font-size: 20px;
  border: 3px solid var(--bg-color);
  outline: none;
  color: var(--light-bg-color);
}
.no-spinners::-webkit-outer-spin-button,
.no-spinners::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.no-spinners {
  -moz-appearance: textfield;
}

@media screen and (width<768px) {
  section {
    margin-inline: auto;
    width: 80%;
  }
}
</style>
