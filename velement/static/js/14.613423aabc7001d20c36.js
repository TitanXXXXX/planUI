webpackJsonp([14],{158:function(a,e,t){function n(a){t(481)}var i=t(37)(t(317),t(565),n,"data-v-f5540f08",null);a.exports=i.exports},317:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(2),i=t.n(n);e.default={data:function(){var a;return{searchOptions:{searchParams:(a={customerName:"",brandName:"",name:""},i()(a,"name",""),i()(a,"planName",""),i()(a,"dateRange",""),a),options:{customerNameOptions:[],brandNameOptions:[],clothingLevelOptions:[],rangeNameOptions:[],planNameOptions:[]}},tableData:[],totalTableData:[],pagination:{currentPage:1,pageSizes:[10,20,30,40,50],pageSize:10,total:0}}},created:function(){var a=this,e=this;console.log("进入未制定计划页面"),this.$axios.get(window.$config.HOST+"/baseInfoManagement/getCustomerName").then(function(e){a.searchOptions.options.customerNameOptions=e.data}).catch(function(e){console.log("初始化获取客户失败!"),a.searchOptions.options.customerNameOptions=[{id:42453,name:"A客户"},{id:41526,name:"B客户"}]}),e.$axios.get(window.$config.HOST+"/baseInfoManagement/getClothingLevelName").then(function(e){a.searchOptions.options.clothingLevelOptions=e.data}).catch(function(a){console.log("初始化服装层次错误")}),this.$axios.get(window.$config.HOST+"/baseInfoManagement/getBrandName").then(function(e){a.searchOptions.options.brandNameOptions=e.data}).catch(function(a){console.log("初始化品牌名称选择错误")}),this.$axios.get(window.$config.HOST+"/infoManagement/getRangeName").then(function(e){a.searchOptions.options.rangeNameOptions=e.data}).catch(function(a){console.log("系列名称加载错误")});this.$axios.post(window.$config.HOST+"/infoManagement/getRangeList",{customerId:"",brandId:"",id:"",clothingLevelId:"",startDate:"",endDate:""}).then(function(e){a.totalTableData=e.data,a.pagination.total=a.totalTableData.length;var t=(a.pagination.currentPage-1)*a.pagination.pageSize,n=t+a.pagination.pageSize>a.pagination.total?a.pagination.total:t+a.pagination.pageSize;a.tableData=a.totalTableData.slice(t,n)}).catch(function(a){console.log("初始化计划列表获取错误")})},methods:{handleSizeChange:function(a){this.pagination.pageSize=a,console.log("每页 "+a+" 条"),this.pagination.currentPage=1,this.handleSearch()},handleCurrentChange:function(a){console.log("当前页: "+a),this.pagination.currentPage=a,this.handleSearch()},makePredict:function(a){this.$router.push({name:"planMakeIndex",params:{flag:1,goback:"predictPlanToBeMake",client:a.customerName,brand:a.brandName,series:a.name,id:a.id,plantype:"系列计划",planobj:a.name,TopPlan:0,TopPlanName:"根计划"}})},changeDate:function(a){if(a){var e=a.getFullYear(),t=a.getMonth()+1;t=t<10?"0"+t:t;var n=a.getDate();n=n<10?"0"+n:n;var i=a.getHours(),s=a.getMinutes();s=s<10?"0"+s:s;var o=a.getSeconds();return o=s<10?"0"+o:o,e+"-"+t+"-"+n+" "+i+":"+s+":"+o}return""},handleSearch:function(){var a=this,e={customerId:""===this.searchOptions.searchParams.customerName?"":this.searchOptions.searchParams.customerName,brandId:""===this.searchOptions.searchParams.brandName?"":this.searchOptions.searchParams.brandName,id:""===this.searchOptions.searchParams.planName?"":this.searchOptions.searchParams.planName,clothingLevelId:""===this.searchOptions.searchParams.name?"":this.searchOptions.searchParams.name,startDate:this.changeDate(this.searchOptions.searchParams.dateRange[0]),endDate:this.changeDate(this.searchOptions.searchParams.dateRange[1])};console.log(e),this.$axios.post(window.$config.HOST+"/infoManagement/getRangeList",e).then(function(e){a.totalTableData=e.data,a.pagination.total=a.totalTableData.length;var t=(a.pagination.currentPage-1)*a.pagination.pageSize,n=t+a.pagination.pageSize>a.pagination.total?a.pagination.total:t+a.pagination.pageSize;a.tableData=a.totalTableData.slice(t,n)}).catch(function(a){console.log("搜索失败")})}}}},434:function(a,e,t){e=a.exports=t(123)(!0),e.push([a.i,".box-card[data-v-f5540f08]{margin:20px 50px;padding:0 20px}.box-card .bar[data-v-f5540f08]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.box-card .bar .title[data-v-f5540f08]{font-size:14px;min-width:75px;text-align:center}.box-card .bar .el-input[data-v-f5540f08],.box-card .bar .el-select[data-v-f5540f08]{width:300px;min-width:75px}.box-card .block[data-v-f5540f08]{padding:30px 0;text-align:center}","",{version:3,sources:["/home/titanxu/Desktop/planui/src/page/planManagement/predictPlanToBeMake.vue"],names:[],mappings:"AACA,2BACE,iBAAkB,AAClB,cAAgB,CACjB,AACD,gCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,8BAA+B,AAC/B,6BAA8B,AAC1B,uBAAwB,AACpB,mBAAoB,AAC5B,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,UAAY,CACb,AACD,uCACE,eAAgB,AAChB,eAAgB,AAChB,iBAAmB,CACpB,AAKD,qFAHE,YAAa,AACb,cAAgB,CAKjB,AACD,kCACE,eAAgB,AAChB,iBAAmB,CACpB",file:"predictPlanToBeMake.vue",sourcesContent:["\n.box-card[data-v-f5540f08] {\n  margin: 20px 50px;\n  padding: 0 20px;\n}\n.box-card .bar[data-v-f5540f08] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n.box-card .bar .title[data-v-f5540f08] {\n  font-size: 14px;\n  min-width: 75px;\n  text-align: center;\n}\n.box-card .bar .el-input[data-v-f5540f08] {\n  width: 300px;\n  min-width: 75px;\n}\n.box-card .bar .el-select[data-v-f5540f08] {\n  width: 300px;\n  min-width: 75px;\n}\n.box-card .block[data-v-f5540f08] {\n  padding: 30px 0;\n  text-align: center;\n}\n"],sourceRoot:""}])},481:function(a,e,t){var n=t(434);"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);t(124)("f47e1d6c",n,!0)},565:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"body"},[t("el-card",{staticClass:"box-card"},[t("el-row",{staticStyle:{"margin-top":"5px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("div",{staticClass:"bar"},[t("div",{staticClass:"title"},[a._v("客户名称")]),a._v(" "),t("el-select",{attrs:{clearable:""},model:{value:a.searchOptions.searchParams.customerName,callback:function(e){a.$set(a.searchOptions.searchParams,"customerName",e)},expression:"searchOptions.searchParams.customerName"}},a._l(a.searchOptions.options.customerNameOptions,function(a){return t("el-option",{key:a.id,attrs:{label:a.name,value:a.id}})}))],1)]),a._v(" "),t("el-col",{attrs:{span:8}},[t("div",{staticClass:"bar"},[t("div",{staticClass:"title"},[a._v("品牌")]),a._v(" "),t("el-select",{attrs:{clearable:""},model:{value:a.searchOptions.searchParams.brandName,callback:function(e){a.$set(a.searchOptions.searchParams,"brandName",e)},expression:"searchOptions.searchParams.brandName"}},a._l(a.searchOptions.options.brandNameOptions,function(a){return t("el-option",{key:a.id,attrs:{label:a.name,value:a.id}})}))],1)]),a._v(" "),t("el-col",{attrs:{span:8}},[t("div",{staticClass:"bar"},[t("div",{staticClass:"title"},[a._v("服装层次")]),a._v(" "),t("el-select",{attrs:{clearable:""},model:{value:a.searchOptions.searchParams.name,callback:function(e){a.$set(a.searchOptions.searchParams,"name",e)},expression:"searchOptions.searchParams.name"}},a._l(a.searchOptions.options.clothingLevelOptions,function(a){return t("el-option",{key:a.id,attrs:{label:a.name,value:a.id}})}))],1)])],1),a._v(" "),t("el-row",{staticStyle:{"margin-top":"25px","margin-bottom":"5px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("div",{staticClass:"bar"},[t("div",{staticClass:"title"},[a._v("系列名称")]),a._v(" "),t("el-select",{model:{value:a.searchOptions.searchParams.name,callback:function(e){a.$set(a.searchOptions.searchParams,"name",e)},expression:"searchOptions.searchParams.name"}},a._l(a.searchOptions.options.rangeNameOptions,function(a){return t("el-option",{key:a.id,attrs:{label:a.name,value:a.id}})}))],1)]),a._v(" "),t("el-col",{attrs:{span:13}},[t("div",{staticClass:"bar"},[t("div",{staticClass:"title"},[a._v("制定时间")]),a._v(" "),t("el-date-picker",{attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"]},model:{value:a.searchOptions.searchParams.dateRange,callback:function(e){a.$set(a.searchOptions.searchParams,"dateRange",e)},expression:"searchOptions.searchParams.dateRange"}})],1)]),a._v(" "),t("el-col",{attrs:{span:1}},[t("div",{staticClass:"bar"},[t("el-button",{attrs:{type:"primary"},on:{click:function(e){a.handleSearch()}}},[a._v("搜索")])],1)])],1)],1),a._v(" "),t("el-card",{staticClass:"box-card"},[t("div",[t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,"max-height":"550",stripe:!0}},[t("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a._v(" "),a._e(),a._v(" "),t("el-table-column",{attrs:{prop:"number",label:"系列编号",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"customerName",label:"客户名称",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"brandName",label:"品牌",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"name",label:"服装层次",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"name",label:"系列名称",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"createrName",label:"添加人",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{prop:"deptName",label:"部门",align:"center"}}),a._v(" "),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150",align:"center"},scopedSlots:a._u([{key:"default",fn:function(e){return[e.row.havePredictPlan?a._e():t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){a.makePredict(e.row)}}},[a._v("\n              制定预测\n            ")]),a._v(" "),e.row.havePredictPlan?t("p",[a._v("已制定")]):a._e()]}}])})],1)],1),a._v(" "),t("div",{staticClass:"block"},[t("el-pagination",{attrs:{"current-page":a.pagination.currentPage,"page-sizes":a.pagination.pageSizes,"page-size":a.pagination.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:a.pagination.total},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange,"update:currentPage":function(e){a.$set(a.pagination,"currentPage",e)}}})],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=14.613423aabc7001d20c36.js.map