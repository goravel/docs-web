import{_ as l,r as a,o,c,b as e,d as i,w as s,e as n,f as d}from"./app.6881ea8b.js";const v={},u=e("h1",{id:"events",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#events","aria-hidden":"true"},"#"),n(" Events")],-1),m={class:"table-of-contents"},h=n("Introduction"),p=n("Registering Events & Listeners"),b=n("Generating Events & Listeners"),g=n("Defining Events"),f=n("Defining Listeners"),y=n("Stopping The Propagation Of An Event"),_=n("Queued Event Listeners"),x=n("Queued Event Listeners & Database Transactions"),q=n("Dispatching Events"),S=n("events.Arg.Type Supported Types"),k=d(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Goravel&#39;s events provide a simple observer pattern implementation, allowing you to subscribe and listen for various events that occur within your application. Event classes are typically stored in the <code>app/events</code> directory, while their listeners are stored in <code>app/listeners</code>. Don&#39;t worry if you don&#39;t see these directories in your application as they will be created for you as you generate events and listeners using Artisan console commands.</p><p>Events serve as a great way to decouple various aspects of your application, since a single event can have multiple listeners that do not depend on each other. For example, you may wish to send a Slack notification to your user each time an order has shipped. Instead of coupling your order processing code to your Slack notification code, you can raise an <code>app\\events\\OrderShipped</code> event which a listener can receive and use to dispatch a Slack notification.</p><h2 id="registering-events-listeners" tabindex="-1"><a class="header-anchor" href="#registering-events-listeners" aria-hidden="true">#</a> Registering Events &amp; Listeners</h2><p>The <code>app\\providers\\EventServiceProvider</code> included with your Goravel application provides a convenient place to register all of your application&#39;s event listeners. The <code>listen</code> method contains an array of all events (keys) and their listeners (values). You may add as many events to this array as your application requires. For example, let&#39;s add an <code>OrderShipped</code> event:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package providers

import (
  &quot;github.com/goravel/framework/contracts/events&quot;
  &quot;github.com/goravel/framework/support/facades&quot;
)

type EventServiceProvider struct {
}

...

func (receiver *EventServiceProvider) listen() map[events.Event][]events.Listener {
  return map[events.Event][]events.Listener{
    &amp;events.OrderShipped{}: {
      &amp;listeners.SendShipmentNotification{},
    },
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="generating-events-listeners" tabindex="-1"><a class="header-anchor" href="#generating-events-listeners" aria-hidden="true">#</a> Generating Events &amp; Listeners</h3><p>You can use the <code>make:event</code> and <code>make:listener</code> Artisan commands to generate individual events and listeners:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan make:event PodcastProcessed

go run . artisan make:listener SendPodcastNotification
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defining-events" tabindex="-1"><a class="header-anchor" href="#defining-events" aria-hidden="true">#</a> Defining Events</h2><p>An event class is essentially a data container which holds the information related to the event, the Handle method of <code>event</code> passes in and returns the <code>[]events.Arg</code> structure, you can process data here, the processed data will be passed into all associated <code>listeners</code> For example, let&#39;s assume an <code>app\\events\\OrderShipped</code> event:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package events

import &quot;github.com/goravel/framework/contracts/events&quot;

type OrderShipped struct {
}

func (receiver *OrderShipped) Handle(args []events.Arg) ([]events.Arg, error) {
  return args, nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defining-listeners" tabindex="-1"><a class="header-anchor" href="#defining-listeners" aria-hidden="true">#</a> Defining Listeners</h2><p>Next, let&#39;s take a look at the listener for our example event. Event listeners receive <code>[]events.Arg</code> of the event <code>Handle</code> method returns. Within the <code>Handle</code> method, you may perform any actions necessary to respond to the event:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package listeners

import (
  &quot;github.com/goravel/framework/contracts/events&quot;
)

type SendShipmentNotification struct {
}

func (receiver *SendShipmentNotification) Signature() string {
  return &quot;send_shipment_notification&quot;
}

func (receiver *SendShipmentNotification) Queue(args ...interface{}) events.Queue {
  return events.Queue{
    Enable:     false,
    Connection: &quot;&quot;,
    Queue:      &quot;&quot;,
  }
}

func (receiver *SendShipmentNotification) Handle(args ...interface{}) error {
  return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stopping-the-propagation-of-an-event" tabindex="-1"><a class="header-anchor" href="#stopping-the-propagation-of-an-event" aria-hidden="true">#</a> Stopping The Propagation Of An Event</h3><p>Sometimes, you may wish to stop the propagation of an event to other listeners. You may do so by returning error from your listener&#39;s <code>Handle</code> method.</p><h2 id="queued-event-listeners" tabindex="-1"><a class="header-anchor" href="#queued-event-listeners" aria-hidden="true">#</a> Queued Event Listeners</h2>`,18),E=n("Queueing listeners can be beneficial if your listener is going to perform a slow task such as sending an email or making an HTTP request. Before using queued listeners, make sure to "),w=n("configure your queue"),T=n(" and start a queue worker on your server or local development environment."),L=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package listeners

...

func (receiver *SendShipmentNotification) Queue(args ...interface{}) events.Queue {
  return events.Queue{
    Enable:     false,
    Connection: &quot;&quot;,
    Queue:      &quot;&quot;,
  }
}

func (receiver *SendShipmentNotification) Handle(args ...interface{}) error {
  return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="queued-event-listeners-database-transactions" tabindex="-1"><a class="header-anchor" href="#queued-event-listeners-database-transactions" aria-hidden="true">#</a> Queued Event Listeners &amp; Database Transactions</h3><p>When queued listeners are dispatched within database transactions, they may be processed by the queue before the database transaction has committed. When this happens, any updates you have made to models or database records during the database transaction may not yet be reflected in the database. In addition, any models or database records created within the transaction may not exist in the database. If your listener depends on these models, unexpected errors can occur when the job that dispatches the queued listener is processed. At this time, the event needs to be placed outside the database transactions.</p><h2 id="dispatching-events" tabindex="-1"><a class="header-anchor" href="#dispatching-events" aria-hidden="true">#</a> Dispatching Events</h2><p>We can dispatching Events by <code>facades.Event.Job().Dispatch()</code> method.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package controllers

import (
  &quot;github.com/gin-gonic/gin&quot;
  &quot;github.com/goravel/framework/contracts/events&quot;
  &quot;github.com/goravel/framework/support/facades&quot;
  &quot;goravel/app/events&quot;
)

type UserController struct {
}

func (r UserController) Show(ctx *gin.Context) {
  err := facades.Event.Job(&amp;events.OrderShipped{}, []events.Arg{
    {Type: &quot;string&quot;, Value: &quot;abcc&quot;},
    {Type: &quot;int&quot;, Value: 1234},
  }).Dispatch()
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="events-arg-type-supported-types" tabindex="-1"><a class="header-anchor" href="#events-arg-type-supported-types" aria-hidden="true">#</a> <code>events.Arg.Type</code> Supported Types</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bool
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function A(N,Q){const t=a("router-link"),r=a("RouterLink");return o(),c("div",null,[u,e("nav",m,[e("ul",null,[e("li",null,[i(t,{to:"#introduction"},{default:s(()=>[h]),_:1})]),e("li",null,[i(t,{to:"#registering-events-listeners"},{default:s(()=>[p]),_:1}),e("ul",null,[e("li",null,[i(t,{to:"#generating-events-listeners"},{default:s(()=>[b]),_:1})])])]),e("li",null,[i(t,{to:"#defining-events"},{default:s(()=>[g]),_:1})]),e("li",null,[i(t,{to:"#defining-listeners"},{default:s(()=>[f]),_:1}),e("ul",null,[e("li",null,[i(t,{to:"#stopping-the-propagation-of-an-event"},{default:s(()=>[y]),_:1})])])]),e("li",null,[i(t,{to:"#queued-event-listeners"},{default:s(()=>[_]),_:1}),e("ul",null,[e("li",null,[i(t,{to:"#queued-event-listeners-database-transactions"},{default:s(()=>[x]),_:1})])])]),e("li",null,[i(t,{to:"#dispatching-events"},{default:s(()=>[q]),_:1})]),e("li",null,[i(t,{to:"#events-arg-type-supported-types"},{default:s(()=>[S]),_:1})])])]),k,e("p",null,[E,i(r,{to:"/v0/digging-deeper/queues.html"},{default:s(()=>[w]),_:1}),T]),L])}const O=l(v,[["render",A],["__file","events.html.vue"]]);export{O as default};
