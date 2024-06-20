
//Variables globales
const canvas = document.querySelector("canvas")
const contexto = canvas.getContext("2d") //webld //

//Alto y ancho

//IMPORTANTE!!! TENER EN CUENTA TAMAÑO DEL MOVIL PARA RECONFIGURAR
const widthPorcentage = 70
const heightPorcentage = 50
const padding = 50


//Variables del hexagono

//posición en el Canvas
const x = canvas.width / 2
const y = canvas.height / 2
let numeroLados = 6;

function resizeCanvas() {
    const screenWidth = window.innerWidth - padding;
    const screenHeight = window.innerHeight;
    
    canvas.width = screenWidth * widthPorcentage / 100;
    canvas.height = screenHeight * heightPorcentage / 100;
    drawHexagons()
}



// Función para dibujar un hexágono
function drawhexagon(x, y, radio) {
    const numeroLados = 6;
    const angulo = (2 * Math.PI) / numeroLados;

    contexto.beginPath();

    for (let i = 0; i < numeroLados; i++) {
        const xPos = x + radio * Math.cos(i * angulo);
        const yPos = y + radio * Math.sin(i * angulo);
        if (i === 0) {
            contexto.moveTo(xPos, yPos);
        } else {
            contexto.lineTo(xPos, yPos);
        }
    }

    contexto.closePath();
    contexto.stroke();
    contexto.fillStyle = 'purple'; // Color de relleno
    contexto.fill();
}

// Función para dibujar múltiples hexágonos
function drawHexagons() {
    contexto.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas

    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;
    const radio = Math.min(canvas.width, canvas.height) / 8; // Radio ajustado al tamaño del canvas

    // Dibujar el hexágono central
    drawhexagon(centroX, centroY, radio);

    // Dibujar hexágonos alrededor del hexágono central
    const numeroLados = 6;
    const distancia = radio * 2; // Distancia desde el centro del hexágono central al centro de los hexágonos circundantes

    for (let i = 0; i < numeroLados; i++) {
        const xPos = centroX + distancia * Math.cos(i * (2 * Math.PI / numeroLados));
        const yPos = centroY + distancia * Math.sin(i * (2 * Math.PI / numeroLados));
        drawhexagon(xPos, yPos, radio);
    }
}

// EjecutarresizeCanvas al cargar la página
window.addEventListener('load',resizeCanvas);

// EjecutarresizeCanvas al redimensionar la ventana
window.addEventListener('resize',resizeCanvas);



