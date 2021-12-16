import { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Frame from '../../components/Frame/Frame';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

import axios from 'axios';

import './Home.scss';

export default function Home() {

  const [plantas, setPlantas] = useState([]);
  const [montado, setMontado] = useState(false);

  const getPlantas = async () => {
    await axios.get('/plant/findMany')
    .then(response => {
      if(montado) {
        setPlantas(response.data);
      }
    })
  }

  useEffect(() => {
    setMontado(true)
    getPlantas()
  }, [montado])

  return(
    <div className='home'>
      <Navbar />
      <Frame 
        image="https://images.wallpaperscraft.com/image/single/leaves_plant_green_136320_3840x2400.jpg"
        imageAlt="Diversas plantas"
        title="Encontre plantas, cadastre plantas"
        subtitle="Contribua e faça a API crescer"
      />
      <div className='home__cards'>
        {
          plantas.map(item => (
            <Card
              id={item.id}
              image={item.imageUrl}
              name={item.commonName}
              key={item.id}
            />
          ))
        }
      </div>
      <Footer />
    </div>
  )
}