// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__17617__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__17617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17618__i = 0, G__17618__a = new Array(arguments.length -  0);
while (G__17618__i < G__17618__a.length) {G__17618__a[G__17618__i] = arguments[G__17618__i + 0]; ++G__17618__i;}
  args = new cljs.core.IndexedSeq(G__17618__a,0,null);
} 
return G__17617__delegate.call(this,args);};
G__17617.cljs$lang$maxFixedArity = 0;
G__17617.cljs$lang$applyTo = (function (arglist__17619){
var args = cljs.core.seq(arglist__17619);
return G__17617__delegate(args);
});
G__17617.cljs$core$IFn$_invoke$arity$variadic = G__17617__delegate;
return G__17617;
})()
);

(o.error = (function() { 
var G__17620__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__17620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17621__i = 0, G__17621__a = new Array(arguments.length -  0);
while (G__17621__i < G__17621__a.length) {G__17621__a[G__17621__i] = arguments[G__17621__i + 0]; ++G__17621__i;}
  args = new cljs.core.IndexedSeq(G__17621__a,0,null);
} 
return G__17620__delegate.call(this,args);};
G__17620.cljs$lang$maxFixedArity = 0;
G__17620.cljs$lang$applyTo = (function (arglist__17622){
var args = cljs.core.seq(arglist__17622);
return G__17620__delegate(args);
});
G__17620.cljs$core$IFn$_invoke$arity$variadic = G__17620__delegate;
return G__17620;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
