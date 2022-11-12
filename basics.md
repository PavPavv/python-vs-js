# Basic syntax: JS vs Python

## Data types

ES6

```javascript
//  Primitive types
let a = 1;  //  number
a = 'a';  //  string
a = true; //  boolean
a = undefined; // undefined
a = null; //  null
a = BigInt(9007199254740991);  // BigInt
const b = Symbol('foo');  //  Symbol

//  Reference type
const c = {}; //  object
const c = []; //  object
const c = new Set(); //  object
const b = function(){}  //  function
```

Python3

```python
a = 'Hi'  # str
a = 20  # int
a = 20.1  # float
a = 1j  # complex
a = True  # bool
a = ['a', 'b', 'c'] # list
a = ('a', 'b', 'c') # tuple
a = range(3)  # range
a = {'a', 'b', 'c'} # set
a = frozenset({'a', 'b', 'c'})  # frozen set
a = {"name": "Jack", "age": 1.2 } # dict
a = b"Hie" # bytes
a = bytearray(5)  # bytes array
a = memoryview(bytes(5))  # memory view
a = None  # none type
```

ES6

```javascript
const a = 'Hi!';
typeof a;  // string
```

Python3

```python
a = 'Hi!'
type(a) # str
```

## Type conversion

ES6

```javascript
const a = '1';
const b = Number(a);  // 'a'
```

```javascript
const a = 1;
const b = String(a);  // 'a'
```

```javascript
const a = 1;
const b = Boolean(a);  // true
```

Python3

```python
a = 20
b = float(a)
```

```python
a = 20
b = int(a)
```

```python
a = 20
b = complex(a)
```

## Variables

ES6

```javascript
var a = 'Hi';
const b = 1;
let c = true;
```

Python3

```python
a = 'Hi'
b = 1
c = True
```

```python
a,b,c = 'Hi', 1, True
```

## Output

ES6

```javascript
console.log({ a, b, c });
```

Python3

```python
print(a,b,c)
```

## Strings

Like many other popular programming languages, strings in Python and JS are arrays of bytes representing unicode characters.

ES6

```javascript
const s = 'Text';
console.log(s[0]) //  'T'
```

Python3

```python
s = 'Text'
print(s[0]) # 'T'
```

## Multiline Strings

ES6

```javascript
const text = `
  Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua
`;
```

Python3

```python
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
```

## Arrays

ES6

```javascript
const arr = [];
const arr1 = new Array(); // deprecated
```

Python3

```python
list = []
```

## Loops

```javascript
const arr = [1,2,3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

```javascript
const arr = [1,2,3];
for (const el of arr) {
  console.log(el);
}
```

```javascript
const obj = {
  a: 1,
  b: 2,
};
for (const key in obj) {
  console.log(key);
}
```

Python3

```python
list = []
```

## Basic mutable array methods

ES6

```javascript
const arr = [1,2,3];

arr.unshift();
arr.shift();
arr.pop();
arr.push();
```

Python3

```python
arr = [1,2,3]

arr.append()
arr.remove()
arr.pop()
arr.extend()
```

## Loops



## Modules

ES6

```javascript
const module = require('module');
```

Python3

```python
from module import moduleMethod
```
