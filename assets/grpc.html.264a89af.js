import{_ as s,r as a,o as c,c as t,b as e,d as i,w as d,e as r,f as l}from"./app.6881ea8b.js";const o={},v=e("h1",{id:"grpc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#grpc","aria-hidden":"true"},"#"),r(" Grpc")],-1),u={class:"table-of-contents"},p=r("\u4ECB\u7ECD"),m=r("\u8DEF\u7531\u6587\u4EF6"),b=r("\u63A7\u5236\u5668"),h=r("\u542F\u52A8 Grpc \u670D\u52A1\u5668"),g=r("\u6269\u5C55"),_=l(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>Grpc \u6A21\u5757\u53EF\u4EE5\u4F7F\u7528 <code>facades.Grpc</code> \u8FDB\u884C\u64CD\u4F5C\u3002</p><h2 id="\u8DEF\u7531\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u6587\u4EF6" aria-hidden="true">#</a> \u8DEF\u7531\u6587\u4EF6</h2><p>\u6240\u6709\u8DEF\u7531\u6587\u4EF6\u53EF\u4EE5\u5B9A\u4E49\u5728 <code>/routes</code> \u76EE\u5F55\u4E2D\uFF0C\u4F8B\u5982 <code>/routes/grpc.go</code>\u3002\u7136\u540E\u6CE8\u518C\u5230 <code>app/providers/grpc_service_provider.go</code> \u6587\u4EF6\u4E2D\uFF0C\u4EE5\u5B9E\u73B0\u8DEF\u7531\u7684\u7ED1\u5B9A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// routes/grpc.go
func Grpc() {
  protos.RegisterUserServer(facades.Grpc.Server(), &amp;controllers.UserController{})
}

// app/providers/grpc_service_provider.go
func (router *GrpcServiceProvider) Boot() {
  routes.Grpc()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63A7\u5236\u5668" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5668" aria-hidden="true">#</a> \u63A7\u5236\u5668</h2><p>\u63A7\u5236\u5668\u6587\u4EF6\u53EF\u4EE5\u5B9A\u4E49\u5728 <code>/app/grpc/controllers</code> \u76EE\u5F55\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// /app/grpc/controllers/user_controller.go
package controllers

import (
  &quot;context&quot;
  &quot;net/http&quot;
  &quot;goravel/protos&quot;
)

type UserController struct {
}

func (r *UserController) GetUser(ctx context.Context, req *protos.UserRequest) (protoUser *protos.UserResponse, err error) {
  return &amp;protos.UserResponse{
    Code: http.StatusOK,
    Data: &amp;protos.User{
      Id: user.Id,
    },
  }, nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8-grpc-\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-grpc-\u670D\u52A1\u5668" aria-hidden="true">#</a> \u542F\u52A8 Grpc \u670D\u52A1\u5668</h2><p>\u5728 <code>main.go</code> \u4E2D\u542F\u52A8 Grpc</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go func() {
  if err := facades.Grpc.Run(facades.Config.GetString(&quot;grpc.host&quot;)); err != nil {
    facades.Log.Errorf(&quot;Grpc run error: %v&quot;, err)
  }
}()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><p><code>facades.Grpc</code> \u63D0\u4F9B\u6269\u5C55\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5BF9 Server \u8FDB\u884C\u6269\u5C55\uFF0C\u4F8B\u5982\u4E2D\u95F4\u4EF6\u7684\u8BBE\u7F6E\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>Server() *grpc.Server</code></td><td>\u83B7\u53D6 Server \u5B9E\u4F8B</td></tr><tr><td><code>SetServer(server *grpc.Server)</code></td><td>\u8BBE\u7F6E Server \u5B9E\u4F8B</td></tr></tbody></table><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8BBE\u7F6E\u94FE\u8DEF\u8DDF\u8E2A\u4E2D\u95F4\u4EF6
// app/providers/grpc_service_provider.go
func (router *GrpcServiceProvider) Boot() {
  tracer, _ := helpers.NewJaegerTracer()

  facades.Grpc.SetServer(grpc.NewServer(grpc.UnaryInterceptor(
    grpc_middleware.ChainUnaryServer(
      middleware.OpentracingServer(tracer),
    ),
  )))

  routes.Grpc()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function f(x,S){const n=a("router-link");return c(),t("div",null,[v,e("nav",u,[e("ul",null,[e("li",null,[i(n,{to:"#\u4ECB\u7ECD"},{default:d(()=>[p]),_:1})]),e("li",null,[i(n,{to:"#\u8DEF\u7531\u6587\u4EF6"},{default:d(()=>[m]),_:1})]),e("li",null,[i(n,{to:"#\u63A7\u5236\u5668"},{default:d(()=>[b]),_:1})]),e("li",null,[i(n,{to:"#\u542F\u52A8-grpc-\u670D\u52A1\u5668"},{default:d(()=>[h]),_:1})]),e("li",null,[i(n,{to:"#\u6269\u5C55"},{default:d(()=>[g]),_:1})])])]),_])}const q=s(o,[["render",f],["__file","grpc.html.vue"]]);export{q as default};
