def calc(*numbers):
    summ = 0
    for n in numbers:
        summ = summ + n * n
    return summ
nums = [1, 2, 3]
print(calc(*nums))