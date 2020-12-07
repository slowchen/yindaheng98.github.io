(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{593:function(t,e,a){"use strict";a.r(e);var s=a(4),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"go的反射模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go的反射模型"}},[t._v("#")]),t._v(" go的反射模型")]),t._v(" "),a("p",[t._v("在Golang实现的反射中，"),a("code",[t._v("interface{}")]),t._v("变量可以看作一个“pair”，“pair”中记录了实际变量的值和类型："),a("code",[t._v("(value, type)")]),t._v("，"),a("code",[t._v("value")]),t._v("记录了变量的值，"),a("code",[t._v("type")]),t._v("记录了变量的类型。这个“pair”在这个变量连续赋值的过程中不会发生变化。反射就是用来检测存储在"),a("code",[t._v("interface{}")]),t._v("变量内部“pair”对的一种机制。")]),t._v(" "),a("h2",{attrs:{id:"基本功能：valueof和typeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本功能：valueof和typeof"}},[t._v("#")]),t._v(" 基本功能：ValueOf和TypeOf")]),t._v(" "),a("p",[t._v("既然反射就是用来检测存储在"),a("code",[t._v("interface{}")]),t._v("变量内部“pair”对的一种机制，那么显然，任何反射操作的第一步都是将这个内部“pair”对取出来。在Golang的反射包"),a("code",[t._v("reflect")]),t._v("中，取出"),a("code",[t._v("value")]),t._v("的操作函数是"),a("code",[t._v("reflect.ValueOf(...)")]),t._v("，取出"),a("code",[t._v("type")]),t._v("的函数是"),a("code",[t._v("reflect.TypeOf(...)")]),t._v("。")]),t._v(" "),a("p",[t._v("这两个函数的定义：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ValueOf returns a new Value initialized to the concrete value")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// stored in the interface i.  ValueOf(nil) returns the zero ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ValueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("blockquote",[a("p",[t._v("ValueOf用来获取输入参数接口中的数据的值，如果接口为空则返回0")])]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeOf returns the reflection Type that represents the dynamic type of i.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If i is a nil interface value, TypeOf returns nil.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TypeOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Type "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("blockquote",[a("p",[t._v("TypeOf用来动态获取输入参数接口中的值的类型，如果接口为空则返回nil")])]),t._v(" "),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);e.default=n.exports}}]);