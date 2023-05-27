<script setup lang="ts">
    defineProps<{
        gifs: any 
    }>()
</script>

<template>
    

      <v-container class="mt-10">
        <TransitionGroup name="list" tag="div" class="v-row">
                <v-col
                    sm="6"
                    md="4"
                    lg="3"
                    cols="6"
                    v-for="gif in gifs" :key="gif.id"
                >
                    <video 
                        preload="auto" loop autoplay :src="gif.images.fixed_height.mp4">
                    </video>
                </v-col>
        </TransitionGroup>
      </v-container>
</template>