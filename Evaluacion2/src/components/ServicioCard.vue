<script setup>
import { RouterLink } from 'vue-router'
//props
defineProps({
  servicio: {type: Object,required: true},
  esFavorito: { type: Boolean, default: false}
})
//emmits
const emit = defineEmits(['toggleFavorito'])
</script>

<template>
  <div class="card" :class="{ 'no-disponible': !servicio.disponible }">
    <div class="card-header">
      <span class="categoria">{{ servicio.categoria }}</span>
      <span class="badge" :class="servicio.disponible ? 'disponible' : 'agotado'">
        {{ servicio.disponible ? 'Disponible' : 'No disponible' }}
      </span>
    </div>
    <h3>{{ servicio.nombre }}</h3>
    <p>{{ servicio.descripcion }}</p>
    <div class="card-footer">
      <strong class="precio">${{ servicio.precio.toLocaleString('es-CL') }}</strong>
      <div class="acciones">
        <button class="btn-fav" @click="emit('toggleFavorito', servicio.id)">
            {{ esFavorito ? 'Favorito' : 'Favoritos' }}
        </button>
      </div>
      <RouterLink :to="`/servicios/${servicio.id}`" class="btn-detalle">Ver detalle →</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #16213e;
  border: 1px solid #0f3460;
  border-radius: 12px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(233,69,96,0.2); }
.card.no-disponible { opacity: 0.6; }
.card-header { display: flex; justify-content: space-between; align-items: center; }
.categoria { font-size: 0.75rem; color: #e94560; font-weight: 600; text-transform: uppercase; }
.badge { font-size: 0.72rem; padding: 0.2rem 0.6rem; border-radius: 20px; font-weight: 600; }
.disponible { background: #0d3d2e; color: #3fb950; }
.agotado { background: #3d1a1a; color: #f85149; }
h3 { color: #e6edf3; margin: 0; font-size: 1.1rem; }
p { color: #8b949e; font-size: 0.9rem; margin: 0; flex: 1; }
.card-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; }
.precio { color: #58a6ff; font-size: 1rem; }
.btn-detalle { background: #e94560; color: #fff; padding: 0.4rem 0.9rem; border-radius: 6px; text-decoration: none; font-size: 0.85rem; transition: background 0.2s; }
.btn-detalle:hover { background: #c73652; }
</style>
