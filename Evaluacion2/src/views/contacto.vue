<script setup>
import { ref, computed} from 'vue'
import { servicios } from '../services/servicios'
//model
const nombre   = ref('')

const correo   = ref('')

const servicio = ref('')

const mensaje  = ref('')

//estados
const enviado  = ref(false)
const errores  = ref([])

const formularioValido = computed(() => {
    return nombre.value.trim() !=='' &&
    correo.value.includes('@') &&
    servicio.value !== '' &&
    mensaje.value.trim() !== ''
})

function enviar() {
  errores.value = []

  if (nombre.value.trim() === '')      
   errores.value.push('El nombre es obligatorio.')

  if (!correo.value.includes('@'))      
    errores.value.push('El correo no es válido.')

  if (servicio.value === '')            
    errores.value.push('Debes seleccionar un servicio.')

  if (mensaje.value.trim() === '')      
    errores.value.push('El mensaje no puede estar vacío.')

  if (errores.value.length === 0) {
    enviado.value = true
  }
}

function reset(){
    nombre.value = ''
    correo.value= ''
    servicio.value = ''
    mensaje.value = ''
    enviado.value = false
    errores.value = []
}
</script>

<template>
    <main class="contacto">
        <h1>Form de Contacto</h1>
        <div v-if="enviado" class="confirmacion">
            <p>Gracias por enviar!</p>
            <p>Gracias <strong>{{ nombre }}</strong>, te contactaremos
            a <strong>{{ correo }}</strong>.</p>
            <button @click="reset" class="btn-reset">Enviar otro formulario</button>
        </div>

        <form v-else @submit.prevent="enviar" class="form">
            <!--ERRORES-->
            <div v-if="errores.length > 0" class="errores">
                <p v-for="error in errores" :key="error">{{ error }}</p>
            </div>
            <div class="campo">
                <label for="nombre"> Nombre</label>
                <input id="nombre" v-model="nombre" type="text" placeholder="Tu nombre completo"/>

            </div>
            <div class="campo">
                <label for="correo">Correo electrónico</label>
                <input id="correo" v-model="correo" type="email" placeholder="correo@ejemplo.com"/>
            </div>
            <div class="campo">
                <label for="servicio">Servicio de interés</label>
                <select id="servicio" v-model="servicio">
                    <option value="">Selecciona un servicio</option>
                    <option v-for="s in servicios" :key="s.id" :value="s.nombre">{{ s.nombre }}</option>
                </select>
            </div>
            <div class="campo">
                <label for="mensaje">Mensaje</label>
                <textarea id="mensaje" v-model="mensaje" placeholder="Escribe tu mensaje..." rows="4"></textarea>
            </div>
            <button type="submit" class="btn-enviar" :disabled="!formularioValido">
                Enviar formulario
            </button>
        </form>
    </main>
</template>

<style scoped>
.contacto { padding: 2rem; max-width: 600px; margin: 0 auto; }
h1 { color: #e6edf3; margin-bottom: 1.5rem; }
.form { display: flex; flex-direction: column; gap: 1.2rem; }
.campo { display: flex; flex-direction: column; gap: 0.4rem; }
.campo label { color: #8b949e; font-size: 0.9rem; font-weight: 600; }
.campo input, .campo select, .campo textarea {
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: 1px solid #0f3460;
  background: #16213e;
  color: #e6edf3;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
  resize: vertical;
}
.campo input:focus, .campo select:focus, .campo textarea:focus {
  border-color: #e94560;
}
.errores {
  background: #3d1a1a;
  border: 1px solid #f85149;
  border-radius: 8px;
  padding: 0.8rem 1rem;
}
.errores p { color: #f85149; margin: 0.2rem 0; font-size: 0.9rem; }
.btn-enviar {
  padding: 0.75rem;
  background: #e94560;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s;
}
.btn-enviar:hover:not(:disabled) { background: #c73652; }
.btn-enviar:disabled { opacity: 0.4; cursor: not-allowed; }
.confirmacion {
  background: #0d3d2e;
  border: 1px solid #3fb950;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  color: #3fb950;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.confirmacion strong { color: #e6edf3; }
.btn-reset {
  margin-top: 0.5rem;
  padding: 0.6rem 1.4rem;
  background: #3fb950;
  color: #000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}
</style>