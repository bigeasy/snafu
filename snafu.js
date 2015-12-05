var gremlins = {}, slice = [].slice

function snafu (path) {
    var gremlin = gremlins[path]
    if (gremlin) {
        if (typeof gremlin == 'function') {
            gremlin = gremlin.call(null, slice.call(arguments, 1))
        }
        if (gremlin) {
            delete gremlins[path]
        }
        return gremlin
    }
    return false
}

function when (path, object) {
    gremlins[path] = object
}

snafu.when = when

module.exports = snafu
