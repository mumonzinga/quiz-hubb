function hub() {
  var qOne =document.getElementByName('question1');
  var qTwo =document.getElementByName('question2');
  var qThree =document.getElementByName('question3');
  var score = 0;


  for (var i = 0, length = qOne.length; i < length; i++)  {
    if(qOne[i].checked) {

      var answ1 = qOne[i].value
        if (qOne[i].value === 'true')  {
        score +=10
      }
    }
  }
  for (var i = 0, length = qTwo.length; i < length; i++)  {
    if(qTwo[i].checked) {

      var answ2 = qTwo[i].value
      if (qTwo[i].value === 'true')  {
        score +=10
      }
    }
  }
  for (var i = 0, length = qThree.length; i < length; i++)  {
    if(qThree[i].checked) {

      var answ3 = qThree[i].value
      if (qThree[i].value === 'true')  {
        score +=10
      }
    }
  }

  if (score === 0)  {
    document.getElementById('cheers').value = 'Second chances are available: '+ score + "/30";
  } else if (score <= 15) {
    document.getElementById('cheers').value = 'You can do better, you scored : '+ score + "/50";

  } else if (score >= 16) {
    document.getElementById('cheers').value = 'Excellent', you scored :'+ score +'"/50";
  }
  event.preventDefault ();

  }
}


}
