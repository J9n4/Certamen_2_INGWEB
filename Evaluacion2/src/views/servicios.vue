<script setup>
import { servicios } from '../services/servicios.js'
import ServicioCard from '../components/ServicioCard.vue'
</script>

<template>
  <main class="catalogo">
    <h1>Catálogo de Servicios</h1>
    <div class="grid">
      <ServicioCard
        v-for="servicio in servicios"
        :key="servicio.id"
        :servicio="servicio"
      />
    </div>
  </main>
</template>

<style scoped>
.catalogo { padding: 2rem; max-width: 1100px; margin: 0 auto; }
h1 { color: #e6edf3; margin-bottom: 1.5rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.2rem; }
</style>
