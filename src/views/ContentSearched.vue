
<template>
    <section class="content">
        <div class="content__middle">
            <div class="artist is-verified">

            <div class="artist__header">
              <div class="artist__navigation">
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" >
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
                   <li role="presentation" class="active">
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
                                      <!--
                                      <div class="album__info__art">
                                        <img class="section-img"
                                          src="../assets/img/background.jpg"
                                        />
                                      </div>
                                      -->

                                     <div class="album__info__meta">
                                        <div class="album__year">BÚSQUEDA DE CONTENIDO</div>
                                        <div class="album__name">Resultados encontrados para {{query}}</div>
                                    
                                      </div>
                                    </div>

                                    <div class="header">
                                      <div class="user__info">
                                        <div class="search">
                                          <input  @click.prevent="init(query)" v-model="query" type="text" placeholder="Buscar peliculas, series …" />
                                        </div>
                                        <span class="user__info__name">
                                          <span class="first"></span>
                                          <span class="last"></span>
                                        </span>
                                      </div>
                                    </div>
                                      
                                    <!-- Series-->
                                    <div v-if="isLoading">
                                      <div class="spinner-border text-primary" role="status">
                                          <span class="sr-only">Loading...</span>
                                      </div>
                                    </div>
                                    <div v-else class="tracks" v-for="(content, index) in filteredDataObj" :key="index">
                                      <div v-if="content.type === 'serie'">
                                        <Series :series="content" :indexing="index" />
                                      </div>
                                      <div v-if="content.type === 'pelicula'">
                                         <Movie :movies="content" :indexing="index"/>
                                      </div>
                                    </div>
                                </div>


                                <!-- Genres -->
                                <div class="overview__related">
                                    <div class="section-title">Generos</div>
                                    <SideBar/>
                                </div>


                                <div class="overview__albums">
                                  <div class="overview__albums__head">
                                      <span class="section-title">
                                      </span>
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
  import {onCreated , value , watch , computed} from "vue-function-api"
  import {useState , useGetters  , useStore} from '@u3u/vue-hooks';
  import SideBar from "../components/SideBar";
  import Movie from "../components/Movie";
  import Series from "../components/Series";

  export default{
    name: 'ContentSearched',
    components:{
      SideBar,
      Movie,
      Series
    },
    setup(){
      const store = useStore();

      const state = {
        ...useState(['contentSearched' , 'isLoading'])
      };

      const getter = {
        ...useGetters(['FILTER_SPESIFIC_DATA'])
      };

      const query = value("");


      const filteredDataObj = computed(() =>{
        return getter.FILTER_SPESIFIC_DATA.value(query.value)
      });

      watch(() =>
        query.value , (value) =>{
          query.value = value;
          init(query)
        }
      )

      const init = (query) =>{
        store.value.dispatch('GET_CONTENT_SEARCH' , query.value);
      }

      onCreated(() =>{
        store.value.dispatch('GET_CONTENT_SEARCH' , query.value);
      });


      return{
        ...state,
        query,
        filteredDataObj
      }
    }
  };
</script>
