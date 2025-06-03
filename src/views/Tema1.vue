<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plan de muestreo 
    
    .row.bg-3.m-20
      .col-12
        .p-5 
          p Para iniciar el monitoreo de agua mediante la toma de muestras, es fundamental considerar ciertos aspectos previos al proceso de muestreo. Algunas de estas consideraciones son: 

          .row.mt-4.justify-content-center.align-items-stretch
            .col-lg-4.d-flex
              .w-100.d-flex.flex-column.justify-content-center.p-4.bg-4
                ul.lista-ul--color
                  li.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0.ms-2 Establecer un plan de muestreo.
                  li.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0.ms-2 Identificar el sitio específico donde se realizará la toma de la muestra.
                  li.d-flex
                    i.fa-solid.fa-circle-check
                    p.mb-0.ms-2 Determinar las características del agua a analizar.

            .col-lg-4.d-flex.d-none.d-lg-block
              .w-100.d-flex.align-items-center.justify-content-center
                figure
                  img(src='@/assets/curso/tema1/img1.png', alt='', style="width: 400px").m-auto

            .col-lg-4.d-flex
              .w-100.d-flex.flex-column.justify-content-center.p-4.bg-5
                p.mb-0 Antes de analizar la calidad del agua, es fundamental contar con un plan de muestreo bien estructurado. Este video presenta los elementos esenciales que deben tenerse en cuenta para asegurar resultados precisos y representativos en el proceso de muestreo.


    .row.mt-2
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Alistamiento de la toma de muestras

    .row.align-items-center
      .col-lg-8
        p.p-4.bg-2 La importancia del alistamiento para la toma de muestras radica en la necesidad de verificar que se cuente con todos los implementos necesarios para identificar la calidad del recurso objeto de análisis, ya sea en puntos de agua cruda o agua potable. La cantidad de materiales y equipos requeridos dependerá de la complejidad del muestreo y de la distribución de los puntos, tanto en redes de abastecimiento como en lugares de consumo humano. 
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 400px").m-auto

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Dado que el recurso hídrico tiene múltiples usos, el alistamiento debe contemplar no solo los equipos, instrumentos y reactivos necesarios, sino también incluir información relevante sobre los diferentes usuarios involucrados. Esta información, según lo sugiere el Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM, 2017), debe estar debidamente organizada y documentada. 

    p.mt-4 A continuación, se presenta un análisis integral de la calidad del agua, el cual incluye múltiples factores que permiten identificar riesgos, evaluar impactos y proponer estrategias de manejo.  

    .row.bg-6 
      .col-12 
        .p-5 
          .carousel-bg
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-3.d-none.d-lg-block
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema1/img4.png", alt="alt", style="width: 305px").m-auto
              .col-lg-8
                SlyderF.custom.mb-5(columnas="col-lg-6 col-md-6 col-xl-6")
                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img5.svg", alt='', style="width: 90px").m-auto
                    p.text-center.mb-0 Las posibles variables químicas o biológicas presentes en el agua que puedan generar un deterioro en el recurso.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img6.svg", alt='', style="width: 90px").m-auto
                    p.text-center.mb-0 Las comunidades cercanas a la zona.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img7.svg", alt='', style="width: 90px").m-auto
                    p.text-center.mb-0 La relación existente entre la calidad y el uso del agua.


                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img8.svg", alt='', style="width: 90px").m-auto
                    p.text-center.mb-0 El establecimiento de límites permisibles, teniendo en cuenta normatividad aplicable a la región.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img9.svg", alt='', style="width: 90px").m-auto
                    p.text-center.mb-0 Observación histórica de la calidad del agua.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img10.svg", alt='', style="width: 90px").m-auto
                    p.text-center.mb-0 Si han existido estrategias de control y de las acciones de gestión en el manejo de la calidad del agua.

          separador
          #t_1_2.titulo-segundo.color-acento-contenido
            h2 1.2 Personal 

          p El personal encargado de la recolección de muestras de agua, ya sea perteneciente a las personas prestadoras del servicio o a las Autoridades Sanitarias, debe cumplir con los requisitos establecidos en la Resolución 1570 de 2004 y el Decreto 1575 de 2007. Estos requisitos son: 

    .row.justify-content-center.m-20
      .col-lg-10
        .row.justify-content-center
          .col-lg-12
            .row.justify-content-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-stretch.bg-4
                  .col-lg-7.p-lg-4
                    .p-2.w-100.align-items-center
                      ul.lista-ul--color
                        li.d-flex
                          i.fa-solid.fa-circle-check
                          p.mb-0.ms-2 Contar con formación como operador, técnico, tecnólogo o profesional, y estar evaluado y certificado en Normas de Competencia Laboral relacionadas con el muestreo de aguas. 

                        li.d-flex
                          i.fa-solid.fa-circle-check
                          p.mb-0.ms-2 Estar capacitado en el uso y manipulación de equipos, así como en los métodos de ensayo para el análisis de agua destinada al consumo humano. 

                        li.d-flex
                          i.fa-solid.fa-circle-check
                          p.mb-0.ms-2 Cumplir con estas condiciones no solo mejora la calidad y proyección laboral del personal, sino que también minimiza errores durante el proceso de toma, preservación y transporte de las muestras. 

                    
                  .col-lg-5.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/img11.png', alt='', class="w-100 h-100 object-fit-cover")

  
    .row.bg-7
      .col-12
        .p-5
          separador
          #t_1_3.titulo-segundo.color-acento-contenido
            h2 1.3 Puntos de muestreo 

          p La toma de muestras de agua para consumo humano puede llevarse a cabo en distintos puntos, definidos según el objetivo del monitoreo o en concertación con la autoridad sanitaria. Estos puntos incluyen: 

          .row.justify-content-center.mb-5
            .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/tema1/img12.svg", alt="alt")

            .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/tema1/img13.svg", alt="alt")

            .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/tema1/img14.svg", alt="alt")

            .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt(data-aos="flip-left")
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/tema1/img15.svg", alt="alt")


          .titulo-tres.mt-4: h3 Selección de lugares para la recolección de muestras 

          p De acuerdo con lo establecido en la NTC-ISO 5667-5:2008, directrices para el muestreo de agua potable de instalaciones de tratamiento y sistemas de distribución por tubería, los lugares destinados a la recolección de muestras deben seleccionarse según los siguientes criterios: 

          .row.justify-content-center.mt-4
            .col-lg-10
              .row.justify-content-center
                .col-lg-12
                  .row.justify-content-center
                    .col-lg-12(data-aos="fade-down")
                      .row.d-flex.align-items-stretch.bg-2
                        .col-lg-7.p-lg-4
                          .p-2.w-100.align-items-center
                            ul.lista-ul--color
                              li.d-flex
                                i.fa-solid.fa-circle-check
                                p.mb-0.ms-2 Los puntos seleccionados deben permitir obtener muestras representativas de los componentes principales del sistema. 

                              li.d-flex
                                i.fa-solid.fa-circle-check
                                p.mb-0.ms-2 En cada planta de tratamiento debe habilitarse, como mínimo, un punto de muestreo en la entrada y otro en la salida del sistema de tratamiento de agua. 

                              li.d-flex
                                i.fa-solid.fa-circle-check
                                p.mb-0.ms-2 Los sitios de muestreo deben distribuirse ampliamente a lo largo de toda la red de distribución, y su número debe ser proporcional a la cantidad de derivaciones del sistema. 

                              li.d-flex
                                i.fa-solid.fa-circle-check
                                p.mb-0.ms-2 Para el caso de tanques de almacenamiento, el punto de toma de muestra debe ubicarse aguas arriba del primer usuario. 

                          
                        .col-lg-5.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                          figure.m-0.p-0.w-100.h-100.d-flex
                            img(src='@/assets/curso/tema1/img16.png', alt='', class="w-100 h-100 object-fit-cover")


    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-12
            .row.justify-content-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-stretch.bg-4
                  .col-lg-5.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema1/img17.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg-7.p-lg-4
                    .p-2.w-100.align-items-center
                      ul.lista-ul--color
                        li.d-flex
                          i.fa-solid.fa-circle-check
                          p.mb-0.ms-2 Si el muestreo se realiza en hidrantes, debe verificarse que estos sean adecuados para la toma de muestras de agua potable. 

                        li.d-flex
                          i.fa-solid.fa-circle-check
                          p.mb-0.ms-2 En caso de desinfección de grifos o llaves con llama, debe asegurarse que no haya materiales inflamables en las cercanías. 

                        li.d-flex
                          i.fa-solid.fa-circle-check
                          p.mb-0.ms-2 También pueden considerarse como puntos de muestreo las entradas y salidas de tanques de almacenamiento utilizados para el consumo humano o la preparación de alimentos. 


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
