import Draw from 'draw-on-canvas';

function main() {
    console.log('test');
    const el = document.getElementById('draw');
    const d = new Draw(el, 256, 256, { style: { borderStyle: 'solid', borderColor: 'yellow' }, backgroundColor: 'black', strokeColor: 'white', strokeWeight: 20});

    const resetButton = document.getElementById('reset');
    resetButton.onclick = () => d.reset();

    const downloadButton = document.getElementById('download');
    downloadButton.onclick = () => d.downloadPNG();
}

main();
