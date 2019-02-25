/* AR Museum Project script.js */
/* mengyliu */

"use strict";


//get random position
//get random rotation
//add to the scene
registerAframeClickDragComponent(window.AFRAME);
AFRAME.registerComponent("phase-shift", {
    init: function() {
      console.warn("installing phase shift");
      var el = this.el;
      el.addEventListener("gripdown", function() {
        el.setAttribute("collision-filter", {
          collisionForces: true
        });
      });
      el.addEventListener("gripup", function() {
        el.setAttribute("collision-filter", {
          collisionForces: false
        });
      });
    }
  });
document.addEventListener('DOMContentLoaded', function() {


  var pictures = document.querySelectorAll(".picture");

  var setPictureEvent = function(picture) {
    var artist = picture.id;
    picture.addEventListener('mouseenter',function(){
      var artist = this.id;
      if (artist) {
        var panel = document.querySelector('#' + artist + 'Panel');
        panel.setAttribute('visible','true');
      }
    });

    picture.addEventListener('mouseleave',function(){
      var artist = this.id;
      if (artist) {
        var panel = document.querySelector('#' + artist + 'Panel');
        panel.setAttribute('visible','false');
      }
    });
  }
  pictures.forEach(p => setPictureEvent(p))

  let cameraRig = document.querySelector("#cameraRig");
  let camera = document.querySelector("#head");
  let waypoint = document.querySelector("#waypoint");

  //attach gaze fuse handle to waypoint
  waypoint.addEventListener("click", function(e) {
    console.log("haha")
    // move the camera rig to the new location
    cameraRig.setAttribute("position", "0 1.5 0");
  });


  var sunflowers = document.querySelectorAll(".sunflower");
  var setSunflowerEvent = function(sunflower) {
    sunflower.addEventListener('click', function(e) {
      sunflower.setAttribute("dynamic-body","true");
    })
  }
  sunflowers.forEach(s => setSunflowerEvent(s))


  // var els = document.querySelectorAll(".sunflower");
  // els.forEach(function(el) {
  //   document.addEventListener("dragstart", function() {
  //     el.removeAttribute("dynamic-body");
  //     console.log("remove")
  //   });
  //   document.addEventListener("dragend", function() {
  //     el.setAttribute("dynamic-body", "true");
  //     console.log("add dynamic-body")
  //   });
  // });

  
});
