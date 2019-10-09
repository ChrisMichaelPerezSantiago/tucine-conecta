
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
                   <li role="presentation" class="active">
                    <a data-toggle="tab">
                      <router-link :to="{name: 'MovieList'}">Películas</router-link>
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
                                          <div class="album__year">LISTADO DE SERIES</div>
                                          <div class="album__name">Lo último en el mundo de las series</div>
                                      </div>
                                    </div>

                          
                                    <!-- Series-->
                                    <div v-if="isLoading">
                                        <div class="spinner-border text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    <div v-else class="tracks" v-for="(movie, index) in movies" :key="index">
                                         <Movie :movies="movie" :indexing="index"/>
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
                                        <div> Página {{movies_page}} de {{movies_total_pages}}</div>
                                      </span>
                                      <bPagination align="left" :total-rows="movies_total_pages" :per-page="1" v-model="movies_page" @input=" init(movies_page);"></bPagination>
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
  import Movie from "../components/Movie";

  export default {
    name: "MovieList",
    components:{
      SideBar,
      Movie
    },
    setup(){
      const store = useStore();

      const state = {
        ...useState(["movies" , "isLoading"]),
      };

      const movies_page = value(1);
      const movies_total_pages = value(111);

      watch(() =>
        movies_page.value , (value) =>{
          movies_page.value = value;
          const goto = movies_page;
          init(goto)
        }
      );

      const init = (movies_page) => {
        store.value.dispatch("GET_ALL_MOVIES" , movies_page.value);
      };

      onCreated(() =>{
        store.value.dispatch('GET_ALL_MOVIES' , movies_page.value)
      });
      
      return{
        ...state,
        init,
        movies_page,
        movies_total_pages
      }
    }
  };
</script>
