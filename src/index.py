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
def iterateFromNumToNum(a,b):
  counter = 0
  for x in range(a,b+1):
    counter += x
  return counter
print(iterateFromNumToNum(1,5))
print(iterateFromNumToNum(3,6))