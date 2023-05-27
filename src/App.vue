<script setup lang="ts">

import GiftGrid from './components/GiftGrid.vue';
import Navigation from './components/Navigation.vue';
import ShareBtn from './components/ShareBtn.vue';
import Loader from './components/Loader.vue'

import {ref, onMounted, watch} from 'vue';

let loaded : boolean = ref(false);
let gifs : any = ref([]);
let searchReq : any = ref('');
let timer : any = null;
let page : any = ref(1);

const options : object = ref({
  limit: 12,
  rating: 'g',
  apiKey: 'h5ZgTXD2yCiVAG6D55Wnhc3HoHX4ukvR',
  offset: 0
})


let pagesCount: any = ref(0);

const url : any = ref(`https://api.giphy.com/v1/gifs/trending?api_key=${options.value.apiKey}&limit=${options.value.limit}&rating=${options.value.rating}&offset=${options.value.offset}`);

const setPageCount = (total: number = 1) => {
  pagesCount = Math.floor(total / options.value.limit);
}

const getData = async (url: string) => {
  const res : any = await fetch(url);
  const data : any = await res.json();

  if(data.pagination) {
      setPageCount(data.pagination.total_count) 
  } else {
      pagesCount = 0;
  }
  return data
}

const setSearchData = () => {
    clearInterval(timer);
    timer = setTimeout(async () => {
      options.value.offset = 0;
      page.value = 1;
      const res = await getData(`https://api.giphy.com/v1/gifs/search?api_key=${options.value.apiKey}&q=${searchReq.value}&limit=${options.value.limit}&offset=${options.value.offset}&rating=${options.value.rating}&lang=en`);
      if(res.data.length == 0 && searchReq.value.length != 0) {        
        const res = await getData(`https://api.giphy.com/v1/gifs/random?api_key=h5ZgTXD2yCiVAG6D55Wnhc3HoHX4ukvR&tag=not+found&rating=g`);
        gifs.value = [res.data]; 
        return;
      } 
      if(searchReq.value.length == 0) {        
        const res = await getData(url.value)
        gifs.value = res.data;
        return;
      } 
      gifs.value = res.data;
    }, 600)

}

const getDataByPage = async () =>{
    options.value.offset = options.value.limit * page.value;
    if(searchReq.value.length > 0){
      const res = await getData(`https://api.giphy.com/v1/gifs/search?api_key=${options.value.apiKey}&q=${searchReq.value}&limit=${options.value.limit}&offset=${options.value.offset}&rating=${options.value.rating}&lang=en`);
      gifs.value = res.data;
    } else {
      const res = await getData(`https://api.giphy.com/v1/gifs/trending?api_key=${options.value.apiKey}&limit=${options.value.limit}&rating=${options.value.rating}&offset=${options.value.offset}`)
      gifs.value = res.data;
    }
}

onMounted(async () => {
    const res = await getData(url.value)
    gifs.value = res.data;
    setTimeout(() => loaded.value = true, 200)
})

watch(searchReq , () => {
  setSearchData();
})
</script>


<template>
  <Navigation 
    v-model="searchReq"
  />
  <div class="gifs-wrapper">
    <Loader v-if="!loaded"/>
    <GiftGrid 
      v-else
      :gifs="gifs"
    />
  </div>
  <v-pagination 
      :length="pagesCount" 
      v-model="page"
      @click="getDataByPage"
  ></v-pagination>
  <ShareBtn/>
</template>
