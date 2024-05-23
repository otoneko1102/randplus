# randplus
A package that add functions for random.

## Usage
```js
const random = require('randplus');

console.log(random.number(1, 10)); // 1 ~ 10
console.log(random.integer(1, 10)); // 1 ~ 10
console.log(random.array(['Hello', 'World!'])); // 'Hello' or 'World!'
console.log(random.string(3)); // '000' ~ 'ZZZ'
console.log(random.string(3, 'abc')); // 'aaa' ~ 'ccc'
console.log(random.string(3, ['01', '02', '03'])); // '010101' ~ '030303'
console.log(random.color('hex')); // '000000' ~ 'ffffff'
console.log(random.color('rgb')); // [0, 0, 0] ~ [255, 255, 255]
```

## Get Support
<a href="https://discord.gg/yKW8wWKCnS"><img src="https://discordapp.com/api/guilds/1005287561582878800/widget.png?style=banner4" alt="Discord Banner"/></a>
