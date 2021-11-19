import {GameView, clickToTail, canvas} from "./gameview.js"
import {move} from "./game.js"

const initialState = [
    [7, 1, 5],
    [4, 2, 3],
    [6, 0, 8]]

let s1 = initialState
new GameView(s1)

canvas.addEventListener('click', moveView)


function moveView(event)
{
    const [i, j] = clickToTail(event.offsetX, event.offsetY)
    s1 = move(s1, i, j)
    new GameView(s1)
}
