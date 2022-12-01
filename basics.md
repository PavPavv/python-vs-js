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

### Multiline Strings

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

### Looping Through a String

ES6

```javascript
const s = 'Text';
for (const char of s) {
  console.log(char);
}
```

Python3

```python
s = 'Text'
for char in s
  print(char)
```

### String Length

ES6

```javascript
const s = 'Text';
console.log(s.length);
```

Python3

```python
s = 'Text'
print(len(s))
txt = "The best things in life are free!"
print("free" in txt)
```

To check if a certain phrase or character is present in a string, we can use the keyword:

ES6

```javascript
const s = 'The best things in life are free!';
for (const word of s) {
  if (word === 'free') console.log('yes');
  else console.log('no');
}
```

Python3

```python
txt = "The best things in life are free!"
if "free" in txt:
  print("yes")

if "free" not in txt:
  print("no")
```

### Slicing Strings

ES6

```javascript
const s = 'hello!';
console.log(s.slice(2,5));
```

Python3

```python
s = 'hello!'
print(s[2:5])
```

### Negative Indexing

ES6

```javascript
const s = 'hello!';
console.log(s.slice(-1)); //  !
```

Python3

```python
s = 'hello!'
print(s[-1])  # !
```

```python
s = 'hello!'
print(s[-4:-1])  # llo
```

### Modify Strings

ES6

```javascript
const s = 'word';
console.log(s.toUpperCase());
console.log(s.toLowerCase());
```

Python3

```python
s = "word"
print(s.upper())
print(s.lower())
```

ES6

```javascript
const s = ' word ';
console.log(s.trim());
```

Python3

```python
s = " word "
print(s.strip())
```

ES6

```javascript
const s = 'hello!';
console.log(s.replace(/h/i, 'w'));
```

Python3

```python
s = 'hello!'
print(s.replace("h", "w"))
```

ES6

```javascript
const s = 'hello!';
console.log(s.split('')); //  ['h','e','l','l','o']
```

Python3

```python
s = 'hello!'
print(s.split(""))  # ['h','e','l','l','o']
```

ES6

```javascript
const s = 'hello';
const s1 = 'world!';
console.log(s.concat(s1));
console.log(s + ' ' + s1);
console.log(`${s} ${s1}`);
```

Python3

```python
s = "hello"
s1 = "world!"
print(s + " " + s1)
```

ES6

```javascript
const name = 'Jack';
console.log('Hello, ' + name);
```

Python3

```python
name, age, txt = "Jack", 1, "Hi, I am {0} and I am {1} years old!"
print(txt.format(name, age))
```

To insert characters into str in Python use an escape character. An escape character is a backslash \ followed by the character you want to insert.

## Pseudo falsy values

ES6

```javascript
console.log(Boolean(undefined));  //  false
console.log(Boolean(null));  //  false
console.log(Boolean(0));  //  false
console.log(Boolean(-0));  //  false
console.log(Boolean(''));  //  false
console.log(Boolean(NaN));  //  false
console.log(Boolean(false));  //  false
```

Python3

```python
print(bool(False))  # False
print(bool(None))  # False
print(bool(0))  # False
print(bool(""))  # False
print(bool([]))  # False
print(bool(()))  # False
print(bool({}))  # False
```

## Logical Operators

ES6

```javascript
const a = 0 && 1;
const b = 0 || 1;
const a = 0 !== 1;
```

Python3

```python
a = 5
b = a > 0 and a < 10
c = a > 0 or a < 10
d = not(a > 0 and a < 10) # Like !(true) in JS
```

## Arrays

ES6

```javascript
const arr = [];
const arr1 = new Array(); // deprecated
```

Python3

```python
arr = []
arr1 = list(("apple", "banana", "cherry")) # note the double round-brackets
```

### Array length

ES6

```javascript
const arr = [1,2,3];
console.log(arr.length);
```

Python3

```python
arr = [1,2,3]
print(len(arr))
```

### Array slicing

ES6

```javascript
const arr = [1,2,3,4,5];
console.log(arr.slice(3,5));  //  [4,5]
```

Python3

```python
arr = [1,2,3,4,5,6,7,8,9]
print(arr[3:5]) # [4,5]
```

### Change a Range of Item Values

ES6

```javascript
const arr = ['Atalanta', 'Torino', 'Inter', 'Verona', 'Genoa', 'Wolfsburg', 'Herta', 'Fiorentina'];
arr.splice(5,2, 'Milan', 'Juventus');
console.log(arr);
```

Python3

```python
arr = ['Atalanta', 'Torino', 'Inter', 'Verona', 'Genoa', 'Wolfsburg', 'Herta', 'Fiorentina']
arr[5:7] = ["Milan", "Juventus"]
print(arr)
```

### Basic mutable array methods

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
arr1 = [10,11,12]

arr.insert(0,0)
arr.remove(2)
arr.pop(0)
arr.append(4)

arr.extend(arr1)

print(arr)  #  [1,3,4,10,11,12]
```

The **del** keyword also removes the specified index. The **del** keyword can also delete the list completely.

```python
arr = ["apple", "banana", "cherry"]
del arr 
```

```python
arr = ["apple", "banana", "cherry"]
arr.clear()
print(arr) #  []
```

### List Comprehension

```python
arr = [x for x in range(5)]
print(arr)
arr1 = ['a', 'b', 'c', 'd', 'e']
arr2 = [x for x in arr1 if x == 'a' or x == 'e']
print(arr2)
```

### Array sorting

ES6

```javascript
const arr = [3,4,10,1,0];
console.log(arr.sort((a,b) => a-b));
console.log(arr.sort((a,b) => b-a));
```

Python3

```python
arr = [3,4,10,1,0]
arr.sort()
print(arr)
arr.sort(reverse = True)
print(arr)
```

Custom sorts:

```python
def myfunc(n):
  return abs(n - 50)

thislist = [100, 50, 65, 82, 23]
thislist.sort(key = myfunc)
print(thislist)
```

```python
thislist = ["banana", "Orange", "Kiwi", "cherry"]
thislist.sort(key = str.lower)
print(thislist)
```

```python
thislist = ["banana", "Orange", "Kiwi", "cherry"]
thislist.reverse()
print(thislist)
```

### Copy a list

ES6

```javascript
const arr = [3,4,10,1,0];
const arr1 = arr;
const arr2 = arr.slice();
arr.pop();
arr.pop();
arr.pop();
arr.pop();
console.log({ arr, arr1, arr2 });  //  { arr: [3], arr1: [3], arr2: [3,4,10,1,0] }
```

Python3

```python
arr = [3,4,10,1,0]
arr1 = arr.copy()
arr.clear()  #  arr = []
print(arr1)  #  [3,4,10,1,0]
```

### Loops

### For

ES6

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

Python3

```python
arr = [1,2,3]
for i in range(len(arr)):
  print(arr[i])
```

```python
arr = [1,2,3]
for x in arr:
  print(x)
```

### While

ES6

```javascript
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

Python3

```python
i = 0
while i < 3:
  print(i)
  i += 1
```

## Tuples

Tuples are used to store multiple items in a single variable. Tuple is one of 4 built-in data types in Python used to store collections of data, the other 3 are **List**, **Set**, and **Dictionary**. A tuple is a collection which is ordered and unchangeable. Tuple items are ordered, unchangeable, and allow duplicate values. Tuple items are indexed.

To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple. Tuple items can be of any data type.

It is also possible to use the **tuple()** constructor to make a tuple.

```python
t = ('a', 'b', 'c', True, 100)
print(len(t)) # 5
thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets

# You can access tuple items by referring to the index number, inside square brackets:
t[0]  # 'a'
t[-1] # 100
t[2:4]  # 'c',True

# To determine if a specified item is present in a tuple use the in keyword:
thistuple = ("apple", "banana", "cherry")
if "apple" in thistuple:
  print("Yes, 'apple' is in the fruits tuple") 

# But there is a workaround. You can convert the tuple into a list, change the list, and convert the list back into a tuple.
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)
print(x)

# Add tuple to a tuple. You are allowed to add tuples to tuples, so if you want to add one item, (or many), create a new tuple with the item(s), and add it to the existing tuple:
thistuple = ("apple", "banana", "cherry")
y = ("orange",)
thistuple += y
print(thistuple)
```

The **del** keyword can delete the tuple completely:

```python
thistuple = ("apple", "banana", "cherry")
del thistuple
print(thistuple) #this will raise an error because the tuple no longer exists 
```

In Python, we are also allowed to extract the values back into variables. This is called "unpacking":

```python
fruits = ("apple", "banana", "cherry")
(green, yellow, red) = fruits
```

If the number of variables is less than the number of values, you can add an * to the variable name and the values will be assigned to the variable as a list:

```python
 fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")
(green, yellow, *red) = fruits
print(green)
print(yellow)
print(red)
```

If you want to multiply the content of a tuple a given number of times, you can use the * operator:

```python
fruits = ("apple", "banana", "cherry")
mytuple = fruits * 2
print(mytuple) #  "apple", "banana", "cherry", "apple", "banana", "cherry"
```

Python has two built-in methods that you can use on tuples.

```python
fruits = ("apple", "banana", "cherry")
print(fruits.count('banana')) # Returns the number of times a specified value occurs in a tuple
print(fruits.index('banana')) # 2
```

## Modules

ES6

```javascript
const module = require('module');
```

Python3

```python
from module import moduleMethod
```