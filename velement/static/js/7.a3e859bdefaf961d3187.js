webpackJsonp([7],{149:function(e,a,t){function n(e){t(477)}var i=t(37)(t(308),t(561),n,"data-v-e9e17900",null);e.exports=i.exports},187:function(e,a,t){var n=t(14),i=t(4),o=t(11);e.exports=function(e,a){var t=(i.Object||{})[e]||Object[e],s={};s[e]=a(t),n(n.S+n.F*o(function(){t(1)}),"Object",s)}},209:function(e,a,t){e.exports={default:t(224),__esModule:!0}},224:function(e,a,t){t(231),e.exports=t(4).Object.keys},231:function(e,a,t){var n=t(47),i=t(45);t(187)("keys",function(){return function(e){return i(n(e))}})},308:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(209),i=t.n(n);a.default={data:function(){return{searchOptions:{searchParams:{customerName:"",brandName:"",rangeName:"",dateRange:""},options:{customerNameOptions:[],brandNameOptions:[],rangeNameOptions:[]}},tableData:[],multipleSelection:[],searchDisabled:!1}},created:function(){var e=this;console.log("进入异常管理页面"),this.$axios.get(window.$config.HOST+"/baseInfoManagement/getCustomerName").then(function(a){e.searchOptions.options.customerNameOptions=a.data}).catch(function(e){console.log("getCustomer 失败!")}),this.$axios.get(window.$config.HOST+"/baseInfoManagement/getBrandName").then(function(a){e.searchOptions.options.brandNameOptions=a.data}).catch(function(e){console.log("初始化品牌加载失败")}),this.$axios.get(window.$config.HOST+"/infoManagement/getRangeName").then(function(a){e.searchOptions.options.rangeNameOptions=a.data}).catch(function(e){console.log("初始化系列名称加载失败")}),this.$axios.get(window.$config.HOST+"/planManagement/getExceptionList").then(function(a){e.tableData=a.data}).catch(function(e){console.log("初始化系列异常加载失败")})},mounted:function(){var e=this,a=this.$route.params;if(console.log("路由参数:"+i()(a).length),i()(a).length){this.searchOptions.searchParams.customerName=a.customerName,this.searchOptions.searchParams.brandName=a.brandName,this.searchOptions.searchParams.rangeName=a.rangeName,this.searchDisabled=!0;var t={customerId:""===a.customerName?void 0:a.customerName,brandId:""===a.brandName?void 0:a.brandName,rangeId:""===a.rangeName?void 0:a.rangeName,startDate:void 0,endDate:void 0};console.log(params),this.$axios.get(window.$config.HOST+"/planManagement/getExceptionList",t).then(function(a){e.tableData=a.data}).catch(function(e){console.log("获取异常错误")})}},methods:{changeDate:function(e){if(e){console.log(e);var a=e.getFullYear(),t=e.getMonth()+1;t=t<10?"0"+t:t;var n=e.getDate();n=n<10?"0"+n:n;var i=e.getHours(),o=e.getMinutes();o=o<10?"0"+o:o;var s=e.getSeconds();return s=o<10?"0"+s:s,a+"-"+t+"-"+n+" "+i+":"+o+":"+s}},handleSearchClick:function(){var e=this,a={customerId:""===this.searchOptions.searchParams.customerName?void 0:this.searchOptions.searchParams.customerName,brandId:""===this.searchOptions.searchParams.brandName?void 0:this.searchOptions.searchParams.brandName,rangeId:""===this.searchOptions.searchParams.rangeName?void 0:this.searchOptions.searchParams.rangeName,startDate:this.changeDate(this.searchOptions.searchParams.dateRange[0]),endDate:this.changeDate(this.searchOptions.searchParams.dateRange[1])};console.log(a),this.$axios.get(window.$config.HOST+"/planManagement/getExceptionList",{params:a}).then(function(a){e.tableData=a.data}).catch(function(e){console.log("异常搜索失败")})},handleSelectionChange:function(e){this.multipleSelection=e}}}},430:function(e,a,t){a=e.exports=t(123)(!0),a.push([e.i,".box-card[data-v-e9e17900]{margin:20px 50px;padding:0 20px}.el-row[data-v-e9e17900]{margin-bottom:20px}.el-row[data-v-e9e17900]:last-child{margin-bottom:0}.el-row .el-col[data-v-e9e17900]{border-radius:4px}.el-row .el-col .inputCombineDiv[data-v-e9e17900]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.el-row .el-col .inputCombineDiv .inputTag[data-v-e9e17900]{min-width:70px;font-size:14px;line-height:40px;text-align:center}.el-row .el-col .inputCombineDiv .inputTag1[data-v-e9e17900]{margin-left:10px;margin-right:10px;width:18px;font-size:18px}.cardBelow[data-v-e9e17900]{margin-top:10px}.grid-content[data-v-e9e17900]{border-radius:4px;min-height:36px}","",{version:3,sources:["/home/titanxu/Desktop/planui/src/page/planManagement/exceptionManagement.vue"],names:[],mappings:"AACA,2BACE,iBAAkB,AAClB,cAAgB,CACjB,AACD,yBACE,kBAAoB,CACrB,AACD,oCACE,eAAiB,CAClB,AACD,iCACE,iBAAmB,CACpB,AACD,kDACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,8BAA+B,AAC/B,6BAA8B,AAC1B,uBAAwB,AACpB,kBAAoB,CAC7B,AACD,4DACE,eAAgB,AAChB,eAAgB,AAChB,iBAAkB,AAClB,iBAAmB,CACpB,AACD,6DACE,iBAAkB,AAClB,kBAAmB,AACnB,WAAY,AACZ,cAAgB,CACjB,AACD,4BACE,eAAiB,CAClB,AACD,+BACE,kBAAmB,AACnB,eAAiB,CAClB",file:"exceptionManagement.vue",sourcesContent:["\n.box-card[data-v-e9e17900] {\n  margin: 20px 50px;\n  padding: 0 20px;\n}\n.el-row[data-v-e9e17900] {\n  margin-bottom: 20px;\n}\n.el-row[data-v-e9e17900]:last-child {\n  margin-bottom: 0;\n}\n.el-row .el-col[data-v-e9e17900] {\n  border-radius: 4px;\n}\n.el-row .el-col .inputCombineDiv[data-v-e9e17900] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.el-row .el-col .inputCombineDiv .inputTag[data-v-e9e17900] {\n  min-width: 70px;\n  font-size: 14px;\n  line-height: 40px;\n  text-align: center;\n}\n.el-row .el-col .inputCombineDiv .inputTag1[data-v-e9e17900] {\n  margin-left: 10px;\n  margin-right: 10px;\n  width: 18px;\n  font-size: 18px;\n}\n.cardBelow[data-v-e9e17900] {\n  margin-top: 10px;\n}\n.grid-content[data-v-e9e17900] {\n  border-radius: 4px;\n  min-height: 36px;\n}\n"],sourceRoot:""}])},477:function(e,a,t){var n=t(430);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(124)("0a2da7dc",n,!0)},561:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"body"},[t("el-card",{staticClass:"box-card"},[t("el-row",{staticStyle:{"margin-top":"15px","margin-bottom":"15px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("div",{staticClass:"grid-content bg-purple inputCombineDiv"},[t("span",{staticClass:"inputTag"},[e._v("客户名称：")]),e._v(" "),t("el-select",{attrs:{clearable:"",disabled:e.searchDisabled},model:{value:e.searchOptions.searchParams.customerName,callback:function(a){e.$set(e.searchOptions.searchParams,"customerName",a)},expression:"searchOptions.searchParams.customerName"}},e._l(e.searchOptions.options.customerNameOptions,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)]),e._v(" "),t("el-col",{attrs:{span:8}},[t("div",{staticClass:"grid-content bg-purple inputCombineDiv"},[t("span",{staticClass:"inputTag"},[e._v("品牌：")]),e._v(" "),t("el-select",{attrs:{clearable:"",disabled:e.searchDisabled},model:{value:e.searchOptions.searchParams.brandName,callback:function(a){e.$set(e.searchOptions.searchParams,"brandName",a)},expression:"searchOptions.searchParams.brandName"}},e._l(e.searchOptions.options.brandNameOptions,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)]),e._v(" "),t("el-col",{attrs:{span:8}},[t("div",{staticClass:"grid-content bg-purple inputCombineDiv"},[t("span",{staticClass:"inputTag"},[e._v("系列名称")]),e._v(" "),t("el-select",{attrs:{disabled:e.searchDisabled},model:{value:e.searchOptions.searchParams.rangeName,callback:function(a){e.$set(e.searchOptions.searchParams,"rangeName",a)},expression:"searchOptions.searchParams.rangeName"}},e._l(e.searchOptions.options.rangeNameOptions,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)])],1),e._v(" "),t("el-row",{staticStyle:{"margin-top":"25px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:10}},[t("div",{staticClass:"grid-content bg-purple inputCombineDiv"},[t("span",{staticClass:"inputTag"},[e._v("新建时间：")]),e._v(" "),t("el-date-picker",{attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"],disabled:e.searchDisabled},model:{value:e.searchOptions.searchParams.dateRange,callback:function(a){e.$set(e.searchOptions.searchParams,"dateRange",a)},expression:"searchOptions.searchParams.dateRange"}})],1)]),e._v(" "),t("el-col",{attrs:{span:4}},[t("div",{staticClass:"grid-content bg-purple"},[t("el-button",{attrs:{type:"primary"},on:{click:e.handleSearchClick}},[e._v("搜索")])],1)])],1)],1),e._v(" "),t("el-card",{staticClass:"box-card"},[t("div",[t("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"50px"}}),e._v(" "),t("el-table-column",{attrs:{type:"index",label:"序号",width:"50px",align:"center"}}),e._v(" "),e._e(),e._v(" "),t("el-table-column",{attrs:{prop:"number",label:"异常编号",width:"100px",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"planNumber",label:"计划编号",width:"100px",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"customerName",label:"客户",width:"100px",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"brandName",label:"品牌",width:"100px",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"planName",label:"计划名称",width:"100px",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"rangeName",label:"系列名称",width:"100px",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"planObject",label:"计划对象",width:"100px",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"cause",label:"异常内容",width:"100px",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"userName",label:"创建人",width:"100px",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"100px",align:"center","show-overflow-tooltip":""}})],1)],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=7.a3e859bdefaf961d3187.js.map