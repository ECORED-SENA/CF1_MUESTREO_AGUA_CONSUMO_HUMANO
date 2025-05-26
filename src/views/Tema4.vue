<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Características físicas, químicas y microbiológicas del agua
    
    p La importancia del agua es capital, pero más allá de ello lo cierto es que este elemento tiene diferentes propiedades de interés a nivel científico. A continuación, se describirán algunas de las principales características físicas y químicas del agua: 

    .row.bg-8.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Es incolora  
                    p En algunas ocasiones, cuando se percibe el mar o un río, parece que el agua tuviera un color azul o verde. Esto se debe a la forma en que el agua refleja la luz y a su capacidad para absorber más fácilmente las longitudes de onda cortas. Sin embargo, no se percibe ningún color en ella a menos que esté mezclada con alguna otra sustancia; de no ser así, es totalmente transparente para nuestra vista. 
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img1.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 No tiene sabor ni olor  
                    p A diferencia de otras sustancias, el agua no tiene un sabor ni un olor característico. Cuando estos se presentan, es porque ha sido alterada de alguna manera o porque, al momento de consumirla, ha incorporado partículas de otros elementos. 
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img2.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 pH 
                    p Una de las principales características del agua es que, por lo general, tiene un pH neutro, el cual oscila entre 6,5 y 8,5. Esto implica que el agua puede ser medianamente ácida o medianamente básica, dependiendo de su composición. 
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img3.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Conductividad  
                    p El agua destilada o pura no es conductora de la electricidad, sino que actúa como aislante, ya que no posee electrones libres que puedan conducirla. Sin embargo, esto solo aplica para el agua destilada, ya que está compuesta únicamente por moléculas de agua. En cambio, el agua que utilizamos diariamente sí es conductora de la electricidad, debido a la gran cantidad de minerales y otros conductores que contiene.
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img4.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Temperatura  
                    p El agua tiene la capacidad de retener el calor, por lo que se enfría más lentamente que otras sustancias y también tarda en calentarse. Esta propiedad la convierte en un regulador térmico importante en diversos contextos. 
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img5.png')

                .row.justify-content-center.align-items-center.my-lg-4.p-4
                  .col-md-7.mb-4.mb-md-0
                    h4 Color real y color aparente  
                    p El color verdadero del agua es aquel que se mide sin la presencia de turbidez, la cual puede eliminarse mediante filtración. Por su parte, el color aparente hace referencia a la medición del color sin excluir dicha turbidez, es decir, incluye las partículas en suspensión que afectan la claridad del agua. 
                    
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema4/img6.png')


    .row.bg-14
      .col-12 
        .p-5
          .titulo-tres.mt-4: h3 Características microbiológicas 

          p.mt-4 Los microorganismos patógenos en el agua para consumo humano pueden generar riesgos para la salud y pueden ser la causa de diferentes enfermedades. Entre los microorganismos objeto de medición y vigilancia sanitaria están los siguientes: 

          .row.justify-content-center
            .col-lg-6 
              .div-con-imagen
                .bg-box-contenido.h-4
                  p.d-block.mb-1 #[b Escherichia Coli]
                  p.mb-0 Indicador de contaminación fecal para verificar la calidad de agua debido a su presencia inequívoca en el intestino humano (INS, 2020, p. 26)
                .imagen-circular
                  figure.mb-0
                    img(src='@/assets/curso/tema4/img7.png', alt='')

            .col-lg-6.mt-lg-0.mt-4
              .div-con-imagen
                .bg-box-contenido.h-4
                  p.d-block.mb-1 #[b Coliformes Totales]
                  p.mb-0 Grupo amplio de bacilos Gram negativos, suelen estar presentes en casi todos los sistemas de abastecimiento que no cuentan con tratamiento (INS, 2020, p. 27).
                .imagen-circular
                  figure.mb-0
                    img(src='@/assets/curso/tema4/img8.png', alt='')

          .row.justify-content-center.mt-4
            .col-lg-6
              .div-con-imagen
                .bg-box-contenido.h-4
                  p.d-block.mb-1 #[b Mesófilos]
                  p.mb-0 Organismos que crecen en un rango óptimo de temperatura de 20°C a 45°C (Madigan et al, 2018).
                .imagen-circular
                  figure.mb-0
                    img(src='@/assets/curso/tema4/img9.png', alt='')

            .col-lg-6.mt-lg-0.mt-4
              .div-con-imagen
                .bg-box-contenido.h-4
                  p.d-block.mb-1 #[b Giardia]
                  p.mb-0 Protozooflagelado que parasita el intestino de humanos y otros mamiferos. Puede generarsíntomas como diarrea, dolor abdominal, entre otros síntomas (Centers forDisease Control and Prevention, 2023) .
                .imagen-circular
                  figure.mb-0
                    img(src='@/assets/curso/tema4/img10.png', alt='')

            .row.justify-content-center.mt-4
              .col-lg-6
                .div-con-imagen
                  .bg-box-contenido.h-4
                    p.d-block.mb-1 #[b Cryptosporidium]
                    p.mb-0 Parásitoprotozoario que se localiza en el instestino delgado de humanos y animales,genera infección que provoca diarrea acuosa severa, además de otros síntomasque pueden llevar a la desnutrición. (INS, 2018, p. 7).
                  .imagen-circular
                    figure.mb-0
                      img(src='@/assets/curso/tema4/img11.png', alt='')










</template>

<script>
export default {
  name: 'Tema4',
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
