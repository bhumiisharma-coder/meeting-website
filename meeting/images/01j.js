function animateCounter(element, start, end, duration) {
    let range = end - start,
        stepTime = Math.abs(Math.floor(duration / range)),
        startTime = new Date().getTime(),
        endTime = startTime + duration,
        timer
  
    function run() {
      let now = new Date().getTime(),
          remaining = Math.max((endTime - now) / duration, 0),
          value = Math.round(end - (remaining * range))
      
      element.innerHTML = value
      
      if (value === end) {
        clearInterval(timer)
        element.innerHTML = value + '+'
      }
    }
  
    timer = setInterval(run, stepTime)
    run()
  }
  
  const counter = document.getElementById('counter')

  const counter1 = document.getElementById('counter1')

  const counter2 = document.getElementById('counter2')


  const startValue = parseInt(counter.getAttribute('data-start'), 10)
  const endValue = parseInt(counter.getAttribute('data-end'), 10)
  const duration = parseInt(counter.getAttribute('data-duration'), 10)


  
  const startValue1 = parseInt(counter1.getAttribute('data-start'), 10)
  const endValue1 = parseInt(counter1.getAttribute('data-end'), 10)
  const duration1 = parseInt(counter1.getAttribute('data-duration'), 10)

  const startValue2 = parseInt(counter2.getAttribute('data-start'), 10)
  const endValue2 = parseInt(counter2.getAttribute('data-end'), 10)
  const duration2 = parseInt(counter2.getAttribute('data-duration'), 10)




  
  animateCounter(counter, startValue, endValue, duration);

  animateCounter(counter1, startValue1, endValue1, duration1);

  animateCounter(counter2, startValue2, endValue2, duration2);