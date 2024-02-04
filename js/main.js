const navButton = document.querySelector('.nav-icon-btn'),
      navIcon = document.querySelector('.nav-icon');

const nav = document.querySelector('.header__top-row')

navButton.onclick = function(){
    navIcon.classList.toggle('nav-icon--active')
    nav.classList.toggle('header__mobile')
    document.body.classList.toggle('no-scroll')
}

/* phone mask */


mask('[data-tel-input]')

const phoneInput = document.querySelectorAll('[data-tel-input]')

phoneInput.forEach(input =>{
    input.addEventListener('input', ()=>{
        if (input.value == '+') input.value=''
    })
    input.addEventListener('blur', ()=>{
        if (input.value == '+') input.value=''
    })
})



/* */



initMap();

async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    const map = new YMap(
        document.getElementById('map'),

        {
            location: {
                center: [40.036381152159144,45.98239708074812],

                zoom: 16
            }
        }
    );

    map.addChild(new YMapDefaultSchemeLayer());
    
}


const form = document.querySelectorAll('form')

const mes = document.createElement('div')

    mes.innerHTML =`<div class="form-message">
        <p>Успешно! Мы ответим в течении некоторого времени.</p>
        </div>`

form.forEach(form=>{
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        form.reset()
        
    form.append(mes)


    setTimeout(()=>{
        mes.remove()
    }, 2000)

    })
    
}
)



