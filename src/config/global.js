export default {
  global: {
    componenteFormativo: 'Fundamentos normativos de seguridad social',
    descripcionCurso:
      'Este componente introduce a los aprendices en los conceptos fundamentales del marco normativo de la seguridad social en salud, proporcionando una base sólida sobre su importancia en el desarrollo de las actividades. Se explorarán los principios del derecho y las normas que rigen la seguridad social en salud de Colombia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistema General de Seguridad Social en Salud (SGSSS)',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Principios rectores del sistema',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La protección social del sistema de salud colombiano',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Usuarios del Sistema General de Seguridad Social en Salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Usuarios internos del sistema de salud colombiano',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Usuarios externos del sistema de salud colombiano',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Derecho a la salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Conformación Sistema General de Seguridad Social en Salud',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Sistema General de Pensiones colombiano',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Sistema General de Riesgos Profesionales',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Servicios sociales complementarios',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Servicio de salud en Colombia',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo:
              'Acceso al Sistema General de Seguridad Social en Salud (SGSSS)',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Tipos de usuario en el sistema de salud en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Usuarios internos del sistema de salud colombiano',
            hash: 't_6_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_01_00000000_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '5.1. Conformación Sistema General de Seguridad Social en Salud',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2024). Sistema general en salud en Colombia para los regímenes contributivo y subsidiado. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BBCvcTlDNds',
    },
    {
      tema: '6.1. Marco normativo del sistema de salud colombiano',
      referencia:
        'Ministerio de Salud y Protección Social. (1993). Ley 100 de 1993, por la cual se establece el sistema de seguridad social en salud y se dictan otras disposiciones.',
      tipo: 'Ley',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-100-de-1993.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Afiliación',
      significado:
        'es el proceso mediante el cual las personas se inscriben formalmente en el sistema, ya sea en el régimen contributivo, para quienes tienen capacidad de pago o en el régimen subsidiado, dirigido a las personas en situación de pobreza o vulnerabilidad.',
    },
    {
      termino: 'Aseguramiento',
      significado:
        'se refiere a la protección que recibe una persona o familia, mediante un seguro, el cual les ayuda a cubrir los costos de atención médica cuando lo necesitan.',
    },
    {
      termino: 'Entidades Promotoras – EPS',
      significado:
        'son organizaciones encargadas de administrar y gestionar los seguros de salud. Su función principal es inscribir a las personas en un plan de salud, ofrecerles la cobertura y coordinar los servicios médicos que necesitan.',
    },
    {
      termino: 'Plan de beneficios',
      significado:
        'conjunto de servicios y coberturas que una Entidad Promotora de Salud (EPS) ofrece a sus afiliados.',
    },
    {
      termino: 'Prestadores de servicios',
      significado:
        'son las instituciones, profesionales o entidades que ofrecen atención médica y servicios relacionados para cuidar y mejorar la salud de las personas. Esto puede incluir hospitales, clínicas, médicos, enfermeros, laboratorios, farmacias, entre otros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía de Cali. (s.f.). Principios del Sistema General de Seguridad Social en Salud. Secretaría de Salud Pública.',
      link:
        'https://www.cali.gov.co/salud/publicaciones/52436/principios-del-sistema-general-de-seguridad-social-en-salud/',
    },
    {
      referencia:
        'Gañán Echavarría, J. L. (2013). De la naturaleza jurídica del derecho a la salud en Colombia. Ministerio de Salud y Protección Social.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/IA/SSA/naturaleza-juridica-derecho-salud-colombia.pdf',
    },
    {
      referencia:
        'Superintendencia Nacional de Salud. (2025). Misión y visión.',
      link:
        'https://www.supersalud.gov.co/es-co/nuestra-entidad/estructura-organica-y-talento-humano/mision-y-vision',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Christian Llano Villegas',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },

        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
