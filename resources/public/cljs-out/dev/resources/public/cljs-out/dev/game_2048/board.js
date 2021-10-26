// Compiled by ClojureScript 1.10.773 {}
goog.provide('game_2048.board');
goog.require('cljs.core');
goog.require('game_2048.square');
game_2048.board.get_style = (function game_2048$board$get_style(width,height){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["1rem","#bbada0","35rem",cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,height,"1fr ")),"1rem","grid",cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,width,"1fr ")),"0.5rem","35rem"]);
});
game_2048.board.board = (function game_2048$board$board(p__18162){
var map__18163 = p__18162;
var map__18163__$1 = (((((!((map__18163 == null))))?(((((map__18163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18163):map__18163);
var game_board = cljs.core.get.call(null,map__18163__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var size = cljs.core.get.call(null,map__18163__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.apply.call(null,game_2048.board.get_style,size)], null),cljs.core.map_indexed.call(null,(function (idx1,row){
return cljs.core.map_indexed.call(null,(function (idx2,s){
return game_2048.square.square.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(cljs.core.truth_(s)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(s):null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx2)].join('')], null));
}),row);
}),game_board)], null);
});

//# sourceMappingURL=board.js.map
