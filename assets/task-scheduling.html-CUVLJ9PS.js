import{_ as u,c as d,b as s,e as t,f as e,a as o,d as a,r as l,o as r}from"./app-Ci8pqpHY.js";const k={},v={class:"table-of-contents"};function m(g,n){const p=l("router-link"),c=l("RouteLink"),i=l("CommentService");return r(),d("div",null,[n[14]||(n[14]=s("h1",{id:"任务调度",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#任务调度"},[s("span",null,"任务调度")])],-1)),s("nav",v,[s("ul",null,[s("li",null,[t(p,{to:"#简介"},{default:e(()=>n[0]||(n[0]=[a("简介")])),_:1})]),s("li",null,[t(p,{to:"#定义调度"},{default:e(()=>n[1]||(n[1]=[a("定义调度")])),_:1}),s("ul",null,[s("li",null,[t(p,{to:"#artisan-命令调度"},{default:e(()=>n[2]||(n[2]=[a("Artisan 命令调度")])),_:1})]),s("li",null,[t(p,{to:"#日志级别"},{default:e(()=>n[3]||(n[3]=[a("日志级别")])),_:1})]),s("li",null,[t(p,{to:"#调度频率选项"},{default:e(()=>n[4]||(n[4]=[a("调度频率选项")])),_:1})]),s("li",null,[t(p,{to:"#避免任务重复"},{default:e(()=>n[5]||(n[5]=[a("避免任务重复")])),_:1})]),s("li",null,[t(p,{to:"#任务只运行在一台服务器上"},{default:e(()=>n[6]||(n[6]=[a("任务只运行在一台服务器上")])),_:1})])])]),s("li",null,[t(p,{to:"#运行调度程序"},{default:e(()=>n[7]||(n[7]=[a("运行调度程序")])),_:1})]),s("li",null,[t(p,{to:"#关闭调度程序"},{default:e(()=>n[8]||(n[8]=[a("关闭调度程序")])),_:1})])])]),n[15]||(n[15]=o(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>过去，你可能需要在服务器上为每一个调度任务去创建 Cron 条目。因为这些任务的调度不是通过代码控制的，你要查看或新增任务调度都需要通过 SSH 远程登录到服务器上去操作，所以这种方式很快会让人变得痛苦不堪。</p><p>Goravel 的命令行调度器允许你在 Goravel 中清晰明了地定义命令调度。在使用这个任务调度器时，你只需要在你的服务器上创建单个 Cron 入口。</p><h2 id="定义调度" tabindex="-1"><a class="header-anchor" href="#定义调度"><span>定义调度</span></a></h2><p>你可以在 <code>app\\console\\kernel.go</code> 的 <code>Schedule</code> 方法中定义所有的调度任务。在开始之前，我们来看一个例子：我们计划每天午夜执行一个 <code>闭包</code>，这个 <code>闭包</code> 会执行一次数据库语句去清空一张表：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> console</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">&quot;github.com/goravel/framework/contracts/console&quot;</span></span>
<span class="line">  <span class="token string">&quot;github.com/goravel/framework/contracts/schedule&quot;</span></span>
<span class="line">  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span></span>
<span class="line"></span>
<span class="line">  <span class="token string">&quot;goravel/app/models&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Kernel <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>kernel Kernel<span class="token punctuation">)</span> <span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>schedule<span class="token punctuation">.</span>Event <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>schedule<span class="token punctuation">.</span>Event<span class="token punctuation">{</span></span>
<span class="line">    facades<span class="token punctuation">.</span><span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      facades<span class="token punctuation">.</span><span class="token function">Orm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token string">&quot;1 = 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>models<span class="token punctuation">.</span>User<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Daily</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="artisan-命令调度" tabindex="-1"><a class="header-anchor" href="#artisan-命令调度"><span>Artisan 命令调度</span></a></h3>`,7)),s("p",null,[n[10]||(n[10]=a("调度方式不仅有闭包调用，还可以使用 ")),t(c,{to:"/zh/digging-deeper/artisan-console.html"},{default:e(()=>n[9]||(n[9]=[a("Artisan commands")])),_:1}),n[11]||(n[11]=a("。例如，你可以给 ")),n[12]||(n[12]=s("code",null,"Command",-1)),n[13]||(n[13]=a(" 方法传递命令名称或类来调度一个 Artisan 命令："))]),n[16]||(n[16]=o(`<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> console</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">&quot;github.com/goravel/framework/contracts/console&quot;</span></span>
<span class="line">  <span class="token string">&quot;github.com/goravel/framework/contracts/schedule&quot;</span></span>
<span class="line">  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Kernel <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>kernel <span class="token operator">*</span>Kernel<span class="token punctuation">)</span> <span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>schedule<span class="token punctuation">.</span>Event <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>schedule<span class="token punctuation">.</span>Event<span class="token punctuation">{</span></span>
<span class="line">    facades<span class="token punctuation">.</span><span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;send:emails name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Daily</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志级别" tabindex="-1"><a class="header-anchor" href="#日志级别"><span>日志级别</span></a></h3><p>当 <code>app.debug</code> 为 <code>true</code> 时，控制台将打印所有日志；否则，只打印 <code>error</code> 级别日志。</p><h3 id="调度频率选项" tabindex="-1"><a class="header-anchor" href="#调度频率选项"><span>调度频率选项</span></a></h3><p>我们已经看到了几个如何设置任务在指定时间间隔运行的例子。不仅如此，你还有更多的任务调度频率可选：</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>.Cron(&quot;* * * * *&quot;)</code></td><td>自定义 Crone 计划执行任务</td></tr><tr><td><code>.EveryMinute()</code></td><td>每分钟执行一次任务</td></tr><tr><td><code>.EveryTwoMinutes()</code></td><td>每两分钟执行一次任务</td></tr><tr><td><code>.EveryThreeMinutes()</code></td><td>每三分钟执行一次任务</td></tr><tr><td><code>.EveryFourMinutes()</code></td><td>每四分钟执行一次任务</td></tr><tr><td><code>.EveryFiveMinutes()</code></td><td>每五分钟执行一次任务</td></tr><tr><td><code>.EveryTenMinutes()</code></td><td>每十分钟执行一次任务</td></tr><tr><td><code>.EveryFifteenMinutes()</code></td><td>每十五分钟执行一次任务</td></tr><tr><td><code>.EveryThirtyMinutes()</code></td><td>每三十分钟执行一次任务</td></tr><tr><td><code>.Hourly()</code></td><td>每小时执行一次任务</td></tr><tr><td><code>.HourlyAt(17)</code></td><td>每小时第十七分钟时执行一次任务</td></tr><tr><td><code>.EveryTwoHours()</code></td><td>每两小时执行一次任务</td></tr><tr><td><code>.EveryThreeHours()</code></td><td>每三小时执行一次任务</td></tr><tr><td><code>.EveryFourHours()</code></td><td>每四小时执行一次任务</td></tr><tr><td><code>.EverySixHours()</code></td><td>每六小时执行一次任务</td></tr><tr><td><code>.Daily()</code></td><td>每天 00:00 执行一次任务</td></tr><tr><td><code>.DailyAt(&quot;13:00&quot;)</code></td><td>每天 13:00 执行一次任务</td></tr></tbody></table><h3 id="避免任务重复" tabindex="-1"><a class="header-anchor" href="#避免任务重复"><span>避免任务重复</span></a></h3><p>默认情况下，即使之前的任务实例还在执行，调度内的任务也会执行。为避免这种情况的发生，你可以使用 <code>SkipIfStillRunning</code> 或 <code>DelayIfStillRunning</code> 方法：</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>.SkipIfStillRunning()</code></td><td>如果有正在执行的相同任务，则本次取消执行</td></tr><tr><td><code>.DelayIfStillRunning()</code></td><td>如果有正在执行的相同任务，则本次等待正在执行的任务结束后再执行</td></tr></tbody></table><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">facades<span class="token punctuation">.</span><span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;send:emails name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">EveryMinute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SkipIfStillRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">facades<span class="token punctuation">.</span><span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;send:emails name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">EveryMinute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">DelayIfStillRunning</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="任务只运行在一台服务器上" tabindex="-1"><a class="header-anchor" href="#任务只运行在一台服务器上"><span>任务只运行在一台服务器上</span></a></h3><blockquote><p><strong>注意</strong> 要使用此功能，你的应用程序必须使用 memcached, dynamodb, 或 redis 缓存驱动程序作为应用程序的默认缓存驱动程序。此外，所有服务器必须和同一个中央缓存服务器通信。</p></blockquote><p>如果您的应用运行在多台服务器上，可能需要限制调度任务只在某台服务器上运行。例如，假设您有一个每个星期五晚上生成新报告的调度任务，如果任务调度器运行在三台服务器上，调度任务会在三台服务器上运行并且生成三次报告，不够优雅！</p><p>要指示任务应仅在一台服务器上运行，请在定义计划任务时使用 <code>OnOneServer</code> 方法。第一台获取到该任务的服务器会给任务上一把原子锁以阻止其他服务器同时运行该任务:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">facades<span class="token punctuation">.</span><span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Command</span><span class="token punctuation">(</span><span class="token string">&quot;report:generate&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Daily</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">OnOneServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果你使用闭包来定义单服务器作业，则必须为他们定义一个名字：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">facades<span class="token punctuation">.</span><span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;goravel&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Daily</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">OnOneServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Name</span><span class="token punctuation">(</span><span class="token string">&quot;goravel&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行调度程序" tabindex="-1"><a class="header-anchor" href="#运行调度程序"><span>运行调度程序</span></a></h2><p>现在，我们已经学会了如何定义计划任务，接下来让我们讨论如何真正在服务器上运行它们。</p><p>在根目录 <code>main.go</code> 文件中增加 <code>go facades.Schedule().Run()</code>。</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span></span>
<span class="line"></span>
<span class="line">  <span class="token string">&quot;goravel/bootstrap&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// This bootstraps the framework and gets it ready for use.</span></span>
<span class="line">  bootstrap<span class="token punctuation">.</span><span class="token function">Boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// Start schedule by facades.Schedule</span></span>
<span class="line">  <span class="token keyword">go</span> facades<span class="token punctuation">.</span><span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">select</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关闭调度程序" tabindex="-1"><a class="header-anchor" href="#关闭调度程序"><span>关闭调度程序</span></a></h2><p>你可以调用 <code>Shutdown</code> 方法优雅的关闭调度程序，该方法将会等待所有任务处理完毕后再执行关闭操作。</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token comment">// main.go</span></span>
<span class="line">bootstrap<span class="token punctuation">.</span><span class="token function">Boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create a channel to listen for OS signals</span></span>
<span class="line">quit <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> os<span class="token punctuation">.</span>Signal<span class="token punctuation">)</span></span>
<span class="line">signal<span class="token punctuation">.</span><span class="token function">Notify</span><span class="token punctuation">(</span>quit<span class="token punctuation">,</span> syscall<span class="token punctuation">.</span>SIGINT<span class="token punctuation">,</span> syscall<span class="token punctuation">.</span>SIGTERM<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Start schedule by facades.Schedule</span></span>
<span class="line"><span class="token keyword">go</span> facades<span class="token punctuation">.</span><span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Listen for the OS signal</span></span>
<span class="line"><span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">&lt;-</span>quit</span>
<span class="line">  <span class="token keyword">if</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">    facades<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;Schedule Shutdown error: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">select</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)),t(i)])}const b=u(k,[["render",m],["__file","task-scheduling.html.vue"]]),f=JSON.parse('{"path":"/zh/digging-deeper/task-scheduling.html","title":"任务调度","lang":"zh-CN","frontmatter":{"description":"任务调度 简介 过去，你可能需要在服务器上为每一个调度任务去创建 Cron 条目。因为这些任务的调度不是通过代码控制的，你要查看或新增任务调度都需要通过 SSH 远程登录到服务器上去操作，所以这种方式很快会让人变得痛苦不堪。 Goravel 的命令行调度器允许你在 Goravel 中清晰明了地定义命令调度。在使用这个任务调度器时，你只需要在你的服务器上...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/digging-deeper/task-scheduling.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/digging-deeper/task-scheduling.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/digging-deeper/task-scheduling.html"}],["meta",{"property":"og:description","content":"任务调度 简介 过去，你可能需要在服务器上为每一个调度任务去创建 Cron 条目。因为这些任务的调度不是通过代码控制的，你要查看或新增任务调度都需要通过 SSH 远程登录到服务器上去操作，所以这种方式很快会让人变得痛苦不堪。 Goravel 的命令行调度器允许你在 Goravel 中清晰明了地定义命令调度。在使用这个任务调度器时，你只需要在你的服务器上..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"任务调度\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"定义调度","slug":"定义调度","link":"#定义调度","children":[{"level":3,"title":"Artisan 命令调度","slug":"artisan-命令调度","link":"#artisan-命令调度","children":[]},{"level":3,"title":"日志级别","slug":"日志级别","link":"#日志级别","children":[]},{"level":3,"title":"调度频率选项","slug":"调度频率选项","link":"#调度频率选项","children":[]},{"level":3,"title":"避免任务重复","slug":"避免任务重复","link":"#避免任务重复","children":[]},{"level":3,"title":"任务只运行在一台服务器上","slug":"任务只运行在一台服务器上","link":"#任务只运行在一台服务器上","children":[]}]},{"level":2,"title":"运行调度程序","slug":"运行调度程序","link":"#运行调度程序","children":[]},{"level":2,"title":"关闭调度程序","slug":"关闭调度程序","link":"#关闭调度程序","children":[]}],"git":{},"filePathRelative":"zh/digging-deeper/task-scheduling.md","autoDesc":true}');export{b as comp,f as data};