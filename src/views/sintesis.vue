<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") La estadística para el turismo es una herramienta esencial para analizar datos del sector, clasificados en variables cualitativas y cuantitativas, lo que permite la evaluación de indicadores clave del turismo, como la cantidad de turistas y su gasto. El Sistema de Información Turística (SITUR) organiza estos datos para facilitar su análisis. A nivel nacional, el Sistema Estadístico Nacional (SEN) recopila y distribuye estadísticas oficiales bajo una normatividad específica, asegurando la calidad y utilidad de la información del sector. El proceso de recolección y análisis de datos abarca diversas fuentes de información y técnicas, como encuestas y entrevistas, que permiten obtener datos precisos para la toma de decisiones. Finalmente, la Cuenta Satélite de Turismo (CST) proporciona un análisis detallado del impacto económico del turismo, midiendo su contribución al Producto Interno Bruto (PIB) y otros indicadores clave de la economía nacional.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo Análisis de datos estadísticos para el turismo, se abordan los conceptos claves de la ciencia estadística aplicada al sector turismo, los tipos de estadística y variables para analizar el comportamiento turístico, los indicadores del sector que se alimentan mediante un Sistema de Información Turística (SITUR), el funcionamiento del sistema estadístico nacional, el proceso de recolección y análisis de datos del sector turismo y los conceptos y elementos básicos de la Cuenta Satélite de Turismo (CST) como mecanismo utilizado para la consolidación y divulgación de información turística, la cual sirve para la toma de decisiones relacionadas con el mejoramiento y desarrollo del sector.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
