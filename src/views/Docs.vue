<template>
  <div class="left-text">
    <div class="doc-sec-container" id="documentor_seccontainer">
      <div class="doc-sectionwrap" id="account-management_wrap">
        <div
          class="documentor-section section-13"
          id="account-management"
          data-section-id="13"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">1.</span
            >Account Management
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content"></div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="invite-team-members_wrap">
        <div
          class="documentor-section section-30"
          id="invite-team-members"
          data-section-id="30"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">1.1.</span
            >Invite Team Members
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >You can invite new team members by clicking the “Copy to
                clipboard” link, which will provide a url which can be used to
                join your team. Be aware that anyone who receives this link will
                be able to join your team.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >You can also invite new team members by entering their email
                address in one of the provided boxes and clicking “Add
                Teammates”. If additional boxes are needed, click the “+ add
                more teammates” link.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Click “Accept Invitations” to join other teams to which you
                have been invited.</span
              >
            </p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="product-documentation_wrap">
        <div
          class="documentor-section section-12"
          id="product-documentation"
          data-section-id="12"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">2.</span
            >Product Documentation
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content"></div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="saas-glue-framework-overview_wrap">
        <div
          class="documentor-section section-31"
          id="saas-glue-framework-overview"
          data-section-id="31"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">2.1.</span
            >Saas Glue Framework Overview
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <h2><span style="font-weight: 400">Cloud and Agents</span></h2>
            <p>
              <span style="font-weight: 400"
                >The basic components of the saas glue platform are the cloud
                service and Agents installed on machines.&nbsp; The machines can
                be physical, virtual or containers.&nbsp; And they can be
                located in many types of environments including corporate
                networks, private clouds and more.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >When agents are installed they begin sending a heartbeat to the
                saas glue cloud.&nbsp; They receive instructions to execute
                scripts and send the results back to the cloud.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2><span style="font-weight: 400">Scripts and Jobs</span></h2>
            <p>
              <span style="font-weight: 400"
                >Scripts can be tied together in Jobs with specific instructions
                on how they are to be run.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Saas glue can run any script and It can even run compiled
                code.&nbsp; The Agent doesn’t run the scripts.&nbsp; Instead it
                hands them off to the specified interpreter for execution and
                collects the output.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Scripts are contained in Steps which also include Arguments and
                Environment variables which can be passed to the script runtime
                environment.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Steps are contained in Tasks which can include one or more
                Steps. All Steps in a Task are executed sequentially on the same
                machine by the same Agent.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Jobs contain instructions for how a set of Tasks are to be
                run.&nbsp; They order the Tasks, direct them to the right
                Agent(s), pass in runtime variables and define conditions when
                there are alternate Task routes.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Jobs are the central feature that makes saas glue a powerful
                automation engine.&nbsp; They can reach across all kinds of
                networks, devices, languages and applications, incorporating
                them into unified, well-orchestrated workflows.
              </span>
            </p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="the-structure-of-jobs_wrap">
        <div
          class="documentor-section section-32"
          id="the-structure-of-jobs"
          data-section-id="32"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">2.2.</span
            >The Structure of Jobs
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >Jobs are a hierarchical structure of sub-components, including
                Tasks, Steps and Scripts.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Job</h2>
            <p>
              <span style="font-weight: 400"
                >The Job organizes Tasks into a flexible workflow.&nbsp; It
                contains instructions for how the Job is to be run and stores
                runtime variables to be consumed during Script execution.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Task</h2>
            <p>
              <span style="font-weight: 400"
                >The Task collects steps into a logical unit that run on an
                Agent.&nbsp; It also stores qualifications for which Agent(s)
                can run the Task.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Route codes define how the Job moves from Task to Task and sets
                conditions for alternate routing.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Step</h2>
            <p>
              <span style="font-weight: 400"
                >The Steps of a Task are executed in a set sequence.&nbsp; The
                Step object stores its order in the sequence and environment
                variables and command line arguments to be passed to Script
                execution.&nbsp; It can also store a specific command to use to
                execute the Script. This would override the default interpreter
                based on the Script type. For example, a command value of
                “/usr/bin/python2.7” for a Step running a python Script would
                result in the Script being executed with the interpreter located
                at “/usr/bin/python2.7” on the machine where the Step
                runs.</span
              >
            </p>
            <h2>&nbsp;</h2>
            <h2>Script</h2>
            <p>
              <span style="font-weight: 400"
                >The Script is a saas glue object which contains the code that
                is to be executed by the interpreter and the type of interpreter
                to use to run the script.</span
              >
            </p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="job-definition_wrap">
        <div
          class="documentor-section section-33"
          id="job-definition"
          data-section-id="33"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">2.3.</span
            >Job Definition
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >Job Definitions (JobDefs) are structured workflow templates
                that coordinate the execution of one or more Tasks to accomplish
                a goal. For example, a JobDef could consist of a single Task
                that watches for new files in a specific location. When a new
                file is discovered, it could launch a new Job based on another
                JobDef with a series of Tasks that constitute a data pipeline
                for processing the file.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >JobDefs are normally designed using the saas glue web
                application. However, they can also be created dynamically using
                the saas glue API.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >JobDefs are used to create Jobs, which are runtime
                implementations of JobDefs. Creating a Job from a JobDef can be
                accomplished in three ways:</span
              >
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400"
                >1. Schedule a JobDef using the saas glue web application or the
                saas glue API.&nbsp; When the Schedule is triggered, the JobDef
                will be used as a template to create and run a Job.&nbsp; A
                scheduled Job may be </span
              ><span style="font-weight: 400"
                >triggered but not run immediately or at all based on certain
                JobDef attributes.</span
              >
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400"
                >2. A Job can be launched from a JobDef manually using the saas
                glue API or using the saas glue web application.&nbsp;</span
              >
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400"
                >3. A JobDef can be defined in JSON and sent to the saas glue
                API in an Http POST.&nbsp;</span
              >
            </p>
            <p>&nbsp;</p>
            <pre class="dtab tcy" style="padding-left: 40px"></pre>
            <h2>Routes</h2>
            <p>
              <span style="font-weight: 400"
                >The JobDef ties Tasks together with routes. Routes include two
                components, the task name and the route pattern. The route
                pattern can be any valid javascript regular expression. For
                example, a route pattern of “^(?!fail$).*$” would match any
                route code other than “fail”. For a route to be satisfied, a
                task must be completed with a route code matching the route
                pattern.&nbsp;</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >By default, tasks that complete successfully (all steps in the
                task complete with exit code 0) have a blank route code. Tasks
                that fail (a step in the task completes with non-zero exit code)
                have route code “fail”. Tasks that are interrupted (either by
                ctl+c or canceled using saas glue) have route code “interrupt”.
                To set a custom route code, print a string to stdout following
                the pattern “@sgo{“route”, “[route name]”}” from a script. If
                multiple scripts within a task set a custom route code, the last
                one will be used.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Saas glue supports two types of task routing – inbound and
                outbound routes. Inbound routes require all routes to be
                satisfied before the target task is executed. For example, if we
                have inbound routes from “task1” with route pattern “.*” and
                “task2” with route pattern “.*” to “task3”,&nbsp; both routes
                must be satisfied for “task3” to execute.&nbsp;</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Outbound routes cause the target task to be executed every time
                the outbound route is satisfied. For example, if we have
                outbound routes from “task1” with route pattern “.*” to “task3”
                and from “task2” with route pattern “.*” to “task3”, then every
                time the “task1” route is satisfied, “task3” will be executed,
                and every time the “task2” route is satisfied, “task3” will be
                executed. An example use case would be a general failed task
                handler. You could implement this by creating an outbound route
                from every other task in the job to a “failed task handler”
                task. This scenario is facilitated in the web application by the
                “Route All To [task name]” button in the Workflow Designer
                view.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Task routes can be defined using the saas glue API for JobDefs
                and Jobs and using the saas glue web application.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >There are a few settings in the job definition that define
                conditions for how jobs are to be run.</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>Max Instances </b
              ><span style="font-weight: 400"
                >defines how many instances of a job can run concurrently.</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>Misfire Grace Time</b
              ><span style="font-weight: 400">
                defines how long a job can wait past a scheduled start time
                before it is cancelled.&nbsp; This setting applies only to jobs
                executed by a schedule.</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>Coalesce </b
              ><span style="font-weight: 400"
                >directs saas glue to skip all but one job when there are
                multiple jobs queued up.&nbsp; This setting is useful for
                scenarios where an agent has gone offline and missed the start
                time for several scheduled jobs.&nbsp; It may be desirable to
                run only one instance and skip the rest.</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>Pause on Failed Job</b
              ><span style="font-weight: 400">
                – if “true”, when a Job created from the JobDef fails, the
                JobDef will be “paused” until it is manually “resumed” (using
                the saas glue cloud interface or the API [link to JobDef API
                documentation]) or all failed Tasks are either canceled or
                completed successfully. This facilitates certain workflow
                scenarios, for example where all Jobs created from a JobDef must
                complete in order.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Job Definitions can include runtime variables.</span
              >
            </p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="task-definition_wrap">
        <div
          class="documentor-section section-34"
          id="task-definition"
          data-section-id="34"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">2.4.</span
            >Task Definition
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >Each Task can have one or more Steps that must be run in a set
                sequence.&nbsp;</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Tasks can target&nbsp; one or multiple Agents. If a Task
                targets multiple Agents each Agent will run separate instances
                of the Task in parallel. Once an Agent begins processing a Task,
                all Steps in the Task will be completed on that Agent machine.
                If a Task fails or is interrupted it can be restarted, although
                it may not be restarted on the machine where it was previously
                running.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >The Steps of a specific Task instance must all be completed by
                the same Agent because there are some sequences of events that
                cannot be shared across multiple machines.&nbsp; Here is an
                example.</span
              >
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400">1. Install Java</span>
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400">2. Run a Java application</span>
            </p>
            <p>
              <span style="font-weight: 400"
                >If step 1 runs on one machine and step 2 runs on a different
                machine where Java has not been installed, step2 will
                fail.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >The Job designer must understand the logical boundaries of each
                discrete part of the Job and design accordingly.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Dependencies on prior Task outcomes are stored in the Task
                definition “inbound” routes. &nbsp; They determine whether the
                Job route will route through a given Task or not. Downstream
                dependencies are stored in the Task definition “outbound”
                routes. They determine which Tasks will be started when this
                Task completes. See the JobDef routing description for
                details.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Task definitions store the qualifications for determining which
                Agent(s) can run the Task.&nbsp; Those qualifications are as
                follows.</span
              >
            </p>
            <p>&nbsp;</p>
            <ul>
              <li><span style="font-weight: 400">Any active Agent</span></li>
            </ul>
            <p>&nbsp;</p>
            <ul>
              <li>
                <span style="font-weight: 400"
                  >Any active Agent with tags as specified in the Task
                  definition</span
                >
              </li>
            </ul>
            <p>&nbsp;</p>
            <ul>
              <li><span style="font-weight: 400">All active Agents</span></li>
            </ul>
            <p>&nbsp;</p>
            <ul>
              <li>
                <span style="font-weight: 400"
                  >All active Agents with tags as specified in the Task
                  definition</span
                >
              </li>
            </ul>
            <p>&nbsp;</p>
            <ul>
              <li><span style="font-weight: 400">A specific Agent</span></li>
            </ul>
            <p>&nbsp;</p>
            <p>
              <span style="font-weight: 400"
                >Tags are user defined and must be formatted in key value pairs,
                such as “Linux=True”. Task Tags can be defined using the saas
                glue web application or the saas glue API.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >If a Task needs to run on a specific agent, use the Job
                Designer in the saas glue web application or the saas glue API
                to specify which agent should run the Task. It is also possible
                to dynamically determine the target agent at runtime using
                runtime variables. Simply set the target agent to
                “@sgg(“[runtime variable key]”)” and the agent id referenced by
                [runtime variable key] will be used to execute the Task.</span
              >
            </p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="step-definition_wrap">
        <div
          class="documentor-section section-35"
          id="step-definition"
          data-section-id="35"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">2.5.</span
            >Step Definition
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >Steps are contained within a Task and must be run in a set
                sequence.&nbsp; The Step definition stores its order in the
                sequence.&nbsp;&nbsp;</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Each Step can have only one Script object.&nbsp; The Step
                definition can store arguments or environment variables which
                are needed to run the script. Step arguments and environment
                variables can be set dynamically at runtime using Runtime
                Variables.&nbsp;</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >The command attribute can be used to specify the exact
                interpreter to use to execute the script for Steps created from
                this StepDef. It can also be used to set arguments that should
                be passed to that interpreter. For example, to pass a class path
                to the scala interpreter. If not specified, the default
                interpreter for the script type will be used to execute the
                script.&nbsp;</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >For example, if you have a script of type “python” and the
                “command” attribute is not set, then the default python
                interpreter on the machine where the Step runs will be used to
                execute the script. If the command attribute is set to
                “/usr/bin/python2.7”, then the interpreter in that location on
                the Agent machine will be used to run the script. The
                interpreter specified by the command attribute must exist on the
                machine on which the Step runs.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >The designer can give the Step definition a name to make it
                more convenient to work with.</span
              >
            </p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="script-definition_wrap">
        <div
          class="documentor-section section-36"
          id="script-definition"
          data-section-id="36"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">2.6.</span
            >Script Definition
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >The Script object stores the Script code.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >It also stores useful information about the Script including
                the Script language, the original author and who last edited
                it.&nbsp;&nbsp;</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Saas glue can be used to execute any Script.&nbsp; The Script
                type attribute is added to the Script object to make it easier
                to work with common scripting languages.&nbsp; For example, the
                saas glue cloud interface Script editor provides cues based on
                the script language. To use a script language not defined in
                saas glue use “SH” if the Script will run on Linux, Linux based
                or Mac operating systems and “CMD” for Windows and then define
                the “Command” attribute either in the StepDef or when executing
                the Script from the Console.&nbsp;</span
              ><span style="font-weight: 400">&nbsp;</span>
            </p>
            <p>
              <span style="font-weight: 400"
                >The following script types are predefined in saas glue.</span
              >
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400">0 = PYTHON</span>
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400">1 = NODE</span>
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400">2 = SH</span>
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400">3 = CMD</span>
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400">4 = RUBY</span>
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400">5 = LUA</span>
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400">6 = PERL</span>
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400">7 = PHP</span>
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400">8 = POWERSHELL</span>
            </p>
            <p>
              <span style="font-weight: 400"
                >Scripts can be set to be editable within the team. All Scripts
                are viewable within the team.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >The author can give the Script a name to make it more
                convenient to work with. The name must be unique within the
                team.</span
              >
            </p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="script-injection_wrap">
        <div
          class="documentor-section section-37"
          id="script-injection"
          data-section-id="37"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">2.7.</span
            >Script Injection
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >Scripts defined in saas glue can be injected into other scripts
                using the following syntax:</span
              >
            </p>
            <p><span style="font-weight: 400">@sgs(“[script name]”)</span></p>
            <p>
              <span style="font-weight: 400"
                >This line entered in a script will result in the script defined
                by [script name] being injected into the host script immediately
                before executing the script.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Scripts can be injected recursively meaning that “script 1” can
                reference “script 2” which can reference “script 3”, etc.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >However, the [script name] itself cannot be a variable – it
                must be the name of a script defined in your saas glue
                team.</span
              >
            </p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="runtime-variables_wrap">
        <div
          class="documentor-section section-38"
          id="runtime-variables"
          data-section-id="38"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">2.8.</span
            >Runtime Variables
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >Runtime Variables are key-value pairs. They provide a mechanism
                for dynamically injecting variable values in Script code,
                Arguments and Environment Variables of a Task Step when it is
                executed by a saas glue Agent. Runtime variables can be defined
                at design time on the Team level and in JobDefs, and when a Job
                is created and they can also be generated dynamically during
                Script execution.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2><span style="font-weight: 400">How to define</span></h2>
            <h3>
              <span style="font-weight: 400"
                >Team scoped runtime variables</span
              >
            </h3>
            <p>
              <span style="font-weight: 400"
                >Runtime Variables can be defined on the Team level using the
                saas glue cloud interface or the saas glue API.</span
              >
            </p>
            <p>&nbsp;</p>
            <h3>
              <span style="font-weight: 400"
                >JobDef scoped runtime variables</span
              >
            </h3>
            <p>
              <span style="font-weight: 400"
                >Runtime Variables can be defined in JobDefs using the saas glue
                cloud interface or the saas glue API.</span
              >
            </p>
            <p>&nbsp;</p>
            <h3>
              <span style="font-weight: 400">Job scoped runtime variables</span>
            </h3>
            <p>
              <span style="font-weight: 400"
                >Runtime Variables can be defined in a Job when the Job is
                created. When a Job is created using the saas glue API the
                runtime variables can be included in the Http POST request. When
                a Job is created from a JobDef in the saas glue cloud UI the
                runtime variables can be entered in the Job creation
                dialog.</span
              >
            </p>
            <p>&nbsp;</p>
            <h3>
              <span style="font-weight: 400"
                >Dynamically generated runtime variables</span
              >
            </h3>
            <p>
              <span style="font-weight: 400"
                >Runtime Variables can be generated dynamically during Script
                execution by printing a properly formatted string to stdout. The
                format is “@sgo{“[variable name]”: “[variable value]”}”.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >For example, the following line of python script code would
                dynamically create or modify a runtime variable with name
                “myKey” and value “myValue” when executed by a saas glue
                Agent:</span
              >
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400"
                >print ‘@sgg{“myKey”: “myValue”}’</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >The “myKey” runtime variable would now be defined as “myValue”
                for subsequent Steps in the Task being executed and for
                subsequent Tasks in the Job workflow.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Saas glue reserves the key word “route” to determine
                route-based pathing between Tasks in a Job workflow. So the
                following output “@sgg{“route”: “ok”}” would not create a
                runtime variable named “route”. Instead it would be used for
                routing from the executing Task in the Job workflow.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >If a runtime variable is defined on multiple levels, each
                successively granular level overrides the previous. For example,
                if we have a variable named “key” defined on the Team level with
                a value of “team_value” and in a JobDef with a value of
                “jobdef_value”, the JobDef value will override the Team value.
                If the variable is defined in a Job created from the JobDef with
                a value of “job_value”, the Job value will override the JobDef
                value. If within that Job a Script runs which prints the
                following string to stdout “sgo{“key”: “script_value”}”, the
                Script value will override the Job value and any subsequent
                reference to “key” will have the value “script_value”. A
                subsequent Script could override the value again.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>How to use</h2>
            <p>
              <span style="font-weight: 400"
                >Runtime Variables values can be dynamically injected into the
                Script code, Arguments and Environment Variables of a Step.
                Immediately before running a Task Step, the Agent will search
                the Step Script code Arguments for strings following the pattern
                “sgg(“[key]”)” and will replace them with the current value of
                the runtime variable with the name “[key]”.&nbsp; If no runtime
                variable with the name “[key]” exists, “null” will be injected
                instead.</span
              >
            </p>
            <p>&nbsp;</p>
            <h3>
              <span style="font-weight: 400"
                >Step Script code runtime variable injection</span
              >
            </h3>
            <p>
              <span style="font-weight: 400"
                >For example, if we have a python script with the following line
                of code:</span
              >
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400"
                >print(‘the value of “myKey” is “@sgg(“myKey”)”‘&nbsp;</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >and a runtime variable “myKey” with value “myValue”, the script
                will produce the following output:</span
              >
            </p>
            <p style="padding-left: 40px">
              <span style="font-weight: 400"
                >the value of “myKey” is “myValue”</span
              >
            </p>
            <p>&nbsp;</p>
            <h3>
              <span style="font-weight: 400"
                >Step Arguments runtime variable injection</span
              >
            </h3>
            <p>
              <span style="font-weight: 400"
                >If we have a Step Argument with value “@sgg(“myKey”) -out
                myFile.txt”, and the runtime value of “myKey” is “myValue” the
                Script code for the Step will be called with arguments “myValue
                -out myFile.txt”.</span
              >
            </p>
            <p>&nbsp;</p>
            <h3>
              <span style="font-weight: 400"
                >Step Environment Variables runtime variable injection</span
              >
            </h3>
            <p>
              <span style="font-weight: 400"
                >Runtime Variable injection for Step Environment Variables works
                slightly differently. Step Environment Variable keys are
                compared to the current runtime variables for matching keys. If
                a match is found, the runtime variable value will be used for
                the environment variable value when running the Script.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >For example, if we have a Step Environment Variable “myKey=”and
                a runtime variable “myKey” with value “myValue”, then the
                runtime script execution environment will have an environment
                variable “myKey=myValue”.</span
              >
            </p>
            <p>&nbsp;</p>
            <h3>
              <span style="font-weight: 400">Design time configuration</span>
            </h3>
            <p>
              <span style="font-weight: 400"
                >A StepDef can be configured so that Steps created from the
                StepDef utilize runtime variables in arguments and/or
                environment variables using the saas glue API or the saas glue
                cloud interface.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Runtime variable injection can also be utilized when running
                Scripts using the saas glue cloud interface Console.</span
              >
            </p>
            <p>&nbsp;</p>
            <h3>
              <span style="font-weight: 400"
                >Dynamically select Task target agent id</span
              >
            </h3>
            <p>
              <span style="font-weight: 400"
                >Runtime variables can be used to dynamically determine the
                target agent for Tasks that target a single specific agent at
                runtime. For example, if you have a runtime variable named
                “agentId” and the value is an actual agent id, and the Task
                target agent id is “@sgg(“agentId”)”, the task with the id
                matching the runtime variable value will be used to run the
                Task.</span
              >
            </p>
            <p>&nbsp;</p>
            <h3>
              <span style="font-weight: 400"
                >Save state with runtime variables</span
              >
            </h3>
            <p>
              <span style="font-weight: 400"
                >As Scripts are executing the corresponding stdout is monitored
                in real-time and searched for strings following the @sgo runtime
                variable generation pattern. When runtime variables are
                created/modified, the new values are sent to the saas glue
                cloud. If a Task fails and is restarted, the most recent runtime
                variable values will be delivered with the Task to the Agent
                where the Task resumes execution. Consequently, Scripts can be
                designed to utilize the most recent value of the runtime
                variable.&nbsp;</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >For example, if a Script is designed to iterate through records
                in a file, the line number could be printed to stdout with a
                string like “@sgo{“line_num”, “10”}” which would send the
                runtime variable “line_num” with a value of “10” to the saas
                glue cloud. If the Task failed on line “11” and the Task is
                restarted, the Script could resume processing the file on the
                line after “@sgg(“line_num”)” which would now have a value of
                “10”.&nbsp;</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >This behavior does not apply to Tasks that target multiple
                agents.</span
              >
            </p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="job-schedule_wrap">
        <div
          class="documentor-section section-39"
          id="job-schedule"
          data-section-id="39"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">2.9.</span
            >Job Schedule
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >Schedules can be created for Job Definitions (JobDefs) to
                automatically trigger Jobs to run.&nbsp; A JobDef can have more
                than one Schedule but a Schedule can be linked to only one
                JobDef.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >There are three types of schedules.</span
              >
            </p>
            <ul>
              <li style="font-weight: 400">
                <span style="font-weight: 400">Date</span>
              </li>
            </ul>
            <p>&nbsp;</p>
            <ul>
              <li style="font-weight: 400">
                <span style="font-weight: 400">Cron</span>
              </li>
            </ul>
            <p>&nbsp;</p>
            <ul>
              <li style="font-weight: 400">
                <span style="font-weight: 400">Interval</span>
              </li>
            </ul>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h2><span style="font-weight: 400">RunDate</span></h2>
            <p>
              <span style="font-weight: 400"
                >Date is the simplest schedule.&nbsp; It stores a single date
                and time for when the job will be triggered to run.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2><span style="font-weight: 400">Cron</span></h2>
            <p>
              <span style="font-weight: 400">Cron </span
              ><span style="font-weight: 400"
                >resembles the “Cron” utility found in most UNIX-like operating
                systems.&nbsp; The following fields are available to define a
                cron schedule.</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>Year &nbsp; </b
              ><span style="font-weight: 400">4-digit year</span>
            </p>
            <p style="padding-left: 40px">
              <b>Month</b><span style="font-weight: 400"> &nbsp; 1-12</span>
            </p>
            <p style="padding-left: 40px">
              <b>Day</b
              ><span style="font-weight: 400">
                &nbsp; day of the month (1-31)</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>Week</b
              ><span style="font-weight: 400"> &nbsp; ISO week (1-53)</span>
            </p>
            <p style="padding-left: 40px">
              <b>Day of Week</b
              ><span style="font-weight: 400">
                &nbsp; number or name of day (0-6 or
                mon,tue,wed,thu,fri,sat,sun)</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>Hour</b><span style="font-weight: 400"> &nbsp; 0-23</span>
            </p>
            <p style="padding-left: 40px">
              <b>Minute</b><span style="font-weight: 400"> &nbsp; 0-59</span>
            </p>
            <p style="padding-left: 40px">
              <b>Second</b><span style="font-weight: 400"> &nbsp; 0-59</span>
            </p>
            <p style="padding-left: 40px">
              <b>Start Date</b
              ><span style="font-weight: 400">
                &nbsp; earliest possible date/time to trigger the job</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>End Date</b
              ><span style="font-weight: 400">
                &nbsp; latest possible date/time to trigger the job</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>Jitter</b
              ><span style="font-weight: 400">
                &nbsp; advance or delay the job execution by jitter
                seconds</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >A cron schedule will trigger when current time matches all
                specified time constraints.&nbsp; Unlike with crontab
                expressions, you can omit fields that you don’t need.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2><span style="font-weight: 400">Interval</span></h2>
            <p>
              <span style="font-weight: 400"
                >Interval specifies a set amount of time that must lapse before
                a job will be triggered.&nbsp; </span
              ><span style="font-weight: 400"
                >The following fields are available to define an interval
                schedule.</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>Weeks</b
              ><span style="font-weight: 400">
                integer for the total number of weeks</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>Days</b
              ><span style="font-weight: 400">
                integer for the total number of days</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>Hours </b
              ><span style="font-weight: 400"
                >integer for the total number of hours</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>Seconds</b
              ><span style="font-weight: 400">
                integer for the total number of seconds</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>Start Date</b
              ><span style="font-weight: 400">
                &nbsp; earliest possible date/time to trigger the job</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>End Date</b
              ><span style="font-weight: 400">
                &nbsp; latest possible date/time to trigger the job</span
              >
            </p>
            <p style="padding-left: 40px">
              <b>Jitter</b
              ><span style="font-weight: 400">
                &nbsp; advance or delay the job execution by jitter
                seconds</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >An interval schedule will trigger a job when the time interval
                has been reached from the previous trigger time.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >The “Is Active” box must be checked to activate the
                schedule.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >The designer can give the schedule a name to make it more
                convenient to work with. The designer displays the last run date
                and the next run date for active schedules.</span
              >
            </p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="service-tasks_wrap">
        <div
          class="documentor-section section-40"
          id="service-tasks"
          data-section-id="40"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block"
              >2.10.</span
            >Service Tasks
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >Have you written “services” for Windows? Linux? Mac? Then you
                know that it can be difficult and that the process works
                differently in each environment. Occasionally work-arounds are
                implemented for actual services such as cron or the Windows Task
                Scheduler. If the machine running the service shuts down, the
                service is stopped.&nbsp;</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Saas glue makes it easy to create a service and deploy it to
                any operating system. To run a task as a service, simply set the
                “autoRestart” property of the task to “true” if using the saas
                glue API. If using the saas glue cloud UI, in the Job Designer
                -&gt; Task editor view, check the “Auto restart” checkbox. The
                task can target “any qualified agent” or a specific agent. If
                the agent running an autoRestart task is stopped or is inactive
                for more than 65 seconds, the task will automatically be
                restarted on another qualified agent. If no qualified agent is
                available, the task status will be set to “Failed”. The
                containing job can be configured to send a notification if this
                occurs. If an agent running an autoRestart task goes offline and
                then comes back online and the task is still running on that
                agent and has also been restarted on a new agent, the instance
                on the agent that went offline will be canceled.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Auto restart tasks can have multiple steps. The script for the
                last step in the task should be coded so that it will not exit
                unless and until you want the service to be stopped. Auto
                restart tasks that exit normally or crash are not restarted
                automatically. However, if an auto restart task is interrupted
                by ctrl+c or a SIGTERM/SIGKILL signal it will be automatically
                restarted. Consequently if the machine running an auto restart
                task is shut down, the task will be automatically
                restarted.</span
              >
            </p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="endpoint-object-reference_wrap">
        <div
          class="documentor-section section-14"
          id="endpoint-object-reference"
          data-section-id="14"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">3.</span
            >Endpoint / Object Reference
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content"></div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="agent_wrap">
        <div
          class="documentor-section section-17"
          id="agent"
          data-section-id="17"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">3.1.</span
            >Agent
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >The saas glue Agent is the vehicle for executing Scripts
                received from the saas glue cloud.&nbsp; The Agent can be
                installed on any supported operating system.&nbsp; When an Agent
                starts up it reports to the saas glue cloud which tracks
                information about the Agent including the attributes described
                below. A few of the attributes can be modified by users.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Reference</h2>

            <table id="tablepress-38" class="tablepress tablepress-id-38">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">Post (required)</th>
                  <th class="column-5">Post (optional)</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">id</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">_orgId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">machineId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">ipAddress</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1">createDate</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1">name</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1">tags</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1">numActiveTasks</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1">lastHeartbeatTime</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1">offline</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1">sysInfo</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-13 odd">
                  <td class="column-1">cron</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-14 even">
                  <td class="column-1">propertyOverrides</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Attribute Descriptions</h2>

            <table id="tablepress-39" class="tablepress tablepress-id-39">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>id</b></td>
                  <td class="column-2">
                    Saas glue automatically assigns an Agent ID when a new agent
                    is installed and calls back to the saas glue cloud. Users
                    can discover the ID in the Agent Monitor or through the API.
                    Tasks can be routed to a specific machine using the Agent
                    ID.
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>_orgId</b></td>
                  <td class="column-2">
                    The ID of the Org object where the TaskDef is created.
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>machineId</b></td>
                  <td class="column-2">
                    The hostname of the physical or virtual machine or container
                    where the Agent is running. <br />
                    <br />
                    Every machine connected to a saas glue account must have a
                    host name that is unique to the Org. The machineId will be
                    reported in every Agent heartbeat. If the hostname changes
                    then the Agent will be assigned a new ID.
                  </td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>ipAddress</b></td>
                  <td class="column-2">
                    The ipAddress attribute stores the IP Address of the machine
                    where the Agent is installed. <br />
                    <br />
                    The IP Address will be reported with each heartbeat. If the
                    IP address of the machine is changed the ipAddress attribute
                    will be updated but the Agent will not be assigned a new ID.
                  </td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1"><b>createDate</b></td>
                  <td class="column-2">
                    The date and time an Agent first runs on a machine..
                  </td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1"><b>name</b></td>
                  <td class="column-2">
                    The name attribute defaults to the machineId (hostname).
                    However, it can be modified to create a user-defined name.
                  </td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1"><b>tags</b></td>
                  <td class="column-2">
                    Tags assigned to an Agent. Up to ten tags can be assigned to
                    an Agent. <br />
                    <br />
                    Tags are user defined. They are used in the Job Designer and
                    Console for Task routing.
                  </td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1"><b>numActiveTasks</b></td>
                  <td class="column-2">
                    The number of Tasks currently being executed by this Agent.
                  </td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1"><b>lastHeartbeatTime</b></td>
                  <td class="column-2">
                    The last date and time saas glue received a heartbeat from
                    the Agent.
                  </td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1"><b>offline</b></td>
                  <td class="column-2">
                    If saas glue has not received a heartbeat from an Agent for
                    more than 5 minutes the offline attribute is set to "true".
                    If the Agent begins sending a heartbeat again the offline
                    attribute will be reset to “false”.
                  </td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1"><b>sysInfo</b></td>
                  <td class="column-2">
                    System information pertaining to the machine where the Agent
                    is installed. The following information (if available) will
                    be reported.<br />
                    <br />
                    Top 10 running processes (ordered by CPU usage)<br />
                    <br />
                    Installed OS details<br />
                    System date/time<br />
                    CPU current speed<br />
                    CPU temperature<br />
                    Current load information<br />
                    File system information<br />
                    File system performance statistics<br />
                    Installed user accounts<br />
                    Memory capacity/usage information<br />
                    Battery capacity/usage information<br />
                    Network connections<br />
                    Current internet latency<br />
                    Network statistics<br />
                    Disks IO<br />
                    <br />
                    The Agent will report system information when it is first
                    installed. It can be configured to report updated
                    information with each heartbeat.
                  </td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1"><b>cron</b></td>
                  <td class="column-2">
                    Cron jobs that reside on the machine where the Agent is
                    installed. These jobs can be uploaded to saas glue where
                    they can be centrally managed and orchestrated.
                  </td>
                </tr>
                <tr class="row-13 odd">
                  <td class="column-1"><b>propertyOverrides</b></td>
                  <td class="column-2">
                    Agent settings that can be overridden by users including the
                    following:<br />
                    <br />
                    maxActiveTasks limits the number of tasks an Agent can run
                    in parallel. If more than maxActiveTasks are routed to an
                    Agent, Tasks in excess of maxActiveTasks will be queued
                    until running Tasks are completed. If a Task is queued for
                    more than the Task TTL, the Task will be routed as
                    “failed”.<br />
                    <br />
                    inactivePeriodWaitTime sets the max amount of time an Agent
                    will remain idle before it runs a specified Task. This is
                    useful for some Tasks, such as shutting down an idle EC2
                    instance.<br />
                    <br />
                    inactiveAgentTask is the Task that will be run if and when
                    the inactivePeriodWait time is exceeded. The Task must be
                    JSON formatted and adhere to the Task specification.<br />
                    <br />
                    handleGeneralTasks can exclude an Agent from running Tasks
                    that are marked as "run on any machine" or "run on all
                    machines" if this attribute is set to “false”.<br />
                    <br />
                    trackSysInfo reports updated system information to the saas
                    glue cloud with each heartbeat.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Actions</h2>

            <table id="tablepress-40" class="tablepress tablepress-id-40">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>download</b></td>
                  <td class="column-2">
                    <br />
                    Download the Agent install from saas glue.<br />
                    <br />
                    agentDownload/agentstub/:platform/:arch?<br />
                    <br />
                    “platform” = required - must be one of “linux”, “win”,
                    “macos”, “alpine”, “freebsd”<br />
                    <br />
                    “arch” = optional - must be one of “x64”, “x86”, “armv6”,
                    “armv7”<br />
                    <br />
                    Not all platform/arch combinations are valid.<br />
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Sample Code</h2>
            <p>
              <span style="font-weight: 400"
                >To get all Agents objects in the Org:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request GET </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/agent'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'Auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span
                    ><span class="enlighter-text"> --data-raw </span
                    ><span class="enlighter-s0">''</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request GET
                'https://saasglue.com/api/v0/agent' --header 'Content-Type:
                application/json' --header 'Auth: [auth token]' --header
                '_orgId: [orgId]' --data-raw ''
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request GET 'https://saasglue.com/api/v0/agent' --header 'Content-Type: application/json' --header 'Auth: [auth token]' --header '_orgId: [orgId]' --data-raw ''</pre
            >
            <p>returns:</p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">200</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"numActiveTasks"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"lastHeartbeatTime"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1588863480826</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"offline"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">false</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"cron"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">""</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"machineId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Machine ID]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"ipAddress"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[IP Address]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Agent name]"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"propertyOverrides"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"trackSysInfo"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">false</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"maxActiveTasks"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">20</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"sysInfo"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"createDate"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Date]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"tags"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Agent ID]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Agent"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 200, "data": [ { "numActiveTasks": 0,
                "lastHeartbeatTime": 1588863480826, "offline": false, "cron":
                "", "_orgId": "[orgId]", "machineId": "[Machine ID]",
                "ipAddress": "[IP Address]", "name": "[Agent name]"
                "propertyOverrides": { "trackSysInfo": false, "maxActiveTasks":
                20 }, "sysInfo": {}, "createDate": "[Date]", "tags": {}, "id":
                "[Agent ID]", "version": 0, "type": "Agent" } } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 200,
    "data": [
        {
            "numActiveTasks": 0,
            "lastHeartbeatTime": 1588863480826,
            "offline": false,
            "cron": "",
            "_orgId": "[orgId]",
            "machineId": "[Machine ID]",
            "ipAddress": "[IP Address]",
            "name": "[Agent name]"
            "propertyOverrides": {
                "trackSysInfo": false,
                "maxActiveTasks": 20
            },
            "sysInfo": {},
            "createDate": "[Date]",
            "tags": {},
            "id": "[Agent ID]",
            "version": 0,
            "type": "Agent"
        }
    }
}</pre
            >
            <p>&nbsp;</p>
            <p>
              <span style="font-weight: 400">To update an Agent property:</span>
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request PUT </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/agent/properties/[agentId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'Content-Type: text/plain'</span
                    ><span class="enlighter-text"> \</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text">--data-raw </span
                    ><span class="enlighter-s0">'{</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "trackSysInfo": true</span>
                  </div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0">}'</span></div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request PUT
                'https://saasglue.com/api/v0/agent/properties/[agentId]'
                --header 'Content-Type: application/json' --header 'auth: [auth
                token]' --header '_orgId: [orgId]' --header 'Content-Type:
                text/plain' \ --data-raw '{ "trackSysInfo": true }'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request PUT 'https://saasglue.com/api/v0/agent/properties/[agentId]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]' --header 'Content-Type: text/plain' \
--data-raw '{
    "trackSysInfo": true
}'</pre
            >
            <p>returns:</p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">200</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"numActiveTasks"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"lastHeartbeatTime"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1588863480826</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"offline"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">false</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"cron"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">""</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"machineId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Machine ID]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"ipAddress"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[IP Address]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Agent Name]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"propertyOverrides"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"trackSysInfo"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">true</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"maxActiveTasks"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">20</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"sysInfo"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"createDate"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Date]]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"tags"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Agent ID]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Agent"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 200, "data": { "numActiveTasks": 0,
                "lastHeartbeatTime": 1588863480826, "offline": false, "cron":
                "", "_orgId": "[orgId]", "machineId": "[Machine ID]",
                "ipAddress": "[IP Address]", "name": "[Agent Name]",
                "propertyOverrides": { "trackSysInfo": true, "maxActiveTasks":
                20 }, "sysInfo": {}, "createDate": "[Date]]", "tags": {}, "id":
                "[Agent ID]", "version": 0, "type": "Agent" } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 200,
    "data": {
        "numActiveTasks": 0,
        "lastHeartbeatTime": 1588863480826,
        "offline": false,
        "cron": "",
        "_orgId": "[orgId]",
        "machineId": "[Machine ID]",
        "ipAddress": "[IP Address]",
        "name": "[Agent Name]",
        "propertyOverrides": {
            "trackSysInfo": true,
            "maxActiveTasks": 20
        },
        "sysInfo": {},
        "createDate": "[Date]]",
        "tags": {},
        "id": "[Agent ID]",
        "version": 0,
        "type": "Agent"
    }
}
</pre
            >
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="artifact_wrap">
        <div
          class="documentor-section section-18"
          id="artifact"
          data-section-id="18"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">3.2.</span
            >Artifact
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >Artifacts are files that can be uploaded to saas glue to be
                used in the execution of Jobs and Tasks.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >An http GET request will return a secure URL which can be used
                to download an artifact. Http PUT and POST requests will return
                a secure URL which can be used to upload an artifact.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Reference</h2>

            <table id="tablepress-4" class="tablepress tablepress-id-4">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">POST (required)</th>
                  <th class="column-5">POST (optional)</th>
                  <th class="column-6">DELETE</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">id</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                  <td class="column-6">x</td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">_orgId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">name</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">prefix</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                  <td class="column-6"></td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Attribute Descriptions</h2>

            <table id="tablepress-5" class="tablepress tablepress-id-5">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>id</b></td>
                  <td class="column-2">
                    Unique ID assigned when a new Artifact object is created.
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>_orgId</b></td>
                  <td class="column-2">
                    The ID of the Org object where the TaskDef is created.
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>name</b></td>
                  <td class="column-2">
                    Artifact Name is the name of the file that is uploaded. The
                    combination of Prefix and Name attributes for an Artifact
                    must be unique within an Org.
                  </td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>prefix</b></td>
                  <td class="column-2">
                    Prefix is the path name where an artifact is stored in saas
                    glue. The path can include one or more "/" delimited folder
                    names - e.g. "prod/loader/".
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Sample Code</h2>
            <p><span style="font-weight: 400">To upload an artifact:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request POST </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/artifact'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'Content-Type: text/plain'</span
                    ><span class="enlighter-text"> \</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text">--data-raw </span
                    ><span class="enlighter-s0">'{</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "_orgId": "[orgId]]",</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "prefix": "[prefix]",</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "name": "[file name]"</span>
                  </div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0">}'</span></div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request POST
                'https://saasglue.com/api/v0/artifact' --header 'Content-Type:
                application/json' --header 'auth: [auth token]' --header
                '_orgId: [orgId]' --header 'Content-Type: text/plain' \
                --data-raw '{ "_orgId": "[orgId]]", "prefix": "[prefix]",
                "name": "[file name]" }'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request POST 'https://saasglue.com/api/v0/artifact' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]' --header 'Content-Type: text/plain' \
--data-raw '{
    "_orgId": "[orgId]]",
    "prefix": "[prefix]",
    "name": "[file name]"
}'
</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">201</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"prefix"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[prefix]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Artifact"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"url"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[secure url]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[file name]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Artifact ID]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 201, "data": { "prefix": "[prefix]", "type":
                "Artifact", "url": "[secure url]", "_orgId": "[orgId]", "name":
                "[file name]", "id": "[Artifact ID]", "version": 0 } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 201,
    "data": {
        "prefix": "[prefix]",
        "type": "Artifact",
        "url": "[secure url]",
        "_orgId": "[orgId]",
        "name": "[file name]",
        "id": "[Artifact ID]",
        "version": 0
    }
}
</pre
            >
            <p>&nbsp;</p>
            <p>
              <span style="font-weight: 400"
                >Now use the “url” returned from the previous call to upload the
                file to saas glue:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text">curl -v --upload-file </span
                    ><span class="enlighter-g1">[</span
                    ><span class="enlighter-text">file name</span
                    ><span class="enlighter-g1">]</span
                    ><span class="enlighter-text"> </span
                    ><span class="enlighter-g1">[</span
                    ><span class="enlighter-text">url</span
                    ><span class="enlighter-g1">]</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: multipart/form-data'</span
                    >
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl -v --upload-file [file name] [url] --header 'Content-Type:
                multipart/form-data'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl -v --upload-file [file name] [url] --header 'Content-Type: multipart/form-data'</pre
            >
            <p>&nbsp;</p>
            <p>
              <span style="font-weight: 400">To download an artifact:</span>
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request GET </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/artifact/[ArtifactID]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span
                    ><span class="enlighter-text"> --data-raw </span
                    ><span class="enlighter-s0">''</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request GET
                'https://saasglue.com/api/v0/artifact/[ArtifactID]' --header
                'Content-Type: application/json' --header 'auth: [auth token]'
                --header '_orgId: [orgId]' --data-raw ''
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request GET 'https://saasglue.com/api/v0/artifact/[ArtifactID]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]' --data-raw ''</pre
            >
            <p>&nbsp;</p>
            <p>
              <span style="font-weight: 400"
                >Now use the “url” returned from the previous call to download
                the file:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text">curl </span
                    ><span class="enlighter-g1">[</span
                    ><span class="enlighter-text">url</span
                    ><span class="enlighter-g1">]</span
                    ><span class="enlighter-text"> </span
                    ><span class="enlighter-g1">&gt;</span
                    ><span class="enlighter-text"> </span
                    ><span class="enlighter-g1">[</span
                    ><span class="enlighter-text">file name</span
                    ><span class="enlighter-g1">]</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">curl [url] &gt; [file name]</div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl [url] &gt; [file name]</pre
            >
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="job_wrap">
        <div
          class="documentor-section section-19"
          id="job"
          data-section-id="19"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">3.3.</span
            >Job
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >A Job is the runtime implementation of a JobDef. A Job can be
                created from an existing JobDef or from a properly formatted
                JSON document. Jobs are automatically submitted for execution
                when they are created.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Jobs can be created from a JobDef by 1) scheduling the JobDef,
                2) with the saas glue web application or 3) by submitting a POST
                to the Job API endpoint.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Jobs are created from a JSON document by submitting the JSON
                document to the Job API endpoint.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Reference</h2>

            <table id="tablepress-6" class="tablepress tablepress-id-6">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">Post (required)</th>
                  <th class="column-5">Post (optional)</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">id</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">_orgId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">_jobDefId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4">x1</td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">runId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1">name</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4">x2</td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1">createdBy</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1">dateCreated</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1">dateScheduled</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1">dateStarted</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1">dateCompleted</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1">status</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-13 odd">
                  <td class="column-1">error</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-14 even">
                  <td class="column-1">runtimeVars</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-15 odd">
                  <td class="column-1">runAsService</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
              </tbody>
            </table>

            <p>1 Required if Job is created from JobDef object</p>
            <p>2 Required if Job is created from API call</p>
            <p>&nbsp;</p>
            <h2>Attribute Descriptions</h2>

            <table id="tablepress-7" class="tablepress tablepress-id-7">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>id</b></td>
                  <td class="column-2">
                    Unique ID assigned when a new Job object is created.
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>_orgId</b></td>
                  <td class="column-2">
                    The ID of the Org object where the Job is created.
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>_jobDefId</b></td>
                  <td class="column-2">
                    The JobDef ID from which the Job was created. It only
                    applies to Jobs created from a JobDef object.
                  </td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>runId</b></td>
                  <td class="column-2">
                    JobDefs have a counter that is incremented each time a Job
                    is created from the JobDef object. The runId attribute is
                    the value of that counter when the Job was created. It can
                    be used to order Jobs created from the same JobDef
                    sequentially. For example, if a given Job object is the
                    third one ever created from a JobDef object, it will have a
                    runId attribute of 3.
                  </td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1"><b>name</b></td>
                  <td class="column-2">
                    The Job name. If the Job is created from a JobDef, the Job
                    name is copied from the JobDef name. If the Job is created
                    from JSON, the name must be included in the JSON document.
                  </td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1"><b>createdBy</b></td>
                  <td class="column-2">
                    The id of the user who created the Job. For Jobs created
                    from a JobDef it will be the user who created the JobDef
                    object. For Jobs created from an API call it will be based
                    on the auth token of the user submitting the JSON document.
                  </td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1"><b>dateCreated</b></td>
                  <td class="column-2">
                    The date and time the Job was created.
                  </td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1"><b>dateScheduled</b></td>
                  <td class="column-2">
                    The date and time a Job is scheduled to run. It only applies
                    to Jobs created from JobDef objects with a Schedule.
                  </td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1"><b>dateStarted</b></td>
                  <td class="column-2">The date and time the Job started.</td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1"><b>dateCompleted</b></td>
                  <td class="column-2">The date and time the Job completed.</td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1"><b>status</b></td>
                  <td class="column-2">
                    The current Job status. Here are the possible values.<br />
                    <br />
                    0 = NOT_STARTED<br />
                    10 = RUNNING<br />
                    14 = INTERRUPTING<br />
                    15 = INTERRUPTED<br />
                    17 = CANCELLING<br />
                    20 = SUCCEEDED<br />
                    21 = CANCELLED<br />
                    22 = FAILED<br />
                    23 = SKIPPED
                  </td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1"><b>error</b></td>
                  <td class="column-2">
                    The error message if any error occurred running the Job.
                  </td>
                </tr>
                <tr class="row-13 odd">
                  <td class="column-1"><b>runtimeVarsx</b></td>
                  <td class="column-2">
                    Runtime variables for a Job are set when the Job is created
                    manually (not by a schedule). If the Job is created from a
                    JobDef and any Job runtime variables have the same name as
                    the JobDef runtime variables, the Job values will override
                    the JobDef values.<br />
                    <br />
                    {“key1”: “value1”, “key2”: “value2”}
                  </td>
                </tr>
                <tr class="row-14 even">
                  <td class="column-1"><b>runAsService</b></td>
                  <td class="column-2">
                    If “true” the Job will run as a service.<br />
                    <br />
                    runAsService Jobs can contain only one Task. The script in
                    the last step of the Task must be written in such a way as
                    to prevent the script from exiting, for example with a
                    “while loop”. If the script exits (either naturally or by a
                    crash) the Job will not be restarted.<br />
                    <br />
                    If the Agent on which the Job is running fails to send a
                    heartbeat for 30 minutes, the Job will be republished to
                    another qualified Agent. If the original Agent subsequently
                    connects and the Job is still running on that Agent, it will
                    be CANCELLED on that Agent.<br />
                    <br />
                    A runAsService Job will stop if it is in a SUCCEEDED,
                    CANCELLED or FAILED state.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Actions</h2>

            <table id="tablepress-8" class="tablepress tablepress-id-8">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>interrupt</b></td>
                  <td class="column-2">
                    Interrupt a job. Job status must be RUNNING.<br />
                    jobaction/interrupt/:jobId
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>restart</b></td>
                  <td class="column-2">
                    Restart a job. Job status must be INTERRUPTED or FAILED.<br />
                    jobaction/restart/:jobId
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>cancel</b></td>
                  <td class="column-2">
                    Cancel a job. Job status must be NOT_STARTED, RUNNING,
                    INTERRUPTING or INTERRUPTED.<br />
                    jobaction/cancel/:jobId
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Sample Code</h2>
            <p>
              <span style="font-weight: 400"
                >To create and run an ad hoc job:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request POST </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/job'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'Content-Type: text/plain'</span
                    ><span class="enlighter-text"> --data </span
                    ><span class="enlighter-s0">'{</span>
                  </div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "job": {</span></div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "name": "Job Name",</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "dateCreated": "[date]",</span>
                  </div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "tasks": [</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> {</span></div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "_orgId": "[orgId]",</span>
                  </div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "name": "Task1",</span></div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "requiredTags": ,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0">
                      "requiredTags": {"tag": "value"},</span
                    >
                  </div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "dependsOn": [],</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "steps": [</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> {</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "name": "Step1",</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "script": {</span></div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "scriptType": "SH",</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "code": "bHMgLWx0cgo="</span>
                  </div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> },</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "order": 0,</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "arguments": "",</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "variables": ""</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> }</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> ]</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> }</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> ]</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> }</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0">}'</span></div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request POST 'https://saasglue.com/api/v0/job'
                --header 'Content-Type: application/json' --header 'auth: [auth
                token]' --header '_orgId: [orgId]' --header 'Content-Type:
                text/plain' --data '{ "job": { "name": "Job Name",
                "dateCreated": "[date]", "tasks": [ { "_orgId": "[orgId]",
                "name": "Task1", "requiredTags": , "requiredTags": {"tag":
                "value"}, "dependsOn": [], "steps": [ { "name": "Step1",
                "script": { "scriptType": "SH", "code": "bHMgLWx0cgo=" },
                "order": 0, "arguments": "", "variables": "" } ] } ] } }'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request POST 'https://saasglue.com/api/v0/job' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]' --header 'Content-Type: text/plain' --data '{
    "job": {
        "name": "Job Name",
        "dateCreated": "[date]",
        "tasks": [
            {
                "_orgId": "[orgId]",
                "name": "Task1",
                "requiredTags": ,
                "requiredTags": {"tag": "value"},
                "dependsOn": [],
                "steps": [
                    {
                        "name": "Step1",
                        "script": {
                            "scriptType": "SH",
                            "code": "bHMgLWx0cgo="
                        },
                        "order": 0,
                        "arguments": "",
                        "variables": ""
                    }
                ]
            }
        ]
    }
}'
</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">201</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"dateCreated"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[date]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"runAsService"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">false</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Job Name"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"createdBy"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[userId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"dateStarted"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[date]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"status"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">10</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"runtimeVars"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Job id]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Job"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 201, "data": { "dateCreated": "[date]",
                "runAsService": false, "name": "Job Name", "_orgId": "[orgId]",
                "createdBy": "[userId]", "dateStarted": "[date]", "status": 10,
                "runtimeVars": {}, "id": "[Job id]", "version": 0, "type": "Job"
                } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 201,
    "data": {
        "dateCreated": "[date]",
        "runAsService": false,
        "name": "Job Name",
        "_orgId": "[orgId]",
        "createdBy": "[userId]",
        "dateStarted": "[date]",
        "status": 10,
        "runtimeVars": {},
        "id": "[Job id]",
        "version": 0,
        "type": "Job"
    }
}
</pre
            >
            <p>&nbsp;</p>
            <p>
              <span style="font-weight: 400"
                >To create and run a job based on a JobDef template:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request POST </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/job'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'_orgId: [orgId]’ --header '</span
                    ><span class="enlighter-text">_jobDefId: </span
                    ><span class="enlighter-g1">[</span
                    ><span class="enlighter-text">jobDefId</span
                    ><span class="enlighter-g1">]</span
                    ><span class="enlighter-s0">' --data-raw '</span
                    ><span class="enlighter-text">'</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request POST 'https://saasglue.com/api/v0/job'
                --header 'Content-Type: application/json' --header 'auth: [auth
                token]' --header '_orgId: [orgId]’ --header '_jobDefId:
                [jobDefId]' --data-raw ''
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request POST 'https://saasglue.com/api/v0/job' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]’ --header '_jobDefId: [jobDefId]' --data-raw ''</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">201</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"dateCreated"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[date]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"runAsService"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">false</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[date]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_jobDefId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[date]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"runId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">14</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[name]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"createdBy"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[userId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"status"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"runtimeVars"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[jobId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Job"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 201, "data": { "dateCreated": "[date]",
                "runAsService": false, "_orgId": "[date]", "_jobDefId":
                "[date]", "runId": 14, "name": "[name]", "createdBy":
                "[userId]", "status": 0, "runtimeVars": {}, "id": "[jobId]",
                "version": 0, "type": "Job" } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 201,
    "data": {
        "dateCreated": "[date]",
        "runAsService": false,
        "_orgId": "[date]",
        "_jobDefId": "[date]",
        "runId": 14,
        "name": "[name]",
        "createdBy": "[userId]",
        "status": 0,
        "runtimeVars": {},
        "id": "[jobId]",
        "version": 0,
        "type": "Job"
    }
}
</pre
            >
            <p>&nbsp;</p>
            <p>
              <span style="font-weight: 400"
                >To get a job using the job id:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/job/[jobId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                'https://saasglue.com/api/v0/job/[jobId]' --header
                'Content-Type: application/json' --header 'auth: [auth token]'
                --header '_orgId: [orgId]'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
'https://saasglue.com/api/v0/job/[jobId]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]'</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">200</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"dateCreated"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[date]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"runAsService"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">false</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Job Name"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"createdBy"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[userId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"dateStarted"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[date]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"status"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">10</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"runtimeVars"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Job id]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Job"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 200, "data": { "dateCreated": "[date]",
                "runAsService": false, "name": "Job Name", "_orgId": "[orgId]",
                "createdBy": "[userId]", "dateStarted": "[date]", "status": 10,
                "runtimeVars": {}, "id": "[Job id]", "version": 0, "type": "Job"
                } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 200,
    "data": {
        "dateCreated": "[date]",
        "runAsService": false,
        "name": "Job Name",
        "_orgId": "[orgId]",
        "createdBy": "[userId]",
        "dateStarted": "[date]",
        "status": 10,
        "runtimeVars": {},
        "id": "[Job id]",
        "version": 0,
        "type": "Job"
    }
}
</pre
            >
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="jobdef_wrap">
        <div
          class="documentor-section section-20"
          id="jobdef"
          data-section-id="20"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">3.4.</span
            >JobDef
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >A JobDef object is a template used to create and run a
                job.&nbsp; Typically a job template is created with the Job
                Designer and stored in a saas glue account.&nbsp;&nbsp;</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >Jobs can also be created by submitting a JobDef object in JSON
                format to the API. In this way, ad hoc jobs can be created and
                executed dynamically.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Reference</h2>

            <table id="tablepress-9" class="tablepress tablepress-id-9">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">Post (required)</th>
                  <th class="column-5">Post (optional)</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">id</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">_orgId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">name</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">status</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1">lastRunId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1">maxInstances</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1">misfireGraceTime</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1">coalesce</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1">createdBy</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1">dateCreated</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1">runtimeVars</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-13 odd">
                  <td class="column-1">pauseOnFailedJob</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Attribute Descriptions</h2>

            <table id="tablepress-10" class="tablepress tablepress-id-10">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>Id</b></td>
                  <td class="column-2">
                    Unique ID assigned when a new JobDef object is created.
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>_orgId</b></td>
                  <td class="column-2">
                    The ID of the Org object where the JobDef is created.
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>name</b></td>
                  <td class="column-2">
                    This attribute stores a user created name for the JobDef
                    object. The name should be descriptive but does not have to
                    be unique.
                  </td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>status</b></td>
                  <td class="column-2">
                    This attribute records the current status of the JobDef
                    object. Here are the possible statuses.<br />
                    <br />
                    10 = RUNNING - indicates that new Jobs can be created and
                    run using this JobDef.<br />
                    <br />
                    15 = PAUSED - indicates that new Jobs from this JobDef can
                    be created but will not run until the JobDef status is
                    RUNNING.
                  </td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1"><b>lastRunId</b></td>
                  <td class="column-2">
                    Set to 0 for new JobDef objects and is incremented for each
                    Job created from a given JobDef.
                  </td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1"><b>maxInstances</b></td>
                  <td class="column-2">
                    The maximum number of parallel running Jobs created from the
                    JobDef. For instance, if set to "1", only one Job will run
                    at a time. Any additional Jobs created will be queued to run
                    when the current Job is finished.
                  </td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1"><b>misfireGraceTime</b></td>
                  <td class="column-2">
                    The amount of time a Job can be queued past the scheduled
                    start time before it is cancelled. This attribute can only
                    be used with scheduled JobDefs. It is useful for situations
                    when time is a critical factor in running a Job.
                  </td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1"><b>coalesce</b></td>
                  <td class="column-2">
                    The coalesce attribute helps job designers determine how to
                    handle situations where a JobDef object has multiple queued
                    Jobs. This could occur if multiple Jobs are created but
                    maxInstances is set to 1 or if Jobs are created when a
                    JobDef is PAUSED. The next time saas glue is able to run
                    Jobs for the given JobDef, it may not be practical or
                    desirable to run all the queued Jobs. If coalesce is set to
                    TRUE, the first queued Job will run and the rest will be
                    SKIPPED with the error message "Job skipped due to
                    coalesce". Otherwise all Jobs will run in parallel.
                  </td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1"><b>createdBy</b></td>
                  <td class="column-2">
                    The ID of the User who created the JobDef object.
                  </td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1"><b>dateCreated</b></td>
                  <td class="column-2">
                    The date/time the JobDef object was created.
                  </td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1"><b>runtimeVars</b></td>
                  <td class="column-2">
                    A list of key/value pairs that can be dynamically injected
                    into Job Scripts, Script arguments or environment variables
                    at runtime.<br />
                    <br />
                    {“key1”: “value1”, “key2”: “value2”}
                  </td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1"><b>pauseOnFailedJob</b></td>
                  <td class="column-2">
                    This attribute can be used for example for JobDef objects
                    with recurring Job executions that must complete in order.
                    If a Job created from a JobDef is interrupted or fails and
                    the JobDef pauseOnFailedJob attribute is TRUE, the JobDef
                    Status will be updated to PAUSED. This will prevent all
                    future Job executions until the Job is completed with status
                    SUCCEEDED, CANCELLED or SKIPPED and there are no other
                    INTERRUPTED or FAILED Jobs for this JobDef. Users can also
                    manually pause or resume JobDefs.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Sample Code</h2>
            <p><span style="font-weight: 400">To create a JobDef</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request POST </span
                    ><span class="enlighter-s0"
                      >'http://saasglue.com/api/v0/jobdef'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'Content-Type: text/plain'</span
                    ><span class="enlighter-text"> \</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text">--data </span
                    ><span class="enlighter-s0">'{</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "_orgId" : "[orgId]",</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "name" : "Job Name"</span>
                  </div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0">}'</span></div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request POST
                'http://saasglue.com/api/v0/jobdef' --header 'Content-Type:
                application/json' --header 'auth: [auth token]' --header
                '_orgId: [orgId]' --header 'Content-Type: text/plain' \ --data
                '{ "_orgId" : "[orgId]", "name" : "Job Name" }'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request POST 'http://saasglue.com/api/v0/jobdef' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]' --header 'Content-Type: text/plain' \
--data '{
    "_orgId" : "[orgId]",
    "name" : "Job Name"
}'
</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">201</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"status"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">10</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"lastRunId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"maxInstances"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"dateCreated"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[date]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"pauseOnFailedJob"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">false</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Job Name"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"createdBy"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[userId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[id of new JobDef]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"JobDef"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 201, "data": { "status": 10, "lastRunId": 0,
                "maxInstances": 1, "dateCreated": "[date]", "pauseOnFailedJob":
                false, "_orgId": "[orgId]", "name": "Job Name", "createdBy":
                "[userId]", "id": "[id of new JobDef]", "version": 0, "type":
                "JobDef" } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 201,
    "data": {
        "status": 10,
        "lastRunId": 0,
        "maxInstances": 1,
        "dateCreated": "[date]",
        "pauseOnFailedJob": false,
        "_orgId": "[orgId]",
        "name": "Job Name",
        "createdBy": "[userId]",
        "id": "[id of new JobDef]",
        "version": 0,
        "type": "JobDef"
    }
}
</pre
            >
            <p>&nbsp;</p>
            <p>
              <span style="font-weight: 400"
                >To get a JobDef using the jobDefId:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request GET </span
                    ><span class="enlighter-s0"
                      >'http://saasglue.com/api/v0/jobdef/[JobDef id]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request GET
                'http://saasglue.com/api/v0/jobdef/[JobDef id]' --header
                'Content-Type: application/json' --header 'auth: [auth token]'
                --header '_orgId: [orgId]'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request GET 'http://saasglue.com/api/v0/jobdef/[JobDef id]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]'</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">200</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"status"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">10</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"lastRunId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"maxInstances"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"dateCreated"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[date]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"pauseOnFailedJob"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">false</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Job Name"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"createdBy"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[userId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[JobDef id]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"JobDef"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 200, "data": { "status": 10, "lastRunId": 0,
                "maxInstances": 1, "dateCreated": "[date]", "pauseOnFailedJob":
                false, "_orgId": "[orgId]", "name": "Job Name", "createdBy":
                "[userId]", "id": "[JobDef id]", "version": 0, "type": "JobDef"
                } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 200,
    "data": {
        "status": 10,
        "lastRunId": 0,
        "maxInstances": 1,
        "dateCreated": "[date]",
        "pauseOnFailedJob": false,
        "_orgId": "[orgId]",
        "name": "Job Name",
        "createdBy": "[userId]",
        "id": "[JobDef id]",
        "version": 0,
        "type": "JobDef"
    }
}
</pre
            >
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="schedule_wrap">
        <div
          class="documentor-section section-21"
          id="schedule"
          data-section-id="21"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">3.5.</span
            >Schedule
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >A Schedule defines when a JobDef runs. A JobDef can have
                multiple Schedules but a Schedule can only be assigned to a
                single JobDef.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>General Schedule Reference</h2>

            <table id="tablepress-11" class="tablepress tablepress-id-11">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">POST (required)</th>
                  <th class="column-5">POST (optional)</th>
                  <th class="column-6">DELETE</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">id</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                  <td class="column-6">x</td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">_orgId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">createdBy</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">lastUpdatedBy</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1">lastScheduledRunDate</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1">nextScheduledRunDate</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1">name</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1">isActive</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1">TriggerType</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1">misfire_grace_time</td>
                  <td class="column-2"></td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1">coalesce</td>
                  <td class="column-2"></td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-13 odd">
                  <td class="column-1">max_instances</td>
                  <td class="column-2"></td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-14 even">
                  <td class="column-1">RunDate</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x1</td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-15 odd">
                  <td class="column-1">cron2</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
                <tr class="row-16 even">
                  <td class="column-1">interval3</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                  <td class="column-6"></td>
                </tr>
              </tbody>
            </table>

            <p>1 Required only for “date” type Schedules</p>
            <p>
              <span style="font-weight: 400"
                >2 Consists of key value pairs defined in the “Cron Schedule
                Reference” – required for “cron” type Schedules</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >3 Consists of key value pairs defined in the “Interval Schedule
                Reference” – required for “interval” type Schedules</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Cron Schedule Reference</h2>
            <p>
              <span style="font-weight: 400"
                >This reference is to be used in connection with the General
                Schedule Reference above.</span
              >
            </p>

            <table id="tablepress-16" class="tablepress tablepress-id-16">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">POST (required)</th>
                  <th class="column-5">POST (optional)</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">Year</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">Month</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">Day</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">Week</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1">Day_Of_Week</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1">Hour</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1">Minute</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1">Second</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1">Start_Date</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1">End_Date</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1">Jitter</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
              </tbody>
            </table>

            <p>
              <b>Note</b
              ><span style="font-weight: 400"
                >: At least one attribute is required for a “cron” type
                Schedule</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Interval Schedule Reference</h2>
            <p>
              <span style="font-weight: 400"
                >This reference is to be used in connection with the General
                Schedule Reference above.</span
              >
            </p>

            <table id="tablepress-17" class="tablepress tablepress-id-17">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">Post (required)</th>
                  <th class="column-5">Post (optional)</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">Weeks</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">Days</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">Hours</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">Minutes</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1">Seconds</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1">Start_Date</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1">End_Date</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1">Jitter</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
              </tbody>
            </table>

            <p>
              <b>Note</b
              ><span style="font-weight: 400"
                >: At least one attribute is required for an “interval” type
                Schedule</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>General Schedule Attribute Descriptions</h2>

            <table id="tablepress-18" class="tablepress tablepress-id-18">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>id</b></td>
                  <td class="column-2">
                    Unique ID assigned when a new Schedule object is created.
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>_orgId</b></td>
                  <td class="column-2">
                    The ID of the Org object where the TaskDef is created.
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>createdBy</b></td>
                  <td class="column-2">
                    The ID of the user that created the Schedule.
                  </td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>lastUpdatedBy</b></td>
                  <td class="column-2">
                    The ID of the last user to modify the Schedule.
                  </td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1"><b>lastScheduledRunDate</b></td>
                  <td class="column-2">
                    The next date/time when the Schedule will be triggered.
                  </td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1"><b>nextScheduledRunDate</b></td>
                  <td class="column-2">
                    The last date/time when the Schedule was triggered.
                  </td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1"><b>name</b></td>
                  <td class="column-2">
                    The user created name for a Schedule.
                  </td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1"><b>isActive</b></td>
                  <td class="column-2">
                    If the isActive attribute is set to “false” no events for
                    this Schedule will be triggered. If it is “true” future
                    events will be triggered according to the Schedule but past
                    skipped events will not be triggered.
                  </td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1"><b>TriggerType</b></td>
                  <td class="column-2">
                    The type of trigger that kicks off a schedule, including
                    “date”, “cron” or “interval”.
                  </td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1"><b>RunDated</b></td>
                  <td class="column-2">
                    This object stores the date and time when a Schedule will
                    execute if it has a “date” type Trigger.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Cron Schedule Attribute Descriptions</h2>

            <table id="tablepress-19" class="tablepress tablepress-id-19">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>Year</b></td>
                  <td class="column-2">The year in a "cron" TriggerType.</td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>Month</b></td>
                  <td class="column-2">The month in a "cron" TriggerType.</td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>Day</b></td>
                  <td class="column-2">The day in a "cron" TriggerType.</td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>Week</b></td>
                  <td class="column-2">The week in a "cron" TriggerType.</td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1"><b>Day_Of_Week</b></td>
                  <td class="column-2">
                    The day of the week in a "cron" TriggerType.
                  </td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1"><b>Hour</b></td>
                  <td class="column-2">The hour in a "cron" TriggerType.</td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1"><b>Minute</b></td>
                  <td class="column-2">The minute in a "cron" TriggerType.</td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1"><b>Second</b></td>
                  <td class="column-2">The second in a "cron" TriggerType.</td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1"><b>Start_Date</b></td>
                  <td class="column-2">
                    The earliest date/time a Schedule can be triggered for a
                    “cron” TriggerType.
                  </td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1"><b>End_Date</b></td>
                  <td class="column-2">
                    The latest date/time a Schedule can be triggered for a
                    “cron” TriggerType.
                  </td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1"><b>Jitter</b></td>
                  <td class="column-2">
                    Will randomly advance or delay the scheduled start time for
                    an event by jitter seconds for a “cron” TriggerType.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Interval Schedule Attribute Descriptions</h2>

            <table id="tablepress-20" class="tablepress tablepress-id-20">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>Weeks</b></td>
                  <td class="column-2">
                    The weeks in an "interval" TriggerType.
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>Days</b></td>
                  <td class="column-2">
                    The days in an "interval" TriggerType.
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>Hours</b></td>
                  <td class="column-2">
                    The hours in an "interval" TriggerType.
                  </td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>Minutes</b></td>
                  <td class="column-2">
                    The minutes in an "interval" TriggerType.
                  </td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1"><b>Seconds</b></td>
                  <td class="column-2">
                    The seconds in an "interval" TriggerType.
                  </td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1"><b>Start_Date</b></td>
                  <td class="column-2">
                    The earliest date/time a Schedule can be triggered for an
                    “interval” TriggerType.
                  </td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1"><b>End_Date</b></td>
                  <td class="column-2">
                    The latest date/time a Schedule can be triggered for an
                    “interval” TriggerType.
                  </td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1"><b>Jitter</b></td>
                  <td class="column-2">
                    Will randomly advance or delay the scheduled start time for
                    an event by jitter seconds for an “interval” TriggerType.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Sample Code</h2>
            <p><span style="font-weight: 400">To create a Schedule:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request POST </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/schedule'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'Content-Type: text/plain'</span
                    ><span class="enlighter-text"> \</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text">--data-raw </span
                    ><span class="enlighter-s0">'{</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "_orgId": "[orgId]]",</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0">
                      "_jobDefId": "{jobDefId}",</span
                    >
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "name": "Schedule_1",</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "isActive": false,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0">
                      "TriggerType": "interval",</span
                    >
                  </div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "interval": {</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "Seconds": 5</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> }</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0">}'</span></div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request POST
                'https://saasglue.com/api/v0/schedule' --header 'Content-Type:
                application/json' --header 'auth: [auth token]' --header
                '_orgId: [orgId]' --header 'Content-Type: text/plain' \
                --data-raw '{ "_orgId": "[orgId]]", "_jobDefId": "{jobDefId}",
                "name": "Schedule_1", "isActive": false, "TriggerType":
                "interval", "interval": { "Seconds": 5 } }'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request POST 'https://saasglue.com/api/v0/schedule' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]' --header 'Content-Type: text/plain' \
--data-raw '{
    "_orgId": "[orgId]]",
    "_jobDefId": "{jobDefId}",
    "name": "Schedule_1",
    "isActive": false,
    "TriggerType": "interval",
    "interval": {
        "Seconds": 5
    }
}'
</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">201</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"isActive"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">false</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_jobDefId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[jobDefId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Schedule name]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"TriggerType"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"interval"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"interval"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"Seconds"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">5</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"createdBy"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[userId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"lastUpdatedBy"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[userId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"cron"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Schedule ID]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Schedule"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 201, "data": { "isActive": false, "_orgId":
                "[orgId]", "_jobDefId": "[jobDefId]", "name": "[Schedule name]",
                "TriggerType": "interval", "interval": { "Seconds": 5 },
                "createdBy": "[userId]", "lastUpdatedBy": "[userId]", "cron":
                {}, "id": "[Schedule ID]", "version": 0, "type": "Schedule" } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 201,
    "data": {
        "isActive": false,
        "_orgId": "[orgId]",
        "_jobDefId": "[jobDefId]",
        "name": "[Schedule name]",
        "TriggerType": "interval",
        "interval": {
            "Seconds": 5
        },
        "createdBy": "[userId]",
        "lastUpdatedBy": "[userId]",
        "cron": {},
        "id": "[Schedule ID]",
        "version": 0,
        "type": "Schedule"
    }
}
</pre
            >
            <p>&nbsp;</p>
            <p>
              <span style="font-weight: 400"
                >To get Schedules for a JobDef:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request GET </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/schedule/?filter=_jobDefId%3D%3D[jobDefId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span
                    ><span class="enlighter-text"> --data-raw </span
                    ><span class="enlighter-s0">''</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request GET
                'https://saasglue.com/api/v0/schedule/?filter=_jobDefId%3D%3D[jobDefId]'
                --header 'Content-Type: application/json' --header 'auth: [auth
                token]' --header '_orgId: [orgId]' --data-raw ''
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request GET 'https://saasglue.com/api/v0/schedule/?filter=_jobDefId%3D%3D[jobDefId]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]' --data-raw ''</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">200</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"isActive"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">false</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_jobDefId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[jobDefId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Schedule_1"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"TriggerType"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"interval"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"interval"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"Seconds"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">5</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"createdBy"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[userId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"lastUpdatedBy"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[userId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"cron"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Schedule ID]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Schedule"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"meta"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"count"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 200, "data": [ { "isActive": false, "_orgId":
                "[orgId]", "_jobDefId": "[jobDefId]", "name": "Schedule_1",
                "TriggerType": "interval", "interval": { "Seconds": 5 },
                "createdBy": "[userId]", "lastUpdatedBy": "[userId]", "cron":
                {}, "id": "[Schedule ID]", "version": 0, "type": "Schedule" } ],
                "meta": { "count": 1 } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 200,
    "data": [
        {
            "isActive": false,
            "_orgId": "[orgId]",
            "_jobDefId": "[jobDefId]",
            "name": "Schedule_1",
            "TriggerType": "interval",
            "interval": {
                "Seconds": 5
            },
            "createdBy": "[userId]",
            "lastUpdatedBy": "[userId]",
            "cron": {},
            "id": "[Schedule ID]",
            "version": 0,
            "type": "Schedule"
        }
    ],
    "meta": {
        "count": 1
    }
}
</pre
            >
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="script_wrap">
        <div
          class="documentor-section section-22"
          id="script"
          data-section-id="22"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">3.6.</span
            >Script
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >The Script object stores the script code and information
                associated with the script file to make it usable in the saas
                glue environment.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Reference</h2>

            <table id="tablepress-21" class="tablepress tablepress-id-21">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">Post (required)</th>
                  <th class="column-5">Post (optional)</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">id</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">_orgId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">name</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">scriptType</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1">code</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1">_originalAuthorUserId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1">_lastEditedUserId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1">orgEditable</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1">lastEditedDate</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Attribute Descriptions</h2>

            <table id="tablepress-22" class="tablepress tablepress-id-22">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>id</b></td>
                  <td class="column-2">
                    Unique ID assigned when a new Script object is created.
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>_orgId</b></td>
                  <td class="column-2">
                    The ID of the Org object where the Script is created.
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>name</b></td>
                  <td class="column-2">The Script name must be unique.</td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>scriptType</b></td>
                  <td class="column-2">
                    Saas glue can be used to execute any script type. This
                    attribute is added to the Script object to make it easier to
                    work with common scripting languages. For example, the saas
                    glue cloud interface Script editor provides cues based on
                    the script language. To use a script language not defined in
                    saas glue use type “SH” if the Script will run on Linux,
                    Linux based or Mac operating systems and type “CMD” for
                    Windows and then define the “Command” attribute either in
                    the StepDef or when executing the Script from the Console.
                    <br />
                    <br />
                    The following script types are defined in saas glue.<br />
                    <br />
                    0 = PYTHON<br />
                    1 = NODE<br />
                    2 = SH<br />
                    3 = CMD<br />
                    4 = RUBY<br />
                    5 = LUA<br />
                    6 = PERL<br />
                    7 = PHP<br />
                    8 = POWERSHELL
                  </td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1"><b>code</b></td>
                  <td class="column-2">
                    The code of the script encoded with Base64.
                  </td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1"><b>_originalAuthorUserId</b></td>
                  <td class="column-2">
                    The ID of the user who first created the script.
                  </td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1"><b>_lastEditedUserId</b></td>
                  <td class="column-2">
                    The ID of the user who last edited a script
                  </td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1"><b>orgEditable</b></td>
                  <td class="column-2">
                    If set to TRUE anyone in the organization can edit the
                    script.
                  </td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1"><b>lastEditedDate</b></td>
                  <td class="column-2">
                    The date and time the Script was last edited.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Sample Code</h2>
            <p>
              <span style="font-weight: 400"
                >To create a new Script object:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request POST </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/script'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'Content-Type: text/plain'</span
                    ><span class="enlighter-text"> \</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text">--data-raw </span
                    ><span class="enlighter-s0">'{ </span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "_orgId": "[orgId]", </span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "name": "[Script name]", </span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0">
                      "scriptType": "[Script type]",
                    </span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0">
                      "code": "[Base64 encoded code]",
                    </span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0">
                      "lastEditedDate": "[Date]"</span
                    >
                  </div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0">}'</span></div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request POST
                'https://saasglue.com/api/v0/script' --header 'Content-Type:
                application/json' --header 'auth: [auth token]' --header
                '_orgId: [orgId]' --header 'Content-Type: text/plain' \
                --data-raw '{ "_orgId": "[orgId]", "name": "[Script name]",
                "scriptType": "[Script type]", "code": "[Base64 encoded code]",
                "lastEditedDate": "[Date]" }'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request POST 'https://saasglue.com/api/v0/script' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]' --header 'Content-Type: text/plain' \
--data-raw '{ 
    "_orgId": "[orgId]", 
    "name": "[Script name]", 
    "scriptType": "[Script type]", 
    "code": "[Base64 encoded code]", 
    "lastEditedDate": "[Date]"
}'
</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">201</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"orgUsable"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">true</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"orgEditable"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">false</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Script name]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"scriptType"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">2</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"code"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Base64 encoded code]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_originalAuthorUserId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[userId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_lastEditedUserId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[userId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"lastEditedDate"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Date]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"shadowCopyCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0"
                      >"[Base64 encoded code (copy)]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Script id]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Script"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 201, "data": { "orgUsable": true, "orgEditable":
                false, "_orgId": "[orgId]", "name": "[Script name]",
                "scriptType": 2, "code": "[Base64 encoded code]",
                "_originalAuthorUserId": "[userId]", "_lastEditedUserId":
                "[userId]", "lastEditedDate": "[Date]", "shadowCopyCode":
                "[Base64 encoded code (copy)]", "id": "[Script id]", "version":
                0, "type": "Script" } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 201,
    "data": {
        "orgUsable": true,
        "orgEditable": false,
        "_orgId": "[orgId]",
        "name": "[Script name]",
        "scriptType": 2,
        "code": "[Base64 encoded code]",
        "_originalAuthorUserId": "[userId]",
        "_lastEditedUserId": "[userId]",
        "lastEditedDate": "[Date]",
        "shadowCopyCode": "[Base64 encoded code (copy)]",
        "id": "[Script id]",
        "version": 0,
        "type": "Script"
    }
}
</pre
            >
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="step_wrap">
        <div
          class="documentor-section section-23"
          id="step"
          data-section-id="23"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">3.7.</span
            >Step
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >A Job consists of one or more Tasks, and a Task consists of one
                or more Steps.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >A Step is the runtime implementation of a StepDef. Steps are
                only created when a containing Job is created. If a Job is
                created from a JobDef, a Step will be created in the Job for
                each StepDef in the JobDef. If a Job is created from a JSON
                template, a Step will be created in the Job for each StepDef
                embedded in the JSON.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Reference</h2>

            <table id="tablepress-23" class="tablepress tablepress-id-23">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">Post (required)</th>
                  <th class="column-5">Post (optional)</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">id</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">_orgId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">_jobId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">_taskId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1">name</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1">order</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1">script</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1">command</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1">arguments</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1">variables</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Attribute Descriptions</h2>

            <table id="tablepress-24" class="tablepress tablepress-id-24">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>id</b></td>
                  <td class="column-2">
                    Unique ID assigned when a new Step object is created.
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>_orgId</b></td>
                  <td class="column-2">
                    The ID of the Org object where the Step is created.
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>_jobId</b></td>
                  <td class="column-2">
                    The ID of the Job containing the Step.
                  </td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>_taskId</b></td>
                  <td class="column-2">
                    The ID of the Task containing the Step.
                  </td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1"><b>name</b></td>
                  <td class="column-2">
                    The Step name. Is inherited from the associated StepDef
                    object or from a StepDef embedded in a JSON formatted Job
                    template.
                  </td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1"><b>order</b></td>
                  <td class="column-2">
                    The order in which the Step will run in relation to other
                    Steps in the same Task.
                  </td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1"><b>script</b></td>
                  <td class="column-2">
                    The ID of the Script the Step will execute.
                  </td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1"><b>command</b></td>
                  <td class="column-2">
                    This attribute can be used to specify the exact interpreter
                    to use to execute the Step script. It can also be used to
                    set arguments that should be passed to that interpreter. For
                    example, to pass a class path to the scala interpreter. If
                    not specified, the default interpreter for the script type
                    will be used to execute the script. <br />
                    <br />
                    For example, if you have a script of type "python" and the
                    "command" attribute is not set, then the default python
                    interpreter on the machine where the Step runs will be used
                    to execute the script. If the command attribute is set to
                    "/usr/bin/python2.7", then the interpreter in that location
                    on the Agent machine will be used to run the script. The
                    interpreter specified by the command attribute must exist on
                    the machine on which the Step runs.
                  </td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1"><b>arguments</b></td>
                  <td class="column-2">
                    A space delimited list of arguments which will be passed to
                    the script upon execution. Syntax follows normal command
                    line arguments, e.g. a single argument with spaces should be
                    enclosed in quotes.
                  </td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1"><b>variables</b></td>
                  <td class="column-2">
                    Environment variables to set in the script runtime
                    environment. Use this attribute to set environment variables
                    required by the script which may not exist on the target
                    machine(s) or which you want to override.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Sample Code</h2>
            <p>
              <span style="font-weight: 400"
                >To get all Step objects in a Task:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request GET </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/step?filter=_taskId%3D%3D[taskId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request GET
                'https://saasglue.com/api/v0/step?filter=_taskId%3D%3D[taskId]'
                --header 'Content-Type: application/json' --header 'auth: [auth
                token]' --header '_orgId: [orgId]'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request GET 'https://saasglue.com/api/v0/step?filter=_taskId%3D%3D[taskId]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]'</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">200</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"command"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">""</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"arguments"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">""</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_jobId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[jobId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_taskId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[taskId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"step1"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"order"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"script"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[scriptId"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"echo hello"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"scriptType"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">2</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"code"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"ZWNobyAiSGVsbG8gV29ybGQi"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Step id]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Step"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"meta"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"count"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 200, "data": [ { "command": "", "arguments": "",
                "_orgId": "[orgId]", "_jobId": "[jobId]", "_taskId": "[taskId]",
                "name": "step1", "order": 0, "script": { "id": "[scriptId",
                "name": "echo hello", "scriptType": 2, "code":
                "ZWNobyAiSGVsbG8gV29ybGQi" }, "id": "[Step id]", "version": 0,
                "type": "Step" } ], "meta": { "count": 1 } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 200,
    "data": [
        {
            "command": "",
            "arguments": "",
            "_orgId": "[orgId]",
            "_jobId": "[jobId]",
            "_taskId": "[taskId]",
            "name": "step1",
            "order": 0,
            "script": {
                "id": "[scriptId",
                "name": "echo hello",
                "scriptType": 2,
                "code": "ZWNobyAiSGVsbG8gV29ybGQi"
            },
            "id": "[Step id]",
            "version": 0,
            "type": "Step"
        }
    ],
    "meta": {
        "count": 1
    }
}</pre
            >
            <p>&nbsp;</p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="stepdef_wrap">
        <div
          class="documentor-section section-24"
          id="stepdef"
          data-section-id="24"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">3.8.</span
            >StepDef
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >The StepDef object defines how a Step is to be Run within a
                Task.&nbsp;</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Reference</h2>

            <table id="tablepress-25" class="tablepress tablepress-id-25">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">Post (required)</th>
                  <th class="column-5">Post (optional)</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">id</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">_orgId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">_taskDefId</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">name</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1">_scriptId</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1">order</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1">command</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1">arguments</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1">variables</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Attribute Descriptions</h2>

            <table id="tablepress-26" class="tablepress tablepress-id-26">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1"><b>id</b></th>
                  <th class="column-2">
                    Unique ID assigned when a new StepDef object is created.
                  </th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1"><b>_orgId</b></td>
                  <td class="column-2">
                    The ID of the Org object where the StepDef is created.
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>_taskDefId</b></td>
                  <td class="column-2">
                    The ID of the TaskDef object containing the StepDef.
                  </td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>name</b></td>
                  <td class="column-2">
                    The StepDef name. Must be unique among StepDefs within the
                    TaskDef to which it belongs.
                  </td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1"><b>_scriptId</b></td>
                  <td class="column-2">
                    The ID of the script which Steps created from this StepDef
                    will execute.
                  </td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1"><b>order</b></td>
                  <td class="column-2">
                    The order in which Steps created from the StepDef will run.
                  </td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1"><b>command</b></td>
                  <td class="column-2">
                    This attribute can be used to specify the exact interpreter
                    to use to execute the script for Steps created from this
                    StepDef. It can also be used to set arguments that should be
                    passed to that interpreter. For example, to pass a class
                    path to the scala interpreter. If not specified, the default
                    interpreter for the script type will be used to execute the
                    script. <br />
                    <br />
                    For example, if you have a script of type "python" and the
                    "command" attribute is not set, then the default python
                    interpreter on the machine where the Step runs will be used
                    to execute the script. If the command attribute is set to
                    "/usr/bin/python2.7", then the interpreter in that location
                    on the Agent machine will be used to run the script. The
                    interpreter specified by the command attribute must exist on
                    the machine on which the Step runs.
                  </td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1"><b>arguments</b></td>
                  <td class="column-2">
                    A space delimited list of command line arguments which will
                    be passed to the script upon execution. Syntax follows
                    normal command line arguments, e.g. a single argument with
                    spaces should be enclosed in quotes.
                  </td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1"><b>variables</b></td>
                  <td class="column-2">
                    Environment variables to set in the script runtime
                    environment. Use this attribute to set environment variables
                    required by the script which may not exist on the target
                    machine(s) or which you want to override.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Sample Code</h2>
            <p>
              <span style="font-weight: 400">To create a StepDef object:</span>
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request POST </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/stepdef'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'Content-Type: text/plain'</span
                    ><span class="enlighter-text"> \</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text">--data-raw </span
                    ><span class="enlighter-s0">'{ </span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "_orgId": "[orgId]", </span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0">
                      "_taskDefId": "[taskDefId]",
                    </span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "name": "[Step name]", </span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0">
                      "_scriptId": "[scriptId]",</span
                    >
                  </div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "order": "0", </span></div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "arguments": "", </span>
                  </div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "variables": "" </span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0">}'</span></div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request POST
                'https://saasglue.com/api/v0/stepdef' --header 'Content-Type:
                application/json' --header 'auth: [auth token]' --header
                '_orgId: [orgId]' --header 'Content-Type: text/plain' \
                --data-raw '{ "_orgId": "[orgId]", "_taskDefId": "[taskDefId]",
                "name": "[Step name]", "_scriptId": "[scriptId]", "order": "0",
                "arguments": "", "variables": "" }'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request POST 'https://saasglue.com/api/v0/stepdef' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]' --header 'Content-Type: text/plain' \
--data-raw '{ 
    "_orgId": "[orgId]", 
    "_taskDefId": "[taskDefId]", 
    "name": "[Step name]", 
    "_scriptId": "[scriptId]",
    "order": "0", 
    "arguments": "", 
    "variables": "" 
}'
</pre
            >
            <p>
              <span style="font-weight: 400">returns</span
              ><span style="font-weight: 400">:</span>
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">201</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_scriptId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[scriptId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"command"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">""</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"arguments"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">""</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"variables"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_taskDefId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[taskDefId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"step1"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"order"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[StepDef id]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"StepDef"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 201, "data": { "_scriptId": "[scriptId]",
                "command": "", "arguments": "", "variables": {}, "_orgId":
                "[orgId]", "_taskDefId": "[taskDefId]", "name": "step1",
                "order": 0, "id": "[StepDef id]", "version": 0, "type":
                "StepDef" } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 201,
    "data": {
        "_scriptId": "[scriptId]",
        "command": "",
        "arguments": "",
        "variables": {},
        "_orgId": "[orgId]",
        "_taskDefId": "[taskDefId]",
        "name": "step1",
        "order": 0,
        "id": "[StepDef id]",
        "version": 0,
        "type": "StepDef"
    }
}
</pre
            >
            <p>&nbsp;</p>
            <p>
              <span style="font-weight: 400"
                >To get a single StepDef object:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request GET </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/stepdef/[stepDefId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request GET
                'https://saasglue.com/api/v0/stepdef/[stepDefId]' --header
                'Content-Type: application/json' --header 'auth: [auth token]'
                --header '_orgId: [orgId]'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request GET 'https://saasglue.com/api/v0/stepdef/[stepDefId]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]'</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">200</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_scriptId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[ScriptId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"command"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">""</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"arguments"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">""</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"variables"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_taskDefId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[TaskDefId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"step1"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"order"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[StepDef id]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"StepDef"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 200, "data": { "_scriptId": "[ScriptId]",
                "command": "", "arguments": "", "variables": {}, "_orgId":
                "[orgId]", "_taskDefId": "[TaskDefId]", "name": "step1",
                "order": 0, "id": "[StepDef id]", "version": 0, "type":
                "StepDef" } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 200,
    "data": {
        "_scriptId": "[ScriptId]",
        "command": "",
        "arguments": "",
        "variables": {},
        "_orgId": "[orgId]",
        "_taskDefId": "[TaskDefId]",
        "name": "step1",
        "order": 0,
        "id": "[StepDef id]",
        "version": 0,
        "type": "StepDef"
    }
}
</pre
            >
            <p>&nbsp;</p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="stepoutcome_wrap">
        <div
          class="documentor-section section-25"
          id="stepoutcome"
          data-section-id="25"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block">3.9.</span
            >StepOutcome
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >The StepOutcome object stores the output of a Step execution. A
                Step can be executed at most once for each execution of the Task
                to which it belongs. Steps in a Task are executed in order until
                they all complete successfully or one fails. A Step is
                considered to have failed if it completes with a non-zero exit
                code.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Reference</h2>

            <table id="tablepress-27" class="tablepress tablepress-id-27">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">Post (required)</th>
                  <th class="column-5">Post (optional)</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">id</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">_orgId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">_jobId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">_stepId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1">_taskOutcomeId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1">_invoiceId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1">machineId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1">ipAddress</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1">name</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1">runCode</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1">runtimeVars</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-13 odd">
                  <td class="column-1">stdout</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-14 even">
                  <td class="column-1">stderr</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-15 odd">
                  <td class="column-1">exitCode</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-16 even">
                  <td class="column-1">signal</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-17 odd">
                  <td class="column-1">status</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-18 even">
                  <td class="column-1">dateStarted</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-19 odd">
                  <td class="column-1">dateCompleted</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-20 even">
                  <td class="column-1">tail</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Attribute Descriptions</h2>

            <table id="tablepress-28" class="tablepress tablepress-id-28">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>id</b></td>
                  <td class="column-2">
                    Unique ID assigned when a new StepOutcome object is created.
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>_orgId</b></td>
                  <td class="column-2">
                    The ID of the Org object where the StepOutcome is created.
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>_jobId</b></td>
                  <td class="column-2">
                    The ID of the Job containing the Step.
                  </td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>_stepId</b></td>
                  <td class="column-2">
                    The Step ID from which the StepOutcome is derived.
                  </td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1"><b>_taskOutcomeId</b></td>
                  <td class="column-2">
                    The TaskOutcome object associated with the StepOutcome.
                  </td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1"><b>_invoiceId</b></td>
                  <td class="column-2">
                    The ID of the Invoice where the StepOutcome was billed.
                  </td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1"><b>machineId</b></td>
                  <td class="column-2">
                    The Machine ID where the Step was executed.
                  </td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1"><b>ipAddress</b></td>
                  <td class="column-2">
                    The local IP address of the Machine where the Step was
                    executed.
                  </td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1"><b>name</b></td>
                  <td class="column-2">
                    The name of the step. This is inherited from the Step Object
                    from which the StepOutcome is derived.
                  </td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1"><b>runCode</b></td>
                  <td class="column-2">
                    The script code that was executed in the Step. The code is
                    encoded with Base64.
                  </td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1"><b>runtimeVars</b></td>
                  <td class="column-2">
                    A list of key-value pair “runtime variables” generated by
                    this Step. These variables can be consumed/modified by
                    subsequent Steps in the same Task and by subsequent Tasks in
                    the same Job workflow.
                  </td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1"><b>stdout</b></td>
                  <td class="column-2">
                    The standard output generated by the Script execution.
                  </td>
                </tr>
                <tr class="row-13 odd">
                  <td class="column-1"><b>stderr</b></td>
                  <td class="column-2">
                    Any errors generated by the Script execution.
                  </td>
                </tr>
                <tr class="row-14 even">
                  <td class="column-1"><b>exitCode</b></td>
                  <td class="column-2">The Script exit code.</td>
                </tr>
                <tr class="row-15 odd">
                  <td class="column-1"><b>signal</b></td>
                  <td class="column-2">
                    The signal used to stop the Script execution If it was
                    stopped externally. For example SIGTERM or SIGKILL.
                  </td>
                </tr>
                <tr class="row-16 even">
                  <td class="column-1"><b>status</b></td>
                  <td class="column-2">
                    The current status of the Script execution. Here are the
                    possible values.<br />
                    <br />
                    0 = NOT_STARTED<br />
                    10 = RUNNING<br />
                    15 = INTERRUPTED<br />
                    20 = SUCCEEDED<br />
                    21 = CANCELLED<br />
                    22 = FAILED
                  </td>
                </tr>
                <tr class="row-17 odd">
                  <td class="column-1"><b>dateStarted</b></td>
                  <td class="column-2">
                    The date and time the Script was started.
                  </td>
                </tr>
                <tr class="row-18 even">
                  <td class="column-1"><b>dateCompleted</b></td>
                  <td class="column-2">
                    The date and time the Script completed.
                  </td>
                </tr>
                <tr class="row-19 odd">
                  <td class="column-1"><b>tail</b></td>
                  <td class="column-2">
                    The last five lines of the standard output. It will be
                    updated as the Script creates additional stdout. <br />
                    <br />
                    If the user configures the Script to pipe stdout to a file
                    the tail attribute will not be updated during Script
                    execution. However, any runtime variable values will be
                    extracted from the file to which stdout is piped.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Sample Code</h2>
            <p>
              <span style="font-weight: 400"
                >To get all StepOutcome objects for a TaskOutcome:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request GET </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/stepOutcome?filter=_taskOutcomeId%3D%3D[taskOutcomeId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request GET
                'https://saasglue.com/api/v0/stepOutcome?filter=_taskOutcomeId%3D%3D[taskOutcomeId]'
                --header 'Content-Type: application/json' --header 'auth: [auth
                token]' --header '_orgId: [orgId]'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request GET 'https://saasglue.com/api/v0/stepOutcome?filter=_taskOutcomeId%3D%3D[taskOutcomeId]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]'</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">200</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"tail"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"start"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0"
                      >"@kpo{\"outVal\": \"val\"}"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"done"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"lastUpdateId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">2</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"archived"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">false</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_jobId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[jobId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_stepId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[stepId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_taskOutcomeId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[taskOutcomeId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Step Name]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"machineId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Agent MachineId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"ipAddress"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Agent IP Address]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"runCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0"
                      >"[Base64 encoded script code]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"status"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">20</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"dateStarted"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Date]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"dateCompleted"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Date]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"exitCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"runtimeVars"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"outVal"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"val"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"signal"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">null</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"stderr"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">""</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"stdout"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0"
                      >"start\n@kpo{\"outVal\": \"val\"}\ndone\n"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[StepOutcome id]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"StepOutcome"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"meta"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"count"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 200, "data": [ { "tail": [ "start",
                "@kpo{\"outVal\": \"val\"}", "done" ], "lastUpdateId": 2,
                "archived": false, "_orgId": "[orgId]", "_jobId": "[jobId]",
                "_stepId": "[stepId]", "_taskOutcomeId": "[taskOutcomeId]",
                "name": "[Step Name]", "machineId": "[Agent MachineId]",
                "ipAddress": "[Agent IP Address]", "runCode": "[Base64 encoded
                script code]", "status": 20, "dateStarted": "[Date]",
                "dateCompleted": "[Date]", "exitCode": 0, "runtimeVars": {
                "outVal": "val" }, "signal": null, "stderr": "", "stdout":
                "start\n@kpo{\"outVal\": \"val\"}\ndone\n", "id": "[StepOutcome
                id]", "version": 0, "type": "StepOutcome" } ], "meta": {
                "count": 1 } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 200,
    "data": [
        {
            "tail": [
                "start",
                "@kpo{\"outVal\": \"val\"}",
                "done"
            ],
            "lastUpdateId": 2,
            "archived": false,
            "_orgId": "[orgId]",
            "_jobId": "[jobId]",
            "_stepId": "[stepId]",
            "_taskOutcomeId": "[taskOutcomeId]",
            "name": "[Step Name]",
            "machineId": "[Agent MachineId]",
            "ipAddress": "[Agent IP Address]",
            "runCode": "[Base64 encoded script code]",
            "status": 20,
            "dateStarted": "[Date]",
            "dateCompleted": "[Date]",
            "exitCode": 0,
            "runtimeVars": {
                "outVal": "val"
            },
            "signal": null,
            "stderr": "",
            "stdout": "start\n@kpo{\"outVal\": \"val\"}\ndone\n",
            "id": "[StepOutcome id]",
            "version": 0,
            "type": "StepOutcome"
        }
    ],
    "meta": {
        "count": 1
    }
}
</pre
            >
            <p>&nbsp;</p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="task_wrap">
        <div
          class="documentor-section section-26"
          id="task"
          data-section-id="26"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block"
              >3.10.</span
            >Task
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >A Job consists of one or more Tasks.</span
              >
            </p>
            <p>
              <span style="font-weight: 400"
                >A Task is the runtime implementation of a TaskDef. Tasks are
                only created when a containing Job is created. If a Job is
                created from a JobDef, a Task will be created in the Job for
                each TaskDef in the JobDef. If a Job is created from a JSON
                template, a Task will be created in the Job for each TaskDef
                embedded in the JSON.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Reference</h2>

            <table id="tablepress-29" class="tablepress tablepress-id-29">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">POST (required)</th>
                  <th class="column-5">POST (optional)</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">id</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">_orgId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">_jobId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">target</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1">name</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1">targetAgentId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1">requiredTags</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1">fromRoutes</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1">toRoutes</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1">sourceTaskRoute</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1">artifacts</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-13 odd">
                  <td class="column-1">status</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-14 even">
                  <td class="column-1">error</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-15 odd">
                  <td class="column-1">failureCode</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-16 even">
                  <td class="column-1">runtimeVars</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-17 odd">
                  <td class="column-1">route</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Attribute Descriptions</h2>

            <table id="tablepress-30" class="tablepress tablepress-id-30">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>id</b></td>
                  <td class="column-2">
                    Unique ID assigned when a new TaskDef object is created.
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>_orgId</b></td>
                  <td class="column-2">
                    The ID of the Org object where the TaskDef is created.
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>_jobId</b></td>
                  <td class="column-2">
                    The ID of the Job containing the Task.
                  </td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>target</b></td>
                  <td class="column-2">
                    Defines which Agent(s) are qualified to run the Task. Here
                    are the possible values:<br />
                    <br />
                    ALL_AGENTS<br />
                    The Task will be routed to all Agents within the Org.<br />
                    <br />
                    SINGLE_AGENT<br />
                    The Task will be routed to any single Agent in the Org.<br />
                    <br />
                    ALL_AGENTS_WITH_TAGS<br />
                    The Task will be routed to all Agents with all tags in the
                    “requiredTags” field for this Task.<br />
                    <br />
                    SINGLE_AGENT_WITH_TAGS<br />
                    The Task will be routed to any single Agent with all tags in
                    the “requiredTags” field for this Task.<br />
                    <br />
                    SINGLE_SPECIFIC_AGENT<br />
                    The Task will be routed to a single specific Agent. The
                    Agent ID must be listed in the targetAgentId attribute of
                    the TaskDef object.
                  </td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1"><b>name</b></td>
                  <td class="column-2">
                    The Task name. Is inherited from the associated TaskDef
                    object or from a TaskDef embedded in a JSON formatted Job
                    template.
                  </td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1"><b>targetAgentId</b></td>
                  <td class="column-2">
                    The ID of the Agent where the Task will run. This attribute
                    is only relevant if the “target” attribute is set to
                    “SINGLE_AGENT”.
                  </td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1"><b>requiredTags</b></td>
                  <td class="column-2">
                    Executing Agents must have tags matching all tags in this
                    attribute if the “target” attribute is set to
                    “SINGLE_AGENT_WITH_TAGS” or “ALL_AGENTS_WITH_TAGS”.<br />
                    <br />
                    For example if “requiredTags” is “[{‘os’: ‘linux’},
                    {‘java_installed’: ‘true’}]” then only Agents with matching
                    tags will be considered to run the Task. The Agents may have
                    additional tags not in the list of requiredTags and still be
                    qualified.
                  </td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1"><b>fromRoutes</b></td>
                  <td class="column-2">
                    The names and optional route codes of preceding Tasks which
                    must ALL be completed before the Task will be executed. For
                    example "[ [‘Task1’], [‘Task2’, ‘ok’] ]" indicates that
                    Task1 must be completed with any route (other than “fail”)
                    and Task2 must be complete with route "ok" for the Task to
                    execute.<br />
                    <br />
                    Route codes are generated by Scripts within a Task by
                    printing a formatted message to standard output. For example
                    "print '@sgg{"route", "ok"}'" in a python script will
                    generate the route “ok” for routing to downstream Tasks.<br />
                    <br />
                    If a Task cannot be routed to based on prior route code
                    dependencies it's status will be set to SKIPPED.
                  </td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1"><b>toRoutes</b></td>
                  <td class="column-2">
                    The names of Tasks to launch when the Task completes. This
                    is different from the “fromRoutes” attribute in that every
                    time the current Task completes every Task in “toRoutes”
                    with a matching route will be launched. For example a
                    “toRoute” value of “[ [‘Task1’], [‘Task2’, ‘ok’] ]” would
                    result in Task1 and Task2 getting launched if the current
                    task completes with route “ok”.<br />
                    <br />
                    If the current Task targets multiple agents (target =
                    “ALL_AGENTS” or “ALL_AGENTS_WITH_TAGS”) and the current Task
                    completes multiple times, the matching “toRoute” Tasks will
                    be launched for each successful completion of the current
                    Task.
                  </td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1"><b>sourceTaskRoute</b></td>
                  <td class="column-2">
                    For Tasks that were routed to with a “to” route, the Task id
                    and route that preceded this Task, eg “{
                    sourceTaskOutcomeId: [id], sourceRoute: [route] }”
                  </td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1"><b>artifacts</b></td>
                  <td class="column-2">
                    A list of Artifact IDs to be used to execute the Task.
                    Artifacts can include configuration files, compiled java,
                    .net or native code, datafiles, or any other file required
                    to execute the Scripts in a Task. Artifacts are saved on the
                    Org level and can be uploaded via the API or the web
                    console.
                  </td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1"><b>status</b></td>
                  <td class="column-2">
                    The current Task status. Here are the possible values:<br />
                    <br />
                    NOT_STARTED = 0<br />
                    PUBLISHED = 5<br />
                    RUNNING = 10<br />
                    INTERRUPTING = 14<br />
                    INTERRUPTED = 15<br />
                    CANCELING = 17<br />
                    SUCCEEDED = 20<br />
                    CANCELLED = 21<br />
                    FAILED = 22<br />
                    SKIPPED = 23
                  </td>
                </tr>
                <tr class="row-13 odd">
                  <td class="column-1"><b>error</b></td>
                  <td class="column-2">
                    Text of any error that occurred running the Task.
                  </td>
                </tr>
                <tr class="row-14 even">
                  <td class="column-1"><b>failureCode</b></td>
                  <td class="column-2">
                    The failure code for a Task with FAILED status. Here are the
                    possible values:<br />
                    <br />
                    AGENT_CRASHED_OR_LOST_CONNECTIVITY = 0<br />
                    NO_AGENT_AVAILABLE = 1<br />
                    AGENT_EXEC_ERROR = 2<br />
                    QUEUED_TASK_EXPIRED = 3<br />
                    TARGET_AGENT_NOT_SPECIFIED = 4<br />
                    MISSING_TARGET_TAGS = 5
                  </td>
                </tr>
                <tr class="row-15 odd">
                  <td class="column-1"><b>runtimeVars</b></td>
                  <td class="column-2">
                    A list of key-value pair “runtime variables” which will be
                    used to execute scripts in the Steps for this Task. These
                    variables can be dynamically injected at runtime in script
                    arguments, environment variables or in scripts themselves.
                    <br />
                    <br />
                    Strings formatted as “sgg(“[variable name]”)” in script
                    arguments, environment variables or scripts will be replaced
                    with the most recent value of the runtime variable named
                    “[variable name]”. If a runtime variable with that name does
                    not exist, it will be replaced with “null”.<br />
                    <br />
                    Runtime variable values can be set at design time on the Org
                    or JobDef level. They can be set at runtime when Jobs are
                    created and they can be dynamically generated/modified
                    during script execution by printing correctly formatted
                    strings to stdout. The format is “@sgo{“[key]”: “[value]”}”,
                    e.g. the following line in a python script would set the
                    value of “my_key” to “my_value”: print(‘@sgo{“my_key”:
                    “my_value”}’).
                  </td>
                </tr>
                <tr class="row-16 even">
                  <td class="column-1"><b>TTL</b></td>
                  <td class="column-2">
                    The time (in milliseconds) to wait for a task to be picked
                    up by an Agent for processing before routing the task with
                    status “fail”.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Code Sample</h2>
            <p>
              <span style="font-weight: 400"
                >To get all Task objects in a Job:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request GET </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/task?filter=_jobId%3D%3D[orgId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request GET
                'https://saasglue.com/api/v0/task?filter=_jobId%3D%3D[orgId]'
                --header 'Content-Type: application/json' --header 'auth: [auth
                token]' --header '_orgId: [orgId]'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request GET 'https://saasglue.com/api/v0/task?filter=_jobId%3D%3D[orgId]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]'</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">200</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"fromRoutes"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"toRoutes"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"artifacts"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"status"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">22</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_jobId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[jobId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Task name]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"targetAgentId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">null</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"requiredTags"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"numchucks"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"true"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"target"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">4</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"runtimeVars"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"TTL"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-k1">null</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"failureCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Task id]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"Task"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"meta"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"count"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 200, "data": [ { "fromRoutes": [], "toRoutes":
                [], "artifacts": [], "status": 22, "_orgId": "[orgId]",
                "_jobId": "[jobId]", "name": "[Task name]", "targetAgentId":
                null, "requiredTags": { "numchucks": "true" }, "target": 4,
                "runtimeVars": {}, "TTL": null, "failureCode": 1, "id": "[Task
                id]", "version": 0, "type": "Task" } ], "meta": { "count": 1 } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 200,
    "data": [
        {
            "fromRoutes": [],
            "toRoutes": [],
            "artifacts": [],
            "status": 22,
            "_orgId": "[orgId]",
            "_jobId": "[jobId]",
            "name": "[Task name]",
            "targetAgentId": null,
            "requiredTags": {
                "numchucks": "true"
            },
            "target": 4,
            "runtimeVars": {},
            "TTL": null,
            "failureCode": 1,
            "id": "[Task id]",
            "version": 0,
            "type": "Task"
        }
    ],
    "meta": {
        "count": 1
    }
}
</pre
            >
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="taskdef_wrap">
        <div
          class="documentor-section section-27"
          id="taskdef"
          data-section-id="27"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block"
              >3.11.</span
            >TaskDef
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >The TaskDef object defines how a Task is to be run within a
                Job.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Reference</h2>

            <table id="tablepress-31" class="tablepress tablepress-id-31">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">Post (required)</th>
                  <th class="column-5">Post (optional)</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">id</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">_orgId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">_jobDefId</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">target</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1">name</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1">targetAgentId</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1">requiredTags</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1">fromRoutes</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1">toRoutes</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1">artifacts</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1">TTL</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Attribute Descriptions</h2>

            <table id="tablepress-32" class="tablepress tablepress-id-32">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>id</b></td>
                  <td class="column-2">
                    Unique ID assigned when a new TaskDef object is created.
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>_orgId</b></td>
                  <td class="column-2">
                    The ID of the Org object where the TaskDef is created.
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>_jobDefId</b></td>
                  <td class="column-2">
                    The ID of the JobDef containing the TaskDef.
                  </td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>target</b></td>
                  <td class="column-2">
                    Defines which Agent(s) are qualified to run Tasks created
                    from this TaskDef. Here are the possible values:<br />
                    <br />
                    ALL_AGENTS<br />
                    The Task will be routed to all Agents within the Org.<br />
                    <br />
                    SINGLE_AGENT<br />
                    The Task will be routed to any single Agent in the Org.<br />
                    <br />
                    ALL_AGENTS_WITH_TAGS<br />
                    The Task will be routed to all Agents with all tags in the
                    “requiredTags” field for this Task.<br />
                    <br />
                    SINGLE_AGENT_WITH_TAGS<br />
                    The Task will be routed to any single Agent with all tags in
                    the “requiredTags” field for this Task.<br />
                    <br />
                    SINGLE_SPECIFIC_AGENT<br />
                    The Task will be routed to a single specific Agent. The
                    Agent ID must be listed in the targetAgentId attribute of
                    the TaskDef object.
                  </td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1"><b>name</b></td>
                  <td class="column-2">
                    The TaskDef name. Must be unique among TaskDefs within the
                    JobDef to which it belongs.
                  </td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1"><b>targetAgentId</b></td>
                  <td class="column-2">
                    The ID of the Agent where Tasks created from the TaskDef
                    will run. This attribute is only relevant if the “target”
                    attribute is set to “SINGLE_AGENT”.
                  </td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1"><b>requiredTags</b></td>
                  <td class="column-2">
                    Executing Agents must have tags matching all tags in this
                    attribute if the “target” attribute is set to
                    “SINGLE_AGENT_WITH_TAGS” or “ALL_AGENTS_WITH_TAGS”.<br />
                    <br />
                    For example if “requiredTags” is “[{‘os’: ‘linux’},
                    {‘java_installed’: ‘true’}]” then only Agents with matching
                    tags will be considered to run Tasks created from the
                    TaskDef. The Agents may have additional tags not in the list
                    of requiredTags and still be qualified.
                  </td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1"><b>fromRoutes</b></td>
                  <td class="column-2">
                    The names and optional route codes of preceding Tasks which
                    must ALL be completed before a Task created from this
                    TaskDef will be executed. For example "[ [‘Task1’],
                    [‘Task2’, ‘ok’] ]" indicates that Task1 must be completed
                    with any route (other than “fail”) and Task2 must be
                    complete with route "ok" for the Task to execute.<br />
                    <br />
                    Route codes are generated by Scripts within a Task by
                    printing a formatted message to standard output. For example
                    "print '@sgg{"route", "ok"}'" in a python script will
                    generate the route “ok” for routing to downstream Tasks.<br />
                    <br />
                    If a Task cannot be routed to based on prior route code
                    dependencies it's status will be set to SKIPPED.
                  </td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1"><b>toRoutes</b></td>
                  <td class="column-2">
                    The names of Tasks to launch when a Task created from the
                    TaskDef completes. This is different from the “fromRoutes”
                    attribute in that every time the current Task completes
                    every Task in “toRoutes” with a matching route will be
                    launched. For example a “toRoute” value of “[ [‘Task1’],
                    [‘Task2’, ‘ok’] ]” would result in Task1 and Task2 getting
                    launched if the current task completes with route “ok”.<br />
                    <br />
                    If the current Task targets multiple agents (target =
                    “ALL_AGENTS” or “ALL_AGENTS_WITH_TAGS”) and the current Task
                    completes multiple times, the matching “toRoute” Tasks will
                    be launched for each successful completion of the current
                    Task.
                  </td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1"><b>artifacts</b></td>
                  <td class="column-2">
                    A list of Artifact IDs to be used to execute a Task created
                    from the TaskDef. Artifacts can include configuration files,
                    compiled java, .net or native code, datafiles, or any other
                    file required to execute the Scripts in a Task. Artifacts
                    are saved on the Org level and can be uploaded via the API
                    or the web console.
                  </td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1"><b>TTL</b></td>
                  <td class="column-2">
                    The time (in milliseconds) to wait for a task to be
                    processed by an Agent before routing the task with status
                    “fail”.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Code Samples</h2>
            <p>
              <span style="font-weight: 400">To create a TaskDef object:</span>
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request POST </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/taskdef'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'Content-Type: text/plain'</span
                    ><span class="enlighter-text"> \</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text">--data-raw </span
                    ><span class="enlighter-s0">'{ </span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "name": "[Task name]",</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "_orgId": "[orgId]",</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0">
                      "_jobDefId": "[jobDefId]]",</span
                    >
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "requiredTags": [],</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0">
                      "runOnAllAgents": "false",</span
                    >
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "fromRoutes": [],</span>
                  </div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0"> "target": 0</span></div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0">}'</span></div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request POST
                'https://saasglue.com/api/v0/taskdef' --header 'Content-Type:
                application/json' --header 'auth: [auth token]' --header
                '_orgId: [orgId]' --header 'Content-Type: text/plain' \
                --data-raw '{ "name": "[Task name]", "_orgId": "[orgId]",
                "_jobDefId": "[jobDefId]]", "requiredTags": [],
                "runOnAllAgents": "false", "fromRoutes": [], "target": 0 }'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request POST 'https://saasglue.com/api/v0/taskdef' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]' --header 'Content-Type: text/plain' \
--data-raw '{ 
    "name": "[Task name]",
    "_orgId": "[orgId]",
    "_jobDefId": "[jobDefId]]",
    "requiredTags": [],
    "runOnAllAgents": "false",
    "fromRoutes": [],
    "target": 0
}'
</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">201</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"fromRoutes"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"toRoutes"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"artifacts"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Task name]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_jobDefId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[jobDefId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"requiredTags"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"target"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[TaskDef id]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"TaskDef"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 201, "data": { "fromRoutes": [], "toRoutes": [],
                "artifacts": [], "name": "[Task name]", "_orgId": "[orgId]",
                "_jobDefId": "[jobDefId]", "requiredTags": [], "target": 0,
                "id": "[TaskDef id]", "version": 0, "type": "TaskDef" } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 201,
    "data": {
        "fromRoutes": [],
        "toRoutes": [],
        "artifacts": [],
        "name": "[Task name]",
        "_orgId": "[orgId]",
        "_jobDefId": "[jobDefId]",
        "requiredTags": [],
        "target": 0,
        "id": "[TaskDef id]",
        "version": 0,
        "type": "TaskDef"
    }
}
</pre
            >
            <p>&nbsp;</p>
            <p>
              <span style="font-weight: 400"
                >To get a single TaskDef object:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request GET </span
                    ><span class="enlighter-s0"
                      >'http://saasglue.com/api/v0/taskdef/[TaskDef id]]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]]'</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request GET
                'http://saasglue.com/api/v0/taskdef/[TaskDef id]]' --header
                'Content-Type: application/json' --header 'auth: [auth token]'
                --header '_orgId: [orgId]]'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request GET 'http://saasglue.com/api/v0/taskdef/[TaskDef id]]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]]'</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">200</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"fromRoutes"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"toRoutes"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"artifacts"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[Task name]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_jobDefId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[jobDefId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"requiredTags"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"target"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[TaskDef id]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"TaskDef"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 200, "data": { "fromRoutes": [], "toRoutes": [],
                "artifacts": [], "name": "[Task name]", "_orgId": "[orgId]",
                "_jobDefId": "[jobDefId]", "requiredTags": [], "target": 0,
                "id": "[TaskDef id]", "version": 0, "type": "TaskDef" } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 200,
    "data": {
        "fromRoutes": [],
        "toRoutes": [],
        "artifacts": [],
        "name": "[Task name]",
        "_orgId": "[orgId]",
        "_jobDefId": "[jobDefId]",
        "requiredTags": [],
        "target": 0,
        "id": "[TaskDef id]",
        "version": 0,
        "type": "TaskDef"
    }
}
</pre
            >
            <p>&nbsp;</p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="taskoutcome_wrap">
        <div
          class="documentor-section section-28"
          id="taskoutcome"
          data-section-id="28"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block"
              >3.12.</span
            >TaskOutcome
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >The TaskOutcome object stores the output of a Task execution.
                Since a single Task can be executed multiple times in a Job, a
                Task can have multiple TaskOutcomes.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Reference</h2>

            <table id="tablepress-33" class="tablepress tablepress-id-33">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">Post (required)</th>
                  <th class="column-5">Post (optional)</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">id</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">_orgId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">_jobId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">_taskId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1">_agentId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1">sourceTaskRoute</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1">target</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1">status</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1">route</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1">failureCode</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1">dateStarted</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-13 odd">
                  <td class="column-1">dateCompleted</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-14 even">
                  <td class="column-1">ipAddress</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-15 odd">
                  <td class="column-1">machineId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-16 even">
                  <td class="column-1">artifactsDownloadedSize</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-17 odd">
                  <td class="column-1">runtimeVars</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Attribute Descriptions</h2>

            <table id="tablepress-34" class="tablepress tablepress-id-34">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>id</b></td>
                  <td class="column-2">
                    Unique ID assigned when a new TaskOutcome object is created.
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>_orgId</b></td>
                  <td class="column-2">
                    The ID of the Org object where the TaskOutcome is created.
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>_jobId</b></td>
                  <td class="column-2">
                    The ID of the Job containing the TaskOutcome.
                  </td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>_taskId</b></td>
                  <td class="column-2">
                    The Task ID from which the TaskOutcome is derived.
                  </td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1"><b>_agentId</b></td>
                  <td class="column-2">
                    The ID of the Agent that executed the Task.
                  </td>
                </tr>
                <tr class="row-6 even">
                  <td class="column-1"><b>sourceTaskRoute</b></td>
                  <td class="column-2">
                    For Tasks that were routed to with a “to” route, the Task id
                    and route that preceded this Task, eg “{
                    sourceTaskOutcomeId: [id], sourceRoute: [route] }”
                  </td>
                </tr>
                <tr class="row-7 odd">
                  <td class="column-1"><b>target</b></td>
                  <td class="column-2">
                    Defines which Agent(s) are qualified to run the Task. Here
                    are the possible values:<br />
                    <br />
                    ALL_AGENTS<br />
                    The Task will be routed to all Agents within the Org.<br />
                    <br />
                    SINGLE_AGENT<br />
                    The Task will be routed to any single Agent in the Org.<br />
                    <br />
                    ALL_AGENTS_WITH_TAGS<br />
                    The Task will be routed to all Agents with all tags in the
                    “requiredTags” field for this Task.<br />
                    <br />
                    SINGLE_AGENT_WITH_TAGS<br />
                    The Task will be routed to any single Agent with all tags in
                    the “requiredTags” field for this Task.<br />
                    <br />
                    SINGLE_SPECIFIC_AGENT<br />
                    The Task will be routed to a single specific Agent. The
                    Agent ID must be listed in the targetAgentId attribute of
                    the TaskDef object.
                  </td>
                </tr>
                <tr class="row-8 even">
                  <td class="column-1"><b>status</b></td>
                  <td class="column-2">
                    This attribute stores the current status of the Task
                    execution. Here are the possible values.<br />
                    <br />
                    0 = NOT_STARTED<br />
                    5 = PUBLISHED<br />
                    10 = RUNNING<br />
                    14 = INTERRUPTING<br />
                    15 = INTERRUPTED<br />
                    17 = CANCELING<br />
                    20 = SUCCEEDED<br />
                    21 = CANCELLED<br />
                    22 = FAILED<br />
                    23 = SKIPPED
                  </td>
                </tr>
                <tr class="row-9 odd">
                  <td class="column-1"><b>route</b></td>
                  <td class="column-2">
                    The route used to determine the conditional path for Tasks
                    subsequent to the TaskOutcome. <br />
                    <br />
                    The default route code is blank if a Task completes
                    successfully, “fail” if a Task does not complete
                    successfully and “interrupt” if a Task is interrupted
                    intentionally. A Task can be interrupted by sending a
                    SIGTERM/SIGKILL signal to the Agent process (equivalent to
                    ctl+c), which interrupts all running processes, or via the
                    API or Web application. <br />
                    <br />
                    Routes can also be set during script execution by printing a
                    correctly formatted string to stdout. The format is
                    “@sgo{“route”: “[route]”}”, e.g. the following line in a
                    python script would set the route to “ok”:
                    print(‘@sgo{“route”: “ok”}’).
                  </td>
                </tr>
                <tr class="row-10 even">
                  <td class="column-1"><b>failureCode</b></td>
                  <td class="column-2">
                    The failure code for a TaskOutcome with FAILED status. Here
                    are the possible values:<br />
                    <br />
                    AGENT_CRASHED_OR_LOST_CONNECTIVITY = 0<br />
                    NO_AGENT_AVAILABLE = 1<br />
                    AGENT_EXEC_ERROR = 2<br />
                    QUEUED_TASK_EXPIRED = 3<br />
                    TARGET_AGENT_NOT_SPECIFIED = 4<br />
                    MISSING_TARGET_TAGS = 5
                  </td>
                </tr>
                <tr class="row-11 odd">
                  <td class="column-1"><b>dateStarted</b></td>
                  <td class="column-2">
                    The date and time when the Task started.
                  </td>
                </tr>
                <tr class="row-12 even">
                  <td class="column-1"><b>dateCompleted</b></td>
                  <td class="column-2">
                    The date and time when the Task completed.
                  </td>
                </tr>
                <tr class="row-13 odd">
                  <td class="column-1"><b>ipAddress</b></td>
                  <td class="column-2">
                    The IP address of the Machine where the Task was executed.
                  </td>
                </tr>
                <tr class="row-14 even">
                  <td class="column-1"><b>machineId</b></td>
                  <td class="column-2">
                    The ID of the Machine where the Task was executed.
                  </td>
                </tr>
                <tr class="row-15 odd">
                  <td class="column-1"><b>artifactsDownloadedSize</b></td>
                  <td class="column-2">
                    The total size of the Artifacts downloaded for this task,
                    measured in bytes.
                  </td>
                </tr>
                <tr class="row-16 even">
                  <td class="column-1"><b>runtimeVars</b></td>
                  <td class="column-2">
                    A list of key-value pair “runtime variables” generated by
                    this Task. These variables can be consumed/modified by
                    subsequent Tasks in the same Job workflow.
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Actions</h2>

            <table id="tablepress-35" class="tablepress tablepress-id-35">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>interrupt</b></td>
                  <td class="column-2">
                    Interrupt a running Task. Task status must be RUNNING.<br />
                    taskoutcomeaction/interrupt/:taskOutcomeId
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>restart</b></td>
                  <td class="column-2">
                    Restart a Task. Task status must be INTERRUPTED or
                    FAILED.<br />
                    taskoutcomeaction/restart/:taskOutcomeId
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>cancel</b></td>
                  <td class="column-2">
                    Cancel a Task. Task status must be RUNNING or
                    INTERRUPTED.<br />
                    taskoutcomeaction/cancel/:taskOutcomeId
                  </td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Sample Code</h2>
            <p>
              <span style="font-weight: 400"
                >To get all TaskOutcome objects from a Task:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request GET </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/taskOutcome?filter=_taskId%3D%3D[taskId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_orgId: [orgId]'</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request GET
                'https://saasglue.com/api/v0/taskOutcome?filter=_taskId%3D%3D[taskId]'
                --header 'Content-Type: application/json' --header 'auth: [auth
                token]' --header '_orgId: [orgId]'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request GET 'https://saasglue.com/api/v0/taskOutcome?filter=_taskId%3D%3D[taskId]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_orgId: [orgId]'</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">200</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_orgId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[orgId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_jobId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[jobId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_taskId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[taskId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"dateStarted"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[date]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"ipAddress"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">""</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"machineId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">""</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"artifactsDownloadedSize"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"target"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">4</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"runtimeVars"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{}</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"failureCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"status"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">22</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[TaskOutcome id]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"TaskOutcome"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"meta"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"count"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 200, "data": [ { "_orgId": "[orgId]", "_jobId":
                "[jobId]", "_taskId": "[taskId]", "dateStarted": "[date]",
                "ipAddress": "", "machineId": "", "artifactsDownloadedSize": 0,
                "target": 4, "runtimeVars": {}, "failureCode": 1, "status": 22,
                "id": "[TaskOutcome id]", "version": 0, "type": "TaskOutcome" }
                ], "meta": { "count": 1 } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 200,
    "data": [
        {
            "_orgId": "[orgId]",
            "_jobId": "[jobId]",
            "_taskId": "[taskId]",
            "dateStarted": "[date]",
            "ipAddress": "",
            "machineId": "",
            "artifactsDownloadedSize": 0,
            "target": 4,
            "runtimeVars": {},
            "failureCode": 1,
            "status": 22,
            "id": "[TaskOutcome id]",
            "version": 0,
            "type": "TaskOutcome"
        }
    ],
    "meta": {
        "count": 1
    }
}
</pre
            >
            <p>&nbsp;</p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
      <div class="doc-sectionwrap" id="teamvariable_wrap">
        <div
          class="documentor-section section-29"
          id="teamvariable"
          data-section-id="29"
        >
          <h2 class="doc-sec-title">
            <span class="doc-sec-count" style="display: inline-block"
              >3.13.</span
            >TeamVariable
            <div class="documentor-social doc-noprint"></div>
          </h2>
          <div class="doc-sec-content">
            <p>
              <span style="font-weight: 400"
                >TeamVariables have team-wide scope.&nbsp; They are useful for
                storing variables needed in Jobs across the team.</span
              >
            </p>
            <p>&nbsp;</p>
            <h2>Reference</h2>

            <table id="tablepress-36" class="tablepress tablepress-id-36">
              <thead>
                <tr class="row-1 odd">
                  <th class="column-1">Attribute</th>
                  <th class="column-2">GET</th>
                  <th class="column-3">PUT</th>
                  <th class="column-4">Post (required)</th>
                  <th class="column-5">DELETE</th>
                </tr>
              </thead>
              <tbody class="row-hover">
                <tr class="row-2 even">
                  <td class="column-1">id</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5">x</td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1">_teamId</td>
                  <td class="column-2">x</td>
                  <td class="column-3"></td>
                  <td class="column-4"></td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1">name</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                </tr>
                <tr class="row-5 odd">
                  <td class="column-1">value</td>
                  <td class="column-2">x</td>
                  <td class="column-3">x</td>
                  <td class="column-4">x</td>
                  <td class="column-5"></td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Attribute Descriptions</h2>

            <table id="tablepress-37" class="tablepress tablepress-id-37">
              <tbody class="row-hover">
                <tr class="row-1 odd">
                  <td class="column-1"><b>id</b></td>
                  <td class="column-2">
                    Unique ID assigned when a new TeamVariable object is
                    created.
                  </td>
                </tr>
                <tr class="row-2 even">
                  <td class="column-1"><b>_teamId</b></td>
                  <td class="column-2">
                    The ID of the Team object where the TeamVariable is created.
                  </td>
                </tr>
                <tr class="row-3 odd">
                  <td class="column-1"><b>name</b></td>
                  <td class="column-2">The TeamVariable key.</td>
                </tr>
                <tr class="row-4 even">
                  <td class="column-1"><b>value</b></td>
                  <td class="column-2">The TeamVariable value.</td>
                </tr>
              </tbody>
            </table>

            <p>&nbsp;</p>
            <h2>Sample Code</h2>
            <p>
              <span style="font-weight: 400"
                >To create a new TeamVariable:</span
              >
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request POST </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/teamvar'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_teamId: [teamId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'Content-Type: text/plain'</span
                    ><span class="enlighter-text"> \</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text">--data-raw </span
                    ><span class="enlighter-s0">'{</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "name" : "[key]]",</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-s0"> "value" : "[value]]"</span>
                  </div>
                </div>
                <div class="">
                  <div><span class="enlighter-s0">}'</span></div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request POST
                'https://saasglue.com/api/v0/teamvar' --header 'Content-Type:
                application/json' --header 'auth: [auth token]' --header
                '_teamId: [teamId]' --header 'Content-Type: text/plain' \
                --data-raw '{ "name" : "[key]]", "value" : "[value]]" }'
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request POST 'https://saasglue.com/api/v0/teamvar' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_teamId: [teamId]' --header 'Content-Type: text/plain' \
--data-raw '{
    "name" : "[key]]",
    "value" : "[value]]"
}'
</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">201</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[key]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"value"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[value]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_teamId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[teamId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[TeamVariable ID]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"TeamVariable"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 201, "data": { "name": "[key]", "value":
                "[value]", "_teamId": "[teamId]", "id": "[TeamVariable ID]",
                "version": 0, "type": "TeamVariable" } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 201,
    "data": {
        "name": "[key]",
        "value": "[value]",
        "_teamId": "[teamId]",
        "id": "[TeamVariable ID]",
        "version": 0,
        "type": "TeamVariable"
    }
}
</pre
            >
            <p>&nbsp;</p>
            <p>
              <span style="font-weight: 400">To get all TeamVariables:</span>
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request GET </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/teamvar'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'Auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_teamId: [teamId]'</span
                    ><span class="enlighter-text"> --data-raw </span
                    ><span class="enlighter-s0">''</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request GET
                'https://saasglue.com/api/v0/teamvar' --header 'Content-Type:
                application/json' --header 'Auth: [auth token]' --header
                '_teamId: [teamId]' --data-raw ''
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request GET 'https://saasglue.com/api/v0/teamvar' --header 'Content-Type: application/json' --header 'Auth: [auth token]' --header '_teamId: [teamId]' --data-raw ''</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">200</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">[</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"_teamId"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[teamId]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"name"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[name]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"value"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[value]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"id"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"[TeamVariable ID]"</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"version"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">0</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"type"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-s0">"TeamVariable"</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">]</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"meta"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"count"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 200, "data": [ { "_teamId": "[teamId]", "name":
                "[name]", "value": "[value]", "id": "[TeamVariable ID]",
                "version": 0, "type": "TeamVariable" } ], "meta": { "count": 1 }
                }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 200,
    "data": [
        {
            "_teamId": "[teamId]",
            "name": "[name]",
            "value": "[value]",
            "id": "[TeamVariable ID]",
            "version": 0,
            "type": "TeamVariable"
        }
    ],
    "meta": {
        "count": 1
    }
}
</pre
            >
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>
              <span style="font-weight: 400">To delete an TeamVariable:</span>
            </p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-text"
                      >curl --location --request DELETE </span
                    ><span class="enlighter-s0"
                      >'https://saasglue.com/api/v0/teamvar/[teamVariableId]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0"
                      >'Content-Type: application/json'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'auth: [auth token]'</span
                    ><span class="enlighter-text"> --header </span
                    ><span class="enlighter-s0">'_teamId: [teamId]'</span
                    ><span class="enlighter-text"> --data-raw </span
                    ><span class="enlighter-s0">''</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                curl --location --request DELETE
                'https://saasglue.com/api/v0/teamvar/[teamVariableId]' --header
                'Content-Type: application/json' --header 'auth: [auth token]'
                --header '_teamId: [teamId]' --data-raw ''
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
curl --location --request DELETE 'https://saasglue.com/api/v0/teamvar/[teamVariableId]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_teamId: [teamId]' --data-raw ''</pre
            >
            <p><span style="font-weight: 400">returns:</span></p>
            <div
              class="enlighter-default enlighter-v-standard enlighter-t-enlighter enlighter-hover"
            >
              <div class="enlighter-toolbar-top enlighter-toolbar">
                <div
                  class="enlighter-btn enlighter-btn-raw"
                  title="Plain text"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-copy"
                  title="Copy to clipboard"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-window"
                  title="Open code in new window"
                ></div>
                <div
                  class="enlighter-btn enlighter-btn-website"
                  title="EnlighterJS 3 Syntax Highlighter"
                ></div>
              </div>
              <div class="enlighter" style="">
                <div class="">
                  <div>
                    <span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"statusCode"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">200</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"data"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-g1">{</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"n"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"ok"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1</span
                    ><span class="enlighter-text">,</span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-s0">"deletedCount"</span
                    ><span class="enlighter-text">: </span
                    ><span class="enlighter-n1">1</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"> </span
                    ><span class="enlighter-g1">}</span
                    ><span class="enlighter-text"></span>
                  </div>
                </div>
                <div class="">
                  <div>
                    <span class="enlighter-text"></span
                    ><span class="enlighter-g1">}</span>
                  </div>
                </div>
              </div>
              <div class="enlighter-raw">
                { "statusCode": 200, "data": { "n": 1, "ok": 1, "deletedCount":
                1 } }
              </div>
              <div class="enlighter-toolbar-bottom enlighter-toolbar"></div>
            </div>
            <pre
              class="EnlighterJSRAW enlighter-origin"
              data-enlighter-language="generic"
            >
{
    "statusCode": 200,
    "data": {
        "n": 1,
        "ok": 1,
        "deletedCount": 1
    }
}
</pre
            >
            <p>&nbsp;</p>
          </div>
          <div class="documentor-help">
            <span class="doc-noprint"
              ><a class="positive-feedback" href="#"> Yes </a></span
            >
            <span class="doc-noprint"
              ><a class="negative-feedback" href="#"> No </a></span
            >
            <div class="negative-feedbackform doc-noprint"></div>
            <div class="feedback-msg doc-noprint"></div>
          </div>
        </div>
      </div>
      <!--./doc-sectionwrap-->
    </div>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Docs extends Vue {}
</script>

<style scoped>

.left-text {
  text-align: left;
  margin-left: 20px;
}


</style>
