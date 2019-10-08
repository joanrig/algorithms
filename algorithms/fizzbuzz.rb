# @param {Integer} n
# @return {String[]}
def fizz_buzz(n)
    a=*(1..n).map do |n|
        if n % 15 == 0
            n = "FizzBuzz"
        elsif n % 5 == 0
            n = "Buzz"
        elsif n % 3 == 0
            n = "Fizz"
        else
           n = n.to_s
        end
    end
    a
end
