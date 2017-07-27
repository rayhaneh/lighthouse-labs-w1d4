
var tweeps = ['@wired','@techmeme','@mozilla'];

var faces = {
  smiley: function () {
    return " :) "
  },
  sadly: function () {
    return " :( "
  },
  winky : function () {
    return " ;) "
  }
};



function addFaces(arr,whichFace) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] + whichFace())
  }
}
addFaces (tweeps,faces.smiley)
addFaces (tweeps,faces.sadly)
addFaces (tweeps,faces.winky)

addFaces (tweeps,function () {
  return " 8) "
})