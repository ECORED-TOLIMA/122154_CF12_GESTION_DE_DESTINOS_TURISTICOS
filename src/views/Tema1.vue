<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 La estadística para el turismo
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El turismo se define como todas aquellas actividades que realizan las personas durante sus viajes y estancias en lugares distintos al de su residencia habitual, por un período de tiempo consecutivo inferior a un año, con fines de ocio, negocios y otros motivos, no relacionados con el ejercicio de una actividad remunerada en el lugar visitado. Es una actividad que ha crecido significativamente durante el último cuarto de siglo como un fenómeno social y económico.
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-primario.p-4
          p.mb-0 Este sector requiere datos sobre el comportamiento del turismo con base en estadísticas de diferentes indicadores e información que permita analizar la actividad de la industria turística. En consecuencia, los gobiernos, empresarios y ciudadanos, generalmente no disponen de la información necesaria y precisa para la proyección, gestión y efectividad de las políticas públicas y el desarrollo del sector y sus negocios de manera eficiente. La información sobre el papel que el turismo juega en las economías nacionales de todo el mundo, es en la mayoría de los casos deficiente y son necesarios datos confiables relativos al comportamiento, importancia y magnitud del turismo en los destinos.
    
    p.mb-5 Anteriormente, la información del turismo se centraba en las características de los visitantes, en las condiciones en que llevaban a cabo sus viajes y estancias, el motivo de su visita, entre otros; sin embargo, actualmente existe un aumento en la conciencia sobre el papel que el turismo desempeña y puede llevar a cabo, tanto de forma directa como indirecta, sobre una economía en términos de:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            img(src='@/assets/curso/tema1/img02.svg' alt="Imagen decorativa")
        .h4.text-center.mb-0 Creación de valor agregado
      .col-md.tarjeta.color-secundario.p-4(data-aos="flip-right")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            img(src='@/assets/curso/tema1/img03.svg' alt="Imagen decorativa")
        .h4.text-center.mb-0 Empleo
      .col-md.tarjeta.color-primario.p-4(data-aos="flip-left")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            img(src='@/assets/curso/tema1/img04.svg' alt="Imagen decorativa")
        .h4.text-center.mb-0 Renta personal
      .col-md.tarjeta.color-secundario.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-3.col-6
            img(src='@/assets/curso/tema1/img05.svg' alt="Imagen decorativa")
        .h4.text-center.mb-0 Ingresos de las administraciones públicas
    
    p.mb-5 Esta creciente conciencia de los impactos económicos del turismo, ha sido reconocida durante varios años y algunos países y organizaciones internacionales, se han preocupado por el desarrollo de técnicas estadísticas relevantes para la evaluación de la incidencia del impacto económico del turismo en las regiones y territorios. De manera particular, el tipo de datos que se requiere del turismo, tanto por el sector público como por el privado, ha cambiado su naturaleza. Además de información cuantitativa sobre la cantidad de visitantes, el número de llegadas y noches de estadía, e información descriptiva sobre las condiciones en las que son recibidos y atendidos, los territorios y naciones, actualmente necesitan información consistente e indicadores que garanticen la confianza y credibilidad de las mediciones relacionadas a la importancia económica del turismo. Estas mediciones requieren cumplir con las siguientes características:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta BG01")
          div(titulo="Carácter estadístico")
            p.mb-0 Deben ser de carácter estadístico y generadas de forma regular o periódica y no solamente como estimaciones particulares, sino como procesos estadísticos permanentes y continuos, mezclando datos importantes y útiles que se convierten en indicadores objetivos y veraces acerca de los resultados.
          div(titulo="Fuentes estadísticas fiables ")
            p.mb-0 Las estimaciones deben estar basadas en fuentes estadísticas fiables, donde se analicen tanto a los visitantes como a los productores de bienes y servicios o prestadores de servicios turísticos, a través de procedimientos independientes.
          div(titulo="Datos comparables ")
            p.mb-0 Cotejan información en diferentes periodos, ya sea en un país, varios países distintos o actividades económicas diferentes.
          div(titulo="Datos consistentes y objetivos ")
            p.mb-0 Manejan información objetiva alineada con elementos de macroeconomía que se presenta a nivel mundial.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img06.png' alt="Imagen decorativa")
    
    p De esta manera, la estadística permite obtener de manera organizada, objetiva y metodológica los requerimientos de información turística con el cumplimiento de las anteriores características y necesidades, para el mejoramiento y desarrollo de los destinos turísticos tanto a nivel local, regional, nacional y mundial.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Conceptos y tipología 
    
    p.mb-5 La estadística es una ciencia relativamente nueva que tiene por objeto la recolección e interpretación de datos. La función estadística es antigua, debido a información poblacional registrada por culturas ubicadas en Babilonia y Roma.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario
          .row.justify-content-center
            .col-lg-10.order-lg-1.order-2.p-4
              p.ms-1.mb-0 En la actualidad, esta ciencia moderna puede definirse como un método que permite organizar, sintetizar, presentar, analizar, cuantificar e interpretar grandes volúmenes de datos, de tal manera que se puedan obtener conclusiones válidas sobre los fenómenos en estudio.
            .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img07.svg' alt="Imagen decorativa")
    
    p.mb-5 Las definiciones anteriores, proporcionan una idea general de lo que realiza la estadística, como rama de las matemáticas aplicadas, presentando este conjunto de técnicas una aplicación en las más diversas disciplinas como el turismo. Sin embargo, su aplicación dependerá del conocimiento adecuado que sobre esta herramienta estadística tenga el investigador o usuario que requiere aplicarla. De esta manera, se requiere conocer las razones por las cuales se estudian estas técnicas, dentro de las cuales se tienen principalmente las siguientes:

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .tarjeta.BG02
          .row.justify-content-center
            .col-lg-3.col-6
              img(src='@/assets/curso/tema1/img08.svg' alt="Imagen decorativa")
            .col-lg-9.p-4
              ol.lista-ol--cuadro.mb-0
                li 
                  .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: bold;")
                    span 1
                  | La estadística proporciona los elementos básicos para fundamentar una investigación.
                li 
                  .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: bold;")
                    span 2
                  | Permite planear la obtención de los datos, para que de ellos se puedan extraer conclusiones confiables.
                li 
                  .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: bold;")
                    span 3
                  | Facilita y permite analizar datos.
                li 
                  .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: bold;")
                    span 4
                  | Establece el tipo de conclusiones que pueden obtenerse con los datos disponibles.
                li 
                  .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: bold;")
                    span 5
                  | Determina el nivel de confianza que requieren los datos.

    p.mb-5 Este concepto ha permitido a los especialistas en estadística, clasificar a esta materia en dos grandes tipos, definidos de la siguiente manera: 

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FFE9DF; border-radius: 15px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Estadística descriptiva

    .row.justify-content-center.mb-5
      .col-lg-10 
        p.mb-0 Es aquella ramificación de la estadística que trata del resumen y la descripción de los datos. Este resumen puede ser tabular, gráfico o numérico. Este tipo de estadística se lleva a cabo con información muestral y por ende, no es generalizable para toda la población estudiada.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FFE9DF; border-radius: 15px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Estadística inferencial
    
    .row.justify-content-center.mb-4
      .col-lg-7.order-lg-1.order-2.mb-5(data-aos="fade-right")
        p En este tipo de estadística generaliza resultados obtenidos para toda una población con la información recogida, aplicando un muestreo. Esta estadística está fundamentada en el muestreo que se aplica únicamente a una proporción de todo el objeto de estudio en su totalidad. La estadística inferencial es susceptible de errores, cuando el muestreo no representa sujetos u objetos de análisis homogéneos, sino con características diferentes por su gran tamaño.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 La estadística en sus dos tipologías (descriptiva y explicativa), se puede aplicar en diferentes e indistintas áreas del conocimiento. 
        p.mb-0 Otros conceptos importantes para comprender la estadística aplicada al turismo son los siguientes:
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img09.svg' alt="Imagen decorativa")
      .col-lg-10.order-3.d-lg-flex.d-none
        ImagenInfografica.color-acento-boton
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img10.svg', alt="Imagen decorativa")
          .tarjeta.tarjeta--blanca.p-3(x="14%" y="35%" numero="+")
            p.mb-0 Es la totalidad de los sujetos u objetos de estudio con aspectos similares. Por ejemplo, al estudiar el tipo de turistas que visita un atractivo, todos los visitantes que lleguen al atractivo turístico constituyen una población.
          .tarjeta.tarjeta--blanca.p-3(x="85%" y="35%" numero="+")
            p.mb-0 Es una parte o proporción de la población que resulta de un cálculo estadístico del muestreo. La muestra permite la inferencia posterior de los resultados obtenidos.
          .tarjeta.tarjeta--blanca.p-3(x="85%" y="79%" numero="+")
            p.mb-0 Es una medida en estadística para cuantificar alguna variable a investigar en una población. Un parámetro se puede validar cuando los datos se originan en una población objeto de estudio.
      .col-12.d-lg-none.d-flex
        img(src='@/assets/curso/tema1/img11.svg' alt="Imagen decorativa")

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Los datos y su clasificación
    
    .row.justify-content-center.mb-5
      .col-lg-10.order-1.mb-5(data-aos="fade-right")
        p.mb-0 Con la finalidad de comprender el manejo de los datos estadísticos, es necesario conceptualizar su significado y tipología o clasificación principal que se presenta a continuación:
      .col-lg-6.order-lg-2.order-3.mb-4(data-aos="fade-right")
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Un dato es una cifra obtenida mediante la aplicación de alguna técnica de recolección como resultado de contar o medir una variable de estudio; por ejemplo, número de turistas que visitan un destino, tiempo o duración de la estadía, servicios turísticos que se ofrecen en el destino, entre muchos otros aspectos.
        p También se define como una información relacionada con un fenómeno recolectada y procesada por el investigador y que constituye alguna característica que se conoce directamente.
        p.mb-0 Los datos se clasifican, de acuerdo con las siguientes principales tipologías:  
      .col-lg-4.col-8.order-lg-3.order-2.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img12.png' alt="Imagen decorativa")
      .col-lg-10.order-lg-4(data-aos="fade-right")
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.BGIMG01.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/tema1/img13.svg' alt="Imagen decorativa")
            h2.text-center Cualitativo
            p.mb-0 Es aquel que representa alguna característica de los elementos de una muestra o una población y que significa atributos, actitudes y opiniones y son datos no numéricos (se relaciona con una variable cualitativa).
          .tarjeta.BGIMG01.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/tema1/img14.svg' alt="Imagen decorativa")
            h2.text-center Cuantitativo
            p.mb-0 Es aquel dato numérico que representa aspectos de una muestra o una población que son medibles o que se pueden contar (se relaciona con una variable cuantitativa).
          .tarjeta.BGIMG01.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/tema1/img15.svg' alt="Imagen decorativa")
            h2.text-center Directos
            p.mb-0 Datos sobre un tema de investigación que se consiguen mediante respuestas a preguntas o por medio de la observación directamente realizada en el fenómeno de estudio.
          .tarjeta.BGIMG01.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/tema1/img16.svg' alt="Imagen decorativa")
            h2.text-center Primarios
            p.mb-0 Información reunida por el investigador directamente de la fuente.
          .tarjeta.BGIMG01.p-4
            .row.justify-content-center.mb-4
              .col-8
                img(src='@/assets/curso/tema1/img17.svg' alt="Imagen decorativa")
            h2.text-center Secundarios
            p.mb-0 Datos que no han sido reunidos para el estudio o investigación relacionada, sino con algún propósito o finalidad distinta y anterior.

    p.mb-5 Los datos que se manejan, se recolectan, analizan y son solicitados en el turismo, se agrupan en las siguientes áreas o variables principales:  

    TabsA.color-acento-botones.mb-4(data-aos="fade-right")
      .tarjeta.BG03.p-4(titulo="Demanda")
        p.mb-0 Datos acerca de la demanda originada por la actividad turística, ordenada de acuerdo con características de los visitantes, de sus recorridos y de los servicios turísticos que adquieren.
      .tarjeta.BG03.p-4(titulo="Oferta")
        p.mb-0 Impactos de la oferta sobre las variables macroeconómicas básicas del país de referencia, en particular las funciones de producción y la interrelación entre actividades, las cuales proporcionan la base para el análisis del impacto.
      .tarjeta.BG03.p-4(titulo="Empleo")
        p.mb-0 Descripción de la naturaleza del empleo y de los puestos de trabajo, de la formación de capital y de la inversión no financiera.
      .tarjeta.BG03.p-4(titulo="Importaciones y exportaciones")
        p.mb-0 Las importaciones, las exportaciones y las repercusiones sobre la balanza de pagos.
      .tarjeta.BG03.p-4(titulo="Ingresos")
        p.mb-0 Los efectos sobre los ingresos de las administraciones públicas, la creación de rentas personales y de las empresas.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Tipos de variables estadísticas
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img19.jpg')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Para obtener estadísticas, se manejan conjuntos o grupos de estudio que contienen una cantidad de información (cantidad de personas, objetos, etc.). Estas unidades de estudio presentan algunas características, por ejemplo, para un turista mexicano se podría señalar su género, edad, ocupación, lugar de procedencia, clase social, nivel educativo, estado civil, etc., siendo dichas características las que presentan resultados de acuerdo con el objeto de estudio, las cuales se pueden medir y se denominan variables. De esta forma, el estudio de los turistas que visitan una población necesita del uso de variables como cualquiera de las anteriormente mencionadas. Por consiguiente, la variable se construye por parte del investigador con el fin de analizar un objeto o fenómeno de estudio.

    p.mb-5 De manera sencilla, una variable se define como el elemento o atributo medible asociado a un objeto de estudio. También se hace relación a las variables como características que poseen diferentes valoraciones. Es un símbolo o una representación, por lo tanto, una abstracción que adquiere un valor no constante o que puede variar. Por lo anterior, por una variable se entiende cualquier característica o cualidad de la realidad estudiada que es susceptible de cambio o que puede asumir diferentes valores.

    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img20.png' alt="Imagen decorativa")
      .col-lg-5(data-aos="fade-left")
        p Cuando se hace referencia a una variable como una característica o una cualidad, en el caso de algo relacionado con un turista, este no puede ser en sí una variable, pero si se habla de la procedencia del turista, sí se está efectivamente en presencia de una variable, pues el turista puede ser originario o tener procedencia de Estados Unidos, Italia, Brasil o de cualquier otro lugar. Es decir, que esa cualidad del turista (lugar de procedencia), puede asumir diferentes valores y por lo tanto ser una variable. Una variable es aplicable a individuos, objetos o a un fenómeno en particular, los cuales adquieren diversos resultados.
        .cajon.color-secundario.p-4
          p.mb-0 Entonces se puede decir que una variable es aquello que está sujeto a un cambio con respecto a distintos factores de cambio. De la misma manera, la variable experimenta cambios, se puede analizar, medir, manipular y controlar dentro de la tarea investigativa y de recolección de datos.

    .mb-4.d-flex(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: #FFE9DF; border-radius: 15px;")
        img(src='@/assets/curso/temas/img01.svg' style="max-width: 32px; margin-left: -16px;")
        h3.col.ps-3.mb-0 Clasificación de las variables estadísticas
    
    p.mb-5 Teniendo en cuenta su naturaleza y en relación con los tipos de datos, se pueden clasificar las variables como cualitativas y cuantitativas, así: 

    TabsC.color-acento-botones.mb-4(data-aos="zoom-out")
      .BG02.py-md-5.p-4(titulo="Variables cualitativas")
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img21.jpg' alt="Imagen decorativa")
          .col-lg-6
            p.mb-0 Como su nombre lo indica, miden cualidades y atributos; por ejemplo, ocupación, nacionalidad, estado civil, preferencias, gustos, entre muchas otras y dependiendo del objeto de estudio. También llamadas categóricas, se refieren a las propiedades de los objetos en estudio. Este tipo de variables tiene un carácter cualitativo y no se pueden medir con números; son aquellas que se expresan en forma verbal y escrita, teniendo los diversos atributos.
      .BG02.py-md-5.p-4(titulo="Variables cuantitativas")
        .row.justify-content-center
          .col-lg-6.col-10.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img22.jpg' alt="Imagen decorativa")
          .col-lg-6
            p.mb-0 Las variables cuantitativas son aquellas que pueden ser medidas y se expresan en forma numérica; por ejemplo, la edad, el nivel de ingreso, la cantidad de noches de estadía, el tamaño de la familia, entre muchas otras. Miden cantidades y magnitudes. De acuerdo con los valores que puedan asumir, se distingue entre continuas (dan la posibilidad de fraccionar y pueden tomar cualquier valor dentro de un rango) y discretas (solo asumen valores enteros).

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
