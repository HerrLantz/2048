// Compiled by ClojureScript 1.10.773 {}
goog.provide('game_2048.state.dispatcher');
goog.require('cljs.core');
goog.require('game_2048.state.construction');
goog.require('game_2048.state.game_state');
game_2048.state.dispatcher.dispatch = (function game_2048$state$dispatcher$dispatch(p__18193){
var map__18194 = p__18193;
var map__18194__$1 = (((((!((map__18194 == null))))?(((((map__18194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18194):map__18194);
var action = cljs.core.get.call(null,map__18194__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var value = cljs.core.get.call(null,map__18194__$1,new cljs.core.Keyword(null,"value","value",305978217));
var pred__18196 = cljs.core._EQ_;
var expr__18197 = action;
if(cljs.core.truth_(pred__18196.call(null,new cljs.core.Keyword(null,"move-left","move-left",-271562811),expr__18197))){
return cljs.core.swap_BANG_.call(null,game_2048.state.game_state.game_state,game_2048.state.construction.merge_board,new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core.truth_(pred__18196.call(null,new cljs.core.Keyword(null,"move-right","move-right",1661359569),expr__18197))){
return cljs.core.swap_BANG_.call(null,game_2048.state.game_state.game_state,game_2048.state.construction.merge_board,new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_(pred__18196.call(null,new cljs.core.Keyword(null,"move-up","move-up",-1153137133),expr__18197))){
return cljs.core.swap_BANG_.call(null,game_2048.state.game_state.game_state,game_2048.state.construction.merge_board,new cljs.core.Keyword(null,"up","up",-269712113));
} else {
if(cljs.core.truth_(pred__18196.call(null,new cljs.core.Keyword(null,"move-down","move-down",-1149356017),expr__18197))){
return cljs.core.swap_BANG_.call(null,game_2048.state.game_state.game_state,game_2048.state.construction.merge_board,new cljs.core.Keyword(null,"down","down",1565245570));
} else {
if(cljs.core.truth_(pred__18196.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),expr__18197))){
return cljs.core.reset_BANG_.call(null,game_2048.state.game_state.game_state,cljs.core.apply.call(null,game_2048.state.construction.create_game,value));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18197)].join('')));
}
}
}
}
}
});

//# sourceMappingURL=dispatcher.js.map
