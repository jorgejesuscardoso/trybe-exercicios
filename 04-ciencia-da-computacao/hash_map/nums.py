def count_ocorrence(nums):
    count = {}
    most_common = nums[0]

    for num in nums:
        if num not in count:
            count[num] = 1
        else:
            count[num] += 1
        if count[num] > count[most_common]:
            most_common = num
    
    return most_common
