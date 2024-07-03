<template>
  <div class="overlay small" v-if="!consent.given">
    <div class="cookie-consent shadow rounded">
      <slot name="banner" v-if="!customizing">
        <div class="d-flex justify-content-around">
          <div class="flex-grow-1">
            {{ $t('cookies.intro') }}: <span class="link btn-link" @click="customizing = true">{{
              $t('cookies.settings')
            }}</span>.
          </div>
          <div class="text-nowrap">
            <button class="btn btn-primary" @click="acceptAll"> {{ $t('cookies.acceptAll') }}</button>
          </div>
        </div>
      </slot>
      <slot name="customize" v-else>
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch1"
                 value="true" disabled checked>
          <label class="custom-control-label" for="customSwitch1">
            {{ $t('cookies.technical') }}
          </label>
        </div>
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch2" v-model="tracking">
          <label class="custom-control-label" for="customSwitch2">
            {{ $t('cookies.tracking') }}
          </label>
        </div>
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch3" v-model="social">
          <label class="custom-control-label" for="customSwitch3">
            {{ $t('cookies.tracking') }}
          </label>
        </div>
        <div class="mt-2">
          <button class="btn btn-sm btn-primary mr-1" @click="consentGiven">{{ $t('cookies.acceptSelection') }}</button>
          <button class="btn btn-sm btn-primary" @click="acceptAll">{{ $t('cookies.acceptAll') }}</button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import {bootstrap} from "vue-gtag";

export default {
  name: 'CookieConsent',
  data() {
    return {
      customizing: false,
      consent: {
        given: false,
        customizing: false,
        technical: true,
        tracking: false,
        social: false
      }
    }
  },
  methods: {
    consentGiven() {
      this.consent.given = true
      localStorage.setItem('cookieConsent', JSON.stringify(this.consent))
      if(this.consent.technical){
        bootstrap().then(() => {
          console.log('Google Analytics tracking turned on.')
        })
      }
    },
    acceptAll() {
      this.consent.technical = true
      this.consent.tracking = true
      this.consent.social = true
      this.consentGiven()
    }
  },
  mounted() {
    let storedConsentStr = localStorage.getItem('cookieConsent')
    if (storedConsentStr) {
      this.consent = JSON.parse(storedConsentStr)
      this.consentGiven()
    }
  }
}

</script>

<style>
.overlay {
  position: fixed;
  bottom: 8%;
  left: 5%;
  right: 5%;
  width: 90%;
}

.cookie-consent {
  bottom: 20px;
  background-color: #E8ECDCAA;
  border: 1px solid darkolivegreen;
  color: black;
  padding: 1em;
}
</style>
