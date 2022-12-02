def test():
  s = 'Hello, world!'
  print(s)
test()

def setsTest():
  st = {'one','two','three'}
  print(st)
  print(len(st))

  st1 = set(('four','five','six'))
  st1.add('seven')
  print(type(st1))

  for x in st1:
    print('item ' + x)

  st2 = {'test'}
  st2.update(st1)
  print(st)
  print(st1)
  print(st2)
  st2.discard('test')
  st2.clear()
setsTest()