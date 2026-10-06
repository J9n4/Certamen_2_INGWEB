<script setup>
    import { useRoute, RouteLink} from 'vue-router'
    import { servicios } from '../services/servicios.js';

    //Obtencion de id
    const route = useRoute()   
    const id = Number(route.params.id)

    const servicio = servicios.find(s => s.id === id)
</script>

<template>
    <main class="detalle">
        <div v-if = "servicios">
            <RouterLink to = "/servicios" class="volver">volver al catalogo</RouterLink>
            <div class="card-detalle">
                <div class="header">
                    <span class="categoria">{{ servicio.categoria }}</span>
                    <span class="badge" :class="servicio.disponible ? 'disponible' : 'agotado'">
                        {{ servicio.disponible ? 'disponible': 'agotado'}}
                    </span>
                </div>
                <h1>{{ servicio.nombre }}</h1>
                <p class="descripcion">{{ servicio.descripcion }}</p>
                <p class="precio">Precio: <strong>${{ servicio.precio.toLocaleString('es-CL') }}</strong></p>
            </div>
        </div>
        <div v-else class="no-encontrado">
            <h2>Servicio no encontrado</h2>
            <p>El ID <strong>#{{ route.params.id }}</strong>no corresponde a ningun servicio o catalogo</p>
            <RouteLink to = "/servicios" class="volver">Volver al catalogo</RouteLink>
        </div>
    </main>
</template>