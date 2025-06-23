<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 6
      h1 Tipos de usuario en el sistema de salud en Colombia
      
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema6/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center
      .col-lg-12
        p El sistema de salud colombiano está diseñado para atender a diversos grupos poblacionales, teniendo en cuenta sus condiciones económicas, sociales y laborales. Por ello, se han establecido distintos regímenes y mecanismos de afiliación que garantizan el acceso a los servicios de salud. A continuación, se describen los principales tipos de usuarios, cada uno con características particulares en cuanto a su forma de afiliación, financiación y beneficios en salud:
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 A.	Usuarios del régimen contributivo
    p.mb-4 A continuación, se describen sus principales procesos:
    .row.justify-content-center.mb-4
      .col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema6/img5.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema6/img2.svg", alt="alt").img100
            .col
              h5 ¿Quiénes son?
              p Personas que tienen capacidad económica para pagar sus aportes o cotizaciones, como empleados formales, independientes, pensionados y otros.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema6/img3.svg", alt="alt").img100
            .col
              h5 ¿Cómo acceden?
              p A través de la afiliación a una EPS, mediante su empleador o por autoseguro.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema6/img4.svg", alt="alt").img100
            .col
              h5 Características:
              ul.lista-ul--color
                li
                  i.fas.fa-angle-right
                  | La cotización es compartida entre el trabajador y el empleador o el propio afiliado.
                li
                  i.fas.fa-angle-right
                  | Tienen derecho a todos los servicios del plan obligatorio.
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 B.	Usuarios del régimen subsidiado
    p.mb-4 A continuación, su debida explicación:
    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-primario.tarjcone.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema6/img6.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-10
            h4.text-center ¿Quiénes son?
            p Personas en situación de pobreza o vulnerabilidad que no pueden pagar cotizaciones.
      .col-md.tarjeta.color-secundario.tarjcone.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema6/img7.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-10
            h4.text-center ¿Cómo acceden?
            p Se afilian a través del Sisbén u otros mecanismos sociales y el Estado financia su cobertura.
      .col-md.tarjeta.color-acento-contenido.tarjcone.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema6/img8.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-10
            h4.text-center  Características:
            ul.lista-ul--color
              li
                i.fas.fa-angle-right
                | La afiliación la realiza directamente el Estado o las entidades territoriales.
              li
                i.fas.fa-angle-right
                | Acceden a los mismos servicios que en el régimen contributivo, pero financiados con recursos públicos.
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 C.	Usuarios del Sistema Integral de Rehabilitación (SIR)
    p.mb-4 Igualmente, se debe tener en cuenta lo siguiente:
    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img9.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3 ¿Quiénes son?
            p.mt-3 Personas con discapacidad o necesidades especiales que requieren atención especializada y rehabilitación.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img10.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3 ¿Cómo acceden?
            p.mt-3 Mediante el régimen contributivo o el subsidiado, teniendo en cuenta lo descrito en la Ley Estatutaria 1618 de 2013.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img11.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3 Características:
            ul.lista-ul--color
              li
                i.fas.fa-angle-right
                | Es fundamental estar afiliado a una Entidad Promotora de Salud (EPS).
              li
                i.fas.fa-angle-right
                | Garantizar su derecho a la atención integral en salud, incluyendo servicios de promoción, prevención, diagnóstico, tratamiento, rehabilitación y paliación.

    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 D.	Usuarios del régimen especial 
    p.mb-4  Dentro de este régimen se encuentran diferentes tipos de actores, los cuales se relacionan a continuación:
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1	Marco normativo del sistema de salud colombiano
    
</template>

<script>
export default {
  name: 'Tema6',
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
