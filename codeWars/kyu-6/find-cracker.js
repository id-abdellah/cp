/*
Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

    var array = [
    ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
    ["name2", 110, ["B", "A", "A", "A"]],
    ["name3", 200, ["B", "A", "A", "C"]],
    ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
    ];

    The scores for each grade is:
    A: 30 points
    B: 20 points
    C: 10 points
    D: 5 points
    Everything else: 0 points

    If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

    Returns the name of the hacked name as an array when scoring with this rule.

    var array = [
    ["name1", 445, ["B", "A", "A", "C", "A", "A"]],     // name1 total point is over 200 => hacked
    ["name2", 110, ["B", "A", "A", "A"]],               // name2 point is right
    ["name3", 200, ["B", "A", "A", "C"]],               // name3 point is 200 but real point is 90 => hacked
    ,
    ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
    ];

    return ["name1", "name3"];
*/

function findHack(arr) {
    let gradScores = {
        "A": 30,
        "B": 20,
        "C": 10,
        "D": 5,
    };

    let objects = {};

    for (let i = 0; i < arr.length; i++) {
        let currentOne = arr[i];
        let name = currentOne[0];
        let givenTotal = currentOne[1];
        let courses = currentOne[2];
        objects[name] = {
            index: i,
            name,
            courses,
            givenTotal,
            realTotal: courses.map(a => gradScores[a] ? gradScores[a] : 0).reduce((a, b) => a + b),
            doesAllScoresHavBOrAbove: courses.length >= 5 && courses.every((a) => { return a === "A" || a === "B" }),
        };
        objects[name].realTotal = objects[name].doesAllScoresHavBOrAbove ? objects[name].realTotal + 20 : objects[name].realTotal;
    }



    let hackedStudents = [];

    for (let student in objects) {
        let currentOne = objects[student];
        if (currentOne.realTotal > 200 || currentOne.realTotal !== currentOne.givenTotal) {
            hackedStudents.push(student)
        }
    }

    return hackedStudents
}