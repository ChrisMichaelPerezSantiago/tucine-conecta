<template>
  <section class="content">
    <div class="content__left">
      <section class="navigation">
        <div class="navigation__list">

          <div class="navigation__list__header" 
            role="button" 
            data-toggle="collapse" 
            href="#main" 
            aria-expanded="true" 
            aria-controls="main">
            Inicio
          </div>
          
          <div class="collapse in" id="main">
            <router-link to="#" class="navigation__list__item">
              <i class="ion-ios-browsers"></i>
              <span>Series</span>
            </router-link>

            <router-link to="#" class="navigation__list__item">
              <i class="ion-ios-list"></i>
              <span>Episodios</span>
            </router-link>

            <router-link to="#" class="navigation__list__item">
              <i class="ion-ios-play"></i>
              <span>Peliculas</span>
            </router-link>
          </div>

        </div>

        <div class="navigation__list">
          <div class="navigation__list__header" 
            role="button" 
            data-toggle="collapse" 
            href="#yourMusic" 
            aria-expanded="true" 
            aria-controls="yourMusic">
            Generos
          </div>
          
          <div class="collapse in" id="yourMusic">
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'accion'}}">accion</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'accion-aventura'}}">accion-aventura</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'action'}}">action</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'action-adventure'}}">action-adventure</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'adventure'}}">adventure</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'animacion'}}">animacion</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'aventura'}}">aventura</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'belica'}}">belica</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'biografia'}}">biografia</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'ciencia-ficcion'}}">ciencia-ficcion</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'comedia'}}">comedia</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'comedy'}}">comedy</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'crimen'}}">crimen</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'deportes'}}">deportes</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'documental'}}">documental</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'drama'}}">drama</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'estrenos'}}">estrenos</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'familia'}}">familia</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'family'}}">family</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'fantasia'}}">fantasia</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'guerra'}}">guerra</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'historia'}}">historia</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'horror'}}">horror</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'misterio'}}">misterio</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'musica'}}">musica</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'mystery'}}">mystery</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'pelicula-de-la-television'}}">pelicula-de-la-television</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'pelicula-de-tv'}}">pelicula-de-tv</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'proximos-estrenos'}}">proximos-estrenos</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'reality'}}">reality</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'sci-fi-fantasy'}}">sci-fi-fantasy</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'soap'}}">soap</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'suspense'}}">suspense</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'suspenso'}}">suspenso</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'talk'}}">talk</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'terror'}}">terror</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'war-politics'}}">war-politics</router-link>
            <router-link class="navigation__list__item" :to="{name: 'ByGenre' , params:{genres:'western'}}">western</router-link>
            
          </div>
        </div>
      </section>
    </div>
  </section>
</template>