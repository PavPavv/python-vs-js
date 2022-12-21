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


