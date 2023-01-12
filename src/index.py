import re

# 1
def firstLeft(arr,target):
  for el in arr:
    if el == target:
      return arr.index(el)
  return -1
print(firstLeft([1,2,3,1,2,3],3))

# 2
def firstRight(arr,target):
  result = -1
  for i, el in enumerate(arr):
    if el == target:
      result = i
  return result
print(firstRight([1,2,3,1,2,3],3))

# 3
def isPalindrome(s):
  return s.lower() == s.lower()[::-1]
print(isPalindrome('Anna'))

# 4
def findTargetListEl(arr, lenNum):
  result = []
  for el in arr:
    if len(el) == lenNum:
      result.append(el)
  return result
print(findTargetListEl(['Mark', 'John', 'Ann'],4))  # ['Mark', 'John']

# 5
def countVowels(s):
  counter = 0
  vowels = ['a','e','i','o','u']
  for ch in s:
    if ch in vowels:
      counter += 1
  return counter
print(countVowels('wolf'))

# 6
def iterateFromNumToNum(a,b):
  counter = 0
  for x in range(a,b+1):
    counter += x
  return counter
print(iterateFromNumToNum(1,5))
print(iterateFromNumToNum(3,6))

# 7
def findMidChar(s):
  isEven = len(s) % 2 == 0
  isOdd = len(s) % 2 == 0
  if isEven:
    return s[int(len(s) / 2)]
  if isOdd:
    return s[int((len(s) - 1) / 2)]
print(findMidChar('test'))
print(findMidChar('testing'))

# 8
def squareNum(n):
  result = ''
  slist = list(format(n))
  for s in  slist:
    squareNum = int(s)*int(s)
    result += format(squareNum)
  return result
print(squareNum(25))  # 425

# 9
# import re
def replaceAll(s, ch):
  result = re.sub(ch, '', s)
  return result
print(replaceAll('te###st', '#'))  # 'test'

# 10
def findRepeat(a):
  result = []
  obj = {}
  for i, n in enumerate(a):
    obj[n] = i
  for n in a:
    if a.index(n) != obj[n]:
      result.append(n)
  return result
print(findRepeat([1,2,3,4,5,6,7,3,8,9]))

# 11
def findRepeats(a):
  result = []
  cache = {}
  for n in a:
    if n in cache:
      cache[n] += 1
    else:
      cache[n] = 1
  for n in cache:
    if cache[n] > 1:
      a = [n for x in range(cache[n])]
      result.append(a)
  return result
print(findRepeats([1,2,3,4,5,3,6,7,5,8,9,5]))  # [[3,3],[5,5,5]]

# 12
def countRepeatsInRange(a,l,r,target):
  counter = 0
  for x in a[l:r]:
    if x == target:
      counter += 1
  return counter
print(countRepeatsInRange[1,2,3,4,5,3,6,7,5,8,9,5], 2, 7, 3) #  2

# 13
def isTargetSum(arr, targetSum):
  for a in arr:
    for b in arr:
      if a + b == targetSum:
        return True
  return False
print(isTargetSum([1,2,3,4,5,6,7], 5)) #  True

# 14
def argsToStr(*args):
  result = ""
  for x in args[1:]:
    result += "" + args[0] + format(x)
  return result
print(argsToStr('!',4,-10,34,0))

# 15
def isObjEmpty(obj):
  if len(obj) > 0:
    return False
  return True
print(isObjEmpty({})) # True

# 16
def findMax(arr):
  return max(arr)
print(findMax([3,5,2,1,3,7,66,8,9,4,100,45]))

def findMax(arr):
  maxVal = arr[0]
  for val in arr:
    if val > maxVal:
      maxVal = val
  return maxVal
print(findMax([3,5,2,1,3,7,66,8,9,4,100,45]))

# 17
def findAllUniqueSums(arr, target):
  result = []
  cache = {}
  for x in arr:
    cache[x] = 1
  for n in cache:
    secondNum = target - n
    if n + secondNum == target:
      if secondNum > n:
        result.append([n, secondNum])
  return result  
print(findAllUniqueSums([1,2,3,4,5,6], 6))

# 18
def findShortestStr(arr):
  minWord = arr[0]
  for word in arr:
    if len(word) < len(minWord):
      minWord = word
  return minWord
print(findShortestStr(['ab', 'a', 'abc']))  # 'a'

# 19
def groupAnagrams(arr):
  cache = {}
  for word in arr:
    sortedWord = ''.join(sorted(word))
    if sortedWord in cache:
      cache[sortedWord].append(word)
    else:
      cache[sortedWord] = [word]
  return list(cache.values())
print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))  # [["bat"],["nat","tan"],["ate","eat","tea"]]

# 20
def findPopularChar(str):
  result = ''
  cache = {}
  counter = 0

  for char in str:
    if char in cache:
      cache[char] += 1
    else:
      cache[char] = 1
  for char in cache:
    if cache[char] > counter:
      counter = cache[char]
      result = char
  return result
print(findPopularChar('ababa'))  # 'a'

# 21
def twoMax(arr):
  max1 = max(arr[0], arr[1])
  max2 = min(arr[0], arr[1])
  for n in arr[2:]:
    if n > max1:
      max2 = max1
      max1 = n
    elif n > max2:
      max2 = n
  return [max1, max2]

print(twoMax([10,-2,1,2,3,4,5]))  # [10,5]

# 22
def findMinEven(arr):
  flag = False
  result = -1
  for i in range(len(arr)):
    if arr[i] % 2 == 0 and (not flag or arr[i] < result):
      result = arr[i]
      flag = True
  return result
print(findMinEven([10,-2,1,2,3,4,5]))
print(findMinEven([10,12,1,2,3,4,5]))

# 23
def count(n):
  counter = n or 0
  def increment():
    nonlocal counter
    counter += 1
    return counter
  return increment

c1 = count(100)
c1()
c1()
c1()
c1()
c1()
c1()
print(c1())

# 24
def fib(n):
  if n < 2:
    return n
  return fib(n - 2) + fib(n - 1)
print(fib(0)) # 0
print(fib(1)) # 1
print(fib(4)) # 3
print(fib(5)) # 5
print(fib(9)) # 34
print(fib(11))  # 89

def noRecFib(n):
  cache = [0,1]
  if (n > 1):
    for i in range(2,n+1):
      prevPrevNum = cache[i - 2]
      prevNum = cache[i - 1]
      cache.append(prevPrevNum+prevNum)
  return cache[n]
print(noRecFib(0)) # 0
print(noRecFib(1)) # 1
print(noRecFib(4)) # 3
print(noRecFib(5)) # 5
print(noRecFib(9)) # 34
print(noRecFib(11))  # 89

# 25
def findAllUniqueSums(arr,target):
  result = []
  for i in range(len(arr)):
    for j in range(1,len(arr)):
      if (arr[i] + arr[j] == target):
        if (arr[i] > arr[j]):
          result.append([arr[i], arr[j]])
  return result
print(findAllUniqueSums([3,5,300,1,7,4,-18,2,10,-5,23,11], 5))

def findAllUniqueSums1(arr,target):
  result = []
  cache = {}
  for i in range(len(arr)):
    cache[arr[i]] = arr[i]
  for key in cache:
    secondNum = target - cache[key]
    if cache[key]+secondNum == target:
      if secondNum > cache[key]:
        result.append([cache[key], secondNum])
  return result
print(findAllUniqueSums1([3,5,300,1,7,4,-18,2,10,-5,23,11], 5))

# 26
def getMaxLastIdx(str,a,b):
  maxAIdx = -1
  maxBIdx = -1
  for i in range(len(str)):
    char = str[i]
    if char == a:
      maxAIdx = i
    if char == b:
      maxBIdx = i
  if maxAIdx > maxBIdx:
    return maxAIdx
  elif maxAIdx < maxBIdx:
    return maxBIdx
  elif maxAIdx == maxBIdx:
    return maxAIdx
print(getMaxLastIdx('abbaaoccccc', 'g', 'g'))
print(getMaxLastIdx('abbaaoccccc', 'y', 'a'))
print(getMaxLastIdx('abbaaoccccc', 'a', 'b'))

# 27
def compare(a,b):
  if isinstance(a,str) is False and isinstance(b,str) is True:
    return b
  if isinstance(b,str) is False and isinstance(a,str) is True:
    return a

  isBothStr = isinstance(a,str) and isinstance(b,str)
  if isBothStr:
    for i in range(len(a)):
      if i < len(b):
        if a[i].lower() < b[i].lower():
          return a
        elif a[i].lower() > b[i].lower():
          return b
        else:
          continue
      else:
        return b
    if len(a) == len(b):
      return a + " = " + b
    else:
      return a
  print('Both arguments must be a string')
  return

print('-1, 30')
print(compare(-1, 30)); #  error
print("------------------------------------")

print("-1, 'c'")
print(compare(-1, 'c')); #  'c
print("------------------------------------")

print("'', ''")
print(compare('', '')); #  ''
print("------------------------------------")

print("'', 'a'")
print(compare('', 'a'));  #  a
print("------------------------------------")

print("'a', ''")
print(compare('a', ''));  #  'a'
print("------------------------------------")

print("'ab', 'a'")
print(compare('ab', 'a'));  #  'a'
print("------------------------------------")

print("'banana', 'avocado'")
print(compare('banana', 'avocado'));  #  avocado
print("------------------------------------")

print("'Banana', 'Avocado'")
print(compare('Banana', 'Avocado'));  #  Avocado
print("------------------------------------")

print("'banana', 'Avocado'")
print(compare('banana', 'Avocado'));  #  Avocado
print("------------------------------------")

print("'ooooo', 'oo'")
print(compare('ooooo', 'oo'));  #  oo
print("------------------------------------")

print("'oo', 'oooooo'")
print(compare('oo', 'oooooo')); #  oooooo
print("------------------------------------")

print("'oz', 'oooooo'")
print(compare('oz', 'oooooo')); #  oooooo
print("------------------------------------")

print("'oooooo', 'oooooZ'")
print(compare('oooooo', 'oooooZ')); #  oooooo
print("------------------------------------")

print("'ooo', 'ooo'")
print(compare('ooo', 'ooo')); #  ooo
print("------------------------------------")

# 27
def findBlackSheep(arr):
  evencounter = 0
  oddcounter = 0
  lasteven = -1
  lastodd = -1

  for i in range(len(arr)):
    el = arr[i]
    if el % 2 == 0:
      evencounter += 1
      lasteven = el
    else:
      oddcounter += 1
      lastodd = el

  if evencounter+oddcounter > 3:
    if oddcounter > 1:
      return lasteven
    else:
      return lastodd
  else:
    return -1

print(findBlackSheep([2,4,6,8,9,10,12])) #  ([2,4,6,8,9,10,12]) -> 9

# 28
def reversestr(s):
  res = ""
  for char in s[::-1]:
    res += char
  return res
print(reversestr('test'))

