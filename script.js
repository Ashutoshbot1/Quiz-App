const questionsArray = [
    {
      question: "What is the capital of France?",
      a: "Paris",
      b: "London",
      c: "Berlin",
      d: "Madrid",
      correct: "a"
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      a: "Venus",
      b: "Mars",
      c: "Jupiter",
      d: "Saturn",
      correct: "b"
    },
    {
      question: "Who painted the Mona Lisa?",
      a: "Leonardo da Vinci",
      b: "Pablo Picasso",
      c: "Vincent van Gogh",
      d: "Michelangelo",
      correct: "a"
    },
    {
      question: "What is the tallest mountain in the world?",
      a: "Mount Everest",
      b: "K2",
      c: "Kangchenjunga",
      d: "Makalu",
      correct: "a"
    },
    {
      question: "What is the chemical symbol for the element oxygen?",
      a: "O",
      b: "X",
      c: "C",
      d: "H",
      correct: "a"
    }
  ];
  

let index=0;
const questionElement=document.getElementById("question");
const options=document.querySelectorAll(".Options");

let total=questionsArray.length;
let right=0;
let wrong=0;


const loadQuestion=() => {
    
    if(index>=total){
         return endQuiz();
    }
    else{        
        reset();
    }

    const data = questionsArray[index];
    questionElement.innerText=`${index+1}. ${data.question}`;

    options[0].nextElementSibling.innerText=data.a;
    options[1].nextElementSibling.innerText=data.b;
    options[2].nextElementSibling.innerText=data.c;
    options[3].nextElementSibling.innerText=data.d;
}

const submitQuiz = ()=>{
    const data = questionsArray[index];
    const ans=getAnswer();

    if(ans===data.correct){
        right++;
    }
    else{
        wrong++;
    }

    index++;
    loadQuestion();
}

const getAnswer=()=>{
    let answer='';
    options.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
                return;
            }
        }
    )

    // console.log(answer);

    return answer;
}

function reset(){
    options.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
        <h3> Thankyou for playing quiz</h3><br>
        <h2> YOU SCORED ${right} / ${total}<h2>
    `
}

loadQuestion();
