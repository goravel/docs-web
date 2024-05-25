import{_ as c,r as p,o as u,c as d,a as n,b as a,w as e,d as s,e as i}from"./app-Cr_-oGxp.js";const r={},v=n("h1",{id:"事件系统",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#事件系统"},[n("span",null,"事件系统")])],-1),k={class:"table-of-contents"},m=i(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>Goravel 的事件系统提供了一个简单的观察者模式的实现，允许你能够订阅和监听在你的应用中的发生的各种事件。事件类一般来说存储在 <code>app/events</code> 目录，监听者的类存储在 <code>app/listeners</code> 目录。不要担心在你的应用中没有看到这两个目录，因为通过 Artisan 命令行来创建事件和监听者的时候目录会同时被创建。</p><p>事件系统可以作为一个非常棒的方式来解耦你的系统的方方面面，因为一个事件可以有多个完全不相关的监听者。例如，你希望每当有订单发出的时候都给你发送一个 Slack 通知。你大可不必将你的处理订单的代码和发送 slack 消息的代码放在一起，你只需要触发一个 <code>app\\events\\OrderShipped</code> 事件，然后事件监听者可以收到这个事件然后发送 slack 通知。</p><h3 id="生成事件和监听器" tabindex="-1"><a class="header-anchor" href="#生成事件和监听器"><span>生成事件和监听器</span></a></h3><p>你可以使用 <code>make:event</code> 以及 <code>make:listener</code> 用于生成单个事件和监听器的 <code>Artisan</code> 命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go run <span class="token builtin class-name">.</span> artisan make:event OrderShipped
go run <span class="token builtin class-name">.</span> artisan make:event user/OrderShipped

go run <span class="token builtin class-name">.</span> artisan make:listener SendShipmentNotification
go run <span class="token builtin class-name">.</span> artisan make:listener user/SendShipmentNotification
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注册事件和监听器" tabindex="-1"><a class="header-anchor" href="#注册事件和监听器"><span>注册事件和监听器</span></a></h2><p>在系统的服务提供者 <code>app\\providers\\EventServiceProvider</code> 中提供了一个简单的方式来注册你所有的事件监听者。方法 <code>listener</code> 包含所有的事件 (作为键) 和对应的监听器 (值)。你可以添加任意多系统需要的监听器在这个数组中，让我们添加一个 <code>OrderShipped</code> 事件：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> providers

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;github.com/goravel/framework/contracts/event&quot;</span>
  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

  <span class="token string">&quot;goravel/app/events&quot;</span>
  <span class="token string">&quot;goravel/app/listeners&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> EventServiceProvider <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token operator">...</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>EventServiceProvider<span class="token punctuation">)</span> <span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">map</span><span class="token punctuation">[</span>event<span class="token punctuation">.</span>Event<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span>event<span class="token punctuation">.</span>Listener <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">map</span><span class="token punctuation">[</span>event<span class="token punctuation">.</span>Event<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span>event<span class="token punctuation">.</span>Listener<span class="token punctuation">{</span>
    <span class="token operator">&amp;</span>events<span class="token punctuation">.</span>OrderShipped<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token operator">&amp;</span>listeners<span class="token punctuation">.</span>SendShipmentNotification<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义事件" tabindex="-1"><a class="header-anchor" href="#定义事件"><span>定义事件</span></a></h2><p>事件类本质上是一个数据容器，它保存与事件相关的信息，<code>event</code> 的 <code>Handle</code> 方法统一传入与返回 <code>[]event.Arg</code> 数据结构，你可以在这里进行数据加工，加工后的数据将传入所有关联的 <code>listeners</code> 中。例如，让我们假设一个 <code>app\\events\\OrderShipped</code> 事件：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> events

<span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/contracts/event&quot;</span>

<span class="token keyword">type</span> OrderShipped <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>OrderShipped<span class="token punctuation">)</span> <span class="token function">Handle</span><span class="token punctuation">(</span>args <span class="token punctuation">[</span><span class="token punctuation">]</span>event<span class="token punctuation">.</span>Arg<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>event<span class="token punctuation">.</span>Arg<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> args<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义监听器" tabindex="-1"><a class="header-anchor" href="#定义监听器"><span>定义监听器</span></a></h2><p>接下来，让我们看一下示例事件的侦听器。事件监听器在其 <code>Handle</code> 方法中接收事件 <code>Handle</code> 方法返回的 <code>[]event.Arg</code>。在 <code>Handle</code> 方法中，你可以执行任何必要的操作来响应事件：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> listeners

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;github.com/goravel/framework/contracts/event&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> SendShipmentNotification <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>SendShipmentNotification<span class="token punctuation">)</span> <span class="token function">Signature</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;send_shipment_notification&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>SendShipmentNotification<span class="token punctuation">)</span> <span class="token function">Queue</span><span class="token punctuation">(</span>args <span class="token operator">...</span>any<span class="token punctuation">)</span> event<span class="token punctuation">.</span>Queue <span class="token punctuation">{</span>
  <span class="token keyword">return</span> event<span class="token punctuation">.</span>Queue<span class="token punctuation">{</span>
    Enable<span class="token punctuation">:</span>     <span class="token boolean">false</span><span class="token punctuation">,</span>
    Connection<span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    Queue<span class="token punctuation">:</span>      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>SendShipmentNotification<span class="token punctuation">)</span> <span class="token function">Handle</span><span class="token punctuation">(</span>args <span class="token operator">...</span>any<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="停止事件传播" tabindex="-1"><a class="header-anchor" href="#停止事件传播"><span>停止事件传播</span></a></h3><p>有时，你可能希望停止将事件传播到其他侦听器。你可以通过从监听器的 <code>Handle</code> 方法返回 <code>error</code> 来做到这一点。</p><h2 id="事件监听器队列" tabindex="-1"><a class="header-anchor" href="#事件监听器队列"><span>事件监听器队列</span></a></h2>`,18),b=n("code",null,"listener",-1),g=n("code",null,"Queue",-1),h=i(`<div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> listeners

<span class="token operator">...</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>SendShipmentNotification<span class="token punctuation">)</span> <span class="token function">Queue</span><span class="token punctuation">(</span>args <span class="token operator">...</span>any<span class="token punctuation">)</span> event<span class="token punctuation">.</span>Queue <span class="token punctuation">{</span>
  <span class="token keyword">return</span> event<span class="token punctuation">.</span>Queue<span class="token punctuation">{</span>
    Enable<span class="token punctuation">:</span>     <span class="token boolean">false</span><span class="token punctuation">,</span>
    Connection<span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    Queue<span class="token punctuation">:</span>      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>SendShipmentNotification<span class="token punctuation">)</span> <span class="token function">Handle</span><span class="token punctuation">(</span>args <span class="token operator">...</span>any<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  name <span class="token operator">:=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

  <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排队事件监听器和数据库事务" tabindex="-1"><a class="header-anchor" href="#排队事件监听器和数据库事务"><span>排队事件监听器和数据库事务</span></a></h3><p>当在数据库事务中调度排队的监听器时，它们可能会在提交数据库事务之前由队列进行处理。发生这种情况时，你在数据库事务期间对模型或数据库记录所做的任何更新可能尚未反映在数据库中。此外，在事务中创建的任何模型或数据库记录可能不存在于数据库中。如果监听器依赖于这些模型，则在处理分派排队监听器的作业时，可能会发生意外错误。这时需要将事件置于数据库事务之外。</p><h2 id="调度事件" tabindex="-1"><a class="header-anchor" href="#调度事件"><span>调度事件</span></a></h2><p>可以使用 <code>facades.Event().Job().Dispatch()</code> 方法进行事件调度。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> controllers

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;github.com/goravel/framework/contracts/event&quot;</span>
  <span class="token string">&quot;github.com/goravel/framework/contracts/http&quot;</span>
  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

  <span class="token string">&quot;goravel/app/events&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> UserController <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r UserController<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span>ctx http<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Event</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Job</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>event<span class="token punctuation">.</span>OrderShipped<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>event<span class="token punctuation">.</span>Arg<span class="token punctuation">{</span>
    <span class="token punctuation">{</span>Type<span class="token punctuation">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> <span class="token string">&quot;Goravel&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>Type<span class="token punctuation">:</span> <span class="token string">&quot;int&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Dispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="event-arg-type-支持的类型" tabindex="-1"><a class="header-anchor" href="#event-arg-type-支持的类型"><span><code>event.Arg.Type</code> 支持的类型</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token builtin">bool</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function f(y,_){const t=p("router-link"),o=p("RouteLink"),l=p("CommentService");return u(),d("div",null,[v,n("nav",k,[n("ul",null,[n("li",null,[a(t,{to:"#简介"},{default:e(()=>[s("简介")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#生成事件和监听器"},{default:e(()=>[s("生成事件和监听器")]),_:1})])])]),n("li",null,[a(t,{to:"#注册事件和监听器"},{default:e(()=>[s("注册事件和监听器")]),_:1})]),n("li",null,[a(t,{to:"#定义事件"},{default:e(()=>[s("定义事件")]),_:1})]),n("li",null,[a(t,{to:"#定义监听器"},{default:e(()=>[s("定义监听器")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#停止事件传播"},{default:e(()=>[s("停止事件传播")]),_:1})])])]),n("li",null,[a(t,{to:"#事件监听器队列"},{default:e(()=>[s("事件监听器队列")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#排队事件监听器和数据库事务"},{default:e(()=>[s("排队事件监听器和数据库事务")]),_:1})])])]),n("li",null,[a(t,{to:"#调度事件"},{default:e(()=>[s("调度事件")]),_:1})]),n("li",null,[a(t,{to:"#event-arg-type-支持的类型"},{default:e(()=>[s("event.Arg.Type 支持的类型")]),_:1})])])]),m,n("p",null,[s("如果侦听器执行缓慢的任务如发送电子邮件或发出 HTTP 请求，你可以将任务丢给队列处理。在开始使用队列监听器之前，请确保在你的服务器或者本地开发环境中 "),a(o,{to:"/zh/digging-deeper/queues.html"},{default:e(()=>[s("配置队列")]),_:1}),s(" 并启动一个队列监听器。然后在 "),b,s(" 的 "),g,s(" 方法中定义是否启用队列，及使用的链接与队列。")]),h,a(l)])}const S=c(r,[["render",f],["__file","event.html.vue"]]),q=JSON.parse('{"path":"/zh/digging-deeper/event.html","title":"事件系统","lang":"zh-CN","frontmatter":{"description":"事件系统 简介 Goravel 的事件系统提供了一个简单的观察者模式的实现，允许你能够订阅和监听在你的应用中的发生的各种事件。事件类一般来说存储在 app/events 目录，监听者的类存储在 app/listeners 目录。不要担心在你的应用中没有看到这两个目录，因为通过 Artisan 命令行来创建事件和监听者的时候目录会同时被创建。 事件系统可...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/digging-deeper/event.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/digging-deeper/event.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/digging-deeper/event.html"}],["meta",{"property":"og:description","content":"事件系统 简介 Goravel 的事件系统提供了一个简单的观察者模式的实现，允许你能够订阅和监听在你的应用中的发生的各种事件。事件类一般来说存储在 app/events 目录，监听者的类存储在 app/listeners 目录。不要担心在你的应用中没有看到这两个目录，因为通过 Artisan 命令行来创建事件和监听者的时候目录会同时被创建。 事件系统可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事件系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[{"level":3,"title":"生成事件和监听器","slug":"生成事件和监听器","link":"#生成事件和监听器","children":[]}]},{"level":2,"title":"注册事件和监听器","slug":"注册事件和监听器","link":"#注册事件和监听器","children":[]},{"level":2,"title":"定义事件","slug":"定义事件","link":"#定义事件","children":[]},{"level":2,"title":"定义监听器","slug":"定义监听器","link":"#定义监听器","children":[{"level":3,"title":"停止事件传播","slug":"停止事件传播","link":"#停止事件传播","children":[]}]},{"level":2,"title":"事件监听器队列","slug":"事件监听器队列","link":"#事件监听器队列","children":[{"level":3,"title":"排队事件监听器和数据库事务","slug":"排队事件监听器和数据库事务","link":"#排队事件监听器和数据库事务","children":[]}]},{"level":2,"title":"调度事件","slug":"调度事件","link":"#调度事件","children":[]},{"level":2,"title":"event.Arg.Type 支持的类型","slug":"event-arg-type-支持的类型","link":"#event-arg-type-支持的类型","children":[]}],"git":{},"filePathRelative":"zh/digging-deeper/event.md","autoDesc":true}');export{S as comp,q as data};
