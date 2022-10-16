import{_ as a,r,o as l,c as u,b as e,d as s,w as d,e as n,f as c}from"./app.477941e5.js";const t={},o=e("h1",{id:"\u961F\u5217",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u961F\u5217","aria-hidden":"true"},"#"),n(" \u961F\u5217")],-1),v={class:"table-of-contents"},b=n("\u7B80\u4ECB"),m=n("\u8FDE\u63A5 Vs \u961F\u5217"),h=n("\u521B\u5EFA\u4EFB\u52A1"),g=n("\u751F\u6210\u4EFB\u52A1\u7C7B"),p=n("\u7C7B\u7ED3\u6784"),f=n("\u6CE8\u518C\u4EFB\u52A1"),q=n("\u542F\u52A8\u961F\u5217\u670D\u52A1\u5668"),x=n("\u8C03\u5EA6\u4EFB\u52A1"),_=n("\u540C\u6B65\u8C03\u5EA6"),Q=n("\u4EFB\u52A1\u94FE"),k=n("\u81EA\u5B9A\u4E49\u961F\u5217 & \u8FDE\u63A5"),y=n("queue.Arg.Type \u652F\u6301\u7684\u7C7B\u578B"),j=c(`<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>\u5728\u6784\u5EFA Web \u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u6267\u884C\u4E00\u4E9B\u4EFB\u52A1\uFF08\u4F8B\u5982\u89E3\u6790\u548C\u5B58\u50A8\u4E0A\u4F20\u7684 CSV \u6587\u4EF6\uFF09\uFF0C\u4F46\u8FD9\u4E9B\u4EFB\u52A1\u5728\u5178\u578B\u7684 Web \u8BF7\u6C42\u4E2D\u82B1\u8D39\u7684\u65F6\u95F4\u592A\u957F\u3002\u5E78\u8FD0\u7684\u662F\uFF0CGoravel \u5141\u8BB8\u4F60\u8F7B\u677E\u5730\u521B\u5EFA\u53EF\u5728\u540E\u53F0\u6392\u961F\u5904\u7406\u7684\u4EFB\u52A1\u4F5C\u4E1A\u3002\u901A\u8FC7\u5C06\u8017\u65F6\u7684\u4EFB\u52A1\u79FB\u5230\u961F\u5217\u4E2D\uFF0C\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u4EE5\u8D85\u5FEB\u7684\u901F\u5EA6\u54CD\u5E94 Web \u8BF7\u6C42\uFF0C\u5E76\u4E3A\u5BA2\u6237\u63D0\u4F9B\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u3002</p><p>\u961F\u5217\u914D\u7F6E\u6587\u4EF6\u5B58\u50A8\u5728 <code>config/queue.go</code> \u4E2D\u3002 \u5728\u8FD9\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u627E\u5230\u6846\u67B6\u4E2D\u5305\u542B\u7684\u961F\u5217\u9A71\u52A8\u7A0B\u5E8F\u7684\u8FDE\u63A5\u914D\u7F6E\uFF0C\u5176\u4E2D\u5305\u62EC <code>redis</code> \u548C <code>sync</code> \u9A71\u52A8\u3002</p><h3 id="\u8FDE\u63A5-vs-\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5-vs-\u961F\u5217" aria-hidden="true">#</a> \u8FDE\u63A5 Vs \u961F\u5217</h3><p>\u5728\u5F00\u59CB\u4F7F\u7528 Goravel \u961F\u5217\u4E4B\u524D\uFF0C\u7406\u89E3\u300C\u8FDE\u63A5\u300D\u548C\u300C\u961F\u5217\u300D\u4E4B\u95F4\u7684\u533A\u522B\u975E\u5E38\u91CD\u8981\u3002\u5728 <code>config/queue.go</code> \u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u6709\u4E00\u4E2A connections \u914D\u7F6E\u9009\u9879\u3002\u6B64\u9009\u9879\u5B9A\u4E49\u5230\u540E\u7AEF\u670D\u52A1\uFF08\u5982 Redis\uFF09\u7684\u7279\u5B9A\u8FDE\u63A5\u3002\u7136\u800C\uFF0C\u4EFB\u4F55\u7ED9\u5B9A\u7684\u961F\u5217\u8FDE\u63A5\u90FD\u53EF\u80FD\u6709\u591A\u4E2A\u300C\u961F\u5217\u300D\uFF0C\u8FD9\u4E9B\u300C\u961F\u5217\u300D\u53EF\u80FD\u88AB\u8BA4\u4E3A\u662F\u4E0D\u540C\u7684\u5806\u6808\u6216\u6210\u5806\u7684\u6392\u961F\u4EFB\u52A1\u3002</p><p>\u8BF7\u6CE8\u610F\uFF0C<code>config/queue.go</code> \u6587\u4EF6\u4E2D\u7684\u6BCF\u4E2A\u8FDE\u63A5\u914D\u7F6E\u793A\u4F8B\u90FD\u5305\u542B\u4E00\u4E2A queue \u5C5E\u6027\u3002 \u8FD9\u662F\u5C06\u4EFB\u52A1\u53D1\u9001\u5230\u7ED9\u5B9A\u8FDE\u63A5\u65F6\u5C06\u88AB\u5206\u914D\u5230\u7684\u9ED8\u8BA4\u961F\u5217\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5982\u679C\u4F60\u6CA1\u6709\u663E\u5F0F\u5730\u5B9A\u4E49\u4EFB\u52A1\u5E94\u8BE5\u88AB\u53D1\u9001\u5230\u54EA\u4E2A\u961F\u5217\uFF0C\u90A3\u4E48\u8BE5\u4EFB\u52A1\u5C06\u88AB\u653E\u7F6E\u5728\u8FDE\u63A5\u914D\u7F6E\u7684 queue \u5C5E\u6027\u4E2D\u5B9A\u4E49\u7684\u961F\u5217\u4E0A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8FD9\u4E2A\u4EFB\u52A1\u5C06\u88AB\u63A8\u9001\u5230\u9ED8\u8BA4\u961F\u5217
err := facades.Queue.Job(&amp;jobs.Test{}, []queue.Arg{
  {Type: &quot;int&quot;, Value: 1}
}).Dispatch()

// \u8FD9\u4E2A\u4EFB\u52A1\u5C06\u88AB\u63A8\u9001\u5230 &quot;emails&quot; \u961F\u5217
err := facades.Queue.Job(&amp;jobs.Test{}, []queue.Arg{
  {Type: &quot;int&quot;, Value: 1}
}).OnQueue(&quot;emails&quot;).Dispatch()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4EFB\u52A1" aria-hidden="true">#</a> \u521B\u5EFA\u4EFB\u52A1</h2><h3 id="\u751F\u6210\u4EFB\u52A1\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u4EFB\u52A1\u7C7B" aria-hidden="true">#</a> \u751F\u6210\u4EFB\u52A1\u7C7B</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5E94\u7528\u7A0B\u5E8F\u7684\u6240\u6709\u7684\u53EF\u6392\u961F\u4EFB\u52A1\u90FD\u88AB\u5B58\u50A8\u5728\u4E86 <code>app/jobs</code> \u76EE\u5F55\u4E2D\u3002\u5982\u679C <code>app/jobs</code> \u76EE\u5F55\u4E0D\u5B58\u5728\uFF0C\u5F53\u4F60\u8FD0\u884C <code>make:job</code> Artisan \u547D\u4EE4\u65F6\uFF0C\u5C06\u4F1A\u81EA\u52A8\u521B\u5EFA\u8BE5\u76EE\u5F55\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan make:job ProcessPodcast
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u7C7B\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7ED3\u6784" aria-hidden="true">#</a> \u7C7B\u7ED3\u6784</h3><p>\u4EFB\u52A1\u7C7B\u975E\u5E38\u7B80\u5355\uFF0C\u5305\u542B <code>Signature</code>, <code>Handle</code> \u65B9\u6CD5\uFF0C<code>Signature</code> \u662F\u4EFB\u52A1\u7C7B\u7684\u552F\u4E00\u6807\u8BC6\uFF0C<code>Handle</code> \u5728\u961F\u5217\u5904\u7406\u4EFB\u52A1\u65F6\u5C06\u4F1A\u88AB\u8C03\u7528\uFF0C\u5728\u8C03\u7528\u4EFB\u52A1\u65F6\u4F20\u5165\u7684 <code>[]queue.Arg{}</code> \u5C06\u4F1A\u88AB\u4F20\u5165 <code>Handle</code> \u4E2D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package jobs

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CE8\u518C\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u4EFB\u52A1" aria-hidden="true">#</a> \u6CE8\u518C\u4EFB\u52A1</h3><p>\u5F53\u4EFB\u52A1\u521B\u5EFA\u597D\u540E\uFF0C\u9700\u8981\u6CE8\u518C\u5230 <code>app/provides/queue_service_provider.go</code>\uFF0C\u4EE5\u4FBF\u80FD\u591F\u6B63\u786E\u8C03\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (receiver *QueueServiceProvider) Jobs() []queue.Job {
  return []queue.Job{
    &amp;jobs.Test{},
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8\u961F\u5217\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u961F\u5217\u670D\u52A1\u5668" aria-hidden="true">#</a> \u542F\u52A8\u961F\u5217\u670D\u52A1\u5668</h2><p>\u5728\u6839\u76EE\u5F55\u4E0B <code>main.go</code> \u4E2D\u542F\u52A8\u961F\u5217\u670D\u52A1\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>facades.Queue.Worker</code> \u65B9\u6CD5\u4E2D\u53EF\u4EE5\u4F20\u5165\u4E0D\u540C\u7684\u53C2\u6570\uFF0C\u901A\u8FC7\u542F\u52A8\u591A\u4E2A <code>facades.Queue.Worker</code>\uFF0C\u53EF\u4EE5\u8FBE\u5230\u76D1\u542C\u591A\u4E2A\u961F\u5217\u7684\u76EE\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4E0D\u4F20\u53C2\u6570\uFF0C\u9ED8\u8BA4\u76D1\u542C \`config/queue.go\` \u4E2D\u7684\u914D\u7F6E\uFF0C\u5E76\u53D1\u6570\u4E3A 1
go func() {
    if err := facades.Queue.Worker(queue.Args{}).Run(); err != nil {
      facades.Log.Errorf(&quot;Queue run error: %v&quot;, err)
    }
  }()

// \u76D1\u542C redis \u94FE\u63A5\u7684 processing \u961F\u5217\uFF0C\u5E76\u53D1\u6570 10
go func() {
    if err := facades.Queue.Worker(queue.Args{
      Connection: &quot;redis&quot;,
      Queue: &quot;processing&quot;,
      Concurrent: 10,
    }).Run(); err != nil {
      facades.Log.Errorf(&quot;Queue run error: %v&quot;, err)
    }
  }()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8C03\u5EA6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u8C03\u5EA6\u4EFB\u52A1" aria-hidden="true">#</a> \u8C03\u5EA6\u4EFB\u52A1</h2><p>\u4E00\u65E6\u4F60\u5199\u597D\u4E86\u4F60\u7684\u4EFB\u52A1\u7C7B\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u4EFB\u52A1\u672C\u8EAB\u7684 <code>dispatch</code> \u65B9\u6CD5\u6765\u8C03\u5EA6\u5B83\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package controllers

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u540C\u6B65\u8C03\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65\u8C03\u5EA6" aria-hidden="true">#</a> \u540C\u6B65\u8C03\u5EA6</h3><p>\u5982\u679C\u4F60\u60F3\u7ACB\u5373\uFF08\u540C\u6B65\uFF09\u8C03\u5EA6\u4EFB\u52A1\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>dispatchSync</code> \u65B9\u6CD5\u3002\u4F7F\u7528\u6B64\u65B9\u6CD5\u65F6\uFF0C\u4EFB\u52A1\u4E0D\u4F1A\u6392\u961F\uFF0C\u4F1A\u5728\u5F53\u524D\u8FDB\u7A0B\u5185\u7ACB\u5373\u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package controllers

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4EFB\u52A1\u94FE" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u52A1\u94FE" aria-hidden="true">#</a> \u4EFB\u52A1\u94FE</h3><p>\u4EFB\u52A1\u94FE\u5141\u8BB8\u4F60\u6307\u5B9A\u4E00\u7EC4\u5E94\u5728\u4E3B\u4EFB\u52A1\u6210\u529F\u6267\u884C\u540E\u6309\u987A\u5E8F\u8FD0\u884C\u7684\u6392\u961F\u4EFB\u52A1\u3002\u5982\u679C\u5E8F\u5217\u4E2D\u7684\u4E00\u4E2A\u4EFB\u52A1\u5931\u8D25\uFF0C\u5176\u4F59\u7684\u4EFB\u52A1\u5C06\u4E0D\u4F1A\u8FD0\u884C\u3002\u8981\u6267\u884C\u4E00\u4E2A\u6392\u961F\u7684\u4EFB\u52A1\u94FE\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>facades.Queue</code> \u63D0\u4F9B\u7684 <code>chain</code> \u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>err := facades.Queue.Chain([]queue.Jobs{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u5B9A\u4E49\u961F\u5217-\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u961F\u5217-\u8FDE\u63A5" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u961F\u5217 &amp; \u8FDE\u63A5</h3><h4 id="\u5206\u6D3E\u5230\u7279\u5B9A\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u5206\u6D3E\u5230\u7279\u5B9A\u961F\u5217" aria-hidden="true">#</a> \u5206\u6D3E\u5230\u7279\u5B9A\u961F\u5217</h4><p>\u901A\u8FC7\u5C06\u4EFB\u52A1\u63A8\u9001\u5230\u4E0D\u540C\u7684\u961F\u5217\uFF0C\u4F60\u53EF\u4EE5\u5BF9\u6392\u961F\u7684\u4EFB\u52A1\u8FDB\u884C\u300C\u5206\u7C7B\u300D\uFF0C\u751A\u81F3\u53EF\u4EE5\u4F18\u5148\u8003\u8651\u5206\u914D\u7ED9\u5404\u4E2A\u961F\u5217\u7684 worker \u6570\u91CF\u3002\u8BF7\u8BB0\u4F4F\uFF0C\u8FD9\u4E0D\u4F1A\u5C06\u4EFB\u52A1\u63A8\u9001\u5230\u961F\u5217\u914D\u7F6E\u6587\u4EF6\u5B9A\u4E49\u7684\u4E0D\u540C\u961F\u5217\u300C\u8FDE\u63A5\u300D\uFF0C\u800C\u53EA\u4F1A\u63A8\u9001\u5230\u5355\u4E2A\u8FDE\u63A5\u4E2D\u7684\u7279\u5B9A\u961F\u5217\u3002\u8981\u6307\u5B9A\u961F\u5217\uFF0C\u8BF7\u5728\u8C03\u5EA6\u4EFB\u52A1\u65F6\u4F7F\u7528 onQueue \u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>err := facades.Queue.Job(&amp;jobs.Test{}, []queue.Arg{}).OnQueue(&quot;processing&quot;).Dispatch()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u8C03\u5EA6\u5230\u7279\u5B9A\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u8C03\u5EA6\u5230\u7279\u5B9A\u8FDE\u63A5" aria-hidden="true">#</a> \u8C03\u5EA6\u5230\u7279\u5B9A\u8FDE\u63A5</h4><p>\u5982\u679C\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u4E0E\u591A\u4E2A\u961F\u5217\u8FDE\u63A5\u4EA4\u4E92\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>onConnection</code> \u65B9\u6CD5\u6307\u5B9A\u5C06\u4EFB\u52A1\u63A8\u9001\u5230\u54EA\u4E2A\u8FDE\u63A5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>err := facades.Queue.Job(&amp;jobs.Test{}, []queue.Arg{}).OnConnection(&quot;sync&quot;).Dispatch()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F60\u53EF\u4EE5\u5C06 onConnection \u548C onQueue \u65B9\u6CD5\u94FE\u63A5\u5728\u4E00\u8D77\uFF0C\u4EE5\u6307\u5B9A\u4EFB\u52A1\u7684\u8FDE\u63A5\u548C\u961F\u5217\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>err := facades.Queue.Job(&amp;jobs.Test{}, []queue.Arg{}).OnConnection(&quot;sync&quot;).OnQueue(&quot;processing&quot;).Dispatch()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="queue-arg-type-\u652F\u6301\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#queue-arg-type-\u652F\u6301\u7684\u7C7B\u578B" aria-hidden="true">#</a> <code>queue.Arg.Type</code> \u652F\u6301\u7684\u7C7B\u578B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bool
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42);function T(A,C){const i=r("router-link");return l(),u("div",null,[o,e("nav",v,[e("ul",null,[e("li",null,[s(i,{to:"#\u7B80\u4ECB"},{default:d(()=>[b]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#\u8FDE\u63A5-vs-\u961F\u5217"},{default:d(()=>[m]),_:1})])])]),e("li",null,[s(i,{to:"#\u521B\u5EFA\u4EFB\u52A1"},{default:d(()=>[h]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#\u751F\u6210\u4EFB\u52A1\u7C7B"},{default:d(()=>[g]),_:1})]),e("li",null,[s(i,{to:"#\u7C7B\u7ED3\u6784"},{default:d(()=>[p]),_:1})]),e("li",null,[s(i,{to:"#\u6CE8\u518C\u4EFB\u52A1"},{default:d(()=>[f]),_:1})])])]),e("li",null,[s(i,{to:"#\u542F\u52A8\u961F\u5217\u670D\u52A1\u5668"},{default:d(()=>[q]),_:1})]),e("li",null,[s(i,{to:"#\u8C03\u5EA6\u4EFB\u52A1"},{default:d(()=>[x]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#\u540C\u6B65\u8C03\u5EA6"},{default:d(()=>[_]),_:1})]),e("li",null,[s(i,{to:"#\u4EFB\u52A1\u94FE"},{default:d(()=>[Q]),_:1})]),e("li",null,[s(i,{to:"#\u81EA\u5B9A\u4E49\u961F\u5217-\u8FDE\u63A5"},{default:d(()=>[k]),_:1})])])]),e("li",null,[s(i,{to:"#queue-arg-type-\u652F\u6301\u7684\u7C7B\u578B"},{default:d(()=>[y]),_:1})])])]),j])}const J=a(t,[["render",T],["__file","queues.html.vue"]]);export{J as default};
