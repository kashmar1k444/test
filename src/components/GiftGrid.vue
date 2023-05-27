<script setup lang="ts">
    defineProps<{
        gifs: Array<object> 
    }>()
</script>

<template>
    

      <v-container class="mt-10">
        <TransitionGroup name="list" tag="div" class="v-row">
                <v-col
                    cols="3"
                    v-for="gif in gifs" :key="gif.id"
                >
             
                    <video 
                        preload="auto" loop autoplay :src="gif.images.fixed_height.mp4">
                    </video>
                </v-col>
        </TransitionGroup>
      </v-container>
</template>