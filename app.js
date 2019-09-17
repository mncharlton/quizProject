const form = document.querySelector('form')
const correctAnswers = ['A', 'A', 'B', 'B']
const result = document.querySelector('span')
const resultBar = document.querySelector('.result')

form.addEventListener('submit', e => {
  e.preventDefault()
  let score = 0
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25
    }
  })

  result.textContent = score + '%'
  console.log(resultBar.classList)
  resultBar.classList.remove('d-none')
  console.log(score)
})
