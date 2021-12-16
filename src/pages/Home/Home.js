import { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Frame from '../../components/Frame/Frame';
import Card from '../../components/Card/Card';

import axios from 'axios';

import './Home.scss';

export default function Home() {

  // Dados que vem da API
  const [plantas, setPlantas] = useState([]);

  // Se eu devo ou não mostrar os cards na tela
  const [montado, setMontado] = useState(false);

  /**
   * Use Effect, três jeitos:
   * 
   * 1) Somente na primeira vez que a página for carregado
   * 2) Trabalhar em conjunto com outro estado, sempre que esse outro estado mudar, o use effect é disparado
   * 3) Fazer o use effect rrodar sempre que qualquer estado mudar
   * 
   */

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
        image="https://images7.alphacoders.com/795/795336.jpg"
        imageAlt="Diversas plantas"
        text="Texto aqui"
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
    </div>
  )
}