(function(){"use strict";var e={829:function(e,n,l){var t=l(963),a=l(252);const o={id:"app"},i={id:"code"};function d(e,n,l,t,d,c){const m=(0,a.up)("BlocklyComponent");return(0,a.wg)(),(0,a.j4)("div",o,[(0,a.Wm)(m,{id:"blockly",options:d.options,ref:"foo",onClick:n[1]||(n[1]=e=>c.showCode1())},null,8,["options"]),(0,a.Wm)("p",i,[(0,a.Wm)("pre",{innerHTML:d.code},null,8,["innerHTML"]),(0,a.Wm)("button",{onClick:n[2]||(n[2]=(...e)=>c.toggleCode&&c.toggleCode(...e)),style:{position:"absolute",right:"0px",top:"0px","/*z-index":"0*/"}},"预览代码"),(0,a.Wm)("button",{style:{position:"absolute",right:"0px",top:"28px"},onClick:n[3]||(n[3]=e=>c.downloadjs())},"下载代码"),(0,a.Wm)("input",{ref:"filElem",type:"file",class:"upload-file",style:{display:"none"},onChange:n[4]||(n[4]=(...n)=>e.getFile&&e.getFile(...n))},null,544)])])}const c=(0,a.HX)("data-v-42cb93a2");(0,a.dD)("data-v-42cb93a2");const m={class:"blocklyDiv",ref:"blocklyDiv"};(0,a.Cn)();const s=c(((e,n,l,t,o,i)=>{const d=(0,a.up)("xml");return(0,a.wg)(),(0,a.j4)("div",null,[(0,a.Wm)("div",m,null,512),(0,a.Wm)(d,{ref:"blocklyToolbox",style:{display:"none"}},{default:c((()=>[(0,a.WI)(e.$slots,"default",{},void 0,!0)])),_:3},512)])}));var u=l(948),r=l.n(u),p=l(743),f=l.n(p);r().setLocale(f());var b={name:"BlocklyComponent",props:["options"],data(){return{workspace:null}},mounted(){var e=this.$props.options||{};e.toolbox||(e.toolbox=this.$refs["blocklyToolbox"]),this.workspace=r().inject(this.$refs["blocklyDiv"],e)}};b.render=s,b.__scopeId="data-v-42cb93a2";var h=b,y=l(466),k=l.n(y),v=l(256);v.Blocks.regplugins={init:function(){this.appendValueInput("名称").setCheck("String").appendField("注册插件").appendField("名称"),this.appendValueInput("简介").setCheck("String").appendField("简介"),this.appendValueInput("版本").setCheck("Array").appendField("版本"),this.setInputsInline(!0),this.setColour(230),this.setTooltip("在开始为你的插件编写代码之前，你首先需要向加载器提供一些插件相关的信息"),this.setHelpUrl("https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/ScriptAPI/ScriptHelp?id=%e8%84%9a%e6%9c%ac%e5%bc%95%e6%93%8e-%e9%80%9a%e7%94%a8%e8%84%9a%e6%9c%ac%e6%8e%a5%e5%8f%a3%e6%96%87%e6%a1%a3")}},v.JavaScript.regplugins=function(e){var n=v.JavaScript.valueToCode(e,"名称",v.JavaScript.ORDER_ATOMIC),l=v.JavaScript.valueToCode(e,"简介",v.JavaScript.ORDER_ATOMIC),t=v.JavaScript.valueToCode(e,"版本",v.JavaScript.ORDER_ATOMIC),a=`ll.registerPlugin(${n}, ${l}, ${t}, {})`;return a};var _={name:"app",components:{BlocklyComponent:h},data(){return{code:"",options:{media:"media/",grid:{spacing:25,length:3,colour:"#ccc",snap:!0},toolbox:'\n<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">\n  <category name="逻辑" colour="#5b80a5">\n    <block type="controls_if"></block>\n    <block type="logic_compare">\n      <field name="OP">EQ</field>\n    </block>\n    <block type="logic_operation">\n      <field name="OP">AND</field>\n    </block>\n    <block type="logic_negate"></block>\n    <block type="logic_boolean">\n      <field name="BOOL">TRUE</field>\n    </block>\n    <block type="logic_null"></block>\n    <block type="logic_ternary"></block>\n  </category>\n  <category name="循环" colour="#5ba55b">\n    <block type="controls_repeat_ext">\n      <value name="TIMES">\n        <shadow type="math_number">\n          <field name="NUM">10</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="controls_whileUntil">\n      <field name="MODE">WHILE</field>\n    </block>\n    <block type="controls_for">\n      <field name="VAR" id="{+F:*ux)b%gAO*AsTj}{">i</field>\n      <value name="FROM">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n      <value name="TO">\n        <shadow type="math_number">\n          <field name="NUM">10</field>\n        </shadow>\n      </value>\n      <value name="BY">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="controls_forEach">\n      <field name="VAR" id="KAYJBR5HEi#n@pQRzKJn">j</field>\n    </block>\n    <block type="controls_flow_statements">\n      <field name="FLOW">BREAK</field>\n    </block>\n  </category>\n  <category name="计算" colour="#5b67a5">\n    <block type="math_number">\n      <field name="NUM">0</field>\n    </block>\n    <block type="math_arithmetic">\n      <field name="OP">ADD</field>\n      <value name="A">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n      <value name="B">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_single">\n      <field name="OP">ROOT</field>\n      <value name="NUM">\n        <shadow type="math_number">\n          <field name="NUM">9</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_trig">\n      <field name="OP">SIN</field>\n      <value name="NUM">\n        <shadow type="math_number">\n          <field name="NUM">45</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_constant">\n      <field name="CONSTANT">PI</field>\n    </block>\n    <block type="math_number_property">\n      <mutation divisor_input="false"></mutation>\n      <field name="PROPERTY">EVEN</field>\n      <value name="NUMBER_TO_CHECK">\n        <shadow type="math_number">\n          <field name="NUM">0</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_round">\n      <field name="OP">ROUND</field>\n      <value name="NUM">\n        <shadow type="math_number">\n          <field name="NUM">3.1</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_on_list">\n      <mutation op="SUM"></mutation>\n      <field name="OP">SUM</field>\n    </block>\n    <block type="math_modulo">\n      <value name="DIVIDEND">\n        <shadow type="math_number">\n          <field name="NUM">64</field>\n        </shadow>\n      </value>\n      <value name="DIVISOR">\n        <shadow type="math_number">\n          <field name="NUM">10</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_constrain">\n      <value name="VALUE">\n        <shadow type="math_number">\n          <field name="NUM">50</field>\n        </shadow>\n      </value>\n      <value name="LOW">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n      <value name="HIGH">\n        <shadow type="math_number">\n          <field name="NUM">100</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_random_int">\n      <value name="FROM">\n        <shadow type="math_number">\n          <field name="NUM">1</field>\n        </shadow>\n      </value>\n      <value name="TO">\n        <shadow type="math_number">\n          <field name="NUM">100</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="math_random_float"></block>\n  </category>\n  <category name="文字" colour="#5ba58c">\n    <block type="text">\n      <field name="TEXT"></field>\n    </block>\n    <block type="text_join">\n      <mutation items="2"></mutation>\n    </block>\n    <block type="text_append">\n      <field name="VAR" id="2YeTYsWn=e.jWZ1_jcJC">item</field>\n      <value name="TEXT">\n        <shadow type="text">\n          <field name="TEXT"></field>\n        </shadow>\n      </value>\n    </block>\n    <block type="text_length">\n      <value name="VALUE">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="text_isEmpty">\n      <value name="VALUE">\n        <shadow type="text">\n          <field name="TEXT"></field>\n        </shadow>\n      </value>\n    </block>\n    <block type="text_indexOf">\n      <field name="END">FIRST</field>\n      <value name="VALUE">\n        <block type="variables_get">\n          <field name="VAR" id="cZu0g~S;L.v,R7:PZm~3">text</field>\n        </block>\n      </value>\n      <value name="FIND">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="text_charAt">\n      <mutation at="true"></mutation>\n      <field name="WHERE">FROM_START</field>\n      <value name="VALUE">\n        <block type="variables_get">\n          <field name="VAR" id="cZu0g~S;L.v,R7:PZm~3">text</field>\n        </block>\n      </value>\n    </block>\n    <block type="text_getSubstring">\n      <mutation at1="true" at2="true"></mutation>\n      <field name="WHERE1">FROM_START</field>\n      <field name="WHERE2">FROM_START</field>\n      <value name="STRING">\n        <block type="variables_get">\n          <field name="VAR" id="cZu0g~S;L.v,R7:PZm~3">text</field>\n        </block>\n      </value>\n    </block>\n    <block type="text_changeCase">\n      <field name="CASE">UPPERCASE</field>\n      <value name="TEXT">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="text_trim">\n      <field name="MODE">BOTH</field>\n      <value name="TEXT">\n        <shadow type="text">\n          <field name="TEXT">abc</field>\n        </shadow>\n      </value>\n    </block>\n  </category>\n  <category name="列表" colour="#745ba5">\n    <block type="lists_create_with">\n      <mutation items="0"></mutation>\n    </block>\n    <block type="lists_create_with">\n      <mutation items="3"></mutation>\n    </block>\n    <block type="lists_repeat">\n      <value name="NUM">\n        <shadow type="math_number">\n          <field name="NUM">5</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="lists_length"></block>\n    <block type="lists_isEmpty"></block>\n    <block type="lists_indexOf">\n      <field name="END">FIRST</field>\n      <value name="VALUE">\n        <block type="variables_get">\n          <field name="VAR" id="-hbRDCa(~y6co@wAQ04y">list</field>\n        </block>\n      </value>\n    </block>\n    <block type="lists_getIndex">\n      <mutation statement="false" at="true"></mutation>\n      <field name="MODE">GET</field>\n      <field name="WHERE">FROM_START</field>\n      <value name="VALUE">\n        <block type="variables_get">\n          <field name="VAR" id="-hbRDCa(~y6co@wAQ04y">list</field>\n        </block>\n      </value>\n    </block>\n    <block type="lists_setIndex">\n      <mutation at="true"></mutation>\n      <field name="MODE">SET</field>\n      <field name="WHERE">FROM_START</field>\n      <value name="LIST">\n        <block type="variables_get">\n          <field name="VAR" id="-hbRDCa(~y6co@wAQ04y">list</field>\n        </block>\n      </value>\n    </block>\n    <block type="lists_getSublist">\n      <mutation at1="true" at2="true"></mutation>\n      <field name="WHERE1">FROM_START</field>\n      <field name="WHERE2">FROM_START</field>\n      <value name="LIST">\n        <block type="variables_get">\n          <field name="VAR" id="-hbRDCa(~y6co@wAQ04y">list</field>\n        </block>\n      </value>\n    </block>\n    <block type="lists_split">\n      <mutation mode="SPLIT"></mutation>\n      <field name="MODE">SPLIT</field>\n      <value name="DELIM">\n        <shadow type="text">\n          <field name="TEXT">,</field>\n        </shadow>\n      </value>\n    </block>\n    <block type="lists_sort">\n      <field name="TYPE">NUMERIC</field>\n      <field name="DIRECTION">1</field>\n    </block>\n  </category>\n  <sep></sep>\n  <category name="变量" colour="#a55b80" custom="VARIABLE"></category>\n  <category name="函数" colour="#995ba5" custom="PROCEDURE"></category>\n  <sep></sep>\n\n  <category name="通用接口" colour="#5ba55b">\n    <block type="regplugins"></block>\n  </category>\n</xml>\n                ',zoom:{controls:!0,wheel:!0,startScale:1,maxScale:3,minScale:.3,scaleSpeed:1.2}}}},methods:{downloadjs(){let e=this.code;function n(){var n=prompt("请输入文件名：","blockly_js");null!=n&&(window.alert(`文件名为${n}.js\n点击确认开始下载...`),l(`${n}.js`,e))}function l(e,n){var l=document.createElement("a");l.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(n)),l.setAttribute("download",e),l.style.display="none",document.body.appendChild(l),l.click(),document.body.removeChild(l)}n()},showCode1(){this.code=k().workspaceToCode(this.$refs["foo"].workspace)},uploadXml(){this.$refs.filElem.dispatchEvent(new MouseEvent("click"))},download_xml(){},toggleCode(){this.showCode=!this.showCode,this.showCode?document.getElementById("code").style.width="30%":document.getElementById("code").style.width="0"}}};_.render=d;var w=_;(0,t.ri)(w).mount("#app")}},n={};function l(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,l),o.exports}l.m=e,function(){var e=[];l.O=function(n,t,a,o){if(!t){var i=1/0;for(s=0;s<e.length;s++){t=e[s][0],a=e[s][1],o=e[s][2];for(var d=!0,c=0;c<t.length;c++)(!1&o||i>=o)&&Object.keys(l.O).every((function(e){return l.O[e](t[c])}))?t.splice(c--,1):(d=!1,o<i&&(i=o));if(d){e.splice(s--,1);var m=a();void 0!==m&&(n=m)}}return n}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[t,a,o]}}(),function(){l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,{a:n}),n}}(),function(){l.d=function(e,n){for(var t in n)l.o(n,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};l.O.j=function(n){return 0===e[n]};var n=function(n,t){var a,o,i=t[0],d=t[1],c=t[2],m=0;for(a in d)l.o(d,a)&&(l.m[a]=d[a]);if(c)var s=c(l);for(n&&n(t);m<i.length;m++)o=i[m],l.o(e,o)&&e[o]&&e[o][0](),e[i[m]]=0;return l.O(s)},t=self["webpackChunkblockly"]=self["webpackChunkblockly"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=l.O(void 0,[998],(function(){return l(829)}));t=l.O(t)})();
//# sourceMappingURL=app.a0241d3f.js.map