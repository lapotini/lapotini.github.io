'use strict';

var questions = [{
  title: "Вопрос 1",
  answer: [{
    text: "Вариант ответа (1)",
    correct: false
  }, {
    text: "Вариант ответа (1)2",
    correct: false
  }, {
    text: "Правильный ответ (1)3+",
    correct: true
  }]
}, {
  title: "Вопрос 2",
  answer: [{
    text: "Вариант ответа (2)1",
    correct: false
  }, {
    text: "Правильный ответ (2)2+",
    correct: true
  }, {
    text: "Вариант ответа (2)3",
    correct: false
  }]
}, {
  title: "Вопрос 3",
  answer: [{
    text: "Правильный ответ (3)1+",
    correct: true
  }, {
    text: "Вариант ответа (3)2",
    correct: false
  }, {
    text: "Вариант ответа (3)3",
    correct: false
  }]
}];

// localStorage.setItem('testQuestions', JSON.stringify(questions));
// var test = localStorage.getItem('testQuestions');
// test = JSON.parse(test);
//

var dataService = {
  setData: function setData(itemName, value) {
    return localStorage.setItem(itemName, JSON.stringify(value));
  },
  getData: function getData(itemName) {
    return localStorage.getItem(itemName);
  }

};

dataService.setData('testQuestions', questions);
var test = JSON.parse(dataService.getData('testQuestions'));

$(function () {

  var html = $('#html').html();

  var content = tmpl(html, {
    obj: test
  });

  $('body').append(content);
});

$(function () {

  var button = $("button[name='action']");

  $(button).on('click', function (event) {

    var correct = true;
    var countCorrect = 0;
    event.preventDefault();
    var input = $("input[type='radio']:checked");

    // НЕ РАБОТАЕТ :(
    //  for (let inp of input) {
    //    let checkedInput = $(inp).val();
    for (var i = 0; i < input.length; i++) {

      var checkedInput = $(input[i]).val();
      var arr = checkedInput.split('_');
      var questionIndex = arr[0];
      var questionAnswerIndex = arr[1];
      // console.log(checkedInput);

      if (test[questionIndex].answer[questionAnswerIndex].correct) {
        countCorrect += 1;
      }
    }

    if (test.length > input.length) {
      $('#message').text('Ошибка: не все поля заполненны');
    } else {
      // MODAL WINDOW
      $('body').append('<div class="shadow"><div class="modalWindow"> <h3> Результат теста</h3><p class="result">  </p>  <button type="button" class="btn btn-default" name="close">Закрыть</button></div>  </div> ');
      if (countCorrect > 2) {
        $('.result').text('Вы прошли тест! результат:' + " " + countCorrect + " правильных ответа");
      } else {
        $('.result').text('Вы не прошли тест! результат:' + " " + countCorrect + " правильных ответа");
      }
    }
  });

  // CLOSE MODAL WINDOW
  // var buttonClose = $("button[name='close']");
  $(document).on('click', "button[name='close']", function (ev) {
    ev.preventDefault();
    $('.shadow').remove();
    location.reload();
  });
});
