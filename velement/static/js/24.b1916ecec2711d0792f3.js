webpackJsonp([24],{125:function(e,a,t){function r(e){t(237)}var n=t(37)(t(219),t(244),r,"data-v-d8d96cee",null);e.exports=n.exports},219:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{rules:{customerName:[{required:!0,message:"请选择客户名称",trigger:"change"}],brandName:[{required:!0,message:"请选择品牌名称",trigger:"change"}],rangeName:[{required:!0,message:"请选择系列名称",trigger:"change"}],number:[{required:!0,message:"请输入订单款号",trigger:"blur"}]},tableDataA:[],dateRange:"",dialogFormVisible1:!1,DateStart:"",DateEnd:"",pagination:{currentPage:1,pageSizes:[10,20,30,40,50],pageSize:10,total:0},searchOptions:{searchParams:{customerName:"",brandName:"",rangeName:"",number:"",dateRange:""},options:{customerNameOptions:[],brandNameOptions:[],clothingTypeOptions:[],rangeNameOptions:[],styleNumberNameOptions:[]}},data:{tableData:[]},multipleSelection:[],ruleForm:{rangeId:"",rangeNumber:"",rangeName:"",styleGroupId:"",styleGroupNumber:"",styleGroupName:"",id:"",number:"",customerId:"",customerName:"",brandId:"",brandName:"",clothingLevelId:"",clothingLevelName:"",createrName:"",deptName:"",createTime:"",addingMode:"",state:"",havePlan:!1},options:{customerNameOptions:[],brandNameOptions:[],clothingTypeOptions:[],rangeNameTypeOptions:[],styleNumberOptions:[]},controlData:{ifStyleAdd:!1,ifStyleChange:!1},dialogFormVisible:!1}},created:function(){var e=this,a=this;this.$axios.get(window.$config.HOST+"/infoManagement/getStyleNumber",{params:{rangeId:""}}).then(function(a){e.searchOptions.options.styleNumberNameOptions=a.data}).catch(function(a){e.$message({message:"获取订单款号失败",type:"error"})}),this.$axios.get(window.$config.HOST+"/infoManagement/getRangeName",{params:{brandId:""}}).then(function(a){e.searchOptions.options.rangeNameOptions=a.data}).catch(function(a){e.$message({message:"获取系列名称失败",type:"error"})}),this.$axios.get(window.$config.HOST+"/baseInfoManagement/getBrandName",{params:{customerId:""}}).then(function(a){e.searchOptions.options.brandNameOptions=a.data}).catch(function(a){e.$message({message:"获取品牌信息失败",type:"error"})}),a.$axios.get(window.$config.HOST+"/baseInfoManagement/getCustomerName").then(function(a){var t=a.data;e.searchOptions.options.customerNameOptions=t,e.options.customerNameOptions=e.searchOptions.options.customerNameOptions}).catch(function(a){e.$message({message:"获取客户名称失败",type:"error"})}),this.$axios.post(window.$config.HOST+"/infoManagement/getStyleList",{}).then(function(a){console.log(a.data);var t=a.data;e.data.tableData=t,e.data.tableData.sort(function(e,a){return Date.parse(a.createTime)-Date.parse(e.createTime)}),e.data.tableData.forEach(function(t){var r=new Date(t.createTime),n=r.toLocaleString();t.createTime=n,e.pagination.total=a.data.length;var o=(e.pagination.currentPage-1)*e.pagination.pageSize,s=(e.pagination.currentPage-1)*e.pagination.pageSize;for(e.tableDataA=[];o-s<e.pagination.pageSize&&o<e.data.tableData.length;o++)e.tableDataA.push(e.data.tableData[o])})}).catch(function(a){e.$message({message:"获取款式搜索结果失败",type:"error"})})},methods:{handleSizeChange:function(e){this.pagination.pageSize=e,console.log("每页+"+this.pagination.pageSize),this.handleSearch()},handleCurrentChange:function(e){this.pagination.currentPage=e,this.handleSearch()},dialogCustomerNameSelectionChange:function(){var e=this,a={customerId:this.ruleForm.customerName};console.log(a),this.$axios.get(window.$config.HOST+"/baseInfoManagement/getBrandName",{params:a}).then(function(a){console.log(a.data),e.options.brandNameOptions=a.data}).catch(function(a){e.$message({message:"获取品牌信息失败",type:"error"})}),this.ruleForm.brandName="",this.ruleForm.rangeName=""},dialogBrandNameSelectionChange:function(){var e=this,a={brandId:this.ruleForm.brandName};this.$axios.get(window.$config.HOST+"/infoManagement/getRangeName",{params:a}).then(function(a){e.options.rangeNameTypeOptions=a.data}).catch(function(a){e.$message({message:"获取系列信息失败",type:"error"})}),this.ruleForm.rangeName=""},changeDate:function(e){if(console.log(e),e){var a=e.getFullYear(),t=e.getMonth()+1;t=t<10?"0"+t:t;var r=e.getDate();r=r<10?"0"+r:r;var n=(e.getHours(),e.getMinutes());n=n<10?"0"+n:n;var o=e.getSeconds();return o=n<10?"0"+o:o,a+"-"+t+"-"+r}},handleSearch:function(){var e=this,a=void 0,t=void 0;null==this.dateRange?(a=void 0,t=void 0):(a=this.changeDate(this.dateRange[0]),t=this.changeDate(this.dateRange[1]));var r={customerId:""===this.searchOptions.searchParams.customerName?void 0:this.searchOptions.searchParams.customerName,brandId:""===this.searchOptions.searchParams.brandName?void 0:this.searchOptions.searchParams.brandName,rangeId:""===this.searchOptions.searchParams.rangeName?void 0:this.searchOptions.searchParams.rangeName,clothingType:void 0,number:""===this.searchOptions.searchParams.number?void 0:this.searchOptions.searchParams.number,id:void 0,startDate:a,endDate:t};console.log(r),this.$axios.post(window.$config.HOST+"/infoManagement/getStyleList",{customerId:""===this.searchOptions.searchParams.customerName?void 0:this.searchOptions.searchParams.customerName,brandId:""===this.searchOptions.searchParams.brandName?void 0:this.searchOptions.searchParams.brandName,rangeId:""===this.searchOptions.searchParams.rangeName?void 0:this.searchOptions.searchParams.rangeName,clothingLevelId:void 0,number:""===this.searchOptions.searchParams.number?void 0:this.searchOptions.searchParams.number,id:void 0,startDate:a,endDate:t}).then(function(a){e.data.tableData=a.data,e.data.tableData.sort(function(e,a){return Date.parse(a.createTime)-Date.parse(e.createTime)}),e.data.tableData.forEach(function(a){var t=new Date(a.createTime),r=t.toLocaleString();a.createTime=r,console.log(e.tableDataA)}),e.pagination.total=a.data.length;var t=(e.pagination.currentPage-1)*e.pagination.pageSize,r=(e.pagination.currentPage-1)*e.pagination.pageSize;for(e.tableDataA=[];t-r<e.pagination.pageSize&&t<e.data.tableData.length;t++)e.tableDataA.push(e.data.tableData[t])}).catch(function(a){e.$message({message:"搜索失败",type:"error"})})},changeCheckBoxFun:function(e){var a=this;a.multipleSelection=e,console.log("changeCheckBox所选中的内容如下"),console.log(a.multipleSelection),console.log("changeCheckBox所选中的内容的长度为",a.multipleSelection.length)},addStyle:function(){console.log("添加款号按钮点击"),this.controlData.ifStyleAdd=!0,this.dialogFormVisible=!0},importStyle:function(){var e=this;console.log("批量导入按钮点击"),e.$router.push({name:"styleImport"})},deleteStyle:function(){var e=this,a=this;console.log("删除款号按钮点击"),0===a.multipleSelection.length?this.$message({message:"请选择要删除的款号",type:"warning"}):a.multipleSelection.length>=1&&(console.log("有"+a.multipleSelection.length+"条数据被选中"),this.$confirm("删除所选的"+a.multipleSelection.length+"条款式组信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.multipleSelection.forEach(function(a){e.$axios.delete(window.$config.HOST+"/infoManagement/deleteStyle",{params:{id:a.id}}).then(function(a){e.handleSearch(),a.data<0?e.$message({message:"删除失败",type:"warning"}):e.$message({message:"删除成功",type:"success"})}).catch(function(a){e.handleSearch(),e.$message({message:"删除失败!",type:"warning"})})})}).catch(function(){e.handleSearch(),e.$message({type:"info",message:"已取消删除"})}))},bindStyleGroup:function(){var e=this;console.log("绑定款式组按钮点击"),0===e.multipleSelection.length?this.$message({message:"请选择要绑定款式组的款号",type:"warning"}):e.multipleSelection.length>=1&&e.$router.push({name:"bindStyleGroup",query:{bindData:e.multipleSelection}})},getStyleData:function(e){console.log("点击了本行的查看"),this.ruleForm.customerName=e.customerName,this.ruleForm.brandName=e.brandName,this.ruleForm.clothingType=e.clothingType,this.ruleForm.rangeName=e.rangeName,this.ruleForm.styleNumber=e.styleNumber,this.dialogFormVisible=!0},changeStyleData:function(e){var a=this;console.log("点击了本行的修改"),this.$axios.get(window.$config.HOST+"/infoManagement/getRangeName",{params:{brandId:e.brandId}}).then(function(e){a.options.rangeNameTypeOptions=e.data}).catch(function(e){a.$message({message:"获取系列名称失败",type:"error"})}),this.$axios.get(window.$config.HOST+"/baseInfoManagement/getBrandName",{params:{customerId:e.customerId}}).then(function(e){a.options.brandNameOptions=e.data}).catch(function(e){a.$message({message:"获取品牌信息失败",type:"error"})}),this.ruleForm.firstCustomerName=e.customerName,this.ruleForm.firstBrandName=e.brandName,this.ruleForm.firstRangeName=e.rangeName,this.ruleForm.firstNumber=e.number,this.ruleForm.firstClothingLevel=e.clothingLevelName,this.ruleForm.rangeId=e.rangeId,this.ruleForm.rangeNumber=e.rangeNumber,this.ruleForm.rangeName=e.rangeName,this.ruleForm.styleGroupId=e.styleGroupId,this.ruleForm.styleGroupNumber=e.styleGroupNumber,this.ruleForm.styleGroupName=e.styleGroupName,this.ruleForm.id=e.id,this.ruleForm.number=e.number,this.ruleForm.customerId=e.customerId,this.ruleForm.customerName=e.customerName,this.ruleForm.brandId=e.brandId,this.ruleForm.brandName=e.brandName,this.ruleForm.clothingLevelId=e.clothingLevelId,this.ruleForm.clothingLevelName=e.clothingLevelName,this.ruleForm.createrName=e.createrName,this.ruleForm.deptName=e.deptName,this.ruleForm.createTime=e.createTime,this.ruleForm.addingMode=e.addingMode,this.ruleForm.state=e.state,this.ruleForm.havePlan=e.havePlan,this.dialogFormVisible1=!0},deleteStyleData:function(e){var a=this;console.log("点击了本行的删除"),console.log("当前row=",e),this.$confirm("是否确认删除该款号？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={id:e.id};a.$axios.delete(window.$config.HOST+"/infoManagement/deleteStyle",{params:t}).then(function(e){a.handleSearch(),e.data<0?a.$message({type:"error",message:"删除失败"}):a.$message({type:"success",message:"删除成功"})}).catch(function(e){a.handleSearch(),a.$message({type:"info",message:"暂时不能删除"})})})},submitForm:function(e){var a=this;this.$refs[e].validate(function(e){e?a.$axios.post(window.$config.HOST+"/infoManagement/addStyle",{number:a.ruleForm.number,rangeId:a.ruleForm.rangeName}).then(function(e){a.handleSearch(),e.data<0?a.$message({type:"error",message:"添加失败"}):(a.ruleForm.rangeId="",a.ruleForm.rangeNumber="",a.ruleForm.rangeName="",a.ruleForm.styleGroupId="",a.ruleForm.styleGroupNumber="",a.ruleForm.styleGroupName="",a.ruleForm.id="",a.ruleForm.number="",a.ruleForm.customerId="",a.ruleForm.customerName="",a.ruleForm.brandId="",a.ruleForm.brandName="",a.ruleForm.clothingLevelId="",a.ruleForm.clothingLevelName="",a.ruleForm.createrName="",a.ruleForm.deptName="",a.ruleForm.createTime="",a.ruleForm.addingMode="",a.ruleForm.state="",a.ruleForm.havePlan="",a.options.brandNameOptions="",a.options.rangeNameTypeOptions="",a.options.styleNumberOptions="",a.dialogFormVisible=!1,a.$message({type:"success",message:"添加成功"}))}).catch(function(e){a.$message({type:"info",message:"添加失败！"})}):a.$message({type:"error",message:"请填写必须填写的项！"})})},submitForm1:function(e){var a=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var t={id:a.ruleForm.id,name:a.ruleForm.number,rangeId:a.ruleForm.rangeName};a.$axios.post(window.$config.HOST+"/infoManagement/updateStyle",t).then(function(e){e.data<0?a.$message({type:"error",message:"修改失败"}):(a.handleSearch(),a.ruleForm.rangeId="",a.ruleForm.rangeNumber="",a.ruleForm.rangeName="",a.ruleForm.styleGroupId="",a.ruleForm.styleGroupNumber="",a.ruleForm.styleGroupName="",a.ruleForm.id="",a.ruleForm.number="",a.ruleForm.customerId="",a.ruleForm.customerName="",a.ruleForm.brandId="",a.ruleForm.brandName="",a.ruleForm.clothingLevelId="",a.ruleForm.clothingLevelName="",a.ruleForm.createrName="",a.ruleForm.deptName="",a.ruleForm.createTime="",a.ruleForm.addingMode="",a.ruleForm.state="",a.ruleForm.havePlan="",a.dialogFormVisible1=!1,a.$message({type:"success",message:"成功"}))}).catch(function(e){a.handleSearch(),a.$message({type:"info",message:"暂时不能添加"})})})},cancel:function(){console.log("取消按钮点击"),this.ruleForm.rangeId="",this.ruleForm.rangeNumber="",this.ruleForm.rangeName="",this.ruleForm.styleGroupId="",this.ruleForm.styleGroupNumber="",this.ruleForm.styleGroupName="",this.ruleForm.id="",this.ruleForm.number="",this.ruleForm.customerId="",this.ruleForm.customerName="",this.ruleForm.brandId="",this.ruleForm.brandName="",this.ruleForm.clothingLevelId="",this.ruleForm.clothingLevelName="",this.ruleForm.createrName="",this.ruleForm.deptName="",this.ruleForm.createTime="",this.ruleForm.addingMode="",this.ruleForm.state="",this.ruleForm.havePlan="",this.dialogFormVisible=!1,this.options.brandNameOptions="",this.dialogFormVisible1=!1}}}},234:function(e,a,t){a=e.exports=t(123)(!0),a.push([e.i,".box-card[data-v-d8d96cee]{margin:20px 50px;padding:0 20px}.box-card .bar[data-v-d8d96cee]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.box-card .bar .title[data-v-d8d96cee]{font-size:14px;min-width:75px;text-align:center}.box-card .bar .el-input[data-v-d8d96cee],.box-card .bar .el-select[data-v-d8d96cee]{width:300px;min-width:75px}.box-card .block[data-v-d8d96cee]{padding:30px 0;text-align:center}","",{version:3,sources:["/home/titanxu/Desktop/planui/src/page/infoManagement/style/styleManagement.vue"],names:[],mappings:"AACA,2BACE,iBAAkB,AAClB,cAAgB,CACjB,AACD,gCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,8BAA+B,AAC/B,6BAA8B,AAC1B,uBAAwB,AACpB,mBAAoB,AAC5B,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,UAAY,CACb,AACD,uCACE,eAAgB,AAChB,eAAgB,AAChB,iBAAmB,CACpB,AAKD,qFAHE,YAAa,AACb,cAAgB,CAKjB,AACD,kCACE,eAAgB,AAChB,iBAAmB,CACpB",file:"styleManagement.vue",sourcesContent:["\n.box-card[data-v-d8d96cee] {\n  margin: 20px 50px;\n  padding: 0 20px;\n}\n.box-card .bar[data-v-d8d96cee] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n}\n.box-card .bar .title[data-v-d8d96cee] {\n  font-size: 14px;\n  min-width: 75px;\n  text-align: center;\n}\n.box-card .bar .el-input[data-v-d8d96cee] {\n  width: 300px;\n  min-width: 75px;\n}\n.box-card .bar .el-select[data-v-d8d96cee] {\n  width: 300px;\n  min-width: 75px;\n}\n.box-card .block[data-v-d8d96cee] {\n  padding: 30px 0;\n  text-align: center;\n}\n"],sourceRoot:""}])},237:function(e,a,t){var r=t(234);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(124)("3cbe8cf8",r,!0)},244:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"body"},[t("el-card",{staticClass:"box-card"},[t("el-row",{staticStyle:{"margin-top":"5px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:6}},[t("div",{staticClass:"bar"},[t("div",{staticClass:"title"},[e._v("客户名称")]),e._v(" "),t("el-select",{attrs:{clearable:!0},model:{value:e.searchOptions.searchParams.customerName,callback:function(a){e.$set(e.searchOptions.searchParams,"customerName",a)},expression:"searchOptions.searchParams.customerName"}},e._l(e.searchOptions.options.customerNameOptions,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)]),e._v(" "),t("el-col",{attrs:{span:6}},[t("div",{staticClass:"bar"},[t("div",{staticClass:"title"},[e._v("品牌")]),e._v(" "),t("el-select",{attrs:{clearable:!0},model:{value:e.searchOptions.searchParams.brandName,callback:function(a){e.$set(e.searchOptions.searchParams,"brandName",a)},expression:"searchOptions.searchParams.brandName"}},e._l(e.searchOptions.options.brandNameOptions,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)]),e._v(" "),t("el-col",{attrs:{span:6}},[t("div",{staticClass:"bar"},[t("div",{staticClass:"title"},[e._v("系列名称")]),e._v(" "),t("el-select",{attrs:{clearable:!0},model:{value:e.searchOptions.searchParams.rangeName,callback:function(a){e.$set(e.searchOptions.searchParams,"rangeName",a)},expression:"searchOptions.searchParams.rangeName"}},e._l(e.searchOptions.options.rangeNameOptions,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)]),e._v(" "),t("el-col",{attrs:{span:6}},[t("div",{staticClass:"bar"},[t("div",{staticClass:"title"},[e._v("订单款号")]),e._v(" "),t("el-select",{attrs:{clearable:!0},model:{value:e.searchOptions.searchParams.number,callback:function(a){e.$set(e.searchOptions.searchParams,"number",a)},expression:"searchOptions.searchParams.number"}},e._l(e.searchOptions.options.styleNumberNameOptions,function(e){return t("el-option",{key:e.id,attrs:{label:e.number,value:e.number}})}))],1)])],1),e._v(" "),t("el-row",{staticStyle:{"margin-top":"30px","margin-bottom":"5px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:12}},[t("div",{staticClass:"bar"},[t("div",{staticClass:"title"},[e._v("添加时间")]),e._v(" "),t("el-date-picker",{staticClass:"inputBar",attrs:{type:"daterange","range-separator":"至","start-placeholde":"开始日期","end-placeholde":"结束日期",clearable:!0},model:{value:e.dateRange,callback:function(a){e.dateRange=a},expression:"dateRange"}})],1)]),e._v(" "),t("el-col",{attrs:{span:2}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("搜索")])],1)],1)],1),e._v(" "),t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"table"},[t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:e.addStyle}},[e._v("添加款号")])],1),e._v(" "),t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:e.importStyle}},[e._v("批量导入")])],1),e._v(" "),t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:e.deleteStyle}},[e._v("删除款号")])],1),e._v(" "),t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:e.bindStyleGroup}},[e._v("绑定款式组")])],1)],1),e._v(" "),t("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableDataA,"max-height":"400",border:"",stripe:!0,"highlight-current-row":!0},on:{"selection-change":e.changeCheckBoxFun}},[t("el-table-column",{attrs:{type:"selection",width:"50",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{type:"index",label:"序号",width:"50",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"styleGroupNumber",width:"150",label:"款式组编号",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"styleGroupName",width:"130",label:"款式组名称",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"number",width:"150",label:"订单款号",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"rangeNumber",width:"130",label:"系列编号",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"customerName",width:"120",label:"客户名称",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"brandName",label:"品牌",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"clothingLevelName",label:"服装层次",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"rangeName",width:"150",label:"系列名称",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"createrName",label:"添加人",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"deptName",label:"部门",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"createTime",width:"170",label:"添加时间",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"addingModeStr",label:"添加方式",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"stateStr",label:"状态",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作",width:"150","min-width":"100",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.changeStyleData(a.row)}}},[e._v("修改")]),e._v(" "),t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.deleteStyleData(a.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("div",{staticClass:"block"},[t("el-pagination",{attrs:{"current-page":e.pagination.currentPage,"page-sizes":e.pagination.pageSizes,"page-size":e.pagination.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pagination.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(a){e.$set(e.pagination,"currentPage",a)}}})],1)],1)]),e._v(" "),t("el-dialog",{attrs:{modal:!1,title:"款式信息",visible:e.dialogFormVisible},on:{"update:visible":function(a){e.dialogFormVisible=a}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-row",{staticStyle:{"margin-top":"5px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"客户名称",placeholder:"请选择客户名称",prop:"customerName"}},[t("el-select",{on:{change:e.dialogCustomerNameSelectionChange},model:{value:e.ruleForm.customerName,callback:function(a){e.$set(e.ruleForm,"customerName",a)},expression:"ruleForm.customerName "}},e._l(e.options.customerNameOptions,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"品牌名称",placeholder:"请选择品牌名称",prop:"brandName"}},[t("el-select",{on:{change:e.dialogBrandNameSelectionChange},model:{value:e.ruleForm.brandName,callback:function(a){e.$set(e.ruleForm,"brandName",a)},expression:"ruleForm.brandName "}},e._l(e.options.brandNameOptions,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"系列名称",placeholder:"请选择系列名称",prop:"rangeName"}},[t("el-select",{model:{value:e.ruleForm.rangeName,callback:function(a){e.$set(e.ruleForm,"rangeName",a)},expression:"ruleForm.rangeName "}},e._l(e.options.rangeNameTypeOptions,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1)],1),e._v(" "),t("el-row",{staticStyle:{"margin-top":"30px","margin-bottom":"5px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"订单款号",placeholder:"请输入订单款号",prop:"number"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.ruleForm.number,callback:function(a){e.$set(e.ruleForm,"number",a)},expression:"ruleForm.number"}})],1)],1)],1),e._v(" "),t("el-row",{staticStyle:{margin:"50px 0 10px 0"}},[t("el-col",{attrs:{span:3,offset:10}},[t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.submitForm("ruleForm")}}},[e._v("保存")])],1),e._v(" "),t("el-col",{attrs:{span:3}},[t("el-button",{attrs:{type:"info"},on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)],1),e._v(" "),t("el-dialog",{attrs:{modal:!1,title:"款式信息",visible:e.dialogFormVisible1},on:{"update:visible":function(a){e.dialogFormVisible1=a}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-row",{staticStyle:{"margin-top":"5px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"客户名称",placeholder:"请选择客户名称",prop:"customerName"}},[t("el-select",{on:{change:e.dialogCustomerNameSelectionChange},model:{value:e.ruleForm.customerName,callback:function(a){e.$set(e.ruleForm,"customerName",a)},expression:"ruleForm.customerName"}},e._l(e.options.customerNameOptions,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"品牌名称",placeholder:"请选择品牌名称",prop:"brandName"}},[t("el-select",{on:{change:e.dialogBrandNameSelectionChange},model:{value:e.ruleForm.brandName,callback:function(a){e.$set(e.ruleForm,"brandName",a)},expression:"ruleForm.brandName"}},e._l(e.options.brandNameOptions,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"系列名称",placeholder:"请选择系列名称",prop:"rangeName"}},[t("el-select",{model:{value:e.ruleForm.rangeName,callback:function(a){e.$set(e.ruleForm,"rangeName",a)},expression:"ruleForm.rangeName"}},e._l(e.options.rangeNameTypeOptions,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1)],1),e._v(" "),t("el-row",{staticStyle:{"margin-top":"30px","margin-bottom":"5px"},attrs:{gutter:20}},[t("el-col",{attrs:{span:10}},[t("el-form-item",{attrs:{label:"订单款号",placeholder:"请输入订单款号",prop:"number"}},[t("el-input",{attrs:{clearable:"",placeholder:"请输入"},model:{value:e.ruleForm.number,callback:function(a){e.$set(e.ruleForm,"number",a)},expression:"ruleForm.number"}})],1)],1)],1),e._v(" "),t("el-row",{staticStyle:{margin:"50px 0 10px 0"}},[t("el-col",{attrs:{span:3,offset:10}},[t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.submitForm1("ruleForm")}}},[e._v("保存")])],1),e._v(" "),t("el-col",{attrs:{span:3}},[t("el-button",{attrs:{type:"info"},on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=24.b1916ecec2711d0792f3.js.map