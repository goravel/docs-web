import{_ as t,r as d,o as u,c as r,b as e,d as s,w as a,e as n,f as o}from"./app.0475545f.js";const l={},c=e("h1",{id:"queues",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#queues","aria-hidden":"true"},"#"),n(" Queues")],-1),v={class:"table-of-contents"},b=n("Introduction"),h=n("Connections Vs. Queues"),m=n("Creating Jobs"),p=n("Generating Job Classes"),g=n("Class Structure"),f=n("Register Job"),q=n("Start Queue Server"),y=n("Dispatching Jobs"),x=n("Synchronous Dispatching"),_=n("Job Chaining"),j=n("Customizing The Queue & Connection"),w=n("queue.Arg.Type Supported Types"),k=o(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>While building your web application, you may have some tasks, such as parsing and storing an uploaded CSV file, that take too long to perform during a typical web request. Thankfully, Goravel allows you to easily create queued jobs that may be processed in the background. By moving time intensive tasks to a queue, your application can respond to web requests with blazing speed and provide a better user experience to your customers.</p><p>Goravel&#39;s queue configuration options are stored in your application&#39;s <code>config/queue.go</code> configuration file. In this file, you will find connection configurations for each of the queue drivers that are included with the framework, including the <code>redis</code> and <code>sync</code> driver.</p><h3 id="connections-vs-queues" tabindex="-1"><a class="header-anchor" href="#connections-vs-queues" aria-hidden="true">#</a> Connections Vs. Queues</h3><p>Before getting started with Goravel queues, it is important to understand the distinction between &quot;connections&quot; and &quot;queues&quot;. In your <code>config/queue.go</code> configuration file, there is a <code>connections</code> configuration array. This option defines the connections to backend queue services such as Redis. However, any given queue connection may have multiple &quot;queues&quot; which may be thought of as different stacks or piles of queued jobs.</p><p>Note that each connection configuration example in the queue configuration file contains a queue attribute. This is the default queue that jobs will be dispatched to when they are sent to a given connection. In other words, if you dispatch a job without explicitly defining which queue it should be dispatched to, the job will be placed on the queue that is defined in the queue attribute of the connection configuration:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// This job is sent to the default connection&#39;s default queue
err := facades.Queue.Job(&amp;jobs.Test{}, []queue.Arg{
  {Type: &quot;int&quot;, Value: 1}
}).Dispatch()

// This job is sent to the default connection&#39;s &quot;emails&quot; queue
err := facades.Queue.Job(&amp;jobs.Test{}, []queue.Arg{
  {Type: &quot;int&quot;, Value: 1}
}).OnQueue(&quot;emails&quot;).Dispatch()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="creating-jobs" tabindex="-1"><a class="header-anchor" href="#creating-jobs" aria-hidden="true">#</a> Creating Jobs</h2><h3 id="generating-job-classes" tabindex="-1"><a class="header-anchor" href="#generating-job-classes" aria-hidden="true">#</a> Generating Job Classes</h3><p>By default, all of the queueable jobs for your application are stored in the <code>app/jobs</code> directory. If the <code>app/Jobs</code> directory doesn&#39;t exist, it will be created when you run the make:job Artisan command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan make:job ProcessPodcast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="class-structure" tabindex="-1"><a class="header-anchor" href="#class-structure" aria-hidden="true">#</a> Class Structure</h3><p>Job classes are very simple, containing two methods: <code>Signature</code>, <code>Handle</code>, <code>Signature</code> is the unique identifier of the task, <code>Handle</code> will be called when the queue processes the task, the <code>[]queue.Arg{}</code> passed when the task is called will be passed into <code>Handle</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package jobs

type ProcessPodcast struct {
}

//Signature The name and signature of the job.
func (receiver *ProcessPodcast) Signature() string {
  return &quot;process_podcast&quot;
}

//Handle Execute the job.
func (receiver *ProcessPodcast) Handle(args ...interface{}) error {
  return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="register-job" tabindex="-1"><a class="header-anchor" href="#register-job" aria-hidden="true">#</a> Register Job</h3><p>After creating the job, you need to register it on the <code>app/provides/queue_service_provider.go</code>, so that it can be called correctly.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (receiver *QueueServiceProvider) Jobs() []queue.Job {
  return []queue.Job{
    &amp;jobs.Test{},
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="start-queue-server" tabindex="-1"><a class="header-anchor" href="#start-queue-server" aria-hidden="true">#</a> Start Queue Server</h2><p>Start the queue server in <code>main.go</code> in the root directory.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
  &quot;github.com/goravel/framework/support/facades&quot;
  &quot;goravel/bootstrap&quot;
)

func main() {
  // This bootstraps the framework and gets it ready for use.
  bootstrap.Boot()

  // Start http server by facades.Route.
  go func() {
    if err := facades.Route.Run(facades.Config.GetString(&quot;app.host&quot;)); err != nil {
      facades.Log.Errorf(&quot;Route run error: %v&quot;, err)
    }
  }()

  // Start queue server by facades.Queue.
  go func() {
    if err := facades.Queue.Worker(queue.Args{}).Run(); err != nil {
      facades.Log.Errorf(&quot;Queue run error: %v&quot;, err)
    }
  }()

  select {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Different parameters can be passed in the <code>facades.Queue.Worker</code> method, you can monitor multiple queues by starting multiple <code>facades.Queue.Worker</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// No parameters, default listens to the configuration in the \`config/queue.go\`, and the number of concurrency is 1
go func() {
    if err := facades.Queue.Worker(queue.Args{}).Run(); err != nil {
      facades.Log.Errorf(&quot;Queue run error: %v&quot;, err)
    }
  }()

// Monotor processing queue for redis link, and the number of concurrency is 10
go func() {
    if err := facades.Queue.Worker(queue.Args{
      Connection: &quot;redis&quot;,
      Queue: &quot;processing&quot;,
      Concurrent: 10,
    }).Run(); err != nil {
      facades.Log.Errorf(&quot;Queue run error: %v&quot;, err)
    }
  }()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dispatching-jobs" tabindex="-1"><a class="header-anchor" href="#dispatching-jobs" aria-hidden="true">#</a> Dispatching Jobs</h2><p>Once you have written your job class, you may dispatch it using the <code>dispatch</code> method on the job itself:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package controllers

import (
  &quot;github.com/gin-gonic/gin&quot;
  &quot;github.com/goravel/framework/contracts/queue&quot;
  &quot;github.com/goravel/framework/support/facades&quot;
  &quot;goravel/app/jobs&quot;
)

type UserController struct {
}

func (r UserController) Show(ctx *gin.Context) {
  err := facades.Queue.Job(&amp;jobs.Test{}, []queue.Arg{}).Dispatch()
  if err != nil {
    // do something
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="synchronous-dispatching" tabindex="-1"><a class="header-anchor" href="#synchronous-dispatching" aria-hidden="true">#</a> Synchronous Dispatching</h3><p>If you would like to dispatch a job immediately (synchronously), you may use the <code>dispatchSync</code> method. When using this method, the job will not be queued and will be executed immediately within the current process:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package controllers

import (
  &quot;github.com/gin-gonic/gin&quot;
  &quot;github.com/goravel/framework/contracts/queue&quot;
  &quot;github.com/goravel/framework/support/facades&quot;
  &quot;goravel/app/jobs&quot;
)

type UserController struct {
}

func (r UserController) Show(ctx *gin.Context) {
  err := facades.Queue.Job(&amp;jobs.Test{}, []queue.Arg{}).DispatchSync()
  if err != nil {
    // do something
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="job-chaining" tabindex="-1"><a class="header-anchor" href="#job-chaining" aria-hidden="true">#</a> Job Chaining</h3><p>Job chaining allows you to specify a list of queued jobs that should be run in sequence after the primary job has executed successfully. If one job in the sequence fails, the rest of the jobs will not be run. To execute a queued job chain, you may use the <code>chain</code> method provided by the <code>facades.Queue</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>err := facades.Queue.Chain([]queue.Jobs{
  {
    Job: &amp;jobs.Test{},
    Args: []queue.Arg{
      {Type: &quot;int&quot;, Value: 1},
    },
  },
  {
    Job: &amp;jobs.Test1{},
    Args: []queue.Arg{
      {Type: &quot;int&quot;, Value: 2},
    },
  },
}).Dispatch()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="customizing-the-queue-connection" tabindex="-1"><a class="header-anchor" href="#customizing-the-queue-connection" aria-hidden="true">#</a> Customizing The Queue &amp; Connection</h3><h4 id="dispatching-to-a-particular-queue" tabindex="-1"><a class="header-anchor" href="#dispatching-to-a-particular-queue" aria-hidden="true">#</a> Dispatching To A Particular Queue</h4><p>By pushing jobs to different queues, you may &quot;categorize&quot; your queued jobs and even prioritize how many workers you assign to various queues. Keep in mind, this does not push jobs to different queue &quot;connections&quot; as defined by your queue configuration file, but only to specific queues within a single connection. To specify the queue, use the <code>onQueue</code> method when dispatching the job:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>err := facades.Queue.Job(&amp;jobs.Test{}, []queue.Arg{}).OnQueue(&quot;processing&quot;).Dispatch()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="dispatching-to-a-particular-connection" tabindex="-1"><a class="header-anchor" href="#dispatching-to-a-particular-connection" aria-hidden="true">#</a> Dispatching To A Particular Connection</h4><p>If your application interacts with multiple queue connections, you may specify which connection to push a job to using the <code>onConnection</code> method:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>err := facades.Queue.Job(&amp;jobs.Test{}, []queue.Arg{}).OnConnection(&quot;sync&quot;).Dispatch()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may chain the <code>onConnection</code> and <code>onQueue</code> methods together to specify the connection and the queue for a job:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>err := facades.Queue.Job(&amp;jobs.Test{}, []queue.Arg{}).OnConnection(&quot;sync&quot;).OnQueue(&quot;processing&quot;).Dispatch()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="queue-arg-type-supported-types" tabindex="-1"><a class="header-anchor" href="#queue-arg-type-supported-types" aria-hidden="true">#</a> <code>queue.Arg.Type</code> Supported Types</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bool
int
int8
int16
int32
int64
uint
uint8
uint16
uint32
uint64
float32
float64
string
[]bool
[]int
[]int8
[]int16
[]int32
[]int64
[]uint
[]uint8
[]uint16
[]uint32
[]uint64
[]float32
[]float64
[]string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42);function Q(C,T){const i=d("router-link");return u(),r("div",null,[c,e("nav",v,[e("ul",null,[e("li",null,[s(i,{to:"#introduction"},{default:a(()=>[b]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#connections-vs-queues"},{default:a(()=>[h]),_:1})])])]),e("li",null,[s(i,{to:"#creating-jobs"},{default:a(()=>[m]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#generating-job-classes"},{default:a(()=>[p]),_:1})]),e("li",null,[s(i,{to:"#class-structure"},{default:a(()=>[g]),_:1})]),e("li",null,[s(i,{to:"#register-job"},{default:a(()=>[f]),_:1})])])]),e("li",null,[s(i,{to:"#start-queue-server"},{default:a(()=>[q]),_:1})]),e("li",null,[s(i,{to:"#dispatching-jobs"},{default:a(()=>[y]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#synchronous-dispatching"},{default:a(()=>[x]),_:1})]),e("li",null,[s(i,{to:"#job-chaining"},{default:a(()=>[_]),_:1})]),e("li",null,[s(i,{to:"#customizing-the-queue-connection"},{default:a(()=>[j]),_:1})])])]),e("li",null,[s(i,{to:"#queue-arg-type-supported-types"},{default:a(()=>[w]),_:1})])])]),k])}const S=t(l,[["render",Q],["__file","queues.html.vue"]]);export{S as default};
