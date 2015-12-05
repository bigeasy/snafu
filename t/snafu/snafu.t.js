require('proof')(6, prove)

function prove (assert) {
    var snafu = require('../..')

    assert(!snafu('bigeasy.snafu'), 'no snafu')

    snafu.when('bigeasy.snafu', true)

    assert(snafu('bigeasy.snafu'), 'snafu')
    assert(!snafu('bigeasy.snafu'), 'snafu cleared')

    var results = [ false, true ]
    snafu.when('bigeasy.snafu', function () { return results.shift() })

    assert(!snafu('bigeasy.snafu'), 'function false')
    assert(snafu('bigeasy.snafu'), 'function true')

    assert(!snafu('bigeasy.snafu'), 'function cleared')
}
