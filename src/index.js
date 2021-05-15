
// const  CountdownTimer = {
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2021'),
// };

class CountdownTimer{
  constructor(obj){
    const {selector, targetDate} = obj
    this.selector = selector;
    this.targetDate = targetDate; 
  }
  getData(){
    return this.targetDate
  }
}

const backCounter = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});


const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');

const timer = {
  start(){
    const endTime = backCounter.getData();
    setInterval(() =>{
      const currentTime = Date.now();
      const deltaTime = endTime - currentTime;
      updateClockface(deltaTime)
    },1000)

  }
}

timer.start()

function updateClockface(time){
  /*
  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
  */
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  daysRef.textContent = days;
  /*
  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
  * остатка % и делим его на количество миллисекунд в одном часе
  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
  */
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  hoursRef.textContent = hours;
  /*
  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
  */
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  minsRef.textContent = mins;
  /*
  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
  * миллисекунд в одной секунде (1000)
  */
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  secsRef.textContent = secs;
}

function pad(value){
  return String(value).padStart(2, '0');
}


