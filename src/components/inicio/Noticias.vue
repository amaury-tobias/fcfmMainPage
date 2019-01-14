<template lang="pug">
.card
  header.card-header
    p.card-header-title NOTICIAS
  .card-content
    carousel(
      :loop='true'
      :perPage='1'
      :autoplay='true'
      :autoplayHoverPause='true'
      :paginationPadding='3')
      slide(v-for='noticia in noticias')
        a(:href='noticia.titulo').has-text-centered
          p.title.is-6 {{ noticia.titulo }}
          p.subtitle.is-6 {{ noticia.contenido }}
</template>

<script>
export default {
  data: function () {
    return {
      noticias: [
        {
          titulo: 'Estudiantes Distinguidos del ciclo escolar ene-jun 2018',
          contenido: 'Como cada semestre, la Facultad de Ciencias Físico Matemáticas reconoce el esfuerzo de los estudiantes que obtienen los mejores promedios. First'
        },
        {
          titulo: 'Celebración del 65 aniversario de la Facultad de Ciencias Físico Matemáticas de la UANL',
          contenido: 'Un día para celebrar orgullosamente un año más de vida de la FCFM. El Rector Rogelio Garza Rivera presidio la ceremonia de aniversario.'
        },
        {
          titulo: 'El exitoso Act. Luis Huerta Rosas visita a los estudiantes de la FCFM',
          contenido: 'Alrededor de 700 estudiantes de la Licenciatura en Actuaria asistieron a las conferencias.'
        },
        {
          titulo: 'Despide la Facultad de Ciencias Físico Matemáticas de la UANL a la Generación 2018',
          contenido: 'Ante un Teatro Universitario que lució lleno en su totalidad, más de 150 jóvenes se graduaron de los programas de licenciatura y posgrado de la FCFM.'
        }
      ]
    }
  }
}
</script>
