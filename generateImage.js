const Canvas = require("canvas")

const background = "https://imgur.com/a/2I3oygB"

const dim ={
    heigt: 675
    width: 1200
    margin: 50
}
const av = {
    size: 256
    x: 480
    y: 170
}
const generateImage = async (member) => {
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format:"png", dynamic: false, size: av.size})

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)

    ctx.fillStyle = "rgba(0,0,0,0.8)"
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin)

    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()

    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y +av.size / 2, av.size / 2)
    
}