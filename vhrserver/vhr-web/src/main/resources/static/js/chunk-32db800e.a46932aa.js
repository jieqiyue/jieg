(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32db800e"],{"58da":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",[i("el-input",{staticStyle:{width:"300px","margin-right":"10px"},attrs:{disabled:e.showAdvanceSearchView,placeholder:"请输入员工名搜索员工...","prefix-icon":"el-icon-search",clearable:""},on:{input:e.initEmps,clear:e.initEmps},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.initEmps(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),i("el-button",{attrs:{disabled:e.showAdvanceSearchView,icon:"el-icon-search",type:"primary"},on:{click:e.initEmps}},[e._v("搜索")]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showAdvanceSearchView=!e.showAdvanceSearchView}}},[i("i",{class:e.showAdvanceSearchView?"fa fa-angle-double-up":"fa fa-angle-double-down",attrs:{"aria-hidden":"true"}}),e._v(" 高级搜索")])],1),i("div",[i("el-upload",{staticStyle:{display:"inline-flex","margin-right":"8px"},attrs:{"show-file-list":!1,"before-upload":e.beforeUpload,"on-success":e.onSuccess,disabled:e.importDataDisable,"on-error":e.onError,action:"/employee/basic/import"}},[i("el-button",{attrs:{disabled:e.importDataDisable,type:"success",icon:e.importDataBtnIcon}},[e._v(" "+e._s(e.importDataBtnText))])],1),i("el-button",{attrs:{type:"success"},on:{click:e.exportData}},[i("i",{staticClass:"fa fa-level-down"}),e._v(" 导出数据")]),i("el-button",{attrs:{type:"success",icon:"el-icon-plus"},on:{click:e.showAddEmpView}},[e._v(" 添加员工")])],1)]),i("transition",{attrs:{name:"slide-fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showAdvanceSearchView,expression:"showAdvanceSearchView"}],staticStyle:{border:"1px solid #409eff","border-radius":"5px","box-sizing":"border-box",padding:"5px",margin:"10px 0px"}},[i("el-row",[i("el-col",{attrs:{span:5}},[e._v(" 政治面貌： "),i("el-select",{staticStyle:{width:"130px"},attrs:{placeholder:"政治面貌",size:"mini"},model:{value:e.searchValue.politicId,callback:function(t){e.$set(e.searchValue,"politicId",t)},expression:"searchValue.politicId"}},e._l(e.politicsstatus,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-col",{attrs:{span:4}},[e._v(" 民族： "),i("el-select",{staticStyle:{width:"130px"},attrs:{placeholder:"民族",size:"mini"},model:{value:e.searchValue.nationId,callback:function(t){e.$set(e.searchValue,"nationId",t)},expression:"searchValue.nationId"}},e._l(e.nations,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-col",{attrs:{span:4}},[e._v(" 职位： "),i("el-select",{staticStyle:{width:"130px"},attrs:{placeholder:"职位",size:"mini"},model:{value:e.searchValue.posId,callback:function(t){e.$set(e.searchValue,"posId",t)},expression:"searchValue.posId"}},e._l(e.positions,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-col",{attrs:{span:4}},[e._v(" 职称： "),i("el-select",{staticStyle:{width:"130px"},attrs:{placeholder:"职称",size:"mini"},model:{value:e.searchValue.jobLevelId,callback:function(t){e.$set(e.searchValue,"jobLevelId",t)},expression:"searchValue.jobLevelId"}},e._l(e.joblevels,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-col",{attrs:{span:7}},[e._v(" 聘用形式： "),i("el-radio-group",{model:{value:e.searchValue.engageForm,callback:function(t){e.$set(e.searchValue,"engageForm",t)},expression:"searchValue.engageForm"}},[i("el-radio",{attrs:{label:"劳动合同"}},[e._v("劳动合同")]),i("el-radio",{attrs:{label:"劳务合同"}},[e._v("劳务合同")])],1)],1)],1),i("el-row",{staticStyle:{"margin-top":"10px"}},[i("el-col",{attrs:{span:5}},[e._v(" 所属部门： "),i("el-popover",{attrs:{placement:"right",title:"请选择部门",width:"200",trigger:"manual"},model:{value:e.popVisible2,callback:function(t){e.popVisible2=t},expression:"popVisible2"}},[i("el-tree",{attrs:{"default-expand-all":"",data:e.allDeps,props:e.defaultProps},on:{"node-click":e.searchViewHandleNodeClick}}),i("div",{staticStyle:{"box-sizing":"border-box","padding-left":"8px","align-items":"center",width:"130px",display:"inline-flex","margin-left":"3px","font-size":"13px",border:"1px solid #dedede",height:"26px","border-radius":"5px",cursor:"pointer"},attrs:{slot:"reference"},on:{click:e.showAdvanceDepView},slot:"reference"},[e._v(e._s(e.inputDepName)+" ")])],1)],1),i("el-col",{attrs:{span:10}},[e._v(" 入职日期： "),i("el-date-picker",{attrs:{size:"mini",type:"daterange","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.searchValue.beginDateScope,callback:function(t){e.$set(e.searchValue,"beginDateScope",t)},expression:"searchValue.beginDateScope"}})],1),i("el-col",{attrs:{span:5,offset:2}},[i("el-button",[e._v(" 取消 ")]),i("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:function(t){return e.initEmps("advanced")}}},[e._v("搜索")])],1)],1)],1)])],1),i("div",{staticStyle:{"margin-top":"10px"}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.emps,stripe:"",border:""}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),i("el-table-column",{attrs:{prop:"name",label:"姓名",fixed:"",align:"left",width:"90"}}),i("el-table-column",{attrs:{prop:"gender",label:"性别",fixed:"",align:"left",width:"90"}}),i("el-table-column",{attrs:{prop:"idCard",label:"工号",align:"left",width:"85"}}),i("el-table-column",{attrs:{prop:"birthday",width:"95",align:"left",label:"出生日期"}}),i("el-table-column",{attrs:{prop:"idCard",width:"150",align:"left",label:"身份证号码"}}),i("el-table-column",{attrs:{prop:"wedlock",width:"70",label:"婚姻状况"}}),i("el-table-column",{attrs:{prop:"nation.name",width:"50",label:"名族"}}),i("el-table-column",{attrs:{prop:"nativePlace",width:"85",label:"籍贯"}}),i("el-table-column",{attrs:{prop:"politicsstatus.name",label:"政治面貌"}}),i("el-table-column",{attrs:{prop:"email",width:"180",align:"left",label:"电子邮件"}}),i("el-table-column",{attrs:{prop:"address",width:"220",align:"left",label:"联系地址"}}),i("el-table-column",{attrs:{prop:"department.name",width:"100",align:"left",label:"所属部门"}}),i("el-table-column",{attrs:{prop:"position.name",width:"100",label:"职位"}}),i("el-table-column",{attrs:{prop:"jobLevel.name",width:"100",align:"left",label:"职称"}}),i("el-table-column",{attrs:{prop:"engageForm",width:"100",align:"left",label:"聘用形式"}}),i("el-table-column",{attrs:{prop:"specialty",width:"150",align:"left",label:"专业"}}),i("el-table-column",{attrs:{prop:"school",width:"150",align:"left",label:"毕业院校"}}),i("el-table-column",{attrs:{prop:"beginDate",width:"100",align:"left",label:"入职日期"}}),i("el-table-column",{attrs:{prop:"conversionTime",width:"100",align:"left",label:"转正日期"}}),i("el-table-column",{attrs:{prop:"beginContract",width:"95",align:"left",label:"合同起始日期"}}),i("el-table-column",{attrs:{prop:"endContract",width:"95",align:"left",label:"合同截止日期"}}),i("el-table-column",{attrs:{prop:"contractTerm",width:"100",label:"合同期限",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tag",[e._v(e._s(t.row.contractTerm))]),e._v("年 ")]}}])}),i("el-table-column",{attrs:{prop:"tiptopDegree",label:"最高学历"}}),i("el-table-column",{attrs:{fixed:"right",width:"220",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini"},on:{click:function(i){return e.showEditView(t.row)}}},[e._v("编辑")]),i("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini",type:"primary"}},[e._v("查看高级资料")]),i("el-button",{staticStyle:{padding:"3px"},attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.deleteEmp(t.row)}}},[e._v("删除")])]}}])},[e._v(' size="mini" ')])],1),i("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[i("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:e.total},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)],1),i("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("div",[i("el-form",{ref:"empForm",attrs:{model:e.emp,rules:e.rules}},[i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"姓名：",prop:"name"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{"prefix-icon":"el-icon-edit",placeholder:"请输入员工姓名",size:"mini"},model:{value:e.emp.name,callback:function(t){e.$set(e.emp,"name",t)},expression:"emp.name"}})],1)],1),i("el-col",{attrs:{span:5}},[i("el-form-item",{attrs:{label:"性别：",prop:"gender"}},[i("el-radio-group",{model:{value:e.emp.gender,callback:function(t){e.$set(e.emp,"gender",t)},expression:"emp.gender"}},[i("el-radio",{attrs:{label:"男"}},[e._v("男")]),i("el-radio",{attrs:{label:"女"}},[e._v("女")])],1)],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"出生日期：",prop:"birthday"}},[i("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",size:"mini","value-format":"yyyy-MM-dd",placeholder:"出生日期"},model:{value:e.emp.birthday,callback:function(t){e.$set(e.emp,"birthday",t)},expression:"emp.birthday"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"政治面貌：",prop:"politicId"}},[i("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"政治面貌",size:"mini"},model:{value:e.emp.politicId,callback:function(t){e.$set(e.emp,"politicId",t)},expression:"emp.politicId"}},e._l(e.politicsstatus,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"民族：",prop:"nationId"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"民族",size:"mini"},model:{value:e.emp.nationId,callback:function(t){e.$set(e.emp,"nationId",t)},expression:"emp.nationId"}},e._l(e.nations,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),i("el-col",{attrs:{span:5}},[i("el-form-item",{attrs:{label:"籍贯：",prop:"nativePlace"}},[i("el-input",{staticStyle:{width:"120px"},attrs:{"prefix-icon":"el-icon-edit",placeholder:"请输入籍贯",size:"mini"},model:{value:e.emp.nativePlace,callback:function(t){e.$set(e.emp,"nativePlace",t)},expression:"emp.nativePlace"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"电子邮箱：",prop:"email"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{"prefix-icon":"el-icon-message",placeholder:"请输电子邮箱",size:"mini"},model:{value:e.emp.email,callback:function(t){e.$set(e.emp,"email",t)},expression:"emp.email"}})],1)],1),i("el-col",{attrs:{span:7}},[i("el-form-item",{attrs:{label:"联系地址：",prop:"address"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-edit",placeholder:"请输入联系地址",size:"mini"},model:{value:e.emp.address,callback:function(t){e.$set(e.emp,"address",t)},expression:"emp.address"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"职位：",prop:"posId"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"职位",size:"mini"},model:{value:e.emp.posId,callback:function(t){e.$set(e.emp,"posId",t)},expression:"emp.posId"}},e._l(e.positions,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),i("el-col",{attrs:{span:5}},[i("el-form-item",{attrs:{label:"职称：",prop:"jobLevelId"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"职称",size:"mini"},model:{value:e.emp.jobLevelId,callback:function(t){e.$set(e.emp,"jobLevelId",t)},expression:"emp.jobLevelId"}},e._l(e.joblevels,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"所属部门：",prop:"departmentId"}},[i("el-popover",{attrs:{placement:"right",title:"请选择部门",width:"200",trigger:"manual"},model:{value:e.popVisible,callback:function(t){e.popVisible=t},expression:"popVisible"}},[i("el-tree",{attrs:{"default-expand-all":"",data:e.allDeps,props:e.defaultProps},on:{"node-click":e.handleNodeClick}}),i("div",{staticStyle:{"box-sizing":"border-box","padding-left":"8px","align-items":"center",width:"150px",display:"inline-flex","font-size":"13px",border:"1px solid #dedede",height:"26px","border-radius":"5px",cursor:"pointer"},attrs:{slot:"reference"},on:{click:e.showDepView},slot:"reference"},[e._v(e._s(e.inputDepName)+" ")])],1)],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"电话号码：",prop:"phone"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{"prefix-icon":"el-icon-phone",placeholder:"请输入电话号码",size:"mini"},model:{value:e.emp.phone,callback:function(t){e.$set(e.emp,"phone",t)},expression:"emp.phone"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"工号：",prop:"workID"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{disabled:"","prefix-icon":"el-icon-edit",placeholder:"请输入员工工号",size:"mini"},model:{value:e.emp.wordID,callback:function(t){e.$set(e.emp,"wordID",t)},expression:"emp.wordID"}})],1)],1),i("el-col",{attrs:{span:5}},[i("el-form-item",{attrs:{label:"学历：",prop:"tiptopDegree"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"学历",size:"mini"},model:{value:e.emp.tiptopDegree,callback:function(t){e.$set(e.emp,"tiptopDegree",t)},expression:"emp.tiptopDegree"}},e._l(e.tiptopDegrees,(function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"毕业院校：",prop:"school"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{"prefix-icon":"el-icon-edit",placeholder:"请输入毕业院校",size:"mini"},model:{value:e.emp.school,callback:function(t){e.$set(e.emp,"school",t)},expression:"emp.school"}})],1)],1),i("el-col",{attrs:{span:7}},[i("el-form-item",{attrs:{label:"专业名称：",prop:"specialty"}},[i("el-input",{staticStyle:{width:"150px"},attrs:{"prefix-icon":"el-icon-edit",placeholder:"请输入专业名称",size:"mini"},model:{value:e.emp.specialty,callback:function(t){e.$set(e.emp,"specialty",t)},expression:"emp.specialty"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"入职日期：",prop:"beginDate"}},[i("el-date-picker",{staticStyle:{width:"130px"},attrs:{type:"date",size:"mini","value-format":"yyyy-MM-dd",placeholder:"出生日期"},model:{value:e.emp.beginDate,callback:function(t){e.$set(e.emp,"beginDate",t)},expression:"emp.beginDate"}})],1)],1),i("el-col",{attrs:{span:5}},[i("el-form-item",{attrs:{label:"转正日期：",prop:"conversionTime"}},[i("el-date-picker",{staticStyle:{width:"130px"},attrs:{type:"date",size:"mini","value-format":"yyyy-MM-dd",placeholder:"转正日期"},model:{value:e.emp.conversionTime,callback:function(t){e.$set(e.emp,"conversionTime",t)},expression:"emp.conversionTime"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"合同起始日期：",prop:"beginContract"}},[i("el-date-picker",{staticStyle:{width:"130px"},attrs:{type:"date",size:"mini","value-format":"yyyy-MM-dd",placeholder:"合同起始日期"},model:{value:e.emp.beginContract,callback:function(t){e.$set(e.emp,"beginContract",t)},expression:"emp.beginContract"}})],1)],1),i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"合同终止日期：",prop:"endContract"}},[i("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",size:"mini","value-format":"yyyy-MM-dd",placeholder:"合同终止日期"},model:{value:e.emp.endContract,callback:function(t){e.$set(e.emp,"endContract",t)},expression:"emp.endContract"}})],1)],1)],1),i("el-row",[i("el-col",{attrs:{span:7}},[i("el-form-item",{attrs:{label:"身份证号码：",prop:"idCard"}},[i("el-input",{staticStyle:{width:"200px"},attrs:{"prefix-icon":"el-icon-edit",placeholder:"请输入身份证号码",size:"mini"},model:{value:e.emp.idCard,callback:function(t){e.$set(e.emp,"idCard",t)},expression:"emp.idCard"}})],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"聘用形式：",prop:"engageForm"}},[i("el-radio-group",{model:{value:e.emp.engageForm,callback:function(t){e.$set(e.emp,"engageForm",t)},expression:"emp.engageForm"}},[i("el-radio",{attrs:{label:"劳动合同"}},[e._v("劳动合同")]),i("el-radio",{attrs:{label:"劳务合同"}},[e._v("劳务合同")])],1)],1)],1),i("el-col",{attrs:{span:9}},[i("el-form-item",{attrs:{label:"婚姻状况：",prop:"wedlock"}},[i("el-radio-group",{model:{value:e.emp.wedlock,callback:function(t){e.$set(e.emp,"wedlock",t)},expression:"emp.wedlock"}},[i("el-radio",{attrs:{label:"已婚"}},[e._v("已婚")]),i("el-radio",{attrs:{label:"未婚"}},[e._v("未婚")])],1)],1)],1)],1)],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.doAddEmp}},[e._v("确 定")])],1)])],1)},a=[],o=(i("b0c0"),{name:"EmpBasic",data:function(){return{popVisible2:!1,popAdvanceVisible:!1,searchValue:{politicId:null,nationId:null,jobLevelId:null,posId:null,engageForm:null,departmentId:null,beginDateScope:null},showAdvanceSearchView:!1,importDataDisable:!1,importDataBtnIcon:"el-icon-upload2",importDataBtnText:"导入数据",title:"添加员工",allDeps:[],rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],gender:[{required:!0,message:"请输入性别",trigger:"blur"}],politicId:[{required:!0,message:"请输入政治面貌",trigger:"blur"}],birthday:[{required:!0,message:"请输入生日",trigger:"blur"}],nationId:[{required:!0,message:"请输入民族",trigger:"blur"}],email:[{required:!0,message:"请输入电子邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}],nativePlace:[{required:!0,message:"请输入籍贯",trigger:"blur"}],address:[{required:!0,message:"请输入员工地址",trigger:"blur"}],posId:[{required:!0,message:"请输入职位",trigger:"blur"}],jobLevelId:[{required:!0,message:"请输入职称",trigger:"blur"}],departmentId:[{required:!0,message:"请输入所属部门",trigger:"blur"}],phone:[{required:!0,message:"请输入电话号码",trigger:"blur"}],tiptopDegree:[{required:!0,message:"请输入学历",trigger:"blur"}],school:[{required:!0,message:"请输入毕业院校",trigger:"blur"}],specialty:[{required:!0,message:"请输入专业名称",trigger:"blur"}],beginDate:[{required:!0,message:"请输入入职日期",trigger:"blur"}],conversionTime:[{required:!0,message:"请输入转正日期",trigger:"blur"}],beginContract:[{required:!0,message:"请输入合同起始日期",trigger:"blur"}],endContract:[{required:!0,message:"请输入合同终止日期",trigger:"blur"}],idCard:[{required:!0,message:"请输入身份证号码",trigger:"blur"},{pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,message:"身份证号码格式不正确",trigger:"blur"}],engageForm:[{required:!0,message:"请输入聘用形式",trigger:"blur"}],wedlock:[{required:!0,message:"请输入婚姻状况",trigger:"blur"}]},nations:[],joblevels:[],politicsstatus:[],positions:[],tiptopDegrees:["本科","大专","博士","硕士","高中","初中","小学","其他"],popVisible:!1,inputDepName:"所属部门",options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],emps:[],loading:!1,total:0,page:1,dialogVisible:!1,size:10,keyword:"",emp:{name:"jieqiyue",gender:"男",birthday:"1998-12-12",idCard:"6161623211232221",wedlock:"未婚",nationId:1,nativePlace:"江西",politicId:13,email:"2207061933@qq.com",phone:"13838383838",address:"江西上饶",departmentId:5,jobLevelId:9,posId:29,engageForm:"劳务合同",tiptopDegree:"本科",specialty:"计算机科学与技术",school:"东华理工大学",beginDate:"2021-6-6",workState:"在职",workID:"00000099",contractTerm:2,conversionTime:"2021-7-8",notworkDate:null,beginContract:"2020-6-5",endContract:"2020-8-5",workAge:null},defaultProps:{children:"children",label:"name"}}},mounted:function(){this.initEmps(),this.initData(),this.initPositions()},methods:{searchViewHandleNodeClick:function(e){this.popVisible2=!this.popVisible2,this.inputDepName=e.name,this.searchValue.departmentId=e.id},onError:function(e,t,i){this.importDataDisable=!1,this.importDataBtnIcon="el-icon-upload2",this.importDataBtnText="导入数据"},onSuccess:function(e,t,i){this.importDataDisable=!1,this.importDataBtnIcon="el-icon-upload2",this.importDataBtnText="导入数据",this.initEmps()},beforeUpload:function(){this.importDataDisable=!0,this.importDataBtnIcon="el-icon-loading",this.importDataBtnText="正在导入"},exportData:function(){window.open("/employee/basic/export","_parent")},showEditView:function(e){this.initPositions(),this.inputDepName=e.department.name,this.title="更新员工",this.dialogVisible=!0,this.emp=e},emptyEmp:function(){this.emp={name:"",gender:"",birthday:"",idCard:"",wedlock:"",nationId:1,nativePlace:"",politicId:13,email:"",phone:"",address:"",departmentId:null,jobLevelId:9,posId:29,engageForm:"",tiptopDegree:"",specialty:"",school:"",beginDate:"",workID:"",contractTerm:2,conversionTime:"",notworkDate:null,beginContract:"",endContract:"",workAge:null},this.inputDepName=""},deleteEmp:function(e){var t=this;this.$confirm("此操作将永久删除 "+e.name+" 角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.deleteRequest("/employee/basic/"+e.id).then((function(e){t.initEmps()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},doAddEmp:function(){var e=this;this.emp.id?this.$refs["empForm"].validate((function(t){t&&e.putRequest("/employee/basic/",e.emp).then((function(t){t&&(e.dialogVisible=!1,e.initEmps())}))})):this.$refs["empForm"].validate((function(t){t&&(console.log("准备更新的员工数据为："),console.log(e.emp),e.postRequest("/employee/basic/",e.emp).then((function(t){t&&(e.dialogVisible=!1,e.initEmps())})))}))},handleNodeClick:function(e){this.emp.departmentId=e.id,this.inputDepName=e.name,this.popVisible=!this.popVisible},showDepView:function(){this.popVisible=!this.popVisible},showAdvanceDepView:function(){this.popVisible2=!this.popVisible2},getMaxWordID:function(){var e=this;this.getRequest("/employee/basic/maxWordID").then((function(t){t&&(e.emp.workID=t.obj)}))},initPositions:function(){var e=this;this.getRequest("/employee/basic/positions").then((function(t){t&&(e.positions=t)}))},initData:function(){var e=this;window.sessionStorage.getItem("nations")?this.nations=JSON.parse(window.sessionStorage.getItem("nations")):this.getRequest("/employee/basic/nations").then((function(t){t&&(window.sessionStorage.setItem("nations",JSON.stringify(t)),e.nations=t)})),window.sessionStorage.getItem("politicsstatus")?this.politicsstatus=JSON.parse(window.sessionStorage.getItem("politicsstatus")):this.getRequest("/employee/basic/politicsstatus").then((function(t){t&&(window.sessionStorage.setItem("politicsstatus",JSON.stringify(t)),e.politicsstatus=t)})),window.sessionStorage.getItem("joblevel")?this.joblevels=JSON.parse(window.sessionStorage.getItem("joblevel")):this.getRequest("/employee/basic/joblevel").then((function(t){t&&(window.sessionStorage.setItem("joblevel",JSON.stringify(t)),e.joblevels=t)})),window.sessionStorage.getItem("allDeps")?this.allDeps=JSON.parse(window.sessionStorage.getItem("allDeps")):this.getRequest("/employee/basic/deps").then((function(t){t&&(window.sessionStorage.setItem("allDeps",JSON.stringify(t)),e.allDeps=t)}))},showAddEmpView:function(){this.emptyEmp(),this.title="添加员工",this.dialogVisible=!0,this.getMaxWordID()},sizeChange:function(e){this.size=e,this.initEmps()},currentChange:function(e){this.page=e,this.initEmps()},initEmps:function(e){var t=this;console.log(this.searchValue.beginDateScope),this.loading=!0;var i="/employee/basic/?page="+this.page+"&size="+this.size;e&&"advanced"==e?(this.searchValue.politicId&&(i+="&politicId="+this.searchValue.politicId),this.searchValue.nationId&&(i+="&nationId="+this.searchValue.nationId),this.searchValue.jobLevelId&&(i+="&jobLevelId="+this.searchValue.jobLevelId),this.searchValue.posId&&(i+="&posId="+this.searchValue.posId),this.searchValue.engageForm&&(i+="&engageForm="+this.searchValue.engageForm),this.searchValue.departmentId&&(i+="&departmentId="+this.searchValue.departmentId),this.searchValue.beginDateScope&&(i+="&beginDateScope="+this.searchValue.beginDateScope)):i+="&name="+this.keyword,this.getRequest(i).then((function(e){t.loading=!1,e&&(t.emps=e.data,t.total=e.total)}))}}}),s=o,n=(i("ec21"),i("2877")),r=Object(n["a"])(s,l,a,!1,null,null,null);t["default"]=r.exports},8759:function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._v(" 高级员工资料 ")])},a=[],o={name:"EmpAdv"},s=o,n=i("2877"),r=Object(n["a"])(s,l,a,!1,null,"30037b58",null);t["default"]=r.exports},c6ed:function(e,t,i){},ec21:function(e,t,i){"use strict";i("c6ed")}}]);
//# sourceMappingURL=chunk-32db800e.a46932aa.js.map