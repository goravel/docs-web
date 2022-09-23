import{_ as t,r as o,o as d,c as r,b as e,d as i,w as l,e as n,f as c}from"./app.5cf86f11.js";const u={},v=e("h1",{id:"logging",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#logging","aria-hidden":"true"},"#"),n(" Logging")],-1),g={class:"table-of-contents"},m=n("Introduction"),h=n("Configuration"),b=n("Available channel drivers"),f=n("Write log messages"),_=n("Contextual Information"),p=n("Create a custom channel"),x=n("\u7F16\u5199\u9A71\u52A8"),L=n("More"),q=e("h2",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),n(" Introduction")],-1),y=e("p",null,"In order to help you understand the running status of the application, Goravel provides a powerful log service that can record log messages and system errors to a file or other channels.",-1),k=n("This module can be operated with "),w=e("code",null,"facades.Log",-1),C=n(", "),E=e("code",null,"facades.Log",-1),I=n(" is an instance of the well-known log component "),A={href:"https://github.com/sirupsen/logrus",target:"_blank",rel:"noopener noreferrer"},T=n("sirupsen/logrus"),H=n(", the usage method is the same as that of "),$=e("code",null,"sirupsen/logrus ",-1),F=n("Exactly the same."),S=c(`<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>Make custom configurations in <code>config/logging.go</code>. Allows to configure different log channels, you can enter the configuration file to view.</p><p><code>Goravel</code> uses <code>stack</code> channel to record logs by default. <code>stack</code> allows logs to be forwarded to multiple channels.</p><h2 id="available-channel-drivers" tabindex="-1"><a class="header-anchor" href="#available-channel-drivers" aria-hidden="true">#</a> Available channel drivers</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>stack</code></td><td>Allow multiple channels</td></tr><tr><td><code>single</code></td><td>Single log file</td></tr><tr><td><code>daily</code></td><td>One log file per day</td></tr><tr><td><code>custom</code></td><td>Custom drive</td></tr></tbody></table><h2 id="write-log-messages" tabindex="-1"><a class="header-anchor" href="#write-log-messages" aria-hidden="true">#</a> Write log messages</h2><p>Available level:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>facades.Log.Trace($message)
facades.Log.Debug($message)
facades.Log.Info($message)
facades.Log.Warn($message)
facades.Log.Error($message)
facades.Log.Fatal($message)
facades.Log.Panic($message)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="contextual-information" tabindex="-1"><a class="header-anchor" href="#contextual-information" aria-hidden="true">#</a> Contextual Information</h2><p>An array of contextual data may be passed to the log methods. This contextual data will be formatted and displayed with the log message:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>facades.Log.WithFields(logrus.Fields{
  &quot;goravel&quot;: &quot;framework&quot;,
}).Debug(&quot;web&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-a-custom-channel" tabindex="-1"><a class="header-anchor" href="#create-a-custom-channel" aria-hidden="true">#</a> Create a custom channel</h2><p>If you want to define a completely custom channel, you can specify the <code>custom</code> driver type in the <code>config/logging.go</code> configuration file. Then include a <code>via</code> option to implement a <code>framework\\contracts\\log\\Logger</code> structure:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//config/logging.go
&quot;custom&quot;: map[string]interface{}{
    &quot;driver&quot;: &quot;custom&quot;,
    &quot;via&quot;:    CustomTest{},
    &quot;path&quot;:   &quot;storage/logs/goravel-custom.log&quot;,//\u9009\u914D
    &quot;level&quot;:  facadesConfig.Env(&quot;LOG_LEVEL&quot;, &quot;debug&quot;),//\u9009\u914D
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F16\u5199\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u9A71\u52A8" aria-hidden="true">#</a> \u7F16\u5199\u9A71\u52A8</h3><p>Implement <code>framework\\contracts\\log\\Logger</code> interface.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//framework\\contracts\\log\\Logger
package log

import &quot;github.com/sirupsen/logrus&quot;

type Logger interface {
  Handle(configPath string) (logrus.Hook, error)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>files can be stored in the <code>app/extensions</code> folder (modifiable). Example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package aliyun

import (
  &quot;github.com/goravel/framework/support/facades&quot;
  &quot;github.com/sirupsen/logrus&quot;
)

type Logger struct {
}

func (logger Logger) Handle(configPath string) (logrus.Hook, error) {
  return AliyunLogHook{}, nil
}

type AliyunLogHook struct {
}

func (h AliyunLogHook) Levels() []logrus.Level {
  level := facades.Config.GetString(&quot;logging.channels.aliyun.level&quot;)

  if level == &quot;error&quot; {
    return []logrus.Level{
      logrus.ErrorLevel,
      logrus.FatalLevel,
      logrus.PanicLevel,
    }
  }

  return []logrus.Level{
    logrus.TraceLevel,
    logrus.DebugLevel,
    logrus.InfoLevel,
    logrus.WarnLevel,
    logrus.ErrorLevel,
    logrus.FatalLevel,
    logrus.PanicLevel,
  }
}

func (h AliyunLogHook) Fire(entry *logrus.Entry) error {
  // todo logic
  level := entry.Level.String()
  errTime := entry.Time.String()
  message := entry.Message

  return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="more" tabindex="-1"><a class="header-anchor" href="#more" aria-hidden="true">#</a> More</h3>`,20),N=n("See "),P={href:"https://github.com/sirupsen/logrus",target:"_blank",rel:"noopener noreferrer"},V=n("sirupsen/logrus");function W(D,G){const s=o("router-link"),a=o("ExternalLinkIcon");return d(),r("div",null,[v,e("nav",g,[e("ul",null,[e("li",null,[i(s,{to:"#introduction"},{default:l(()=>[m]),_:1})]),e("li",null,[i(s,{to:"#configuration"},{default:l(()=>[h]),_:1})]),e("li",null,[i(s,{to:"#available-channel-drivers"},{default:l(()=>[b]),_:1})]),e("li",null,[i(s,{to:"#write-log-messages"},{default:l(()=>[f]),_:1})]),e("li",null,[i(s,{to:"#contextual-information"},{default:l(()=>[_]),_:1})]),e("li",null,[i(s,{to:"#create-a-custom-channel"},{default:l(()=>[p]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#\u7F16\u5199\u9A71\u52A8"},{default:l(()=>[x]),_:1})]),e("li",null,[i(s,{to:"#more"},{default:l(()=>[L]),_:1})])])])])]),q,y,e("p",null,[k,w,C,E,I,e("a",A,[T,i(a)]),H,$,F]),S,e("p",null,[N,e("a",P,[V,i(a)])])])}const B=t(u,[["render",W],["__file","logging.html.vue"]]);export{B as default};
