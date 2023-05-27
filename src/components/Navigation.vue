<script setup lang="ts">
  defineProps<{
    modelValue: string,
  }>()

  const emit = defineEmits<{
      (e: 'update:modelValue', payload: string): void}>();
</script>

<template>
    <v-layout>
      <v-container>
        <v-app-bar
          prominent
        >
          <v-card-text class="d-flex justify-center ms-10">
              <v-img class="header-logo" src="/img/header-logo.gif">
              </v-img>
          </v-card-text>
          <v-card-text>
              <div class="d-flex ms=5">
                  <v-text-field
                  hide-details
                  label="Search"
                  @keyup="emit('update:modelValue', $event.target.value)"
                  v-text="modelValue" 
                  ></v-text-field>
              </div>
          </v-card-text>
        </v-app-bar>
      </v-container>
    </v-layout>
  </template>