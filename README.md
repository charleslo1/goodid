# goodid
> a short ID generator, unique, Url-friendly, Non-predictable, Cluster-compatible and simple & fast. You'll like it.

![goodid](./assets/goodid.png)

# Install

``` sh
npm install goodid --save

```

# Usage

``` js
import goodid from 'goodid'

// standard generate
goodid()          // ELlvXA6jjNua28Gm

// set length
goodid(8)         // 5MX0dNtD

// set length and alphabet
goodid(8, 'abc')  // babccbab

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

