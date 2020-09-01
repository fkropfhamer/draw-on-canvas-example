import Draw from 'draw-on-canvas';

function main() {
    console.log('test');
    const el = document.getElementById('draw');
    new Draw(el, 256, 256, {backgroundColor: 'black', strokeColor: 'white', strokeWeight: 20});
}

main();
