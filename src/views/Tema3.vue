<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Buenas prácticas de laboratorio
    
    .row.bg-9.mt-4.m-20
      .col-12
        .p-5
          p Las buenas prácticas de laboratorio (BPL) se definen como un conjunto de reglas, procedimientos operativos y operacionales establecidos por la #[i Organization for Economic Cooperation and Development] (OCDE). Estas prácticas son obligatorias para garantizar la calidad e integridad de los datos generados en los procesos de laboratorio, con el propósito de armonizar los protocolos, la información y la documentación asociada a los procedimientos operativos. 

          .row.justify-content-center.align-items-center
            .col-lg-8
              p.p-5.bg-2 Estos lineamientos conforman una verdadera filosofía de trabajo, ya que se conciben como un sistema integral en el que se analizan todos los procesos, desde el diseño hasta el archivo de los resultados. 
            .col-lg-4.d-lg-block.d-none 
              figure
                img(src='@/assets/curso/tema3/img1.png', alt='', style="width: 400px").m-auto

          .row.justify-content-center
            .col-lg-10
              .row.justify-content-center
                .col-lg-12
                  .row.justify-content-center
                    .col-lg-12(data-aos="fade-down")
                      .row.d-flex.align-items-stretch.bg-10
                        .col-lg-5.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                          figure.m-0.p-0.w-100.h-100.d-flex
                            img(src='@/assets/curso/tema3/img2.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                        .col-lg-7.p-lg-4
                          .p-2.w-100.align-items-center
                            ul.lista-ul--color
                              li.d-flex
                                i.fa-solid.fa-circle-check
                                p.mb-0.ms-2 Contribuyen a evitar la contaminación de las muestras y protegen tanto al personal de campo como al de laboratorio. 

                              li.d-flex
                                i.fa-solid.fa-circle-check
                                p.mb-0.ms-2 Fortalecen la credibilidad de los resultados frente a clientes y autoridades sanitarias. 

                              li.d-flex
                                i.fa-solid.fa-circle-check
                                p.mb-0.ms-2 Permiten tomar decisiones más acertadas al contar con datos sólidos, confiables y trazables. 

                              li.d-flex
                                i.fa-solid.fa-circle-check
                                p.mb-0.ms-2 Garantizan el cumplimiento de los protocolos de muestreo conforme a la normatividad vigente.

          separador
          #t_3_1.titulo-segundo.color-acento-contenido
            h2 3.1 Seguridad y salud en el trabajo de muestreo

          .row.align-items-center
            .col-lg-8
              p La prevención de accidentes durante los muestreos de agua y en las actividades de laboratorio exige la implementación de acciones orientadas a la protección del personal y a la preservación de la infraestructura. Esto implica el compromiso y la responsabilidad de todas las personas que utilizan estos espacios de trabajo. Además, se requiere mantener una actitud cooperativa y activa frente a la seguridad. #[b Es importante tener presente que los accidentes relacionados con el manejo de insumos químicos, tanto en laboratorio como en pruebas de campo, suelen estar asociados a:]

              .row
                .col-lg-4.px-4
                  .row.justify-content-center.bg-11.p-4
                    figure
                      img(src="@/assets/curso/tema3/img3.svg", alt="", style="width: 76px").m-auto
                    p.text-center.mt-2 Actividades que generen riesgos al personal y a la calidad del muestreo.

                .col-lg-4.px-4
                  .row.justify-content-center.bg-11.p-4
                    figure
                      img(src="@/assets/curso/tema3/img4.svg", alt="", style="width: 76px").m-auto
                    p.text-center.mt-2 No utilizar el sentido común

            .col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/img5.png', alt='', style="width: 400px").m-auto

    p Cuando se menciona la necesidad de asumir un “rol activo” en el laboratorio o durante la toma de muestras, se hace referencia a la adopción constante de las siguientes recomendaciones:   

    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center
          .col-lg-12
            .row.justify-content-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-stretch.bg-4
                  .col-lg-5.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema3/img6.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg-7.p-lg-4
                    .p-2.w-100.align-items-center
                      ul.lista-ul--color
                        li.d-flex
                          i.fa-solid.fa-circle-check
                          p.mb-0.ms-2 Cumplir estrictamente con las normas de seguridad. 

                        li.d-flex
                          i.fa-solid.fa-circle-check
                          p.mb-0.ms-2 Evitar cualquier tipo de broma o comportamiento inapropiado durante las actividades de muestreo o de laboratorio. 

                        li.d-flex
                          i.fa-solid.fa-circle-check
                          p.mb-0.ms-2 Familiarizarse con el uso y ubicación de los equipos de seguridad. 

                        li.d-flex
                          i.fa-solid.fa-circle-check
                          p.mb-0.ms-2 Informarse previamente sobre los riesgos asociados al manejo de sustancias químicas. 

    p.mt-4 Con el propósito de proteger al personal y asegurar el cumplimiento de las buenas prácticas de laboratorio, es indispensable contar con los siguientes elementos de protección personal:

    .row.bg-8.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Cofia 
                    p Si se tiene el cabello largo, debe mantenerse recogido durante la práctica. La cofia debe utilizarse si así lo indica el instructor. 
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img7.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Casco 
                    p Puede ser requerido en campo como medida preventiva, según las condiciones del entorno. 
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img8.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Instrumental de campo o vestimenta 
                    p La ropa debe proteger contra salpicaduras o contacto con sustancias químicas. Debe ser adecuada tanto para laboratorio como para trabajo de campo. 
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img9.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Protección de ojos 
                    p Todo el personal debe usar gafas de seguridad dentro del laboratorio. Quienes usen gafas permanentes deben contar con gafas de seguridad adicionales. No se deben usar lentes de contacto, ya que facilitan la acumulación de sustancias tóxicas. 
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img10.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Bata de laboratorio 
                    p Usar bata blanca de manga larga, preferiblemente de material impermeable o antifluidos. 
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img11.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Tapabocas 
                    p Debe usarse durante el muestreo de agua y en los análisis de laboratorio para evitar afectaciones por reacciones químicas o contaminación de las muestras. 
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img12.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Zapatos 
                    p Deben ser totalmente cerrados. No se permite el uso de sandalias, zapatos que dejen piel expuesta ni calzado con tacones. 
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img13.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Guantes de nitrilo o neopreno 
                    p Deben usarse durante el muestreo y al manipular sustancias químicas o biológicas, asegurando resistencia y sensibilidad. 

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img14.png')


    p.mt-4 En el laboratorio, es obligatorio que, durante la primera sesión, el instructor presente a los aprendices las normas y disposiciones generales de seguridad. Esta socialización debe incluir explicaciones claras, espacio para resolver dudas y fomentar la participación activa de los estudiantes. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Adicionalmente, el instructor debe realizar un recorrido por las instalaciones con el grupo, señalando la ubicación y función de los dispositivos de seguridad, tales como salidas de emergencia, rutas de evacuación, extintores, botiquines de primeros auxilios, duchas de emergencia y fuentes lavaojos. 

    p.mt-4 Antes de iniciar cualquier práctica de campo o de laboratorio, el instructor deberá socializar las normas específicas de seguridad correspondientes a cada actividad. 

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Peligros en salud y seguridad en el trabajo

    p Las sustancias químicas pueden causar daño si no son manipuladas de forma adecuada y según protocolos. Lo más importante por resaltar es que estas sustancias tienen diferentes características (tóxicas, inflamables, corrosivas y reactivas) y debe reconocerlas y saber cómo reaccionar en caso de accidentes. 

    .bloque-texto-g.bg-5.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Sin embargo, existen sustancias que cuentan con más de un peligro, por lo cual se considera que el grado de peligrosidad de las sustancias químicas puede variar; por ello siempre trabajar de forma segura es la manera correcta de desarrollar actividades con estos implementos. 


    .row.mt-4
      .col-lg-8
        .row.p-4.bg-12.align-items-center
          p Se recomienda ampliar la información en sesiones en línea con su instructor y con el material de apoyo, pero se dejan las siguientes acciones como tips necesarios para contrarrestar los peligros químicos:  z

          p Según la Guía Técnica Colombiana 045 de identificación de peligros y valoración de riesgos en seguridad y salud ocupacional, entre los peligros que están asociados a las actividades de muestreo y manipulación de sustancias químicas en laboratorios están los siguientes (ICONTEC, 2012):  
      .col-lg-4.d-lg-block.d-none 
        figure
          img(src='@/assets/curso/tema3/img17.png', alt='', style="width: 400px").m-auto


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
                  .tarjeta.bg-13.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img18.svg", alt='', style="width: 90px").m-auto
                    p.text-center #[b Peligros químicos:]
                    p.text-center.mb-0.p-3 Gases y vapores, humos metálicos y no metálicos, material particulado.

                  .tarjeta.bg-13.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img19.svg", alt='', style="width: 90px").m-auto
                    p.text-center #[b Peligros físicos:]
                    p.text-center.mb-0.p-3 Ruido, temperaturas extremas, presión atmosférica, iluminación.

                  .tarjeta.bg-13.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img20.svg", alt='', style="width: 90px").m-auto
                    p.text-center #[b Peligros biológicos:]
                    p.text-center.mb-0.p-3 Virus, bacterias, hongos, picaduras, mordeduras.


                  .tarjeta.bg-13.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img21.svg", alt='', style="width: 90px").m-auto
                    p.text-center #[b Peligros biomecánicos:]
                    p.text-center.mb-0.p-3 Postura, movimiento repetitivo, manipulación de cargas.

                  .tarjeta.bg-13.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img22.svg", alt='', style="width: 90px").m-auto
                    p.text-center #[b Fenómenos naturales:]
                    p.text-center.mb-0.p-3 Virus, bacterias, hongos, picaduras, mordeduras.

    p.m-20 Se sugiere ampliar esta información durante las sesiones en línea con su instructor y mediante la consulta del material de apoyo disponible. A continuación, se presentan algunos consejos básicos para minimizar los riesgos asociados al manejo de sustancias químicas: 

    .row.justify-content-center.mt-4
      .col-lg-10
        .row.justify-content-center
          .col-lg-12
            .row.justify-content-center
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-stretch.bg-4
                  .col-lg-5.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema3/img23.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg-7.p-lg-4
                    .p-2.w-100.align-items-center
                      ul.lista-ul--color
                        li.d-flex
                          i.fa-solid.fa-circle-check
                          p.mb-0.ms-2 Lea con atención las etiquetas de las sustancias químicas antes de utilizarlas. 

                        li.d-flex
                          i.fa-solid.fa-circle-check
                          p.mb-0.ms-2 Siga las indicaciones establecidas en las hojas de seguridad de cada producto. 

                        li.d-flex
                          i.fa-solid.fa-circle-check
                          p.mb-0.ms-2 Respete siempre las recomendaciones proporcionadas por su instructor. 

</template>

<script>
export default {
  name: 'Tema3',
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
