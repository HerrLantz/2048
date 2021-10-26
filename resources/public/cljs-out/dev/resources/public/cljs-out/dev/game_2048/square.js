// Compiled by ClojureScript 1.10.773 {}
goog.provide('game_2048.square');
goog.require('cljs.core');
game_2048.square.get_style = (function game_2048$square$get_style(p__18173){
var map__18174 = p__18173;
var map__18174__$1 = (((((!((map__18174 == null))))?(((((map__18174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18174):map__18174);
var number = cljs.core.get.call(null,map__18174__$1,new cljs.core.Keyword(null,"number","number",1570378438));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(number)?"#eee4da":"#cdc1b4"),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.2rem",new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"helvetica-bold",new cljs.core.Keyword(null,"color","color",1011675173),"#525252",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"4rem"], null);
});
game_2048.square.square = (function game_2048$square$square(p__18176){
var map__18177 = p__18176;
var map__18177__$1 = (((((!((map__18177 == null))))?(((((map__18177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18177):map__18177);
var number = cljs.core.get.call(null,map__18177__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var k = cljs.core.get.call(null,map__18177__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),game_2048.square.get_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),number], null)),new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),number], null)], null);
});

//# sourceMappingURL=square.js.map
