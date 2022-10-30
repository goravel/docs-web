import{_ as u,r as o,o as p,c as l,b as n,d as a,w as e,e as s,f as c}from"./app.2ddb10a7.js";const d={},r=n("h1",{id:"task-scheduling",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#task-scheduling","aria-hidden":"true"},"#"),s(" Task Scheduling")],-1),k={class:"table-of-contents"},h=s("Introduction"),v=s("Defining Schedules"),m=s("Scheduling Artisan Commands"),g=s("Schedule Frequency Options"),y=s("Preventing Task Overlaps"),f=s("Running The Scheduler"),b=c(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>In the past, you may have written a cron configuration entry for each task you needed to schedule on your server. However, this can quickly become a pain because your task schedule is no longer in source control and you must SSH into your server to view your existing cron entries or add additional entries.</p><p>Goravel&#39;s command scheduler offers a fresh approach to managing scheduled tasks on your server. The scheduler allows you to fluently and expressively define your command schedule within your Goravel application itself. When using the scheduler, only a single cron entry is needed on your server.</p><h2 id="defining-schedules" tabindex="-1"><a class="header-anchor" href="#defining-schedules" aria-hidden="true">#</a> Defining Schedules</h2><p>You may define all of your scheduled tasks in the schedule method of your application&#39;s <code>app\\console\\kernel.go</code> file. To get started, let&#39;s take a look at an example. In this example, we will schedule a closure to be called every day at midnight. Within the closure we will execute a database query to clear a table:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> console

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;github.com/goravel/framework/contracts/console&quot;</span>
  <span class="token string">&quot;github.com/goravel/framework/schedule/support&quot;</span>
  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

  <span class="token string">&quot;goravel/app/models&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Kernel <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>kernel Kernel<span class="token punctuation">)</span> <span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>support<span class="token punctuation">.</span>Event <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>support<span class="token punctuation">.</span>Event<span class="token punctuation">{</span>
    facades<span class="token punctuation">.</span>Schedule<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      facades<span class="token punctuation">.</span>Orm<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;1 = 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>models<span class="token punctuation">.</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Daily</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scheduling-artisan-commands" tabindex="-1"><a class="header-anchor" href="#scheduling-artisan-commands" aria-hidden="true">#</a> Scheduling Artisan Commands</h3>`,7),_=s("In addition to scheduling closures, you can also schedule "),w=s("Artisan commands"),q=s(". For example, you may use the "),S=n("code",null,"command",-1),R=s(" method to schedule an Artisan command using either the command's name or class."),x=c(`<div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> console

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;github.com/goravel/framework/contracts/console&quot;</span>
  <span class="token string">&quot;github.com/goravel/framework/schedule/support&quot;</span>
  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Kernel <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>kernel <span class="token operator">*</span>Kernel<span class="token punctuation">)</span> <span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>support<span class="token punctuation">.</span>Event <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>support<span class="token punctuation">.</span>Event<span class="token punctuation">{</span>
    facades<span class="token punctuation">.</span>Schedule<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;send:emails name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Daily</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="schedule-frequency-options" tabindex="-1"><a class="header-anchor" href="#schedule-frequency-options" aria-hidden="true">#</a> Schedule Frequency Options</h3><p>We&#39;ve already seen a few examples of how you may configure a task to run at specified intervals. However, there are many more task schedule frequencies that you may assign to a task:</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>.Cron(&#39;* * * * *&#39;)</code></td><td>Run the task on a custom cron schedule</td></tr><tr><td><code>.EveryMinute()</code></td><td>Run the task every minute</td></tr><tr><td><code>.EveryTwoMinutes()</code></td><td>Run the task every two minutes</td></tr><tr><td><code>.EveryThreeMinutes()</code></td><td>Run the task every three minutes</td></tr><tr><td><code>.EveryFourMinutes()</code></td><td>Run the task every four minutes</td></tr><tr><td><code>.EveryFiveMinutes()</code></td><td>Run the task every five minutes</td></tr><tr><td><code>.EveryTenMinutes()</code></td><td>Run the task every ten minutes</td></tr><tr><td><code>.EveryFifteenMinutes()</code></td><td>Run the task every fifteen minutes</td></tr><tr><td><code>.EveryThirtyMinutes()</code></td><td>Run the task every thirty minutes</td></tr><tr><td><code>.Hourly()</code></td><td>Run the task every hour</td></tr><tr><td><code>.HourlyAt(17)</code></td><td>Run the task every hour at 17 minutes past the hour</td></tr><tr><td><code>.EveryTwoHours()</code></td><td>Run the task every two hours</td></tr><tr><td><code>.EveryThreeHours()</code></td><td>Run the task every three hours</td></tr><tr><td><code>.EveryFourHours()</code></td><td>Run the task every four hours</td></tr><tr><td><code>.EverySixHours()</code></td><td>Run the task every six hours</td></tr><tr><td><code>.Daily()</code></td><td>Run the task every day at midnight</td></tr><tr><td><code>.DailyAt(&#39;13:00&#39;)</code></td><td>Run the task every day at 13:00</td></tr></tbody></table><h3 id="preventing-task-overlaps" tabindex="-1"><a class="header-anchor" href="#preventing-task-overlaps" aria-hidden="true">#</a> Preventing Task Overlaps</h3><p>By default, scheduled tasks will be run even if the previous instance of the task is still running. To prevent this, you may use the following methods:</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>.SkipIfStillRunning()</code></td><td>Skip if still running</td></tr><tr><td><code>.DelayIfStillRunning()</code></td><td>Delay if still running</td></tr></tbody></table><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>facades<span class="token punctuation">.</span>Schedule<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;send:emails name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">EveryMinute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SkipIfStillRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
facades<span class="token punctuation">.</span>Schedule<span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;send:emails name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">EveryMinute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">DelayIfStillRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="running-the-scheduler" tabindex="-1"><a class="header-anchor" href="#running-the-scheduler" aria-hidden="true">#</a> Running The Scheduler</h2><p>Now that we have learned how to define scheduled tasks, let&#39;s discuss how to actually run them on our server.</p><p>Add <code>go facades.Schedule.Run()</code> to the root <code>main.go</code> file.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

  <span class="token string">&quot;goravel/bootstrap&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//This bootstraps the framework and gets it ready for use.</span>
  bootstrap<span class="token punctuation">.</span><span class="token function">Boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">//Start schedule by facades.Schedule</span>
  <span class="token keyword">go</span> facades<span class="token punctuation">.</span>Schedule<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">select</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function E(T,D){const t=o("router-link"),i=o("RouterLink");return p(),l("div",null,[r,n("nav",k,[n("ul",null,[n("li",null,[a(t,{to:"#introduction"},{default:e(()=>[h]),_:1})]),n("li",null,[a(t,{to:"#defining-schedules"},{default:e(()=>[v]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#scheduling-artisan-commands"},{default:e(()=>[m]),_:1})]),n("li",null,[a(t,{to:"#schedule-frequency-options"},{default:e(()=>[g]),_:1})]),n("li",null,[a(t,{to:"#preventing-task-overlaps"},{default:e(()=>[y]),_:1})])])]),n("li",null,[a(t,{to:"#running-the-scheduler"},{default:e(()=>[f]),_:1})])])]),b,n("p",null,[_,a(i,{to:"/v1.1/digging-deeper/Artisan%E5%91%BD%E4%BB%A4%E8%A1%8C.html"},{default:e(()=>[w]),_:1}),q,S,R]),x])}const C=u(d,[["render",E],["__file","task-scheduling.html.vue"]]);export{C as default};