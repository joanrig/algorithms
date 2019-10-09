a = [1,4,3]

def max(a)
  i = 1
  max = a[0]
  while i < a.length
    max = [a[i], max].max
    i+=1
  end
  max

end


max(a)
