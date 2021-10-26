// Compiled by ClojureScript 1.10.773 {}
goog.provide('game_2048.square');
goog.require('cljs.core');
game_2048.square.get_style = (function game_2048$square$get_style(p__18722){
var map__18723 = p__18722;
var map__18723__$1 = (((((!((map__18723 == null))))?(((((map__18723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18723):map__18723);
var number = cljs.core.get.call(null,map__18723__$1,new cljs.core.Keyword(null,"number","number",1570378438));
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(function (){var pred__18725 = cljs.core._EQ_;
var expr__18726 = number;
if(cljs.core.truth_(pred__18725.call(null,"2",expr__18726))){
return "#eee4da";
} else {
if(cljs.core.truth_(pred__18725.call(null,"4",expr__18726))){
return "#eee1c9";
} else {
if(cljs.core.truth_(pred__18725.call(null,"8",expr__18726))){
return "#f3b27a";
} else {
if(cljs.core.truth_(pred__18725.call(null,"16",expr__18726))){
return "#f69663";
} else {
if(cljs.core.truth_(pred__18725.call(null,"32",expr__18726))){
return "#f77c5f";
} else {
if(cljs.core.truth_(pred__18725.call(null,"64",expr__18726))){
return "#f75f3b";
} else {
if(cljs.core.truth_(pred__18725.call(null,"128",expr__18726))){
return "#edcf72";
} else {
if(cljs.core.truth_(pred__18725.call(null,"256",expr__18726))){
return "#edcc62";
} else {
if(cljs.core.truth_(pred__18725.call(null,"512",expr__18726))){
return "#edc950";
} else {
if(cljs.core.truth_(pred__18725.call(null,"1024",expr__18726))){
return "#edc53f";
} else {
if(cljs.core.truth_(pred__18725.call(null,"2048",expr__18726))){
return "#edc22e";
} else {
return "#cdc1b4";
}
}
}
}
}
}
}
}
}
}
}
})(),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.2rem",new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"helvetica-bold",new cljs.core.Keyword(null,"color","color",1011675173),(function (){var pred__18728 = cljs.core._EQ_;
var expr__18729 = number;
if(cljs.core.truth_(pred__18728.call(null,"2",expr__18729))){
return "#525252";
} else {
if(cljs.core.truth_(pred__18728.call(null,"4",expr__18729))){
return "#525252";
} else {
return "#f9f6f2";
}
}
})(),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"4rem"], null);
});
game_2048.square.square = (function game_2048$square$square(p__18731){
var map__18732 = p__18731;
var map__18732__$1 = (((((!((map__18732 == null))))?(((((map__18732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18732):map__18732);
var number = cljs.core.get.call(null,map__18732__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var k = cljs.core.get.call(null,map__18732__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),game_2048.square.get_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"number","number",1570378438),number], null)),new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),number], null)], null);
});

//# sourceMappingURL=square.js.map
