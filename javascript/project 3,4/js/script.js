
var test = {

  questions: [
    {
     title: "Вопрос 1",
     answer: [
      {
      text: "Вариант ответа (1)1",
      },
      {
      text: "Вариант ответа (1)2",
      },
      {
      text: "Вариант ответа (1)3",
      }
    ]
   },

      {
      title: "Вопрос 2",
      answer: [
         {
         text: "Вариант ответа (2)1",
         },
         {
         text: "Вариант ответа (2)2",
         },
         {
         text: "Вариант ответа (2)3",
         }
       ]
      },

        {
        title: "Вопрос 3",
        answer: [
          {
          text: "Вариант ответа (3)1",
          },
          {
          text: "Вариант ответа (3)2",
          },
          {
          text: "Вариант ответа (3)3",
          }
        ]
       }
     ],

     //function
   generate: function () {
     var body= document.querySelector('body');
     body.style.background= '#8FCCC0';

     var body = document.querySelector('body');
     body.style.background = '#8FCCC0';

     var container = document.createElement('div');
     body.appendChild(container);
     container.style.margin = '10% auto';
     container.style.width = '50%';

     var head = document.createElement('h1');
     head.innerHTML = 'Тест по программированию';
     container.appendChild(head);
     head.style.marginLeft = '15%';
     var form = document.createElement('form');

     form.action = "#";
     container.appendChild(form);

     for(var i = 0; i < this.questions.length; i++){
       var question = document.createElement('h2');
       question.innerHTML = this.questions[i].title;

       form.appendChild(question);
         for(var y = 0; y < this.questions[i].answer.length; y++){
           var label = document.createElement('label');
           var input = document.createElement('input');
           input.type = 'radio';
           input.name = 'vopros' + i;
           var answer = document.createElement('span');
           answer.innerHTML = this.questions[i].answer[y].text;
           answer.color = 'red';
           form.appendChild(label);
           label.appendChild(input);
           label.appendChild(answer);
           label.style.display = 'block';
           label.style.fontSize = '20px';
           label.style.marginLeft = '25px';
           answer.style.color = '#634A73';
         }
       }
       var div = document.createElement('div');
       form.appendChild(div);
       var submit = document.createElement('button');
       submit.className ="btn btn-success";
       submit.type = 'button';
       submit.innerHTML = "Проверить мои результаты";
       div.appendChild(submit);
       submit.style.marginTop = '25px';
       submit.style.marginLeft = '15%';
     }

  };

  test.generate();
