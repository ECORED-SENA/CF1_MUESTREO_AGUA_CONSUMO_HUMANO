<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Equipos y materiales de laboratorio 
    
    p Para el muestreo de aguas destinadas al consumo humano se emplea una amplia variedad de equipos y materiales. 

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Equipos

    p Entre los principales equipos utilizados para el muestreo y el análisis in situ de los parámetros del agua para consumo humano, se destacan los siguientes: 

    .row.bg-8.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 pHmetro y sensor de temperatura 
                    p Sensor utilizado en el método electroquímico para medir el pH de la muestra de agua, además cuenta con sonda para medir temperatura. 

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img1.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Medidor de color aparente 
                    p El color aparente es un parámetro fisicoquímico que se determina en la muestra original sin filtrarse ni centrifugarse. 

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img2.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Medidor de cloro residual libre 
                    p  Mide de forma simple y precisa el cloro libre. El cloro libre es la forma activa de cloro que se usa para desinfectar el agua potable, piscinas, spas, y el agua de enjuague de vegetales. 
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img3.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Turbidímetro 
                    p Equipo que permite medir la turbiedad del agua que ingresa a la planta de agua o para medir la turbiedad del agua potable, con el fin de verificar si cumple con el límite máximo permisible. Esté parámetro también puede ser medido en laboratorio. 

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img4.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Conductivímetro 
                    p Medidor de Conductividad eléctrica sólidos totales disueltos y temperatura con pantalla de 2 niveles, dos botones para todas las funciones.  

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img5.png')


    
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Materiales de laboratorio

    p Para realizar la toma de muestras de agua se requieren materiales que permiten una correcta recolección, almacenamiento y preservación, en la siguiente tabla se describen los materiales requeridos para la toma de muestra de agua para consumo humano. 


    .row.bg-8.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Frascos de muestreo material vidrio 
                    p Frascos para muestra de agua, en material de vidrio, pueden encontrarse en capacidad desde los 100 mL hasta los 2000 mL. Las botellas de vidrio se deben usar preferiblemente para la toma de muestras a las que se les van a determinar compuestos orgánicos. 

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img6.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Frascos de muestreo material plástico 
                    p El uso de botellas de plástico es recomendado para la toma de muestras para determinar sustancias inorgánicas. Los recipientes de plástico opacos también son usados para tomar muestras de agua, estos por ejemplo, son usados para tomar muestra de agua para análisis microbiológico de Giardia, para lo cual se requiere recolectar 10 litros de agua. 

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img7.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Bolsas estériles para muestreo microbiológico 
                    p Este tipo de bolsas están fabricadas para la recolección, transporte y conservación temporal de muestras de agua destinadas a análisis microbiológicos. Son especialmente preparadas para prevenir la contaminación cruzada y conservar las condiciones microbiológicas de la muestra, para la toma de muestras de agua potable, estas bolsas deben contener tiosulfato de sodio con el fin de conservar las propiedades de la muestra. 

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img8.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Nevera portátil 
                    p Este tipo de elemento permite almacenar las muestras de forma segura y manteniendo condiciones de temperatura requeridas de acuerdo al tipo de parámetro a analizar, por lo general, las muestras se deben almacenar a temperaturas inferiores a los 6°C. 

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img9.png')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Termómetro portátil 
                    p Este tipo de termómetro permite verificar la temperatura del almacenamiento de las muestras en las neveras portátiles. 

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img10.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Gel refrigerante 
                    p Permiten mantener la cadena de frio en las muestras de agua, como alternativa puede utilizarse hielo convencional, siempre y cuando se garantice que las muestras se almacenen bajo cadena de frío. 

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img11.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Alcohol 
                    p Para la toma de muestras el accesorio de descarga de agua debe desinfectarse, evitando de esta forma contaminación de la muestra o errores en el análisis de laboratorio.   

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img12.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Mechero de alcohol 
                    p Si el accesorio dispensador es metálico, la desinfección puede hacerse por temperatura aplicando llama (flamear) de un mechero de alcohol. 

                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img13.png')

</template>

<script>
export default {
  name: 'Tema2',
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
