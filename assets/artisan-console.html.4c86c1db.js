import{_ as o,r as l,o as r,c,b as e,d as i,w as s,e as n,f as d}from"./app.1c33e199.js";const m={},u=e("h1",{id:"artisan-console",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#artisan-console","aria-hidden":"true"},"#"),n(" Artisan Console")],-1),v={class:"table-of-contents"},h=n("Introduction"),g=n("Writing Commands"),b=n("Generating Commands"),p=n("Command Structure"),x=n("Defining Input Expectations"),f=n("Arguments"),_=n("Options"),y=n("Category"),C=n("Subcommands"),q=n("Registering Commands"),w=n("Programmatically Executing Commands"),E=e("h2",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),n(" Introduction")],-1),k=n("Artisan is the command line interface included with Goravel, the module can be operated using "),A=e("code",null,"facades.Cache",-1),S=n(". It provide a number of helpful commands that can assist you while you build your application. The underlying layer uses "),T={href:"https://github.com/urfave/cli",target:"_blank",rel:"noopener noreferrer"},I=n("urfave/cli"),D=n(" to realize the function. It's To view a list of all available Artisan commands, you may use the list command:"),F=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Every command also includes a &quot;help&quot; screen which displays and describes the command&#39;s available arguments and options. To view a help screen, precede the name of the command with help:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan help migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="writing-commands" tabindex="-1"><a class="header-anchor" href="#writing-commands" aria-hidden="true">#</a> Writing Commands</h2><p>In addition to the commands provided with Artisan, you may build your own custom commands. Commands are typically stored in the app/console/commands directory.</p><h3 id="generating-commands" tabindex="-1"><a class="header-anchor" href="#generating-commands" aria-hidden="true">#</a> Generating Commands</h3><p>To create a new command, you may use the <code>make:command</code> Artisan command. This command will create a new command class in the app/console/commands directory. Don&#39;t worry if this directory does not exist in your application - it will be created the first time you run the make:command Artisan command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan make:command SendEmails
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="command-structure" tabindex="-1"><a class="header-anchor" href="#command-structure" aria-hidden="true">#</a> Command Structure</h3><p>After generating your command, you should define appropriate values for the signature and description properties of the struct. These properties will be used when displaying your command on the list screen. The <code>handle</code> method will be called when your command is executed. You may place your command logic in this method.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package commands

import (
  &quot;github.com/goravel/framework/contracts/console&quot;
  &quot;github.com/urfave/cli/v2&quot;
)

type SendEmails struct {
}

//Signature The name and signature of the console command.
func (receiver *SendEmails) Signature() string {
  return &quot;command:name&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defining-input-expectations" tabindex="-1"><a class="header-anchor" href="#defining-input-expectations" aria-hidden="true">#</a> Defining Input Expectations</h2><p>When writing console commands, it is common to gather input from the user through arguments or options. Goravel makes it very convenient to get arguments and options which user input.</p><h3 id="arguments" tabindex="-1"><a class="header-anchor" href="#arguments" aria-hidden="true">#</a> Arguments</h3><p>Follow the arguments after the command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan emails NAME EMAIL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Get arguemnts:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (receiver *ListCommand) Handle(c *cli.Context) error {
  name := c.Args().Get(0)
  email := c.Args().Get(1)

  return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h3><p>Options, like arguments, are another form of user input. Options are prefixed by two hyphens (--) when they are provided via the command line.</p><p>Definition\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (receiver *ListCommand) Extend() console.CommandExtend {
  return console.CommandExtend{
    Flags: []cli.Flag{
      &amp;cli.StringFlag{
        Name:    &quot;lang&quot;,
        Value:   &quot;english&quot;,// Default
        Aliases: []string{&quot;l&quot;},// Option shorthand
        Usage:   &quot;language for the greeting&quot;,// Option description
      },
    },
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Get\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (receiver *ListCommand) Handle(c *cli.Context) error {
  lang := c.String(&quot;lang&quot;)

  return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Usage\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan emails --lang chinese
go run . artisan emails -l chinese // \u7F29\u5199
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,26),G=n("For specific usage, please refer to "),N={href:"https://github.com/urfave/cli/blob/master/docs/v2/manual.md#flags",target:"_blank",rel:"noopener noreferrer"},L=n("urfave/cli Document"),O=d(`<h3 id="category" tabindex="-1"><a class="header-anchor" href="#category" aria-hidden="true">#</a> Category</h3><p>You can set a set of commands to the same category, convenient in <code>go run . artisan list</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//Extend The console command extend.
func (receiver *ConsoleMakeCommand) Extend() console.CommandExtend {
  return console.CommandExtend{
    Category: &quot;make&quot;,
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="subcommands" tabindex="-1"><a class="header-anchor" href="#subcommands" aria-hidden="true">#</a> Subcommands</h3><p>You can set multiple subcommands for a command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//Extend The console command extend.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Usage\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan emails add
go run . artisan emails remove
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),U=n("For specific usage, please refer to "),V={href:"https://github.com/urfave/cli/blob/master/docs/v2/manual.md#subcommands",target:"_blank",rel:"noopener noreferrer"},W=n("urfave/cli Document"),H=d(`<h2 id="registering-commands" tabindex="-1"><a class="header-anchor" href="#registering-commands" aria-hidden="true">#</a> Registering Commands</h2><p>All of your console commands are registered within your application&#39;s <code>app\\console\\kernel.go</code> file, which is your application&#39;s &quot;console kernel&quot;. Within the commands method of this class, you will see a call to the kernel&#39;s load method.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (kernel Kernel) Commands() []console.Command {
  return []console.Command{
    &amp;commands.SendEmails{},
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="programmatically-executing-commands" tabindex="-1"><a class="header-anchor" href="#programmatically-executing-commands" aria-hidden="true">#</a> Programmatically Executing Commands</h2><p>Sometimes you may wish to execute an Artisan command outside of the CLI. For example, you may wish to execute an Artisan command from a route or controller. You may use the <code>Call</code> method on the <code>facades.Artisan</code> to accomplish this.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>facades.Route.GET(&quot;/&quot;, func(c *gin.Context) {
  facades.Artisan.Call(&quot;emails&quot;)
  facades.Artisan.Call(&quot;emails name --lang chinese&quot;) // With arguments and options
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function P(Y,B){const a=l("router-link"),t=l("ExternalLinkIcon");return r(),c("div",null,[u,e("nav",v,[e("ul",null,[e("li",null,[i(a,{to:"#introduction"},{default:s(()=>[h]),_:1})]),e("li",null,[i(a,{to:"#writing-commands"},{default:s(()=>[g]),_:1}),e("ul",null,[e("li",null,[i(a,{to:"#generating-commands"},{default:s(()=>[b]),_:1})]),e("li",null,[i(a,{to:"#command-structure"},{default:s(()=>[p]),_:1})])])]),e("li",null,[i(a,{to:"#defining-input-expectations"},{default:s(()=>[x]),_:1}),e("ul",null,[e("li",null,[i(a,{to:"#arguments"},{default:s(()=>[f]),_:1})]),e("li",null,[i(a,{to:"#options"},{default:s(()=>[_]),_:1})]),e("li",null,[i(a,{to:"#category"},{default:s(()=>[y]),_:1})]),e("li",null,[i(a,{to:"#subcommands"},{default:s(()=>[C]),_:1})])])]),e("li",null,[i(a,{to:"#registering-commands"},{default:s(()=>[q]),_:1})]),e("li",null,[i(a,{to:"#programmatically-executing-commands"},{default:s(()=>[w]),_:1})])])]),E,e("p",null,[k,A,S,e("a",T,[I,i(t)]),D]),F,e("p",null,[G,e("a",N,[L,i(t)])]),O,e("p",null,[U,e("a",V,[W,i(t)])]),H])}const R=o(m,[["render",P],["__file","artisan-console.html.vue"]]);export{R as default};
