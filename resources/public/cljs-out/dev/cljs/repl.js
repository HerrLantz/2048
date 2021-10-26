// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21726){
var map__21727 = p__21726;
var map__21727__$1 = (((((!((map__21727 == null))))?(((((map__21727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21727):map__21727);
var m = map__21727__$1;
var n = cljs.core.get.call(null,map__21727__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21727__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__21729_21761 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21730_21762 = null;
var count__21731_21763 = (0);
var i__21732_21764 = (0);
while(true){
if((i__21732_21764 < count__21731_21763)){
var f_21765 = cljs.core._nth.call(null,chunk__21730_21762,i__21732_21764);
cljs.core.println.call(null,"  ",f_21765);


var G__21766 = seq__21729_21761;
var G__21767 = chunk__21730_21762;
var G__21768 = count__21731_21763;
var G__21769 = (i__21732_21764 + (1));
seq__21729_21761 = G__21766;
chunk__21730_21762 = G__21767;
count__21731_21763 = G__21768;
i__21732_21764 = G__21769;
continue;
} else {
var temp__5720__auto___21770 = cljs.core.seq.call(null,seq__21729_21761);
if(temp__5720__auto___21770){
var seq__21729_21771__$1 = temp__5720__auto___21770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21729_21771__$1)){
var c__4556__auto___21772 = cljs.core.chunk_first.call(null,seq__21729_21771__$1);
var G__21773 = cljs.core.chunk_rest.call(null,seq__21729_21771__$1);
var G__21774 = c__4556__auto___21772;
var G__21775 = cljs.core.count.call(null,c__4556__auto___21772);
var G__21776 = (0);
seq__21729_21761 = G__21773;
chunk__21730_21762 = G__21774;
count__21731_21763 = G__21775;
i__21732_21764 = G__21776;
continue;
} else {
var f_21777 = cljs.core.first.call(null,seq__21729_21771__$1);
cljs.core.println.call(null,"  ",f_21777);


var G__21778 = cljs.core.next.call(null,seq__21729_21771__$1);
var G__21779 = null;
var G__21780 = (0);
var G__21781 = (0);
seq__21729_21761 = G__21778;
chunk__21730_21762 = G__21779;
count__21731_21763 = G__21780;
i__21732_21764 = G__21781;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21782 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21782);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21782)))?cljs.core.second.call(null,arglists_21782):arglists_21782));
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
var seq__21733_21783 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21734_21784 = null;
var count__21735_21785 = (0);
var i__21736_21786 = (0);
while(true){
if((i__21736_21786 < count__21735_21785)){
var vec__21747_21787 = cljs.core._nth.call(null,chunk__21734_21784,i__21736_21786);
var name_21788 = cljs.core.nth.call(null,vec__21747_21787,(0),null);
var map__21750_21789 = cljs.core.nth.call(null,vec__21747_21787,(1),null);
var map__21750_21790__$1 = (((((!((map__21750_21789 == null))))?(((((map__21750_21789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21750_21789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21750_21789):map__21750_21789);
var doc_21791 = cljs.core.get.call(null,map__21750_21790__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21792 = cljs.core.get.call(null,map__21750_21790__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21788);

cljs.core.println.call(null," ",arglists_21792);

if(cljs.core.truth_(doc_21791)){
cljs.core.println.call(null," ",doc_21791);
} else {
}


var G__21793 = seq__21733_21783;
var G__21794 = chunk__21734_21784;
var G__21795 = count__21735_21785;
var G__21796 = (i__21736_21786 + (1));
seq__21733_21783 = G__21793;
chunk__21734_21784 = G__21794;
count__21735_21785 = G__21795;
i__21736_21786 = G__21796;
continue;
} else {
var temp__5720__auto___21797 = cljs.core.seq.call(null,seq__21733_21783);
if(temp__5720__auto___21797){
var seq__21733_21798__$1 = temp__5720__auto___21797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21733_21798__$1)){
var c__4556__auto___21799 = cljs.core.chunk_first.call(null,seq__21733_21798__$1);
var G__21800 = cljs.core.chunk_rest.call(null,seq__21733_21798__$1);
var G__21801 = c__4556__auto___21799;
var G__21802 = cljs.core.count.call(null,c__4556__auto___21799);
var G__21803 = (0);
seq__21733_21783 = G__21800;
chunk__21734_21784 = G__21801;
count__21735_21785 = G__21802;
i__21736_21786 = G__21803;
continue;
} else {
var vec__21752_21804 = cljs.core.first.call(null,seq__21733_21798__$1);
var name_21805 = cljs.core.nth.call(null,vec__21752_21804,(0),null);
var map__21755_21806 = cljs.core.nth.call(null,vec__21752_21804,(1),null);
var map__21755_21807__$1 = (((((!((map__21755_21806 == null))))?(((((map__21755_21806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21755_21806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21755_21806):map__21755_21806);
var doc_21808 = cljs.core.get.call(null,map__21755_21807__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21809 = cljs.core.get.call(null,map__21755_21807__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21805);

cljs.core.println.call(null," ",arglists_21809);

if(cljs.core.truth_(doc_21808)){
cljs.core.println.call(null," ",doc_21808);
} else {
}


var G__21810 = cljs.core.next.call(null,seq__21733_21798__$1);
var G__21811 = null;
var G__21812 = (0);
var G__21813 = (0);
seq__21733_21783 = G__21810;
chunk__21734_21784 = G__21811;
count__21735_21785 = G__21812;
i__21736_21786 = G__21813;
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

var seq__21757 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21758 = null;
var count__21759 = (0);
var i__21760 = (0);
while(true){
if((i__21760 < count__21759)){
var role = cljs.core._nth.call(null,chunk__21758,i__21760);
var temp__5720__auto___21814__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___21814__$1)){
var spec_21815 = temp__5720__auto___21814__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21815));
} else {
}


var G__21816 = seq__21757;
var G__21817 = chunk__21758;
var G__21818 = count__21759;
var G__21819 = (i__21760 + (1));
seq__21757 = G__21816;
chunk__21758 = G__21817;
count__21759 = G__21818;
i__21760 = G__21819;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__21757);
if(temp__5720__auto____$1){
var seq__21757__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21757__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__21757__$1);
var G__21820 = cljs.core.chunk_rest.call(null,seq__21757__$1);
var G__21821 = c__4556__auto__;
var G__21822 = cljs.core.count.call(null,c__4556__auto__);
var G__21823 = (0);
seq__21757 = G__21820;
chunk__21758 = G__21821;
count__21759 = G__21822;
i__21760 = G__21823;
continue;
} else {
var role = cljs.core.first.call(null,seq__21757__$1);
var temp__5720__auto___21824__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___21824__$2)){
var spec_21825 = temp__5720__auto___21824__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21825));
} else {
}


var G__21826 = cljs.core.next.call(null,seq__21757__$1);
var G__21827 = null;
var G__21828 = (0);
var G__21829 = (0);
seq__21757 = G__21826;
chunk__21758 = G__21827;
count__21759 = G__21828;
i__21760 = G__21829;
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
var G__21830 = cljs.core.conj.call(null,via,t);
var G__21831 = cljs.core.ex_cause.call(null,t);
via = G__21830;
t = G__21831;
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
var map__21834 = datafied_throwable;
var map__21834__$1 = (((((!((map__21834 == null))))?(((((map__21834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21834):map__21834);
var via = cljs.core.get.call(null,map__21834__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__21834__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__21834__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21835 = cljs.core.last.call(null,via);
var map__21835__$1 = (((((!((map__21835 == null))))?(((((map__21835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21835):map__21835);
var type = cljs.core.get.call(null,map__21835__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__21835__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__21835__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21836 = data;
var map__21836__$1 = (((((!((map__21836 == null))))?(((((map__21836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21836):map__21836);
var problems = cljs.core.get.call(null,map__21836__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__21836__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__21836__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21837 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__21837__$1 = (((((!((map__21837 == null))))?(((((map__21837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21837):map__21837);
var top_data = map__21837__$1;
var source = cljs.core.get.call(null,map__21837__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__21842 = phase;
var G__21842__$1 = (((G__21842 instanceof cljs.core.Keyword))?G__21842.fqn:null);
switch (G__21842__$1) {
case "read-source":
var map__21843 = data;
var map__21843__$1 = (((((!((map__21843 == null))))?(((((map__21843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21843):map__21843);
var line = cljs.core.get.call(null,map__21843__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21843__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21845 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__21845__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21845,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21845);
var G__21845__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21845__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21845__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21845__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21845__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21846 = top_data;
var G__21846__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__21846,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21846);
var G__21846__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__21846__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21846__$1);
var G__21846__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21846__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21846__$2);
var G__21846__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21846__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21846__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21846__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21846__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21847 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21847,(0),null);
var method = cljs.core.nth.call(null,vec__21847,(1),null);
var file = cljs.core.nth.call(null,vec__21847,(2),null);
var line = cljs.core.nth.call(null,vec__21847,(3),null);
var G__21850 = top_data;
var G__21850__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__21850,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21850);
var G__21850__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__21850__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21850__$1);
var G__21850__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__21850__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21850__$2);
var G__21850__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__21850__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21850__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__21850__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21850__$4;
}

break;
case "execution":
var vec__21851 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__21851,(0),null);
var method = cljs.core.nth.call(null,vec__21851,(1),null);
var file = cljs.core.nth.call(null,vec__21851,(2),null);
var line = cljs.core.nth.call(null,vec__21851,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__21833_SHARP_){
var or__4126__auto__ = (p1__21833_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__21833_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__21854 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21854__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__21854,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21854);
var G__21854__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__21854__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21854__$1);
var G__21854__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__21854__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21854__$2);
var G__21854__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__21854__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21854__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__21854__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21854__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21842__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21858){
var map__21859 = p__21858;
var map__21859__$1 = (((((!((map__21859 == null))))?(((((map__21859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21859):map__21859);
var triage_data = map__21859__$1;
var phase = cljs.core.get.call(null,map__21859__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__21859__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__21859__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__21859__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__21859__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__21859__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__21859__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__21859__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__21861 = phase;
var G__21861__$1 = (((G__21861 instanceof cljs.core.Keyword))?G__21861.fqn:null);
switch (G__21861__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21862_21871 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21863_21872 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21864_21873 = true;
var _STAR_print_fn_STAR__temp_val__21865_21874 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21864_21873);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21865_21874);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__21856_SHARP_){
return cljs.core.dissoc.call(null,p1__21856_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21863_21872);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21862_21871);
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
var _STAR_print_newline_STAR__orig_val__21866_21875 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21867_21876 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21868_21877 = true;
var _STAR_print_fn_STAR__temp_val__21869_21878 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21868_21877);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21869_21878);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__21857_SHARP_){
return cljs.core.dissoc.call(null,p1__21857_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21867_21876);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21866_21875);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21861__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
