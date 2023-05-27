<script setup lang="ts">

import {ref} from 'vue'

const text: any = ref('web share api');
const url: any = ref('https://developers.giphy.com/docs/api/endpoint#get-gif-by-id');

const webShare = () => {
    navigator.share({
        text: text.value,
        url: url.value
      })
}

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