(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jkDv:function(t,a,e){"use strict";e.r(a),e.d(a,"AdminModule",function(){return x});var n=e("ofXK"),o=e("fXoL"),i=e("/t3+"),b=e("bTqV"),c=e("NFeN"),r=e("tyNb"),d=e("XhcP"),s=e("MutI"),l=e("FKr1");let p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=o.Ib({type:t,selectors:[["app-admin"]],decls:30,vars:8,consts:[["color","primary",1,"example-header"],["mat-icon-button","",3,"click"],[1,"uk-width-expand"],["mat-button","",1,"mini-tittle"],["mat-button","","routerLink","/login",1,"mini-tittle"],[1,"admin-container"],["mode","side","opened","",1,"sidenav-left",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],["sidenav",""],["routerLink","/admin/dashboard"],["matListIcon",""],["matLine",""],["routerLink","/admin/product"],["mode","side",1,"example-sidenav",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],[2,"padding","20px","background-color","#e8ecee"]],template:function(t,a){if(1&t){const t=o.Vb();o.Sb(0),o.Ub(1,"mat-toolbar",0),o.Ub(2,"button",1),o.bc("click",function(){return o.rc(t),o.pc(14).toggle()}),o.Ub(3,"mat-icon"),o.yc(4,"menu"),o.Tb(),o.Tb(),o.Ub(5,"span"),o.yc(6,"Project"),o.Tb(),o.Pb(7,"div",2),o.Ub(8,"button",3),o.yc(9,"Admin"),o.Tb(),o.Ub(10,"button",4),o.yc(11,"Logout"),o.Tb(),o.Tb(),o.Ub(12,"mat-sidenav-container",5),o.Ub(13,"mat-sidenav",6,7),o.Ub(15,"mat-nav-list"),o.Ub(16,"mat-list-item",8),o.Ub(17,"mat-icon",9),o.yc(18,"dashboard"),o.Tb(),o.Ub(19,"h3",10),o.yc(20,"Dashboard"),o.Tb(),o.Tb(),o.Ub(21,"mat-list-item",11),o.Ub(22,"mat-icon",9),o.yc(23,"source"),o.Tb(),o.Ub(24,"h3",10),o.yc(25,"Product"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Pb(26,"mat-sidenav",12,7),o.Ub(28,"mat-sidenav-content",13),o.Pb(29,"router-outlet"),o.Tb(),o.Tb(),o.Rb()}2&t&&(o.Db(13),o.kc("position","start")("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0),o.Db(13),o.kc("position","end")("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0))},directives:[i.a,b.a,c.a,r.a,d.b,d.a,s.d,s.b,s.a,l.j,d.c,r.c],styles:[".sidenav-left[_ngcontent-%COMP%]{width:270px}.admin-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:60px;bottom:0;left:0;right:0}"]}),t})(),m=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=o.Ib({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,a){1&t&&(o.Ub(0,"p"),o.yc(1,"dashboard works!"),o.Tb())},styles:[""]}),t})();var u=e("w55g"),f=e("0IaG"),h=e("kmnG"),T=e("qFsG");let U=(()=>{class t{constructor(t,a){this.dialogRef=t,this.data=a}ngOnInit(){}saveData(){this.dialogRef.close(this.data)}}return t.\u0275fac=function(a){return new(a||t)(o.Ob(f.g),o.Ob(f.a))},t.\u0275cmp=o.Ib({type:t,selectors:[["app-product-detail"]],decls:24,vars:0,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["appearance","outline",2,"width","100%"],["matInput",""],["matInput","","type","number"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button",""]],template:function(t,a){1&t&&(o.Ub(0,"h3",0),o.yc(1," Detail Produk "),o.Tb(),o.Ub(2,"div",1),o.Ub(3,"mat-form-field",2),o.Ub(4,"mat-label"),o.yc(5,"Nama"),o.Tb(),o.Pb(6,"input",3),o.Tb(),o.Ub(7,"mat-form-field",2),o.Ub(8,"mat-label"),o.yc(9,"Kode"),o.Tb(),o.Pb(10,"input",3),o.Tb(),o.Ub(11,"mat-form-field",2),o.Ub(12,"mat-label"),o.yc(13,"Kategori"),o.Tb(),o.Pb(14,"input",3),o.Tb(),o.Ub(15,"mat-form-field",2),o.Ub(16,"mat-label"),o.yc(17,"Jumlah"),o.Tb(),o.Pb(18,"input",4),o.Tb(),o.Tb(),o.Ub(19,"div",5),o.Ub(20,"button",6),o.yc(21,"Batal"),o.Tb(),o.Ub(22,"button",7),o.yc(23,"Simpan"),o.Tb(),o.Tb())},directives:[f.h,f.e,h.b,h.e,T.b,f.c,b.a,f.d],styles:[""]}),t})();var y=e("Wp6s");let g=(()=>{class t{constructor(t){this.dialog=t,this.barang={},this.barangs=[]}ngOnInit(){this.title="Product"}productDetail(t,a){this.dialog.open(U,{width:"400px",data:t}).afterClosed().subscribe(t=>{t&&(-1==a?this.barangs.push(t):this.barangs[a]=t)})}}return t.\u0275fac=function(a){return new(a||t)(o.Ob(f.b))},t.\u0275cmp=o.Ib({type:t,selectors:[["app-product"]],decls:23,vars:1,consts:[[1,"uk-flex"],[1,"uk-width-expand"],["mat-flat-button","","color","primary",3,"click"],[1,"uk-table","uk-table-middle","uk-table-divider"],["align","right"]],template:function(t,a){1&t&&(o.Ub(0,"mat-card"),o.Ub(1,"mat-card-header"),o.Ub(2,"mat-card-title"),o.yc(3),o.Tb(),o.Tb(),o.Ub(4,"mat-card-content"),o.Ub(5,"div",0),o.Pb(6,"span",1),o.Ub(7,"button",2),o.bc("click",function(){return a.productDetail({},-1)}),o.yc(8,"Tambah Produk"),o.Tb(),o.Tb(),o.Ub(9,"table",3),o.Ub(10,"thead"),o.Ub(11,"th"),o.yc(12,"No"),o.Tb(),o.Ub(13,"th"),o.yc(14,"Nama"),o.Tb(),o.Ub(15,"th"),o.yc(16,"Kode"),o.Tb(),o.Ub(17,"th"),o.yc(18,"Kategori"),o.Tb(),o.Ub(19,"th"),o.yc(20,"Jumlah"),o.Tb(),o.Ub(21,"th",4),o.yc(22,"#"),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Tb()),2&t&&(o.Db(3),o.zc(a.title))},directives:[y.a,y.c,y.e,y.b,b.a],styles:[""]}),t})();var v=e("3Pt+");const k=[{path:"",component:p,children:[{path:"dashboard",component:m},{path:"product",component:g},{path:"",pathMatch:"full",redirectTo:"/admin/dashboard"}]}];let x=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({imports:[[n.c,r.b.forChild(k),u.a,v.d]]}),t})()}}]);