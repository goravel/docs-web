import{_ as o,r as s,o as l,c as u,b as e,d as n,w as d,e as t,f as a}from"./app.73da9cc6.js";const c={},h=e("h1",{id:"task-scheduling",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#task-scheduling","aria-hidden":"true"},"#"),t(" Task Scheduling")],-1),v={class:"table-of-contents"},m=t("Introduction"),p=t("Defining Schedules"),b=t("Scheduling Artisan Commands"),f=t("Schedule Frequency Options"),y=t("Preventing Task Overlaps"),g=t("Running The Scheduler"),k=a(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>In the past, you may have written a cron configuration entry for each task you needed to schedule on your server. However, this can quickly become a pain because your task schedule is no longer in source control and you must SSH into your server to view your existing cron entries or add additional entries.</p><p>Goravel&#39;s command scheduler offers a fresh approach to managing scheduled tasks on your server. The scheduler allows you to fluently and expressively define your command schedule within your Goravel application itself. When using the scheduler, only a single cron entry is needed on your server. Your task schedule is defined in the <code>app/console/kernel.go</code> file&#39;s schedule method.</p><h2 id="defining-schedules" tabindex="-1"><a class="header-anchor" href="#defining-schedules" aria-hidden="true">#</a> Defining Schedules</h2><p>You may define all of your scheduled tasks in the schedule method of your application&#39;s <code>app\\console\\kernel.go</code> file. To get started, let&#39;s take a look at an example. In this example, we will schedule a closure to be called every day at midnight. Within the closure we will execute a database query to clear a table:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package console

import (
  &quot;github.com/goravel/framework/contracts/console&quot;
  &quot;github.com/goravel/framework/schedule/support&quot;
  &quot;github.com/goravel/framework/support/facades&quot;
  &quot;goravel/app/models&quot;
)

type Kernel struct {
}

func (kernel Kernel) Schedule() []*support.Event {
  return []*support.Event{
    facades.Schedule.Call(func() {
      facades.DB.Where(&quot;1 = 1&quot;).Delete(&amp;models.User{})
    }).Daily(),
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scheduling-artisan-commands" tabindex="-1"><a class="header-anchor" href="#scheduling-artisan-commands" aria-hidden="true">#</a> Scheduling Artisan Commands</h3>`,7),_=t("In addition to scheduling closures, you may also schedule "),x=t("Artisan commands"),q=t(". For example, you may use the "),w=e("code",null,"command",-1),S=t(" method to schedule an Artisan command using either the command's name or class."),R=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package console

import (
  &quot;github.com/goravel/framework/contracts/console&quot;
  &quot;github.com/goravel/framework/schedule/support&quot;
  &quot;github.com/goravel/framework/support/facades&quot;
)

type Kernel struct {
}

func (kernel Kernel) Schedule() []*support.Event {
  return []*support.Event{
    facades.Schedule.Command(&quot;emails:send name&quot;).Daily(),
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="schedule-frequency-options" tabindex="-1"><a class="header-anchor" href="#schedule-frequency-options" aria-hidden="true">#</a> Schedule Frequency Options</h3><p>We&#39;ve already seen a few examples of how you may configure a task to run at specified intervals. However, there are many more task schedule frequencies that you may assign to a task:</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>.Cron(&#39;* * * * *&#39;)</code></td><td>Run the task on a custom cron schedule</td></tr><tr><td><code>.EveryMinute()</code></td><td>Run the task every minute</td></tr><tr><td><code>.EveryTwoMinutes()</code></td><td>Run the task every two minutes</td></tr><tr><td><code>.EveryThreeMinutes()</code></td><td>Run the task every three minutes</td></tr><tr><td><code>.EveryFourMinutes()</code></td><td>Run the task every four minutes</td></tr><tr><td><code>.EveryFiveMinutes()</code></td><td>Run the task every five minutes</td></tr><tr><td><code>.EveryTenMinutes()</code></td><td>Run the task every ten minutes</td></tr><tr><td><code>.EveryFifteenMinutes()</code></td><td>Run the task every fifteen minutes</td></tr><tr><td><code>.EveryThirtyMinutes()</code></td><td>Run the task every thirty minutes</td></tr><tr><td><code>.Hourly()</code></td><td>Run the task every hour</td></tr><tr><td><code>.HourlyAt(17)</code></td><td>Run the task every hour at 17 minutes past the hour</td></tr><tr><td><code>.EveryTwoHours()</code></td><td>Run the task every two hours</td></tr><tr><td><code>.EveryThreeHours()</code></td><td>Run the task every three hours</td></tr><tr><td><code>.EveryFourHours()</code></td><td>Run the task every four hours</td></tr><tr><td><code>.EverySixHours()</code></td><td>Run the task every six hours</td></tr><tr><td><code>.Daily()</code></td><td>Run the task every day at midnight</td></tr><tr><td><code>.DailyAt(&#39;13:00&#39;)</code></td><td>Run the task every day at 13:00</td></tr></tbody></table><h3 id="preventing-task-overlaps" tabindex="-1"><a class="header-anchor" href="#preventing-task-overlaps" aria-hidden="true">#</a> Preventing Task Overlaps</h3><p>By default, scheduled tasks will be run even if the previous instance of the task is still running. To prevent this, you may use the following methods:</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>.SkipIfStillRunning()</code></td><td>Skip if still running</td></tr><tr><td><code>.DelayIfStillRunning()</code></td><td>Delay if still running</td></tr></tbody></table><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>facades.Schedule.Command(&quot;emails:send name&quot;).EveryMinute().SkipIfStillRunning()
facades.Schedule.Command(&quot;emails:send name&quot;).EveryMinute().DelayIfStillRunning()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6B64\u4F8B\u4E2D\uFF0C\u82E5 <code>emails:send</code> Artisan \u547D\u4EE4\u8FD8\u672A\u8FD0\u884C\uFF0C\u90A3\u5B83\u5C06\u4F1A\u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21\u3002\u5982\u679C\u4F60\u7684\u4EFB\u52A1\u6267\u884C\u65F6\u95F4\u975E\u5E38\u4E0D\u786E\u5B9A\uFF0C\u5BFC\u81F4\u4F60\u65E0\u6CD5\u51C6\u786E\u9884\u6D4B\u4EFB\u52A1\u7684\u6267\u884C\u65F6\u95F4\uFF0C\u90A3\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4F1A\u7279\u522B\u6709\u7528\u3002</p><p>In this example, the <code>emails:send</code> Artisan command will be run every minute if it is not already running. The methods is especially useful if you have tasks that vary drastically in their execution time, preventing you from predicting exactly how long a given task will take.</p><h2 id="running-the-scheduler" tabindex="-1"><a class="header-anchor" href="#running-the-scheduler" aria-hidden="true">#</a> Running The Scheduler</h2><p>Now that we have learned how to define scheduled tasks, let&#39;s discuss how to actually run them on our server.</p><p>Add <code>go facades.Schedule.Run()</code> to the root <code>main.go</code> file.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
  &quot;github.com/goravel/framework/support/facades&quot;
  &quot;goravel/bootstrap&quot;
)

func main() {
  //This bootstraps the framework and gets it ready for use.
  bootstrap.Boot()

  //Start http server by facades.Route.
  go func() {
    if err := facades.Route.Run(facades.Config.GetString(&quot;app.host&quot;)); err != nil {
      facades.Log.Errorf(&quot;Route run error: %v&quot;, err)
    }
  }()

  //Start schedule by facades.Schedule
  go facades.Schedule.Run()

  select {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function E(T,A){const i=s("router-link"),r=s("RouterLink");return l(),u("div",null,[h,e("nav",v,[e("ul",null,[e("li",null,[n(i,{to:"#introduction"},{default:d(()=>[m]),_:1})]),e("li",null,[n(i,{to:"#defining-schedules"},{default:d(()=>[p]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#scheduling-artisan-commands"},{default:d(()=>[b]),_:1})]),e("li",null,[n(i,{to:"#schedule-frequency-options"},{default:d(()=>[f]),_:1})]),e("li",null,[n(i,{to:"#preventing-task-overlaps"},{default:d(()=>[y]),_:1})])])]),e("li",null,[n(i,{to:"#running-the-scheduler"},{default:d(()=>[g]),_:1})])])]),k,e("p",null,[_,n(r,{to:"/v0/digging-deeper/Artisan%E5%91%BD%E4%BB%A4%E8%A1%8C.html"},{default:d(()=>[x]),_:1}),q,w,S]),R])}const C=o(c,[["render",E],["__file","task-scheduling.html.vue"]]);export{C as default};
