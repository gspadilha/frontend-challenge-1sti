import './index.css';

const capitais = [
  {
    min: 10,
    max: 15,
    nome: 'Rio de Janeiro 0',
  },
  {
    min: 10,
    max: 15,
    nome: 'Rio de Janeiro 1',
  },
  {
    min: 10,
    max: 15,
    nome: 'Rio de Janeiro 2',
  },
  {
    min: 10,
    max: 15,
    nome: 'Rio de Janeiro 3',
  },
  {
    min: 10,
    max: 15,
    nome: 'Rio de Janeiro 4',
  },
  {
    min: 10,
    max: 15,
    nome: 'Rio de Janeiro 5',
  },
  {
    min: 10,
    max: 15,
    nome: 'Rio de Janeiro 6',
  },
  {
    min: 10,
    max: 15,
    nome: 'Rio de Janeiro 7',
  },
  {
    min: 10,
    max: 15,
    nome: 'Rio de Janeiro 8',
  },
  {
    min: 10,
    max: 15,
    nome: 'Rio de Janeiro 9',
  },
];

export default function Capitais() {
  return (
    <>
      <div className='separador'></div>
      <section id='capitals'>
        <p>Capitais</p>
        <div>
          <aside>
            <h3 className='h3-title'>
              <span>Min</span>
              <span>Max</span>
              <span>&nbsp;</span>
            </h3>

            {capitais.map((item, index) => {
              if (index % 2 === 1) {
                return null;
              }

              return (
                <h3 key={item.nome}>
                  <span>{item.min}°C</span>
                  <span>{item.max}°C</span>
                  <span>{item.nome}</span>
                </h3>
              );
            })}
          </aside>
          <aside>
            <h3 className='h3-title'>
              <span>Min</span>
              <span>Max</span>
              <span>&nbsp;</span>
            </h3>

            {capitais.map((item, index) => {
              if (index % 2 === 0) {
                return null;
              }

              return (
                <h3 key={item.nome}>
                  <span>{item.min}°C</span>
                  <span>{item.max}°C</span>
                  <span>{item.nome}</span>
                </h3>
              );
            })}
          </aside>
        </div>
      </section>
    </>
  );
}
