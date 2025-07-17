/*
    دخل شوف هاد الفيديو postFix, inFix, preFix expressions باش تفهم ال
    https://youtu.be/g1Zwz2kSKEU
*/

function postFix(expr) {
    let newExpr = expr.split(" ");
    let stack = [];
    for (let i = 0; i < newExpr.length; i++) {
        let currentTarget = newExpr[i];

        if (!isNaN(currentTarget)) {
            stack.push(currentTarget)
        } else {
            let val1 = Number(stack.pop());
            let val2 = Number(stack.pop());

            switch (currentTarget) {
                case "+":
                    stack.push(val2 + val1)
                    break;
                case "-":
                    stack.push(val2 - val1)
                    break;
                case "*":
                    stack.push(val2 * val1)
                    break;
                case "/":
                    stack.push(val2 / val1)
                    break;
            }
        }
    }
    return stack.pop()
}
console.log(postFix("10 4 - 3 / 2 *")); // 4
console.log(postFix("4 2 /")); // 2
console.log(postFix("100 200 + 2 / 5 * 7 +")); // 757

/*
    postFix فكرة التحدي باختصار انه كيتعطا ليك تعبير رياضي على شكل
    لي تقد تحسب بيها هاد التعبير الرياضي algorithme والمطلوب منك انك دير شي


    function كيفية عمل ال
    فحل هاد التحدي stack data structure اول حاجة انها خدامة بال

    string على ال loop الفكرة كلها كتكمن ف انك غدير
    stack array فال push رقم غدير ليه loop غدير جوج شرط اللول لي هو الا كان العنصر الحالي فل
    الشرط التاني الا مكانش رقم اي عملية حسابية
    وغدير بيناتهم ديك العملية الحسابية stack array فهاد الحالة غتخرج اخر جوج عناصر دخلتيهم ف
    لديك النتيجة لي خرجات ليك, وتكمل stack فال push وتعاود دير
*/