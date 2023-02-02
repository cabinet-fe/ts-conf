const box = document.getElementById('box')

const observer = new ResizeObserver(([entry]) => {
  console.log(entry?.target)
})

box && observer.observe(box)

export {}
