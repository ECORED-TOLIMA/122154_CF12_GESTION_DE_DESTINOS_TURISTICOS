<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p Este componente formativo, permite comprender el funcionamiento de las herramientas estadísticas, como medio de recolección y análisis de información, la cual es necesaria para conocer el comportamiento del sector turismo en los destinos. Mediante la aplicación de la estadística descriptiva, se manejan datos y variables del sector turismo, tanto de naturaleza cualitativa como cuantitativa, generando mediante un sistema de información los indicadores que aportan datos estadísticos al consolidado nacional, para divulgar los resultados importantes, principalmente de la oferta y la demanda del sector. De igual forma, el componente presenta el proceso sistemático, por medio del cual se realiza la recolección, procesamiento y análisis de información turística, que alimenta la Cuenta Satélite de Turismo (CST), como mecanismo de monitoreo y evaluación de los resultados, que contribuyen a la economía y al desarrollo de una región, territorio o destino mediante las actividades turísticas que se llevan a cabo.
    p.mb-5 Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xq99CQaPX2U?si=LEte-ut_iq9y0nOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
