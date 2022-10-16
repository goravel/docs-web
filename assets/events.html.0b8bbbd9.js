import{_ as t,r as l,o as c,c as v,b as e,d as i,w as d,e as n,f as a}from"./app.477941e5.js";const u={},o=e("h1",{id:"\u4E8B\u4EF6\u7CFB\u7EDF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E8B\u4EF6\u7CFB\u7EDF","aria-hidden":"true"},"#"),n(" \u4E8B\u4EF6\u7CFB\u7EDF")],-1),m={class:"table-of-contents"},b=n("\u4ECB\u7ECD"),h=n("\u751F\u6210\u4E8B\u4EF6\u548C\u76D1\u542C\u5668"),p=n("\u6CE8\u518C\u4E8B\u4EF6\u548C\u76D1\u542C\u5668"),g=n("\u5B9A\u4E49\u4E8B\u4EF6"),_=n("\u5B9A\u4E49\u76D1\u542C\u5668"),f=n("\u505C\u6B62\u4E8B\u4EF6\u4F20\u64AD"),x=n("\u4E8B\u4EF6\u76D1\u542C\u5668\u961F\u5217"),q=n("\u6392\u961F\u4E8B\u4EF6\u76D1\u542C\u5668\u548C\u6570\u636E\u5E93\u4E8B\u52A1"),S=n("\u8C03\u5EA6\u4E8B\u4EF6"),k=n("events.Arg.Type \u652F\u6301\u7684\u7C7B\u578B"),E=a(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>Goravel \u7684\u4E8B\u4EF6\u7CFB\u7EDF\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u5B9E\u73B0\uFF0C\u5141\u8BB8\u4F60\u80FD\u591F\u8BA2\u9605\u548C\u76D1\u542C\u5728\u4F60\u7684\u5E94\u7528\u4E2D\u7684\u53D1\u751F\u7684\u5404\u79CD\u4E8B\u4EF6\u3002\u4E8B\u4EF6\u7C7B\u4E00\u822C\u6765\u8BF4\u5B58\u50A8\u5728 <code>app/events</code> \u76EE\u5F55\uFF0C\u76D1\u542C\u8005\u7684\u7C7B\u5B58\u50A8\u5728 <code>app/listeners</code> \u76EE\u5F55\u3002\u4E0D\u8981\u62C5\u5FC3\u5728\u4F60\u7684\u5E94\u7528\u4E2D\u6CA1\u6709\u770B\u5230\u8FD9\u4E24\u4E2A\u76EE\u5F55\uFF0C\u56E0\u4E3A\u901A\u8FC7 Artisan \u547D\u4EE4\u884C\u6765\u521B\u5EFA\u4E8B\u4EF6\u548C\u76D1\u542C\u8005\u7684\u65F6\u5019\u76EE\u5F55\u4F1A\u540C\u65F6\u88AB\u521B\u5EFA\u3002</p><p>\u4E8B\u4EF6\u7CFB\u7EDF\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u975E\u5E38\u68D2\u7684\u65B9\u5F0F\u6765\u89E3\u8026\u4F60\u7684\u7CFB\u7EDF\u7684\u65B9\u65B9\u9762\u9762\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u4E8B\u4EF6\u53EF\u4EE5\u6709\u591A\u4E2A\u5B8C\u5168\u4E0D\u76F8\u5173\u7684\u76D1\u542C\u8005\u3002\u4F8B\u5982\uFF0C\u4F60\u5E0C\u671B\u6BCF\u5F53\u6709\u8BA2\u5355\u53D1\u51FA\u7684\u65F6\u5019\u90FD\u7ED9\u4F60\u53D1\u9001\u4E00\u4E2A Slack \u901A\u77E5\u3002\u4F60\u5927\u53EF\u4E0D\u5FC5\u5C06\u4F60\u7684\u5904\u7406\u8BA2\u5355\u7684\u4EE3\u7801\u548C\u53D1\u9001 slack \u6D88\u606F\u7684\u4EE3\u7801\u653E\u5728\u4E00\u8D77\uFF0C\u4F60\u53EA\u9700\u8981\u89E6\u53D1\u4E00\u4E2A <code>app\\events\\OrderShipped</code> \u4E8B\u4EF6\uFF0C\u7136\u540E\u4E8B\u4EF6\u76D1\u542C\u8005\u53EF\u4EE5\u6536\u5230\u8FD9\u4E2A\u4E8B\u4EF6\u7136\u540E\u53D1\u9001 slack \u901A\u77E5\u3002</p><h3 id="\u751F\u6210\u4E8B\u4EF6\u548C\u76D1\u542C\u5668" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u4E8B\u4EF6\u548C\u76D1\u542C\u5668" aria-hidden="true">#</a> \u751F\u6210\u4E8B\u4EF6\u548C\u76D1\u542C\u5668</h3><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>make:event</code> \u4EE5\u53CA <code>make:listener</code> \u7528\u4E8E\u751F\u6210\u5355\u4E2A\u4E8B\u4EF6\u548C\u76D1\u542C\u5668\u7684 <code>Artisan</code> \u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan make:event PodcastProcessed

go run . artisan make:listener SendPodcastNotification
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CE8\u518C\u4E8B\u4EF6\u548C\u76D1\u542C\u5668" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u4E8B\u4EF6\u548C\u76D1\u542C\u5668" aria-hidden="true">#</a> \u6CE8\u518C\u4E8B\u4EF6\u548C\u76D1\u542C\u5668</h2><p>\u5728\u7CFB\u7EDF\u7684\u670D\u52A1\u63D0\u4F9B\u8005 <code>app\\providers\\EventServiceProvider</code> \u4E2D\u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u65B9\u5F0F\u6765\u6CE8\u518C\u4F60\u6240\u6709\u7684\u4E8B\u4EF6\u76D1\u542C\u8005\u3002\u65B9\u6CD5 <code>listener</code> \u5305\u542B\u6240\u6709\u7684\u4E8B\u4EF6 (\u4F5C\u4E3A\u952E) \u548C\u5BF9\u5E94\u7684\u76D1\u542C\u5668 (\u503C)\u3002\u4F60\u53EF\u4EE5\u6DFB\u52A0\u4EFB\u610F\u591A\u7CFB\u7EDF\u9700\u8981\u7684\u76D1\u542C\u5668\u5728\u8FD9\u4E2A\u6570\u7EC4\u4E2D\uFF0C\u8BA9\u6211\u4EEC\u6DFB\u52A0\u4E00\u4E2A <code>OrderShipped</code> \u4E8B\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package providers

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9A\u4E49\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u4E8B\u4EF6" aria-hidden="true">#</a> \u5B9A\u4E49\u4E8B\u4EF6</h2><p>\u4E8B\u4EF6\u7C7B\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u6570\u636E\u5BB9\u5668\uFF0C\u5B83\u4FDD\u5B58\u4E0E\u4E8B\u4EF6\u76F8\u5173\u7684\u4FE1\u606F\uFF0C<code>event</code> \u7684 <code>Handle</code> \u65B9\u6CD5\u7EDF\u4E00\u4F20\u5165\u4E0E\u8FD4\u56DE <code>[]events.Arg</code> \u6570\u636E\u7ED3\u6784\uFF0C\u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u8FDB\u884C\u6570\u636E\u52A0\u5DE5\uFF0C\u52A0\u5DE5\u540E\u7684\u6570\u636E\u5C06\u4F20\u5165\u6240\u6709\u5173\u8054\u7684 <code>listeners</code> \u4E2D\u3002\u4F8B\u5982\uFF0C\u8BA9\u6211\u4EEC\u5047\u8BBE\u4E00\u4E2A <code>app\\events\\OrderShipped</code> \u4E8B\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package events

import &quot;github.com/goravel/framework/contracts/events&quot;

type OrderShipped struct {
}

func (receiver *OrderShipped) Handle(args []events.Arg) ([]events.Arg, error) {
  return args, nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9A\u4E49\u76D1\u542C\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u76D1\u542C\u5668" aria-hidden="true">#</a> \u5B9A\u4E49\u76D1\u542C\u5668</h2><p>\u63A5\u4E0B\u6765\uFF0C\u8BA9\u6211\u4EEC\u770B\u4E00\u4E0B\u793A\u4F8B\u4E8B\u4EF6\u7684\u4FA6\u542C\u5668\u3002\u4E8B\u4EF6\u76D1\u542C\u5668\u5728\u5176 <code>Handle</code> \u65B9\u6CD5\u4E2D\u63A5\u6536\u4E8B\u4EF6 <code>Handle</code> \u65B9\u6CD5\u8FD4\u56DE\u7684 <code>[]events.Arg</code>\u3002\u5728 <code>Handle</code> \u65B9\u6CD5\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u6267\u884C\u4EFB\u4F55\u5FC5\u8981\u7684\u64CD\u4F5C\u6765\u54CD\u5E94\u4E8B\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package listeners

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u505C\u6B62\u4E8B\u4EF6\u4F20\u64AD" tabindex="-1"><a class="header-anchor" href="#\u505C\u6B62\u4E8B\u4EF6\u4F20\u64AD" aria-hidden="true">#</a> \u505C\u6B62\u4E8B\u4EF6\u4F20\u64AD</h3><p>\u6709\u65F6\uFF0C\u4F60\u53EF\u80FD\u5E0C\u671B\u505C\u6B62\u5C06\u4E8B\u4EF6\u4F20\u64AD\u5230\u5176\u4ED6\u4FA6\u542C\u5668\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u4ECE\u76D1\u542C\u5668\u7684 <code>Handle</code> \u65B9\u6CD5\u8FD4\u56DE <code>error</code> \u6765\u505A\u5230\u8FD9\u4E00\u70B9\u3002</p><h2 id="\u4E8B\u4EF6\u76D1\u542C\u5668\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u76D1\u542C\u5668\u961F\u5217" aria-hidden="true">#</a> \u4E8B\u4EF6\u76D1\u542C\u5668\u961F\u5217</h2>`,18),N=n("\u5982\u679C\u4FA6\u542C\u5668\u6267\u884C\u7F13\u6162\u7684\u4EFB\u52A1\u5982\u53D1\u9001\u7535\u5B50\u90AE\u4EF6\u6216\u53D1\u51FA HTTP \u8BF7\u6C42\uFF0C\u4F60\u53EF\u4EE5\u5C06\u4EFB\u52A1\u4E22\u7ED9\u961F\u5217\u5904\u7406\u3002\u5728\u5F00\u59CB\u4F7F\u7528\u961F\u5217\u76D1\u542C\u5668\u4E4B\u524D\uFF0C\u8BF7\u786E\u4FDD\u5728\u4F60\u7684\u670D\u52A1\u5668\u6216\u8005\u672C\u5730\u5F00\u53D1\u73AF\u5883\u4E2D "),y=n("\u914D\u7F6E\u961F\u5217"),w=n(" \u5E76\u542F\u52A8\u4E00\u4E2A\u961F\u5217\u76D1\u542C\u5668\u3002\u7136\u540E\u5728 "),A=e("code",null,"listener",-1),H=n(" \u7684 "),Q=e("code",null,"Queue",-1),C=n(" \u65B9\u6CD5\u4E2D\u5B9A\u4E49\u662F\u5426\u542F\u7528\u961F\u5217\uFF0C\u53CA\u4F7F\u7528\u7684\u94FE\u63A5\u4E0E\u961F\u5217\u3002"),O=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package listeners

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6392\u961F\u4E8B\u4EF6\u76D1\u542C\u5668\u548C\u6570\u636E\u5E93\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u6392\u961F\u4E8B\u4EF6\u76D1\u542C\u5668\u548C\u6570\u636E\u5E93\u4E8B\u52A1" aria-hidden="true">#</a> \u6392\u961F\u4E8B\u4EF6\u76D1\u542C\u5668\u548C\u6570\u636E\u5E93\u4E8B\u52A1</h3><p>\u5F53\u5728\u6570\u636E\u5E93\u4E8B\u52A1\u4E2D\u8C03\u5EA6\u6392\u961F\u7684\u76D1\u542C\u5668\u65F6\uFF0C\u5B83\u4EEC\u53EF\u80FD\u4F1A\u5728\u63D0\u4EA4\u6570\u636E\u5E93\u4E8B\u52A1\u4E4B\u524D\u7531\u961F\u5217\u8FDB\u884C\u5904\u7406\u3002\u53D1\u751F\u8FD9\u79CD\u60C5\u51B5\u65F6\uFF0C\u4F60\u5728\u6570\u636E\u5E93\u4E8B\u52A1\u671F\u95F4\u5BF9\u6A21\u578B\u6216\u6570\u636E\u5E93\u8BB0\u5F55\u6240\u505A\u7684\u4EFB\u4F55\u66F4\u65B0\u53EF\u80FD\u5C1A\u672A\u53CD\u6620\u5728\u6570\u636E\u5E93\u4E2D\u3002\u6B64\u5916\uFF0C\u5728\u4E8B\u52A1\u4E2D\u521B\u5EFA\u7684\u4EFB\u4F55\u6A21\u578B\u6216\u6570\u636E\u5E93\u8BB0\u5F55\u53EF\u80FD\u4E0D\u5B58\u5728\u4E8E\u6570\u636E\u5E93\u4E2D\u3002\u5982\u679C\u76D1\u542C\u5668\u4F9D\u8D56\u4E8E\u8FD9\u4E9B\u6A21\u578B\uFF0C\u5219\u5728\u5904\u7406\u5206\u6D3E\u6392\u961F\u76D1\u542C\u5668\u7684\u4F5C\u4E1A\u65F6\uFF0C\u53EF\u80FD\u4F1A\u53D1\u751F\u610F\u5916\u9519\u8BEF\u3002\u8FD9\u65F6\u9700\u8981\u5C06\u4E8B\u4EF6\u7F6E\u4E8E\u6570\u636E\u5E93\u4E8B\u52A1\u4E4B\u5916\u3002</p><h2 id="\u8C03\u5EA6\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8C03\u5EA6\u4E8B\u4EF6" aria-hidden="true">#</a> \u8C03\u5EA6\u4E8B\u4EF6</h2><p>\u53EF\u4EE5\u4F7F\u7528 <code>facades.Event.Job().Dispatch()</code> \u65B9\u6CD5\u8FDB\u884C\u4E8B\u4EF6\u8C03\u5EA6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package controllers

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="events-arg-type-\u652F\u6301\u7684\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#events-arg-type-\u652F\u6301\u7684\u7C7B\u578B" aria-hidden="true">#</a> <code>events.Arg.Type</code> \u652F\u6301\u7684\u7C7B\u578B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bool
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function P(T,V){const s=l("router-link"),r=l("RouterLink");return c(),v("div",null,[o,e("nav",m,[e("ul",null,[e("li",null,[i(s,{to:"#\u4ECB\u7ECD"},{default:d(()=>[b]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#\u751F\u6210\u4E8B\u4EF6\u548C\u76D1\u542C\u5668"},{default:d(()=>[h]),_:1})])])]),e("li",null,[i(s,{to:"#\u6CE8\u518C\u4E8B\u4EF6\u548C\u76D1\u542C\u5668"},{default:d(()=>[p]),_:1})]),e("li",null,[i(s,{to:"#\u5B9A\u4E49\u4E8B\u4EF6"},{default:d(()=>[g]),_:1})]),e("li",null,[i(s,{to:"#\u5B9A\u4E49\u76D1\u542C\u5668"},{default:d(()=>[_]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#\u505C\u6B62\u4E8B\u4EF6\u4F20\u64AD"},{default:d(()=>[f]),_:1})])])]),e("li",null,[i(s,{to:"#\u4E8B\u4EF6\u76D1\u542C\u5668\u961F\u5217"},{default:d(()=>[x]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#\u6392\u961F\u4E8B\u4EF6\u76D1\u542C\u5668\u548C\u6570\u636E\u5E93\u4E8B\u52A1"},{default:d(()=>[q]),_:1})])])]),e("li",null,[i(s,{to:"#\u8C03\u5EA6\u4E8B\u4EF6"},{default:d(()=>[S]),_:1})]),e("li",null,[i(s,{to:"#events-arg-type-\u652F\u6301\u7684\u7C7B\u578B"},{default:d(()=>[k]),_:1})])])]),E,e("p",null,[N,i(r,{to:"/v0/zh/digging-deeper/%E9%98%9F%E5%88%97.html"},{default:d(()=>[y]),_:1}),w,A,H,Q,C]),O])}const B=t(u,[["render",P],["__file","events.html.vue"]]);export{B as default};
