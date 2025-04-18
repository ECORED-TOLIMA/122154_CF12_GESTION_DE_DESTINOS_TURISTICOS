<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Sistema Estadístico Nacional (SEN)

    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema3/img01.png' alt="Imagen decorativa")
    
    p El SEN integra la producción y difusión de las estadísticas oficiales a nivel nacional y regional que necesita el país. Está compuesto por entidades, usuarios, procesos y herramientas técnicas mediante los cuales coordina políticas, principios, fuentes de información, infraestructura tecnológica y talento humano.
    p.mb-5 Los objetivos del SEN son los siguientes:

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img02.png' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        .tarjeta.BG02.p-4
          ol.lista-ol--cuadro.mb-0
            li 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: bold;")
                span 1
              | Entregar al Estado datos estadísticos oficiales del orden nacional y territorial con la calidad requerida.
            li 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: bold;")
                span 2
              | Promover la utilización de estadísticas oficiales para la construcción de políticas públicas.
            li 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: bold;")
                span 3
              | Promover el uso de las estadísticas oficiales, así como de la información relacionada.
            li 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: bold;")
                span 4
              | Fomentar el fortalecimiento y provecho de los registros, como también el intercambio de información entre sus integrantes, como insumo para producir estadísticas oficiales y poder mejorar la calidad y veracidad de las cifras.
            li 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: bold;")
                span 5
              | Conservar series de datos estadísticos oficiales y bases de datos relacionadas.
            li 
              .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: bold;")
                span 6
              | Propender por la construcción de metodologías y herramientas para intercambiar información que aporte a la generación de datos oficiales y al fortalecimiento de la calidad y coherencia de estos.

    p.mb-5 El SEN se rige bajo los siguientes principios:

    .BGIMG02.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center.align-items-center(titulo="Calidad")
          .col-lg-2.col-4.mb-lg-0.mb-4
            img.w-75(src='@/assets/curso/tema3/img03.svg' alt="Imagen decorativa")
          .col-lg-8
            p.mb-0 Brindar información del sistema precisa y rigurosa, para garantizar una toma de decisiones adecuada.
        .row.justify-content-center.align-items-center(titulo="Coherencia")
          .col-lg-2.col-4.mb-lg-0.mb-4
            img.w-75(src='@/assets/curso/tema3/img04.svg' alt="Imagen decorativa")
          .col-lg-8
            p.mb-0 Fomentar que la información estadística generada sea acorde con la información suministrada por sus integrantes.
        .row.justify-content-center.align-items-center(titulo="Coordinación")
          .col-lg-2.col-4.mb-lg-0.mb-4
            img.w-75(src='@/assets/curso/tema3/img05.svg' alt="Imagen decorativa")
          .col-lg-8
            p.mb-0 Actuar de manera participativa y coordinada para que los lineamientos y actuaciones del sistema sean los adecuados.
        .row.justify-content-center.align-items-center(titulo="Eficiencia")
          .col-lg-2.col-4.mb-lg-0.mb-4
            img.w-75(src='@/assets/curso/tema3/img06.svg' alt="Imagen decorativa")
          .col-lg-8
            p.mb-0 Realizar una planeación y gestión adecuada de los diferentes recursos necesarios para la producción y entrega de las estadísticas oficiales. 
        .row.justify-content-center.align-items-center(titulo="Oportunidad")
          .col-lg-2.col-4.mb-lg-0.mb-4
            img.w-75(src='@/assets/curso/tema3/img07.svg' alt="Imagen decorativa")
          .col-lg-8
            p.mb-0 Propender por el cumplimiento de los tiempos y plazos para publicar estadísticas oficiales, respondiendo de forma efectiva a las necesidades de información de los diferentes usuarios.
        .row.justify-content-center.align-items-center(titulo="Pertinencia")
          .col-lg-2.col-4.mb-lg-0.mb-4
            img.w-75(src='@/assets/curso/tema3/img08.svg' alt="Imagen decorativa")
          .col-lg-8
            p.mb-0 Velar por el cumplimiento de las necesidades sociales que contribuyan al mejoramiento de las políticas públicas relacionadas.
        .row.justify-content-center.align-items-center(titulo="Transparencia")
          .col-lg-2.col-4.mb-lg-0.mb-4
            img.w-75(src='@/assets/curso/tema3/img09.svg' alt="Imagen decorativa")
          .col-lg-8
            p.mb-0 Disponer públicamente la información estadística y los mecanismos, por medio de los cuales se produce, con los resultados, datos y caracterización, cumpliendo con la ley en materia de protección de datos personales.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Normatividad aplicada
    
    p.mb-5 El Sistema Estadístico Nacional (SEN), se rige por la siguiente normatividad relacionada:

    LineaTiempoE.color-acento-contenido(data-aos="zoom-out")
      .row.justify-content-center(titulo="01")
        .col-lg-2.col-4.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img10.svg' alt="Imagen decorativa")
        .col-lg-10
          .h4 Ley 79 de 1993
          p.mb-0 Por la cual se regula la realización de los censos de población y vivienda en todo el territorio nacional.
      .row.justify-content-center(titulo="02")
        .col-lg-2.col-4.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img11.svg' alt="Imagen decorativa")
        .col-lg-10
          .h4 Decreto 262 de 2004
          p.mb-0 Por el cual se modifica la estructura del Departamento Administrativo Nacional de Estadística DANE y se dictan otras disposiciones.
      .row.justify-content-center(titulo="03")
        .col-lg-2.col-4.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img12.svg' alt="Imagen decorativa")
        .col-lg-10
          .h4 Ley 1753 de 2015
          p.mb-0 Por la cual se expide el Plan Nacional de Desarrollo 2014-2018 “Todos por un nuevo país”.
      .row.justify-content-center(titulo="04")
        .col-lg-2.col-4.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img13.svg' alt="Imagen decorativa")
        .col-lg-10
          .h4 Decreto 1746 de 2016
          p.mb-0 Por el cual se reglamenta el artículo 160 de la ley 1753 de 2015 y se adiciona el título 3 a la parte 2 del libro 2 del Decreto 1170 de 2015 Único del Sector Administrativo de Información Estadística.
      .row.justify-content-center(titulo="05")
        .col-lg-2.col-4.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img14.svg' alt="Imagen decorativa")
        .col-lg-10
          .h4 Decreto 2404 de 2019
          p.mb-0 Por el cual se reglamenta el artículo 155 de la ley 1955 de 2019 y se modifica el título 3 a la parte 2 del libro 2 del Decreto 1170 de 2015 Único del Sector Administrativo de Información Estadística.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Estructura organizativa del sistema
    
    p.mb-5 De acuerdo con lo establecido, el SEN está integrado por todas las entidades que producen estadísticas o que poseen registros que pueden ser utilizados para la producción de información estadística, las cuales son:

    .row.justify-content-center.mb-4
      .col-lg-10.order-1.mb-4(data-aos="fade-right")
        .BG04.p-4
          ul.lista-ul--color.mb-0
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Entidades del poder público, en los niveles central o descentralizada del orden nacional, departamental, municipal y distrital.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Los organismos estatales de control independientes o autónomos.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Las personas jurídicas, públicas o privadas, que presten servicios públicos.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Cualquier persona jurídica que se encarguen de una función pública o representen una autoridad pública.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Personas jurídicas que manejen registros o datos dentro de sus actividades y que representen un insumo para la producción de estadísticas oficiales.
      .col-lg-6.order-lg-2.order-3(data-aos="fade-right")
        .cajon.color-secundario.py-lg-5.p-4
          p.mb-0 El ente rector es el Departamento Administrativo Nacional de Estadística (DANE) quien coordina y regula el Sistema.
      .col-lg-4.col-8.order-lg-3.order-2.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img15.png' alt="Imagen decorativa")

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Información estadística del sector turismo
    
    p.mb-5 Se entiende el turismo como un fenómeno cuya presentación estadística conlleva desafíos particulares debido a su naturaleza, por lo que se hace necesario precisar algunos conceptos fundamentales, tales como viaje, viajero, visitante y entorno habitual, entre otros. De acuerdo con el glosario empleado por la ONU, en el documento Recomendaciones internacionales para estadísticas de turismo, el término viaje representa las actividades de las personas que viajan o viajeros. Un viajero es la persona que se desplaza entre dos sitios geográficos diferentes, por cualquier motivo y tiempo de duración.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        .cajon.color-secundario.p-4
          p.mb-0 El término viaje turístico, es entendido como los viajes realizados por los turistas, haciendo alusión a todo desplazamiento considerado como turismo de una persona, desde el momento de su salida hasta su regreso. Por lo tanto, un desplazamiento turístico considerado como emisor, es aquel que tiene como destino principal un lugar fuera del país y corresponde al viaje realizado entre el momento en que el viajero deja su lugar de residencia habitual y el momento en que regresa al mismo. Con excepción a esta regla y por su particular importancia para el país receptor, un desplazamiento turístico considerado como receptor corresponde al efectuado por una persona que no es residente en el país de referencia, desde el momento de su llegada hasta el momento de su partida, esto porque desde la óptica del país receptor, lo que ha ocurrido antes de la llegada no es de su interés.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img16.png' alt="Imagen decorativa")

    p.mb-5 El turismo hace referencia a la actividad de los visitantes. Según las Naciones Unidas (2008), un visitante se puede definir de la siguiente manera:

    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img17.svg' alt="Imagen decorativa")
      .col-lg-7(data-aos="fade-left")
        .bloque-texto-d.color-acento-contenido.p-4.mb-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.mb-0 Persona que viaja a un destino principal, fuera de su entorno habitual, con una duración inferior a un año, con cualquier finalidad principal (ocio, negocios, tratamiento de salud, visitas a familiares u otro motivo personal) que no sea empleado por una entidad residente en el país visitado.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 - Naciones Unidas (2008)
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Estos viajes realizados por los visitantes se consideran viajes turísticos.
        p.mb-0 Por su parte, el territorio económico hace referencia al país para el que se efectúa una medición. El concepto de residencia permite la clasificación de los visitantes de conformidad con su lugar de origen y de destino, haciendo posible identificar el turismo internacional como las actividades de los visitantes por fuera de su país de residencia.

    p El entorno cotidiano de una persona, consiste en una zona geográfica en la cual realiza sus actividades rutinarias. Finalmente, el turismo internacional representa las actividades de un visitante fuera del país de residencia, como parte de un viaje turístico internacional.
    p.mb-5 La información estadística turística de Colombia consolida y actualiza, permite encontrar la información del sector turismo de manera detallada y confiable. Se recolecta en función de las necesidades de información que presentan los usuarios, tales como entidades del gobierno, prestadores de servicios turísticos, la academia y de los turistas. Las necesidades fueron detectadas a partir de ejercicios de socialización y diseño con participación ciudadana.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img18.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La información turística responde a los lineamientos y orientaciones para el tratamiento de datos realizadas por la OMT, el Banco Mundial y el DANE y se ajusta a los lineamientos del SEN, según el Decreto 2404 de 2019. De igual manera, en el proceso de implementación se cuenta con el acompañamiento de lineamientos técnicos y metodológicos de instituciones como el Ministerio de las TIC y el DANE.

    p.mb-5 Las estadísticas del turismo cuentan con la integración de la información primaria obtenida por:

    .tarjeta--container.row.justify-content-center.mb-5
      .col-md.tarjeta.color-primario.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            img(src='@/assets/curso/tema3/img19.svg' alt="Imagen decorativa")
        .h4.text-center Fuentes secundarias externas
        p.mb-0 DANE, Banco de la República, Migración Colombia, Policía Nacional, entre otras.
      .col-md.tarjeta.color-secundario.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            img(src='@/assets/curso/tema3/img20.svg' alt="Imagen decorativa")
        .h4.text-center Fuentes primarias internas
        p.mb-0 Registro Nacional de Turismo, Colegios Amigos del Turismo y la Certificación de bioseguridad Check in.

    .row.justify-content-center.mb-4
      .col-lg-10
        p Mediante esta información se pueden consultar los indicadores del sector como visitantes no residentes, flujo aéreo, balanza de pagos, tasa de ocupación y otros adicionales. La información facilita la toma de decisiones de todos los actores de la cadena turística, obteniendo información disponible en diferentes niveles de especificación, facilitando su análisis y accesibilidad.
        p.mb-0 A su vez, el Ministerio de Comercio, Industria y Turismo, realiza un proceso de digitalización de la información turística del país, el cual tiene dentro de sus objetivos principales, la integración de herramientas tecnológicas e investigativas de punta para responder a las necesidades del sector.

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
