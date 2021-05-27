
//  turn page

let turnPageBtn = document.querySelectorAll('.page-change')

turnPageBtn.forEach((el, index) => {
    el.onclick = (e) => {
        let pageTurnId = el.getAttribute('data-page')
        if (!pageTurnId) return

        //Ngừng vid nếu sang page mới

        let videos = document.querySelectorAll('video')

        videos.forEach((el_1) => {
            el_1.pause()
        })
        
        let pageTurn = document.getElementById(pageTurnId)

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn')
            setTimeout(() => {
                pageTurn.style.zIndex = 'unset'
            }, 600);
        } else {
            pageTurn.classList.add('turn')
            pageTurn.style.zIndex = 20 - index
        }
    }
})

//Hiện video

let videos = document.querySelectorAll('video')

videos.forEach((el) => {
    el.onplay = () => {
        videos.forEach((el_1) => {
            if (el === el_1) {
                el.play()
            } else {
                el_1.pause()
            }
        })
    }
})


//animation

let cover = document.querySelector('.cover.right')

let page = document.querySelectorAll('.page-right.turn')

setTimeout(() => {
    cover.classList.add('turn')
}, 2100);

setTimeout(() => {
    cover.style.zIndex = -1
}, 2800);

page.forEach((el, index) => {
    el.style.zIndex = 20 - index
})

page.forEach((el, index) => {
    setTimeout(() => {
        el.classList.remove('turn')
        setTimeout(() => {
            el.style.zIndex = 'unset'
        }, 600);
    }, (index + 1) * 200 + 2100);
})