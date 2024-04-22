<template>
  <button
    v-if="pokemonStore.checkExisting(pokemon.id)"
    class="remove"
    @click="handleRemove"
  >
    Remove from Team
  </button>
  <button v-else class="add" @click="handleAdd">Add to Team</button>
</template>

<script setup>
import { usePokemonTeamStore } from '@/stores/pokemonTeam';
const pokemonStore = usePokemonTeamStore();

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

const handleRemove = () => {
  pokemonStore.removeFromTeam(props.pokemon.id);
};

const handleAdd = () => {
  pokemonStore.addTeam(props.pokemon);
};
</script>

<style scoped>
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
