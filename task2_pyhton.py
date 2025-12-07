
# please run as: python task2_pyhton.py  

def count_characters(s: str) -> str:
    """
    Counts occurrences of characters in the input string s,
    preserving the order of their first appearance.
    """

    counts = {}
    order = []

    for char in s:
        if char.isspace():
            continue
        if char not in counts:
            counts[char] = 1
            order.append(char)
        else:
            counts[char] += 1

    return ', '.join(f'{char}:{counts[char]}' for char in order)

# Example usage:
if __name__ == "__main__":
    input_str = "hello world"
    print(count_characters(input_str))
