<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="zoom-in") Introducción

    .row.bg-1.m-20
      .col-12
        .p-5 
          p El recurso hídrico representa un elemento esencial para la vida y su adecuado monitoreo resulta clave para garantizar la salud pública. En este sentido, el presente componente formativo brinda las bases necesarias para comprender y ejecutar correctamente el alistamiento previo a la toma de muestras de agua destinadas al consumo humano, en concordancia con los lineamientos técnicos, normativos y de seguridad establecidos por las autoridades competentes. 

          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/intro/img1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 A lo largo del contenido, se abordan aspectos como la elaboración del plan de muestreo, la identificación de puntos estratégicos para la recolección de muestras, los equipos e insumos requeridos, y la importancia de contar con personal capacitado y certificado. Además, se detallan los parámetros fisicoquímicos y microbiológicos que deben evaluarse, así como las buenas prácticas de laboratorio que garantizan la trazabilidad y confiabilidad de los resultados obtenidos. 

          .row.mt-4.justify-content-center.align-items-center 
            .col-lg-10
              p.p-4.bg-2(data-aos="fade-up") Este componente no solo busca fortalecer las competencias técnicas del aprendiz, sino también fomentar una cultura de responsabilidad en la gestión del recurso hídrico. De este modo, se aporta a la mejora continua de los procesos de vigilancia y control de la calidad del agua en contextos tanto urbanos como rurales, en beneficio de las comunidades y del medio ambiente. 
            .col-lg-2.d-none.d-lg-block
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/intro/img2.png", alt="", style="width: 190px").m-auto


    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
