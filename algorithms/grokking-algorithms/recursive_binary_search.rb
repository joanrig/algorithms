a = [1,2,3,4,5,6,7,8,9,10]
number = 8

def binary_search(a, number)

  if a.length == 1
    return a[0]
  end

  mid = a.length/2
  guess = a[mid]


  if guess == number
    return number
  elsif guess < number
    #get rid of numbers less than guess
    a = a[(mid + 1)..(a.length-1)]
  elsif guess > number
    #get rid of numbers greater than guess
    a = a[0..(a.index(guess))]
  end
  binary_search(a, number)


end


binary_search(a, number)
