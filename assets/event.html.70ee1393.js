import{_ as c,r as i,o as l,c as u,b as n,d as a,w as e,e as s,f as o}from"./app.8de5b488.js";const r={},d=n("h1",{id:"events",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#events","aria-hidden":"true"},"#"),s(" Events")],-1),v={class:"table-of-contents"},k=s("Introduction"),m=s("Registering Events & Listeners"),b=s("Generating Events & Listeners"),h=s("Defining Events"),g=s("Defining Listeners"),f=s("Stopping The Propagation Of An Event"),y=s("Queued Event Listeners"),w=s("Queued Event Listeners & Database Transactions"),_=s("Dispatching Events"),q=s("event.Arg.Type Supported Types"),S=o(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Goravel&#39;s events provide a simple observer pattern implementation, allowing you to subscribe and listen for various events that occur within your application. Event classes are typically stored in the <code>app/events</code> directory, while their listeners are stored in <code>app/listeners</code>. Don&#39;t worry if you don&#39;t see these directories in your application as they will be created for you as you generate events and listeners using Artisan console commands.</p><p>Events serve as a great way to decouple various aspects of your application, since a single event can have multiple listeners that do not depend on each other. For example, you may wish to send a Slack notification to your user each time an order has shipped. Instead of coupling your order processing code to your Slack notification code, you can raise an <code>app\\events\\OrderShipped</code> event which a listener can receive and use to dispatch a Slack notification.</p><h2 id="registering-events-listeners" tabindex="-1"><a class="header-anchor" href="#registering-events-listeners" aria-hidden="true">#</a> Registering Events &amp; Listeners</h2><p>The <code>app\\providers\\EventServiceProvider</code> included with your Goravel application provides a convenient place to register all of your application&#39;s event listeners. The <code>listen</code> method contains an array of all events (keys) and their listeners (values). You may add as many events to this array as your application requires. For example, let&#39;s add an <code>OrderShipped</code> event:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> providers

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="generating-events-listeners" tabindex="-1"><a class="header-anchor" href="#generating-events-listeners" aria-hidden="true">#</a> Generating Events &amp; Listeners</h3><p>You can use the <code>make:event</code> and <code>make:listener</code> Artisan commands to generate individual events and listeners:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">go</span> run <span class="token punctuation">.</span> artisan <span class="token builtin">make</span><span class="token punctuation">:</span>event PodcastProcessed

<span class="token keyword">go</span> run <span class="token punctuation">.</span> artisan <span class="token builtin">make</span><span class="token punctuation">:</span>listener SendPodcastNotification
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defining-events" tabindex="-1"><a class="header-anchor" href="#defining-events" aria-hidden="true">#</a> Defining Events</h2><p>An event class is essentially a data container which holds the information related to the event, the Handle method of <code>event</code> passes in and returns the <code>[]event.Arg</code> structure, you can process data here, the processed data will be passed into all associated <code>listeners</code> For example, let&#39;s assume an <code>app\\events\\OrderShipped</code> event:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> events

<span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/contracts/event&quot;</span>

<span class="token keyword">type</span> OrderShipped <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>OrderShipped<span class="token punctuation">)</span> <span class="token function">Handle</span><span class="token punctuation">(</span>args <span class="token punctuation">[</span><span class="token punctuation">]</span>event<span class="token punctuation">.</span>Arg<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>event<span class="token punctuation">.</span>Arg<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> args<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defining-listeners" tabindex="-1"><a class="header-anchor" href="#defining-listeners" aria-hidden="true">#</a> Defining Listeners</h2><p>Next, let&#39;s take a look at the listener for our example event. Event listeners receive <code>[]event.Arg</code> of the event <code>Handle</code> method returns. Within the <code>Handle</code> method, you may perform any actions necessary to respond to the event:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> listeners

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;github.com/goravel/framework/contracts/event&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> SendShipmentNotification <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>SendShipmentNotification<span class="token punctuation">)</span> <span class="token function">Signature</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;send_shipment_notification&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>SendShipmentNotification<span class="token punctuation">)</span> <span class="token function">Queue</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> event<span class="token punctuation">.</span>Queue <span class="token punctuation">{</span>
  <span class="token keyword">return</span> event<span class="token punctuation">.</span>Queue<span class="token punctuation">{</span>
    Enable<span class="token punctuation">:</span>     <span class="token boolean">false</span><span class="token punctuation">,</span>
    Connection<span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    Queue<span class="token punctuation">:</span>      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>SendShipmentNotification<span class="token punctuation">)</span> <span class="token function">Handle</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stopping-the-propagation-of-an-event" tabindex="-1"><a class="header-anchor" href="#stopping-the-propagation-of-an-event" aria-hidden="true">#</a> Stopping The Propagation Of An Event</h3><p>Sometimes, you may wish to stop the propagation of an event to other listeners. You may do so by returning error from your listener&#39;s <code>Handle</code> method.</p><h2 id="queued-event-listeners" tabindex="-1"><a class="header-anchor" href="#queued-event-listeners" aria-hidden="true">#</a> Queued Event Listeners</h2>`,18),x=s("Queueing listeners can be beneficial if your listener is going to perform a slow task such as sending an email or making an HTTP request. Before using queued listeners, make sure to "),E=s("configure your queue"),T=s(" and start a queue worker on your server or local development environment."),L=o(`<div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> listeners

<span class="token operator">...</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>SendShipmentNotification<span class="token punctuation">)</span> <span class="token function">Queue</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> event<span class="token punctuation">.</span>Queue <span class="token punctuation">{</span>
  <span class="token keyword">return</span> event<span class="token punctuation">.</span>Queue<span class="token punctuation">{</span>
    Enable<span class="token punctuation">:</span>     <span class="token boolean">false</span><span class="token punctuation">,</span>
    Connection<span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    Queue<span class="token punctuation">:</span>      <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>SendShipmentNotification<span class="token punctuation">)</span> <span class="token function">Handle</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  name <span class="token operator">:=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

  <span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="queued-event-listeners-database-transactions" tabindex="-1"><a class="header-anchor" href="#queued-event-listeners-database-transactions" aria-hidden="true">#</a> Queued Event Listeners &amp; Database Transactions</h3><p>When queued listeners are dispatched within database transactions, they may be processed by the queue before the database transaction has committed. When this happens, any updates you have made to models or database records during the database transaction may not yet be reflected in the database. In addition, any models or database records created within the transaction may not exist in the database. If your listener depends on these models, unexpected errors can occur when the job that dispatches the queued listener is processed. At this time, the event needs to be placed outside the database transactions.</p><h2 id="dispatching-events" tabindex="-1"><a class="header-anchor" href="#dispatching-events" aria-hidden="true">#</a> Dispatching Events</h2><p>We can dispatching Events by <code>facades.Event.Job().Dispatch()</code> method.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> controllers

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;github.com/goravel/framework/contracts/event&quot;</span>
  <span class="token string">&quot;github.com/goravel/framework/contracts/http&quot;</span>
  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

  <span class="token string">&quot;goravel/app/events&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> UserController <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r UserController<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span>ctx http<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Event<span class="token punctuation">.</span><span class="token function">Job</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>events<span class="token punctuation">.</span>OrderShipped<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>event<span class="token punctuation">.</span>Arg<span class="token punctuation">{</span>
    <span class="token punctuation">{</span>Type<span class="token punctuation">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> <span class="token string">&quot;Goravel&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>Type<span class="token punctuation">:</span> <span class="token string">&quot;int&quot;</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Dispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="event-arg-type-supported-types" tabindex="-1"><a class="header-anchor" href="#event-arg-type-supported-types" aria-hidden="true">#</a> <code>event.Arg.Type</code> Supported Types</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token builtin">bool</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function A(N,Q){const t=i("router-link"),p=i("RouterLink");return l(),u("div",null,[d,n("nav",v,[n("ul",null,[n("li",null,[a(t,{to:"#introduction"},{default:e(()=>[k]),_:1})]),n("li",null,[a(t,{to:"#registering-events-listeners"},{default:e(()=>[m]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#generating-events-listeners"},{default:e(()=>[b]),_:1})])])]),n("li",null,[a(t,{to:"#defining-events"},{default:e(()=>[h]),_:1})]),n("li",null,[a(t,{to:"#defining-listeners"},{default:e(()=>[g]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#stopping-the-propagation-of-an-event"},{default:e(()=>[f]),_:1})])])]),n("li",null,[a(t,{to:"#queued-event-listeners"},{default:e(()=>[y]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#queued-event-listeners-database-transactions"},{default:e(()=>[w]),_:1})])])]),n("li",null,[a(t,{to:"#dispatching-events"},{default:e(()=>[_]),_:1})]),n("li",null,[a(t,{to:"#event-arg-type-supported-types"},{default:e(()=>[q]),_:1})])])]),S,n("p",null,[x,a(p,{to:"/v1.1/digging-deeper/queues.html"},{default:e(()=>[E]),_:1}),T]),L])}const O=c(r,[["render",A],["__file","event.html.vue"]]);export{O as default};
