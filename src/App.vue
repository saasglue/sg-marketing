<template>
  <div id="app">
    <div v-cloak class="popup" :hidden="hideBurgerPopup">
      <div class="popup-content" style="width: 240px;">
        <div class="popup-close">
          <div class="popup-close-x">
            <a href="" style="color: black; font-size: 24px;" @click.prevent="hideBurgerPopup = !hideBurgerPopup">
              x
            </a>
          </div>
        </div>
        <div class="burger-popup-links">
          <div class="burger-popup-links-left-aligned">            
            <router-link to="/" class="burger-popup-link" @click.native="hideBurgerPopup=true">Home</router-link>            
            <router-link to="/how" class="burger-popup-link" @click.native="hideBurgerPopup=true">How it works</router-link>
            <router-link to="/why" class="burger-popup-link" @click.native="hideBurgerPopup=true">Why saas glue?</router-link>
            <router-link to="/pricing" class="burger-popup-link" @click.native="hideBurgerPopup=true">Pricing</router-link>
            <router-link to="/resources" class="burger-popup-link" @click.native="hideBurgerPopup=true">Resources</router-link>
            <span class="burger-popup-spacer"></span>
            <a href="https://console.saasglue.com" class="burger-popup-link round-button">
              Login
              <span style="font-size: 16px; font-weight: 300;">
                >
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="main-top-container">
      <div class="main-top" style="background-image: linear-gradient(90deg, black, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.15),  rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25), black), url(background1.jpg);">
        <div class="main-nav-bar">
          
          <div class="main-nav-bar-left">
            <img src="MainLogo.png">
          </div>
          
          <div class="main-nav-bar-right">
            <div class="big-menu">
              
              <span v-if="isRouterLinkActive('/')" class="menu-selected">.</span>
              <router-link to="/" class="main-nav-link">Home</router-link>

              <span v-if="isRouterLinkActive('/how')" class="menu-selected">.</span>
              <router-link to="/how" class="main-nav-link">How it works</router-link>

              <span v-if="isRouterLinkActive('/why')" class="menu-selected">.</span>
              <router-link to="/why" class="main-nav-link">Why saas glue?</router-link>

              <span v-if="isRouterLinkActive('/pricing')" class="menu-selected">.</span>
              <router-link to="/pricing" class="main-nav-link">Pricing</router-link>

              <span v-if="isRouterLinkActive('/resources')" class="menu-selected">.</span>
              <router-link to="/resources" class="main-nav-link">Resources</router-link>

              <span class="main-nav-spacer"></span>
              <a href="https://console.saasglue.com" class="main-nav-link round-button">
                Login
                <span style="font-size: 16px; font-weight: 300;">
                  >
                </span>
              </a>
            </div>
            <div class="burger-menu">
              <a href="" class="main-nav-link"  @click.prevent="hideBurgerPopup = !hideBurgerPopup"><img src="HamburgerLines.png" width="30px;"></a>
            </div>
          </div>
        </div>

        <div class="splash-row">
          <div class="splash-colunn">
            <div class="splash-message" v-html="splashMessage"></div>
            <br>          
            <a href="https://console.saasglue.com" class="try-it-button">
              Try it free 
              <span style="margin-left: 5px; font-size: 16px; font-weight: 300;">
                >
              </span>
            </a>
          </div>
        </div>


      </div>
    </div>

    <router-view/>
    
    <div class="footer">
      <div class="footer-left">
        &#169; 2020, saas glue LLC​
      </div>
      <div class="footer-right">
        Contact us
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private hideBurgerPopup = true;

  private isRouterLinkActive(path: string): boolean {
    return this.$router.currentRoute.path === path;
  }

  private splashMessage = 'Any Script<br>Any Device<br>Anywhere';

  @Watch('$route', {immediate: true, deep: true})
  private onRouteChanged() {
    switch(this.$router.currentRoute.path){
      case '/how':
        this.splashMessage = `Any Script<br>Any Device<br>Anywhere`;
        break;
      default:
        this.splashMessage = `Integrate Anything<br>Automate Everything`;
    }
  }

}
</script>


<style>
[v-cloak] {display: none}


body {
  font-family: 'Nunito Sans', 'Avenir';
}

html, body {
  padding: 0;
  margin: 0;
}

.header {
  margin: 0;
}

#app {
  text-align: center;
}

@media (max-width: 1230px) {
  .big-menu {
    display: none;
  }
  .burger-menu {
    display: block;
  }
  .main-top {
    height: 500px;
  }
  .blurb-spacer {
    width: 10px;
  }
  .blurb-item {
    font-size: calc(12px + 1vw);
    margin-bottom: 15px;
  }
  .promo-video {
    
  }
  .blurb-outer-container {
    
  }
  .blurb-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }
  .spaced-skew {

  }
  .blurb-list-item {
    font-size: 10px;
  }
}


@media (min-width: 1230px) {
  .big-menu {
    display: block;
  }
  .burger-menu {
    display: none;
  }
  .main-top {
    height: 600px;
  }
  .blurb-spacer {
    width: 400px;
  }
  .blurb-item {
    font-size: 22px;
    margin-left: 20px;
    margin-right: 20px
  }
  .promo-video {
    width: 656px;
    height: 369px;
  }
  .blurb-outer-container {
    
  }
  .blurb-container {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    margin-right: 40px;
  }
  .spaced-skew {
    margin-top: calc(60px + 4vw);
  }
  .blurb-list-item {
    font-size: 18px;
  }
}

.popup {
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0,0,0,0.5);
}

.hidden {
  display: none;
}

.popup-close {
  position: relative;
  margin-bottom: 20px;
}

.popup-close-x {
  position: absolute;
  top: 0px;
  right: 0px;
}

.popup-content {
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
  border-radius: 10px;
}

.burger-popup-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  margin-top: 25px;
  margin-bottom: 50px;
}

.burger-popup-links-left-aligned {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
}

.burger-popup-link {
  color: black;
  margin-top: 15px;
  font-size: 20px;
}

.main-top-container {
  display: flex;
  justify-content: center;
  background-image: linear-gradient(90deg, black, black);
  width: 100%;
  margin-left: 0px;
  margin-right: 0px; 
  padding-left: 0px;
  padding-right: 0px;
}

.splash-row {
  display: flex;
  justify-content: center;
  width: 100%;  
}

.splash-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.splash-message {
  font-size: calc(20px + 3vw);
  letter-spacing: 3px;
  margin-top: 100px;
  font-weight: 700;    
  color: white;
  text-shadow: 0px 2px 1px rgb(150, 148, 148), 0px -2px 1px rgb(150, 148, 148), 2px 0px 1px rgb(150, 148, 148), -2px 0px 1px rgb(150, 148, 148);  
}

.try-it-button {
  font-size: calc(14px + 1vw);
  letter-spacing: 2px;
  font-weight: 700;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 14px;
  padding-right: 14px;
  margin-top: 30px;  
  background-color: rgba(32, 31, 31, 0.5);
  border-radius: 12px;  
}

.main-top {  
  flex-grow: 1;
  flex-basis: max-content;
  max-width: 1940px;
}

.main-nav-bar {
  padding-left: 30px; 
  padding-right: 30px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-nav-bar-left {
  display: flex;
  align-items: flex-start;
}

.main-nav-bar-right {
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 20px;
}

.white {
  color: white;
}

.main-nav-link {
  margin-left: 12px;
  margin-right: 12px;
  letter-spacing: 1.5px;
}

.round-button {
  border-radius: 12px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: rgba(200, 202, 202, 0.25);
}

.menu-selected {
  position: relative; 
  bottom: 6px; 
  margin-left: 8px; 
  font-size: 28px;
}

.main-nav-spacer {
  margin-left: 20px;
  margin-right: 20px;
}


.skew-background {
  background-image: linear-gradient(135deg, black, rgb(53, 119, 241), rgb(53, 119, 241), rgb(118, 183, 209), rgb(53, 119, 241));
  display: flex;
  justify-content: center;
  padding-top: calc(12px + 4vw);
  color: white;
  font-weight: 700;
  font-size: calc(12px + 1vw);
  letter-spacing: 2px;  
  margin-left: 0px;
  margin-right: 0px;
}

.skew-background-up {
  transform-origin: top left;
  transform: skewY(-1.75deg);  
}

.skew-content-up {
  transform: skewY(1.75deg);    
}

.skew-background-down {
  transform-origin: top left;
  transform: skewY(1.75deg);
}

.skew-content-down {
  transform: skewY(-1.75deg);
  letter-spacing: 2px;
  line-height: 1.8em;
  letter-spacing: 3px;
}

.blurb-outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: 2px;
  line-height: 1.8em;
  font-weight: 700;
  font-size: 20px;
  color: #423F3F;
}

.blurb-container {
  display: flex; 
}

.blurb-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
}

.blurb-list-item {
  text-align: left;
}

.blurb-list div::first-letter {
  font-size: calc(12px + 1vw);
}


.promo-video {
  border-radius: 5px;
}


.blurb-title {
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-left: 10px;
  margin-right: 10px;
}

.blurb-image {
  background: transparent;
}

.step-instructions {
  display: flex;
  align-items: center;
}

.step-text {
  color: white;
  width: 200px;
  margin-left: 20px;
  font-size: 30px;
}

.step-text-bottom {
  margin-top: 30px;
  color: white;
  width: 400px;
}

.step-text-bottom-dark {
  margin-top: 30px;
  color: 423F3F;
  width: 400px;
}

.step-text-dark {
  color: #423F3F;
  width: 200px;
  margin-left: 20px;
  font-size: 30px;
}


.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
  padding-left: 10px;
  padding-right: 10px;
  letter-spacing: 2px;
  line-height: 1.8em;
  letter-spacing: 3px;
  color: white;
  background-image: linear-gradient(135deg, black, rgb(53, 119, 241), rgb(53, 119, 241), rgb(118, 183, 209), rgb(53, 119, 241));
  height: 75px;
  font-size: calc(8px + 1vw);
}

a {
  color: white;
  text-decoration: none; /* no underline */
}

</style>
