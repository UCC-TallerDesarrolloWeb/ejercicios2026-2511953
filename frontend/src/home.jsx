import './styles/Home.scss';

import zumba from './assets/home/zumba.jpg';
import funcional from './assets/home/funcional.jpg';

const actividades = [
  { titulo: 'Taekwondo', imagen: '/home/taekwondo.jpg' }, 
  { titulo: 'Yoga', imagen: '/home/yoga.webp' },          
  { titulo: 'Zumba', imagen: zumba },                    
  { titulo: 'Funcional', imagen: funcional },            
];

const Home = () => {
  return (
    <section className="home-page">
      <h1>Nuestras actividades</h1>

      <div className="home-grid">
        {actividades.map((actividad) => (
          <article className="home-card" key={actividad.titulo}>
            <img src={actividad.imagen} alt={actividad.titulo} />
            <h2>{actividad.titulo}</h2>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Home;