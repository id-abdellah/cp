
function validParentheses(s: string): boolean {
    const mapping: Record<string, string> = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in mapping) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (!top || mapping[top] !== char) return false
        }
    }

    return stack.length === 0
};

console.log(validParentheses("(]")) //false
console.log(validParentheses("(()())")) //true
console.log(validParentheses("(()[))")) //false
console.log(validParentheses("(()[])")) //true
console.log(validParentheses("]")) //false