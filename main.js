function clck(val){
  document.getElementById("outscrn").value=document.getElementById("outscrn").value+val;

}
function clearDisplay(){
  document.getElementById("outscrn").value=""
}
function equalClick(){
  var text=document.getElementById("outscrn").value
  result=eval(text)
  document.getElementById("outscrn").value=result
}