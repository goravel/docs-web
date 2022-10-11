import{_ as r,r as a,o,c as t,b as e,d as i,w as d,e as n,f as c}from"./app.758b3545.js";const u={},v=e("h1",{id:"\u65E5\u5FD7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u65E5\u5FD7","aria-hidden":"true"},"#"),n(" \u65E5\u5FD7")],-1),g={class:"table-of-contents"},m=n("\u4ECB\u7ECD"),b=n("\u914D\u7F6E"),h=n("\u53EF\u7528\u7684\u901A\u9053\u9A71\u52A8"),_=n("\u5199\u65E5\u5FD7\u6D88\u606F"),f=n("\u4E0A\u4E0B\u6587\u4FE1\u606F"),p=n("\u521B\u5EFA\u81EA\u5B9A\u4E49\u901A\u9053"),L=n("\u7F16\u5199\u9A71\u52A8"),x=n("\u66F4\u591A\u4F7F\u7528\u65B9\u6CD5"),q=e("h2",{id:"\u4ECB\u7ECD",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),n(" \u4ECB\u7ECD")],-1),k=e("p",null,"\u4E3A\u4E86\u5E2E\u52A9\u4F60\u4E86\u89E3\u5E94\u7528\u7A0B\u5E8F\u7684\u8FD0\u884C\u72B6\u51B5\uFF0CGoravel \u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u65E5\u5FD7\u6A21\u5757\uFF0C\u53EF\u4EE5\u5C06\u65E5\u5FD7\u6D88\u606F\u3001\u7CFB\u7EDF\u9519\u8BEF\u8BB0\u5F55\u5230\u6587\u4EF6\u4E2D\u6216\u5176\u4ED6\u901A\u9053\u3002",-1),y=n("\u8BE5\u6A21\u5757\u53EF\u4EE5\u4F7F\u7528 "),E=e("code",null,"facades.Log",-1),w=n(" \u8FDB\u884C\u64CD\u4F5C\uFF0C"),H=e("code",null,"facades.Log",-1),$=n(" \u662F\u77E5\u540D\u65E5\u5FD7\u7EC4\u4EF6 "),F={href:"https://github.com/sirupsen/logrus",target:"_blank",rel:"noopener noreferrer"},T=n("sirupsen/logrus"),C=n(" \u7684\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u4F7F\u7528\u65B9\u6CD5\u4E0E "),P=e("code",null,"sirupsen/logrus",-1),V=n(" \u5B8C\u5168\u4E00\u81F4\u3002"),A=c(`<h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u5728 <code>config/logging.go</code> \u4E2D\u8FDB\u884C\u6240\u6709\u81EA\u5B9A\u4E49\u914D\u7F6E\u3002\u5141\u8BB8\u914D\u7F6E\u4E0D\u540C\u7684\u65E5\u5FD7\u901A\u9053\uFF0C\u53EF\u4EE5\u8FDB\u5165\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u67E5\u770B\u3002</p><p><code>Goravel</code> \u9ED8\u8BA4\u4F7F\u7528 <code>stack</code> \u901A\u9053\u8BB0\u5F55\u65E5\u5FD7\u3002<code>stack</code> \u5141\u8BB8\u65E5\u5FD7\u8F6C\u53D1\u5230\u591A\u4E2A\u901A\u9053\u4E2D\u3002</p><h2 id="\u53EF\u7528\u7684\u901A\u9053\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#\u53EF\u7528\u7684\u901A\u9053\u9A71\u52A8" aria-hidden="true">#</a> \u53EF\u7528\u7684\u901A\u9053\u9A71\u52A8</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>stack</code></td><td>\u5141\u8BB8\u4F7F\u7528\u591A\u4E2A\u901A\u9053</td></tr><tr><td><code>single</code></td><td>\u5355\u65E5\u5FD7\u6587\u4EF6</td></tr><tr><td><code>daily</code></td><td>\u6BCF\u5929\u4E00\u4E2A\u65E5\u5FD7\u6587\u4EF6</td></tr><tr><td><code>custom</code></td><td>\u81EA\u5B9A\u4E49\u9A71\u52A8</td></tr></tbody></table><h2 id="\u5199\u65E5\u5FD7\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u5199\u65E5\u5FD7\u6D88\u606F" aria-hidden="true">#</a> \u5199\u65E5\u5FD7\u6D88\u606F</h2><p>\u53EF\u7528\u7EA7\u522B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>facades.Log.Trace($message)
facades.Log.Debug($message)
facades.Log.Info($message)
facades.Log.Warn($message)
facades.Log.Error($message)
facades.Log.Fatal($message)
facades.Log.Panic($message)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0A\u4E0B\u6587\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4E0B\u6587\u4FE1\u606F" aria-hidden="true">#</a> \u4E0A\u4E0B\u6587\u4FE1\u606F</h2><p>\u53EF\u4EE5\u5C06\u4E0A\u4E0B\u6587\u6570\u636E\u6570\u7EC4\u4F20\u9012\u7ED9\u65E5\u5FD7\u65B9\u6CD5\u3002\u8FD9\u4E9B\u4FE1\u606F\u5C06\u88AB\u683C\u5F0F\u5316\uFF0C\u5E76\u4E0E\u65E5\u5FD7\u6D88\u606F\u4E00\u8D77\u663E\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>facades.Log.WithFields(logrus.Fields{
    &quot;goravel&quot;: &quot;framework&quot;,
}).Debug(&quot;web&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u81EA\u5B9A\u4E49\u901A\u9053" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u81EA\u5B9A\u4E49\u901A\u9053" aria-hidden="true">#</a> \u521B\u5EFA\u81EA\u5B9A\u4E49\u901A\u9053</h2><p>\u5982\u679C\u4F60\u60F3\u5B9A\u4E49\u4E00\u4E2A\u5B8C\u5168\u81EA\u5B9A\u4E49\u7684\u9A71\u52A8\uFF0C\u53EF\u4EE5\u5728 <code>config/logging.go</code> \u914D\u7F6E\u6587\u4EF6\u4E2D\u6307\u5B9A <code>custom</code> \u9A71\u52A8\u7C7B\u578B\u3002 \u7136\u540E\u5305\u542B\u4E00\u4E2A <code>via</code> \u9009\u9879\uFF0C\u5B9E\u73B0\u4E00\u4E2A <code>framework\\contracts\\log\\Logger</code> \u7ED3\u6784\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//config/logging.go \u914D\u7F6E
&quot;custom&quot;: map[string]interface{}{
    &quot;driver&quot;: &quot;custom&quot;,
    &quot;via&quot;:    CustomTest{},
    &quot;path&quot;:   &quot;storage/logs/goravel-custom.log&quot;,//\u9009\u914D
    &quot;level&quot;:  facadesConfig.Env(&quot;LOG_LEVEL&quot;, &quot;debug&quot;),//\u9009\u914D
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F16\u5199\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u9A71\u52A8" aria-hidden="true">#</a> \u7F16\u5199\u9A71\u52A8</h3><p>\u5B9E\u73B0 <code>framework\\contracts\\log\\Logger</code> \u63A5\u53E3\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//framework\\contracts\\log\\Logger
package log

import &quot;github.com/sirupsen/logrus&quot;

type Logger interface {
  Handle(configPath string) (logrus.Hook, error)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6587\u4EF6\u53EF\u4EE5\u50A8\u5B58\u5230 <code>app/extensions</code> \u6587\u4EF6\u5939\u4E2D\uFF08\u53EF\u4FEE\u6539\uFF09\u3002\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package aliyun

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
  // todo \u76F8\u5E94\u903B\u8F91
  level := entry.Level.String()
  errTime := entry.Time.String()
  message := entry.Message

  return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u66F4\u591A\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u66F4\u591A\u4F7F\u7528\u65B9\u6CD5</h3>`,20),G=n("\u8BE6\u89C1 "),I={href:"https://github.com/sirupsen/logrus",target:"_blank",rel:"noopener noreferrer"},N=n("sirupsen/logrus");function S(B,D){const s=a("router-link"),l=a("ExternalLinkIcon");return o(),t("div",null,[v,e("nav",g,[e("ul",null,[e("li",null,[i(s,{to:"#\u4ECB\u7ECD"},{default:d(()=>[m]),_:1})]),e("li",null,[i(s,{to:"#\u914D\u7F6E"},{default:d(()=>[b]),_:1})]),e("li",null,[i(s,{to:"#\u53EF\u7528\u7684\u901A\u9053\u9A71\u52A8"},{default:d(()=>[h]),_:1})]),e("li",null,[i(s,{to:"#\u5199\u65E5\u5FD7\u6D88\u606F"},{default:d(()=>[_]),_:1})]),e("li",null,[i(s,{to:"#\u4E0A\u4E0B\u6587\u4FE1\u606F"},{default:d(()=>[f]),_:1})]),e("li",null,[i(s,{to:"#\u521B\u5EFA\u81EA\u5B9A\u4E49\u901A\u9053"},{default:d(()=>[p]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#\u7F16\u5199\u9A71\u52A8"},{default:d(()=>[L]),_:1})]),e("li",null,[i(s,{to:"#\u66F4\u591A\u4F7F\u7528\u65B9\u6CD5"},{default:d(()=>[x]),_:1})])])])])]),q,k,e("p",null,[y,E,w,H,$,e("a",F,[T,i(l)]),C,P,V]),A,e("p",null,[G,e("a",I,[N,i(l)])])])}const M=r(u,[["render",S],["__file","logging.html.vue"]]);export{M as default};
