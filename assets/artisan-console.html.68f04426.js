import{_ as t,r,o as c,c as o,b as e,d as i,w as s,e as n,f as l}from"./app.8f68af67.js";const u={},v=e("h1",{id:"artisan-\u547D\u4EE4\u884C",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#artisan-\u547D\u4EE4\u884C","aria-hidden":"true"},"#"),n(" Artisan \u547D\u4EE4\u884C")],-1),m={class:"table-of-contents"},b=n("\u4ECB\u7ECD"),h=n("\u7F16\u5199\u547D\u4EE4"),g=n("\u751F\u6210\u547D\u4EE4"),x=n("\u547D\u4EE4\u7ED3\u6784"),p=n("\u5B9A\u4E49\u8F93\u5165"),_=n("\u53C2\u6570"),f=n("\u9009\u9879"),q=n("\u5206\u7C7B"),C=n("\u5B50\u547D\u4EE4"),E=n("\u6CE8\u518C\u547D\u4EE4"),k=n("\u4EE5\u7F16\u7A0B\u65B9\u5F0F\u6267\u884C\u547D\u4EE4"),A=e("h2",{id:"\u4ECB\u7ECD",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),n(" \u4ECB\u7ECD")],-1),S=n("Artisan \u662F Goravel \u81EA\u5E26\u7684\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u8BE5\u6A21\u5757\u53EF\u4EE5\u4F7F\u7528 "),N=e("code",null,"facades.Cache",-1),L=n(" \u8FDB\u884C\u64CD\u4F5C\u3002\u5B83\u63D0\u4F9B\u4E86\u8BB8\u591A\u6709\u7528\u7684\u547D\u4EE4\uFF0C\u8FD9\u4E9B\u547D\u4EE4\u53EF\u4EE5\u5728\u6784\u5EFA\u5E94\u7528\u65F6\u4E3A\u4F60\u63D0\u4F9B\u5E2E\u52A9\u3002\u5176\u5E95\u5C42\u4F7F\u7528 "),T={href:"https://github.com/urfave/cli",target:"_blank",rel:"noopener noreferrer"},w=n("urfave/cli"),F=n(" \u8FDB\u884C\u529F\u80FD\u7684\u5B9E\u73B0\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u67E5\u770B\u6240\u6709\u53EF\u7528\u7684 Artisan \u547D\u4EE4\uFF1A"),G=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6BCF\u4E2A\u547D\u4EE4\u90FD\u5305\u542B\u4E86\u300Chelp\u300D\u754C\u9762\uFF0C\u5B83\u4F1A\u663E\u793A\u548C\u6982\u8FF0\u547D\u4EE4\u7684\u53EF\u7528\u53C2\u6570\u53CA\u9009\u9879\u3002\u53EA\u9700\u8981\u5728\u547D\u4EE4\u524D\u52A0\u4E0A help \u5373\u53EF\u67E5\u770B\u547D\u4EE4\u5E2E\u52A9\u754C\u9762\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan help migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u7F16\u5199\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u547D\u4EE4" aria-hidden="true">#</a> \u7F16\u5199\u547D\u4EE4</h2><p>\u9664 Artisan \u63D0\u4F9B\u7684\u547D\u4EE4\u5916\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u7F16\u5199\u81EA\u5DF1\u7684\u81EA\u5B9A\u4E49\u547D\u4EE4\u3002\u547D\u4EE4\u4F4D\u4E8E <code>app/console/commands</code> \u76EE\u5F55\u4E2D\u3002</p><h3 id="\u751F\u6210\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u547D\u4EE4" aria-hidden="true">#</a> \u751F\u6210\u547D\u4EE4</h3><p>\u8981\u521B\u5EFA\u65B0\u547D\u4EE4\uFF0C\u53EF\u4EE5\u4F7F\u7528 make:command Artisan \u547D\u4EE4\u3002\u8BE5\u547D\u4EE4\u5C06\u5728 app/console/commands \u76EE\u5F55\u4E2D\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u547D\u4EE4\u7C7B\u3002\u5982\u679C\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4E0D\u5B58\u5728\u6B64\u76EE\u5F55\uFF0C\u8BF7\u4E0D\u8981\u62C5\u5FC3\uFF0C\u5B83\u5C06\u5728\u4F60\u7B2C\u4E00\u6B21\u8FD0\u884C make:command \u547D\u4EE4\u65F6\u81EA\u52A8\u521B\u5EFA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan make:command SendEmails
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u547D\u4EE4\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u7ED3\u6784" aria-hidden="true">#</a> \u547D\u4EE4\u7ED3\u6784</h3><p>\u751F\u6210\u547D\u4EE4\u540E\uFF0C\u5E94\u4E3A\u8BE5\u7C7B\u7684 signature \u548C description \u5C5E\u6027\u5B9A\u4E49\u9002\u5F53\u7684\u503C\u3002\u5F53\u4F7F\u7528 <code>list</code> \u547D\u4EE4\u663E\u793A\u547D\u4EE4\u5217\u8868\u65F6\uFF0C\u5C06\u4F7F\u7528\u8FD9\u4E9B\u5C5E\u6027\u3002\u6267\u884C\u547D\u4EE4\u65F6\u5C06\u8C03\u7528<code>handle</code>\u65B9\u6CD5\u3002\u4F60\u53EF\u4EE5\u5C06\u547D\u4EE4\u903B\u8F91\u653E\u5728\u6B64\u65B9\u6CD5\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package commands

import (
  &quot;github.com/goravel/framework/contracts/console&quot;
  &quot;github.com/urfave/cli/v2&quot;
)

type SendEmails struct {
}

//Signature The name and signature of the console command.
func (receiver *SendEmails) Signature() string {
  return &quot;emails&quot;
}

//Description The console command description.
func (receiver *SendEmails) Description() string {
  return &quot;Command description&quot;
}

//Extend The console command extend.
func (receiver *SendEmails) Extend() console.CommandExtend {
  return console.CommandExtend{}
}

//Handle Execute the console command.
func (receiver *SendEmails) Handle(c *cli.Context) error {
  return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9A\u4E49\u8F93\u5165" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u8F93\u5165" aria-hidden="true">#</a> \u5B9A\u4E49\u8F93\u5165</h2><p>\u5728\u7F16\u5199\u63A7\u5236\u53F0\u547D\u4EE4\u65F6\uFF0C\u901A\u5E38\u662F\u901A\u8FC7\u53C2\u6570\u548C\u9009\u9879\u6765\u6536\u96C6\u7528\u6237\u8F93\u5165\u7684\u3002 Goravel \u8BA9\u4F60\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u7684\u83B7\u53D6\u7528\u6237\u8F93\u5165\u7684\u5185\u5BB9\u3002</p><h3 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h3><p>\u76F4\u63A5\u5728\u547D\u4EE4\u540E\u8DDF\u53C2\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan emails NAME EMAIL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6\u53C2\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (receiver *ListCommand) Handle(c *cli.Context) error {
  name := c.Args().Get(0)
  email := c.Args().Get(1)

  return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879" aria-hidden="true">#</a> \u9009\u9879</h3><p>\u9009\u9879\u7C7B\u4F3C\u4E8E\u53C2\u6570\uFF0C\u662F\u7528\u6237\u8F93\u5165\u7684\u53E6\u4E00\u79CD\u5F62\u5F0F\u3002\u5728\u547D\u4EE4\u884C\u4E2D\u6307\u5B9A\u9009\u9879\u7684\u65F6\u5019\uFF0C\u5B83\u4EEC\u4EE5\u4E24\u4E2A\u77ED\u6A2A\u7EBF (\u2013) \u4F5C\u4E3A\u524D\u7F00\u3002</p><p>\u5B9A\u4E49\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (receiver *ListCommand) Extend() console.CommandExtend {
  return console.CommandExtend{
    Flags: []cli.Flag{
      &amp;cli.StringFlag{
        Name:    &quot;lang&quot;,
        Value:   &quot;english&quot;,// \u9ED8\u8BA4\u503C
        Aliases: []string{&quot;l&quot;},// \u9009\u9879\u7B80\u5199
        Usage:   &quot;language for the greeting&quot;,// \u9009\u9879\u8BF4\u660E
      },
    },
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u83B7\u53D6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (receiver *ListCommand) Handle(c *cli.Context) error {
  lang := c.String(&quot;lang&quot;)

  return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan emails --lang chinese
go run . artisan emails -l chinese // \u7F29\u5199
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,26),V=n("\u5177\u4F53\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 "),H={href:"https://github.com/urfave/cli/blob/master/docs/v2/manual.md#flags",target:"_blank",rel:"noopener noreferrer"},I=n("urfave/cli \u6587\u6863"),B=l(`<h3 id="\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5206\u7C7B" aria-hidden="true">#</a> \u5206\u7C7B</h3><p>\u53EF\u4EE5\u5C06\u4E00\u7EC4\u547D\u4EE4\u8BBE\u7F6E\u4E3A\u540C\u4E00\u4E2A\u5206\u7C7B\uFF0C\u65B9\u4FBF\u5728 <code>go run . artisan list</code> \u4E2D\u67E5\u770B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//Extend The console command extend.
func (receiver *ConsoleMakeCommand) Extend() console.CommandExtend {
  return console.CommandExtend{
    Category: &quot;make&quot;,
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B50\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5B50\u547D\u4EE4" aria-hidden="true">#</a> \u5B50\u547D\u4EE4</h3><p>\u53EF\u4EE5\u4E3A\u4E00\u4E2A\u547D\u4EE4\u8BBE\u7F6E\u591A\u4E2A\u5B50\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//Extend The console command extend.
func (receiver *SendEmails) Extend() console.CommandExtend {
  return console.CommandExtend{
    Subcommands: []*cli.Command{
      {
        Name:  &quot;add&quot;,
        Usage: &quot;add a new template&quot;,
        Action: func(c *cli.Context) error {
          fmt.Println(&quot;new task template: &quot;, c.Args().First())
          return nil
        },
      },
      {
        Name:  &quot;remove&quot;,
        Usage: &quot;remove an existing template&quot;,
        Action: func(c *cli.Context) error {
          fmt.Println(&quot;removed task template: &quot;, c.Args().First())
          return nil
        },
      },
    },
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan emails add
go run . artisan emails remove
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),M=n("\u5177\u4F53\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 "),U={href:"https://github.com/urfave/cli/blob/master/docs/v2/manual.md#subcommands",target:"_blank",rel:"noopener noreferrer"},y=n("urfave/cli \u6587\u6863"),D=l(`<h2 id="\u6CE8\u518C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u547D\u4EE4" aria-hidden="true">#</a> \u6CE8\u518C\u547D\u4EE4</h2><p>\u4F60\u7684\u6240\u6709\u63A7\u5236\u53F0\u547D\u4EE4\u90FD\u5728\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u7684 <code>app\\console\\kernel.go</code> \u4E2D\u6CE8\u518C\uFF0C\u8FD9\u662F\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u300C\u63A7\u5236\u53F0\u5185\u6838\u300D\u3002\u5728\u6B64\u6587\u4EF6\u7684 <code>Commands</code> \u65B9\u6CD5\u4E2D\uFF0C\u52A0\u8F7D\u6240\u6709\u53EF\u7528\u7684\u547D\u4EE4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (kernel Kernel) Commands() []console.Command {
  return []console.Command{
    &amp;commands.SendEmails{},
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE5\u7F16\u7A0B\u65B9\u5F0F\u6267\u884C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u7F16\u7A0B\u65B9\u5F0F\u6267\u884C\u547D\u4EE4" aria-hidden="true">#</a> \u4EE5\u7F16\u7A0B\u65B9\u5F0F\u6267\u884C\u547D\u4EE4</h2><p>\u6709\u65F6\u4F60\u53EF\u80FD\u5E0C\u671B\u5728 CLI \u4E4B\u5916\u6267\u884C Artisan \u547D\u4EE4\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u80FD\u5E0C\u671B\u4ECE\u8DEF\u7531\u6216\u63A7\u5236\u5668\u6267\u884C Artisan \u547D\u4EE4\u3002\u53EF\u4EE5\u4F7F\u7528 <code>facades.Artisan</code> \u4E0A\u7684 <code>Call</code> \u65B9\u6CD5\u6765\u5B8C\u6210\u6B64\u64CD\u4F5C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>facades.Route.GET(&quot;/&quot;, func(c *gin.Context) {
  facades.Artisan.Call(&quot;emails&quot;)
  facades.Artisan.Call(&quot;emails name --lang chinese&quot;) // \u643A\u5E26\u53C2\u6570\u4E0E\u9009\u9879
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function P(K,R){const a=r("router-link"),d=r("ExternalLinkIcon");return c(),o("div",null,[v,e("nav",m,[e("ul",null,[e("li",null,[i(a,{to:"#\u4ECB\u7ECD"},{default:s(()=>[b]),_:1})]),e("li",null,[i(a,{to:"#\u7F16\u5199\u547D\u4EE4"},{default:s(()=>[h]),_:1}),e("ul",null,[e("li",null,[i(a,{to:"#\u751F\u6210\u547D\u4EE4"},{default:s(()=>[g]),_:1})]),e("li",null,[i(a,{to:"#\u547D\u4EE4\u7ED3\u6784"},{default:s(()=>[x]),_:1})])])]),e("li",null,[i(a,{to:"#\u5B9A\u4E49\u8F93\u5165"},{default:s(()=>[p]),_:1}),e("ul",null,[e("li",null,[i(a,{to:"#\u53C2\u6570"},{default:s(()=>[_]),_:1})]),e("li",null,[i(a,{to:"#\u9009\u9879"},{default:s(()=>[f]),_:1})]),e("li",null,[i(a,{to:"#\u5206\u7C7B"},{default:s(()=>[q]),_:1})]),e("li",null,[i(a,{to:"#\u5B50\u547D\u4EE4"},{default:s(()=>[C]),_:1})])])]),e("li",null,[i(a,{to:"#\u6CE8\u518C\u547D\u4EE4"},{default:s(()=>[E]),_:1})]),e("li",null,[i(a,{to:"#\u4EE5\u7F16\u7A0B\u65B9\u5F0F\u6267\u884C\u547D\u4EE4"},{default:s(()=>[k]),_:1})])])]),A,e("p",null,[S,N,L,e("a",T,[w,i(d)]),F]),G,e("p",null,[V,e("a",H,[I,i(d)])]),B,e("p",null,[M,e("a",U,[y,i(d)])]),D])}const z=t(u,[["render",P],["__file","artisan-console.html.vue"]]);export{z as default};
