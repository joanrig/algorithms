def delete_node(node)
    current = node
   while current.next.next
       #puts current.val
        current.val = current.next.val
      current = current.next
       #puts " line #{current.val}"
   end
    current.val = current.next.val
    current.next = nil




end
