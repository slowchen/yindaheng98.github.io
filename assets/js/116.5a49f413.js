(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{617:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"为什么要写这个"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要写这个"}},[t._v("#")]),t._v(" 为什么要写这个")]),t._v(" "),a("p",[t._v("Vue的创始人是中国人，"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文教程"),a("OutboundLink")],1),t._v("非常全面，其他的一些教程基本都是直接搬的Vue中文教程，但是为什么我还要多此一举写这个呢？原因在于中文教程对于初学者不友好，很多“万事开头难”的内容都没有明确说到，容易把新手直接卡在入口处（比如如何在页面中加入一个用vue控制的元素，或者如何建立一个初始的vue模板工程）。这篇文章就是明确这些内容。")]),t._v(" "),a("h2",{attrs:{id:"在前端页面中使用的vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在前端页面中使用的vue"}},[t._v("#")]),t._v(" 在前端页面中使用的Vue")]),t._v(" "),a("h3",{attrs:{id:"重要的第一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重要的第一步"}},[t._v("#")]),t._v(" 重要的第一步")]),t._v(" "),a("p",[t._v("作为js库存在的vue很好理解，它就是一个像jQuery一样用于改变页面元素的工具，把页面上一个元素的"),a("code",[t._v("id")]),t._v("或者"),a("code",[t._v("class")]),t._v("放入到"),a("code",[t._v("new Vue()")]),t._v("中进行初始化是在页面上引入vue的第一步。比如：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ foo }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo = 'baz'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Change it"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//就是这个，把id放进new Vue进行初始化")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("接下来的操作就只是在上面的"),a("code",[t._v("div")]),t._v("和下面的"),a("code",[t._v("script")]),t._v("加加东西的事了。Vue就只是一个操作页面元素的方式。理解了这个下面就可以直接看教程了。")]),t._v(" "),a("h3",{attrs:{id:"组件相关的操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件相关的操作"}},[t._v("#")]),t._v(" 组件相关的操作")]),t._v(" "),a("p",[t._v("在上面那个操作完成后，下面就可以无障碍边做边学官方教程了。学着学着就会学到组件部分。组件也很简单，不就是一个把一个组件名和组件活动的定义传给"),a("code",[t._v("Vue.component()")]),t._v("然后像用原生HTML标签一样在受vue控制的内容中写标签嘛，比如：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button-counter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<button v-on:click=\"count++\">You clicked me {{ count }} times.</button>'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//先弄出来一个组件，组件名叫button-counter，显示为一个button")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ foo }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo = 'baz'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Change it"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button-counter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button-counter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--然后就可以用组件名直接这么调用组件--\x3e")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--这个组件最后会显示为一个button--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//app是受vue控制的内容，组件只有写在vue控制的内容里面才有效")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br")])]),a("p",[t._v("把组件的使用方法理解了，后面向组件传值、局部注册和动态组件之类的各种操作也就好学了。")]),t._v(" "),a("p",[t._v("但是，局部注册讲着讲着突然来一个")]),t._v(" "),a("blockquote",[a("p",[t._v("...如果你通过 Babel 和 webpack 使用 ES2015 模块...")])]),t._v(" "),a("p",[t._v("然后后面讲到相关内容的时候都直接默认读者熟悉Babel和webpack了，把在Babel和webpack用的内容和在前端用的内容混在一起讲，然后每一个前面都直接加一句“如果你熟悉Babel和webpack”之内的话了事。我TM...真当读者都是前端高手吗，前端高手还会仔细看这么详细的教程？")]),t._v(" "),a("p",[t._v("Vue发展到今天，已经不是一个简单的前端js库了，它已经和各种前端工具结合而有了更多的功能。尤其是与babel、webpack等静态页面构建工具的结合让vue的模块化更加方便，结构也更加清晰。但是，在前端使用vue和在打包工具里面使用vue的方法有很多相似点，也有很大不同。像"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文教程"),a("OutboundLink")],1),t._v("这种给新手看的东西，不应该是把作为前端js库用的vue和在babel、webpack这种打包工具里面用的vue分开来写么？？？不是吗？不是吗？")]),t._v(" "),a("p",[a("img",{attrs:{src:"i/bili_v_1543902267485.gif",alt:"我TM"}})]),t._v(" "),a("h2",{attrs:{id:"在打包工具中使用的vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在打包工具中使用的vue"}},[t._v("#")]),t._v(" 在打包工具中使用的Vue")]),t._v(" "),a("h3",{attrs:{id:"打包工具是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包工具是什么"}},[t._v("#")]),t._v(" 打包工具是什么")]),t._v(" "),a("p",[t._v("想不到吧，真正的菜鸡要从打包工具是什么开始学")]),t._v(" "),a("p",[t._v("哈哈哈哈哈哈哈哈哈哈哈哈哈嗝")]),t._v(" "),a("p",[a("img",{attrs:{src:"i/timg.jpg",alt:"哈哈"}})]),t._v(" "),a("p",[t._v("当前端项目越做越大了之后，什么东西都往"),a("code",[t._v("<script><\/script>")]),t._v("里面扔的开发方法绝对让你死无葬身之地。但是在js里面又没有很好的方法能把一个js文件切成几块以级联方式导入，最多切几块然后在html里面多弄几个"),a("code",[t._v("<script><\/script>")]),t._v("标签，但是这样互相之间的全局变量又容易互相干扰。这可咋整？这个时候就是打包工具出场的时候了！")]),t._v(" "),a("p",[t._v("打包工具就是让用户用一种比html更先进的、模块化更好的网页设计语言编写网页，然后用一个统一的工具给转码成html+js。这样就能完成上面说的那种模块化编写网页的方式。并且，这样不止可以让js模块化，连html和css都可以给宁拆喽。打包工具的出现让网页开发进入了新的时代，后面出来的vue自然也要跟进步伐。")]),t._v(" "),a("h3",{attrs:{id:"vue用的什么打包工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue用的什么打包工具"}},[t._v("#")]),t._v(" vue用的什么打包工具")]),t._v(" "),a("p",[t._v("Pug、Babel (with ES2015 modules)、Stylus、webpack都可以用。现有的网页打包工具基本都是基于node.js的，虽然都是js，但是node.js和前端里面的js还是不一样的，要注意不要弄混。node.js最明显的一点是，因为它不用放在各种浏览器里面用，所以跟进js标准特别及时，更新到上面说的ES2015 modules那里就直接原生支持"),a("code",[t._v("import")]),t._v("和"),a("code",[t._v("export")]),t._v("这种导入了。")]),t._v(" "),a("p",[t._v("vue默认的打包工具是Babel，用默认配置还会给你附赠一套eslint在打包的时候顺便给宁把代码格式化一下。")]),t._v(" "),a("h3",{attrs:{id:"怎么打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么打包"}},[t._v("#")]),t._v(" 怎么打包")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/creating-a-project.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方中文教程"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("p",[t._v("基于node.js的打包工具，第一步当然是装node.js了，这就不说了。")])]),t._v(" "),a("li",[a("p",[t._v("装好node.js之后就是在node.js里面装一些vue相关的工具了：")])])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @vue/cli\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @vue/cli-service-global\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ul",[a("li",[t._v("创建工程-在要创建工程的地方打这个：")])]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("vue create hello-world\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("创建的时候会让用户选一个打包工具：")]),t._v(" "),a("p",[a("img",{attrs:{src:"i/cli-new-project.png",alt:"选打包工具"}})]),t._v(" "),a("p",[t._v("如上图，babel和eslint就是默认设置。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("工程建好了，结合"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文教程"),a("OutboundLink")],1),t._v("中单文件组件部分的内容，进各个文件夹里面看看就能懂个大概，再看教程里面穿插的那些vue打包用法就不难理解了。")])]),t._v(" "),a("li",[a("p",[t._v("最后，打包和运行也很简单")])])]),t._v(" "),a("p",[t._v("调试运行")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("vue serve\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("打包发布")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("vue build\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);