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
var actual__23754__auto___23879 = ysera.random.get_random_int.call(null,(1),(1));
var expected__23755__auto___23880 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(35651602),(0)], null);
var equal__23756__auto___23881 = cljs.core._EQ_.call(null,actual__23754__auto___23879,expected__23755__auto___23880);
if(equal__23756__auto___23881){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23879,"\nExpected:\t",expected__23755__auto___23880);
}

try{var values__17074__auto___23882 = (new cljs.core.List(null,actual__23754__auto___23879,(new cljs.core.List(null,expected__23755__auto___23880,null,(1),null)),(2),null));
var result__17075__auto___23883 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23882);
if(cljs.core.truth_(result__17075__auto___23883)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23882),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23882),null,(1),null)),(2),null)),null]));
}

}catch (e23877){var t__17125__auto___23884 = e23877;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23884,null]));
}
var actual__23754__auto__ = ysera.random.get_random_int.call(null,(35651602),(12));
var expected__23755__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1130298060341683),(10)], null);
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
}catch (e23878){var t__17125__auto__ = e23878;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto__,null]));
}});
/**
 * Returns a new seed and a random element of the collection.
 */
ysera.random.random_nth = (function ysera$random$random_nth(seed,coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,null], null);
} else {
var vec__23885 = ysera.random.get_random_int.call(null,seed,cljs.core.count.call(null,coll));
var new_seed = cljs.core.nth.call(null,vec__23885,(0),null);
var random_number = cljs.core.nth.call(null,vec__23885,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_seed,cljs.core.nth.call(null,coll,random_number)], null);
}
});
ysera.random.random_nth.cljs$lang$test = (function (){
var actual__23754__auto___23890 = ysera.random.random_nth.call(null,(0),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e","f"], null));
var expected__23755__auto___23891 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"a"], null);
var equal__23756__auto___23892 = cljs.core._EQ_.call(null,actual__23754__auto___23890,expected__23755__auto___23891);
if(equal__23756__auto___23892){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23890,"\nExpected:\t",expected__23755__auto___23891);
}

try{var values__17074__auto___23893 = (new cljs.core.List(null,actual__23754__auto___23890,(new cljs.core.List(null,expected__23755__auto___23891,null,(1),null)),(2),null));
var result__17075__auto___23894 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23893);
if(cljs.core.truth_(result__17075__auto___23894)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23893),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23893),null,(1),null)),(2),null)),null]));
}

}catch (e23888){var t__17125__auto___23895 = e23888;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23895,null]));
}
var actual__23754__auto__ = ysera.random.random_nth.call(null,(0),cljs.core.PersistentVector.EMPTY);
var expected__23755__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null);
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
}catch (e23889){var t__17125__auto__ = e23889;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto__,null]));
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
var vec__23896 = cljs.core.reduce.call(null,(function (p__23899,_){
var vec__23900 = p__23899;
var seed__$1 = cljs.core.nth.call(null,vec__23900,(0),null);
var result = cljs.core.nth.call(null,vec__23900,(1),null);
var rest = cljs.core.nth.call(null,vec__23900,(2),null);
var vec__23903 = ysera.random.random_nth.call(null,seed__$1,rest);
var seed__$2 = cljs.core.nth.call(null,vec__23903,(0),null);
var el = cljs.core.nth.call(null,vec__23903,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed__$2,cljs.core.conj.call(null,result,el),ysera.collections.remove_one.call(null,rest,el)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,cljs.core.PersistentVector.EMPTY,coll], null),cljs.core.range.call(null,n));
var new_seed = cljs.core.nth.call(null,vec__23896,(0),null);
var result = cljs.core.nth.call(null,vec__23896,(1),null);
var _ = cljs.core.nth.call(null,vec__23896,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_seed,cljs.core.remove.call(null,cljs.core.nil_QMARK_,result)], null);

}
}
});
ysera.random.take_n_random.cljs$lang$test = (function (){
var actual__23754__auto___23911 = ysera.random.take_n_random.call(null,(0),(3),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d"], null));
var expected__23755__auto___23912 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1130298060341683),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","c","b"], null)], null);
var equal__23756__auto___23913 = cljs.core._EQ_.call(null,actual__23754__auto___23911,expected__23755__auto___23912);
if(equal__23756__auto___23913){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23911,"\nExpected:\t",expected__23755__auto___23912);
}

try{var values__17074__auto___23914 = (new cljs.core.List(null,actual__23754__auto___23911,(new cljs.core.List(null,expected__23755__auto___23912,null,(1),null)),(2),null));
var result__17075__auto___23915 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23914);
if(cljs.core.truth_(result__17075__auto___23915)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23914),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23914),null,(1),null)),(2),null)),null]));
}

}catch (e23906){var t__17125__auto___23916 = e23906;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23916,null]));
}
var actual__23754__auto___23917 = ysera.random.take_n_random.call(null,(2),(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","a","f"], null));
var expected__23755__auto___23918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","a","f"], null)], null);
var equal__23756__auto___23919 = cljs.core._EQ_.call(null,actual__23754__auto___23917,expected__23755__auto___23918);
if(equal__23756__auto___23919){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23917,"\nExpected:\t",expected__23755__auto___23918);
}

try{var values__17074__auto___23920 = (new cljs.core.List(null,actual__23754__auto___23917,(new cljs.core.List(null,expected__23755__auto___23918,null,(1),null)),(2),null));
var result__17075__auto___23921 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23920);
if(cljs.core.truth_(result__17075__auto___23921)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23920),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23920),null,(1),null)),(2),null)),null]));
}

}catch (e23907){var t__17125__auto___23922 = e23907;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23922,null]));
}
var actual__23754__auto___23923 = ysera.random.take_n_random.call(null,(2),(3),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","a"], null));
var expected__23755__auto___23924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2260595942425364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b","a"], null)], null);
var equal__23756__auto___23925 = cljs.core._EQ_.call(null,actual__23754__auto___23923,expected__23755__auto___23924);
if(equal__23756__auto___23925){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23923,"\nExpected:\t",expected__23755__auto___23924);
}

try{var values__17074__auto___23926 = (new cljs.core.List(null,actual__23754__auto___23923,(new cljs.core.List(null,expected__23755__auto___23924,null,(1),null)),(2),null));
var result__17075__auto___23927 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23926);
if(cljs.core.truth_(result__17075__auto___23927)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23926),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23926),null,(1),null)),(2),null)),null]));
}

}catch (e23908){var t__17125__auto___23928 = e23908;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23928,null]));
}
var actual__23754__auto___23929 = ysera.random.take_n_random.call(null,(2),(2),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null));
var expected__23755__auto___23930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(71303203),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b"], null)], null);
var equal__23756__auto___23931 = cljs.core._EQ_.call(null,actual__23754__auto___23929,expected__23755__auto___23930);
if(equal__23756__auto___23931){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23929,"\nExpected:\t",expected__23755__auto___23930);
}

try{var values__17074__auto___23932 = (new cljs.core.List(null,actual__23754__auto___23929,(new cljs.core.List(null,expected__23755__auto___23930,null,(1),null)),(2),null));
var result__17075__auto___23933 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23932);
if(cljs.core.truth_(result__17075__auto___23933)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23932),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23932),null,(1),null)),(2),null)),null]));
}

}catch (e23909){var t__17125__auto___23934 = e23909;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23934,null]));
}
var actual__23754__auto__ = ysera.random.take_n_random.call(null,(2),(3),cljs.core.PersistentVector.EMPTY);
var expected__23755__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),null], null);
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
}catch (e23910){var t__17125__auto__ = e23910;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto__,null]));
}});
/**
 * Returns a new seed and the collection shuffled.
 */
ysera.random.shuffle_with_seed = (function ysera$random$shuffle_with_seed(seed,coll){
var vec__23935 = cljs.core.reduce.call(null,(function (p__23938,_){
var vec__23939 = p__23938;
var seed__$1 = cljs.core.nth.call(null,vec__23939,(0),null);
var shuffled_coll = cljs.core.nth.call(null,vec__23939,(1),null);
var coll__$1 = cljs.core.nth.call(null,vec__23939,(2),null);
var vec__23942 = ysera.random.random_nth.call(null,seed__$1,coll__$1);
var seed__$2 = cljs.core.nth.call(null,vec__23942,(0),null);
var item = cljs.core.nth.call(null,vec__23942,(1),null);
var coll__$2 = ysera.collections.remove_one.call(null,coll__$1,item);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed__$2,cljs.core.conj.call(null,shuffled_coll,item),coll__$2], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,cljs.core.PersistentVector.EMPTY,coll], null),cljs.core.range.call(null,cljs.core.count.call(null,coll)));
var new_seed = cljs.core.nth.call(null,vec__23935,(0),null);
var shuffled_coll = cljs.core.nth.call(null,vec__23935,(1),null);
var _ = cljs.core.nth.call(null,vec__23935,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_seed,shuffled_coll], null);
});
ysera.random.shuffle_with_seed.cljs$lang$test = (function (){
var actual__23754__auto___23947 = ysera.random.shuffle_with_seed.call(null,(1),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",new cljs.core.Keyword(null,"b","b",1482224470),(3),"d"], null));
var expected__23755__auto___23948 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-9136436700791295257),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(3),"d","a"], null)], null);
var equal__23756__auto___23949 = cljs.core._EQ_.call(null,actual__23754__auto___23947,expected__23755__auto___23948);
if(equal__23756__auto___23949){
} else {
cljs.core.println.call(null,"Actual:\t\t",actual__23754__auto___23947,"\nExpected:\t",expected__23755__auto___23948);
}

try{var values__17074__auto___23950 = (new cljs.core.List(null,actual__23754__auto___23947,(new cljs.core.List(null,expected__23755__auto___23948,null,(1),null)),(2),null));
var result__17075__auto___23951 = cljs.core.apply.call(null,cljs.core._EQ_,values__17074__auto___23950);
if(cljs.core.truth_(result__17075__auto___23951)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23950),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__17074__auto___23950),null,(1),null)),(2),null)),null]));
}

}catch (e23945){var t__17125__auto___23952 = e23945;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto___23952,null]));
}
var actual__23754__auto__ = ysera.random.shuffle_with_seed.call(null,(2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2)], null));
var expected__23755__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(39562792388305809),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1)], null)], null);
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
}catch (e23946){var t__17125__auto__ = e23946;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"actual__23754__auto__","actual__23754__auto__",1993286630,null),new cljs.core.Symbol(null,"expected__23755__auto__","expected__23755__auto__",-348158098,null)),null,t__17125__auto__,null]));
}});
/**
 * Creates a random uuid-string.
 */
ysera.random.get_random_uuid = (function ysera$random$get_random_uuid(){
return cljs.core.random_uuid.call(null);
});
ysera.random.get_random_uuid.cljs$lang$test = (function (){
try{var value__17078__auto__ = (function (){var pattern = /[\w|\d]{8}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{11}/;
return cljs.core.re_find.call(null,pattern,ysera.random.get_random_uuid.call(null));
})();
if(cljs.core.truth_(value__17078__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/patric/dev/clojure/game-2048/resources/public/cljs-out/dev/ysera/random.cljc",54,new cljs.core.Keyword(null,"pass","pass",1574159993),16,84,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),/[\w|\d]{8}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{11}/], null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),cljs.core.list(new cljs.core.Symbol(null,"get-random-uuid","get-random-uuid",976861101,null)))),85,value__17078__auto__,null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/patric/dev/clojure/game-2048/resources/public/cljs-out/dev/ysera/random.cljc",54,new cljs.core.Keyword(null,"fail","fail",1706214930),16,84,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),/[\w|\d]{8}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{11}/], null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),cljs.core.list(new cljs.core.Symbol(null,"get-random-uuid","get-random-uuid",976861101,null)))),85,value__17078__auto__,null]));
}

return value__17078__auto__;
}catch (e23953){var t__17125__auto__ = e23953;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["/Users/patric/dev/clojure/game-2048/resources/public/cljs-out/dev/ysera/random.cljc",54,new cljs.core.Keyword(null,"error","error",-978969032),16,84,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),/[\w|\d]{8}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{4}-[\w|\d]{11}/], null),cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),cljs.core.list(new cljs.core.Symbol(null,"get-random-uuid","get-random-uuid",976861101,null)))),85,t__17125__auto__,null]));
}});

//# sourceMappingURL=random.js.map
