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
var actual__23754__auto___23801 = ysera.collections.index_of.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"b");
var expected__23755__auto___23802 = (1);
var equal__23756__auto___23803 = cljs.core._EQ_.call(null,actual__23754__auto___23801,expected__23755__auto___23802);
if(equal__23756__auto___23803){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23801,"\nExpected:\t",expected__23755__auto___23802);
}

try{var values__17074__auto___23804 = (new cljs.core.List(null,actual__23754__auto___23801,(new cljs.core.List(null,expected__23755__auto___23802,null,(1),null)),(2),null));
var result__17075__auto___23805 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23804);
if(cljs.core.truth_(result__17075__auto___23805)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23804),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23804),null,(1),null)),(2),null)),null]));
}

}catch (e23798){var t__17125__auto___23806 = e23798;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23806,null]));
}
var actual__23754__auto___23807 = ysera.collections.index_of.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"z");
var expected__23755__auto___23808 = null;
var equal__23756__auto___23809 = cljs.core._EQ_.call(null,actual__23754__auto___23807,expected__23755__auto___23808);
if(equal__23756__auto___23809){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23807,"\nExpected:\t",expected__23755__auto___23808);
}

try{var values__17074__auto___23810 = (new cljs.core.List(null,actual__23754__auto___23807,(new cljs.core.List(null,expected__23755__auto___23808,null,(1),null)),(2),null));
var result__17075__auto___23811 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23810);
if(cljs.core.truth_(result__17075__auto___23811)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23810),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23810),null,(1),null)),(2),null)),null]));
}

}catch (e23799){var t__17125__auto___23812 = e23799;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23812,null]));
}
var actual__23754__auto__ = ysera.collections.index_of.call(null,cljs.core.PersistentVector.EMPTY,"b");
var expected__23755__auto__ = null;
var equal__23756__auto__ = cljs.core._EQ_.call(null,actual__23754__auto__,expected__23755__auto__);
if(equal__23756__auto__){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto__,"\nExpected:\t",expected__23755__auto__);
}

try{var values__17074__auto__ = (new cljs.core.List(null,actual__23754__auto__,(new cljs.core.List(null,expected__23755__auto__,null,(1),null)),(2),null));
var result__17075__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto__);
if(cljs.core.truth_(result__17075__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto__),null,(1),null)),(2),null)),null]));
}

return result__17075__auto__;
}catch (e23800){var t__17125__auto__ = e23800;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto__,null]));
}});
/**
 * Determines if the given element is contained in the given collection.
 */
ysera.collections.seq_contains_QMARK_ = (function ysera$collections$seq_contains_QMARK_(coll,x){
return (!((ysera.collections.index_of.call(null,coll,x) == null)));
});
ysera.collections.seq_contains_QMARK_.cljs$lang$test = (function (){
try{var values__17074__auto__ = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),(new cljs.core.List(null,"a",null,(1),null)),(2),null));
var result__17075__auto__ = cljs.core.apply.call(null,ysera.collections.seq_contains_QMARK_,values__17074__auto__);
if(cljs.core.truth_(result__17075__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/patric/dev/clojure/game-2048/resources/public/cljs-out/dev/ysera/collections.cljc",49,new cljs.core.Keyword(null,"pass","pass",1574159993),16,19,cljs.core.list(new cljs.core.Symbol(null,"seq-contains?","seq-contains?",-1614780050,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"a"),19,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq-contains?","seq-contains?",-1614780050,null),values__17074__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/patric/dev/clojure/game-2048/resources/public/cljs-out/dev/ysera/collections.cljc",49,new cljs.core.Keyword(null,"fail","fail",1706214930),16,19,cljs.core.list(new cljs.core.Symbol(null,"seq-contains?","seq-contains?",-1614780050,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"a"),19,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"seq-contains?","seq-contains?",-1614780050,null),values__17074__auto__),null,(1),null)),(2),null)),null]));
}

return result__17075__auto__;
}catch (e23813){var t__17125__auto__ = e23813;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/patric/dev/clojure/game-2048/resources/public/cljs-out/dev/ysera/collections.cljc",49,new cljs.core.Keyword(null,"error","error",-978969032),16,19,cljs.core.list(new cljs.core.Symbol(null,"seq-contains?","seq-contains?",-1614780050,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"a"),19,t__17125__auto__,null]));
}});
/**
 * Removes one instance of the given element in the given collection.
 */
ysera.collections.remove_one = (function ysera$collections$remove_one(coll,x){
var vec__23814 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,x),coll);
var n = cljs.core.nth.call(null,vec__23814,(0),null);
var m = cljs.core.nth.call(null,vec__23814,(1),null);
return cljs.core.concat.call(null,n,cljs.core.rest.call(null,m));
});
ysera.collections.remove_one.cljs$lang$test = (function (){
var actual__23754__auto___23819 = ysera.collections.remove_one.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c"], null),"a");
var expected__23755__auto___23820 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","c"], null);
var equal__23756__auto___23821 = cljs.core._EQ_.call(null,actual__23754__auto___23819,expected__23755__auto___23820);
if(equal__23756__auto___23821){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23819,"\nExpected:\t",expected__23755__auto___23820);
}

try{var values__17074__auto___23822 = (new cljs.core.List(null,actual__23754__auto___23819,(new cljs.core.List(null,expected__23755__auto___23820,null,(1),null)),(2),null));
var result__17075__auto___23823 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23822);
if(cljs.core.truth_(result__17075__auto___23823)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23822),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23822),null,(1),null)),(2),null)),null]));
}

}catch (e23817){var t__17125__auto___23824 = e23817;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23824,null]));
}
var actual__23754__auto__ = ysera.collections.remove_one.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","a","c"], null),"a");
var expected__23755__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","c"], null);
var equal__23756__auto__ = cljs.core._EQ_.call(null,actual__23754__auto__,expected__23755__auto__);
if(equal__23756__auto__){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto__,"\nExpected:\t",expected__23755__auto__);
}

try{var values__17074__auto__ = (new cljs.core.List(null,actual__23754__auto__,(new cljs.core.List(null,expected__23755__auto__,null,(1),null)),(2),null));
var result__17075__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto__);
if(cljs.core.truth_(result__17075__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto__),null,(1),null)),(2),null)),null]));
}

return result__17075__auto__;
}catch (e23818){var t__17125__auto__ = e23818;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto__,null]));
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
var actual__23754__auto___23833 = ysera.collections.empty__GT_nil.call(null,cljs.core.PersistentVector.EMPTY);
var expected__23755__auto___23834 = null;
var equal__23756__auto___23835 = cljs.core._EQ_.call(null,actual__23754__auto___23833,expected__23755__auto___23834);
if(equal__23756__auto___23835){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23833,"\nExpected:\t",expected__23755__auto___23834);
}

try{var values__17074__auto___23836 = (new cljs.core.List(null,actual__23754__auto___23833,(new cljs.core.List(null,expected__23755__auto___23834,null,(1),null)),(2),null));
var result__17075__auto___23837 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23836);
if(cljs.core.truth_(result__17075__auto___23837)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23836),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23836),null,(1),null)),(2),null)),null]));
}

}catch (e23825){var t__17125__auto___23838 = e23825;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23838,null]));
}
var actual__23754__auto___23839 = ysera.collections.empty__GT_nil.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
var expected__23755__auto___23840 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null);
var equal__23756__auto___23841 = cljs.core._EQ_.call(null,actual__23754__auto___23839,expected__23755__auto___23840);
if(equal__23756__auto___23841){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23839,"\nExpected:\t",expected__23755__auto___23840);
}

try{var values__17074__auto___23842 = (new cljs.core.List(null,actual__23754__auto___23839,(new cljs.core.List(null,expected__23755__auto___23840,null,(1),null)),(2),null));
var result__17075__auto___23843 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23842);
if(cljs.core.truth_(result__17075__auto___23843)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23842),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23842),null,(1),null)),(2),null)),null]));
}

}catch (e23826){var t__17125__auto___23844 = e23826;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23844,null]));
}
var actual__23754__auto___23845 = ysera.collections.empty__GT_nil.call(null,cljs.core.List.EMPTY);
var expected__23755__auto___23846 = null;
var equal__23756__auto___23847 = cljs.core._EQ_.call(null,actual__23754__auto___23845,expected__23755__auto___23846);
if(equal__23756__auto___23847){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23845,"\nExpected:\t",expected__23755__auto___23846);
}

try{var values__17074__auto___23848 = (new cljs.core.List(null,actual__23754__auto___23845,(new cljs.core.List(null,expected__23755__auto___23846,null,(1),null)),(2),null));
var result__17075__auto___23849 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23848);
if(cljs.core.truth_(result__17075__auto___23849)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23848),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23848),null,(1),null)),(2),null)),null]));
}

}catch (e23827){var t__17125__auto___23850 = e23827;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23850,null]));
}
var actual__23754__auto___23851 = ysera.collections.empty__GT_nil.call(null,cljs.core.list((1)));
var expected__23755__auto___23852 = cljs.core.list((1));
var equal__23756__auto___23853 = cljs.core._EQ_.call(null,actual__23754__auto___23851,expected__23755__auto___23852);
if(equal__23756__auto___23853){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23851,"\nExpected:\t",expected__23755__auto___23852);
}

try{var values__17074__auto___23854 = (new cljs.core.List(null,actual__23754__auto___23851,(new cljs.core.List(null,expected__23755__auto___23852,null,(1),null)),(2),null));
var result__17075__auto___23855 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23854);
if(cljs.core.truth_(result__17075__auto___23855)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23854),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23854),null,(1),null)),(2),null)),null]));
}

}catch (e23828){var t__17125__auto___23856 = e23828;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23856,null]));
}
var actual__23754__auto___23857 = ysera.collections.empty__GT_nil.call(null,cljs.core.PersistentArrayMap.EMPTY);
var expected__23755__auto___23858 = null;
var equal__23756__auto___23859 = cljs.core._EQ_.call(null,actual__23754__auto___23857,expected__23755__auto___23858);
if(equal__23756__auto___23859){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23857,"\nExpected:\t",expected__23755__auto___23858);
}

try{var values__17074__auto___23860 = (new cljs.core.List(null,actual__23754__auto___23857,(new cljs.core.List(null,expected__23755__auto___23858,null,(1),null)),(2),null));
var result__17075__auto___23861 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23860);
if(cljs.core.truth_(result__17075__auto___23861)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23860),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23860),null,(1),null)),(2),null)),null]));
}

}catch (e23829){var t__17125__auto___23862 = e23829;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23862,null]));
}
var actual__23754__auto___23863 = ysera.collections.empty__GT_nil.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null));
var expected__23755__auto___23864 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(1)], null);
var equal__23756__auto___23865 = cljs.core._EQ_.call(null,actual__23754__auto___23863,expected__23755__auto___23864);
if(equal__23756__auto___23865){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23863,"\nExpected:\t",expected__23755__auto___23864);
}

try{var values__17074__auto___23866 = (new cljs.core.List(null,actual__23754__auto___23863,(new cljs.core.List(null,expected__23755__auto___23864,null,(1),null)),(2),null));
var result__17075__auto___23867 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23866);
if(cljs.core.truth_(result__17075__auto___23867)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23866),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23866),null,(1),null)),(2),null)),null]));
}

}catch (e23830){var t__17125__auto___23868 = e23830;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23868,null]));
}
var actual__23754__auto___23869 = ysera.collections.empty__GT_nil.call(null,cljs.core.PersistentHashSet.EMPTY);
var expected__23755__auto___23870 = null;
var equal__23756__auto___23871 = cljs.core._EQ_.call(null,actual__23754__auto___23869,expected__23755__auto___23870);
if(equal__23756__auto___23871){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23869,"\nExpected:\t",expected__23755__auto___23870);
}

try{var values__17074__auto___23872 = (new cljs.core.List(null,actual__23754__auto___23869,(new cljs.core.List(null,expected__23755__auto___23870,null,(1),null)),(2),null));
var result__17075__auto___23873 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23872);
if(cljs.core.truth_(result__17075__auto___23873)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23872),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23872),null,(1),null)),(2),null)),null]));
}

}catch (e23831){var t__17125__auto___23874 = e23831;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23874,null]));
}
var actual__23754__auto__ = ysera.collections.empty__GT_nil.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null));
var expected__23755__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null);
var equal__23756__auto__ = cljs.core._EQ_.call(null,actual__23754__auto__,expected__23755__auto__);
if(equal__23756__auto__){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto__,"\nExpected:\t",expected__23755__auto__);
}

try{var values__17074__auto__ = (new cljs.core.List(null,actual__23754__auto__,(new cljs.core.List(null,expected__23755__auto__,null,(1),null)),(2),null));
var result__17075__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto__);
if(cljs.core.truth_(result__17075__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto__),null,(1),null)),(2),null)),null]));
}

return result__17075__auto__;
}catch (e23832){var t__17125__auto__ = e23832;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto__,null]));
}});

//# sourceMappingURL=collections.js.map
