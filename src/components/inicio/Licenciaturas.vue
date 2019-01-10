<template lang="pug">
div.has-text-centered
  p.title LICENCIATURAS
  .columns.is-multiline
    .column.is-one-third(v-for='carrera in carreras')
      .card.notification.is-primary
        .card-content.has-text-centered
          p.title {{ carrera.nombre }}
          p {{ carrera.descripcion }}
</template>

<script>
export default {
  data: function () {
    return {
      carreras: [
        {
          nombre: 'Matemáticas',
          descripcion: 'Formar profesionales de las Matemáticas, con capacidad para integrar conocimientos y colaborar en la solución de los diversos problemas específicos, fomentando el desarrollo de la comunidad, en los aspectos de docencia e investigación básica y aplicada.',
          img: 'http://www.fcfm.uanl.mx/sites/default/files/styles/imagen_carrera/public/LM_0.jpg'
        },
        {
          nombre: 'Física',
          descripcion: 'Formar profesionales con una preparación general en el área de las ciencias físicas, que les permita participar en el desarrollo científico, tecnológico, docencia e investigación para la sociedad.',
          img: 'http://www.fcfm.uanl.mx/sites/default/files/styles/imagen_carrera/public/LF.jpg'
        },
        {
          nombre: 'Actuaría',
          descripcion: 'Formar Licenciados en Actuaría apegados a los lineamientos educativos internacionales del gremio actuarial en base a los Modelos Educativo y Académico de la UANL.',
          img: 'http://www.fcfm.uanl.mx/sites/default/files/styles/imagen_carrera/public/LA_0.jpg'
        },
        {
          nombre: 'Ciencias Computacionales',
          descripcion: 'Formar profesionistas dedicados al estudio de las Ciencias Computacionales, con capacidad de crear, desarrollar e implementar tecnologías de información y comunicación, para apoyar el ámbito económico, social y científico de la región y del país, a través del desarrollo y conocimiento tecnológico.',
          img: 'http://www.fcfm.uanl.mx/sites/default/files/styles/imagen_carrera/public/LCC.jpg'
        },
        {
          nombre: 'Multimedia y Animación Digital',
          descripcion: 'Formar profesionistas capaces de diseñar aplicaciones enfocadas a cubrir necesidades de la industria del arte digital y medios interactivos, haciendo uso de TICs y arte gráfico, para los sectores público y privado.',
          img: 'http://www.fcfm.uanl.mx/sites/default/files/styles/imagen_carrera/public/LMAD_0.jpg'
        },
        {
          nombre: 'Seguridad en T.I.',
          descripcion: 'Formar profesionales en la Licenciatura en Seguridad en Tecnologías de Información con sentido humanista, creativo e innovador, capaces de generar, difundir y aplicar el conocimiento para responder a las demandas del desarrollo científico, tecnológico, económico y social de la región y del país en el contexto internacional.',
          img: 'http://www.fcfm.uanl.mx/sites/default/files/styles/imagen_carrera/public/LSTI.jpg'
        }
      ]
    }
  }
}
</script>
