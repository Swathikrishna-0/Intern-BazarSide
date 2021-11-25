const faqAccordionItemQuestions = document.querySelectorAll(".faq-accordion-item-question");

faqAccordionItemQuestions.forEach(faqAccordionItemQuestion=>{
  faqAccordionItemQuestion.addEventListener("click",event=>{
     const CurrentlyActivefaqAccordionItemQuestion = document.querySelector(".faq-accordion-item-question.active");
    if(CurrentlyActivefaqAccordionItemQuestion && CurrentlyActivefaqAccordionItemQuestion!==faqAccordionItemQuestion ){
      CurrentlyActivefaqAccordionItemQuestion.classList.toggle("active");
      CurrentlyActivefaqAccordionItemQuestion.nextElementSibling.style.maxHeight = 0;
    }

    faqAccordionItemQuestion.classList.toggle("active");
    const faqAccordionItemAns = faqAccordionItemQuestion.nextElementSibling;
    if(faqAccordionItemQuestion.classList.contains("active")){
      faqAccordionItemAns.style.maxHeight = faqAccordionItemAns.scrollHeight + "px";
    }
    else{
      faqAccordionItemAns.style.maxHeight = 0;
    }
  })
})

