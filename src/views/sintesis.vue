<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Al caracterizar adecuadamente a los usuarios, se pueden identificar sus particularidades y demandas específicas, facilitando una atención más efectiva y ajustada a sus realidades. Esto no solo garantiza el respeto por los derechos de los pacientes, sino que también promueve la igualdad en el acceso a los servicios de salud, independientemente de su condición socioeconómica. Además, al aplicar correctamente el marco normativo del Sistema General de Seguridad Social Integral, se asegura que la atención sea conforme a las regulaciones vigentes, fortaleciendo la confianza en el sistema y promoviendo una cultura de respeto y dignidad.
    p La correcta caracterización y comprensión del contexto social y legal permite resolver con mayor eficacia las necesidades y demandas de los usuarios, mejorando la calidad del servicio y contribuyendo a la sostenibilidad del sistema de salud.

    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo Fundamentos normativos de seguridad social, se define lo que tienen que ver con el Sistema General de Seguridad Social en Salud (SGSSS), tratando sus principios rectores del sistema y se explica lo que tiene que ver con los usuarios existentes; además, se relacionan los diferentes tipos de sistemas existentes y los actores que están presentes en ellos y se finaliza tratando de manera general, el marco normativo que regula el sistema de salud en Colombia.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
