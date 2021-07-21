function displayblock(color){
  //alert(color);
  if(color == 'blue'){
    var eleid = document.getElementById('blueblocks');
    if(eleid.style.display == 'block')
      alert("Blue is already displayed.");
    else
      eleid.style.display = "block";
    window.location.hash = '#blueblocks';
  }
  if(color == 'green'){
    var eleid = document.getElementById('greenblocks');
    if(eleid.style.display == 'block')
      alert("Green is already displayed.");
    else
      eleid.style.display = "block";
    window.location.hash = '#greenblocks';
  }
  if(color == 'red'){
    var eleid = document.getElementById('redblocks');
    if(eleid.style.display == 'block')
      alert("Red is already displayed.");
    else
      eleid.style.display = "block";
    window.location.hash = '#redblocks';
  }
  if(color == 'pink'){
    var eleid = document.getElementById('pinkblocks');
    if(eleid.style.display == 'block')
      alert("Pink is already displayed.");
    else
      eleid.style.display = "block";
    window.location.hash = '#pinkblocks';
  }
  if(color == 'purple'){
    var eleid = document.getElementById('purpleblocks');
    if(eleid.style.display == 'block')
      alert("Purple is already displayed.");
    else
      eleid.style.display = "block";
    window.location.hash = '#purpleblocks';
  }
  if(color == 'yellow'){
    var eleid = document.getElementById('yellowblocks');
    if(eleid.style.display == 'block')
      alert("Yellow is already displayed.");
    else
      eleid.style.display = "block";
    window.location.hash = '#yellowblocks';
  }
}
function overtoyoubtn(){
  document.getElementById('yellowblocks').style.display = "none";
  document.getElementById('redblocks').style.display = "none";
  document.getElementById('blueblocks').style.display = "none";
  document.getElementById('greenblocks').style.display = "none";
  document.getElementById('pinkblocks').style.display = "none";
  document.getElementById('purpleblocks').style.display = "none";
  window.location.hash = '#bluecontainer';
}
