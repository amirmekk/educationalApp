
let carouselsDiv = document.getElementById('carousels') ,
    branch = carouselsDiv.getAttribute('data-branch') ,
    subject = carouselsDiv.getAttribute('data-subject'),
    arrayOfSubjectsIndex = data.indexOf(branch) + 1 ,
    arrayOfExamsIndex  = data[arrayOfSubjectsIndex].indexOf(subject) +1 ,
    exams = data[arrayOfSubjectsIndex][arrayOfExamsIndex];


// creating cards for each exam and each section has its own div with unique class
exams.forEach(element => {

    if(typeof element == 'string'){
        let examsArrIndex = exams.indexOf(element) + 1 ,
            examsArr = exams[examsArrIndex];

        carouselsDiv.innerHTML += `<div class="row ${element}">
          <div class="col s3">
            <div class="card-panel green accent-3 grad">
              <span class="black-text">${element}
              </span>
            </div>
          </div>

                                  </div>`
        let generatedDiv = document.getElementsByClassName(element)[0] ;
        examsArr.forEach(elem => {
            generatedDiv.innerHTML += `<div class="col s3">
      <div class="card black darken-1">
        <div class="card-content white-text">
          <span class="card-title white-text">${elem[1]}</span>
        </div>
        <div class="card-action">
          <a href="${elem[2]}" class="card-action green-text text-accent-3 subjectLink" target="_blank">الموضوع</a>
          <a href="${elem[3]}" class="card-action green-text text-accent-3 solutionLink" target="_blank">الحل</a>
        </div>
      </div>
    </div>
    `
        }) ;

    };



});

//initializing carousels for different sections
const newArray = Array.prototype.slice.call(carouselsDiv.children);
for(let i=0 ; i<newArray.length ; i++){
    $(newArray[i]).slick({
  dots: true,
  arrows : false ,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay : true ,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
} ;




let solutionLink = Array.prototype.slice.call(document.getElementsByClassName('solutionLink')) ,
    subjectLink = Array.prototype.slice.call(document.getElementsByClassName('subjectLink'));
/*
subjectLink.forEach(elem => {
    elem.addEventListener('click' , function(){
        console.log(elem.getAttribute('href')) ;

    })

}) ;
solutionLink.forEach(elem => {
    elem.addEventListener('click' , function(){
        console.log(elem.getAttribute('href')) ;

    })

}) ;
*/
