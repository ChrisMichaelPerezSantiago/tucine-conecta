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
          <div class="artist__listeners__label">Canal {{channel}}</div>
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
                <select class="" v-model="season_selected">
              <option disabled value="">Temporadas</option>
              <option  v-for="(season , index) in Array.from({length: total_seasons}, (v , k) => k + 1)" :value="season" :key="index">
                {{ season }}
              </option>
              </select>
              <select class="" v-model="episode_selected">
                <option disabled value="">Episodios</option>
                <option v-for="(season , index) in bySeason[season_selected].episodes" :value="season" :key="index">
                  {{ season }}
              </option>
              </select>
              <select class="" style="width: 100px;" v-model="option">
                <option disabled value="">Videos</option>
                <option v-for="(video , index) in video_series.map(xs => xs.iframe)" :value="video" :key="index">
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
                <div class="section-title">Fecha de inicio</div>
                <div class="latest-release">
                  <div class="latest-release__song">
                    <div class="latest-release__song__title">{{first_air_date}}</div>
                  </div>
                </div>
                <div class="section-title">Fecha de última transmisión</div>
                <div class="latest-release">
                  <div class="latest-release__song">
                    <div class="latest-release__song__title">{{last_air_date}}</div>
                  </div>
                </div>
                 <div class="section-title">Temporadas</div>
                <div class="latest-release">
                  <div class="latest-release__song">
                    <div class="latest-release__song__title">{{total_seasons}}</div>
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
  import {value , watch} from 'vue-function-api';
  import {useState , useStore , useRouter} from '@u3u/vue-hooks';

  export default{
    name: 'SerieVideo',
    setup(){
      const store = useStore();
      const {route} = useRouter();

      const state = {
        ...useState(['video_series' , 'isLoading'])
      };

      const params = {
        id: value(route.value.params.id),
        title: value(route.value.params.title),
        poster: value(route.value.params.poster),
        year: value(route.value.params.year),
        rating: value(route.value.params.rating),
        sinopsis: value(route.value.params.sinopsis),
        extra: value(route.value.params.extra)
      };

      const values = {
        title: params.title.value,
        poster: params.poster.value,
        rating: params.rating.value,
        year: params.year.value,
        sinopsis: params.sinopsis.value,
        channel: params.extra.value[0].channel,
        first_air_date: params.extra.value[0].first_air_date.replace('First air date' , ''),
        last_air_date: params.extra.value[0].last_air_date.replace('Última transmisión' , ''),
        creator_member: params.extra.value[0].cast_members,
        members_list: params.extra.value[0].cast_members,
        total_seasons: params.extra.value[0].season_list.length,
        season_list: params.extra.value[0].season_list,
        //similar_series: params.extra.value[0].similar_series
      };
      
      const season_selected = value("1");
      const episode_selected = value("");
      const season_list = values.season_list;
      const episodesList = value([]);
      const similar_series = values.similar_series
      const id = value(null)
      const option = value("");
      
      const bySeason = season_list.reduce((byId , seasons) =>{
        byId[seasons.season] = seasons
        return byId
      } , {});


      watch(() =>
        episode_selected.value , (value) =>{
          episode_selected.value = value;
          const eps = episode_selected.value;
          const id = `${params.id.value.replace('ver-' , '')}-${eps}`
          store.value.dispatch("GET_VIDEO_SERIES" , id)
        }
      );
      
      return{
        ...state,
        ...values,
        option,
        season_selected,
        episode_selected,
        bySeason,
        episodesList: episodesList.value,
        //similar_series
      }
    }
  }
</script>
