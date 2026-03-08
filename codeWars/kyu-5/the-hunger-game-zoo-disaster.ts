
const eatsChain: Record<string, string[]> = {
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

function canEat(predator: string, prey: string) {
    if (eatsChain[predator] && eatsChain[predator].includes(prey)) return true
    return false
}

function whoEatsWho(zoo: string) {
    let toList = zoo.split(",");
    const result: string[] = [zoo];

    while (toList.length > 1) {
        let ate = false;

        for (let i = 0; i < toList.length; i++) {
            const prevItem = toList[i - 1];
            const currentItem = toList[i];
            const nextItem = toList[i + 1];

            if (prevItem && canEat(currentItem, prevItem)) {
                toList.splice(i - 1, 1);
                result.push(`${currentItem} eats ${prevItem}`);
                ate = true;
                break;
            }

            if (nextItem && canEat(currentItem, nextItem)) {
                toList.splice(i + 1, 1);
                result.push(`${currentItem} eats ${nextItem}`);
                ate = true;
                break;
            }
        }

        if (!ate) break;
    }

    result.push(toList.join(","));
    return result;
}

whoEatsWho("fox,bug,chicken,grass,sheep")