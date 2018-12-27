# goodid
> 一个短ID生成器，唯一，Url友好，不可预测，群集兼容，简单&快速

![goodid](./assets/goodid.png)

# Install

``` sh
npm install goodid.js --save

```

# Usage

##### 常规使用

``` js
import goodid from 'goodid.js'

// 生成短ID（默认16位）
goodid()          // ELlvXA6jjNua28Gm
// 别名
goodid.create()

// 生成时指定ID长度
goodid(8)         // 5MX0dNtD
// 别名
goodid.create(8)

// 生成时指定ID长度和前缀
goodid(24, 'user-')         // user-LBxQ94LPe7vYd3x7VnM
// 别名
goodid.create(24, 'user-')

// 生成时指定ID长度、前缀、字母表
goodid(24, 'user-', 'abc')  // user-cabccbacbaaacbcbbab
// 别名
goodid.create(24, 'user-', 'abc')

```

##### 自定义默认配置

``` js
import goodid from 'goodid.js'

// 配置默认设置
goodid.config({
    length: 24,
    prefix: 'user-',
    alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    startTime: new Date(2018, 9, 1).getTime()
})

// 生成短ID（使用默认配置）
goodid()               // user-LBxQ94LPe7vYd3x7VnM

// 生成时指定ID长度和前缀
goodid(24, 'file-')    // file-lCP5qU7QTZOhOPaSfqc
```
##### 使用场景
使用 sequelize 进行数据库建模时可使用16位长度的短ID来代替32位长度的 uuid，以降低ID的存储空间

``` js
import goodid from 'goodid.js'
import Sequelize from 'sequelize'

// 实例化 Sequelize
const sequelize = new Sequelize({ ... })

// 定义 User 模型
const User = app.model.define('User', {
    id: {
        type: Sequelize.STRING(),
        allowNull: true,
        primaryKey: true,
        defaultValue: () => goodid()    // 【核心代码】使用短ID作为模型ID
    },
    username: {
        type: Sequelize.STRING(),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(),
        allowNull: false
    }
}, {
    tableName: 'tbl_user'
})

// 实例化用户模型
var user = new User()
console.log(user.id)      // ELlZg7J3BYv0Slhx
```


![star](https://user-gold-cdn.xitu.io/2018/7/24/164ca9c0e943dcd7?w=240&h=240&f=png&s=41877)

如果对你有用，欢迎 star ^_^
