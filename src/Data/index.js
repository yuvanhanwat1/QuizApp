const qBank = [
    {
        question:
        "Who is the father of nation ?",
        answers: ["Mahatma Gandhi", "Jawaharlal Nehru", "Donald Trump", "Barack Obama"],
        correct: "Mahatma Gandhi",
        questionId: "099099"
    },
    {
        question:
        "What color is are the leaves ?",
        answers: ["Blue", "Red", "Yellow", "Green"],
        correct: "Red",
        questionId: "093909"
    },
    {
        question:
        "What color is the sky ?",
        answers: ["Blue", "Red", "Yellow", "Green"],
        correct: "Blue",
        questionId: "009039"
    },
    {
        question:
        "What color is the sky ?",
        answers: ["Blue", "Red", "Yellow", "Green"],
        correct: "Blue",
        questionId: "090089"
    },
    {
        question:
        "What color is the fire ?",
        answers: ["Blue", "Red", "Yellow", "Green"],
        correct: "Yellow",
        questionId: "01010101"
    },
    
    ];
    
    // n = 5 to export 5 question
    const ans = (n = 5) =>
    Promise.resolve(qBank.sort());

    export default ans;
    