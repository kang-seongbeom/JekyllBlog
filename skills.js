//front
let $js_label = document.getElementById("js_label");
let $js_progress = document.getElementById("js_progress"); 

//back
let $java_label = document.getElementById("java_label");
let $java_progress = document.getElementById("java_progress"); 

//devops
let $mysql_label = document.getElementById("mysql_label");
let $mysql_progress = document.getElementById("mysql_progress"); 

//ide
let $intellij_label = document.getElementById("intellij_label");
let $intellij_progress = document.getElementById("intellij_progress"); 
let $vscode_label = document.getElementById("vscode_label");
let $vscode_progress = document.getElementById("vscode_progress"); 

//collaboration
let $git_label = document.getElementById("git_label");
let $git_progress = document.getElementById("git_progress"); 
let $notion_label = document.getElementById("notion_label");
let $notion_progress = document.getElementById("notion_progress"); 


function move(pro, el, num) {
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= num) {
        clearInterval(id);
      } else {
        width++; 
        pro.style.width = width + '%'; 
        el.innerHTML = width * 1  + '%';
      }
    }
}

move($js_progress, $js_label, 40);
move($java_progress, $java_label, 70);
move($mysql_progress, $mysql_label, 45);
move($intellij_progress, $intellij_label, 70);
move($vscode_progress, $vscode_label, 60);
move($git_progress, $git_label, 30);
move($notion_progress, $notion_label, 40);