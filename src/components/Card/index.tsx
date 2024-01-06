import { LiaArrowUpSolid, LiaArrowDownSolid } from 'react-icons/lia';
import { GrFormClose } from 'react-icons/gr';

import './index.css';

const info = {
  dados: {
    nomeCidade: 'Niterói, RJ - Brasil',
    temperaturaAtual: '20°C Nublado',
    min: 16,
    max: 25,
    sensacao: 19,
    vento: 18,
    umidade: 89,
  },
  previsao: [
    {
      dia: 'Terça',
      temp_min: '18',
      temp_max: '36',
    },
    {
      dia: 'Quarta',
      temp_min: '18',
      temp_max: '36',
    },
    {
      dia: 'Quinta',
      temp_min: '18',
      temp_max: '36',
    },
    {
      dia: 'Sexta',
      temp_min: '18',
      temp_max: '36',
    },
    {
      dia: 'Sábado',
      temp_min: '18',
      temp_max: '36',
    },
  ],
};

export default function Card() {
  return (
    <main>
      <div>
        <GrFormClose color='#f6802c' />
      </div>
      <div className='cidade'>{info.dados.nomeCidade}</div>
      <div className='temperaturaAtual'>{info.dados.temperaturaAtual}</div>
      <div className='informacoesAdicionais'>
        <div className='informacoesAdicionaisTemperatura'>
          <label>
            <LiaArrowDownSolid color='#f6802c' /> {info.dados.min}°
            <LiaArrowUpSolid color='#f6802c' /> {info.dados.max}°
          </label>
          <label>
            Sensação<span>{info.dados.sensacao}°</span>
          </label>
        </div>
        <div className='informacoesAdicionaisDemais'>
          <label>
            Vento<span>{info.dados.vento}km/h</span>
          </label>
          <label>
            Umidade<span>{info.dados.umidade}%</span>
          </label>
        </div>
      </div>

      <div className='separador'></div>

      <div className='temperaturasComDiasDaSemana'>
        {info.previsao.map(item => {
          return (
            <div key={item.dia}>
              <span className='diaSemana'>{item.dia}</span>
              <div>
                <span className='temperaturaSemana'>{item.temp_min}°</span>
                <span className='temperaturaSemana'>{item.temp_max}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
