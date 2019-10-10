<template>
  <section class="content">
    <div class="content__middle">
    <div class="artist is-verified">   
      <div class="artist__header" :style="{ backgroundImage: 'url(' + poster + ')' , opacity: 0.8 , width: '100%'}">     
        <div class="artist__info">     
          <div class="profile__img">       
            <img :src="poster" alt="G-Eazy" />           
          </div>
          
          <div class="artist__info__meta">
            <div class="artist__info__type">Serie</div>
            <div class="artist__info__name">{{title}}</div>
            <div class="artist__info__actions">
              <!--
              <button class="button-dark">
                <i class="ion-ios-play"></i>
                Play
              </button>
              -->
              <a :href="'https://www.imdb.com/find?ref_=nv_sr_fn&q=' + title + '&s=all'"> <button class="button-light">IMDb</button></a>
              <!--
              <button class="button-light more">
                <i class="ion-ios-more"></i>
              </button>
              -->
            </div>
            
          </div>
          
          
        </div>
        
        <div class="artist__listeners">
          <div class="artist__listeners__count"></div>
          <div class="artist__listeners__count"></div>
          <div class="artist__listeners__label">Calidad {{quality}}</div>
        </div>
        
        <div class="artist__navigation">
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active">
              <a href="#artist-overview" aria-controls="artist-overview" role="tab" data-toggle="tab">Información</a>
            </li>
          </ul>
          <div class="artist__navigation__friends">
          </div>
        </div>  
      </div>

      
        <div class="artist__content">
        <div class="tab-content">
          <!-- Overview -->
          <div role="tabpanel" class="tab-pane active" id="artist-overview">
            <div class="overview">
              <div class="overview__artist">
                <!-- Latest Release-->
                <select class="container" v-model="option" style="width: 100px;">
                  <option disabled value="">Videos</option>
                  <option v-for="(video , index) in video_series.map(xs => xs.iframe)"
                    :value="video"
                    :key="index"
                  > 
                    {{ video.video_iframe }}
                  </option>
                </select>
               <iframe 
                 height="100%"
                width="144%"
                style="background-color:black;" 
                class="embed-responsive-item" 
                id="_video" 
                :src="option.video_iframe"
                frameborder="0"
                allowfullscreen
                >
              </iframe>
              <br><br>
    
                <div class="section-title">Sinopsis</div>
                <div class="latest-release">
                  <div class="latest-release__song">
                    <div class="latest-release__song__title">{{sinopsis}}</div>
                  </div>
                </div>
                <div class="section-title">Titulo de la serie</div>
                <div class="latest-release">
                  <div class="latest-release__song">
                    <div class="latest-release__song__title">{{title}}</div>
                  </div>
                </div>
                <div class="section-title">Titulo del episodio</div>
                <div class="latest-release">
                  <div class="latest-release__song">
                    <div class="latest-release__song__title">{{episode_name}}</div>
                  </div>
                </div>
                 <div class="section-title">Fecha de transmisión</div>
                <div class="latest-release">
                  <div class="latest-release__song">
                    <div class="latest-release__song__title">{{date}}</div>
                  </div>
                </div>
              
                
                  </div>
                </div>
                <!-- / -->
              </div>
            </div>
          </div>
        </div>
      </div>


  </section>  
</template>



<script>
import { value, watch , onCreated } from "vue-function-api";
import { useState, useStore, useRouter } from "@u3u/vue-hooks";

export default {
  name: "EpisodeVideo",
  setup() {
    const store = useStore();
    const { route } = useRouter();
    
    const state = {
      ...useState(["video_series", "isLoading"])
    };
    
    const params = {
      id: value(route.value.params.id),
      title: value(route.value.params.title),
      poster: value(route.value.params.poster),
      date: value(route.value.params.date),
      episode_name: value(route.value.params.episode_name),
      episode_poster: value(route.value.params.poster),
      quality: value(route.value.params.quality),
      sinopsis: value(route.value.params.sinopsis)
    };
    
    const values = {
      id: params.id.value,
      title: params.title.value,
      poster: params.poster.value,
      date: params.date.value,
      episode_name: params.episode_name.value,
      episode_poster: params.episode_poster.value,
      quality: params.quality.value,
      sinopsis: params.sinopsis.value
    };
    
    const option = value("");
    
    
    onCreated(() =>{
      store.value.dispatch("GET_VIDEO_SERIES" , values.id);
    });

    return {
      ...state,
      ...values,
      option
    };
  }
};
</script>