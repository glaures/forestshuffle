<script setup>
import {RouterView} from 'vue-router'
import ErrorCapture from "@/components/ErrorCapture.vue";
</script>

<template>
  <header>
  </header>
  <ErrorCapture>
    <RouterView/>
  </ErrorCapture>
</template>
