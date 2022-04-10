// Code your solution here
function findMatching (drivers,query) {

return drivers.filter(function (callback) { 
    return callback.toLowerCase() === query.toLowerCase() })   
}

function fuzzyMatch (drivers,query) {

    return drivers.filter(function (callback) {
        return callback.toLowerCase().slice(0,query.length) === query.toLowerCase()
    })
}

function matchName (drivers,query) {

    return drivers.filter(function(callback) {
        return callback.name === query
    })
}