# Loadspin
### Loadspin is a wrapper for ora!

# Docs
Loadspin is really simple, just use something like this:
**Example**
```js
const loadspin = require('loadspin');

loadspin.create('Loading', 3000, bouncingBar);
// will output bouncingBar spinner(check out spinners.json for options) for 3 second (3000ms)

// or
loadspin.create('One sec...', 4000)
// will output a random spinner for 4 seconds
```

