<script setup>
import {ref, computed} from 'vue'
import { servicios } from '../services/servicios.js'
import ServicioCard from '../components/ServicioCard.vue'
// v-model
const busqueda = ref('')
const categoriaSeleccionada = ref('')
//fav
const favoritos = ref([])

function toggleFavorito (id){
    const index = favoritos.value.indexOf(id)
    if (index === -1) {
        favoritos.value.push(id) //agregar

    } else{
        favoritos.value.slice(index,1) //eliminar
    }
}

//computed
const serviciosFiltrados = computed(() => {
  return servicios.filter(s => {
    const coincideNombre = s.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
    const coincideCategoria = categoriaSeleccionada.value === '' || s.categoria === categoriaSeleccionada.value
    return coincideNombre && coincideCategoria
  })
})
//Categorias
const categorias = computed(() => {
  return [...new Set(servicios.map(s => s.categoria))]
})
</script>

<template>
  <main class = "catalogo">
    <h1>Catalogo de servicios</h1>
    <div class = "filtros">
        <input v-model="busqueda" type="text" placeholder= "Buscar por nombres"/>
        <select v-model = "categoriaSeleccionada">
            <option value ="">Todas las Categorias</option>
            <option v-for = "cat in categorias" :key="cat" :value="cat">{{ cat }}</option>
        </select>
    </div>
    <div v-if="serviciosFiltrados.length > 0" class="grid">
      <ServicioCard v-for="servicio in serviciosFiltrados":key="servicio.id":servicio="servicio"
      :esFavorito="favoritos.includes(servicio.id)"
      @toggleFavorito="toggleFavorito"
      />
    </div>
    <div v-else class="sin-resultados">
      <p>No se encontraron servicios para los criterios seleccionados.</p>
    </div>
  </main>
</template>

<style scoped>
.catalogo { padding: 2rem; max-width: 1100px; margin: 0 auto; }
h1 { color: #e6edf3; margin-bottom: 1.5rem; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.2rem; }
</style>
