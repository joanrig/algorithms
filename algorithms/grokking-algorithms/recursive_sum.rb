#recursive addition.

a = [1,4,3]

def sum(a)
  if a.length == 0
    return 0
  end

  # first = a.shift()
  # rest = a
  # first + sum(rest)

  a.shift() + sum(a)
end


sum(a)
