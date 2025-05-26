<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Ensayos #[i in situ]

    p.bg-2.p-5 Los ensayos in situ son mediciones que se realizan directamente en campo sobre ciertos parámetros que, debido a su naturaleza, deben registrarse de forma inmediata para garantizar resultados confiables. En el caso del agua para consumo humano, estos parámetros incluyen la temperatura, el olor, el sabor, el cloro residual libre y el pH (INS, 2011, p. 46). No obstante, para otros tipos de agua, como las residuales o superficiales, también se aplican estas mediciones, incorporando además la conductividad, la turbidez y el oxígeno disuelto. Para ello se utiliza un equipo multiparamétrico. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estas mediciones suelen realizarse con equipos portátiles, como sondas multiparamétricas, pH-metros y conductímetros. Es fundamental que estas pruebas se lleven a cabo siguiendo las indicaciones correspondientes sobre la revisión y calibración de los equipos utilizados. 

    p.mt-4
      b Entre los principales parámetros para análisis in situ se encuentran: 

    .titulo-tres.mt-4: h3 Oxígeno disuelto

    .row.mt-4
      .col-lg-8
        .row.p-4.bg-12.align-items-center
          p Este parámetro mide la cantidad de oxígeno presente en el agua en forma disuelta. Mantener una concentración adecuada de oxígeno disuelto es fundamental para la supervivencia de los peces y otros organismos acuáticos, y además contribuye a mejorar las condiciones del proceso de potabilización. Su nivel puede verse afectado por factores como la temperatura, la presencia de materia orgánica disuelta, agentes oxidantes inorgánicos, entre otros. Una baja concentración de oxígeno disuelto puede indicar una alta carga orgánica en el agua, generalmente asociada a vertimientos de aguas residuales. 
      .col-lg-4.d-lg-block.d-none 
        figure
          img(src='@/assets/curso/tema5/img2.png', alt='', style="width: 400px").m-auto

    .titulo-tres.mt-4: h3 Temperatura 

    p.mt-4 La temperatura desempeña un papel fundamental en diversos procesos fisicoquímicos del agua, como la solubilidad de los gases, la disolución de sales y, por tanto, en su conductividad eléctrica. También influye en la determinación del pH, en la identificación del origen del agua y en la detección de posibles mezclas. Las descargas de agua a temperaturas elevadas pueden generar daños en la flora y fauna de los cuerpos de agua receptores, al interferir con la reproducción de las especies, favorecer el crecimiento de bacterias y otros microorganismos, acelerar reacciones químicas, reducir los niveles de oxígeno disuelto y potenciar los procesos de eutrofización. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La medición de la temperatura debe realizarse in situ, ya que no es posible aplicar procedimientos de preservación o almacenamiento para este parámetro. El método más adecuado consiste en introducir directamente los equipos de medición —como termómetros o sondas— en la muestra de agua o en la fuente de abastecimiento del acueducto. 
    

    p.mt-4 Este parámetro puede determinarse de forma sencilla y precisa mediante sensores que operan con base en el cambio de resistencia de un resistor metálico. La termometría de resistencia se fundamenta en las variaciones que se presentan en la resistencia eléctrica de materiales conductores o semiconductores metálicos cuando se exponen a diferentes temperaturas. 

    .titulo-tres.mt-4: h3 Conductividad  

    .row.mt-4
      .col-lg-9
        .row.p-4.bg-12.align-items-center
          p La conductividad eléctrica en el agua hace referencia a su capacidad para conducir corriente eléctrica, la cual depende directamente de la concentración de iones disueltos presentes, como sales, ácidos o bases. Este parámetro es un indicador clave de la calidad del agua, ya que valores elevados pueden evidenciar procesos de contaminación o una mineralización excesiva (United States Environmental Protection Agency – EPA, 2017). 
      .col-lg-3.d-lg-block.d-none 
        figure
          img(src='@/assets/curso/tema5/img4.png', alt='', style="width: 400px").m-auto

    .titulo-tres.mt-4: h3 pH   

    p.mt-4 El valor del potencial de hidrógeno (pH) del agua para consumo humano debe estar comprendido entre 6,5 y 9,0 (MPS y MAVDT, 2007). Este parámetro es fundamental en procesos como la floculación química, la desinfección, el ablandamiento del agua y el control de la corrosión. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el marco del control de calidad y la vigilancia del agua potable, el pH debe medirse diariamente en el sistema de abastecimiento. Es especialmente relevante su monitoreo tanto a la entrada del sistema como en distintos puntos de la red de distribución. El método más común para determinar este parámetro es mediante una celda electroquímica, la cual emplea un electrodo indicador sensible a la concentración de protones. Esta medición se realiza con un dispositivo conocido como pH-metro. 

    .titulo-tres.mt-4: h3 Turbiedad    

    p.mt-4 La turbidez del agua es provocada por la materia insoluble, en suspensión o dispersión coloidal. Es un fenómeno óptico que consiste esencialmente en una absorción de luz combinado con un proceso de difusión. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La turbiedad para el agua potable no debe superar las 2 unidades de turbiedad según los establecido en la resolución 2115 de 2007, es importante que al momento de iniciar con el proceso de desinfección se haya removido la turbiedad, ya que de esta forma se evita la formación partículas que pueden ser dañinas para la salud humana.   

    .titulo-tres.mt-4: h3 Cloro residual libre    

    p.mt-4 La medición de este parámetro debe realizarse diariamente, y en algunos casos, varias veces al día, dependiendo del número de turnos ejecutados por los operarios en las plantas de tratamiento de agua potable.  El cloro residual libre debe medirse de forma inmediata después de tomar la muestra, ya que su concentración puede variar rápidamente debido a su volatilidad y sensibilidad a la luz. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este parámetro se evalúa en campo mediante equipos de fácil uso. Existen diferentes tipos de pruebas o kits que emplean reactivos en forma sólida o líquida. De acuerdo con lo establecido en la Resolución 2115 de 2007, la concentración de cloro residual libre en el agua potable debe mantenerse en un rango entre 0,3 mg/L y 2 mg/L. 

    p.mt-4 Si el muestreo se realiza con fines de autocontrol o vigilancia, los parámetros de temperatura, turbiedad, cloro residual libre y pH del agua para consumo humano deben ser analizados directamente en el sitio de la toma de la muestra (INS, 2011). 

    .row.mt-4
      .col-lg-9
        .row.p-4.bg-12.align-items-center
          p Respecto a la recolección de la muestra, el Instituto Nacional de Salud (2011) indica que, en el caso de vigilancia, esta puede ser tomada de manera simultánea y conjunta por los técnicos de la persona prestadora del servicio y de la autoridad sanitaria. Los resultados deben quedar consignados en el Acta de toma de muestras de agua, firmada por ambas partes, conforme a lo establecido en el artículo 8° de la Resolución 0811 de 2008 (p. 46). 
      .col-lg-3.d-lg-block.d-none 
        figure
          img(src='@/assets/curso/tema5/img8.png', alt='', style="width: 400px").m-auto





</template>

<script>
export default {
  name: 'Tema5',
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
