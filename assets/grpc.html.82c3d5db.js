import{_ as d,r as t,o as a,c as l,b as e,d as i,w as s,e as r,f as c}from"./app.8dbedbc7.js";const o={},v=e("h1",{id:"grpc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#grpc","aria-hidden":"true"},"#"),r(" Grpc")],-1),u={class:"table-of-contents"},p=r("Introduction"),m=r("Routing File"),b=r("Controllers"),h=r("Start Grpc Server"),g=r("Extension"),f=c(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Grpc module can be operated by <code>facades.Grpc</code>.</p><h2 id="routing-file" tabindex="-1"><a class="header-anchor" href="#routing-file" aria-hidden="true">#</a> Routing File</h2><p>All routing files can be difined in the <code>/routes</code> directory, such as <code>/routes/grpc.go</code>. Then register to the <code>app/providers/grpc_service_provider.go</code> file, to bind routes.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// routes/grpc.go
func Grpc() {
  protos.RegisterUserServer(facades.Grpc.Server(), &amp;controllers.UserController{})
}

// app/providers/grpc_service_provider.go
func (router *GrpcServiceProvider) Boot() {
  routes.Grpc()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="controllers" tabindex="-1"><a class="header-anchor" href="#controllers" aria-hidden="true">#</a> Controllers</h2><p>Controllers can be difined in the <code>/app/grpc/controllers</code> directory.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// /app/grpc/controllers/user_controller.go
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="start-grpc-server" tabindex="-1"><a class="header-anchor" href="#start-grpc-server" aria-hidden="true">#</a> Start Grpc Server</h2><p>Start Grpc in the <code>main.go</code> file.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go func() {
  if err := facades.Grpc.Run(facades.Config.GetString(&quot;grpc.host&quot;)); err != nil {
    facades.Log.Errorf(&quot;Grpc run error: %v&quot;, err)
  }
}()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extension" tabindex="-1"><a class="header-anchor" href="#extension" aria-hidden="true">#</a> Extension</h2><p><code>facades.Grpc</code> provide extension methods, they can extend Server, for example, the setting of middlewares:</p><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>Server() *grpc.Server</code></td><td>Get Server Instance</td></tr><tr><td><code>SetServer(server *grpc.Server)</code></td><td>Set Server Instance</td></tr></tbody></table><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Set Tracing Analysis Middlewares
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function _(x,S){const n=t("router-link");return a(),l("div",null,[v,e("nav",u,[e("ul",null,[e("li",null,[i(n,{to:"#introduction"},{default:s(()=>[p]),_:1})]),e("li",null,[i(n,{to:"#routing-file"},{default:s(()=>[m]),_:1})]),e("li",null,[i(n,{to:"#controllers"},{default:s(()=>[b]),_:1})]),e("li",null,[i(n,{to:"#start-grpc-server"},{default:s(()=>[h]),_:1})]),e("li",null,[i(n,{to:"#extension"},{default:s(()=>[g]),_:1})])])]),f])}const q=d(o,[["render",_],["__file","grpc.html.vue"]]);export{q as default};
