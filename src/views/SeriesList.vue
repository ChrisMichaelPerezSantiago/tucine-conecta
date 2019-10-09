
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
                  <li role="presentation" class="active">
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
                                    <div v-else class="tracks" v-for="(serie, index) in series" :key="index">
                                        <Series :series="serie" :indexing="index" />
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
                                        <div> Página {{series_page}} de {{series_total_pages}}</div>
                                      </span>
                                      <bPagination align="left" :total-rows="series_total_pages" :per-page="1" v-model="series_page" @input=" init(series_page);"></bPagination>
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

  export default {
    name: "SeriesList",
    components:{
      SideBar,
      Series
    },
    setup(){
      const store = useStore();

      const state = {
        ...useState(["series" , "isLoading"]),
      };

      const series_page = value(1);
      const series_total_pages = value(17);

      watch(() =>
        series_page.value , (value) =>{
          series_page.value = value;
          const goto = series_page;
          init(goto)
        }
      );

      const init = (series_page) => {
        store.value.dispatch("GET_ALL_SERIES" , series_page.value);
      };

      onCreated(() =>{
        store.value.dispatch('GET_ALL_SERIES' , series_page.value)
      });

      return{
        ...state,
        init,
        series_page,
        series_total_pages
      }
    }
  };
</script>
