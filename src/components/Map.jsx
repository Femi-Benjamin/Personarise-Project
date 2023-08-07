import React, { useRef, useEffect } from 'react'

function CanvasWithDraggableHTML() {
  const canvasRef = useRef(null)
  const divRef = useRef(null)
  const isDragging = useRef(false)
  const initialMousePosition = useRef({ x: 0, y: 0 })
  const offset = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Draw a background on the canvas
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Create an image element from the draggable HTML element
    const image = new Image()
    image.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${divRef.current.offsetWidth}' height='${divRef.current.offsetHeight}'><foreignObject width='100%' height='100%'><div xmlns='http://www.w3.org/1999/xhtml'>${divRef.current.innerHTML}</div></foreignObject></svg>`
    image.onload = () => {
      // Draw the image on the main Canvas
      ctx.drawImage(image, 100, 100)
    }
  }, [])

  useEffect(() => {
    const handleMouseDown = (event) => {
      isDragging.current = true
      const { left, top } = divRef.current.getBoundingClientRect()
      initialMousePosition.current = { x: event.clientX, y: event.clientY }
      offset.current = { x: event.clientX - left, y: event.clientY - top }
    }

    const handleMouseMove = (event) => {
      if (isDragging.current) {
        const canvas = canvasRef.current
        const { left, top } = canvas.getBoundingClientRect()
        const x = event.clientX - left - offset.current.x
        const y = event.clientY - top - offset.current.y
        divRef.current.style.left = `${x}px`
        divRef.current.style.top = `${y}px`
      }
    }

    const handleMouseUp = () => {
      isDragging.current = false
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} width={400} height={400} />
      <div
        ref={divRef}
        style={{ position: 'absolute', left: 100, top: 100 }}
        onMouseDown={(event) => handleMouseDown(event)}
      >
        Drag me!
      </div>
    </>
  )
}

export default CanvasWithDraggableHTML
