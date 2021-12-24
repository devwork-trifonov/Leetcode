/**
 * @param {number} n
 */
var SeatManager = function (n) {
  this.lastReserved = 0;
  this.unreserved = new Set();
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  if (!this.unreserved.size) {
    this.lastReserved += 1;
    return this.lastReserved;
  }
  let minUnreserved = Math.min(...this.unreserved);
  this.unreserved.delete(minUnreserved);
  return minUnreserved;
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  this.unreserved.add(seatNumber);
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
