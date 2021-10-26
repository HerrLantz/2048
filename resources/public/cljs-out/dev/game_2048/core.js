// Compiled by ClojureScript 1.10.773 {}
goog.provide('game_2048.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.dom');
goog.require('game_2048.board');
goog.require('game_2048.game');
goog.require('game_2048.key_handler');
goog.require('game_2048.state.dispatcher');
goog.require('goog.events.KeyCodes');
game_2048.core.get_app_element = (function game_2048$core$get_app_element(){
return goog.dom.getElement("app");
});
game_2048.core.hello_world = (function game_2048$core$hello_world(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"2048"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"YAY"], null),game_2048.game.game.call(null)], null);
});
game_2048.core.init = (function game_2048$core$init(){
return game_2048.key_handler.key_listener.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.events.KeyCodes.W,(function (){
return game_2048.state.dispatcher.dispatch.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"move-up","move-up",-1153137133)], null));
}),goog.events.KeyCodes.UP,(function (){
return game_2048.state.dispatcher.dispatch.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"move-up","move-up",-1153137133)], null));
}),goog.events.KeyCodes.S,(function (){
return game_2048.state.dispatcher.dispatch.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"move-down","move-down",-1149356017)], null));
}),goog.events.KeyCodes.DOWN,(function (){
return game_2048.state.dispatcher.dispatch.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"move-down","move-down",-1149356017)], null));
}),goog.events.KeyCodes.A,(function (){
return game_2048.state.dispatcher.dispatch.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"move-left","move-left",-271562811)], null));
}),goog.events.KeyCodes.LEFT,(function (){
return game_2048.state.dispatcher.dispatch.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"move-left","move-left",-271562811)], null));
}),goog.events.KeyCodes.D,(function (){
return game_2048.state.dispatcher.dispatch.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"move-right","move-right",1661359569)], null));
}),goog.events.KeyCodes.RIGHT,(function (){
return game_2048.state.dispatcher.dispatch.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"move-right","move-right",1661359569)], null));
})]));
});
goog.exportSymbol('game_2048.core.init', game_2048.core.init);
game_2048.core.mount = (function game_2048$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [game_2048.core.hello_world], null),el);
});
game_2048.core.mount_app_element = (function game_2048$core$mount_app_element(){
var temp__5720__auto__ = game_2048.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return game_2048.core.mount.call(null,el);
} else {
return null;
}
});
game_2048.core.mount_app_element.call(null);
game_2048.core.on_reload = (function game_2048$core$on_reload(){
return game_2048.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
