lst = [[1, 2, [3, 4, 5]], 6, 7, [8, [9], [10, 11, [12, 13]]], 14, 15]

newL = []

def flatten(lst):
    if type(lst) != list:
        return [lst]
    
    res = []
    for item in lst:
        res = res + flatten(item)
    
    return res


print(flatten(lst))