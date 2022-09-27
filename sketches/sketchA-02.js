const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true,
};

const rotazione = (gradi) => {
  return gradi / 180 * Math.PI;
};


const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
};


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#202020';
    context.fillRect(0, 0, width, height);

    context.fillStyle = '#FFFFFF';


    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.009;
    const h = height * 0.5;
    let x, y;

    const num = 30;
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {

    const slice = math.degToRad(360 / num);
    const angle = slice * i;

    x = cx + radius * Math.sin(angle);
    y = cy + radius * Math.cos(angle);


    context.save();
    context.translate( x, y);
    context.rotate(-angle);
    context.scale(random.range(0.8, 4), random.range(-0.5, 0.5));


    context.beginPath();
    context.rect(- w *0.6, random.range(0.1, - h* 0.5), w, h);
    context.fill();
    context.restore();

    context.save();
    context.translate(cx, cy);
    context.rotate(-angle);

    context.lineWidth = random.range(0.2, 10);


    context.beginPath();
    context.arc(0, 0, radius*random.range(0.2, 1.5), slice*random.range(3, 5), slice*random.range(1,-8));
    context.stroke();
    context.restore();

    }

  };
};

canvasSketch(sketch, settings);
