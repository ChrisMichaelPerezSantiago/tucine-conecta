<template>
    <router-link :to="{name: 'EpisodeVideo' , params:{id: episode.id , title: episode.title , date: episode.date , episode_name: episode.episode_name , poster: episode.poster , quality: episode.quality , sinopsis: episode.sinopsis}}">
     <div class="track">
        <div class="track__art">
          <img :src="episode.poster" :alt="episode.title" />
        </div>
        <div class="track__number">{{index}}</div>
        <div class="track__added">
          <i class="ion-checkmark-round added"></i>
        </div>
        <div class="track__title">{{episode.title}}</div>
          <div class="track__explicit">
            <span class="label">{{episode.episode_name}}</span>
          </div>
        <div class="track__plays">{{episode.date}}</div>
      </div>
  </router-link>
</template>

<script>
  import { value } from "vue-function-api"; 
  export default {
    name: "Episodes",
    props: {
      episodes: Object,
      indexing: Number
    },
    setup(props) {
      const episode = value(props.episodes);
      const index = value(props.indexing + 1)

      return {
        episode,
        index
      };
    }
  };
</script>