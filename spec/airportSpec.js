'use strict';

describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane')
  });

  it('Can hold a plane', function() {
    airport.dock(plane);
    expect(airport.landedPlanes()).toContain(plane);
  });

  it('Report when full', function() {
    for (var i = 1; i <= airport.MAX_CAPACITY; i++) {
      airport.dock(plane);
    }
    expect(function() {
      airport.dock(plane);
    }).toThrowError("nope, full!");
  });
});
