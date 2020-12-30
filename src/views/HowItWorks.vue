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
              <span style="font-size: 48px;">Any Script</span>
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
              <br><br>
              <div class="step-instructions">
                <div style="font-size: 24px;">
                  Target Any Interpreter
                </div>
              </div>
              <div class="step-text-bottom">
                <div style="width: 400px;">
                  <div class="blurb-list-item white">Saas glue defines a set of common scripting languages for easy development.  However, you can specify any interpreter, and you can specify which version to use when there are multiple installed. </div>
                </div>
              </div>

              <br><br>
              <div class="step-instructions">
                <div style="font-size: 24px;">
                  Run Compiled Code
                </div>
              </div>
              <div class="step-text-bottom">
                <div style="width: 400px;">
                  <div class="blurb-list-item white">You can store artifacts of compiled code in saas glue, which can be delivered to the local runtime environment for script execution.  Or you can call locally installed applications from your script. </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="blurb-outer-container" style="margin-top: 100px;">
      <div class="blurb-container">
        <div class="blurb-item">
          <span style="font-size: 48px;">Any Device</span>
          <div>
            <img class="blurb-image" src="AnyDevice.png" width="400px">
          </div>
        </div>
        <div class="blurb-item">
          <div class="step-instructions">
            <div style="font-size: 24px;">
              Support Every Platform
            </div>
          </div>
          <div class="step-text-bottom">
            <div style="width: 400px;">
              <div class="blurb-list-item dark">Install agents on Linux, Windows and Mac.  We expect that you will need agents for other platforms and we are ready to receive your request.  Just let us know what you need.</div>
            </div>
          </div>
          <br><br>
          <div class="step-instructions">
            <div style="font-size: 24px;">
              Extend Your Reach
            </div>
          </div>
          <div class="step-text-bottom">
            <div style="width: 400px;">
              <div class="blurb-list-item dark">The saas glue agent is small enough to fit on IoT devices and simple enough to run on legacy platforms.  There are no local dependencies that restrict where the agent can be installed.</div>
            </div>
          </div>

          <br><br>
          <div class="step-instructions">
            <div style="font-size: 24px;">
              Include Ephemeral Devices
            </div>
          </div>
          <div class="step-text-bottom">
            <div style="width: 400px;">
              <div class="blurb-list-item dark">Call the saas glue API to auto-install the agent as you spin up containers and VMs.  Auto-assign tags to your agents to prepare them to execute their intended jobs.</div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="skew-background skew-background-up" style="margin-top: 75px;">
      <div class="skew-content-up">
        <div class="blurb-outer-container">
          <div class="blurb-container white">
            <div class="blurb-item">
              <span style="font-size: 48px;">Anywhere</span>
              <div>
                <img class="blurb-image" src="Anywhere.png" width="400px">
              </div>
            </div>
            <div class="blurb-item">
              <div class="step-instructions">
                <div style="font-size: 24px;">
                  Install Without Reconfiguration
                </div>
              </div>
              <div class="step-text-bottom">
                <div style="width: 400px;">
                  <div class="blurb-list-item white">If your network is set up for Internet access through HTTPS then you are ready to go.  The agent will automatically create a secure connection to the saas glue cloud. </div>
                </div>
              </div>
              <br><br>
              <div class="step-instructions">
                <div style="font-size: 24px;">
                  Transcend Network Boundaries
                </div>
              </div>
              <div class="step-text-bottom">
                <div style="width: 400px;">
                  <div class="blurb-list-item white">Integrate across network types including on-prem to on-prem, hybrid clouds (on-prem to cloud) and multi-cloud (cloud to cloud).  No firewall changes are required for cloud/agent communication. </div>
                </div>
              </div>

              <br><br>
              <div class="step-instructions">
                <div style="font-size: 24px;">
                  Integrate SaaS Applications
                </div>
              </div>
              <div class="step-text-bottom">
                <div style="width: 400px;">
                  <div class="blurb-list-item white">Integrate SaaS applications and other services into your end-to-end process automation with scripts that call SaaS application APIs. </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="banner dark" style="margin-top: 50px;">
      Create Automated Processes With Our Powerful Job Builder
    </div>  

    <div class="feature-box-container">
      <div class="feature-box">
        <div class="feature-box-title">Jobs</div>
        <div class="feature-box-text">String scripts together to create a single automated job.  Structure the job into discrete tasks and assign them to run on agents.</div>
      </div>
      <div class="feature-box">
        <div class="feature-box-title">Runtime Variables</div>
        <div class="feature-box-text">Create or transform variables in scripts and pass them onto subsequent tasks.</div>
      </div>
      <div class="feature-box">
        <div class="feature-box-title">Environment Variables</div>
        <div class="feature-box-text">Define dynamic or static environment variables for your script runtime environment, without leaving permanent changes on the local device.</div>
      </div>
      <div class="feature-box">
        <div class="feature-box-title">Script Injection</div>
        <div class="feature-box-text">Inject scripts within scripts at runtime.  Flexibly reuse code without having to copy and paste.</div>
      </div>
      <div class="feature-box">
        <div class="feature-box-title">Tag-Based Task Assignment</div>
        <div class="feature-box-text">Create tags and attach them to agents.  Use tags to target the agent(s) where you want a task to be executed.</div>
      </div>
      <div class="feature-box">
        <div class="feature-box-title">Dynamic Task Routing</div>
        <div class="feature-box-text">Create routes based on your script output.  Use routes to dynamically determine which tasks will run in a job.</div>
      </div>
      <div class="feature-box">
        <div class="feature-box-title">Artifacts</div>
        <div class="feature-box-text">Artifacts will be downloaded to the local runtime environment and deleted when the script is done.</div>
      </div>
      <div class="feature-box">
        <div class="feature-box-title">Schedules</div>
        <div class="feature-box-text">Create schedules in a CRON format, or an interval or specific date.  Attach one or more schedules to a job definition for auto execution.</div>
      </div>
      <div class="feature-box">
        <div class="feature-box-title">Call Jobs Through The API</div>
        <div class="feature-box-text">Each job definition has a unique ID.  Securely kick off existing job definitions through the API.</div>
      </div>
      <div class="feature-box">
        <div class="feature-box-title">Create Jobs Through The API</div>
        <div class="feature-box-text">Create jobs in JSON format. Securely pass them into the API for execution.</div>
      </div>
      <div class="feature-box">
        <div class="feature-box-title">Monitor Jobs</div>
        <div class="feature-box-text">View job execution reports in the cloud.  Review output and analyze errors for each task in the job.</div>
      </div>
      <div class="feature-box">
        <div class="feature-box-title">Test Scripts In Console</div>
        <div class="feature-box-text">Test individual job scripts at no cost in the interactive console. Iteratively create, modify and run scripts and see real-time execution results.</div>
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
