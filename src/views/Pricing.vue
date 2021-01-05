<template>
  <div class="pricing-container">
    <div class="pricing-item">
      <div class="pricing-title">
        Free Account
      </div>
      <div class="pricing-body">
        $0 00
      </div>
    </div>

    <div class="pricing-item">
      <div class="pricing-title">
        Subscription Account
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Pricing extends Vue {  
}
</script>

<style scoped>
  .pricing-container {
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    justify-content: center;
  }

  /* Large screen */
  @media (min-width: 1230px) {
    .pricing-item {
      width: 40vw;
    }
  }

  /* Mobile screen */
  @media (max-width: 1230px) {
    .pricing-item {
      width: 400px;
    }
  }

  .pricing-item {
    background-color: lightgray;
    border-radius: 5px;;
    margin-left: 20px;
  }

  .pricing-title {
    font-size: 24px;
    font-weight: 700;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding-top: 12px;
    padding-bottom: 12px;
   
    background-color: gray;
  }

  .pricing-body {
    padding-top: 40px;
  }

</style>
