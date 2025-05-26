<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos previos para el muestreo de agua de consumo humano',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> aplicar los fundamentos prácticos y normativos necesarios para realizar un muestreo adecuado de agua destinada al consumo humano, garantizando la representatividad y la calidad de las muestras recolectadas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los objetivos principales de un plan de muestreo de agua?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar la temperatura del agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer la frecuencia de consumo humano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar características físicas, químicas y microbiológicas del agua.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Clasificar tipos de aguas residuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué documento establece criterios para seleccionar los lugares de recolección de muestras en sistemas de distribución?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolución 2115 de 2007.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Guía Técnica Colombiana GTC 045.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Manual INS 2011.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'NTC-ISO 5667-5:2008.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes equipos permite medir el pH y la temperatura del agua simultáneamente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conductivímetro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'pHmetro con sensor de temperatura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Turbidímetro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Colorímetro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué material se recomienda para la toma de muestras destinadas a análisis microbiológicos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bolsas estériles con tiosulfato de sodio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Frascos plásticos transparentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Botellas de agua comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Frascos de vidrio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el rango de pH permitido para el agua potable según la normatividad vigente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '5,5 – 7,0.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '6,0 – 7,5.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '6,5 – 9,0.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '7,0 – 9,5.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el parámetro que indica la cantidad de sólidos en suspensión en el agua?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cloro residual libre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Turbidez.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Conductividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Oxígeno disuelto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la función del gel refrigerante durante el transporte de muestras?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proteger contra luz solar directa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir temperatura del ambiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la turbidez.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conservar la cadena de frío.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué parámetro debe medirse inmediatamente tras la toma de muestra por su volatilidad y fotosensibilidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'pH.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Oxígeno disuelto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cloro residual libre.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Conductividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué documento establece los peligros químicos, físicos y biológicos en laboratorios?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'NTC-ISO 5667-5.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'GTC 045 de ICONTEC.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Resolución 2115 de 2007.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Manual del IDEAM.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de los siguientes elementos de protección personal debe usarse obligatoriamente en el laboratorio?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sombrero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Lentes de contacto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gafas de seguridad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sandalias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Las buenas prácticas de laboratorio contribuyen a la contaminación de las muestras.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El cloro residual libre debe medirse varias veces al día en plantas de tratamiento.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'El agua destilada es conductora de la electricidad.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La bata de laboratorio debe ser preferiblemente de material impermeable o antifluidos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Las gafas de seguridad no son necesarias si el operario usa lentes de contacto.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
