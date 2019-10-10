
<template>
    <section class="content">
        <div class="content__middle">
            <div class="artist is-verified">

            <div class="artist__header">
              <div class="artist__navigation">
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active">
                    <a data-toggle="tab">
                      <router-link :to="{name: 'home'}">Explora</router-link>
                    </a>
                  </li>
                  <li role="presentation">
                    <a data-toggle="tab">
                      <router-link :to="{name: 'SeriesList'}">Series</router-link>
                    </a>
                  </li>
                  <li role="presentation">
                    <a data-toggle="tab">
                      <router-link :to="{name: 'MovieList'}">Películas</router-link>
                    </a>
                  </li>
                    <li role="presentation">
                    <a data-toggle="tab">
                      <router-link :to="{name: 'EpisodesList'}">Episodios</router-link>
                    </a>
                  </li>
                  <li role="presentation">
                    <a data-toggle="tab">
                      <router-link :to="{name: 'ContentSearched'}">Buscador</router-link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <br>
            <br>

                <div class="artist__content">
                    <div class="tab-content">
                        <!-- Overview -->
                        <div role="tabpanel" class="tab-pane active" id="artist-overview">
                            <div class="overview">
                                <div class="overview__artist">

                                   <div class="album__info">
                                      <div class="album__info__art">
                                        <img class="section-img" 
                                          src="../assets/img/background.jpg"
                                        />
                                      </div>

                                      <div class="album__info__meta">
                                          <div class="album__year">SERIES MAS RECIENTES</div>
                                          <div class="album__name">Descubre lo último de las series más recientes</div>
                                      </div>
                                    </div>

                          
                                    <!-- Series-->
                                    <div v-if="isLoading">
                                        <div class="spinner-border text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    <div v-else class="tracks" v-for="(serie, index) in series.slice(0 , 20)" :key="index">
                                        <Series :series="serie" :indexing="index" />
                                    </div>
                                    <router-link :to="{name: 'SeriesList'}">
                                      <button class="button-light save">ver más</button>
                                    </router-link>
                                  <!--
                                    <div> Página {{series_page}} de {{series_total_pages}}</div>
                                    <bPagination align="right" :total-rows="series_total_pages" :per-page="1" v-model="series_page" @input=" init(series_page);"></bPagination>
                                  -->
                                </div>
                                

                                <!-- Genres -->
                                <div class="overview__related">
                                    <div class="section-title">Generos</div>
                                    <SideBar/>
                                </div>

                                      <div class="overview__albums">
                                  <div class="overview__albums__head">
                                     
                                  </div>
                                  <div class="album">
                                    <div class="album__info">
                                      <div class="album__info__art">
                                        <img class="section-img" 
                                          src="../assets/img/background.jpg"
                                        />
                                      </div>
                                      <div class="album__info__meta">
                                        <div class="album__year">EPISODIOS MAS RECIENTES</div>
                                        <div class="album__name">Descubre los últimos episodios</div>
                                        <div class="album__actions">
                                        </div>
                                      </div>
                                    </div>

                                        <div class="album__tracks">
                                            <div class="tracks">
                                                <div class="tracks__heading">
                                                    <div class="tracks__heading__length">
                                                    </div>

                                                    <div class="tracks__heading__popularity">
                                                        <i class="ion-thumbsup"></i>
                                                    </div>
                                                </div>

                                                      
                                                  <div class="tracks" v-for="(eps, index) in episodes" :key="index">
                                                    <Episodes :episodes="eps" :indexing="index" />
                                                  </div>
                                                <router-link :to="{name: 'EpisodesList'}">
                                                  <button class="button-light save">ver más</button>
                                                </router-link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div class="overview__albums">
                                  <div class="overview__albums__head">
                                     
                                  </div>
                                  <div class="album">
                                    <div class="album__info">
                                      <div class="album__info__art">
                                        <img class="section-img" 
                                          src="../assets/img/background.jpg"
                                        />
                                      </div>
                                      <div class="album__info__meta">
                                        <div class="album__year">PELICULAS MAS RECIENTES</div>
                                        <div class="album__name">Descubre los últimos estrenos del cine</div>
                                        <div class="album__actions">
                                        </div>
                                      </div>
                                    </div>

                                        <div class="album__tracks">
                                            <div class="tracks">
                                                <div class="tracks__heading">
                                                    <div class="tracks__heading__length">
                                                    </div>

                                                    <div class="tracks__heading__popularity">
                                                        <i class="ion-thumbsup"></i>
                                                    </div>
                                                </div>

                                                      
                                                 <div class="tracks" v-for="(movie , index) in movies.slice(0 , 20)" :key="index">
                                                  <Movie :movies="movie" :indexing="index"/>
                                                </div>
                                                <router-link :to="{name: 'MovieList'}">
                                                  <button class="button-light save">ver más</button>
                                                </router-link>
                                                
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
    </section>

</template>



<script>
  import {value , onCreated , watch} from "vue-function-api";
  import {useState , useStore} from "@u3u/vue-hooks";
  import SideBar from "../components/SideBar";
  import Series from "../components/Series";
  import Movie from "../components/Movie";
  import Episodes from "../components/Episodes";


  export default {
    name: "home",
    components:{
      SideBar,
      Series,
      Movie,
      Episodes
    },
    setup(){
      const store = useStore();

      const state = {
        ...useState(["series" , "movies" , "episodes" , "isLoading"]),
      };

      const values = {
        page: value(1)
      };


      onCreated(() =>{
        store.value.dispatch('GET_ALL_SERIES' , values.page.value);
        store.value.dispatch('GET_ALL_MOVIES' , values.page.value);
        store.value.dispatch('GET_EPISODES' ,  values.page.value)
      });

      return{
        ...state
      }
    }
  };
</script>

