/*

Description:

Story
Old MacDingle had a farm.

To be more precise, he had a free-range chicken farm.

But Old MacDingle also had a fox problem.

Foxes F eat chickens C

At night the only guaranteed "safe" chickens are in their cages [] (unless a fox has got into the cage with them!)

Kata Task
Given the initial configuration of foxes and chickens what will the farm look like the next morning after the hungry foxes have been feasting?

Examples
Ex1	Before	
CCC[CCC]FCC[CCCCC]CFFFF[CCC]FFFF
After	
...[CCC]F..[CCCCC].FFFF[CCC]FFFF
Ex2	Before	
...[CCC]...[CCCFC].....[CCC]....
After	
...[CCC]...[...F.].....[CCC]....
Ex3	Before	
CCC[CCC]FCC[CCCFC]CFFFF[CCC]FFFF
After	
...[CCC]F..[...F.].FFFF[CCC]FFFF
Notes
Anything not a fox, a chicken, or a cage is just dirt .
All cages are intact (not open-ended), and there are no cages inside other cages

*/

function hungryFoxes(farm: string): any {
    const PATTERNS = {
        INSIDECAGES: /\[[A-Za-z.]+\]/g,
        OUTSIDECAGES: /[^[\]]+(?=\[|$)/g
    }

    const outsideCages: RegExpMatchArray | null = farm.match(PATTERNS.OUTSIDECAGES);
    const isThereFoxInOutside = outsideCages ? Array.from(outsideCages).some(c => c.includes("F")) : []

    return farm.replace(
        PATTERNS.INSIDECAGES, 
        (match) => {
            const isThereFox = match.includes("F") 

            if (!isThereFox) return match;

            let inMorning = match.split("").map(c => c == "F" ? c : ".").join("").slice(1, -1)
            return "[" + inMorning + "]"
        }
    ).replace(
        PATTERNS.OUTSIDECAGES, 
        (match) => 
            isThereFoxInOutside 
                ? match.split("").map(c => c == "C" || c == "." ? "." : c).join("") 
                : match
    )
}

console.log(hungryFoxes("CCC[CCC]FCC[CCFCC]CFFFF[CCC]FFFF"));
// ...[CCC]F..[..F..].FFFF[CCC]FFFF

console.log(hungryFoxes("C.CC.CCFCCC[.CC..C.C....C...F.].[.CC..CC][CF...].C..CC..C.CF[.]C.C[C.C...]C...F"))
// .......F...[................F.].[.CC..CC][.F...]...........F[.]...[C.C...]....F