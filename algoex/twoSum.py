# it seems like negative number is allowed.


def twoNumberSum(array, targetSum):
    # Write your code here.
    pairHashMap = {}

    if type(targetSum) == int and len(array) > 0:
        for i in range(len(array)):
            if array[i] in pairHashMap:
                print("target hit")
                print("test" + str(pairHashMap[array[i]].get("value")))
                return [array[i], pairHashMap[array[i]].get("value")]
            else:
                if array[i] <= targetSum:
                    pairHashMap[targetSum - array[i]] = {"value": array[i], "index": i}
                elif array[i] > targetSum:
                    pairHashMap[array[i] - targetSum] = {"value": array[i], "index": i}
    else:
        return []


print(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

# Input [3, 5, -4, 8, 11, 1, -1, 6], 10
# Ouput [-1,11]
