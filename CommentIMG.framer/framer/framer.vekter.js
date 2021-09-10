(function(scope) {var __layer_0__ = new Layer({"name":"Orientation","backgroundColor":"hsl(0, 0%, 100%)","width":375,"height":667,"constraintValues":{"height":667,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var container = new Layer({"parent":__layer_0__,"name":"container","shadows":[{"spread":0,"x":0,"type":"inset","y":-1,"blur":0,"color":"hsla(0, 0%, 0%, 0.05)"}],"backgroundColor":"hsl(0, 0%, 100%)","width":375,"height":667,"constraintValues":{"height":667,"centerAnchorX":0.5,"width":375,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_1__ = new Layer({"parent":container,"borderWidth":2,"backgroundColor":null,"width":94,"x":141,"borderColor":"hsl(0, 0%, 73%)","height":94,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":94,"centerAnchorX":0.5,"width":94,"top":null,"centerAnchorY":0.50103519668737062},"blending":"normal","borderRadius":"50.0%","clip":false,"borderStyle":"dashed","visible":false,"y":287});var __layer_2__ = new Layer({"parent":__layer_1__,"backgroundColor":"#333333","width":2,"x":46,"height":18,"constraintValues":{"left":null,"height":18,"centerAnchorX":0.5,"width":2,"top":null,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid","y":38});var __layer_3__ = new Layer({"parent":__layer_1__,"backgroundColor":"#333333","width":2,"x":46,"rotation":-90,"height":18,"constraintValues":{"left":null,"height":18,"centerAnchorX":0.5,"width":2,"top":null,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid","y":38});var __layer_4__ = new TextLayer({"parent":container,"backgroundColor":null,"width":233,"x":21,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"24px","letterSpacing":"0px","lineHeight":"1","tabSize":4,"fontFamily":"\".SFNSDisplay-Bold\", \"SFProDisplay-Bold\", \"SFUIDisplay-Bold\", \".SFUIDisplay-Bold\", sans-serif","WebkitTextFillColor":"hsl(0, 0%, 0%)"},"startIndex":0,"endIndex":6}],"text":"评论配图展示"}],"alignment":"left"},"height":24,"constraintValues":{"left":21,"height":24,"centerAnchorX":0.36666666666666664,"width":233,"top":27,"centerAnchorY":0.058470764617691157},"blending":"normal","autoSize":false,"y":27});var ball = new Layer({"parent":container,"name":"ball","shadows":[{"spread":0,"x":0,"type":"box","y":14,"blur":16,"color":"hsla(200, 100%, 50%, 0.23)"},{"spread":0,"x":0,"type":"box","y":10,"blur":8,"color":"hsla(220, 100%, 50%, 0.01)"}],"backgroundColor":"#0af","width":100,"x":138,"height":100,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":100,"centerAnchorX":0.5,"width":100,"top":null,"centerAnchorY":0.50103519668737062},"blending":"normal","borderRadius":"50.0%","clip":false,"borderStyle":"solid","visible":false,"y":284});var __layer_5__ = new Layer({"parent":ball,"backgroundColor":"rgba(0, 0, 0, 0.33)","width":6,"x":48,"height":6,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":6,"centerAnchorX":0.51000000000000001,"width":6,"top":6,"centerAnchorY":0.089999999999999997},"blending":"normal","borderRadius":"50.0%","clip":false,"borderStyle":"solid","y":6});var rate = new TextLayer({"parent":container,"name":"rate","backgroundColor":null,"width":117,"x":21,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"18px","letterSpacing":"0px","lineHeight":"1.3","tabSize":4,"fontFamily":"\".SFNSDisplay-Bold\", \"SFProDisplay-Bold\", \"SFUIDisplay-Bold\", \".SFUIDisplay-Bold\", sans-serif","WebkitTextFillColor":"hsl(0, 0%, 0%)"}}],"text":"宽高比"},{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"18px","letterSpacing":"0px","lineHeight":"1.3","tabSize":4,"fontFamily":"\".SFNSDisplay-Bold\", \"SFProDisplay-Bold\", \"SFUIDisplay-Bold\", \".SFUIDisplay-Bold\", sans-serif","WebkitTextFillColor":"hsl(0, 0%, 0%)"}}],"text":"{r}"}],"alignment":"left"},"height":43,"constraintValues":{"left":21,"height":43,"centerAnchorX":0.21199999999999999,"width":117,"top":62,"centerAnchorY":0.12518740629685157},"blending":"normal","opacity":0.59999999999999998,"autoSize":false,"y":62});var wid = new TextLayer({"parent":container,"name":"wid","backgroundColor":null,"width":328,"x":20,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":6,"css":{"fontSize":"18px","letterSpacing":"0px","lineHeight":"1.3","tabSize":4,"fontFamily":"\".SFNSDisplay-Bold\", \"SFProDisplay-Bold\", \"SFUIDisplay-Bold\", \".SFUIDisplay-Bold\", sans-serif","WebkitTextFillColor":"hsl(0, 0%, 0%)"}}],"text":"原图宽{w}"},{"inlineStyles":[{"startIndex":0,"endIndex":6,"css":{"fontSize":"18px","letterSpacing":"0px","lineHeight":"1.3","tabSize":4,"fontFamily":"\".SFNSDisplay-Bold\", \"SFProDisplay-Bold\", \"SFUIDisplay-Bold\", \".SFUIDisplay-Bold\", sans-serif","WebkitTextFillColor":"hsl(0, 0%, 0%)"}}],"text":"原图高{h}"}],"alignment":"left"},"height":43,"constraintValues":{"left":20,"height":43,"centerAnchorX":0.49066666666666664,"width":328,"bottom":96,"right":27,"top":null,"centerAnchorY":0.82383808095952027},"blending":"normal","opacity":0.59999999999999998,"autoSize":false,"y":528});var wid1 = new TextLayer({"parent":container,"name":"wid1","backgroundColor":null,"width":328,"x":205,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":7,"css":{"fontSize":"18px","letterSpacing":"0px","lineHeight":"1.3","tabSize":4,"fontFamily":"\".SFNSDisplay-Bold\", \"SFProDisplay-Bold\", \"SFUIDisplay-Bold\", \".SFUIDisplay-Bold\", sans-serif","WebkitTextFillColor":"hsl(0, 0%, 0%)"}}],"text":"展示图宽{w}"},{"inlineStyles":[{"startIndex":0,"endIndex":7,"css":{"fontSize":"18px","letterSpacing":"0px","lineHeight":"1.3","tabSize":4,"fontFamily":"\".SFNSDisplay-Bold\", \"SFProDisplay-Bold\", \"SFUIDisplay-Bold\", \".SFUIDisplay-Bold\", sans-serif","WebkitTextFillColor":"hsl(0, 0%, 0%)"}}],"text":"展示图高{h}"}],"alignment":"left"},"height":43,"constraintValues":{"left":null,"height":43,"centerAnchorX":0.98399999999999999,"width":328,"bottom":96,"right":-158,"top":null,"centerAnchorY":0.82383808095952027},"blending":"normal","opacity":0.59999999999999998,"autoSize":false,"y":528});var ima = new Layer({"parent":container,"name":"ima","backgroundColor":"rgba(0, 170, 255, 0.5)","width":120,"x":15,"height":120,"constraintValues":{"left":15,"height":120,"centerAnchorX":0.19333333333333333,"width":120,"top":250,"centerAnchorY":0.46476761619190404},"blending":"normal","clip":false,"borderStyle":"solid","y":250});var __layer_6__ = new Layer({"parent":container,"backgroundSize":"fill","backgroundColor":null,"width":345,"x":15,"height":57,"constraintValues":{"left":15,"aspectRatioLocked":true,"height":57,"centerAnchorX":0.5,"width":345,"right":15,"top":183,"centerAnchorY":0.31709145427286356},"blending":"normal","image":"images\/design\/x2O0R5tFy1vF3JDlZOn6Us3xfQbzytZk4U0RzUunml44jlyTGCz16wlj2NHoLNKoGlO8GJbPwLe7QlCruw.png","clip":false,"borderStyle":"solid","y":183});var action = new Layer({"parent":container,"name":"action","backgroundSize":"fill","backgroundColor":null,"width":345,"x":15,"height":26,"constraintValues":{"left":15,"aspectRatioLocked":true,"height":26,"centerAnchorX":0.5,"width":345,"bottom":186,"right":15,"top":null,"centerAnchorY":0.70164917541229388},"blending":"normal","image":"images\/design\/Ex871x7jWCHChnXxhbjOrgFwj6Vd9zmoNNE9YJEcfXubjfN9V8own3AFnK5ReXvyGSjl5eDDg4etmATQtRw.png","clip":false,"borderStyle":"solid","y":455});var __layer_7__ = new Layer({"parent":__layer_0__,"backgroundColor":null,"width":125,"x":125,"height":184,"constraintValues":{"left":null,"height":184,"centerAnchorX":0.5,"width":125,"bottom":0,"top":null,"centerAnchorY":0.86206896551724133},"blending":"normal","clip":false,"borderStyle":"solid","visible":false,"y":483});var __layer_8__ = new Layer({"parent":__layer_7__,"name":"betaBackground","backgroundColor":"rgba(232, 232, 232, 1.00)","width":8,"x":59,"height":80,"constraintValues":{"left":null,"height":80,"centerAnchorX":0.5,"width":8,"top":39,"centerAnchorY":0.42934782608695649},"blending":"normal","borderRadius":9,"clip":false,"borderStyle":"solid","y":39});var beta = new Layer({"parent":__layer_8__,"name":"beta","backgroundColor":"#0af","width":8,"height":8,"constraintValues":{"aspectRatioLocked":true,"height":8,"centerAnchorX":0.5,"width":8,"right":0,"top":null,"centerAnchorY":0.5},"blending":"normal","borderRadius":"50.0%","clip":false,"borderStyle":"solid","y":36});var betaValue = new TextLayer({"parent":beta,"name":"betaValue","backgroundColor":null,"width":25,"x":15,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"12px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Semibold\", \"SFProText-Semibold\", \"SFUIText-Semibold\", \".SFUIText-Semibold\", sans-serif","WebkitTextFillColor":"hsl(0, 7%, 4%)"}}],"text":"{b}º"}]},"height":14,"constraintValues":{"left":null,"height":14,"centerAnchorX":3.4375,"width":25,"right":-32,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":false,"y":-3});var __layer_9__ = new TextLayer({"parent":__layer_7__,"backgroundColor":null,"width":125,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"12px","letterSpacing":"0.5px","lineHeight":"1.7","tabSize":4,"fontFamily":"\".SFNSText-Medium\", \"SFProText-Medium\", \"SFUIText-Medium\", \".SFUIText-Medium\", sans-serif","WebkitTextFillColor":"rgba(199, 199, 199, 1.00)"}}],"text":"BETA"}],"alignment":"center"},"height":20,"constraintValues":{"height":20,"centerAnchorX":0.5,"width":125,"bottom":15,"right":0,"top":null,"centerAnchorY":0.86413043478260865},"blending":"normal","autoSize":false,"y":149});var __layer_10__ = new Layer({"parent":__layer_0__,"backgroundColor":null,"width":125,"height":184,"constraintValues":{"height":184,"centerAnchorX":0.16666666666666671,"width":125,"bottom":0,"top":null,"centerAnchorY":0.86206896551724133},"blending":"normal","clip":false,"borderStyle":"solid","visible":false,"y":483});var __layer_11__ = new TextLayer({"parent":__layer_10__,"backgroundColor":null,"width":125,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":5,"css":{"fontSize":"12px","letterSpacing":"0.5px","lineHeight":"1.7","tabSize":4,"fontFamily":"\".SFNSText-Medium\", \"SFProText-Medium\", \"SFUIText-Medium\", \".SFUIText-Medium\", sans-serif","WebkitTextFillColor":"rgba(199, 199, 199, 1.00)"}}],"text":"ALPHA"}],"alignment":"center"},"height":20,"constraintValues":{"height":20,"centerAnchorX":0.48399999999999999,"width":125,"bottom":15,"top":null,"centerAnchorY":0.86413043478260865},"blending":"normal","autoSize":false,"y":149});var alpha = new Layer({"parent":__layer_10__,"name":"alpha","backgroundColor":"transparent","width":80,"x":23,"height":80,"constraintValues":{"left":22.5,"height":80,"centerAnchorX":0.5,"width":80,"right":22.5,"top":40,"centerAnchorY":0.43478260869565222},"blending":"normal","clip":false,"borderStyle":"solid","y":40});var __layer_12__ = new Layer({"parent":alpha,"borderWidth":8,"backgroundColor":"hsl(0, 0%, 100%)","width":80,"borderColor":"rgba(232, 232, 232, 1.00)","height":80,"constraintValues":{"height":80,"centerAnchorX":0.5,"width":80,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","borderRadius":"50.0%","clip":false,"borderStyle":"solid"});var __layer_13__ = new Layer({"parent":alpha,"backgroundColor":"#0af","width":8,"x":36,"height":8,"constraintValues":{"left":null,"height":8,"centerAnchorX":0.5,"width":8,"centerAnchorY":0.050000000000000003,"aspectRatioLocked":true},"blending":"normal","borderRadius":"50.0%","clip":false,"borderStyle":"solid"});var alphaValue = new TextLayer({"parent":__layer_10__,"name":"alphaValue","backgroundColor":null,"width":80,"x":23,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"12px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Semibold\", \"SFProText-Semibold\", \"SFUIText-Semibold\", \".SFUIText-Semibold\", sans-serif","WebkitTextFillColor":"hsl(0, 7%, 4%)"}}],"text":"{a}º"}],"alignment":"center"},"height":14,"constraintValues":{"left":22.5,"height":14,"centerAnchorX":0.5,"width":80,"right":22.5,"top":74,"centerAnchorY":0.44021739130434778},"blending":"normal","autoSize":false,"y":74});var __layer_14__ = new Layer({"parent":__layer_0__,"backgroundColor":null,"width":125,"x":250,"height":184,"constraintValues":{"left":null,"height":184,"centerAnchorX":0.83333333333333337,"width":125,"bottom":0,"right":0,"top":null,"centerAnchorY":0.86206896551724133},"blending":"normal","clip":false,"borderStyle":"solid","visible":false,"y":483});var __layer_15__ = new TextLayer({"parent":__layer_14__,"backgroundColor":null,"width":125,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":5,"css":{"fontSize":"12px","letterSpacing":"0.5px","lineHeight":"1.7","tabSize":4,"fontFamily":"\".SFNSText-Medium\", \"SFProText-Medium\", \"SFUIText-Medium\", \".SFUIText-Medium\", sans-serif","WebkitTextFillColor":"rgba(199, 199, 199, 1.00)"}}],"text":"GAMMA"}],"alignment":"center"},"height":20,"constraintValues":{"height":20,"centerAnchorX":0.5,"width":125,"bottom":15,"top":null,"centerAnchorY":0.86413043478260865},"blending":"normal","autoSize":false,"y":149});var __layer_16__ = new Layer({"parent":__layer_14__,"backgroundColor":"hsl(0, 0%, 91%)","width":80,"x":23,"height":8,"constraintValues":{"left":23,"height":8,"centerAnchorX":0.504,"width":80,"right":22,"top":75,"centerAnchorY":0.42934782608695649},"blending":"normal","borderRadius":9,"clip":false,"borderStyle":"solid","y":75});var gamma = new Layer({"parent":__layer_16__,"name":"gamma","backgroundColor":"#0af","width":8,"height":8,"constraintValues":{"height":8,"centerAnchorX":0.050000000000000003,"width":8,"bottom":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","borderRadius":"50.0%","clip":false,"borderStyle":"solid"});var gammaValue = new TextLayer({"parent":gamma,"name":"gammaValue","backgroundColor":null,"width":24,"x":-4,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"12px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Semibold\", \"SFProText-Semibold\", \"SFUIText-Semibold\", \".SFUIText-Semibold\", sans-serif","WebkitTextFillColor":"hsl(0, 7%, 4%)"}}],"text":"{g}º"}]},"height":14,"constraintValues":{"left":null,"height":14,"centerAnchorX":1,"width":24,"bottom":-22,"top":null,"centerAnchorY":2.875},"blending":"normal","autoSize":false,"y":16});if(gammaValue !== undefined){gammaValue.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|gammaValue","targetName":"gammaValue","vekterClass":"TextNode","text":"{g}º"}};if(action !== undefined){action.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|action","targetName":"action","vekterClass":"FrameNode"}};if(__layer_9__ !== undefined){__layer_9__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_9__","vekterClass":"TextNode","text":"BETA"}};if(ball !== undefined){ball.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|ball","targetName":"ball","vekterClass":"FrameNode"}};if(__layer_10__ !== undefined){__layer_10__.__framerInstanceInfo = {"hash":"#vekter|__layer_10__","vekterClass":"FrameNode","framerClass":"Layer"}};if(container !== undefined){container.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|container","targetName":"container","vekterClass":"FrameNode"}};if(__layer_0__ !== undefined){__layer_0__.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|__layer_0__","vekterClass":"FrameNode","deviceType":"apple-iphone-8-space-gray","deviceName":"Apple iPhone 8"}};if(rate !== undefined){rate.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|rate","targetName":"rate","vekterClass":"TextNode","text":"宽高比\n{r}"}};if(__layer_12__ !== undefined){__layer_12__.__framerInstanceInfo = {"hash":"#vekter|__layer_12__","vekterClass":"FrameNode","framerClass":"Layer"}};if(wid1 !== undefined){wid1.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|wid1","targetName":"wid1","vekterClass":"TextNode","text":"展示图宽{w}\n展示图高{h}"}};if(__layer_4__ !== undefined){__layer_4__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_4__","vekterClass":"TextNode","text":"评论配图展示"}};if(wid !== undefined){wid.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|wid","targetName":"wid","vekterClass":"TextNode","text":"原图宽{w}\n原图高{h}"}};if(__layer_7__ !== undefined){__layer_7__.__framerInstanceInfo = {"hash":"#vekter|__layer_7__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_2__ !== undefined){__layer_2__.__framerInstanceInfo = {"hash":"#vekter|__layer_2__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_8__ !== undefined){__layer_8__.__framerInstanceInfo = {"hash":"#vekter|__layer_8__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_14__ !== undefined){__layer_14__.__framerInstanceInfo = {"hash":"#vekter|__layer_14__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_15__ !== undefined){__layer_15__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_15__","vekterClass":"TextNode","text":"GAMMA"}};if(__layer_13__ !== undefined){__layer_13__.__framerInstanceInfo = {"hash":"#vekter|__layer_13__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_11__ !== undefined){__layer_11__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_11__","vekterClass":"TextNode","text":"ALPHA"}};if(alphaValue !== undefined){alphaValue.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|alphaValue","targetName":"alphaValue","vekterClass":"TextNode","text":"{a}º"}};if(beta !== undefined){beta.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|beta","targetName":"beta","vekterClass":"FrameNode"}};if(alpha !== undefined){alpha.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|alpha","targetName":"alpha","vekterClass":"FrameNode"}};if(__layer_16__ !== undefined){__layer_16__.__framerInstanceInfo = {"hash":"#vekter|__layer_16__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_1__ !== undefined){__layer_1__.__framerInstanceInfo = {"hash":"#vekter|__layer_1__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_6__ !== undefined){__layer_6__.__framerInstanceInfo = {"hash":"#vekter|__layer_6__","vekterClass":"FrameNode","framerClass":"Layer"}};if(ima !== undefined){ima.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|ima","targetName":"ima","vekterClass":"FrameNode"}};if(betaValue !== undefined){betaValue.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|betaValue","targetName":"betaValue","vekterClass":"TextNode","text":"{b}º"}};if(gamma !== undefined){gamma.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|gamma","targetName":"gamma","vekterClass":"FrameNode"}};if(__layer_3__ !== undefined){__layer_3__.__framerInstanceInfo = {"hash":"#vekter|__layer_3__","vekterClass":"FrameNode","framerClass":"Layer"}};if(__layer_5__ !== undefined){__layer_5__.__framerInstanceInfo = {"hash":"#vekter|__layer_5__","vekterClass":"FrameNode","framerClass":"Layer"}};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {container, ball, rate, wid, wid1, ima, action, beta, betaValue, alpha, alphaValue, gamma, gammaValue});scope["__vekterVariables"] = ["container", "ball", "rate", "wid", "wid1", "ima", "action", "beta", "betaValue", "alpha", "alphaValue", "gamma", "gammaValue"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);