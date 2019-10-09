a = [1,4,3]

def count(a)
  if a.length == 0
    return 0
  end

  last = a.pop()
  1 + count(a)

end


count(a)
