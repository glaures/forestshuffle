<script>
export default {
  name: "Footer"
}
</script>

<template>
  <div class="footer position-fixed text-center w-100">
    <div>
      <router-link :to="{name: 'imprint'}">{{ $t('imprint') }}</router-link>&nbsp;|&nbsp;<router-link
        :to="{name: 'imprint'}">{{ $t('dataProtection') }}
    </router-link>
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: block;
  font-size: 10px;
  bottom: 0.5vh;
}
</style>