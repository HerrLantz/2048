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
game_2048.state.construction.add_random_square = (function game_2048$state$construction$add_random_square(game){
var new_tile = (((cljs.core.rand.call(null) < 0.9))?(2):(4));
var available_squares = game_2048.state.construction.get_empty_squares_coordinates.call(null,game);
var rand_idx = cljs.core.rand_int.call(null,cljs.core.count.call(null,available_squares));
var rand_pos = cljs.core.get.call(null,available_squares,rand_idx);
return cljs.core.assoc_in.call(null,game,rand_pos,new_tile);
});
game_2048.state.construction.create_board = (function game_2048$state$construction$create_board(x,y){
return game_2048.state.construction.add_random_square.call(null,game_2048.state.construction.add_random_square.call(null,cljs.core.mapv.call(null,(function (row){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,row);
}),cljs.core.repeat.call(null,y,cljs.core.repeat.call(null,x,null)))));
});
game_2048.state.construction.create_game = (function game_2048$state$construction$create_game(x,y){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),game_2048.state.construction.create_board.call(null,x,y),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY], null);
});
game_2048.state.construction.board_size = (function game_2048$state$construction$board_size(game){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game))),cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game))], null);
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
var G__18272 = (i + (1));
i = G__18272;
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
var G__18273 = new_idx;
var G__18274 = new_next_idx;
var G__18275 = new_row;
idx = G__18273;
next_idx = G__18274;
rw = G__18275;
continue;
}
break;
}
});
game_2048.state.construction.reverse_and_merge = (function game_2048$state$construction$reverse_and_merge(row){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,game_2048.state.construction.merge_row.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,row)))));
});
game_2048.state.construction.get_non_empty_squares = (function game_2048$state$construction$get_non_empty_squares(board){
return cljs.core.filterv.call(null,cljs.core.identity,cljs.core.flatten.call(null,board));
});
game_2048.state.construction.get_score_diff = (function game_2048$state$construction$get_score_diff(board1,board2){
var squares1 = cljs.core.sort.call(null,game_2048.state.construction.get_non_empty_squares.call(null,board1));
var squares2 = cljs.core.sort.call(null,game_2048.state.construction.get_non_empty_squares.call(null,board2));
var sum = (0);
while(true){
if(cljs.core.empty_QMARK_.call(null,squares1)){
return sum;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,squares1),cljs.core.first.call(null,squares2))){
var G__18276 = cljs.core.rest.call(null,squares1);
var G__18277 = cljs.core.rest.call(null,squares2);
var G__18278 = sum;
squares1 = G__18276;
squares2 = G__18277;
sum = G__18278;
continue;
} else {
var G__18279 = cljs.core.rest.call(null,squares1);
var G__18280 = cljs.core.drop.call(null,(2),squares2);
var G__18281 = (sum + cljs.core.first.call(null,squares1));
squares1 = G__18279;
squares2 = G__18280;
sum = G__18281;
continue;

}
}
break;
}
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
cljs.core._add_method.call(null,game_2048.state.construction.shift_tiles,new cljs.core.Keyword(null,"left","left",-399115937),(function (board){
return cljs.core.mapv.call(null,(function (row){
return game_2048.state.construction.merge_row.call(null,row);
}),board);
}));
cljs.core._add_method.call(null,game_2048.state.construction.shift_tiles,new cljs.core.Keyword(null,"right","right",-452581833),(function (board){
return cljs.core.mapv.call(null,(function (row){
return game_2048.state.construction.reverse_and_merge.call(null,row);
}),board);
}));
cljs.core._add_method.call(null,game_2048.state.construction.shift_tiles,new cljs.core.Keyword(null,"up","up",-269712113),(function (board){
return game_2048.state.construction.transpose_board.call(null,cljs.core.mapv.call(null,(function (row){
return game_2048.state.construction.merge_row.call(null,row);
}),game_2048.state.construction.transpose_board.call(null,board)));
}));
cljs.core._add_method.call(null,game_2048.state.construction.shift_tiles,new cljs.core.Keyword(null,"down","down",1565245570),(function (board){
return game_2048.state.construction.transpose_board.call(null,cljs.core.mapv.call(null,(function (row){
return game_2048.state.construction.reverse_and_merge.call(null,row);
}),game_2048.state.construction.transpose_board.call(null,board)));
}));
game_2048.state.construction.merge_board = (function game_2048$state$construction$merge_board(game,direction){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game);
var new_board = game_2048.state.construction.shift_tiles.call(null,board,direction);
var new_score = (game_2048.state.construction.get_score_diff.call(null,new_board,board) + new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(game));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"board","board",-1907017633),((cljs.core._EQ_.call(null,board,new_board))?new_board:game_2048.state.construction.add_random_square.call(null,new_board))),new cljs.core.Keyword(null,"score","score",-1963588780),new_score);
});

//# sourceMappingURL=construction.js.map
