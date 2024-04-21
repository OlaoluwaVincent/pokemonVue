<template>
  <div class="result">
    <RouterLink
      :to="{
        name: 'Pokemon',
        params: { id: pokemonData.id },
      }"
    >
      <div class="result__images">
        <img
          :src="pokemonData.sprites.front_default"
          :alt="pokemonData.name"
          class="result__img"
        />
        <img
          :src="pokemonData.sprites.back_default"
          :alt="pokemonData.name"
          class="result__img"
        />
      </div>
      <p class="result__tag">{{ pokemonData.name }}</p>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref, defineProps, computed, watch, watchEffect } from 'vue';

const props = defineProps({
  pokemonData: {
    type: Object,
    required: true,
  },
});

const pokemonData = computed(() => props.pokemonData);
</script>

<style scoped>
a {
  text-decoration: none;
}
.result {
  background: var(--text-color);
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.result__images {
  display: flex;
  justify-content: center;
  align-items: start;
}
.result__tag {
  color: var(--bg-color);
  text-decoration: underline;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
}

@media screen and (width<768px) {
  .result {
    margin-inline: auto;
  }
}
</style>
