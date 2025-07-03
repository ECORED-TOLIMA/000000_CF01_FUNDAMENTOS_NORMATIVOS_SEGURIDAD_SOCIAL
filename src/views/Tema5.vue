<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 5
      h1  Derecho a la salud
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0  En palabras de Gañan Echavarría (2013), “el derecho a la salud implica la garantía real a gozar de un estado físico, mental, emocional y social que permita al ser humano desarrollar en forma digna y al máximo sus potencialidades, en bien de sí mismo, de su familia y de la colectividad en general”. Estas connotaciones están amparadas en los artículos constitucionales 44 y 49 y que fueron desarrollados en la Ley Estatutaria de Salud 1751 de 2015, regulándose como un derecho fundamental, por lo cual es Estado colombiano y se ve obligado a garantizar la prestación del servicio de salud, bajo estándares de calidad, oportunidad, solidaridad, eficiencia, integralidad y demás principios que la fundan.


    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1	Conformación Sistema General de Seguridad Social en Salud
    p.mb-4 El Sistema de salud colombiano está soportado en el Sistema General de Seguridad Social en Salud y su conformación incluye diversos actores:
    .row.justify-content-center.align-items-center
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row(titulo="")
            .col-lg-6.mb-4.order-lg-1.order-2
              h4 Ministerio de Salud
              p Su función es la de rectoría del sistema tal y como lo señala el decreto 4107 de 2011.
            .col-lg-6.mb-4.order-lg-2.order-1
              figure
                img(src='@/assets/curso/temas/tema5/img2.png', alt='Texto que describa la imagen')

          .row(titulo="")
            .col-lg-6.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img3.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0
              h4 Entidades Promotoras de Salud (EPS)
              p Son aseguradoras privadas o públicas que reciben las cotizaciones de los afiliados y gestionan la prestación del Plan de Beneficios en Salud Con cargo a la Unidad de Pago por Capitación.
          .row(titulo="")
            .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Instituciones Prestadoras de Salud (IPS)
              p Son los hospitales, las clínicas, los laboratorios, entre otros, que prestan directamente los servicios de salud a los usuarios. 
            .col-lg-6.mb-4.order-lg-2.order-1
              figure
                img(src='@/assets/curso/temas/tema5/img4.png', alt='Texto que describa la imagen')

          .row(titulo="")
            .col-md-6.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img5.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Régimen contributivo
              p Dirigido a las personas que tienen capacidad de pago, como trabajadores dependientes o independientes y sus familiares, que cotizan para el sistema.
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Régimen subsidiado
              p Destinado a las personas con menos recursos económicos, que no tienen acceso al régimen contributivo y son financiados por el Estado. 
            .col-md-6.mb-4.order-lg-2.order-1
              figure
                img(src='@/assets/curso/temas/tema5/img6.png', alt='Texto que describa la imagen')

          .row(titulo="")
            .col-md-6.mb-4
              figure
                img(src='@/assets/curso/temas/tema5/img7.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              h4 Administración de los Recursos del Sistema (ADRES)
              p Es la entidad que administra los recursos financieros del sistema de salud, tanto del régimen contributivo como del subsidiado. 
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0.order-lg-1.order-2
              h4 Superintendencia Nacional de Salud – Supersalud
              p Es el ente de vigilancia y control del sistema, que vela por el cumplimiento de las normas y la calidad de los servicios. 
            .col-md-6.mb-4.order-lg-2.order-1
              figure
                img(src='@/assets/curso/temas/tema5/img8.png', alt='Texto que describa la imagen')
    p.mb-4 Basado en lo anterior, a continuación, se relacionan las funciones de cada actor:
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 A. Ministerio de Salud 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-10.col-sm-6.mb-4
        figure
          img(src='@/assets/curso/temas/tema5/img9.png', alt='Texto que describa la imagen')

      .col-lg-7
        ul.lista-ul--color
          li
            i.fas.fa-hand-point-right
            | Garantizar el bienestar de la población. 
          li
            i.fas.fa-hand-point-right
            | Formular, coordinar y evaluar las políticas públicas en salud, asegurando el acceso a servicios de calidad para todos los ciudadanos. Se encarga de diseñar y promover programas de prevención, promoción y control de enfermedades, así como de regular y supervisar el funcionamiento del sistema de salud en el país. 
          li
            i.fas.fa-hand-point-right
            | Administrar los recursos destinados a salud, establecer normativas y estándares para las instituciones y profesionales del sector y trabajar en la protección de los derechos de los usuarios. 
          li
            i.fas.fa-hand-point-right
            | Su objetivo principal es mejorar la salud pública, reducir las desigualdades en el acceso a servicios y garantizar que la población reciba atención oportuna y eficiente.

    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 B. Entidades Promotoras de Salud (EPS) 
    p Tienen funciones fundamentales para garantizar la prestación de servicios de salud a los afiliados. Estas entidades actúan como intermediarias entre los usuarios y los prestadores de servicios, gestionando la afiliación, la cotización y la atención en salud.
    p.mb-4 Dentro de sus funciones en el sistema se destacan:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
         LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Afiliación y registro").p-3
            .col-lg-12.mb-md-0
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Inscribir a las personas en el régimen contributivo o subsidiado.
                li
                  i.fas.fa-check
                  | Mantener actualizados los datos de los afiliados y beneficiarios.
          .row(numero="2" titulo="Gestión del aseguramiento").p-3
            .col-lg-12.mb-md-0
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Administrar los recursos económicos destinados a la salud, incluyendo las cotizaciones y subsidios.
                li
                  i.fas.fa-check
                  | Garantizar que los afiliados tengan acceso a la cobertura prevista por el plan obligatorio de salud (POS).
          .row(numero="3" titulo="Autorización y coordinación de servicios").p-3
            .col-lg-12.mb-md-0
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Autorizar y coordinar la prestación de servicios médicos, hospitalarios, farmacéuticos y otros requeridos por los afiliados.
                li
                  i.fas.fa-check
                  | Gestionar citas, exámenes, procedimientos y medicamentos necesarios.

          .row(numero="4" titulo="Promoción y prevención").p-3
            .col-lg-12.mb-md-0
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Implementar programas de promoción de la salud y prevención de enfermedades dirigidos a sus afiliados.
          .row(numero="5" titulo="Seguimiento y control").p-3
            .col-lg-12.mb-md-0
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Supervisar la calidad de los servicios prestados por las IPS (Instituciones Prestadoras de Servicios).
                li
                  i.fas.fa-check
                  | Realizar seguimiento a la satisfacción del usuario y resolver quejas o reclamos.

          .row(numero="6" titulo="Pago a prestadores").p-3
            .col-lg-12.mb-md-0
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Liquidar y pagar a las instituciones prestadoras por los servicios brindados a sus afiliados.
          .row(numero="7" titulo="Información y orientación").p-3
            .col-lg-12.mb-md-0
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Brindar información sobre derechos, deberes, cobertura y uso del sistema de salud.
                  
          .row(numero="8" titulo="Gestión del riesgo").p-3
            .col-lg-12.mb-md-0
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Implementar estrategias para gestionar riesgos en salud, como campañas preventivas o intervenciones específicas.
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema5/img10.png', alt='Texto que describa la imagen')
    p.mb-4 Las EPS son responsables de administrar el aseguramiento en salud, facilitar el acceso a servicios, promover acciones preventivas y garantizar una atención oportuna y adecuada para sus afiliados. Su función es clave para que el sistema funcione eficientemente, promoviendo la protección social en salud en Colombia.

    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 C. Instituciones Prestadoras de Salud (IPS) 
    p.mb-4 Se encargan de coordinar y garantizar que los afiliados reciban atención oportuna y de calidad, además de administrar los recursos destinados a la salud de sus afiliados, actuando como intermediarias entre los usuarios y el sistema de salud, asegurando que las personas tengan acceso a los servicios necesarios.
    .tarjeta-BG02.lg-px-5.px-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4
          figure
            img(src='@/assets/curso/temas/tema5/img11.png', alt='Imagen decorativa')
        .col-lg-7
          p Las Instituciones Prestadoras de Salud (IPS), desempeñan un papel fundamental en el sistema de salud, ya que son las encargadas de ofrecer la atención médica directa a los pacientes. Sus funciones principales incluyen brindar atención médica especializada y general, desde consultas médicas y atención de urgencias hasta hospitalización, cirugías, exámenes diagnósticos, terapias y otros procedimientos necesarios para el diagnóstico, tratamiento y recuperación de los pacientes. También proporcionan servicios hospitalarios y ambulatorios, atendiendo en diferentes niveles de complejidad, y realizan procedimientos diagnósticos y terapéuticos como exámenes de laboratorio y estudios de imagen.
          p Las IPS deben garantizar la calidad y seguridad en la atención, cumpliendo con estándares y protocolos que protejan la salud de los pacientes y ofrezcan atención efectiva y segura. Además, trabajan en coordinación con las Entidades Promotoras de Salud (EPS) para recibir a los afiliados, gestionar citas, remisiones y asegurar que los pacientes reciban los servicios que necesitan en tiempo y forma. También administran los recursos y personal de salud, incluyendo médicos, enfermeros, técnicos y administrativos, así como los insumos y equipos necesarios para brindar una atención adecuada.
          p Otra función importante de las IPS es promover la prevención y la educación en salud, realizando actividades que fomenten hábitos saludables y la detección temprana de enfermedades. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Las IPS son los centros donde la atención médica se materializa, siendo esenciales para que los pacientes puedan acceder a los servicios de salud necesarios en diferentes niveles de complejidad y especialización. Su misión es ofrecer atención de calidad, oportuna y humanizada para contribuir a la recuperación y mantenimiento de la salud de la población.
        

    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 D. Administradora de los Recursos del Sistema General de Seguridad Social en Salud (ADRES) 
    p.mb-4  Administra y gestiona los recursos económicos destinados a financiar la prestación de los servicios de salud en el país. Esto incluye recaudar, administrar y distribuir los fondos provenientes de las diferentes fuentes de financiación, como las cotizaciones de los afiliados, las transferencias del Estado y otros recursos públicos o privados.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p La ADRES se encarga de realizar pagos a las Instituciones Prestadoras de Salud (IPS), por los servicios que brindan a los afiliados, asegurando que los recursos se asignen de manera eficiente y transparente. Además, tiene la responsabilidad de gestionar la información y los datos relacionados con la financiación del sistema, para facilitar la toma de decisiones y mejorar la eficiencia en la prestación de servicios.
        p Coordina y supervisa los procesos de pago y facturación entre las diferentes entidades del sistema, garantizando que los recursos lleguen a donde deben y en los tiempos adecuados. Trabaja en la implementación de políticas y estrategias para optimizar el uso de los recursos y promover la sostenibilidad del sistema de salud.

      .col-lg-5.col-md-10.col-sm-6.mb-md-4.mb-sm-4
          figure
            img(src='@/assets/curso/temas/tema5/img12.png', alt='Imagen decorativa')
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 E. Superintendencia Nacional de Salud 
    p Tiene la misión proteger los derechos de los usuarios del Sistema General de Seguridad Social en Salud, mediante la inspección, vigilancia, control y el ejercicio de la función jurisdiccional y de conciliación, de manera transparente y oportuna.
    p.mb-4 Sus objetivos institucionales son:
    .row.justify-content-center.mb-5
      .col-lg-6.col-sm-10(data-aos="fade-right")
        .tarjeta.color-primario.tarjcone.p-2.h-100
          .row
            .col-lg-2.col-4.mb-lg-0
              img(src='@/assets/curso/temas/tema5/img13.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 Consolidar la Superintendencia Nacional de Salud como un organismo técnico, rector del sistema de vigilancia, inspección y control.
      .col-lg-6.col-sm-10(data-aos="fade-right")
        .tarjeta.color-primario.tarjcone.p-2.h-100
          .row
            .col-lg-2.col-4.mb-lg-0
              img(src='@/assets/curso/temas/tema5/img14.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 Promover el mejoramiento de la calidad en la atención en salud.
      .col-lg-6.col-sm-10(data-aos="fade-right")
        .tarjeta.p-2.h-100
          .row
            .col-lg-2.col-4.mb-lg-0
              img(src='@/assets/curso/temas/tema5/img15.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 Fortalecer la inspección, vigilancia y control del aseguramiento en salud.
      .col-lg-6.col-sm-10(data-aos="fade-right")
        .tarjeta.p-2.h-100
          .row
            .col-lg-2.col-4.mb-lg-0
              img(src='@/assets/curso/temas/tema5/img16.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 Fortalecer a través de mecanismos de inspección, vigilancia y control (IVC), la oportunidad en la generación y flujo de los recursos del Sistema General de Seguridad Social en Salud y los regímenes especiales y exceptuados.
      .col-lg-6.col-sm-10(data-aos="fade-right")
        .tarjeta.color-primario.tarjcone.p-2.h-100
          .row
            .col-lg-2.col-4.mb-lg-0
              img(src='@/assets/curso/temas/tema5/img17.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 Promover y fortalecer la participación ciudadana para la defensa de los derechos de los usuarios del sector salud.
      .col-lg-6.col-sm-10(data-aos="fade-right")
        .tarjeta.color-primario.tarjcone.p-2.h-100
          .row
            .col-lg-2.col-4.mb-lg-0
              img(src='@/assets/curso/temas/tema5/img18.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 Adelantar los procesos de intervención forzosa administrativa aplicando mecanismos de seguimiento a los agentes interventores, liquidadores y contralores y realizar inspección, vigilancia y control a las liquidaciones voluntarias con el fin de proteger los derechos de los afiliados y recursos del sector salud.
      .col-lg-6.col-sm-10(data-aos="fade-right")
        .tarjeta.p-2.h-100
          .row
            .col-lg-2.col-4.mb-lg-0
              img(src='@/assets/curso/temas/tema5/img19.svg' alt="Imagen decorativa")
            .col-lg-10 
              p.mb-0 Proteger los derechos y reconocer las obligaciones y deberes de los distintos actores participantes en el sector salud, a través de las funciones jurisdiccionales y de conciliación.
      .col-lg-6.col-sm-10(data-aos="fade-right")
        .tarjeta.p-2.h-100
          .row
            .col-lg-2.col-4.mb-lg-0
              img(src='@/assets/curso/temas/tema5/img20.svg' alt="Imagen decorativa")
            .col-lg-10
              p.mb-0 Fortalecer la capacidad institucional de la Superintendencia Nacional de Salud.
      
    separador
    .tarjeta-BG02.lg-px-5.px-4
      .row.justify-content-center.align-items-center
        .col-lg-11
          #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
            h2 5.2	Sistema General de Pensiones colombiano
      .row.justify-content-center.align-items-center
        .col-lg-11
          p Es el conjunto de instituciones, normas y mecanismos diseñados para garantizar la protección social en forma de pensiones a los trabajadores y sus familias en Colombia. 
          p Su objetivo principal es asegurar que las personas puedan acceder a una pensión de jubilación, invalidez, vejez o sobrevivencia, que les permita mantener su nivel de vida después de terminar su vida laboral activa.
          p El sistema está compuesto por dos regímenes principales:
          .tarjeta--container.row.mb-5
            .col-md.tarjeta.color-primario.tarjcone.p-5
              .row.justify-content-center.mb-4
                .col-3
                  figure
                    img(src='@/assets/curso/temas/tema5/img21.svg', alt='Texto que describa la imagen')
              .row.justify-content-center.align-items-center
                .col-10
                  h4.text-center  Régimen de Prima Media con prestación definida (RPM)
                  p Administrado por Colpensiones, donde las pensiones se financian con las cotizaciones de los afiliados y el Estado garantiza un monto mínimo.
            .col-md.tarjeta.color-secundario.tarjcone.p-5
              .row.justify-content-center.mb-4
                .col-3
                  figure
                    img(src='@/assets/curso/temas/tema5/img22.svg', alt='Texto que describa la imagen')
              .row.justify-content-center.align-items-center
                .col-10
                  h4.text-center  Régimen de Ahorro Individual con Solidaridad (RAIS)
                  p Administrado por fondos privados, donde cada afiliado tiene una cuenta individual ahorrando para su propia pensión.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p Basado en lo anterior, los siguientes son los objetivos del Sistema General de Pensiones:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-8.col-sm-6.mb-md-4.mb-sm-4
          figure
            img(src='@/assets/curso/temas/tema5/img23.svg', alt='Texto que describa la imagen')
      .col-lg-6
        ul.lista-ul--color
          li
            i.fas.fa-angle-right
            | Garantizar la protección social en la vejez, invalidez y muerte.
          li
            i.fas.fa-angle-right
            | Promover la cobertura universal para todos los trabajadores.
          li
            i.fas.fa-angle-right
            | Fomentar la sostenibilidad financiera del sistema.
          li
            i.fas.fa-angle-right
            | Promover la equidad y justicia social en el acceso a las pensiones.
          li
            i.fas.fa-angle-right
            | Incentivar el ahorro previsional y la formalización laboral.
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .cajon.color-secundario.p-4
            p.mb-0 El Sistema General de Pensiones busca brindar seguridad económica a los colombianos en su etapa de retiro o en caso de invalidez, promoviendo un sistema solidario y sostenible.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3	Sistema General de Riesgos Profesionales
    p Es el conjunto de normas, instituciones y mecanismos destinados a proteger a los trabajadores frente a los riesgos derivados de su actividad laboral. Este sistema busca garantizar la atención y reparación en caso de accidentes de trabajo o enfermedades profesionales, promoviendo condiciones laborales seguras y saludables.
    P.mb-4  Es un componente del Sistema General de Seguridad Social en Colombia, que regula la protección de los trabajadores ante los riesgos asociados a su labor, incluyendo accidentes ocurridos en el lugar de trabajo y enfermedades relacionadas con la actividad laboral. Está administrado por las Administradoras de Riesgos Laborales (ARL), que son entidades encargadas de gestionar y financiar la prevención, atención y rehabilitación de estos riesgos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-10.col-6.mb-4
        figure
          img(src='@/assets/curso/temas/tema5/img24.png', alt='Texto que describa la imagen')

      .col-lg-7
        p Los objetivos del Sistema General de Riesgos Profesionales son:
        ul.lista-ul--color
          li
            i.fas.fa-hand-point-right
            | Proteger la integridad física y mental de los trabajadores frente a los riesgos laborales.
          li
            i.fas.fa-hand-point-right
            | Prevenir accidentes y enfermedades profesionales mediante acciones preventivas.
          li
            i.fas.fa-hand-point-right
            | Brindar atención médica, rehabilitación y compensación económica en caso de accidentes o enfermedades laborales.
          li
            i.fas.fa-hand-point-right
            | Promover ambientes laborales seguros y saludables.
          li
            i.fas.fa-hand-point-right
            | Garantizar la protección social y económica a los trabajadores afectados por riesgos profesionales.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p El Sistema General de Riesgos Profesionales, busca reducir la incidencia de riesgos laborales, proteger a los trabajadores en caso de incidentes relacionados con su trabajo y promover condiciones laborales seguras para mejorar la calidad de vida laboral.


    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4	Servicios sociales complementarios
    p Son un conjunto de beneficios y apoyos adicionales que complementan la protección social brindada por los sistemas de seguridad social, como el de pensiones, riesgos profesionales y salud. Estos servicios buscan mejorar la calidad de vida de las personas y sus familias, especialmente en situaciones de vulnerabilidad o necesidad.
    p.mb-4 Son programas, ayudas o beneficios que no forman parte del sistema obligatorio de seguridad social, pero que se ofrecen para atender necesidades sociales específicas. Pueden incluir asistencia en educación, vivienda, alimentación, apoyo psicológico, atención a adultos mayores, discapacidad u otras áreas que contribuyen al bienestar integral de las personas.
    .tarjeta-BG02.lg-px-5.px-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.order-lg-1.order-2
          p Los objetivos de los servicios sociales complementarios son:
          ul.lista-ul--color
            li
              i.fas.fa-angle-right
              | Brindar apoyo adicional a quienes enfrentan dificultades sociales o económicas.
            li
              i.fas.fa-angle-right
              | Promover la inclusión social y reducir desigualdades.
            li
              i.fas.fa-angle-right
              | Mejorar las condiciones de vida y bienestar de las comunidades vulnerables.
            li
              i.fas.fa-angle-right
              | Complementar la protección social formal con acciones que aborden necesidades sociales específicas.
            li
              i.fas.fa-angle-right
              | Fomentar la participación comunitaria y el desarrollo social.

        .col-lg-5.col-md-10.col-sm-6.mb-md-4.mb-sm-4.order-lg-2.order-1
          figure
            img(src='@/assets/curso/temas/tema5/img25.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4
          p Los servicios sociales complementarios buscan ofrecer una atención integral que vaya más allá de la protección económica o sanitaria básica, promoviendo un desarrollo humano más completo y equitativo.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p Algunos ejemplos de los servicios sociales complementarios en Colombia, se pueden establecer, a través de:
    .tarjeta--BG056
      .row.justify-content-center.align-items-center
        .col-lg-10
          PasosA.color-acento-contenido.mb-5(tipo="l")
            .row(titulo="")
              .col-md-12.mb-4.mb-md-0
                h4 Programas de alimentación y nutrición
                p Distribución de alimentos o suplementos alimenticios para comunidades vulnerables, niños, adultos mayores o personas en situación de pobreza.
            .row(titulo="")
              .col-md-12.mb-4.mb-md-0
                h4 Atención psicosocial
                p.izquierda Servicios de orientación, apoyo psicológico y social para personas afectadas por situaciones de violencia, discapacidad, adicciones o crisis familiares.
            .row(titulo="")
              .col-md-12.mb-4.mb-md-0
                h4 Atención a adultos mayores
                p Programas específicos que ofrecen acompañamiento, atención médica y actividades recreativas para personas mayores.
            .row(titulo="")
              .col-md-12.mb-4.mb-md-0
                h4 Rehabilitación e inclusión social
                p.izquierda Servicios dirigidos a personas con discapacidad para facilitar su integración social y laboral.
            .row(titulo="")
              .col-md-12.mb-4.mb-md-0
                h4 Apoyo en salud mental
                p Programas que brindan atención especializada para problemas emocionales o psicológicos derivados de condiciones sociales o personales.

    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5	Servicio de salud en Colombia
    p Es el conjunto de acciones y recursos destinados a garantizar la atención integral en salud a toda la población del país, promoviendo la prevención, recuperación y rehabilitación de la salud.
    p.mb-4 Las siguientes son las características del servicio de salud:
    .row.justify-content-center.mb-5
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-right")
        .tarjeta.BG03.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema5/img26.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Universalidad
              p.mb-0 Está dirigida a toda la población sin discriminación.
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-left")
        .tarjeta.BG03.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema5/img27.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Integralidad
              p.mb-0 Incluye promoción, prevención, tratamiento, rehabilitación y cuidados paliativos.
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-left")
        .tarjeta.BG03.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema5/img28.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Accesibilidad
              p.mb-0 Los servicios deben estar disponibles y ser fáciles de acceder para todos.
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-left")
        .tarjeta.BG03.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema5/img29.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Equidad
              p.mb-0 Busca reducir desigualdades en el acceso y calidad del servicio.
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-left")
        .tarjeta.BG03.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema5/img30.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Participación social
              p.mb-0 La comunidad tiene un rol activo en la gestión y evaluación del sistema.
      .col-lg-6.col-sm-10.mb-4(data-aos="fade-left")
        .tarjeta.BG03.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema5/img31.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Financiación solidaria
              p.mb-0 Se financia mediante aportes del Estado, cotizaciones y recursos privados.
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 A.	Tipos de servicios de salud
    p A continuación, se describen los principales tipos de servicios de salud, desde la prevención de enfermedades hasta la atención de pacientes con condiciones crónicas o terminales:

    .row.mb-4
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Servicios preventivos 
          p.text-center Programas de vacunación, control prenatal, campañas de salud pública.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Servicios curativos
          p.text-center Atención médica en consultorios, hospitales, clínicas; cirugías; medicamentos.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Servicios de rehabilitación
          p.text-center Fisioterapia, terapia ocupacional, atención a discapacidades.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-adicional.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Servicios paliativos
          p.text-center Cuidados para pacientes con enfermedades terminales o crónicas avanzadas.
    p.mb-4 Dentro del sistema de salud, es importante tener presente que los usuarios tienen unos derechos y deberes, los cuales se relacionan por medio de la siguiente figura:
    
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 1.
      span  #[i Derechos y deberes del usuario en el sistema de salud ]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img32_1.svg', alt='Figura 1 que relaciona un listado de los derechos y deberes que debe tener en cuenta un usuario adscrito al Sistema de salud en Colombia.')
      .col-lg-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema5/img32.svg', alt='Figura 1 que relaciona un listado de los derechos y deberes que debe tener en cuenta un usuario adscrito al Sistema de salud en Colombia.')


    separador
    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.6	Acceso al Sistema General de Seguridad Social en Salud (SGSSS)
    p En Colombia, es el proceso mediante el cual las personas pueden beneficiarse de los servicios de salud garantizados por la ley. Este acceso está regulado para asegurar que toda la población, independientemente de su condición socioeconómica, pueda recibir atención oportuna y de calidad.
    p.mb-4 El acceso al sistema esta mediado por:
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 A.	Afiliación
    p.mb-4 La persona debe estar afiliada a una Entidad Promotora de Salud (EPS). La afiliación puede ser por medio del empleador, de manera individual o a través del régimen subsidiado si no tiene capacidad de cotizar.
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 B.	Afiliación al régimen
    p.mb-4  Existen dos regímenes principales:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img33.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              h5  Contributivo
              P Está dirigido principalmente a trabajadores formales, independientes y empleadores que puedan realizar cotizaciones; es decir, para quienes tienen capacidad de pagar.
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img34.svg' alt='AvatarTop')
          .tarjeta.tarjeta--verde
            .p-4
              h5 Subsidiado
              P Está dirigido a personas en situación de pobreza o vulnerabilidad, las cuales no pueden pagar aportes y es financiado por el Estado.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p Los requisitos de afiliación al sistema de salud colombiano varían según el régimen en el que se inscriba la persona. 
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 C.	Régimen contributivo
    .tarjeta--BG056
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-11
          p.mb-4 Hacen parte de este régimen, los siguientes requisitos generales:
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9
          .cronologia.mb-5
            .contenedor
              .tarjeta-evento.tarjeta-evento--paso1(data-aos="fade-left")
                .tarjeta-titulo
                  .cajon-numero
                    span 01
                  h4.p-2 Documento de identidad
                .tarjeta-cuerpo.p-4
                  ul.lista-ul--color
                    li
                      i.fas.fa-angle-right
                      | Cédula de ciudadanía (para mayores de 18 años).
                    li
                      i.fas.fa-angle-right
                      | Tarjeta de identidad (para menores de edad).
                    li
                      i.fas.fa-angle-right
                      | NIT o documento equivalente si es independiente o empleador.
              .tarjeta-evento.tarjeta-evento--paso2(data-aos="fade-right")
                .tarjeta-titulo
                  .cajon-numero(style="background-color: #D1F3F5")
                    span 02
                  h4 Afiliación a una EPS
                .tarjeta-cuerpo
                  p.mb-0 Elegir una Entidad Promotora de Salud (EPS) y solicitar la afiliación.
              .tarjeta-evento.tarjeta-evento--paso3(data-aos="fade-left")
                .tarjeta-titulo
                  .cajon-numero(style="background-color: #E2DDF5")
                    span 03
                  h4 Pago de cotizaciones
                .tarjeta-cuerpo
                  p.mb-0 Realizar las cotizaciones mensuales según el ingreso declarado o establecido por la ley.
              .tarjeta-evento.tarjeta-evento--paso4(data-aos="fade-right")
                .tarjeta-titulo
                  .cajon-numero(style="background-color: #DDF1FF")
                    span 04
                  h4 Información adicional
                .tarjeta-cuerpo
                  p.mb-0 Datos personales, dirección y contacto.
    .titulo.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/icono.svg', alt='Imagen decorativa')
      h5.mb-0 D.	Régimen subsidiado
    p.mb-4 De igual manera, este régimen posee unos requisitos generales, que tienen alguna similitud con los contributivos, pero también tienen unas acciones específicas:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Certificación de condición socioeconómica")
            .col-md-12.mb-4.mb-md-0
              p Obtener un certificado del Sisbén (Sistema de Identificación y Selección de Beneficiarios para Programas Sociales) que acredite la condición socioeconómica y la vulnerabilidad social.
          .row(titulo="Documento de identidad")
            .col-md-12.mb-4.mb-md-0
              p Cédula, tarjeta de identidad u otro documento válido.
          .row(titulo="Formulario de afiliación")
            .col-md-12.mb-4.mb-md-0
              p Completar el formulario proporcionado por la EPS o el municipio correspondiente.
          .row(titulo="Registro en el sistema")
            .col-md-12.mb-4.mb-md-0
             ul.lista-ul--color
              li
                i.fas.fa-check
                | Inscripción en el sistema del Sistema General de Seguridad Social en Salud, mediante las entidades territoriales o directamente en las EPS autorizadas.
              li
                i.fas.fa-check
                | Requisitos comunes para ambos regímenes.
              li
                i.fas.fa-check
                | Documento de identificación válido.
              li
                i.fas.fa-check
                | Información personal actualizada.
              li
                i.fas.fa-check
                | Cumplir con los requisitos específicos del régimen correspondiente (como certificaciones sociales en el caso del subsidiado).
              li
                i.fas.fa-check
                | La afiliación puede realizarse en línea, presencialmente en las oficinas de las EPS o a través de los puntos autorizados por las autoridades locales o nacionales, dependiendo del régimen y la región.

      .col-lg-4.col-md-8.col-sm-3.order-lg-2.order-1.mb-md-4
        figure
          img(src='@/assets/curso/temas/tema5/img35.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema5',
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
