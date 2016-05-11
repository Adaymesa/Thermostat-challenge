'use strict';

function Plane() {
};
Plane.prototype.land = function(airport) {
  // airport.isFull();
  this.isLanded = true;
  this.airport = airport;
};

Plane.prototype.takeOff = function() {
  this.isLanded = false;
  this.airport = 'none';
};




//
//
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
