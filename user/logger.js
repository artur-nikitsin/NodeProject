module.exports = function (module) {
    return function (/*....*/) {
var args =[].slice.call(arguments);
console.log.apply(console,arguments);
    };
};