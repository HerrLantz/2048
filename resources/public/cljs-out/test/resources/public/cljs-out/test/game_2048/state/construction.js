// Compiled by ClojureScript 1.10.773 {}
goog.provide('game_2048.state.construction');
goog.require('cljs.core');
goog.require('ysera.random');
goog.require('ysera.test');
game_2048.state.construction.get_empty_squares_coordinates = (function game_2048$state$construction$get_empty_squares_coordinates(game){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.reduce.call(null,(function (acc,curr){
return cljs.core.apply.call(null,cljs.core.conj,acc,curr);
}),cljs.core.map_indexed.call(null,(function (y,row){
return cljs.core.map_indexed.call(null,(function (x,tile){
if((tile == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null);
} else {
return null;
}
}),row);
}),game))));
});
game_2048.state.construction.add_random_tile = (function game_2048$state$construction$add_random_tile(game){
var new_tile = (((cljs.core.rand.call(null) < 0.9))?(2):(4));
var available_squares = game_2048.state.construction.get_empty_squares_coordinates.call(null,game);
var rand_idx = cljs.core.rand_int.call(null,cljs.core.count.call(null,available_squares));
var rand_pos = cljs.core.get.call(null,available_squares,rand_idx);
return cljs.core.assoc_in.call(null,game,rand_pos,new_tile);
});
game_2048.state.construction.create_game = (function game_2048$state$construction$create_game(x,y){
return game_2048.state.construction.add_random_tile.call(null,game_2048.state.construction.add_random_tile.call(null,cljs.core.mapv.call(null,(function (row){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,row);
}),cljs.core.repeat.call(null,y,cljs.core.repeat.call(null,x,null)))));
});
game_2048.state.construction.transpose_board = (function game_2048$state$construction$transpose_board(game){
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,game);
});
game_2048.state.construction.find_next_non_empty = (function game_2048$state$construction$find_next_non_empty(row,idx){
var i = (idx + (1));
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,row))){
return null;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,row,i))){
return i;
} else {
var G__24003 = (i + (1));
i = G__24003;
continue;

}
}
break;
}
});
game_2048.state.construction.can_merge_QMARK_ = (function game_2048$state$construction$can_merge_QMARK_(n1,n2){
if((((n1 == null)) && ((!((n2 == null)))))){
return true;
} else {
if((((!((n1 == null)))) && ((!((n2 == null)))) && (cljs.core._EQ_.call(null,n1,n2)))){
return true;
} else {
return false;

}
}
});
game_2048.state.construction.update_row = (function game_2048$state$construction$update_row(row,idx,next_idx){
return cljs.core.assoc.call(null,cljs.core.update.call(null,row,idx,cljs.core._PLUS_,cljs.core.get.call(null,row,next_idx)),next_idx,null);
});
game_2048.state.construction.merge_row = (function game_2048$state$construction$merge_row(row){
var idx = (0);
var next_idx = game_2048.state.construction.find_next_non_empty.call(null,row,idx);
var rw = row;
while(true){
if((cljs.core.get.call(null,rw,next_idx) == null)){
return rw;
} else {
var can_merge = game_2048.state.construction.can_merge_QMARK_.call(null,cljs.core.get.call(null,rw,idx),cljs.core.get.call(null,rw,next_idx));
var new_row = ((can_merge)?game_2048.state.construction.update_row.call(null,rw,idx,next_idx):rw);
var new_idx = (((!((cljs.core.get.call(null,rw,idx) == null))))?(idx + (1)):idx);
var new_next_idx = game_2048.state.construction.find_next_non_empty.call(null,new_row,new_idx);
var G__24004 = new_idx;
var G__24005 = new_next_idx;
var G__24006 = new_row;
idx = G__24004;
next_idx = G__24005;
rw = G__24006;
continue;
}
break;
}
});
game_2048.state.construction.reverse_and_merge = (function game_2048$state$construction$reverse_and_merge(row){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,game_2048.state.construction.merge_row.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,row)))));
});
if((typeof game_2048 !== 'undefined') && (typeof game_2048.state !== 'undefined') && (typeof game_2048.state.construction !== 'undefined') && (typeof game_2048.state.construction.shift_tiles !== 'undefined')){
} else {
game_2048.state.construction.shift_tiles = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"game-2048.state.construction","shift-tiles"),(function (game,direction){
return direction;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,game_2048.state.construction.shift_tiles,new cljs.core.Keyword(null,"left","left",-399115937),(function (game){
return cljs.core.mapv.call(null,(function (row){
return game_2048.state.construction.merge_row.call(null,row);
}),game);
}));
cljs.core._add_method.call(null,game_2048.state.construction.shift_tiles,new cljs.core.Keyword(null,"right","right",-452581833),(function (game){
return cljs.core.mapv.call(null,(function (row){
return game_2048.state.construction.reverse_and_merge.call(null,row);
}),game);
}));
cljs.core._add_method.call(null,game_2048.state.construction.shift_tiles,new cljs.core.Keyword(null,"up","up",-269712113),(function (game){
return game_2048.state.construction.transpose_board.call(null,cljs.core.mapv.call(null,(function (row){
return game_2048.state.construction.merge_row.call(null,row);
}),game_2048.state.construction.transpose_board.call(null,game)));
}));
cljs.core._add_method.call(null,game_2048.state.construction.shift_tiles,new cljs.core.Keyword(null,"down","down",1565245570),(function (game){
return game_2048.state.construction.transpose_board.call(null,cljs.core.mapv.call(null,(function (row){
return game_2048.state.construction.reverse_and_merge.call(null,row);
}),game_2048.state.construction.transpose_board.call(null,game)));
}));

//# sourceMappingURL=construction.js.map
