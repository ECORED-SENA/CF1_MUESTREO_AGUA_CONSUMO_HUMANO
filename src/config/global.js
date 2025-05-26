export default {
  global: {
    Name: 'Aspectos previos al muestreo de agua para consumo humano',
    Description:
      'El componente formativo describe los aspectos asociados a la estructura del plan de muestreo, equipos, materiales y demás aspectos necesarios para el alistamiento de muestreos de agua para consumo humano para posteriores análisis fisicoquímicos y microbiológicos en laboratorio.  ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Plan de muestreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Alistamiento de la toma de muestras',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Personal',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Puntos de muestreo',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Equipos y materiales de laboratorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Equipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Materiales de laboratorio',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Buenas prácticas de laboratorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Seguridad y salud en el trabajo de muestreo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Peligros en salud y seguridad en el trabajo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Características físicas, químicas y microbiológicas del agua',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ensayos <em>in situ</em> ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Buenas prácticas de laboratorio',
      referencia:
        'Sociedad Americana de Química (2002). Seguridad en laboratorios químicos académicos',
      tipo: 'Libro',
      link:
        'https://www.acs.org/content/dam/acsorg/about/governance/committees/chemicalsafety/publications/seguridad-en-los-laboratorios-quu00edmicos-acadu00e9mico.pdf',
    },
    {
      tema: 'Ensayos in situ',
      referencia:
        'Instituto Nacional de Salud INS. (2011). Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio.',
      tipo: 'Manual',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/Manual-toma-muestras-agua.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agua cruda',
      significado:
        'es el agua natural que no ha sido sometida a proceso de tratamiento para su potabilización.',
    },
    {
      termino: 'Agua potable o agua para consumo humano',
      significado:
        'es aquella que cumple las características físicas, químicas y microbiológicas, en las condiciones señaladas en la Resolución 2115 de 2007.',
    },
    {
      termino: 'Característica',
      significado:
        'término usado para identificar elementos, compuestos, sustancias y microorganismos presentes en el agua para consumo humano.',
    },
    {
      termino: 'Muestra',
      significado:
        'toma puntual de agua en los puntos de muestreo concertados, que refleja la composición física, química y microbiológica representativa del momento.',
    },
    {
      termino: 'Muestreo',
      significado:
        'proceso de toma de muestras que son analizadas en laboratorios para obtener información sobre la calidad del agua del sitio concertado en que fueron tomadas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Centers for Disease Control and Prevention. (2023). <em>Giardiasis</em>.',
      link: '',
    },
    {
      referencia:
        'CMLAB. (2021). <em>Bolsa estéril para toma de muestras líquidas o sólidas – 7 oz (207 ml)</em>. <a href=" target="_new">https://www.cmlab.com.co/producto/bolsa-esteril-para-toma-de-muestras-liquidas-o-solidas-7-oz-207-ml/</a>',
      link:
        'https://www.cmlab.com.co/producto/bolsa-esteril-para-toma-de-muestras-liquidas-o-solidas-7-oz-207-ml/"',
    },
    {
      referencia:
        'Hach. (2025). <em>Bolsa de muestras, estéril con agente declorador, 100 mL, 100 unidades</em>. <a href=" target="_new">https://es.hach.com/bolsa-de-muestras-esteril-con-agente-declorador-100-ml-100-unidades/product?id=24761062939</a>',
      link:
        'https://es.hach.com/bolsa-de-muestras-esteril-con-agente-declorador-100-ml-100-unidades/product?id=24761062939"',
    },
    {
      referencia:
        'IDEAM. (2017). <em>Protocolo de monitoreo de agua</em>. Instituto de Hidrología, Meteorología y Estudios Ambientales.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2012). <em>GTC 045: Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional</em>.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2008). <em>NTC-ISO 5667-5:2008: Directrices para el muestreo de agua potable de instalaciones de tratamiento y sistemas de distribución por tubería</em>.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Salud (INS). (2011). <em>Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano para análisis de laboratorio</em>. <a href=" target="_new">https://www.ins.gov.co/BibliotecaDigital/Manual-toma-muestras-agua.pdf</a>',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/Manual-toma-muestras-agua.pdf"',
    },
    {
      referencia:
        'Instituto Nacional de Salud (INS). (2018). <em>Guía para la vigilancia por laboratorio de Giardia y Cryptosporidium en muestras de agua</em>. <a href=" target="_new">https://www.ins.gov.co/BibliotecaDigital/guia-para-la-vigilancia-por-laboratorio-de-giardia-y-cryptosporidium-en-muestras-de-agua.pdf</a>',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/guia-para-la-vigilancia-por-laboratorio-de-giardia-y-cryptosporidium-en-muestras-de-agua.pdf"',
    },
    {
      referencia:
        'Instituto Nacional de Salud (INS). (2020). <em>Guía de laboratorio para la vigilancia y control de calidad bacteriológico en muestras de agua para consumo humano</em>. <a href=" target="_new">https://www.ins.gov.co/BibliotecaDigital/guia-para-la-vigilancia-y-control-de-calidad-bacteriologico-en-muestras-de-agua-para-consumo-humano.pdf</a>',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/guia-para-la-vigilancia-y-control-de-calidad-bacteriologico-en-muestras-de-agua-para-consumo-humano.pdf"',
    },
    {
      referencia:
        'Madigan, M. T., Bender, K. S., Buckley, D. H., Sattley, W. M., &amp; Stahl, D. A. (2018). <em>Brock biology of microorganisms</em> (15.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Ministerio de la Protección Social &amp; Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2007). <em>Resolución 2115 de 2007: Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano</em>.',
      link: '',
    },
    {
      referencia:
        'Pakis Medical. (2020). <em>Termómetro digital KTJ TA358A para refrigeración</em>. <a href=" target="_new">https://www.pakismedical.com/termometro-ktj-con-sonda-para-refrigeracion-ta358a/</a>',
      link:
        'https://www.pakismedical.com/termometro-ktj-con-sonda-para-refrigeracion-ta358a/"',
    },
    {
      referencia:
        'United States Environmental Protection Agency. (2017). <em>Water quality standards handbook: Chapter 3 – Water quality criteria</em>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
