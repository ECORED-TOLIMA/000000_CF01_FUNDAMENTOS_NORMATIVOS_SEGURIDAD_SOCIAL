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
    .row.justify-content-center.align-items-center.mb-3
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
              h5 Características
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
    .tarjeta--container.row.mb-5
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
            h4.text-center  Características
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
    
    .titulo.mb-4(data-aos="flip-up")
      h5.mb-0 •	Magisterio
    p En Colombia, los docentes y miembros del magisterio tienen un régimen especial de salud que les brinda cobertura diferenciada y beneficios adicionales en comparación con el régimen general. Este régimen busca garantizar la protección en salud de los docentes, quienes desempeñan una labor fundamental en la educación del país.
    p.mb-4 Los siguientes, son los usuarios del régimen especial de salud para docentes y magisterio:

    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img12.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.text-center.mb-0 #[b Docentes oficiales y del sector educativo público]
              p.text-center.mb-0 Incluye a maestros, rectores, directivos y personal administrativo de instituciones educativas públicas y privadas afiliados al sistema de salud mediante el régimen especial.
      .col-10.col-md-6.col-lg-4.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img13.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.text-center.mb-0 #[b Miembros del Fondo Nacional de Prestaciones Sociales del magisterio (FONPREST)]
              p.text-center.mb-0 Es la entidad encargada de administrar las prestaciones sociales y servicios de salud para los docentes oficiales afiliados al magisterio oficial.
      .col-10.col-md-6.col-lg-4.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img14.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.text-center.mb-0 #[b Personal docente en instituciones educativas oficiales]
              p.text-center.mb-0 Incluye a todos los docentes vinculados por nombramiento o contrato en instituciones públicas, quienes tienen acceso a coberturas específicas en salud.
    p.mb-4 Es importante conocer las características del régimen de salud para docentes y magisterio:
    .tarjeta-BG02.lg-px-5.px-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-11
          .row.mb-4
            .col-md-6.col-xl.mb-4.mb-xl-0
              .tarjeta-numerada.color-primario.p-5.h-100
                .tarjeta-numerada__numero
                  .h2 1
                p.text-center 
                  b Afiliación automática
                p.text-center La afiliación al sistema de salud se realiza automáticamente al momento de ingresar al magisterio o al sistema educativo oficial.

            .col-md-6.col-xl.mb-4.mb-xl-0
              .tarjeta-numerada.color-acento-contenido.p-5.h-100
                .tarjeta-numerada__numero
                  .h2 2
                p.text-center 
                  b Cobertura diferenciada
                p.text-center Los docentes tienen acceso a un Plan Obligatorio de Salud (POS), complementado con beneficios adicionales específicos para su grupo laboral.

            .col-md-6.col-xl.mb-4.mb-xl-0
              .tarjeta-numerada.color-secundario.p-5.h-100
                .tarjeta-numerada__numero
                  .h2 3
                p.text-center 
                  b Prestaciones sociales
                p.text-center Además de la atención en salud, el magisterio recibe prestaciones sociales relacionadas con bienestar, capacitación y protección social.

            .col-md-6.col-xl.mb-4.mb-xl-0
              .tarjeta-numerada.color-adicional.p-5.h-100
                .tarjeta-numerada__numero
                  .h2 4
                p.text-center 
                  b Instituciones responsables
                p.text-center Cuidados para pacientes con enfermedades terminales o crónicas avanzadas.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.order-2.order-lg-1
          p A continuación, se listan los requisitos para acceder:
          ul.lista-ul--color
            li
              i.fas.fa-angle-right
              | Ser docente oficial o miembro activo del magisterio.
            li
              i.fas.fa-angle-right
              | Estar afiliado automáticamente por su vinculación laboral.
            li
              i.fas.fa-angle-right
              | Mantener vigente la vinculación laboral en el sector educativo público.

        .col-lg-5.col-md-10.col-sm-3.mb-md-4.mb-sm-4.order-1.order-lg-2
          figure
            img(src="@/assets/curso/temas/tema6/img15.svg", alt="alt")
    .titulo.mb-4(data-aos="flip-up")
      h5.mb-0 •	Policía Nacional de Colombia
    p Como parte de su estructura, los miembros de la Policía Nacional tienen un régimen especial de salud que les proporciona cobertura diferenciada y beneficios específicos.
    p.mb-4 Los siguientes son los procesos que se llevan a cabo en su accionar:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.mb-md-4
        figure
          img(src='@/assets/curso/temas/tema6/img16.png', alt='Imagen decorativa')
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Afiliación y cobertura")
            h4 Afiliación y cobertura
            ul.lista-ul--color
              li
                i.fas.fa-angle-right
                | Los policías y su grupo familiar (cónyuge e hijos) están afiliados al sistema de salud mediante un régimen especial gestionado por la Policía Nacional.
              li
                i.fas.fa-angle-right
                | La afiliación es automática al ingresar a la institución.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Entidades responsables")
            h4 Entidades responsables
            ul.lista-ul--color
              li
                i.fas.fa-angle-right
                | La Policía Nacional tiene convenios con instituciones prestadoras de servicios de salud (IPS), para brindar atención médica a sus miembros.
              li
                i.fas.fa-angle-right
                | En algunos casos, la atención puede ser gestionada a través del Fondo de Prestaciones Sociales del Policía (FONPREPOL) o entidades similares.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Beneficios y servicios")
            h4 Beneficios y servicios
            ul.lista-ul--color
              li
                i.fas.fa-angle-right
                | Cobertura en atención médica general, especializada, odontológica y hospitalaria.
              li
                i.fas.fa-angle-right
                | Programas preventivos y de bienestar para los policías y sus familias.
              li
                i.fas.fa-angle-right
                | Atención en emergencias y accidentes laborales.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Programas adicionales")
            h4 Programas adicionales
            ul.lista-ul--color
              li
                i.fas.fa-angle-right
                | Programas de salud mental, rehabilitación física y apoyo psicológico.
              li
                i.fas.fa-angle-right
                | Campañas preventivas en salud pública dirigidas a los miembros policiales.
    p.mb-4 Por último, se relacionan las características específicas de este régimen:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .crd2.crd2--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema6/img17.svg", alt="alt").img90.m-auto
          h5.text-center Cobertura diferenciada
          p.text-center.mb-0 Diseñada para responder a las necesidades particulares del personal policial, incluyendo atención en situaciones relacionadas con riesgos laborales.
      .col-lg-4.mb-4.mb-lg-0
        .crd2.crd2--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema6/img18.svg", alt="alt").img90.m-auto
          h5.text-center Acceso preferencial
          p.text-center.mb-0 Los miembros de la policía tienen prioridad en la asignación de citas y servicios médicos en las instituciones afiliadas.
      .col-lg-4.mb-4.mb-lg-0
        .crd2.crd2--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema6/img19.svg", alt="alt").img90.m-auto
          h5.text-center Programas de bienestar
          p.text-center.mb-0 Incluyen actividades físicas, programas sociales y campañas educativas en salud.
    .titulo.mb-4(data-aos="flip-up")
      h5.mb-0 •	Las Fuerzas Militares de Colombia 
    p Están conformadas por el Ejército, la Armada y la Fuerza Aérea, y su personal cuenta con un régimen especial de salud que garantiza atención médica diferenciada y beneficios específicos para sus miembros y sus familias.
    p.mb-4 Estas instituciones tienen un accionar en los temas de salud, los cuales se relacionan a continuación:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        LineaTiempoD.color-acento-botones

          .row.justify-content-center(numero="1" titulo="Afiliación y cobertura")
            .col-lg-12.order-lg-2.order-3
              .bgblanco.p-3
                ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    | Los militares activos, retirados y sus familiares están afiliados al sistema de salud mediante un régimen especial gestionado por las instituciones de salud de las Fuerzas Militares (como la Caja de Compensación Militar o EPS institucionales).
                  li
                    i.fas.fa-circle
                    | La afiliación es automática al ingresar a la institución o al momento del retiro.

            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema6/img20.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="2" titulo="Entidades responsables")          
            .col-lg-12.order-lg-2.order-3
              .bgblanco.p-3
                ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    | La atención médica se realiza a través de las instituciones prestadoras de servicios (IPS) propias o convenios con entidades del sector salud.
                  li
                    i.fas.fa-circle
                    | La Caja de Compensación Militar y otras entidades administran los servicios médicos, odontológicos y hospitalarios.

            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema6/img21.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="3" titulo="Beneficios y servicios")          
            .col-lg-12.order-lg-2.order-3
              .bgblanco.p-3
                ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    | Cobertura en atención primaria, especializada, hospitalaria, odontológica y farmacéutica.
                  li
                    i.fas.fa-circle
                    | Programas preventivos en salud física, mental y social.
                  li
                    i.fas.fa-circle
                    | Atención en emergencias, accidentes laborales y enfermedades profesionales.

            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema6/img22.png', alt="Imagen decorativa")
          .row.justify-content-center(numero="4" titulo="Programas adicionales")          
            .col-lg-12.order-lg-2.order-3
              .bgblanco.p-3
                ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    | Servicios de rehabilitación física.
                  li
                    i.fas.fa-circle
                    | Programas de bienestar integral para el personal militar y sus familias.
                  li
                    i.fas.fa-circle
                    | Campañas educativas en salud pública.

            .col-lg-12.order-lg-3.order-1.mb-md-4
              figure
                img(src='@/assets/curso/temas/tema6/img22.png', alt="Imagen decorativa")
    p.mb-4 Las características específicas de este régimen son:
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img24.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.text-center.mb-0 #[b Cobertura diferenciada]
              p.text-center.mb-0 Diseñada para responder a las necesidades particulares del personal militar, incluyendo atención en situaciones relacionadas con riesgos laborales o misiones especiales.
      .col-10.col-md-6.col-lg-4.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img25.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.text-center.mb-0 #[b Acceso prioritario]
              p.text-center.mb-0 Los miembros activos y retirados tienen prioridad en la asignación de citas médicas y servicios especializados.
      .col-10.col-md-6.col-lg-4.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema6/img26.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.text-center.mb-0 #[b Atención integral]
              p.text-center.mb-0 Incluye programas sociales, psicológicos y físicos para promover el bienestar del personal militar.
    .titulo.mb-4(data-aos="flip-up")
      h5.mb-0 •	Los trabajadores de Ecopetrol
    p Cuentan con un régimen de salud y beneficios sociales específicos, gestionados principalmente, a través del sistema de seguridad social y los convenios que la empresa tiene con entidades prestadoras de servicios de salud (IPS).
    p.mb-4 Igualmente, como los anteriores regímenes descritos, poseen una serie de procesos, los cuales son:
    .tarjeta.tarjeta--BG06.p-5.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b" data-aos="zoom-in")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4  Afiliación y cobertura
            ul.lista-ul--color
              li
                i.fas.fa-angle-right
                | Los empleados activos y pensionados de Ecopetrol están afiliados a un sistema de salud que puede incluir la afiliación a una EPS, mediante convenios específicos.
              li
                i.fas.fa-angle-right
                | La afiliación es gestionada por la misma empresa o por las administradoras de fondos de pensiones y salud en función del régimen al que pertenezcan.
          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema6/img27.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4  Entidades responsables
            ul.lista-ul--color
              li
                i.fas.fa-angle-right
                | Ecopetrol tiene convenios con varias EPS para brindar atención médica, odontológica, hospitalaria y farmacéutica a sus trabajadores y sus familias.
              li
                i.fas.fa-angle-right
                | Los empleados pueden acceder a servicios complementarios o programas internos de bienestar.

          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema6/img28.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4  Beneficios y servicios
            ul.lista-ul--color
              li
                i.fas.fa-angle-right
                | Cobertura en atención primaria, especializada, hospitalaria y odontológica.
              li
                i.fas.fa-angle-right
                | Programas preventivos en salud, campañas de vacunación, control médico periódico.
              li
                i.fas.fa-angle-right
                | Atención en emergencias y enfermedades profesionales relacionadas con el trabajo.

          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema6/img30.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            h4  Programas adicionales
            ul.lista-ul--color
              li
                i.fas.fa-angle-right
                | Programas de bienestar laboral, psicológico y social.
              li
                i.fas.fa-angle-right
                | Actividades recreativas, deportivas y culturales para promover la calidad de vida.

          .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema6/img29.png' alt="Imagen decorativa")
    p.mb-4 Igualmente, dentro de este régimen, se encuentran otros beneficios sociales, como son:

    .tarjeta--container.row.mb-4
      .col-lg.tarjeta.color-primario.tarjcone.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema6/img31.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-10
            h4.text-center Pensiones
            p Los trabajadores tienen derecho a pensiones por jubilación o retiro según las leyes vigentes.
      .col-lg.tarjeta.color-secundario.tarjcone.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema6/img32.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-10
            h4.text-center Capacitación y desarrollo
            p Programas internos para formación profesional.
      .col-lg.tarjeta.color-acento-contenido.tarjcone.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema6/img33.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.align-items-center
          .col-10
            h4.text-center  Seguridad social integral
            p Incluye salud, pensiones, riesgos laborales y prestaciones sociales.

    p.mb-4 La siguiente tabla, resume los tipos de usuarios con características y los ejemplifica:
    .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
      h5 Tabla 1.
      span  #[i Tipos de usuarios del régimen de salud ]
    .tabla-a.color-acento-contenido.mb-4
      table
        thead(style="background-color:#C9DAEC")
          tr
            th Tipo de usuario
            th Características
            th Ejemplo
        tbody
          tr
            td Contributivo
            td Capacidad económica; paga cotizaciones.
            td Empleado formal.
          tr
            td Subsidiado
            td Sin capacidad económica; financiado por el Estado.
            td Persona en pobreza extrema.
          tr
            td Rehabilitación
            td Necesidad de atención especializada por discapacidad.
            td Persona con discapacidad.
          tr
            td Régimen especial
            td Regímenes específicos por profesión o condición.
            td Militar, policía, magisterio, Ecopetrol, etc.

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1	Marco normativo del sistema de salud colombiano
    
    .tarjeta-BG02.lg-px-5.px-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-11
          p Aunque es un marco muy amplio, debido a las constantes modificaciones que ha sufrido desde su promulgación en 1993, algunas claves para entender su funcionamiento incluyen:
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6
          ul.lista-ul--color
            li
              i.fas.fa-check
              p.mb-0 #[b Ley 100 de 1993]: define el Sistema General de Seguridad Social en Salud (SGSSS) y establece la forma de financiamiento, organización y acceso a servicios de salud.
            li
              i.fas.fa-check
              p.mb-0 #[b Ley 1751 de 2015 (Ley Estatutaria de la Salud)]: regula el derecho fundamental a la salud. establece mecanismos de protección y acceso.
            li
              i.fas.fa-check
              p.mb-0 #[b Ley 1164 de 2007 (Ley de Talento Humano en Salud)]: enfocada en formación, capacitación y regulación de profesionales de la salud.
            li
              i.fas.fa-check
              p.mb-0 #[b Decreto 2309 de 2002]: reglamenta el Sistema Obligatorio de Garantía de Calidad de la Atención en Salud.
            li
              i.fas.fa-check
              p.mb-0 #[b Decreto 780 de 2016 (Decreto Único Reglamentario del Sector Salud y Protección Social)]: agrupa la normatividad relacionada con el sector salud y protección social.
            li
              i.fas.fa-check
              p.mb-0 #[b Decreto 1599 de 2022]: establece el Modelo Integral de Atención en Salud, centrado en el cuidado de personas, familias y comunidades. 

        .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img34.png', alt='Texto que describa la imagen')
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
