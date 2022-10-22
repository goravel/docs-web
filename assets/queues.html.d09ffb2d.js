import{_ as o,r as p,o as c,c as i,b as n,d as t,w as e,e as s,f as u}from"./app.8e7f4439.js";const l={},r=n("h1",{id:"queues",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#queues","aria-hidden":"true"},"#"),s(" Queues")],-1),d={class:"table-of-contents"},k=s("Introduction"),v=s("Connections Vs. Queues"),b=s("Creating Jobs"),m=s("Generating Job Classes"),h=s("Class Structure"),g=s("Register Job"),f=s("Start Queue Server"),q=s("Dispatching Jobs"),y=s("Synchronous Dispatching"),w=s("Job Chaining"),_=s("Customizing The Queue & Connection"),j=s("queue.Arg.Type Supported Types"),x=u(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>While building your web application, you may have some tasks, such as parsing and storing an uploaded CSV file, that take too long to perform during a web request. Goravel allows you to easily create queued jobs that may be processed in the background. By moving time intensive tasks to a queue, your application can respond to web requests with blazing speed and provide a better user experience to your customers. We use <code>facades.Queue</code> to implement those functions.</p><p>Goravel&#39;s queue configuration options are stored in your application&#39;s <code>config/queue.go</code> configuration file. Goravel supports two drivers: <code>redis</code> and <code>sync</code>.</p><h3 id="connections-vs-queues" tabindex="-1"><a class="header-anchor" href="#connections-vs-queues" aria-hidden="true">#</a> Connections Vs. Queues</h3><p>Before getting started with Goravel queues, it is important to understand the distinction between &quot;connections&quot; and &quot;queues&quot;. In your <code>config/queue.go</code> configuration file, there is a <code>connections</code> configuration array. This option defines the connections to backend queue services such as Redis. However, any given queue connection may have multiple &quot;queues&quot; which may be thought of as different stacks or piles of queued jobs.</p><p>Note that each connection configuration example in the queue configuration file contains a <code>queue</code> attribute. This is the default queue that jobs will be dispatched to when they are sent to a given connection. In other words, if you dispatch a job without explicitly defining which queue it should be dispatched to, the job will be placed on the queue that is defined in the queue attribute of the connection configuration:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// This job is sent to the default connection&#39;s default queue</span>
err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Queue<span class="token punctuation">.</span><span class="token function">Job</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>jobs<span class="token punctuation">.</span>Test<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>queue<span class="token punctuation">.</span>Arg<span class="token punctuation">{</span>
  <span class="token punctuation">{</span>Type<span class="token punctuation">:</span> <span class="token string">&quot;int&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Dispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// This job is sent to the default connection&#39;s &quot;emails&quot; queue</span>
err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Queue<span class="token punctuation">.</span><span class="token function">Job</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>jobs<span class="token punctuation">.</span>Test<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>queue<span class="token punctuation">.</span>Arg<span class="token punctuation">{</span>
  <span class="token punctuation">{</span>Type<span class="token punctuation">:</span> <span class="token string">&quot;int&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">OnQueue</span><span class="token punctuation">(</span><span class="token string">&quot;emails&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Dispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="creating-jobs" tabindex="-1"><a class="header-anchor" href="#creating-jobs" aria-hidden="true">#</a> Creating Jobs</h2><h3 id="generating-job-classes" tabindex="-1"><a class="header-anchor" href="#generating-job-classes" aria-hidden="true">#</a> Generating Job Classes</h3><p>By default, all of the jobs for your application are stored in the <code>app/jobs</code> directory. If the <code>app/Jobs</code> directory doesn&#39;t exist, it will be created when you run the <code>make:job</code> Artisan command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan make:job ProcessPodcast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="class-structure" tabindex="-1"><a class="header-anchor" href="#class-structure" aria-hidden="true">#</a> Class Structure</h3><p>Job classes are very simple, containing two methods: <code>Signature</code>, <code>Handle</code>, <code>Signature</code> is the unique identifier of the task, <code>Handle</code> will be called when the queue processes the task, the <code>[]queue.Arg{}</code> passed when the task is called will be passed into <code>Handle</code>:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> jobs

<span class="token keyword">type</span> ProcessPodcast <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">//Signature The name and signature of the job.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>ProcessPodcast<span class="token punctuation">)</span> <span class="token function">Signature</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;process_podcast&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">//Handle Execute the job.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>ProcessPodcast<span class="token punctuation">)</span> <span class="token function">Handle</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="register-job" tabindex="-1"><a class="header-anchor" href="#register-job" aria-hidden="true">#</a> Register Job</h3><p>After creating the job, you need to register it on the <code>app/provides/queue_service_provider.go</code>, so that it can be called correctly.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>QueueServiceProvider<span class="token punctuation">)</span> <span class="token function">Jobs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>queue<span class="token punctuation">.</span>Job <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>queue<span class="token punctuation">.</span>Job<span class="token punctuation">{</span>
    <span class="token operator">&amp;</span>jobs<span class="token punctuation">.</span>Test<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="start-queue-server" tabindex="-1"><a class="header-anchor" href="#start-queue-server" aria-hidden="true">#</a> Start Queue Server</h2><p>Start the queue server in <code>main.go</code> in the root directory.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

  <span class="token string">&quot;goravel/bootstrap&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// This bootstraps the framework and gets it ready for use.</span>
  bootstrap<span class="token punctuation">.</span><span class="token function">Boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// Start queue server by facades.Queue.</span>
  <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Queue<span class="token punctuation">.</span><span class="token function">Worker</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      facades<span class="token punctuation">.</span>Log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;Queue run error: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">select</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Different parameters can be passed in the <code>facades.Queue.Worker</code> method, you can monitor multiple queues by starting multiple <code>facades.Queue.Worker</code>.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// No parameters, default listens to the configuration in the \`config/queue.go\`, and the number of concurrency is 1</span>
<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Queue<span class="token punctuation">.</span><span class="token function">Worker</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    facades<span class="token punctuation">.</span>Log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;Queue run error: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// Moniting processing queue for redis link, and the number of concurrency is 10</span>
<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Queue<span class="token punctuation">.</span><span class="token function">Worker</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>queue<span class="token punctuation">.</span>Args<span class="token punctuation">{</span>
    Connection<span class="token punctuation">:</span> <span class="token string">&quot;redis&quot;</span><span class="token punctuation">,</span>
    Queue<span class="token punctuation">:</span> <span class="token string">&quot;processing&quot;</span><span class="token punctuation">,</span>
    Concurrent<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    facades<span class="token punctuation">.</span>Log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;Queue run error: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dispatching-jobs" tabindex="-1"><a class="header-anchor" href="#dispatching-jobs" aria-hidden="true">#</a> Dispatching Jobs</h2><p>Once you have written the job class, you can dispatch it using the <code>dispatch</code> method on the job itself:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> controllers

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;github.com/goravel/framework/contracts/queue&quot;</span>
  <span class="token string">&quot;github.com/goravel/framework/contracts/http&quot;</span>
  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

  <span class="token string">&quot;goravel/app/jobs&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> UserController <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>UserController<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span>ctx http<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Queue<span class="token punctuation">.</span><span class="token function">Job</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>jobs<span class="token punctuation">.</span>Test<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>queue<span class="token punctuation">.</span>Arg<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Dispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="synchronous-dispatching" tabindex="-1"><a class="header-anchor" href="#synchronous-dispatching" aria-hidden="true">#</a> Synchronous Dispatching</h3><p>If you want to dispatch a job immediately (synchronously), you can use the <code>dispatchSync</code> method. When using this method, the job will not be queued and will be executed immediately within the current process:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> controllers

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;github.com/goravel/framework/contracts/queue&quot;</span>
  <span class="token string">&quot;github.com/goravel/framework/contracts/http&quot;</span>
  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

  <span class="token string">&quot;goravel/app/jobs&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> UserController <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>UserController<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span>ctx http<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Queue<span class="token punctuation">.</span><span class="token function">Job</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>jobs<span class="token punctuation">.</span>Test<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>queue<span class="token punctuation">.</span>Arg<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">DispatchSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="job-chaining" tabindex="-1"><a class="header-anchor" href="#job-chaining" aria-hidden="true">#</a> Job Chaining</h3><p>Job chaining allows you to specify a list of queued jobs that should be run in sequence. If one job in the sequence fails, the rest of the jobs will not be run. To execute a queued job chain, you can use the <code>chain</code> method provided by the <code>facades.Queue</code>:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Queue<span class="token punctuation">.</span><span class="token function">Chain</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>queue<span class="token punctuation">.</span>Jobs<span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    Job<span class="token punctuation">:</span> <span class="token operator">&amp;</span>jobs<span class="token punctuation">.</span>Test<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    Args<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>queue<span class="token punctuation">.</span>Arg<span class="token punctuation">{</span>
      <span class="token punctuation">{</span>Type<span class="token punctuation">:</span> <span class="token string">&quot;int&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    Job<span class="token punctuation">:</span> <span class="token operator">&amp;</span>jobs<span class="token punctuation">.</span>Test1<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    Args<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>queue<span class="token punctuation">.</span>Arg<span class="token punctuation">{</span>
      <span class="token punctuation">{</span>Type<span class="token punctuation">:</span> <span class="token string">&quot;int&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Dispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="customizing-the-queue-connection" tabindex="-1"><a class="header-anchor" href="#customizing-the-queue-connection" aria-hidden="true">#</a> Customizing The Queue &amp; Connection</h3><h4 id="dispatching-to-a-particular-queue" tabindex="-1"><a class="header-anchor" href="#dispatching-to-a-particular-queue" aria-hidden="true">#</a> Dispatching To A Particular Queue</h4><p>By pushing jobs to different queues, you may &quot;categorize&quot; your queued jobs and even prioritize how many workers you assign to various queues.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Queue<span class="token punctuation">.</span><span class="token function">Job</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>jobs<span class="token punctuation">.</span>Test<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>queue<span class="token punctuation">.</span>Arg<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">OnQueue</span><span class="token punctuation">(</span><span class="token string">&quot;processing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Dispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="dispatching-to-a-particular-connection" tabindex="-1"><a class="header-anchor" href="#dispatching-to-a-particular-connection" aria-hidden="true">#</a> Dispatching To A Particular Connection</h4><p>If your application interacts with multiple queue connections, you can use the <code>onConnection</code> method to specify the connection to which the task is pushed.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Queue<span class="token punctuation">.</span><span class="token function">Job</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>jobs<span class="token punctuation">.</span>Test<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>queue<span class="token punctuation">.</span>Arg<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">OnConnection</span><span class="token punctuation">(</span><span class="token string">&quot;sync&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Dispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You may chain the <code>onConnection</code> and <code>onQueue</code> methods together to specify the connection and the queue for a job:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Queue<span class="token punctuation">.</span><span class="token function">Job</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>jobs<span class="token punctuation">.</span>Test<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>queue<span class="token punctuation">.</span>Arg<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">OnConnection</span><span class="token punctuation">(</span><span class="token string">&quot;sync&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">OnQueue</span><span class="token punctuation">(</span><span class="token string">&quot;processing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Dispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="queue-arg-type-supported-types" tabindex="-1"><a class="header-anchor" href="#queue-arg-type-supported-types" aria-hidden="true">#</a> <code>queue.Arg.Type</code> Supported Types</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token builtin">bool</span>
<span class="token builtin">int</span>
<span class="token builtin">int8</span>
<span class="token builtin">int16</span>
<span class="token builtin">int32</span>
<span class="token builtin">int64</span>
<span class="token builtin">uint</span>
<span class="token builtin">uint8</span>
<span class="token builtin">uint16</span>
<span class="token builtin">uint32</span>
<span class="token builtin">uint64</span>
<span class="token builtin">float32</span>
<span class="token builtin">float64</span>
<span class="token builtin">string</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int8</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int16</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int32</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int64</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">uint</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">uint8</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">uint16</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">uint32</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">uint64</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">float32</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">float64</span>
<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42);function Q(C,T){const a=p("router-link");return c(),i("div",null,[r,n("nav",d,[n("ul",null,[n("li",null,[t(a,{to:"#introduction"},{default:e(()=>[k]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#connections-vs-queues"},{default:e(()=>[v]),_:1})])])]),n("li",null,[t(a,{to:"#creating-jobs"},{default:e(()=>[b]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#generating-job-classes"},{default:e(()=>[m]),_:1})]),n("li",null,[t(a,{to:"#class-structure"},{default:e(()=>[h]),_:1})]),n("li",null,[t(a,{to:"#register-job"},{default:e(()=>[g]),_:1})])])]),n("li",null,[t(a,{to:"#start-queue-server"},{default:e(()=>[f]),_:1})]),n("li",null,[t(a,{to:"#dispatching-jobs"},{default:e(()=>[q]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#synchronous-dispatching"},{default:e(()=>[y]),_:1})]),n("li",null,[t(a,{to:"#job-chaining"},{default:e(()=>[w]),_:1})]),n("li",null,[t(a,{to:"#customizing-the-queue-connection"},{default:e(()=>[_]),_:1})])])]),n("li",null,[t(a,{to:"#queue-arg-type-supported-types"},{default:e(()=>[j]),_:1})])])]),x])}const S=o(l,[["render",Q],["__file","queues.html.vue"]]);export{S as default};