<script setup>
import {RouterView} from 'vue-router'
import ErrorCapture from "@/components/ErrorCapture.vue";
import CookieConsent from "@/components/CookieConsent.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <header>
  </header>
  <ErrorCapture>
    <div class="mb-5">
      <RouterView/>
    </div>
  </ErrorCapture>
  <Footer v-if="$route.name !== 'imprint'"/>
  <CookieConsent/>
</template>
