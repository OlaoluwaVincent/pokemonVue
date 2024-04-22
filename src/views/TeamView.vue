<template>
  <section class="container">
    <div class="card" v-for="(team, key) in pokemonStore.teams" :key="key">
      <div class="card__header">
        <h4 class="card__title">{{ team.name }}</h4>
        <p class="card__sub-title">#{{ team.id }}</p>
      </div>
      <div class="card__content">
        <img :src="team.sprites.front_default" :alt="team.name" />
        <RouterLink
          :to="{
            name: 'Pokemon',
            params: { id: team.id },
          }"
          >Details</RouterLink
        >
      </div>
      <div class="card__footer">
        <button @click="pokemonStore.removeFromTeam(team.id)">
          Remove from Team
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePokemonTeamStore } from '@/stores/pokemonTeam';
const pokemonStore = usePokemonTeamStore();
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 16px;
  padding-block: 30px;
  height: 100%;
  align-content: center;
}

img,
a {
  display: block;
  text-align: center;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
  width: 100%;
  background: var(--dark-text-color);
  gap: 16px;
  padding-top: 20px;
  height: 260px;
  /* border: 1px solid var(--dark-text-color); */
}

.card__header,
.card__content {
  padding: 0px 16px;
}

.card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.card__title {
  font-size: 15px;
  font-weight: 500;
  text-transform: capitalize;
}
.card__sub-title {
  font-size: 13px;
  font-weight: 300;
}

.card__footer {
  padding: 20px 16px;
  background: var(--bg-color);
  width: 100%;
  text-align: center;
}

button {
  border: none;
  background: var(--mid-color);
  color: var(--text-color);
  padding: 6px 12px;
}

a {
  color: var(--mid-color);
  /* text-decoration: none; */
}

@media (width<1024px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px 30px;
    place-content: center;
  }
}

@media (width<=768px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
  .card {
    width: 90%;
  }
}
@media (width<540px) {
  .container {
    grid-template-columns: 1fr;
  }
  .card {
    width: 90%;
  }
}
</style>
