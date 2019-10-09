<template>
  <section id="footer" class="header">  
    <div class="search">
      <div id="copyright">
        <span>© {{year}} Tu Cine Conecta , Todos los derechos reservados</span>
        <p class="font-italic">Ningúno de los vídeos se encuentra alojado en servidores.</p>
        <br>
         <span class="user__info__name">
          <span class="first">v{{version}}</span>
        </span>
        <br/>
        <span class="user__info__name">
          <span class="first"><a :href="api_url">Cinemanight API</a></span>
        </span>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    setup(){
      const values = {
        year: new Date().getFullYear(),
        version: require('../../package.json').version,
        api_url: "https://github.com/ChrisMichaelPerezSantiago/cinemanight"
      };
      return{
        ...values
      }
    }
  }
</script>

