<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Principios rectores del sistema
    P.mb-4 Algunos de los principios del Sistema General de Seguridad Social en Salud, se relacionan a continuación:
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Universalidad
    p.mb-4 El Sistema General de Seguridad Social en Salud, cubre a todos los residentes en el país, en todas las etapas de la vida. Garantiza que toda la población tenga acceso a los servicios de salud sin importar su condición socioeconómica, edad, género, ubicación o cualquier otra condición. Además, busca que nadie quede excluido del acceso a la atención en salud, promoviendo la igualdad y la protección de los derechos de todos los ciudadanos.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este principio asegura que el sistema sea inclusivo y que todos puedan beneficiarse de los servicios de salud, contribuyendo a reducir desigualdades y a promover una sociedad más justa y saludable. Asimismo, implica que el Estado tiene la responsabilidad de garantizar la cobertura universal, diseñando políticas y mecanismos que permitan que toda la población pueda acceder a la atención necesaria en cualquier momento y lugar.
    p.mb-4 La universalidad es un principio que impacta en aspectos relevantes como:
    .tarjeta--BG01.px-lg-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-6
          figure
            img(src='@/assets/curso/temas/tema2/img2.png', alt='Imagen decorativa')
        .col-lg-8
          SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema2/img3.svg' alt='AvatarTop')
              h5.text-center Cobertura para toda la población
              p.text-center Todos los colombianos, residentes y extranjeros en el país, tienen derecho a la protección en salud. Esto incluye a niños, adultos, adultos mayores, personas con discapacidad, comunidades indígenas, rurales y urbanas, entre otros.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema2/img4.svg' alt='AvatarTop')
              h5.text-center Acceso sin barreras
              p.text-center Busca eliminar obstáculos económicos, culturales o geográficos que puedan impedir que alguien reciba atención. Por ejemplo, se implementan programas específicos para zonas rurales o alejadas, donde el acceso puede ser más difícil.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema2/img5.svg' alt='AvatarTop')
              h5.text-center Financiamiento solidario
              p.text-center El sistema se financia mediante aportes de los afiliados, del Estado y de otros actores con el fin de garantizar que los recursos estén disponibles para todos, especialmente para los más vulnerables.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema2/img6.svg' alt='AvatarTop')
              h5.text-center Políticas de inclusión
              p.text-center Se promueven acciones para incluir a poblaciones en situación de vulnerabilidad, como personas en pobreza, comunidades indígenas, migrantes, entre otros, asegurando que tengan acceso a servicios de calidad.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-4
                  img(src='@/assets/curso/temas/tema2/img7.svg' alt='AvatarTop')
              h5.text-center Derecho a la protección y a la atención oportuna
              p.text-center La universalidad también implica que nadie debe esperar demasiado tiempo para recibir atención, y que los servicios deben ser de calidad y adecuados a las necesidades de cada persona.
    .tarjeta-BG02.px-lg-5.px-4
      .row.justify-content-center.align-items-center
        .col-lg-11
          .titulo.mb-4(data-aos="flip-up")
            img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
            h5.mb-0 Equidad
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.order-2.order-lg-1
          p Busca garantizar que todas las personas tengan acceso a servicios de salud de calidad, independientemente de su condición socioeconómica, ubicación geográfica, género, edad o cualquier otra condición personal. 
          p Este principio se fundamenta en la idea de que la salud es un derecho y no un privilegio, promoviendo la justicia social y la igualdad en el acceso a los recursos y servicios del sistema.
          p En Colombia, este principio está consagrado en la Constitución Política de 1991 y en leyes como la Ley 100 de 1993. Dentro del sistema, implementar el principio de equidad genera el soporte para pilares como:

        .col-lg-5.col-md-10.col-sm-6.mb-md-4.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema2/img8.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img9.svg", alt="alt").img90.m-auto
          h5.text-center Cobertura universal
          p.text-center.mb-0 Garantizar que todos los colombianos tengan acceso a servicios de salud sin discriminación.
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img10.svg", alt="alt").img90.m-auto
          h5.text-center Financiamiento solidario
          p.text-center.mb-0 Establecer mecanismos que permitan distribuir los recursos de manera justa, considerando las capacidades económicas de las personas.
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img11.svg", alt="alt").img90.m-auto
          h5.text-center Atención diferenciada
          p.text-center.mb-0 Ofrecer servicios adaptados a las necesidades específicas de diferentes grupos poblacionales, como comunidades rurales, indígenas o personas con discapacidad.
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema2/img12.svg", alt="alt").img90.m-auto
          h4.text-center Reducción de desigualdades
          p.text-center.mb-0 Implementar políticas y programas dirigidos a disminuir las brechas en salud existentes entre diferentes regiones y grupos sociales.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 El principio de equidad busca crear un sistema de salud más justo e inclusivo, promoviendo que todos los colombianos puedan disfrutar del derecho a la salud en condiciones iguales.
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Integralidad
    p Hace referencia a la atención completa y coordinada que se debe brindar a las personas, considerando todas sus necesidades de salud en su totalidad. 
    p Este principio busca garantizar que los servicios de salud aborden no solo la enfermedad o condición específica, sino también los aspectos preventivos, curativos, rehabilitatorios y promocionales, promoviendo una atención holística.
    p.mb-4 Las siguientes, son las características del principio de integralidad:
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img13.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Atención multidisciplinaria]
              p.text-center.mb-0 Implica la colaboración entre diferentes profesionales y niveles de atención para cubrir todas las dimensiones de la salud del paciente.
      .col-10.col-md-6.col-lg-4.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img14.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Prevención y promoción]
              p.text-center.mb-0 No solo se trata de tratar enfermedades, sino también de prevenir su aparición y promover estilos de vida saludables.
      .col-10.col-md-6.col-lg-4.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img15.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Continuidad en la atención]
              p.text-center.mb-0 Asegura que el paciente reciba un seguimiento adecuado a lo largo del tiempo, sin fragmentación o interrupciones innecesarias.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 El principio de integralidad promueve una visión global del cuidado en salud, asegurando que las intervenciones sean completas y coherentes con las necesidades reales del usuario.

    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Enfoque centrado en la persona
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img16.png', alt='Imagen decorativa')
    p Considera las condiciones sociales, culturales y psicológicas del individuo como parte integral del proceso de atención.
    p Este principio está establecido en la Ley 100 de 1993 y en otras normativas que regulan el Sistema General de Seguridad Social en Salud. La implementación busca evitar la fragmentación de los servicios y promover una atención más humana, eficiente y efectiva.



</template>

<script>
export default {
  name: 'Tema2',
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
