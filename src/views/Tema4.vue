<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Usuarios del Sistema General de Seguridad Social en Salud
      
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center
      .col-lg-10
        p Los usuarios internos y externos del Sistema General de Seguridad Social en Salud de Colombia son esenciales para su funcionamiento. A continuación, su debida explicación:
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1	Usuarios internos del sistema de salud colombiano
    p.mb-4 Son aquellos que participan directamente en la gestión, regulación, prestación y supervisión de los servicios de salud. Estos usuarios desempeñan un papel fundamental en el funcionamiento eficiente y efectivo del Sistema General de Seguridad Social en Salud (SGSSS) e incluyen a:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.mb-md-4
        figure
          img(src='@/assets/curso/temas/tema4/img2.png', alt='Imagen decorativa')
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Prestadores de servicios de salud")
            h4 Prestadores de servicios de salud
            p Son las instituciones, clínicas, hospitales, centros de salud, laboratorios, farmacias y profesionales independientes que brindan atención médica, preventiva, de recuperación y rehabilitación a los pacientes. Estos actores son responsables de ofrecer servicios de calidad, cumplir con las normativas y garantizar la satisfacción de los usuarios.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Personal de salud")
            h4 Personal de salud
            p Incluye a médicos, enfermeros, técnicos, auxiliares, farmacéuticos, terapeutas y otros profesionales que trabajan en la atención directa a los pacientes. Son quienes realizan los procedimientos, diagnósticos, tratamientos y acompañamiento en los procesos de salud y enfermedad.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Entidades de regulación y supervisión")
            h4 Entidades de regulación y supervisión
            p Como la Superintendencia Nacional de Salud y el Ministerio de Salud y Protección Social, quienes se encargan de regular, supervisar y evaluar el funcionamiento del sistema. Estos organismos aseguran que las instituciones y profesionales cumplan con las normas, estándares de calidad y protección de los derechos de los usuarios. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Personal administrativo y de gestión")
            h4 Personal administrativo y de gestión
            p Incluye a los funcionarios y empleados encargados de la gestión, planificación, financiamiento, regulación y control del sistema de salud. Su labor es fundamental para garantizar la sostenibilidad, eficiencia y transparencia del sistema. Estos usuarios internos trabajan en conjunto para garantizar que el sistema funcione de manera coordinada, eficiente y centrada en la atención de las necesidades de la población, promoviendo la calidad, la protección de derechos y la sostenibilidad del sistema de salud colombiano.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2	Usuarios internos del sistema de salud colombiano

    p Son todas las personas que, aunque no participan directamente en la gestión o prestación de los servicios, son quienes reciben la atención y los beneficios del SGSSS. 
    p.mb-4 Ellos son el centro de todo el sistema, ya que su bienestar y derechos son la razón de ser de la estructura de salud y se clasifican de la siguiente manera:
    .tarjeta--BG043.p-4.px-lg-5.mb-4
      .tarjeta.tarjeta--BG04.p-4.mb-5
        PasosB.color-acento-botones
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Afiliados
              p Son las personas que están inscritas en el sistema, ya sea en el régimen contributivo (quienes tienen capacidad de pago y cotizan para su salud) o en el régimen subsidiado (personas en situación de pobreza o vulnerabilidad que reciben apoyo del Estado). Los afiliados tienen derecho a acceder a los servicios de salud según su afiliación y necesidades.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img3.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Pacientes y usuarios de servicios de salud
              p Incluyen a todos los individuos que reciben atención médica, preventiva, de recuperación o rehabilitación en hospitales, clínicas, centros de salud, consultorios y otros establecimientos autorizados. Son quienes utilizan los servicios para mantener o recuperar su salud.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img4.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Población vulnerable y en situación de pobreza
              p Incluyen a todos los individuos que reciben atención médica, preventiva, de recuperación o rehabilitación en hospitales, clínicas, centros de salud, consultorios y otros establecimientos autorizados. Son quienes utilizan los servicios para mantener o recuperar su salud.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img5.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Familiares y cuidadores
              p Personas que acompañan o asisten a los pacientes en su proceso de atención y que también tienen derechos relacionados con la información, la participación y la protección de los derechos de los usuarios.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img6.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Población en situación de discapacidad o con condiciones especiales
              p Personas que requieren atención especializada, programas de rehabilitación, medicamentos o servicios específicos para mejorar su calidad de vida y garantizar su inclusión social.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img7.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Población en zonas rurales o alejadas
              p Personas que viven en áreas rurales, indígenas o de difícil acceso, quienes enfrentan mayores desafíos para acceder a los servicios de salud y requieren atención diferenciada y adaptada a sus contextos.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img8.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema4',
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
