<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="inicio">

    <!-- Hero -->
    <section class="hero">
      <h1>Bienvenido a <span class="marca">Servicios Profesionales de Ñuble</span></h1>
      <p class="subtitulo">Encuentra los mejores servicios tecnologicos, creativos y de marketing en un solo lugar.</p>
      <div class="hero-acciones">
        <RouterLink to="/servicios" class="btn-primary">Ver catalogo</RouterLink>
        <RouterLink to="/contacto" class="btn-outline">Contactanos</RouterLink>
      </div>
    </section>

    <!-- Tarjetas de categorias -->
    <section class="categorias">
      <div class="cat-card">
        <h3>Tecnologia</h3>
        <p>Desarrollo web, soporte TI y mas.</p>
      </div>
      <div class="cat-card">
        <h3>Multimedia</h3>
        <p>Fotografia profesional y edicion de video.</p>
      </div>
      <div class="cat-card">
        <h3>Marketing</h3>
        <p>SEO, redes sociales y estrategia digital.</p>
      </div>
    </section>

  </main>
</template>

<style scoped>
.inicio {
  background: #fff;
  min-height: 80vh;
  padding: 0;
}
.hero {
  background: #111;
  color: #fff;
  text-align: center;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
}
.hero h1 { font-size: 2.8rem; font-weight: 800; color: #fff; margin: 0; }
.marca { color: #e94560; }
.subtitulo { color: #aaa; font-size: 1.1rem; max-width: 520px; line-height: 1.6; margin: 0; }
.hero-acciones { display: flex; gap: 1rem; margin-top: 0.5rem; flex-wrap: wrap; justify-content: center; }
.btn-primary {
  background: #e94560; color: #fff; padding: 0.75rem 2rem;
  border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 1rem; transition: background 0.2s;
}
.btn-primary:hover { background: #c73652; }
.btn-outline {
  background: transparent; color: #fff; padding: 0.75rem 2rem;
  border-radius: 8px; border: 2px solid #fff; text-decoration: none;
  font-weight: 600; font-size: 1rem; transition: background 0.2s, color 0.2s;
}
.btn-outline:hover { background: #fff; color: #111; }
.categorias {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem; padding: 3rem 2rem; max-width: 900px; margin: 0 auto;
}
.cat-card {
  background: #f9f9f9; border: 1px solid #e5e5e5; border-radius: 12px;
  padding: 2rem 1.5rem; text-align: center; transition: box-shadow 0.2s, transform 0.2s;
}
.cat-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.1); transform: translateY(-4px); }
.icono { font-size: 2.5rem; }
.cat-card h3 { color: #111; margin: 0.8rem 0 0.4rem; font-size: 1.15rem; }
.cat-card p { color: #666; font-size: 0.9rem; margin: 0; }
</style>