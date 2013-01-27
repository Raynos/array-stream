# array-stream

[![build status][1]][2]

[![browser support][3]][4]

Convert a stream to an array

## Example

```js
var toArray = require('array-stream')
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
```

## Installation

`npm install array-stream`

## Contributors

 - Raynos

## MIT Licenced


  [1]: https://secure.travis-ci.org/Raynos/array-stream.png
  [2]: http://travis-ci.org/Raynos/array-stream
  [3]: http://ci.testling.com/Raynos/array-stream.png
  [4]: http://ci.testling.com/Raynos/array-stream
