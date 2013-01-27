var test = require("tape")
var toArray = require("../index")

test("converts to an array", function (assert) {
    var s = toArray(function (list) {
        assert.deepEqual(list, [
            "one"
            , "two"
            , "three"
            , "four"
            , "five"
        ])

        assert.end()
    })

    s.write("one\ntw")
    s.write("o\nthree\nfo")
    s.write("u")
    s.write("r\nf")
    s.write("iv")
    s.end("e")
})
