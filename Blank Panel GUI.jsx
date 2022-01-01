{
function TableMaker(thisObj) {

var db = new Object();
db = function(a){$.writeln(a)}

var tm= new Object();
tm.scriptName = "Panel";


var pal;
function Script_buildUI(thisObj) {
    pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", tm.scriptName, undefined, {resizeable: true}, orientation = "column", alignChildren = ["center","top"],); 
    if (pal != null) {
        var res= 
            """group 
            {
                orientation: 'column', margins: [0, 0, 0, 0],
                group2: Group { 
                    orientation: 'row', alignChildren: ['left', 'center'], spacing: 10, margins: -10, 
                    button1: Button {text: 'Create',}, 
                } 
            }

            """;
            var group1 = pal.add("group", undefined, {name: "group1"}); 
            group1.orientation = "row"; 
            group1.alignChildren = ["left","center"]; 
            group1.spacing = 0; 
            group1.margins = -10; 
            var checkbox1 = group1.add("checkbox", undefined, undefined, {name: "checkbox1"}); 
            checkbox1.text = "Select Data"; 

            pal.grp= pal.add(res);
    }
    return (pal);
}



function Build_UI() {
    // Build script panel
    var myScriptPal = Script_buildUI(thisObj);


        if (myScriptPal !== null) {
            if (myScriptPal instanceof Window) {
                myScriptPal.center();
                myScriptPal.show();
            } else {
                myScriptPal.layout.layout(true);
                myScriptPal.layout.resize();
            }
        } else {
            
        alert("Could not open the user interface.", tm.scriptName);
        }
    }
Build_UI(this);
}
TableMaker(this)
}



