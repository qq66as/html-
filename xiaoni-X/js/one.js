// 获取id
var doing = document.getElementById("doing").getElementsByTagName("li");
console.log(doing);
var niu = document.getElementById("niu").getElementsByTagName("li");
console.log(niu);
// 通过遍历绑定点击事件 
for(var i = 0; i<doing.length;i++){
    doing[i].onclick = listclewr;
}
// 通过函数判断go-tlool背景
function listclewr(){
    for(var i = 0 ; i< doing.length;i++){
      if(doing[i]){
        doing[i].className ="go-tool";
        niu[i].className = "clearfa active";
      }
       else{
           doing[i].className = "";
          niu[i].className = "clearfa"; 
       }
    }
};