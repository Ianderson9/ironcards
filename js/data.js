
loadData = function() {
  assignments = [
    {
      name: "assignment 1",
      time: 10,
      score: 10
    },
    {
      name: "assignment 2",
      time: 10,
      score: 10
    },
    {
      name: "assignment 3",
      time: 10,
      score: 10
    },
    {
      name: "assignment 4",
      time: 10,
      score: 10
    },
    {
      name: "assignment 5",
      time: 10,
      score: 10
    },
    {
      name: "assignment 6",
      time: 10,
      score: 10
    },
    {
      name: "assignment 7",
      time: 10,
      score: 10
    },
    {
      name: "assignment 8",
      time: 10,
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
    }
  ];
}
