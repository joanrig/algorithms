# @param {String} s
# @return {Boolean}
def is_palindrome(s)
    parsed = s.gsub(/\W/, '').downcase()
    parsed == parsed.reverse ? true : false


end
