import './Footer.css';

export function Footer() {
    return (
      <footer className="footer">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className='footer__container'>
            <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
            <ul className='footer__links'>
               <li className="footer__link"><a target="blank" href="https://practicum.yandex.ru/">Яндекс.Практикум</a></li> 
               <li className="footer__link"><a target="blank" href="https://github.com/metelka2015">Github</a></li>           
            </ul>
        </div>   
      </footer>
    );
  }
  