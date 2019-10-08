def is_valid(s)
    return true if s.empty?
    stack = []
    brackets = {")" => "(", "]" => "[", "}" => "{"}
    s.split('').each do |char|
        if brackets.values.include?(char)
            stack << char
        else
            return false if stack.pop != brackets[char]
        end
    end
    stack.empty?


end
