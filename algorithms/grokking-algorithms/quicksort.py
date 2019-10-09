a = [10,5,2,3]

def quicksort(a):

  if len(a) < 2:
    return a

  else:
    pivot = a[0]
    less = [i for i in a[1:] if i <= pivot]
    greater = [i for i in a[1:] if i > pivot]

    return quicksort(less) + [pivot] + quicksort(greater)


quicksort(a)
