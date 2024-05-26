import './presentacion.css';

export const Presentacion = ({ nombre, edad, imagenSrc }) => {
  return (
    <section className='presentacion'>
      <div className='container-presentacion'>
        <h2>Hola, mi nombre es {nombre}</h2>
        <p className='parrafo'>Soy de Concepcion-Tucuman y estoy tratando todos los dias de aprender algo nuevo en el mundo de la programacion.</p>
        <p className='parrafo'>Tengo {edad} años y este soy yo</p>
        <img src={imagenSrc} alt={`Foto de ${nombre}`} />
      </div>
    </section>
  );
};
