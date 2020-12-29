<template>
  <div>
    <div class="skew-background skew-background-up" style="min-height: 110px;">
      <div class="skew-content-up">
        create jobs in the saas glue cloud
        <br>
        and run them anywhere you want
      </div>
    </div>


    <div class="blurb-outer-container">
      <div class="blurb-container">
        <div class="blurb-item">
          Build jobs in the saas glue cloud 
        </div>
        <div class="blurb-item blurb-list">
          <div class="blurb-list-item">Store scripts, variables and artifacts in the cloud</div>
          <div class="blurb-list-item">Assemble scripts into jobs with conditional routing</div>
          <div class="blurb-list-item">Schedule jobs to run or kick them off through the API</div>
          <div class="blurb-list-item">Monitor the success or failure of each part of the job</div>
        </div>
      </div>
    </div>

    <div class="skew-background skew-background-down" style="padding-bottom: 40px;">
      <div class="skew-content-down">
        <div class="blurb-outer-container">
          <div class="blurb-container">
            <div class="blurb-item white">
              Run agents on your devices
            </div>
            <div class="blurb-item blurb-list">
              <div class="blurb-list-item white">Running agents send a heartbeat to the cloud </div>
              <div class="blurb-list-item white">Set max active tasks for each agent</div>
              <div class="blurb-list-item white">Assign tags to each agent for task routing</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="blurb-outer-container" style="margin-top: 60px; margin-bottom: 60px;">
      <div class="blurb-container">
        <div class="blurb-item">
          Send scripts to agents for execution
        </div>
        <div class="blurb-item blurb-list">
          <div class="blurb-list-item">Include arguments, environment variables and artifacts</div>
          <div class="blurb-list-item">The agent hands off scripts to the local interpreters</div>
          <div class="blurb-list-item">Target any interpreter, any version</div>
        </div>
      </div>
    </div>

    <div class="skew-background skew-background-up" style="min-height: 250px;">
      <div class="skew-content-up">
        <div class="blurb-outer-container">
          <div class="blurb-container">
            <div class="blurb-item white">
              Return output to the cloud
            </div>
            <div class="blurb-item blurb-list">
              <div class="blurb-list-item white">stdout variables are auto exposed to later tasks</div>
              <div class="blurb-list-item white">Return stderr and error messages to cloud</div>
              <div class="blurb-list-item white">Agents clear environment variables and artifacts</div>
              <div class="blurb-list-item white">The tail for a currently running script is visible in the cloud</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="blurb-outer-container" style="margin-top: 60px; margin-bottom: 60px;">
      <div class="blurb-container">
        <div class="blurb-item">
          Build multi-cloud and hybrid cloud automation
        </div>
        <div class="blurb-item blurb-list">
          <div class="blurb-list-item">Install the agent on containers and virtual machines</div>
          <div class="blurb-list-item">Automatically install agents in new compute resources</div>
          <div class="blurb-list-item">Integrate web applications through the saas glue API</div>
        </div>
      </div>
    </div>


    <div class="skew-background skew-background-down" style="min-height: 350px;">
      <div class="skew-content-down">
        <div class="blurb-outer-container">
          <div class="blurb-container white">
            <div class="blurb-item">
              Any Script
              <div>
                <img class="blurb-image" src="ThinkingDude.png" width="400px">
              </div>
            </div>
            <div class="blurb-item">
              <div class="step-instructions">
                <div style="font-size: 24px;">
                  Execute scripts locally
                </div>
              </div>
              <div class="step-text-bottom">
                <div style="width: 400px;">
                  <div class="blurb-list-item white">The agent hands off scripts to a local interpreter for execution.  This architecture lets saas glue work with any scripting language, including those that have not yet been created. </div>
                </div>
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
export default class HowItWorks extends Vue {  
}
</script>

<style scoped>

</style>
