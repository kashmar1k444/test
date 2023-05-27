<script setup lang="ts">

import {ref} from 'vue'

let isSuported : boolean = ref(false);
const text: string = ref('web share api');
const url: string = ref('https://developers.giphy.com/docs/api/endpoint#get-gif-by-id');

const isSupport = () => {
    if (navigator.share) {
        isSuported.value = true;
    }
}

const webShare = () => {
    navigator.share({
        text: text.value,
        url: url.value
      })
}

isSupport();

</script>


<template>
<v-btn
    class="share-btn"
    color="#5865f2"
    @click="webShare"
>
  Share
</v-btn>
</template>