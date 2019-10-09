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
            <div class="artist__info__type">Movie</div>
            <div class="artist__info__name">{{title}}</div>
            <div class="artist__info__actions">
              <button class="button-dark">
                <i class="ion-ios-play"></i>
                Play
              </button>
              <a :href="'https://www.imdb.com/find?ref_=nv_sr_fn&q=' + title + '&s=all'"> <button class="button-light">IMDb</button></a>
              <button class="button-light more">
                <i class="ion-ios-more"></i>
              </button>
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
              <img :src="creator_member.creator.poster" :alt="creator_member.creator.name">
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
                <select select class="" style="width: 100px;" v-model="option">
                  <option disabled value="">Videos</option>
                  <option v-for="(video , index) in movie_video.map(xs => xs.iframe)"
                    :value="video"
                    :key="index"
                  >
                    {{ video.video_iframe }}
                </option>
              </select>

               <iframe 
                height="50%"
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
                <div class="section-title">fecha de publicación</div>
                <div class="latest-release">
                  <div class="latest-release__song">
                    <div class="latest-release__song__title">{{air_date}}</div>
                  </div>
                </div>
                 <div class="section-title">Tiempo de ejecución</div>
                <div class="latest-release">
                  <div class="latest-release__song">
                    <div class="latest-release__song__title">{{runtime}}</div>
                  </div>
                </div>
                <div class="section-title">Año de publicación</div>
                <div class="latest-release">
                  <div class="latest-release__song">
                    <div class="latest-release__song__title">{{year}}</div>
                  </div>
                </div>
                <div class="section-title">Clasificado</div>
                <div class="latest-release">
                  <div class="latest-release__song">
                    <div class="latest-release__song__title">{{rated}}</div>
                  </div>
                </div>
                 <div class="section-title">Puntuación</div>
                <div class="latest-release">
                  <div class="latest-release__song">
                    <div class="latest-release__song__title">{{rating}}</div>
                  </div>
                </div>
                <div class="section-title">Reparto</div>
                <div class="latest-release">
                  <div class="latest-release__song">
                    <div class="latest-release__song__title">
                      
                      <div class="related-artists" v-for="(member, index) in members_list.members_list[0].members_info" :key="index">
                        <div class="related-artist">
                          <span class="related-artist__img">
                            <img :src="member.poster" :alt="member.characters.real_name">
                          </span>
                          <h5 class="related-characters">{{member.characters.real_name}}</h5>
                        </div>
                      </div>



                      </div>
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
  name: "MovieVideo",
  setup() {
    const store = useStore();
    const { route } = useRouter();

    const state = {
      ...useState(["movie_video", "isLoading"])
    };
    
    const params = {
      id: value(route.value.params.id),
      title: value(route.value.params.title),
      poster: value(route.value.params.poster),
      rating: value(route.value.params.rating),
      year: value(route.value.params.year),
      quality: value(route.value.params.quality),
      sinopsis: value(route.value.params.sinopsis),
      extra: value(route.value.params.extra)
    };
    
    const values = {
      id: params.id.value,
      title: params.title.value,
      poster: params.poster,
      year: params.year.value,
      rating: params.rating,
      quality: params.quality.value,
      sinopsis: params.sinopsis,
      creator_member: params.extra.value[0].cast_members,
      members_list: params.extra.value[0].cast_members,
      air_date: params.extra.value[0].air_date,
      runtime: params.extra.value[0].runtime,
      country: params.extra.value[0].country,
      rated: params.extra.value[0].rated,
    };
    
    const option = value("");
    
    onCreated(() =>{
      store.value.dispatch("GET_VIDEO_MOVIES" , values.id);
    });

    return {
      ...state,
      ...values,
      option
    };
  }
};
</script>
