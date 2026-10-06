<script setup>
import {ref, computed, onMounted} from 'vue'
import ServicioCard from '../components/ServicioCard.vue'

//FETCH
const servicios = ref([])
const cargando = ref(true)
const error = ref(null)

//Fetch Async/wait
onMounted(async () => {
  try {
    const respuesta = await fetch('/servicios.json')
    if (!respuesta.ok) throw new Error(`Error: ${respuesta.status}`)
    servicios.value = await respuesta.json()
  } catch (e) {
    error.value = e.message
  } finally {
    cargando.value = false
  }
})

// v-model
const busqueda = ref('')
const categoriaSeleccionada = ref('')
//fav
const favoritos = ref(JSON.parse(localStorage.getItem('favoritos')) || [])

function toggleFavorito (id){
    const index = favoritos.value.indexOf(id)
    if (index === -1) {
        favoritos.value.push(id) //agregar

    } else{
        favoritos.value.splice(index,1) //eliminar
    }
    localStorage.setItem('favoritos',JSON.stringify(favoritos.value))
}

//computed
const serviciosFiltrados = computed(() => {
  return servicios.value.filter(s => {
    const coincideNombre = s.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
    const coincideCategoria = categoriaSeleccionada.value === '' || s.categoria === categoriaSeleccionada.value
    return coincideNombre && coincideCategoria
  })
})
//Categorias
const categorias = computed(() => {
  return [...new Set(servicios.value.map(s => s.categoria))]
})
</script>

<template>
  <main class = "catalogo">
    <h1>Catalogo de servicios</h1>
    <div v-if="cargando" class="estado">
        <p>Cargando los servicios</p>
    </div>
    <div v-else-if="error" class="estado error">
        <p>no se pudo cargar los archivos</p>
        <small>{{ error }}</small>
    </div>
    <template v-else>
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
    </template>
  </main>
</template>

<style scoped>
.catalogo { padding: 2rem; max-width: 1100px; margin: 0 auto; }
h1 { color: #111; margin-bottom: 1.5rem; }
.filtros { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
.filtros input, .filtros select {
  padding: 0.6rem 1rem; border-radius: 8px;
  border: 1px solid #ccc; background: #f9f9f9;
  color: #111; font-size: 0.95rem; outline: none;
  flex: 1; min-width: 200px; max-width: 300px;
}
.filtros input:focus, .filtros select:focus { border-color: #e94560; }
.grid { display: flex; flex-wrap: wrap; gap: 1.2rem; }
</style>
