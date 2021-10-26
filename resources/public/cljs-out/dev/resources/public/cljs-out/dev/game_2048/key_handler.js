// Compiled by ClojureScript 1.10.773 {}
goog.provide('game_2048.key_handler');
goog.require('cljs.core');
goog.require('goog.events.KeyCodes');
goog.require('goog.events');
game_2048.key_handler.capture_key = (function game_2048$key_handler$capture_key(keycode_map){
var key_handler = (new goog.events.KeyHandler(document));
var press_fn = (function (key_press){
var temp__5720__auto__ = cljs.core.get.call(null,keycode_map,key_press.keyCode);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return f.call(null);
} else {
return null;
}
});
return goog.events.listen(key_handler,goog.events.KeyHandler.EventType.KEY,press_fn);
});
game_2048.key_handler.key_listener = (function game_2048$key_handler$key_listener(key_code_map){
return game_2048.key_handler.capture_key.call(null,key_code_map);
});

//# sourceMappingURL=key_handler.js.map
