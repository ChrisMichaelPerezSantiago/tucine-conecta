
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
                  <li role="presentation" class="active">
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
                                          <div class="album__year">LISTADO DE EPISODIOS</div>
                                          <div class="album__name">Disfruta de los últimos capítulos de tu serie favorita</div>
                                      </div>
                                    </div>

                          
                                    <!-- Episodes-->
                                    <div v-if="isLoading">
                                        <div class="spinner-border text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    <div v-else class="tracks" v-for="(eps, index) in episodes" :key="index">
                                        <Episodes :episodes="eps" :indexing="index" />
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
                                        <div> Página {{episodes_page}} de {{episodes_total_pages}}</div>
                                      </span>
                                      <bPagination align="left" :total-rows="episodes_total_pages" :per-page="1" v-model="episodes_page" @input=" init(episodes_page);"></bPagination>
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
  import Episodes from "../components/Episodes";

  export default {
    name: "EpisodesList",
    components:{
      SideBar,
      Episodes
    },
    setup(){
      const store = useStore();

      const state = {
        ...useState(["episodes" , "isLoading"]),
      };

      const episodes_page = value(1);
      const episodes_total_pages = value(209);

      watch(() =>
        episodes_page.value , (value) =>{
          episodes_page.value = value;
          const goto = episodes_page;
          init(goto)
        }
      );

      const init = (episodes_page) => {
        store.value.dispatch("GET_EPISODES" , episodes_page.value);
      };

      onCreated(() =>{
        store.value.dispatch('GET_EPISODES' , episodes_page.value)
      });

      return{
        ...state,
        init,
        episodes_page,
        episodes_total_pages
      }
    }
  };
</script>
