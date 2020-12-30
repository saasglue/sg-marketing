<template>
  <div>
    <div class="skew-background skew-background-up" style="min-height: 140px;">
      <div class="skew-content-up">
        saas glue is the universal integration and automation cloud 
        <br>
        that lets you run any script on any device anywhere in the world
      </div>
    </div>


    <div class="blurb-outer-container" style="margin-top: 75px;">
      <div class="blurb-container">
        <div class="blurb-spacer"> </div>
        <div class="blurb-item">
          saas glue helps you save time and money.  Avoid the same boiler plate work common to so many projects.
        </div>
        <div class="blurb-item">
           <iframe class="promo-video"
                   allowfullscreen="" 
                   title="saas glue explainer video" 
                   src="https://www.youtube.com/embed/7hTv4y3MahE?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=0"></iframe>
 
        </div>
      </div>
    </div>


    <div class="skew-background skew-background-down spaced-skew" style="min-height: 350px;">
      <div class="skew-content-down">
        <div class="blurb-title">
          <p>Get started in as little as 5 minutes</p>
        </div>
        <div class="blurb-outer-container">
          <div class="blurb-spacer"> </div>
          <div class="blurb-container">
            <div class="blurb-item">
              <img class="blurb-image" src="GetStartedDude.png" width="400px">
            </div>
            <div class="blurb-item">
              <div class="step-instructions">
                <img src="1YellowCircle.png"> 
                <div class="step-text">
                  Sign Up
                </div>
              </div>
              <div class="step-text-bottom">
                Provide a name and contact information and you’re ready to go.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="blurb-outer-container" style="margin-top: 75px;">
      <div class="blurb-container">
        <div class="blurb-item">
          <img class="blurb-image" src="InstallAgentDude.png" width="400px">
        </div>
        <div class="blurb-item">
          <div class="step-instructions">
            <img src="2BlueCircle.png"> 
            <div class="step-text-dark">
              Install the agent
            </div>
          </div>
          <div class="step-text-bottom-dark">
            <div>
              Download the agent and save it to your device.  It will call back to saas glue to establish a secure connection.
            </div>
          </div>
        </div>
        <div class="blurb-spacer"> </div>
      </div>
    </div>


    <div class="skew-background skew-background-up" style="min-height: 350px;">
      <div class="skew-content-up">
        <div class="blurb-outer-container">
          <div class="blurb-container">
            <div class="blurb-spacer"> </div>
            <div class="blurb-item">
              <img class="blurb-image" src="CreateScriptChick.png" width="400px">
            </div>
            <div class="blurb-item">
              <div class="step-instructions">
                <img src="3RedCircle.png"> 
                <div class="step-text">
                  Create a script
                </div>
              </div>
              <div class="step-text-bottom">
                Upload a script or create one in saas glue.  Use any language you want.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="blurb-outer-container" style="margin-top: calc(40px + 2vw);">
      <div class="blurb-container">
        <div class="blurb-item">
          <img class="blurb-image" src="RunScriptChick.png" width="400px">
        </div>
        <div class="blurb-item">
          <div class="step-instructions">
            <img src="4GreenCircle.png"> 
            <div class="step-text-dark">
              Run your script
            </div>
          </div>
          <div class="step-text-bottom-dark">
            <div>
              The agent will pass the script to the appropriate service for execution and return the results to saas glue.
            </div>
          </div>
        </div>
        <div class="blurb-spacer"> </div>
      </div>
    </div>


    <div class="skew-background skew-background-down" style="min-height: 350px;">
      <div class="skew-content-down">
        <div class="blurb-outer-container">
          <div class="blurb-container">
            <div class="blurb-spacer"> </div>
            <div class="blurb-item">
              <img class="blurb-image" src="BuildAJobDude.png" width="400px">
            </div>
            <div class="blurb-item">
              <div class="step-instructions">
                <img src="5OrangeCircle.png"> 
                <div class="step-text">
                  Build a job
                </div>
              </div>
              <div class="step-text-bottom">
                Combine scripts in a job with variables, conditional routing and more.  
                Set it to run automatically or trigger it through the API.
              </div>
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
export default class Home extends Vue {  
}
</script>

<style scoped>

</style>
