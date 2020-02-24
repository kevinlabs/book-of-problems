from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      hashPairs = {}
      pairs = {}

      if len(nums) < 1:
        return []
      else:
        for i in range(len(nums)):
          if nums[i] in hashPairs:
            pairs[nums[i]] = { 'keyIndex': i, 
            'matchingVal': hashPairs[nums[i]]['val'], 
            'matchIndex': hashPairs[nums[i]]['index'] }
          elif (nums[i] <= target):
            hashPairs[(target - nums[i])] = { 'val': nums[i], 'index': i}
        
        if len(pairs) > 0:
          return pairs
        

testSolution = Solution()

test = testSolution.twoSum([2, 7, 11, 15], 9)
print(test)