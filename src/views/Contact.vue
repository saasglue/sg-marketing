<template>
  <div>
    <div class="contact-info">Send us an Email</div>
    <div class="contact-info">We'll get right back with you</div>
    <br><br>
    <div class="contact-info">info@saasglue.com</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {  
}
</script>

<style scoped>
  .contact-info {
    font-weight: 700;
    list-style: 3em;
    letter-spacing: 4px;
    font-size: 40px;
  }

</style>
