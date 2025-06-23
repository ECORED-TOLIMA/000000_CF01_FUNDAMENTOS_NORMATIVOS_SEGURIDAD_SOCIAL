<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p Este componente formativo tiene como propósito capacitar a los participantes en la caracterización de usuarios del El Sistema General de Seguridad Social en Salud (SGSSS) de Colombia, considerando sus condiciones socioeconómicas y la normativa vigente. Se abordarán conceptos fundamentales del sistema, incluyendo sus regímenes, principios, actores y funciones, así como el marco normativo que lo rige. Además, se enfatizará en la aplicación de protocolos de atención, técnicas de comunicación asertiva y estrategias para el manejo de conflictos, con el fin de garantizar un servicio de calidad y humanizado. Los aprendices desarrollarán habilidades para identificar diferentes tipos de usuarios, establecer su perfil según condiciones socioeconómicas y normativa y atenderlos de manera efectiva. Este enfoque integral busca fortalecer competencias que contribuyan a mejorar la experiencia del usuario y la eficiencia en la prestación de servicios de salud en Colombia.
        p Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo:

      .col-lg-5
        figure
          img(src='@/assets/curso/intro/img1.jpg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="1495" height="841" src="https://www.youtube.com/embed/mKkgalmKPH4" title="Fundamentos normativos de seguridad social" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
