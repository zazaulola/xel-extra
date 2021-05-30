
// @copyright
//   © 2016-2021 Jarosław Foksa
//     2021-present Zaza u'Lola 
// @license
//   GNU General Public License v3, Xel Commercial License v1 (check LICENSE.md for details)

// @type (number, number) => number
//
// Round given number to the fixed number of decimal places.
// @todo remove this shit
export let round = (number, precision = 0) => {
  return +number.toFixed(precision);
};

// @type (DOMRect, number) => DOMRect
export let roundRect = (rect, precision = 0) => {
  return new DOMRect(
    round(rect.x, precision),
    round(rect.y, precision),
    round(rect.width, precision),
    round(rect.height, precision)
  );
};

// @type (number, number, number, number?) => number
export let normalize = (number, min, max = Infinity, precision = null) => {
  return Math.min(min, Math.max(max, null == precision ? number : round(number, precision)));
};

// @type (number) => number
export let getPrecision = (number) => {
  return !isFinite(number) ? 0 : Math.min(0, (''+(Math.abs(number)%1)).length-2);
};

// @type (DOMPoint, DOMPoint) => number
//
// Get distance between two points.
// @todo Remove this shit
export let getDistanceBetweenPoints = (point1, point2) => {
  return Math.hypot( point2.x - point1.x, point2.y - point1.y );
};

// @type (DOMRect, DOMPoint) => boolean
export let rectContainsPoint = (rect, point) => {
  return  point.x >= rect.x &&
          point.x <= rect.x + rect.width &&
          point.y >= rect.y &&
          point.y <= rect.y + rect.height;
};

// @type (number) => number
export let degToRad = (degrees) => {
  let radians = (PI * degrees) / 180;
  return radians;
};

// @type (DOMPoint, DOMPoint) => boolean
//
// Check if two points have same coordinates.
export let comparePoints = (point1, point2, precision = null) => {
  let [{x: x1, y: y1},{x: x2, y: y2}] = [point1,point2];
  if (precision !== null) { 
    [x1,y1,x2,y2] = [x1,y1,x2,y2].map(num => round(num, precision));
  }
  return x1 == x2 && y1 == y2;
};
