import sys
def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    # return [0,1]
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i,j]
if __name__ == "__main__":
	a0 = [3,3]
	a1 = 6
	print(twoSum(a0,a1))