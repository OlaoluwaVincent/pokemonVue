import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePokemonTeamStore = defineStore(
  'my-team',
  () => {
    const teams = ref([]);
    const message = ref('');

    function checkExisting(pokemonId) {
      return teams.value.some((team) => team.id === pokemonId);
    }

    function addTeam(pokemon) {
      if (teams.value.length === 0 || !checkExisting(pokemon.id)) {
        teams.value.push(pokemon);
        message.value = 'Pokemon added';
      } else {
        message.value = 'Pokemon already exists';
      }
    }

    function removeFromTeam(pokemonId) {
      teams.value = teams.value.filter((team) => team.id !== pokemonId);
      message.value = 'Pokemon has been removed from your team';
    }

    return { teams, message, addTeam, removeFromTeam, checkExisting };
  },
  { persist: true }
);
