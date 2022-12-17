const sections = document.querySelectorAll('.section')
const sectionBtns = document.querySelectorAll('.controlls')
const sectBtn = document.querySelectorAll('.control')
const allSections= document.querySelector('.main-contact')


function pageTranstion(){
    for(let i = 0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let correntBtn = document.querySelectorAll('.active-btn')
            correntBtn[0].className=correntBtn[0].className.replace('active-btn', ' ')
            this.className += ' active-btn';
        })
    }
    allSections.addEventListener('click',(e)=>{
       const id = e.target.dataset.id;
       if(id){
        sectionBtns.forEach ((btn) =>{
            btn.classList.remove('active')

        })
        e.target.classList.add('active')

        sections.forEach((section)=>{
            section.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active')
       }
    })

// --------Color Toggle--------------->
    const themeBtn=document.querySelector('.theme-btn')
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}



// --------Progress bar------------->

const bars = document.querySelectorAll('.progress_bar');

    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0]
        tooltip.innertext=percentage + '%';
        bar.style.width=percentage + '%'
    })  
pageTranstion()