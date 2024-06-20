import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()

  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function sum() {
  timer.sumSeconds()
}

export function sub() {
  timer.subSeconds()
}

export function floresta() {
  state.isMute = document.documentElement.classList.toggle('music-on')
  if (state.isMute) {
    sounds.bgFloresta.play()
    return
  }

  sounds.bgFloresta.pause()
}

export function chuva() {
  state.isMute = document.documentElement.classList.toggle('music-on')
  if (state.isMute) {
    sounds.bgChuva.play()
    return
  }

  sounds.bgChuva.pause()
}
export function cafeteria() {
  state.isMute = document.documentElement.classList.toggle('music-on')
  if (state.isMute) {
    sounds.bgCafeteria.play()
    return
  }

  sounds.bgCafeteria.pause()
}
export function lareira() {
  state.isMute = document.documentElement.classList.toggle('music-on')
  if (state.isMute) {
    sounds.bgLareira.play()
    return
  }

  sounds.bgLareira.pause()
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')
  if (state.isMute) {
    sounds.bgFloresta.play()
    return
  }

  sounds.bgFloresta.pause()
}
