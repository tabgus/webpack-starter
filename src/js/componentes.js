import '../css/componentes.css';

export const saludar = (nombre) => {
    
    console.log('Creando etiqueta h1 xxxxxxx');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}, clase de webpack server`;
    document.body.append(h1);
}