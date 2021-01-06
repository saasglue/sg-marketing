<template>
  <div class="pricing-container">
    <div class="pricing-item">
      <div class="pricing-title">
        Free Account
      </div>
      <div class="free-ribbon">
        <div class="free-ribbon-inner">
          FREE
        </div>
      </div>
      <div class="pricing-body">
        <div class="pricing-price">
          <div class="pricing-symbol">$</div>
          <div class="pricing-dollars">
            0
          </div>
          <div class="pricing-cents">
            00
          </div>
        </div>
        <div class="pricing-list-container">
          <div class="pricing-list">
            <div class="pricing-list-item">
              <img src="Checkmark.png" width="20" class="check">
              Run unlimited scripts from the web console
            </div>
            <div class="pricing-list-item">
              <img src="Checkmark.png" width="20" class="check">
              Create unlimited agents
            </div>
            <div class="pricing-list-item">
              <img src="Checkmark.png" width="20" class="check">
              Store unlimited scripts
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pricing-item">
      <div class="pricing-title">
        Subscription Account
      </div>
      <div class="pricing-body">
        <div class="pricing-price">
          <div class="pricing-symbol">$</div>
          <div class="pricing-dollars">
            0
          </div>
          <div class="pricing-cents">
            01
          </div>
          <div class="per-script">
            per script
          </div>
        </div>

        <div class="pricing-list-container">
          <div class="pricing-list">
            <div class="pricing-list-item">
              <img src="Checkmark.png" width="20" class="check">
              Run unlimited scripts from the web console
            </div>
            <div class="pricing-list-item">
              <img src="Checkmark.png" width="20" class="check">
              Create unlimited agents
            </div>
            <div class="pricing-list-item">
              <img src="Checkmark.png" width="20" class="check">
              Store unlimited scripts
            </div>
          </div>
        </div>
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
    margin-top: 100px;
    justify-content: center;
  }

  /* Large screen */
  @media (min-width: 1230px) {
    .pricing-container {
      flex-direction: row;
    }
    .pricing-item {
      width: 40vw;
    }
  }

  /* Mobile screen */
  @media (max-width: 1230px) {
    .pricing-container {
      flex-direction: column;
    }
    .pricing-item {
      width: 370px;
    }
  }

  .pricing-item {
    background-color: #F6FAFF;
    border-radius: 5px;;
    margin-left: 20px;
    position: relative;
  }

  .pricing-title {
    font-size: 24px;
    font-weight: 700;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding-top: 12px;
    padding-bottom: 12px;
   
    background-color: #A1ACBF;
  }

  .free-ribbon {
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
    transform: rotate(90deg);
    width: 150px;
    height: 150px;
    overflow: hidden;
  }

  .free-ribbon-inner {
    background-color: black;
    color: white;
    text-align: center;
    left: 0;
    width: 200%;
    -webkit-transform: translateY(-50%) translateX(-50%) translateX(35px) rotate(-45deg);
    -ms-transform: translateY(-50%) translateX(-50%) translateX(35px) rotate(-45deg);
    transform: translateY(-50%) translateX(-50%) translateX(35px) rotate(-45deg);
    margin-top: 35px;
    font-size: 13px;
    line-height: 2;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 15px;
  }

  .pricing-body {
    padding-top: 20px;
    font-weight: 700;
    padding-bottom: 20px;
  }

  .pricing-price {
    display: flex;
    justify-content: center;
  }

  .pricing-symbol {
    font-size: 20px;
    padding-top: 16px;
    padding-right: 6px;
  }

  .pricing-dollars {
    font-size: 65px;
    padding-right: 6px;
  }

  .pricing-cents {
    font-size: 20px;
    padding-top: 16px;
  }

  .pricing-list-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .per-script {
    margin-top: 50px;
    font-size: 12px;
  }

  .pricing-list {
    display: flex;
    flex-direction: column;
  }


  .pricing-list-item {
    text-align: left;
    font-size: 18px;
    margin-bottom: 16px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #A1ACBF;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 10px;
  }

  .check {
    margin-bottom: -5px;
    margin-right: 5px;
  }

  .try-it-button {

  }

</style>
