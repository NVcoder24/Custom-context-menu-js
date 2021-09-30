// default
var block_default_context_menu = false;
var is_custom_context_menu = false;

// stop default context menu event
document.oncontextmenu = function(e){
var evt = new Object({keyCode:93});
  stopEvent(e);
}
function stopEvent(event){
  if (block_default_context_menu) {
    if(event.preventDefault != undefined) {event.preventDefault();}
    if(event.stopPropagation != undefined) {event.stopPropagation();}
  }
}

// custom context menu
let con_menu = $("#context_menu");
let is_toggled = false;

let con_menu_w = $(con_menu).width();
let con_menu_h = $(con_menu).height();

$(con_menu).hide();

let mouse_x = 0;
let mouse_y = 0;

let toggle_pos = [0, 0];

$(document).mousemove(function(event) {
  mouse_x = event.pageX;
  mouse_y = event.pageY;
});

$(document).mousedown(function(event) {
  switch (event.which) {
    case 3:
      if (is_custom_context_menu) {
        is_toggled = true;
        toggle_pos = [mouse_x, mouse_y];
        $(con_menu).css("top", mouse_y);
        $(con_menu).css("left", mouse_x);
      }
      break;
    case 1:
      if (is_toggled) {
        if (mouse_x < toggle_pos[0] || mouse_x > toggle_pos[0] + con_menu_w) {is_toggled=false;}
        if (mouse_y < toggle_pos[1] || mouse_y > toggle_pos[1] + con_menu_h) {is_toggled=false;}
      }
      break;
    default:
      is_toggled = false;
  }

  if (is_toggled) {
    $(con_menu).show();
  } else {
    $(con_menu).hide();
  }
})
