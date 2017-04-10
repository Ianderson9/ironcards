
loadData = function() {
  assignments = [
    {
      name: "Logo Challenge",
      time: 10,
      score: 10
    },
    {
      name: "Team project",
      time: 50,
      score: 50
    },
    {
      name: "Prtfolio",
      time: 20,
      score: 20
    },
    {
      name: "Blog Post",
      time: 10,
      score: 10
    },
    {
      name: "Javascript Quiz",
      time: 30,
      score: 30
    },
    {
      name: "Website Recreation",
      time: 10,
      score: 10
    },
    {
      name: "Design Research",
      time: 20,
      score: 10
    },
    {
      name: "Site Diagnosis",
      time: 30,
      score: 10
    },
    {
      name: "Css Problems",
      time: 30,
      score: 10
    },
    {
      name: "HTML Practice",
      time: 30,
      score: 10
    },
    {
      name: "Javascript Practice",
      time: 50,
      score: 10
    }
  ];

  questions = [
    {
      prompt: "The Last value in an array called ar can be found at index...",
      right: "Ar.length - 1",
      wronga: "ar.length -1",
      wrongb: "ar[0]",
      wrongc: "ar[1]"
    },
    {
      prompt: "How do ypu get the length of an array named list?",
      right: "list.length",
      wronga: "list[length]",
      wrongb: "list['length']",
      wrongc: "list.Length"
    },
    {
      prompt: "How do you type a new line in html using a tag",
      right: "<br>",
      wronga: "<br />",
      wrongb: "<break>",
      wrongc: "<nextLine>"
    },
    {
      prompt: "What are the three front end languages",
      right: "html,css, and javascript",
      wronga: "html,css and java",
      wrongb: "css,javascript and java",
      wrongc: "ruby,python and basic"
    },
    {
      prompt: "What is the first step you always take if you dont understand something?",
      right: "Google it!",
      wronga: "PaNiC",
      wrongb: "Call a friend",
      wrongc: "Attempt to bribe the Teacher"
    },
    {
      prompt: "How do you get the First element of an array named list?",
      right: "list[0]",
      wronga: "list[1]",
      wrongb: "list.first",
      wrongc: "list[first]"
    }
  ];
  cards = [
    {
      // name,skill,time,q
      name: "Extension",
      skill: 0,
      time: 10,
      question: questions[0],
    },
    {
      name: "Crash Course",
      skill: 20,
      time: -10,
      question: questions[0],
    },
    {
      name: "Bribe",
      skill: -20,
      time: 30,
      question: questions[0],
    },
    {
      name: "Helpful Friend",
      skill: 10,
      time: 0,
      question: questions[0],
    },
    {
      name: "Research",
      skill: 20,
      time: 5,
      question: questions[0],
    },
    {
      name: "New Textbook",
      skill: 10,
      time: -20,
      question: questions[0],
    },
    {
      name: "Osmosis",
      skill: 30,
      time: 0,
      question: questions[0],
    },
    {
      name: "Sick Teacher",
      skill: 0,
      time: 10,
      question: questions[0],
    },
    {
      name: "Meditate",
      skill: 0,
      time: 20,
      question: questions[0],
    },
    {
      name: "Time Machine",
      skill: 10,
      time: 20,
      question: questions[0],
    },
    {
      name: "Party Night",
      skill: -10,
      time: 20,
      question: questions[0],
    },
    {
      name: "Failed Quiz",
      skill: -30,
      time: 0,
      question: questions[0],
    },
    {
      name: "Missed Alarm",
      skill: 0,
      time: -30,
      question: questions[0],
    },
    {
      name: "Bad Hair Day",
      skill: 0,
      time: -10,
      question: questions[0],
    }
  ];
}
