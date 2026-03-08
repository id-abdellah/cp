var eatsChain = {
    "antelope": ["grass"],
    "big-fish": ["little-fish"],
    "bug": ["leaves"],
    "bear": [
        "big-fish",
        "bug",
        "chicken",
        "cow",
        "leaves",
        "sheep",
    ],
    "chicken": ["bug"],
    "cow": ["grass"],
    "fox": ["chicken", "sheep"],
    "giraffe": ["leaves"],
    "lion": ["antelope", "cow"],
    "panda": ["leaves"],
    "sheep": ["grass"],
};
function canEat(predator, prey) {
    if (eatsChain[predator] && eatsChain[predator].includes(prey))
        return true;
    return false;
}
function whoEatsWho(zoo) {
    var toList = zoo.split(",");
    var result = [zoo];
    while (toList.length > 1) {
        console.log(toList);
        for (var i = 0; i < toList.length; i++) {
            var prevItem = toList[i - 1];
            var currentItem = toList[i];
            var nextItem = toList[i + 1];
            if (prevItem && canEat(currentItem, prevItem)) {
                toList.splice(i - 1, 1);
                result.push("".concat(currentItem, " eats ").concat(prevItem));
                break;
            }
            if (nextItem && canEat(currentItem, nextItem)) {
                toList.splice(i + 1, 1);
                result.push("".concat(currentItem, " eats ").concat(nextItem));
                break;
            }
        }
    }
    console.log(result.concat(toList));
}
whoEatsWho("fox,bug,chicken,grass,sheep");
