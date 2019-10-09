<template>
  <router-link :to="{name: 'SerieVideo' , params:{id: serie.id , rating: serie.rating , year: serie.year, poster: serie.poster, title: serie.title , sinopsis: serie.sinopsis , extra: serie.extra}}">
     <div class="track">
        <div class="track__art">
          <img :src="serie.poster" :alt="serie.title" />
        </div>
        <div class="track__number">{{index}}</div>
        <div class="track__added">
          <i class="ion-checkmark-round added"></i>
        </div>
        <div class="track__title">{{serie.title}}</div>
          <div class="track__explicit">
            <span class="label"><i class="ion-ios-star"></i>rating {{serie.rating}}</span>
          </div>
        <div class="track__plays">{{serie.year}}</div>
      </div>
  </router-link>
</template>

<script>
  import {value} from 'vue-function-api';

  export default{
    name: 'Series',
    props:{
      series: Object,
      indexing: Number
    },
    setup(props){
      const serie = value(props.series);
      const index = value(props.indexing + 1)
      return{
        serie,
        index
      }
    },
  };
</script>