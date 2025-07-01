export default {
  global: {
    Name: 'Análisis de datos estadísticos para el turismo',
    Description:
      'Este componente formativo permite identificar aspectos básicos de estadística aplicable para la recolección, procesamiento y presentación de información relevante del turismo en las regiones y en el territorio nacional. Mediante el análisis de datos se consolidan estadísticas de oferta y demanda turística del destino, que permite conocer el comportamiento del turismo y tomar decisiones estratégicas para el mejoramiento y desarrollo del sector.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'La estadística para el turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos y tipología',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Los datos y su clasificación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de variables estadísticas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Indicadores del sector turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de indicadores según variables',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Sistema de Información Turística (SITUR)',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistema Estadístico Nacional (SEN)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Normatividad aplicada',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estructura organizativa del sistema',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Información estadística del sector turismo',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Proceso de recolección y análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fuentes de información',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de recolección de datos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Diseño de herramientas de recolección de datos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Procesamiento y análisis de información',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cuenta Satélite de Turismo (CST)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Marco conceptual',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Contenido y estructura de la Cuenta Satélite de Turismo (CST)',
            hash: 't_5_2',
          },
        ],
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
        download: 'downloads/CFA_12_122154_DU.pdf',
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
      tema: '3. Sistema Estadístico Nacional (SEN)',
      referencia:
        'DANE. (s.f.). ¿Qué es el Sistema Estadístico Nacional - SEN?',
      tipo: 'Artículo',
      link:
        'https://www.dane.gov.co/index.php/sistema-estadistico-nacional-sen',
    },
    {
      tema: '3.3 Información estadística del sector turismo',
      referencia: 'Portucolombia. (2025). Portal web.',
      tipo: 'Página web',
      link: 'https://portucolombia.mincit.gov.co/ ',
    },
    {
      tema: '5.Cuenta Satélite de Turismo (CST)',
      referencia:
        'ONU Turismo. (s.f.). Recomendaciones sobre el marco conceptual (CST:RMC 2008).',
      tipo: 'Artículo',
      link:
        'https://www.unwto.org/es/tourism-statistics/on-economic-contribution-of-tourism-tsa-2008',
    },
  ],
  glosario: [
    {
      termino: 'Dato',
      significado:
        'es una unidad de información que se puede recoger, medir o analizar. Es un hecho o detalle que puede ser utilizado para obtener conocimiento o tomar decisiones.',
    },
    {
      termino: 'Demanda turística',
      significado:
        'es la cantidad de personas que desean viajar a un destino específico en un periodo determinado, motivadas por diversos factores como atracciones turísticas, costo, accesibilidad y servicios disponibles.',
    },
    {
      termino: 'Estadística',
      significado:
        'ciencia que comprende una serie de métodos y procedimientos destinados a la recopilación, tabulación, procesamiento, análisis e interpretación de datos cuantitativos y cualitativos.',
    },
    {
      termino: 'Fuente de información',
      significado:
        'es todo aquello que proporciona datos para analizar un fenómeno y es la base para la búsqueda del conocimiento.',
    },
    {
      termino: 'Indicador',
      significado:
        'es una medida o señal que proporciona información sobre el estado o el comportamiento de un fenómeno, proceso o actividad.',
    },
    {
      termino: 'Oferta turística',
      significado:
        'es la producción de bienes y servicios turísticos que se ofrecen en venta a los visitantes o turistas.',
    },
    {
      termino: 'PIB turístico',
      significado:
        'es la parte del Producto Interno Bruto (PIB) de un país que se genera a partir de las actividades relacionadas con el turismo, como la oferta de servicios de alojamiento, transporte, actividades recreativas y otras vinculadas al sector.',
    },
    {
      termino: 'Turismo emisor',
      significado:
        'es el relacionado con los viajes de residentes fuera del territorio económico, abarca las actividades realizadas por un visitante residente fuera del país de referencia, como parte de un viaje turístico emisor o de un viaje turístico interno.',
    },
    {
      termino: 'Valor agregado turístico',
      significado:
        'es la diferencia entre la producción y el consumo intermedio de bienes y servicios turísticos de un país o territorio.',
    },
    {
      termino: 'Variable cualitativa',
      significado:
        'se refiere a las propiedades de los objetos en estudio, tiene un carácter cualitativo y no se puede medir con números, es aquella que se expresa en forma verbal o no numérica.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cabezas, Mejía, E. D., Andrade Naranjo, D. & Torres Santamaría, J. (2018). <em>Introducción a la metodología de la investigación científica</em>. Comisión editorial de la universidad de las fuerzas armadas ESPE.',
    },
    {
      referencia:
        'DANE. (2021). <em>Metodología general cuenta satélite de turismo</em> - CST. Dirección de síntesis y cuentas nacionales DANE.',
    },
    {
      referencia:
        'Hernández Sampieri, R., Fernández Collado, c. & Bapista Lucio, P. (2010). <em>Metodología de la investigación</em>. Editorial McGraw Hill.',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (2008). <em>Calcular la partida de viajes y el consumo del turismo internacional. Regional Workshop on Statistics of International Trade in Services.</em>',
    },
    {
      referencia:
        'Organización Mundial del Turismo (OMT). (2003). <em>Manual de elaboración sobre Cuenta Satélite de Turismo</em> (CST). Documento informativo OMT.',
    },
    {
      referencia:
        'Pierdant, I. & Rodríguez, J. (2006). <em>Elementos básicos de estadística para ciencias sociales</em>. Universidad Autónoma Metropolitana, Unidad Xochimilco, División de Ciencias Sociales y Humanidades.',
    },
    {
      referencia:
        'Universidad de Cundinamarca. (s.f.). <em>Documento tutorial aspectos para el diseño de una investigación de mercados</em>. CADI Investigación de Mercados.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Efraín Morales Rivera',
          cargo: 'Experto temático',
          centro:
            'Regional Distrito Capital - Centro Nacional de Hotelería, Turismo y Alimentos',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Yobani Penagos',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
