// Compiled by ClojureScript 1.10.773 {}
goog.provide('ysera.random');
goog.require('cljs.core');
goog.require('ysera.test');
goog.require('ysera.collections');
ysera.random.get_pseudo_random_number = (function ysera$random$get_pseudo_random_number(seed){
var xor_right = (function (x,n){
return (x ^ (x >> n));
});
var xor_left = (function (x,n){
return (x ^ (x << n));
});
return ((1) + xor_left.call(null,xor_right.call(null,xor_left.call(null,seed,(21)),(35)),(4)));
});
/**
 * Returns a new seed and a random integer x such that 0 <= x < max.
 */
ysera.random.get_random_int = (function ysera$random$get_random_int(seed,max){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ysera.random.get_pseudo_random_number.call(null,seed),cljs.core.mod.call(null,seed,max)], null);
});
ysera.random.get_random_int.cljs$lang$test = (function (){
var actual__21721__auto___21910 = ysera.random.get_random_int.call(null,(1),(1));
var expected__21722__auto___21911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(35651602),(0)], null);
var equal__21723__auto___21912 = cljs.core._EQ_.call(null,actual__21721__auto___21910,expected__21722__auto___21911);
if(equal__21723__auto___21912){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21910,"\nExpected:\t",expected__21722__auto___21911);
}

try{var values__17061__auto___21913 = (new cljs.core.List(null,actual__21721__auto___21910,(new cljs.core.List(null,expected__21722__auto___21911,null,(1),null)),(2),null));
var result__17062__auto___21914 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21913);
if(cljs.core.truth_(result__17062__auto___21914)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21913),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21913),null,(1),null)),(2),null)),null]));
}

}catch (e21908){var t__17112__auto___21915 = e21908;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21915,null]));
}
var actual__21721__auto__ = ysera.random.get_random_int.call(null,(35651602),(12));
var expected__21722__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1130298060341683),(10)], null);
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
}catch (e21909){var t__17112__auto__ = e21909;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto__,null]));
}});
/**
 * Returns a new seed and a random element of the collection.
 */
ysera.random.random_nth = (function ysera$random$random_nth(seed,coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,null], null);
} else {
var vec__21916 = ysera.random.get_random_int.call(null,seed,cljs.core.count.call(null,coll));
var new_seed = cljs.core.nth.call(null,vec__21916,(0),null);
var random_number = cljs.core.nth.call(null,vec__21916,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_seed,cljs.core.nth.call(null,coll,random_number)], null);
}
});
ysera.random.random_nth.cljs$lang$test = (function (){
var actual__21721__auto___21921 = ysera.random.random_nth.call(null,(0),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e","f"], null));
var expected__21722__auto___21922 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"a"], null);
var equal__21723__auto___21923 = cljs.core._EQ_.call(null,actual__21721__auto___21921,expected__21722__auto___21922);
if(equal__21723__auto___21923){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21921,"\nExpected:\t",expected__21722__auto___21922);
}

try{var values__17061__auto___21924 = (new cljs.core.List(null,actual__21721__auto___21921,(new cljs.core.List(null,expected__21722__auto___21922,null,(1),null)),(2),null));
var result__17062__auto___21925 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21924);
if(cljs.core.truth_(result__17062__auto___21925)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21924),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21924),null,(1),null)),(2),null)),null]));
}

}catch (e21919){var t__17112__auto___21926 = e21919;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21926,null]));
}
var actual__21721__auto__ = ysera.random.random_nth.call(null,(0),cljs.core.PersistentVector.EMPTY);
var expected__21722__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null);
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
}catch (e21920){var t__17112__auto__ = e21920;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto__,null]));
}});
/**
 * Returns a new seed and (at most) n different random elements from the collection.
 * If the collection contains less elements than n, all elements will be returned in a random order.
 */
ysera.random.take_n_random = (function ysera$random$take_n_random(seed,n,coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,null], null);
} else {
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,coll))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,coll], null);
} else {
var vec__21927 = cljs.core.reduce.call(null,(function (p__21930,_){
var vec__21931 = p__21930;
var seed__$1 = cljs.core.nth.call(null,vec__21931,(0),null);
var result = cljs.core.nth.call(null,vec__21931,(1),null);
var rest = cljs.core.nth.call(null,vec__21931,(2),null);
var vec__21934 = ysera.random.random_nth.call(null,seed__$1,rest);
var seed__$2 = cljs.core.nth.call(null,vec__21934,(0),null);
var el = cljs.core.nth.call(null,vec__21934,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed__$2,cljs.core.conj.call(null,result,el),ysera.collections.remove_one.call(null,rest,el)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,cljs.core.PersistentVector.EMPTY,coll], null),cljs.core.range.call(null,n));
var new_seed = cljs.core.nth.call(null,vec__21927,(0),null);
var result = cljs.core.nth.call(null,vec__21927,(1),null);
var _ = cljs.core.nth.call(null,vec__21927,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_seed,cljs.core.remove.call(null,cljs.core.nil_QMARK_,result)], null);

}
}
});
ysera.random.take_n_random.cljs$lang$test = (function (){
var actual__21721__auto___21942 = ysera.random.take_n_random.call(null,(0),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d"], null));
var expected__21722__auto___21943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1130298060341683),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","c","b"], null)], null);
var equal__21723__auto___21944 = cljs.core._EQ_.call(null,actual__21721__auto___21942,expected__21722__auto___21943);
if(equal__21723__auto___21944){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21942,"\nExpected:\t",expected__21722__auto___21943);
}

try{var values__17061__auto___21945 = (new cljs.core.List(null,actual__21721__auto___21942,(new cljs.core.List(null,expected__21722__auto___21943,null,(1),null)),(2),null));
var result__17062__auto___21946 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21945);
if(cljs.core.truth_(result__17062__auto___21946)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21945),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21945),null,(1),null)),(2),null)),null]));
}

}catch (e21937){var t__17112__auto___21947 = e21937;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21947,null]));
}
var actual__21721__auto___21948 = ysera.random.take_n_random.call(null,(2),(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","a","f"], null));
var expected__21722__auto___21949 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","a","f"], null)], null);
var equal__21723__auto___21950 = cljs.core._EQ_.call(null,actual__21721__auto___21948,expected__21722__auto___21949);
if(equal__21723__auto___21950){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21948,"\nExpected:\t",expected__21722__auto___21949);
}

try{var values__17061__auto___21951 = (new cljs.core.List(null,actual__21721__auto___21948,(new cljs.core.List(null,expected__21722__auto___21949,null,(1),null)),(2),null));
var result__17062__auto___21952 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21951);
if(cljs.core.truth_(result__17062__auto___21952)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21951),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21951),null,(1),null)),(2),null)),null]));
}

}catch (e21938){var t__17112__auto___21953 = e21938;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21953,null]));
}
var actual__21721__auto___21954 = ysera.random.take_n_random.call(null,(2),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","a"], null));
var expected__21722__auto___21955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2260595942425364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","a"], null)], null);
var equal__21723__auto___21956 = cljs.core._EQ_.call(null,actual__21721__auto___21954,expected__21722__auto___21955);
if(equal__21723__auto___21956){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21954,"\nExpected:\t",expected__21722__auto___21955);
}

try{var values__17061__auto___21957 = (new cljs.core.List(null,actual__21721__auto___21954,(new cljs.core.List(null,expected__21722__auto___21955,null,(1),null)),(2),null));
var result__17062__auto___21958 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21957);
if(cljs.core.truth_(result__17062__auto___21958)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21957),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21957),null,(1),null)),(2),null)),null]));
}

}catch (e21939){var t__17112__auto___21959 = e21939;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21959,null]));
}
var actual__21721__auto___21960 = ysera.random.take_n_random.call(null,(2),(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null));
var expected__21722__auto___21961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(71303203),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null)], null);
var equal__21723__auto___21962 = cljs.core._EQ_.call(null,actual__21721__auto___21960,expected__21722__auto___21961);
if(equal__21723__auto___21962){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21960,"\nExpected:\t",expected__21722__auto___21961);
}

try{var values__17061__auto___21963 = (new cljs.core.List(null,actual__21721__auto___21960,(new cljs.core.List(null,expected__21722__auto___21961,null,(1),null)),(2),null));
var result__17062__auto___21964 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21963);
if(cljs.core.truth_(result__17062__auto___21964)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21963),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21963),null,(1),null)),(2),null)),null]));
}

}catch (e21940){var t__17112__auto___21965 = e21940;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21965,null]));
}
var actual__21721__auto__ = ysera.random.take_n_random.call(null,(2),(3),cljs.core.PersistentVector.EMPTY);
var expected__21722__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),null], null);
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
}catch (e21941){var t__17112__auto__ = e21941;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto__,null]));
}});
/**
 * Returns a new seed and the collection shuffled.
 */
ysera.random.shuffle_with_seed = (function ysera$random$shuffle_with_seed(seed,coll){
var vec__21966 = cljs.core.reduce.call(null,(function (p__21969,_){
var vec__21970 = p__21969;
var seed__$1 = cljs.core.nth.call(null,vec__21970,(0),null);
var shuffled_coll = cljs.core.nth.call(null,vec__21970,(1),null);
var coll__$1 = cljs.core.nth.call(null,vec__21970,(2),null);
var vec__21973 = ysera.random.random_nth.call(null,seed__$1,coll__$1);
var seed__$2 = cljs.core.nth.call(null,vec__21973,(0),null);
var item = cljs.core.nth.call(null,vec__21973,(1),null);
var coll__$2 = ysera.collections.remove_one.call(null,coll__$1,item);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed__$2,cljs.core.conj.call(null,shuffled_coll,item),coll__$2], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,cljs.core.PersistentVector.EMPTY,coll], null),cljs.core.range.call(null,cljs.core.count.call(null,coll)));
var new_seed = cljs.core.nth.call(null,vec__21966,(0),null);
var shuffled_coll = cljs.core.nth.call(null,vec__21966,(1),null);
var _ = cljs.core.nth.call(null,vec__21966,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_seed,shuffled_coll], null);
});
ysera.random.shuffle_with_seed.cljs$lang$test = (function (){
var actual__21721__auto___21978 = ysera.random.shuffle_with_seed.call(null,(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",new cljs.core.Keyword(null,"b","b",1482224470),(3),"d"], null));
var expected__21722__auto___21979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-9136436700791295257),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(3),"d","a"], null)], null);
var equal__21723__auto___21980 = cljs.core._EQ_.call(null,actual__21721__auto___21978,expected__21722__auto___21979);
if(equal__21723__auto___21980){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__21721__auto___21978,"\nExpected:\t",expected__21722__auto___21979);
}

try{var values__17061__auto___21981 = (new cljs.core.List(null,actual__21721__auto___21978,(new cljs.core.List(null,expected__21722__auto___21979,null,(1),null)),(2),null));
var result__17062__auto___21982 = cljs.core.apply.call(null,cljs.core._EQ_,values__17061__auto___21981);
if(cljs.core.truth_(result__17062__auto___21982)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21981),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17061__auto___21981),null,(1),null)),(2),null)),null]));
}

}catch (e21976){var t__17112__auto___21983 = e21976;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto___21983,null]));
}
var actual__21721__auto__ = ysera.random.shuffle_with_seed.call(null,(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2)], null));
var expected__21722__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(39562792388305809),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1)], null)], null);
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
}catch (e21977){var t__17112__auto__ = e21977;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__21721__auto__","actual__21721__auto__",1958599437,null),new cljs.core.Symbol(null,"expected__21722__auto__","expected__21722__auto__",-1180605317,null)),null,t__17112__auto__,null]));
}});
/**
 * Creates a random uuid-string.
 */
ysera.random.get_random_uuid = (function ysera$random$get_random_uuid(){
return cljs.core.random_uuid.call(null);
});
ysera.random.get_random_uuid.cljs$lang$test = (function (){
try{var value__17065__auto__ = (function (){var pattern = /[\w|\d]{8}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{11}/;
return cljs.core.re_find.call(null,pattern,ysera.random.get_random_uuid.call(null));
})();
if(cljs.core.truth_(value__17065__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/patric/dev/clojure/game-2048/resources/public/cljs-out/test/ysera/random.cljc",54,new cljs.core.Keyword(null,"pass","pass",1574159993),16,84,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),/[\w|\d]{8}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{11}/], null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),cljs.core.list(new cljs.core.Symbol(null,"get-random-uuid","get-random-uuid",976861101,null)))),85,value__17065__auto__,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/patric/dev/clojure/game-2048/resources/public/cljs-out/test/ysera/random.cljc",54,new cljs.core.Keyword(null,"fail","fail",1706214930),16,84,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),/[\w|\d]{8}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{11}/], null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),cljs.core.list(new cljs.core.Symbol(null,"get-random-uuid","get-random-uuid",976861101,null)))),85,value__17065__auto__,null]));
}

return value__17065__auto__;
}catch (e21984){var t__17112__auto__ = e21984;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/patric/dev/clojure/game-2048/resources/public/cljs-out/test/ysera/random.cljc",54,new cljs.core.Keyword(null,"error","error",-978969032),16,84,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),/[\w|\d]{8}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{11}/], null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),cljs.core.list(new cljs.core.Symbol(null,"get-random-uuid","get-random-uuid",976861101,null)))),85,t__17112__auto__,null]));
}});

//# sourceMappingURL=random.js.map
