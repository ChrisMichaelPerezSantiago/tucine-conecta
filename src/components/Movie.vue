<template>
  <router-link :to="{name: 'MovieVideo' , params:{id: movie.id , title: movie.title , rating: movie.rating ,  poster: movie.poster, quality: movie.quality , sinopsis: movie.sinopsis , year: movie.year , extra: movie.extra}}">
    <div class="track">
       <div class="track__art">
          <img :src="movie.poster" :alt="movie.title" />
        </div>
    <div class="track__number">{{index}}</div>
    <div class="track__added"> 
      <i class="ion-checkmark-round added"></i>
    </div>
    <div class="track__title">{{movie.title}}</div>
    <div class="track__explicit">
      <span class="label"><i class="ion-ios-star"></i>rating {{movie.rating}}</span>
    </div>
    <div class="track__length">{{movie.year}}</div>
    <div class="track__popularity">
       <i class="ion-arrow-graph-up-right"></i>
    </div>
    </div>
  </router-link>
</template>


<script>
  import {value} from 'vue-function-api';

  export default{
    name: 'Movie',
    props:{
      movies: Object,
      indexing: Number
    },
    setup(props){
      const movie = value(props.movies);
      const index = value(props.indexing + 1)
  
      return{
        movie,
        index
      }
    },
  };
</script>