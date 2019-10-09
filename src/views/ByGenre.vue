
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
                                          <div class="album__year">GÉNERO</div>
                                          <div class="album__name">Contenido de {{genre}}</div>
                                      </div>
                                    </div>

                          
                                    <!-- Series-->
                                    <div v-if="isLoading">
                                        <div class="spinner-border text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    <div v-else class="tracks" v-for="(content, index) in genres" :key="index">
                                      <div v-if="content.type === 'serie'">
                                        <Series :series="content" :indexing="index"/>
                                      </div>
                                        <div v-if="content.type === 'pelicula'">
                                          <Movie :movies="content" :indexing="index"/>
                                        </div>
                                    </div>
                                </div>
                                

                               
                                

                                <div class="overview__albums">
                                  <div class="overview__albums__head">
                                      <span class="section-title">
                                        <div> Página {{page}} de {{total_pages}}</div>
                                      </span>
                                      <bPagination align="left" :total-rows="total_pages" :per-page="1" v-model="page" @input=" init(total_pages);"></bPagination>
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
  import {value , onCreated , watch} from "vue-function-api"
  import {useState , useRouter , useStore} from '@u3u/vue-hooks';
  import SideBar from "../components/SideBar";
  import Movie from "../components/Movie";
  import Series from "../components/Series";
  
  export default{
    name: 'ByGenre',
    components:{
      SideBar,
      Movie,
      Series
    },
    setup(){
      const store = useStore();
      const {route} = useRouter();
      const state = {
        ...useState(['genres' , 'isLoading'])
      };
      const genre = value(route.value.params.genres);
      
      const page = value(1);
      const total_pages = value(105);
      watch(() =>
        page.value , (value) =>{
          page.value = value;
          const goto = page;
          const info = {genre: genre.value , page: goto}
          init(info)
        }
      )
      watch(() =>
        genre.value , (value) =>{
          genre.value = value;
          const goto = page;
          store.value.dispatch('GET_GENRES' , {
            genre: genre,
            page: goto
          });
        }
      )
      const init = (page) => {
        store.value.dispatch('GET_GENRES' , {
          genre: genre.value,
          page: page.value
        });
      }
      onCreated(() =>{
        store.value.dispatch('GET_GENRES' , {
          genre: genre.value,
          page: page.value
        });
      });
      
      return{
        ...state,
        init,
        page,
        genre,
        total_pages
      }
    }
  };
</script>