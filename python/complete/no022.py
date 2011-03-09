# Using no022.txt, a text file containing over five-thousand first names, begin by
# sorting it into alphabetical order. Then working out the alphabetical value for each
# name, multiply this value by its alphabetical position in the list to obtain a name score.

# For example, when the list is sorted into alphabetical order, COLIN, which is worth
# 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain
# a score of 938 X 53 = 49714.

# What is the total of all the name scores in the file?

def sort_names(filename):
    fh = open(filename)
    names = fh.read()
    fh.close()
    # The name file is a comma separated file with quotes
    names = names.split(",")
    names = [ name[1:-1] for name in names if name[1:-1] ]
    return sorted(names)

def my_ord(letter):
    return ord(letter.upper()) - 64

def name_score(name):
    return sum([ my_ord(letter) for letter in name ])

def total_score(filename):
    result = 0
    names = sort_names(filename)
    for i, name in enumerate(names):
        result += (i + 1)*name_score(name)
    return result

if __name__ == "__main__":
    print "The answer to Euler Project, question 22 is:",
    print total_score("/Users/dan/Documents/sandbox/euler_project/problem_data/no022.txt")