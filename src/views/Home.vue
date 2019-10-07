<template>
  <div class="home">
    <SideBar/>
  </div>
</template>

<script>
  import {onCreated} from "vue-function-api";
  import {useState , useStore} from "@u3u/vue-hooks";
  import SideBar from "../components/SideBar"

  export default {
    name: "home",
    components:{
      SideBar
    },
    setup(){
      const store = useStore();

      const state = {
        ...useState(["series" , "isLoading"]),
      };

      console.log(state.series.value);

      onCreated(() =>{
        store.value.dispatch('GET_ALL_SERIES')
      });

      return{
        ...state
      }
    }
  };
</script>
