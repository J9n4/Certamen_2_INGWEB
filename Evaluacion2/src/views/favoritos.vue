<script setup>
import {ref, computed} from 'vue'
import { servicios } from '../services/servicios'
import ServicioCard from '../components/ServicioCard.vue'

//leer guardados del local storage

const favoritosIds = ref(JSON.parse(localStorage.getItem('favoritos')) || [])

// solo servicios que esten en favoritos

const serviciosFavoritos = computed (() =>  
    servicios.filter(s => favoritosIds.value.includes(s.id))
)
//eliminar un favorito

function eliminarFavorito(id){
    const index = favoritosIds.value.indexof(id)
    if (index !== -1){
        favoritosIds.value.splice(index,1)
        localStorage.setItem('favoritos', JSON.stringify(favoritosIds.value))
    }
}
</script>

<template>
  <main class="favoritos">
    <h1>Mis Favoritos</h1>
    <div v-if="serviciosFavoritos.length > 0" class="grid">
      <ServicioCard
        v-for="servicio in serviciosFavoritos"
        :key="servicio.id"
        :servicio="servicio"
        :esFavorito="true"
        @toggleFavorito="eliminarFavorito"
      />
    </div>
    <div v-else class="vacio">
      <p>No tienes servicios favoritos aún.</p>
      <RouterLink to="/servicios" class="btn-ir">Ver catálogo</RouterLink>
    </div>
  </main>
</template>


<style scoped>
.favoritos { padding: 2rem; max-width: 1100px; margin: 0 auto; }
h1 { color: #e6edf3; margin-bottom: 1.5rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.2rem; }
.vacio {
  text-align: center;
  padding: 3rem;
  background: #16213e;
  border-radius: 12px;
  border: 1px dashed #0f3460;
  color: #8b949e;
}
.btn-ir {
  display: inline-block;
  margin-top: 1rem;
  background: #e94560;
  color: #fff;
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
}
.btn-ir:hover { background: #c73652; }
</style>
