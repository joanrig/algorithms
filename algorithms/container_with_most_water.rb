def max_area(height)

    if height.length == 2
        return [height.first, height.last].min
    end

    i = 0
    j = height.length - 1
    max = 0

    while i < j
        area = (j-i) * [height[i], height[j]].min
        max = [area, max].max

        height[i] > height[j] ? j -= 1 : i += 1
    end

    max
end
