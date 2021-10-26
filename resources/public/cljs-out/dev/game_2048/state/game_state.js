// Compiled by ClojureScript 1.10.773 {}
goog.provide('game_2048.state.game_state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('game_2048.state.construction');
if((typeof game_2048 !== 'undefined') && (typeof game_2048.state !== 'undefined') && (typeof game_2048.state.game_state !== 'undefined') && (typeof game_2048.state.game_state.game_state !== 'undefined')){
} else {
game_2048.state.game_state.game_state = reagent.core.atom.call(null,game_2048.state.construction.create_game.call(null,(4),(4)));
}
game_2048.state.game_state.get_board = (function game_2048$state$game_state$get_board(){
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game_2048.state.game_state.game_state));
});
game_2048.state.game_state.get_score = (function game_2048$state$game_state$get_score(){
return new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game_2048.state.game_state.game_state));
});
game_2048.state.game_state.get_previous_board = (function game_2048$state$game_state$get_previous_board(){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game_2048.state.game_state.game_state)));
});
game_2048.state.game_state.get_size = (function game_2048$state$game_state$get_size(){
return game_2048.state.construction.board_size.call(null,cljs.core.deref.call(null,game_2048.state.game_state.game_state));
});

//# sourceMappingURL=game_state.js.map
