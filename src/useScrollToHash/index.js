import MoveTo from './moveTo'

const useScrollToHash = (initialHash) => {
  const scroll = new MoveTo({ duration: 1000, tolerance: 40 })

  const scrollToHash = (hash) => {
    scroll.move(document.querySelector(hash), {callback: () => {
      // Update hash in Url
      window.history.replaceState(
        null,
        null,
        `${document.location.pathname}${hash}`
      )
    }})
  }

  if (initialHash) {
    scrollToHash(initialHash)
  }

  return scrollToHash
}

export default useScrollToHash