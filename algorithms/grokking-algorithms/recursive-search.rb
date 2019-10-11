

stack = ["mattress1", "pea", "mattress2", "mattress3", "mattress4"]

def find_pea(stack)

  if stack.length > 0
    current_item = stack.pop()
  else
    return "drat! couldn't find it!"
  end

  if current_item === "pea"
    return "found! Now I can get a good night's sleep"
  else
    puts "No pea here, instead I found #{current_item}"
    find_pea(stack)
  end
end

find_pea(stack)
