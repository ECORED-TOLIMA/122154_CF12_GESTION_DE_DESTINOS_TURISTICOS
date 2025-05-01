<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Indicadores del sector turístico
    
    p.mb-5 Un indicador es un indicio, señal o unidad de medida que permite estudiar o cuantificar una variable o sus diferentes dimensiones. Esta unidad de medida se refiere a estándares utilizados para medir el avance y logros de una investigación determinando que, a través del estudio de los indicadores, se establecen las dimensiones de cada variable de manera detallada y pertinente; es decir, es un acercamiento al fenómeno de estudio planteando. 
    
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema2/img01.png' alt="Imagen decorativa")
    
    p Algunos ejemplos generales de indicadores económicos son la tasa de desempleo, la inflación y el Producto Interno Bruto PIB. Como se ha mencionado anteriormente, las variables son la base para el reconocimiento de los indicadores y posteriormente de las dimensiones de dichas variables y un indicador representa el soporte de lo que se quiere conocer del fenómeno de estudio y que servirá para la verificación de la investigación con bases teóricas. Otro concepto de indicador lo define como un referente empírico directo, observable y medible, cuya función es simbolizar y sustituir al concepto o variable no observable por algo que se pueda medir directamente.
    p.mb-5 En términos generales, un indicador es válido cuando mide lo que dice medir. Existen dos tipos de validez de un indicador:

    .row.justify-content-center.mb-5
      .col-xl-5.col-lg-6.col-sm-8.col-10.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/img02.jpg' alt="Imagen decorativa")
          .tarjetas-up_card.BG01.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Interna
            p.text-center.mb-0 Existe validez interna cuando hay una adecuada conceptualización y operacionalización de la variable y por ende, existe correspondencia entre ambas.
      .col-xl-5.col-lg-6.col-sm-8.col-10.mb-4(data-aos="flip-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema2/img03.jpg' alt="Imagen decorativa")
          .tarjetas-up_card.BG01.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.justify-content-center.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Externa
            p.text-center.mb-0 Se refiere básicamente a la confianza o veracidad de la fuente de información que se va a utilizar. Presenta en algunos casos la aplicación de herramientas poco operativas, tales como cotejar elementos subjetivos o enviar a otro a que realice las mismas indagaciones.

    p A continuación, se presentan los tipos de indicadores del sector turismo y el sistema de información que los debe alimentar.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Tipos de indicadores según variables
    
    p Es importante establecer con claridad que, para la aplicación de los aspectos estadísticos anteriormente conceptualizados, el fenómeno a estudiar y del cual se recopila información, es el turismo; dentro de este gran fenómeno los objetos de observación y análisis son el turista o visitante, los prestadores de servicios turísticos, la economía generada por el turismo, la balanza de pagos y las entidades o administraciones públicas.
    p.mb-5 Cada uno de los cuatro (4) anteriores objetos de estudio o categorías, contienen una o algunas variables que son las siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Categoría turista o visitante") La variable es la demanda o consumo turístico.
          p.text-small(numero="2" titulo="Categoría prestadores de servicios turísticos") La variable es la oferta o bienes y servicios que se ofrecen a los visitantes.
          p.text-small(numero="3" titulo="Categoría economía generada por el turismo") Las variables son empleo, puestos de trabajo, PIB turístico, formación de capital e inversión no financiera.
          p.text-small(numero="4" titulo="Categoría balanza de pagos") Las variables son importaciones y exportaciones de viajes y transporte.
          p.text-small(numero="5" titulo="Categoría administraciones públicas") La variable es gastos de la administración pública en actividades o campos relacionados con el turismo.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img04.png' alt="Imagen decorativa")

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FFE9DF; border-radius: 15px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Variable demanda o consumo turístico
    
    p Es el monto pagado para la adquisición de bienes y servicios de consumo, así como de bienes valiosos para consumo propio o para regalar durante y para viajes turísticos, que corresponde a transacciones monetarias (el alcance del gasto turístico). Contempla transferencias sociales en especie que benefician a los turistas, el desarrollo de los servicios de alojamiento en casas de vacaciones que pertenecen a sus propietarios, etc. (Conceptos estandarizados DANE).
    p.mb-5 Dentro de esta categoría, se incluyen los siguientes indicadores relacionados con la demanda turística:

    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.BG04.h-100.p-4
          ul.lista-ul--color.mb-0
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Valor agregado turístico.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Total, gasto turístico receptor.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Total, gasto turístico interno.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Total, gasto turístico emisor.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Gasto interno en excursionismo.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Promedio de noches pernoctadas por tipo de turismo.
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta.BG04.h-100.p-4
          ul.lista-ul--color.mb-0
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Flujo de viajeros por turismo receptor.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Flujo de viajeros por turismo interno.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Flujo de viajeros por turismo emisor.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Flujo de viajes de excursionismo.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Motivo de la visita.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Clasificación del visitante.
      
    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FFE9DF; border-radius: 15px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Variable oferta turística o producción de bienes y servicios
    
    p.mb-5 En esta variable se registra la producción de las industrias turísticas y las otras industrias que generan productos característicos del turismo, productos conexos al turismo y otros productos, permitiendo calcular su participación del consumo turístico. Se centra en la oferta de bienes y servicios a los visitantes, definiendo las actividades productivas y los productos que constituirán el núcleo del análisis, y las variables económicas relevantes asociadas con la oferta.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4
          p.mb-0 El análisis del turismo desde un punto de vista de la oferta, se centra en las unidades de producción que son características del turismo que no conforma una rama de actividad única; sino que es un conjunto que incluye un número de actividades que realizan los prestadores de servicios turísticos, como los establecimientos que atienden turistas, cuya tarea fundamental consiste en una actividad productiva característica del turismo.

    p Dentro de esta categoría, se incluyen los siguientes indicadores relacionados con la oferta turística:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        .tarjeta.BG04.p-4
          ul.lista-ul--color.mb-0
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Producción de servicios de alojamiento para visitantes.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Producción de servicios de provisión de alimentos y bebidas.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Producción de servicios de transporte de pasajeros por ferrocarril.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Producción de servicios de transporte de pasajeros por carretera.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Producción de servicios de transporte de pasajeros por agua.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Producción de servicios de transporte aéreo de pasajeros.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Producción de servicios de alquiler de equipos de transporte.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Producción de agencias de viajes y otros servicios de reserva.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Producción de servicios culturales deportivos y recreativos.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Producción de bienes de consumo (bienes adquiridos por los visitantes en el trascurso de sus viajes para uso propio o para regalo).
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle.tcvo
              | Producción de otros servicios (servicios asociados al turismo no clasificados previamente).
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img05.png' alt="Imagen decorativa")
      
    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FFE9DF; border-radius: 15px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Variable económica del turismo
    
    p Permite dimensionar la contribución del turismo en la economía nacional, identificando los bienes y servicios turísticos y las actividades que los generan, así como su relación con las demás actividades económicas.
    p.mb-5 Dentro de esta categoría, se incluyen los siguientes indicadores relacionados con la economía del turismo:

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
            img(src='@/assets/curso/tema2/img06.svg' alt="Imagen decorativa")
            .tarjeta.BG03.w-100.h-100.p-4
              .h5.text-center.mt-5.mb-0 Empleo turístico
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta-avatar
            img(src='@/assets/curso/tema2/img07.svg' alt="Imagen decorativa")
            .tarjeta.BG03.w-100.h-100.p-4
              .h5.text-center.mt-5.mb-0 Producto interno bruto turístico
      .col-lg-4.col-sm-6.col-10.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
            img(src='@/assets/curso/tema2/img08.svg' alt="Imagen decorativa")
            .tarjeta.BG03.w-100.h-100.p-4
              .h5.text-center.mt-4 Puestos de trabajo a tiempo completo por tipo de actividad o servicio turístico 
              p.text-center.mb-0 (alojamiento, restaurantes, transporte, agencias de viajes, esparcimiento y otros).

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FFE9DF; border-radius: 15px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Variable balanza de pagos
    
    p Contiene información sobre las importaciones y exportaciones de viajes y transporte aéreo de pasajeros que permite conocer el valor de la balanza de turismo.
    p.mb-5 Dentro de esta categoría, se incluyen los siguientes indicadores relacionados con la balanza de pagos del turismo:

    .tarjeta--container.row.justify-content-center.mb-5
      .col-md-4.tarjeta.color-primario.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            img(src='@/assets/curso/tema2/img09.svg' alt="Imagen decorativa")
        .h4.text-center.mb-0 Total importaciones turismo
      .col-md-4.tarjeta.color-secundario.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            img(src='@/assets/curso/tema2/img10.svg' alt="Imagen decorativa")
        .h4.text-center.mb-0 Total exportaciones turismo

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FFE9DF; border-radius: 15px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Variable administraciones públicas o consumo colectivo turístico
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 Mediante esta variable, es importante medir la cuantía de los gastos de las administraciones públicas en los campos relacionados con el turismo, como promoción, información, planificación, etc. y que no tenga cabida en la medición del agregado relativo a la importancia económica. del turismo. El sector público juega un papel importante en muchos países en el desarrollo armonioso de las actividades del turismo. Establece el marco legal que regula la actividad del turismo, realiza ciertos controles sobre la producción de servicios y, en algunos casos, garantiza la calidad del servicio que se facilita al turista o visitante, establece el marco legal para la inversión privada y dicta normas para la conservación del medio ambiente y del patrimonio histórico y cultural. La administración pública estudia los flujos de visitantes y propone ciertas iniciativas de carácter público para atraer el flujo de visitantes a ciertas localidades o destinos y en determinadas temporadas; organiza importantes eventos y coordina las iniciativas privadas encaminadas a atender a los visitantes, también controla la financiación de las inversiones requeridas para el turismo.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img11.png' alt="Imagen decorativa")
    
    p.mb-5 Dentro de esta categoría, se incluye el siguiente indicador relacionados con el consumo colectivo turístico o de las administraciones públicas:

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .cajon.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4
              img(src='@/assets/curso/tema2/img12.svg' alt="Imagen decorativa")
            .col-lg-10
              p.ms-1.mb-0 Gasto de las administraciones públicas en apoyo al turismo.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Sistema de Información Turística (SITUR)

    p.mb-5 El Ministerio de Comercio, Industria y Comercio de Colombia, implementa un Centro de Información Turística denominado CITUR, con la finalidad de generar informes de turismo con periodicidad mensual, por parte de los entes territoriales como municipios, ciudades o destinos turísticos nacionales.

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img13.svg' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        p El sistema de información, recolecta datos acerca del comportamiento del sector turismo en el orden nacional y presenta el movimiento de visitantes según su caracterización como extranjeros, colombianos residentes en el exterior, llegadas de cruceros y salida de colombianos, el tráfico aéreo nacional e internacional, turismo interno, visitas a parques nacionales naturales, la ocupación hotelera y datos del sector a nivel macro, incluyendo además la CST, el valor agregado de alojamiento y servicios de comida, así como la balanza de pagos por exportaciones de viajes, teniendo una periodicidad mensual del informe.
        p De manera integrada, el sistema busca consolidar las estadísticas de turismo de Colombia, para realizar un seguimiento del comportamiento turístico, mediante datos para formular, evaluar y coordinar las políticas encaminadas al crecimiento del sector utilizando las tecnologías de la información.
        p.mb-0 Los destinos turísticos están en la obligación de implementar el SITUR con la finalidad de recolectar, consolidar y presentar las estadísticas del turismo en su territorio, mediante herramientas de tecnología como #[em software] de captura de datos, observatorios de turismo y páginas web, que contengan los resultados de las mediciones y la divulgación de las estadísticas del turismo en el destino.
    
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .cajon.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4
              img(src='@/assets/curso/tema2/img14.svg' alt="Imagen decorativa")
            .col-lg-10
              p.ms-1.mb-0 Este sistema de información aporta y alimenta los datos para la cuenta satélite de turismo.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
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
