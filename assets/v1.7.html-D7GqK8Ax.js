import{_ as p,c as s,b as t,e as a,f as i,a as d,r as n,o as m,d as o}from"./app-DAwtq9VE.js";const h={},g={class:"table-of-contents"};function c(v,e){const l=n("router-link"),r=n("RouteLink"),u=n("CommentService");return m(),s("div",null,[e[10]||(e[10]=t("h1",{id:"upgrading-to-v1-7-from-v1-6",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#upgrading-to-v1-7-from-v1-6"},[t("span",null,"Upgrading To v1.7 From v1.6")])],-1)),t("nav",g,[t("ul",null,[t("li",null,[a(l,{to:"#high-impact-changes"},{default:i(()=>e[0]||(e[0]=[o("High Impact Changes")])),_:1})]),t("li",null,[a(l,{to:"#low-impact-changes"},{default:i(()=>e[1]||(e[1]=[o("Low Impact Changes")])),_:1})]),t("li",null,[a(l,{to:"#upgrade-guide"},{default:i(()=>e[2]||(e[2]=[o("Upgrade Guide")])),_:1}),t("ul",null,[t("li",null,[a(l,{to:"#updating-dependencies"},{default:i(()=>e[3]||(e[3]=[o("Updating Dependencies")])),_:1})]),t("li",null,[a(l,{to:"#add-validation-module"},{default:i(()=>e[4]||(e[4]=[o("Add Validation module")])),_:1})]),t("li",null,[a(l,{to:"#fix-request-template-bug"},{default:i(()=>e[5]||(e[5]=[o("Fix request template BUG")])),_:1})]),t("li",null,[a(l,{to:"#fix-validation-module-bug"},{default:i(()=>e[6]||(e[6]=[o("Fix Validation module BUG")])),_:1})]),t("li",null,[a(l,{to:"#optimize-the-queue-name-of-the-queue-module"},{default:i(()=>e[7]||(e[7]=[o("Optimize the queue name of the queue module")])),_:1})]),t("li",null,[a(l,{to:"#fix-auth-module-bug"},{default:i(()=>e[8]||(e[8]=[o("Fix Auth module BUG")])),_:1})])])])])]),e[11]||(e[11]=d(`<h2 id="high-impact-changes" tabindex="-1"><a class="header-anchor" href="#high-impact-changes"><span>High Impact Changes</span></a></h2><ul><li><a href="#add-validation-module">Add Validation Module(v1.7.0)</a></li><li><a href="#fix-request-template-bug">Fix request template BUG(v1.7.1)</a></li><li><a href="#fix-Validation-module-big">Fix Validation module BUG(v1.7.2)</a></li><li><a href="#fix-auth-module-bug">Fix Auth module BUG(v1.7.3)</a></li></ul><h2 id="low-impact-changes" tabindex="-1"><a class="header-anchor" href="#low-impact-changes"><span>Low Impact Changes</span></a></h2><ul><li><a href="#optimize-the-queue-name-of-the-queue-module">Optimize the queue name of the queue module(v1.7.2)</a></li></ul><h2 id="upgrade-guide" tabindex="-1"><a class="header-anchor" href="#upgrade-guide"><span>Upgrade Guide</span></a></h2><p><strong>Estimated Upgrade Time: 1 Minutes</strong></p><h3 id="updating-dependencies" tabindex="-1"><a class="header-anchor" href="#updating-dependencies"><span>Updating Dependencies</span></a></h3><p><strong>Likelihood Of Impact: High</strong></p><p>Update dependencies in the <code>go.mod</code> file:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">github<span class="token punctuation">.</span>com<span class="token operator">/</span>goravel<span class="token operator">/</span>framework v1<span class="token punctuation">.</span><span class="token number">7.3</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="add-validation-module" tabindex="-1"><a class="header-anchor" href="#add-validation-module"><span>Add Validation module</span></a></h3><p><strong>Likelihood Of Impact: High</strong></p><p>Version: v1.7.0</p><ol><li>Add <a href="https://github.com/goravel/goravel/blob/v1.7.0/app/providers/validation_service_provider.go" target="_blank" rel="noopener noreferrer">app/providers/validation_service_provider.go</a> file;</li><li>Add <code>&amp;validation.ServiceProvider{}</code>, <code>&amp;providers.ValidationServiceProvider{},</code> to the <code>providers</code> item in the <a href="https://github.com/goravel/goravel/blob/v1.7.0/config/app.go" target="_blank" rel="noopener noreferrer">config/app.go</a> file;</li></ol>`,14)),t("p",null,[a(r,{to:"/the-basics/validation.html"},{default:i(()=>e[9]||(e[9]=[o("For Detail")])),_:1})]),e[12]||(e[12]=d('<h3 id="fix-request-template-bug" tabindex="-1"><a class="header-anchor" href="#fix-request-template-bug"><span>Fix request template BUG</span></a></h3><p><strong>Likelihood Of Impact: High</strong></p><p>Version: v1.7.1</p><ol><li>Fix import path BUG of the request template that created by <code>go run . artisan make:request Test</code>;</li></ol><h3 id="fix-validation-module-bug" tabindex="-1"><a class="header-anchor" href="#fix-validation-module-bug"><span>Fix Validation module BUG</span></a></h3><p><strong>Likelihood Of Impact: High</strong></p><p>Version: v1.7.2</p><ol><li>Fix the BUG that does not take effect when the <code>facades.Validation</code> module registers multiple custom Rule;</li></ol><h3 id="optimize-the-queue-name-of-the-queue-module" tabindex="-1"><a class="header-anchor" href="#optimize-the-queue-name-of-the-queue-module"><span>Optimize the queue name of the queue module</span></a></h3><p><strong>Likelihood Of Impact: Low</strong></p><p>Version: v1.7.2</p><ol><li>Add a prefix to the queue name of the <code>facades.Queue</code> module during actual execution, in order to distinguish between multiple projects, the prefix rule: ${app_name}_queues:${queue};</li><li>Implicit optimization, you don&#39;t need to modify any code;</li></ol><h3 id="fix-auth-module-bug" tabindex="-1"><a class="header-anchor" href="#fix-auth-module-bug"><span>Fix Auth module BUG</span></a></h3><p><strong>Likelihood Of Impact: High</strong></p><p>Version: v1.7.3</p><ol><li>Fix the BUG that calling <code>facades.Auth.User</code> method returns <code>Unknown column</code> error when the primary key of user table is <code>string</code> type;</li></ol>',16)),a(u)])}const x=p(h,[["render",c],["__file","v1.7.html.vue"]]),b=JSON.parse('{"path":"/upgrade/v1.7.html","title":"Upgrading To v1.7 From v1.6","lang":"en-US","frontmatter":{"description":"Upgrading To v1.7 From v1.6 High Impact Changes Add Validation Module(v1.7.0) Fix request template BUG(v1.7.1) Fix Validation module BUG(v1.7.2) Fix Auth module BUG(v1.7.3) Low ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goravel.dev/zh/upgrade/v1.7.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/upgrade/v1.7.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/upgrade/v1.7.html"}],["meta",{"property":"og:description","content":"Upgrading To v1.7 From v1.6 High Impact Changes Add Validation Module(v1.7.0) Fix request template BUG(v1.7.1) Fix Validation module BUG(v1.7.2) Fix Auth module BUG(v1.7.3) Low ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Upgrading To v1.7 From v1.6\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"High Impact Changes","slug":"high-impact-changes","link":"#high-impact-changes","children":[]},{"level":2,"title":"Low Impact Changes","slug":"low-impact-changes","link":"#low-impact-changes","children":[]},{"level":2,"title":"Upgrade Guide","slug":"upgrade-guide","link":"#upgrade-guide","children":[{"level":3,"title":"Updating Dependencies","slug":"updating-dependencies","link":"#updating-dependencies","children":[]},{"level":3,"title":"Add Validation module","slug":"add-validation-module","link":"#add-validation-module","children":[]},{"level":3,"title":"Fix request template BUG","slug":"fix-request-template-bug","link":"#fix-request-template-bug","children":[]},{"level":3,"title":"Fix Validation module BUG","slug":"fix-validation-module-bug","link":"#fix-validation-module-bug","children":[]},{"level":3,"title":"Optimize the queue name of the queue module","slug":"optimize-the-queue-name-of-the-queue-module","link":"#optimize-the-queue-name-of-the-queue-module","children":[]},{"level":3,"title":"Fix Auth module BUG","slug":"fix-auth-module-bug","link":"#fix-auth-module-bug","children":[]}]}],"git":{},"filePathRelative":"upgrade/v1.7.md","autoDesc":true}');export{x as comp,b as data};
