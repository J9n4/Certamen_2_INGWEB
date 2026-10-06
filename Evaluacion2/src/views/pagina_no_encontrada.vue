<script setup>
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute
</script>

<template>
    <main class="not-found">
        <h1 class="code">404</h1>
        <h2>Pagina no encontada</h2>
        <p>La ruta <code>{{ route.path }}</code>No existe.</p>
        <RouterLink to="/" class = 'btn-home'>Volver al Inicio</RouterLink>
    </main>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  gap: 1rem;
}
.code {
  font-size: 6rem;
  font-weight: 900;
  color: #e94560;
  margin: 0;
  line-height: 1;
}
h2 { color: #e6edf3; margin: 0; }
p { color: #8b949e; }
code {
  background: #16213e;
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
  color: #58a6ff;
}
.btn-home {
  margin-top: 1rem;
  background: #e94560;
  color: #fff;
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s;
}
.btn-home:hover { background: #c73652; }
</style>