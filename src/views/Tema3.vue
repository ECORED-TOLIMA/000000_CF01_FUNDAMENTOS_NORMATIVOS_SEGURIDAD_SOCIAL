<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 La protección social del sistema de salud colombiano
    p Incluye las acciones, mecanismos y políticas diseñados para garantizar que todas las personas tengan acceso a los servicios de salud necesarios, sin enfrentar dificultades económicas o sociales. Es un componente fundamental del Sistema General de Seguridad Social en Salud (SGSSS), cuyo objetivo principal es proteger a la población, frente a riesgos relacionados con la salud, asegurando su bienestar y calidad de vida.
    p.mb-4 Las siguientes, son las características principales de la protección social en salud:
    .row.justify-content-center.mb-5
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-right")
        .tarjeta.BG03.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema3/img1.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Acceso universal
              p.mb-0 Busca que toda la población tenga derecho a recibir atención en salud, independientemente de su condición socioeconómica.
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-left")
        .tarjeta.BG03.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema3/img2.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Cobertura financiera
              p.mb-0 Incluye mecanismos como subsidios, seguros y fondos públicos que cubren los costos asociados a la atención médica.
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-right")
        .tarjeta.BG03.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema3/img3.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Prevención y promoción
              p.mb-0 Promueve acciones preventivas para reducir riesgos y evitar enfermedades costosas o discapacidades.
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-left")
        .tarjeta.BG03.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema3/img4.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Equidad
              p.mb-0 Garantiza que los recursos y servicios lleguen a quienes más lo necesitan, reduciendo desigualdades en salud.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-10.col-sm-3.mb-md-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img5.png', alt='Imagen decorativa')
      .col-lg-5
        p La protección social en salud está regulada por leyes como la Ley 100 de 1993 y sus reformas, que establecen el sistema de aseguramiento y protección para diferentes grupos poblacionales, incluyendo aquellos en situación de vulnerabilidad o pobreza. Además, contempla programas específicos para garantizar el acceso a servicios básicos y reducir las barreras económicas o sociales.
        p La protección social del sistema, busca asegurar que todos los colombianos puedan acceder a servicios de salud adecuados y oportunos, protegiéndolos frente a los riesgos económicos derivados de problemas de salud y promoviendo condiciones que favorezcan su bienestar integral.
    .tarjeta-BG02.px-lg-5.px-4
      .row.justify-content-center.align-items-center
        .col-lg-11
          .titulo.mb-4(data-aos="flip-up")
            img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
            h5.mb-0 Importancia de comprender el Sistema General de Seguridad Social en Salud
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          p Comprender el Sistema General de Seguridad Social en Salud (SGSSS) de Colombia, es fundamental para entender cómo funciona el sistema de salud en el país y cuál es su propósito principal. Este conocimiento permite valorar la importancia de la protección social, la equidad en el acceso a los servicios de salud y la responsabilidad que tenemos como ciudadanos para cuidar nuestra salud y la de los demás. Además, ayuda a tomar decisiones informadas sobre el cuidado personal y a entender los derechos y deberes que tenemos dentro del sistema de salud.
          p En conjunto, este conocimiento contribuye a formar personal de salud y ciudadanos más informados, comprometidos y capaces de contribuir al bienestar colectivo, promoviendo una sociedad más saludable y equitativa.

        .col-lg-4.col-8
          figure
            img(src='@/assets/curso/temas/tema3/img6.png', alt='Imagen decorativa')

    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Importancia de entender Sistema General de Seguridad Social en Salud para los trabajadores de la salud
    p Entender el Sistema General de Seguridad Social en Salud (SGSSS), permite conocer derechos, obligaciones y beneficios en el acceso a servicios de salud, lo que facilita una atención oportuna y adecuada, además de promover la participación activa en su propio bienestar. También ayuda a prevenir malentendidos y a garantizar que se reciba la protección social que les corresponde.
    p.mb-4 Algunas de las inquietudes que permite resolver son:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.desktop
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img7.svg', alt='Imagen decorativa')
          .tarjeta.bgblanco.p-3(x="65%" y="15%" numero="+")
            p ¿Cuáles son mis derechos dentro del SGSSS? 
          .tarjeta.bgblanco.p-3(x="4%" y="53%" numero="+")
            p ¿Cómo puedo acceder a los servicios de salud? 
          .tarjeta.bgblanco.p-3(x="4%" y="23%" numero="+")
            p ¿Qué debo hacer en caso de una emergencia o rechazo en la atención?
      .col-lg-10.movil
          figure
            img(src='@/assets/curso/temas/tema3/img7_1.svg', alt='Imagen decorativa')
    p.mb-4 Conocer los derechos en el SGSSS garantiza acceso a atención oportuna, calidad y protección en emergencias. 

    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 Aplicaciones del conocimiento del Sistema General de Seguridad Social en Salud y su marco normativo
    p.mb-4 Comprender el Sistema General de Seguridad Social en Salud y las leyes que lo rigen es fundamental para garantizar una atención adecuada y efectiva a los usuarios de las EPS. 
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este conocimiento permite identificar los derechos, obligaciones y procedimientos establecidos por la normativa, facilitando la resolución de problemas como rechazos o limitaciones en la atención. Además, ayuda a los profesionales a ofrecer un servicio conforme a la ley, promoviendo la equidad, calidad y protección del usuario. Entender el sistema también permite actuar con mayor seguridad ante emergencias, solicitar servicios necesarios y defender los derechos en caso de incumplimientos o abusos. 
          br
          br
          | Tener claro cómo funciona el sistema y sus leyes, fortalece la relación entre usuarios y prestadores, contribuye a una atención más justa y eficiente y asegura que las personas reciban la protección en salud que les corresponde por derecho.
    p.mb-4 Las siguientes son las principales decisiones que pueden tomarse, a partir del del conocimiento del Sistema General de Seguridad Social en Salud y su marco normativo:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img9.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              h5  Formación y capacitación del personal
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Implementar programas de capacitación enfocados en protocolos de atención al cliente, comunicación asertiva y manejo de conflictos.
                li
                  i.fas.fa-angle-right
                  | Definir perfiles profesionales que requieran formación en el Sistema General de Seguridad Social en Salud y en atención centrada en el usuario.
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              h5  Mejora en la atención al usuario
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Establecer protocolos claros para caracterizar a los usuarios según sus condiciones socioeconómicas y normativa vigente.
                li
                  i.fas.fa-angle-right
                  | Desarrollar estrategias para ofrecer un servicio más humanizado, efectivo y acorde a las necesidades específicas de cada usuario.
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              h5  Gestión normativa y administrativa
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Revisar y actualizar las políticas internas para garantizar el cumplimiento del marco normativo del Sistema General de Seguridad Social Integral.
                li
                  i.fas.fa-angle-right
                  | Asegurar que los procedimientos administrativos reflejen los derechos, deberes y obligaciones tanto del sistema como de los usuarios.
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              h5  Implementación de estrategias de calidad
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Diseñar indicadores para evaluar la calidad del servicio, basado en criterios relacionados con el conocimiento normativo, habilidades comunicativas y manejo de conflictos.
                li
                  i.fas.fa-angle-right
                  | Promover una cultura organizacional orientada a la satisfacción del usuario y al cumplimiento normativo.
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              h5  Toma de decisiones estratégicas
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Identificar áreas donde se requiere mayor capacitación o recursos adicionales.
                li
                  i.fas.fa-angle-right
                  | Priorizar acciones que mejoren la caracterización y atención diferenciada según las condiciones socioeconómicas.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10 
        p El conocimiento detallado sobre estos resultados permite tomar decisiones informadas para mejorar la formación del personal, optimizar los procesos administrativos, garantizar el cumplimiento normativo y ofrecer una atención más efectiva y centrada en el usuario dentro del Sistema General de Seguridad Social en Salud en Colombia.
</template>

<script>
export default {
  name: 'Tema3',
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
