// Compiled by ClojureScript 1.10.773 {}
goog.provide('ysera.collections');
goog.require('cljs.core');
goog.require('ysera.test');
/**
 * Gets the index of the given element of the collection.
 */
ysera.collections.index_of = (function ysera$collections$index_of(coll,x){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (y,z){
if(cljs.core._EQ_.call(null,z,x)){
return y;
} else {
return null;
}
}),coll));
});
ysera.collections.index_of.cljs$lang$test = (function (){
var actual__21721__auto___21832 = ysera.collections.index_of.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"b");
var expected__21722__auto___21833 = (1);
var equal__21723__auto___21834 = cljs.core._EQ_.call(null,actual__21721__auto___21832,expected__21722__auto___21833);
if(equal__21723__auto___21834){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21832,"\nExpected:\t",expected__21722__auto___21833);
}

try{var values__17061__auto___21835 = (new cljs.core.List(null,actual__21721__auto___21832,(new cljs.core.List(null,expected__21722__auto___21833,null,(1),null)),(2),null));
var result__17062__auto___21836 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21835);
if(cljs.core.truth_(result__17062__auto___21836)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21835),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21835),null,(1),null)),(2),null)),null]));
}

}catch (e21829){var t__17112__auto___21837 = e21829;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21837,null]));
}
var actual__21721__auto___21838 = ysera.collections.index_of.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"z");
var expected__21722__auto___21839 = null;
var equal__21723__auto___21840 = cljs.core._EQ_.call(null,actual__21721__auto___21838,expected__21722__auto___21839);
if(equal__21723__auto___21840){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21838,"\nExpected:\t",expected__21722__auto___21839);
}

try{var values__17061__auto___21841 = (new cljs.core.List(null,actual__21721__auto___21838,(new cljs.core.List(null,expected__21722__auto___21839,null,(1),null)),(2),null));
var result__17062__auto___21842 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21841);
if(cljs.core.truth_(result__17062__auto___21842)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21841),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21841),null,(1),null)),(2),null)),null]));
}

}catch (e21830){var t__17112__auto___21843 = e21830;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21843,null]));
}
var actual__21721__auto__ = ysera.collections.index_of.call(null,cljs.core.PersistentVector.EMPTY,"b");
var expected__21722__auto__ = null;
var equal__21723__auto__ = cljs.core._EQ_.call(null,actual__21721__auto__,expected__21722__auto__);
if(equal__21723__auto__){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto__,"\nExpected:\t",expected__21722__auto__);
}

try{var values__17061__auto__ = (new cljs.core.List(null,actual__21721__auto__,(new cljs.core.List(null,expected__21722__auto__,null,(1),null)),(2),null));
var result__17062__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto__);
if(cljs.core.truth_(result__17062__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto__),null,(1),null)),(2),null)),null]));
}

return result__17062__auto__;
}catch (e21831){var t__17112__auto__ = e21831;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto__,null]));
}});
/**
 * Determines if the given element is contained in the given collection.
 */
ysera.collections.seq_contains_QMARK_ = (function ysera$collections$seq_contains_QMARK_(coll,x){
return (!((ysera.collections.index_of.call(null,coll,x) == null)));
});
ysera.collections.seq_contains_QMARK_.cljs$lang$test = (function (){
try{var values__17061__auto__ = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),(new cljs.core.List(null,"a",null,(1),null)),(2),null));
var result__17062__auto__ = cljs.core.apply.call(null,ysera.collections.seq_contains_QMARK_,values__17061__auto__);
if(cljs.core.truth_(result__17062__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/patric/dev/clojure/game-2048/resources/public/cljs-out/test/ysera/collections.cljc",49,new cljs.core.Keyword(null,"pass","pass",1574159993),16,19,cljs.core.list(new cljs.core.Symbol(null,"seq-contains?","seq-contains?",-1614780050,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"a"),19,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq-contains?","seq-contains?",-1614780050,null),values__17061__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/patric/dev/clojure/game-2048/resources/public/cljs-out/test/ysera/collections.cljc",49,new cljs.core.Keyword(null,"fail","fail",1706214930),16,19,cljs.core.list(new cljs.core.Symbol(null,"seq-contains?","seq-contains?",-1614780050,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"a"),19,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq-contains?","seq-contains?",-1614780050,null),values__17061__auto__),null,(1),null)),(2),null)),null]));
}

return result__17062__auto__;
}catch (e21844){var t__17112__auto__ = e21844;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/patric/dev/clojure/game-2048/resources/public/cljs-out/test/ysera/collections.cljc",49,new cljs.core.Keyword(null,"error","error",-978969032),16,19,cljs.core.list(new cljs.core.Symbol(null,"seq-contains?","seq-contains?",-1614780050,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"a"),19,t__17112__auto__,null]));
}});
/**
 * Removes one instance of the given element in the given collection.
 */
ysera.collections.remove_one = (function ysera$collections$remove_one(coll,x){
var vec__21845 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,x),coll);
var n = cljs.core.nth.call(null,vec__21845,(0),null);
var m = cljs.core.nth.call(null,vec__21845,(1),null);
return cljs.core.concat.call(null,n,cljs.core.rest.call(null,m));
});
ysera.collections.remove_one.cljs$lang$test = (function (){
var actual__21721__auto___21850 = ysera.collections.remove_one.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"a");
var expected__21722__auto___21851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","c"], null);
var equal__21723__auto___21852 = cljs.core._EQ_.call(null,actual__21721__auto___21850,expected__21722__auto___21851);
if(equal__21723__auto___21852){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21850,"\nExpected:\t",expected__21722__auto___21851);
}

try{var values__17061__auto___21853 = (new cljs.core.List(null,actual__21721__auto___21850,(new cljs.core.List(null,expected__21722__auto___21851,null,(1),null)),(2),null));
var result__17062__auto___21854 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21853);
if(cljs.core.truth_(result__17062__auto___21854)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21853),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21853),null,(1),null)),(2),null)),null]));
}

}catch (e21848){var t__17112__auto___21855 = e21848;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21855,null]));
}
var actual__21721__auto__ = ysera.collections.remove_one.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","a","c"], null),"a");
var expected__21722__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","c"], null);
var equal__21723__auto__ = cljs.core._EQ_.call(null,actual__21721__auto__,expected__21722__auto__);
if(equal__21723__auto__){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto__,"\nExpected:\t",expected__21722__auto__);
}

try{var values__17061__auto__ = (new cljs.core.List(null,actual__21721__auto__,(new cljs.core.List(null,expected__21722__auto__,null,(1),null)),(2),null));
var result__17062__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto__);
if(cljs.core.truth_(result__17062__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto__),null,(1),null)),(2),null)),null]));
}

return result__17062__auto__;
}catch (e21849){var t__17112__auto__ = e21849;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto__,null]));
}});
/**
 * Converts the collection to nil if it is empty.
 */
ysera.collections.empty__GT_nil = (function ysera$collections$empty__GT_nil(coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return null;
} else {
return coll;
}
});
ysera.collections.empty__GT_nil.cljs$lang$test = (function (){
var actual__21721__auto___21864 = ysera.collections.empty__GT_nil.call(null,cljs.core.PersistentVector.EMPTY);
var expected__21722__auto___21865 = null;
var equal__21723__auto___21866 = cljs.core._EQ_.call(null,actual__21721__auto___21864,expected__21722__auto___21865);
if(equal__21723__auto___21866){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21864,"\nExpected:\t",expected__21722__auto___21865);
}

try{var values__17061__auto___21867 = (new cljs.core.List(null,actual__21721__auto___21864,(new cljs.core.List(null,expected__21722__auto___21865,null,(1),null)),(2),null));
var result__17062__auto___21868 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21867);
if(cljs.core.truth_(result__17062__auto___21868)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21867),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21867),null,(1),null)),(2),null)),null]));
}

}catch (e21856){var t__17112__auto___21869 = e21856;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21869,null]));
}
var actual__21721__auto___21870 = ysera.collections.empty__GT_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
var expected__21722__auto___21871 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null);
var equal__21723__auto___21872 = cljs.core._EQ_.call(null,actual__21721__auto___21870,expected__21722__auto___21871);
if(equal__21723__auto___21872){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21870,"\nExpected:\t",expected__21722__auto___21871);
}

try{var values__17061__auto___21873 = (new cljs.core.List(null,actual__21721__auto___21870,(new cljs.core.List(null,expected__21722__auto___21871,null,(1),null)),(2),null));
var result__17062__auto___21874 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21873);
if(cljs.core.truth_(result__17062__auto___21874)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21873),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21873),null,(1),null)),(2),null)),null]));
}

}catch (e21857){var t__17112__auto___21875 = e21857;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21875,null]));
}
var actual__21721__auto___21876 = ysera.collections.empty__GT_nil.call(null,cljs.core.List.EMPTY);
var expected__21722__auto___21877 = null;
var equal__21723__auto___21878 = cljs.core._EQ_.call(null,actual__21721__auto___21876,expected__21722__auto___21877);
if(equal__21723__auto___21878){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21876,"\nExpected:\t",expected__21722__auto___21877);
}

try{var values__17061__auto___21879 = (new cljs.core.List(null,actual__21721__auto___21876,(new cljs.core.List(null,expected__21722__auto___21877,null,(1),null)),(2),null));
var result__17062__auto___21880 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21879);
if(cljs.core.truth_(result__17062__auto___21880)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21879),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21879),null,(1),null)),(2),null)),null]));
}

}catch (e21858){var t__17112__auto___21881 = e21858;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21881,null]));
}
var actual__21721__auto___21882 = ysera.collections.empty__GT_nil.call(null,cljs.core.list((1)));
var expected__21722__auto___21883 = cljs.core.list((1));
var equal__21723__auto___21884 = cljs.core._EQ_.call(null,actual__21721__auto___21882,expected__21722__auto___21883);
if(equal__21723__auto___21884){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21882,"\nExpected:\t",expected__21722__auto___21883);
}

try{var values__17061__auto___21885 = (new cljs.core.List(null,actual__21721__auto___21882,(new cljs.core.List(null,expected__21722__auto___21883,null,(1),null)),(2),null));
var result__17062__auto___21886 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21885);
if(cljs.core.truth_(result__17062__auto___21886)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21885),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21885),null,(1),null)),(2),null)),null]));
}

}catch (e21859){var t__17112__auto___21887 = e21859;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21887,null]));
}
var actual__21721__auto___21888 = ysera.collections.empty__GT_nil.call(null,cljs.core.PersistentArrayMap.EMPTY);
var expected__21722__auto___21889 = null;
var equal__21723__auto___21890 = cljs.core._EQ_.call(null,actual__21721__auto___21888,expected__21722__auto___21889);
if(equal__21723__auto___21890){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21888,"\nExpected:\t",expected__21722__auto___21889);
}

try{var values__17061__auto___21891 = (new cljs.core.List(null,actual__21721__auto___21888,(new cljs.core.List(null,expected__21722__auto___21889,null,(1),null)),(2),null));
var result__17062__auto___21892 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21891);
if(cljs.core.truth_(result__17062__auto___21892)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21891),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21891),null,(1),null)),(2),null)),null]));
}

}catch (e21860){var t__17112__auto___21893 = e21860;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21893,null]));
}
var actual__21721__auto___21894 = ysera.collections.empty__GT_nil.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null));
var expected__21722__auto___21895 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null);
var equal__21723__auto___21896 = cljs.core._EQ_.call(null,actual__21721__auto___21894,expected__21722__auto___21895);
if(equal__21723__auto___21896){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21894,"\nExpected:\t",expected__21722__auto___21895);
}

try{var values__17061__auto___21897 = (new cljs.core.List(null,actual__21721__auto___21894,(new cljs.core.List(null,expected__21722__auto___21895,null,(1),null)),(2),null));
var result__17062__auto___21898 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21897);
if(cljs.core.truth_(result__17062__auto___21898)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21897),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21897),null,(1),null)),(2),null)),null]));
}

}catch (e21861){var t__17112__auto___21899 = e21861;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21899,null]));
}
var actual__21721__auto___21900 = ysera.collections.empty__GT_nil.call(null,cljs.core.PersistentHashSet.EMPTY);
var expected__21722__auto___21901 = null;
var equal__21723__auto___21902 = cljs.core._EQ_.call(null,actual__21721__auto___21900,expected__21722__auto___21901);
if(equal__21723__auto___21902){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21900,"\nExpected:\t",expected__21722__auto___21901);
}

try{var values__17061__auto___21903 = (new cljs.core.List(null,actual__21721__auto___21900,(new cljs.core.List(null,expected__21722__auto___21901,null,(1),null)),(2),null));
var result__17062__auto___21904 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21903);
if(cljs.core.truth_(result__17062__auto___21904)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21903),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21903),null,(1),null)),(2),null)),null]));
}

}catch (e21862){var t__17112__auto___21905 = e21862;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21905,null]));
}
var actual__21721__auto__ = ysera.collections.empty__GT_nil.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null));
var expected__21722__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null);
var equal__21723__auto__ = cljs.core._EQ_.call(null,actual__21721__auto__,expected__21722__auto__);
if(equal__21723__auto__){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto__,"\nExpected:\t",expected__21722__auto__);
}

try{var values__17061__auto__ = (new cljs.core.List(null,actual__21721__auto__,(new cljs.core.List(null,expected__21722__auto__,null,(1),null)),(2),null));
var result__17062__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto__);
if(cljs.core.truth_(result__17062__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto__),null,(1),null)),(2),null)),null]));
}

return result__17062__auto__;
}catch (e21863){var t__17112__auto__ = e21863;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto__,null]));
}});

//# sourceMappingURL=collections.js.map
