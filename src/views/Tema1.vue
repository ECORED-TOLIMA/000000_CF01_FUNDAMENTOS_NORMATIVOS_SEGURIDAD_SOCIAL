<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Sistema General de Seguridad Social en Salud (SGSSS)

    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img1.jpg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="fade-left")
        p La caracterización de usuarios en los servicios de salud es fundamental para ofrecer una atención adecuada y humanizada. Conocer sus condiciones socioeconómicas y normativas permite adaptar los servicios a sus necesidades, mejorando la calidad y eficiencia del sistema. Esta práctica contribuye a garantizar derechos, promover la equidad y fortalecer la confianza en el sistema de salud, beneficiando a toda la sociedad. La correcta atención a los usuarios es clave para construir un sistema más justo, inclusivo y efectivo, que responda a las demandas y expectativas de la población.
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Definición y acciones del SGSSS
    p.mb-4 El Sistema General de Seguridad Social en Salud (SGSSS) de Colombia, es un marco integral que combina aspectos normativos, institucionales, financieros y de gestión para garantizar que toda la población tenga acceso a servicios de salud de calidad, oportunos y adecuados. Este sistema se fundamenta en el reconocimiento del derecho a la salud, establecido en la Constitución Política de Colombia, el cual busca promover la protección social en salud, mediante la integración de diferentes actores, recursos y acciones coordinadas para mejorar la calidad de vida de los ciudadanos y reducir las desigualdades en el acceso a los servicios de salud.
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Componentes y estructura del SGSSS
    p.mb-4 A continuación, se relacionan los aspectos que se deben tener en cuenta en la estructuración del Sistema General de Seguridad Social en Salud: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Afiliación")
            .col-md-12.mb-4.mb-md-0
              p Es el proceso mediante el cual las personas se inscriben formalmente en el sistema, ya sea en el régimen contributivo, para quienes tienen capacidad de pago, o en el régimen subsidiado, dirigido a las personas en situación de pobreza o vulnerabilidad. La afiliación garantiza que los individuos tengan derecho a recibir servicios de salud y a participar en la financiación del sistema, promoviendo la inclusión social y la protección de los derechos de todos los ciudadanos, independientemente de su condición socioeconómica.
          .row(titulo="Financiación")
            .col-md-12.mb-4.mb-md-0
              p Es el mecanismo mediante el cual se recaudan y distribuyen los recursos necesarios para sostener el sistema. Incluye las cotizaciones de los afiliados en el régimen contributivo, los aportes del Estado para el régimen subsidiado, y otros recursos públicos y privados destinados a garantizar la cobertura y la calidad de los servicios. La sostenibilidad financiera del sistema es fundamental para mantener la continuidad y la expansión de la cobertura, así como para garantizar la equidad en la distribución de los recursos.
          .row(titulo="Prestación de servicios")
            .col-md-12.mb-4.mb-md-0
              p Se refiere a la oferta de atención médica, preventiva, de recuperación y rehabilitación, brindada por instituciones autorizadas y profesionales capacitados. Estas instituciones deben cumplir con estándares de calidad, contar con infraestructura adecuada y estar sujetas a regulaciones que aseguren la eficiencia y la protección de los derechos de los usuarios. La prestación de servicios abarca desde la atención primaria en salud hasta procedimientos especializados y hospitalarios, buscando una atención integral y centrada en el paciente.
          .row(titulo="Aseguramiento y protección")
            .col-md-12.mb-4.mb-md-0
              p Es el conjunto de mecanismos y acciones destinados a garantizar que los afiliados reciban los servicios necesarios para mantener o recuperar su salud, cubriendo procedimientos, medicamentos, intervenciones y programas preventivos. Además, incluye la protección de los derechos de los usuarios, la resolución de quejas, la atención a poblaciones vulnerables y la promoción de la participación activa de los ciudadanos en la gestión del sistema.
          .row(titulo="Gestión y regulación")
            .col-md-12.mb-4.mb-md-0
              p Son las funciones de las entidades encargadas de supervisar, regular, planificar y evaluar el funcionamiento del sistema. La Superintendencia Nacional de Salud y el Ministerio de Salud y Protección Social desempeñan un papel clave en la regulación de la calidad, la protección de los derechos de los usuarios, la vigilancia del cumplimiento normativo y la promoción de buenas prácticas en la prestación de servicios. La gestión eficiente y transparente es esencial para garantizar la sostenibilidad y la confianza en el sistema.
      .col-lg-4.col-md-8.col-sm-3.order-lg-2.order-1.mb-md-4
        figure
          img(src='@/assets/curso/temas/tema1/img2.png', alt='Texto que describa la imagen')
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
