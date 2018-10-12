# goodid
> a short ID generator, unique, Url-friendly, Non-predictable, Cluster-compatible and simple & fast. You'll like it.

![goodid](./assets/goodid.png)

# Install

``` sh
npm install goodid.js --save

```

# Usage

## basic

``` js
import goodid from 'goodid.js'

// standard generate
goodid()          // ELlvXA6jjNua28Gm
// alias
goodid.create()

// set length
goodid(8)         // 5MX0dNtD
// alias
goodid.create(8)

// set length and prefix
goodid(24, 'user-')         // user-LBxQ94LPe7vYd3x7VnM
// alias
goodid.create(24, 'user-')

// set length, prefix and alphabet
goodid(24, 'user-', 'abc')  // user-cabccbacbaaacbcbbab
// alias
goodid.create(24, 'user-', 'abc')

```

## config

``` js
import goodid from 'goodid.js'

// config defaults
goodid.config({
    length: 24,
    prefix: 'user-',
    alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    startTime: new Date(2018, 9, 1).getTime()
})

// standard generate
goodid()               // user-LBxQ94LPe7vYd3x7VnM

// set length and prefix
goodid(24, 'file-')    // file-lCP5qU7QTZOhOPaSfqc
```
## scenes

``` js
import goodid from 'goodid.js'

// generate model id
Class Model {
    constructor () {
        this.id = goodid()
    }
}

var obj = new Model()
obj.id      // ELlZg7J3BYv0Slhx
```


![star](https://user-gold-cdn.xitu.io/2018/7/24/164ca9c0e943dcd7?w=240&h=240&f=png&s=41877)

If you like, please click the star! ^_^

