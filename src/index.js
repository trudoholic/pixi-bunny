import * as PIXI from 'pixi.js-legacy';

const app = new PIXI.Application();
document.body.appendChild(app.view);

// Load the bunny
app.loader.add('bunny', 'bunny.png')

app.loader.load(() => {
    const sprite = PIXI.Sprite.from('bunny')
    sprite.anchor.set(0.5) // We want to rotate our sprite relative to the center, so 0.5
    app.stage.addChild(sprite)

    // Position the sprite at the center of the stage
    sprite.x = app.screen.width * 0.5
    sprite.y = app.screen.height * 0.5

    // Put the rotating function into the update loop
    app.ticker.add(delta => {
        sprite.rotation += 0.02 * delta
    })
});