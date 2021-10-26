// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21234){
var map__21235 = p__21234;
var map__21235__$1 = (((((!((map__21235 == null))))?(((((map__21235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21235):map__21235);
var m = map__21235__$1;
var n = cljs.core.get.call(null,map__21235__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21235__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21237_21269 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21238_21270 = null;
var count__21239_21271 = (0);
var i__21240_21272 = (0);
while(true){
if((i__21240_21272 < count__21239_21271)){
var f_21273 = cljs.core._nth.call(null,chunk__21238_21270,i__21240_21272);
cljs.core.println.call(null,"  ",f_21273);


var G__21274 = seq__21237_21269;
var G__21275 = chunk__21238_21270;
var G__21276 = count__21239_21271;
var G__21277 = (i__21240_21272 + (1));
seq__21237_21269 = G__21274;
chunk__21238_21270 = G__21275;
count__21239_21271 = G__21276;
i__21240_21272 = G__21277;
continue;
} else {
var temp__5720__auto___21278 = cljs.core.seq.call(null,seq__21237_21269);
if(temp__5720__auto___21278){
var seq__21237_21279__$1 = temp__5720__auto___21278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21237_21279__$1)){
var c__4556__auto___21280 = cljs.core.chunk_first.call(null,seq__21237_21279__$1);
var G__21281 = cljs.core.chunk_rest.call(null,seq__21237_21279__$1);
var G__21282 = c__4556__auto___21280;
var G__21283 = cljs.core.count.call(null,c__4556__auto___21280);
var G__21284 = (0);
seq__21237_21269 = G__21281;
chunk__21238_21270 = G__21282;
count__21239_21271 = G__21283;
i__21240_21272 = G__21284;
continue;
} else {
var f_21285 = cljs.core.first.call(null,seq__21237_21279__$1);
cljs.core.println.call(null,"  ",f_21285);


var G__21286 = cljs.core.next.call(null,seq__21237_21279__$1);
var G__21287 = null;
var G__21288 = (0);
var G__21289 = (0);
seq__21237_21269 = G__21286;
chunk__21238_21270 = G__21287;
count__21239_21271 = G__21288;
i__21240_21272 = G__21289;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21290 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21290);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21290)))?cljs.core.second.call(null,arglists_21290):arglists_21290));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21241_21291 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21242_21292 = null;
var count__21243_21293 = (0);
var i__21244_21294 = (0);
while(true){
if((i__21244_21294 < count__21243_21293)){
var vec__21255_21295 = cljs.core._nth.call(null,chunk__21242_21292,i__21244_21294);
var name_21296 = cljs.core.nth.call(null,vec__21255_21295,(0),null);
var map__21258_21297 = cljs.core.nth.call(null,vec__21255_21295,(1),null);
var map__21258_21298__$1 = (((((!((map__21258_21297 == null))))?(((((map__21258_21297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21258_21297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21258_21297):map__21258_21297);
var doc_21299 = cljs.core.get.call(null,map__21258_21298__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21300 = cljs.core.get.call(null,map__21258_21298__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21296);

cljs.core.println.call(null," ",arglists_21300);

if(cljs.core.truth_(doc_21299)){
cljs.core.println.call(null," ",doc_21299);
} else {
}


var G__21301 = seq__21241_21291;
var G__21302 = chunk__21242_21292;
var G__21303 = count__21243_21293;
var G__21304 = (i__21244_21294 + (1));
seq__21241_21291 = G__21301;
chunk__21242_21292 = G__21302;
count__21243_21293 = G__21303;
i__21244_21294 = G__21304;
continue;
} else {
var temp__5720__auto___21305 = cljs.core.seq.call(null,seq__21241_21291);
if(temp__5720__auto___21305){
var seq__21241_21306__$1 = temp__5720__auto___21305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21241_21306__$1)){
var c__4556__auto___21307 = cljs.core.chunk_first.call(null,seq__21241_21306__$1);
var G__21308 = cljs.core.chunk_rest.call(null,seq__21241_21306__$1);
var G__21309 = c__4556__auto___21307;
var G__21310 = cljs.core.count.call(null,c__4556__auto___21307);
var G__21311 = (0);
seq__21241_21291 = G__21308;
chunk__21242_21292 = G__21309;
count__21243_21293 = G__21310;
i__21244_21294 = G__21311;
continue;
} else {
var vec__21260_21312 = cljs.core.first.call(null,seq__21241_21306__$1);
var name_21313 = cljs.core.nth.call(null,vec__21260_21312,(0),null);
var map__21263_21314 = cljs.core.nth.call(null,vec__21260_21312,(1),null);
var map__21263_21315__$1 = (((((!((map__21263_21314 == null))))?(((((map__21263_21314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21263_21314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21263_21314):map__21263_21314);
var doc_21316 = cljs.core.get.call(null,map__21263_21315__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21317 = cljs.core.get.call(null,map__21263_21315__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21313);

cljs.core.println.call(null," ",arglists_21317);

if(cljs.core.truth_(doc_21316)){
cljs.core.println.call(null," ",doc_21316);
} else {
}


var G__21318 = cljs.core.next.call(null,seq__21241_21306__$1);
var G__21319 = null;
var G__21320 = (0);
var G__21321 = (0);
seq__21241_21291 = G__21318;
chunk__21242_21292 = G__21319;
count__21243_21293 = G__21320;
i__21244_21294 = G__21321;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__21265 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21266 = null;
var count__21267 = (0);
var i__21268 = (0);
while(true){
if((i__21268 < count__21267)){
var role = cljs.core._nth.call(null,chunk__21266,i__21268);
var temp__5720__auto___21322__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___21322__$1)){
var spec_21323 = temp__5720__auto___21322__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21323));
} else {
}


var G__21324 = seq__21265;
var G__21325 = chunk__21266;
var G__21326 = count__21267;
var G__21327 = (i__21268 + (1));
seq__21265 = G__21324;
chunk__21266 = G__21325;
count__21267 = G__21326;
i__21268 = G__21327;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__21265);
if(temp__5720__auto____$1){
var seq__21265__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21265__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__21265__$1);
var G__21328 = cljs.core.chunk_rest.call(null,seq__21265__$1);
var G__21329 = c__4556__auto__;
var G__21330 = cljs.core.count.call(null,c__4556__auto__);
var G__21331 = (0);
seq__21265 = G__21328;
chunk__21266 = G__21329;
count__21267 = G__21330;
i__21268 = G__21331;
continue;
} else {
var role = cljs.core.first.call(null,seq__21265__$1);
var temp__5720__auto___21332__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___21332__$2)){
var spec_21333 = temp__5720__auto___21332__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21333));
} else {
}


var G__21334 = cljs.core.next.call(null,seq__21265__$1);
var G__21335 = null;
var G__21336 = (0);
var G__21337 = (0);
seq__21265 = G__21334;
chunk__21266 = G__21335;
count__21267 = G__21336;
i__21268 = G__21337;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21338 = cljs.core.conj.call(null,via,t);
var G__21339 = cljs.core.ex_cause.call(null,t);
via = G__21338;
t = G__21339;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21342 = datafied_throwable;
var map__21342__$1 = (((((!((map__21342 == null))))?(((((map__21342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21342):map__21342);
var via = cljs.core.get.call(null,map__21342__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__21342__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__21342__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21343 = cljs.core.last.call(null,via);
var map__21343__$1 = (((((!((map__21343 == null))))?(((((map__21343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21343):map__21343);
var type = cljs.core.get.call(null,map__21343__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__21343__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__21343__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21344 = data;
var map__21344__$1 = (((((!((map__21344 == null))))?(((((map__21344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21344):map__21344);
var problems = cljs.core.get.call(null,map__21344__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__21344__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__21344__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21345 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__21345__$1 = (((((!((map__21345 == null))))?(((((map__21345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21345):map__21345);
var top_data = map__21345__$1;
var source = cljs.core.get.call(null,map__21345__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__21350 = phase;
var G__21350__$1 = (((G__21350 instanceof cljs.core.Keyword))?G__21350.fqn:null);
switch (G__21350__$1) {
case "read-source":
var map__21351 = data;
var map__21351__$1 = (((((!((map__21351 == null))))?(((((map__21351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21351):map__21351);
var line = cljs.core.get.call(null,map__21351__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21351__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21353 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__21353__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21353,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21353);
var G__21353__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21353__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21353__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21353__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21353__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21354 = top_data;
var G__21354__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21354,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21354);
var G__21354__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21354__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21354__$1);
var G__21354__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21354__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21354__$2);
var G__21354__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21354__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21354__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21354__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21354__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21355 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21355,(0),null);
var method = cljs.core.nth.call(null,vec__21355,(1),null);
var file = cljs.core.nth.call(null,vec__21355,(2),null);
var line = cljs.core.nth.call(null,vec__21355,(3),null);
var G__21358 = top_data;
var G__21358__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__21358,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21358);
var G__21358__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__21358__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21358__$1);
var G__21358__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__21358__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21358__$2);
var G__21358__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21358__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21358__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21358__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21358__$4;
}

break;
case "execution":
var vec__21359 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21359,(0),null);
var method = cljs.core.nth.call(null,vec__21359,(1),null);
var file = cljs.core.nth.call(null,vec__21359,(2),null);
var line = cljs.core.nth.call(null,vec__21359,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__21341_SHARP_){
var or__4126__auto__ = (p1__21341_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__21341_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__21362 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21362__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__21362,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21362);
var G__21362__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21362__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21362__$1);
var G__21362__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__21362__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21362__$2);
var G__21362__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__21362__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21362__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21362__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21362__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21350__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21366){
var map__21367 = p__21366;
var map__21367__$1 = (((((!((map__21367 == null))))?(((((map__21367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21367):map__21367);
var triage_data = map__21367__$1;
var phase = cljs.core.get.call(null,map__21367__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__21367__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__21367__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21367__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__21367__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__21367__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__21367__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__21367__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21369 = phase;
var G__21369__$1 = (((G__21369 instanceof cljs.core.Keyword))?G__21369.fqn:null);
switch (G__21369__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21370_21379 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21371_21380 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21372_21381 = true;
var _STAR_print_fn_STAR__temp_val__21373_21382 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21372_21381);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21373_21382);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__21364_SHARP_){
return cljs.core.dissoc.call(null,p1__21364_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21371_21380);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21370_21379);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21374_21383 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21375_21384 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21376_21385 = true;
var _STAR_print_fn_STAR__temp_val__21377_21386 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21376_21385);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21377_21386);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__21365_SHARP_){
return cljs.core.dissoc.call(null,p1__21365_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21375_21384);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21374_21383);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21369__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
