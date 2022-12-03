const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log('ahdfj')
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')

console.log(hiddenElements)

hiddenElements.forEach((el) => {
    observer.observe(el)
})