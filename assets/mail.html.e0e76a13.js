import{_ as n,o as s,c as a,f as t}from"./app.c57080ea.js";const p={},o=t(`<h1 id="mail" tabindex="-1"><a class="header-anchor" href="#mail" aria-hidden="true">#</a> Mail</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Goravel can use <code>facades.Mail</code> to easily send mail locally.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>Before sending an email, you need to configure the <code>config/mail.go</code> configuration file.</p><h2 id="send-mail" tabindex="-1"><a class="header-anchor" href="#send-mail" aria-hidden="true">#</a> Send Mail</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/contracts/mail&quot;</span>

err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Mail<span class="token punctuation">.</span><span class="token function">To</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Cc</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Bcc</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Attach</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;file.png&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Content</span><span class="token punctuation">(</span>mail<span class="token punctuation">.</span>Content<span class="token punctuation">{</span>Subject<span class="token punctuation">:</span> <span class="token string">&quot;Subject&quot;</span><span class="token punctuation">,</span> Html<span class="token punctuation">:</span> <span class="token string">&quot;&lt;h1&gt;Hello Goravel&lt;/h1&gt;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="send-mail-by-queue" tabindex="-1"><a class="header-anchor" href="#send-mail-by-queue" aria-hidden="true">#</a> Send Mail By Queue</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/contracts/mail&quot;</span>

err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Mail<span class="token punctuation">.</span><span class="token function">To</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Cc</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Bcc</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Attach</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;file.png&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Content</span><span class="token punctuation">(</span>mail<span class="token punctuation">.</span>Content<span class="token punctuation">{</span>Subject<span class="token punctuation">:</span> <span class="token string">&quot;Subject&quot;</span><span class="token punctuation">,</span> Html<span class="token punctuation">:</span> <span class="token string">&quot;&lt;h1&gt;Hello Goravel&lt;/h1&gt;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Queue</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also customize the queue:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/contracts/mail&quot;</span>

err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Mail<span class="token punctuation">.</span><span class="token function">To</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Cc</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Bcc</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Attach</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;file.png&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Content</span><span class="token punctuation">(</span>mail<span class="token punctuation">.</span>Content<span class="token punctuation">{</span>Subject<span class="token punctuation">:</span> <span class="token string">&quot;Subject&quot;</span><span class="token punctuation">,</span> Html<span class="token punctuation">:</span> <span class="token string">&quot;&lt;h1&gt;Hello Goravel&lt;/h1&gt;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Queue</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>mail<span class="token punctuation">.</span>Queue<span class="token punctuation">{</span>Connection<span class="token punctuation">:</span> <span class="token string">&quot;high&quot;</span><span class="token punctuation">,</span> Queue<span class="token punctuation">:</span> <span class="token string">&quot;mail&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setting-sender" tabindex="-1"><a class="header-anchor" href="#setting-sender" aria-hidden="true">#</a> Setting Sender</h2><p>Framework uses <code>MAIL_FROM_ ADDRESS</code> and <code>MAIL_FROM_ NAME</code> in the <code>config/mail.go</code> configuration file as global senders. You can also customize the sender, but you need to note that the mail address needs to be consistent with the configured STMP:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/contracts/mail&quot;</span>

err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Mail<span class="token punctuation">.</span><span class="token function">To</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">From</span><span class="token punctuation">(</span>mail<span class="token punctuation">.</span>From<span class="token punctuation">{</span>Address<span class="token punctuation">:</span> <span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">,</span> Name<span class="token punctuation">:</span> <span class="token string">&quot;example&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Cc</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Bcc</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;example@example.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Attach</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;file.png&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Content</span><span class="token punctuation">(</span>mail<span class="token punctuation">.</span>Content<span class="token punctuation">{</span>Subject<span class="token punctuation">:</span> <span class="token string">&quot;Subject&quot;</span><span class="token punctuation">,</span> Html<span class="token punctuation">:</span> <span class="token string">&quot;&lt;h1&gt;Hello Goravel&lt;/h1&gt;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
  <span class="token function">Queue</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>mail<span class="token punctuation">.</span>Queue<span class="token punctuation">{</span>Connection<span class="token punctuation">:</span> <span class="token string">&quot;high&quot;</span><span class="token punctuation">,</span> Queue<span class="token punctuation">:</span> <span class="token string">&quot;mail&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),e=[o];function c(u,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","mail.html.vue"]]);export{k as default};
