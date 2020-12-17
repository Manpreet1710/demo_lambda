console.log('connected')

let form = document.querySelector('#form')
console.log(form)
// let start = document.querySelector('#startsWith')

const data = async (input) => {
  try {
    const newdata = await fetch(`/.netlify/functions/getWords?name=${input}`)
    const res = await newdata.json()
    Array.from(res).map((val) => {
      if (!val.includes(input)) {
        console.log('not fount')
      }
    })

    let ul = document.querySelector('.ul')
    ul.innerHTML = ''
    Array.from(res).forEach((elem) => {
      const li = document.createElement('li')
      const link = document.createElement('a')
      link.innerText = elem
      link.href = '/'
      li.appendChild(link)
      ul.appendChild(li)
    })
  } catch (error) {
    console.log(error)
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('clciked')
  let input = document.querySelector('.inpt')
  data(input.value)
})
