<script setup></script>

<template>
  <section class="wrapper">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/team">Team</RouterLink>
      </nav>
    </header>
    <div class="content">
      <RouterView />
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  max-height: 100vh;
  padding-top: 2rem;
}

nav {
  width: 100%;
  font-size: 15px;
  text-align: center;
  display: flex;
  /* padding-top: 2rem; */
  justify-content: space-around;
  align-items: center;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--bg-color);
  color: #fff;
  text-decoration: none;
}

nav a:hover {
  color: var(--text-color);
}

nav a.router-link-exact-active {
  color: var(--dark-text-color);
}

.content {
  height: calc(100% - 3rem);
}
</style>
