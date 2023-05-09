import { Link } from 'react-router-dom';
import s from './Footer.module.css'
import twitter from '../../assets/Twitter.svg'
import facebook from '../../assets/Facebook.svg'
import youtube from '../../assets/Tiktok.svg'
import instagram from '../../assets/Instagram.svg'

const Footer = () => {

	return (
			
			<div className={s.footer}>
				<div className={s.navigate}>
					<Link className={s.link}>Novedades</Link>
					<Link className={s.link}>Guía de Juego</Link>
					<Link className={s.link}>Servicio de atencion al cliente</Link>
					<Link className={s.link}>Sobre nuestra compañía</Link>
					<Link className={s.link}>Seleccionar país o región</Link>
					<Link className={s.link}>Sitio de prensa</Link>
				</div>
				
				<div className={s.icons}>
					<Link className={s.link}>
						<img src={facebook} alt={'s'}/>
						Facebook</Link>
					<Link className={s.link}>
						<img src={youtube} alt={'s'}/>
						Youtube</Link>
					<Link className={s.link}>
						<img src={twitter} alt={'s'}/>
						Twitter</Link>
					<Link className={s.link}>
						<img src={instagram} alt={'s'}/>
						Instagram</Link>
				</div>

				<div className={s.legal}>
					<Link className={s.link}>Condiciones de uso</Link>
					<Link className={s.link}>Aviso de privacidad</Link>
					<Link className={s.link}>Página de Cookies</Link>
					<Link className={s.link}>Información Legal</Link>
					<Link className={s.nolink}>©2023 Pokémon. ©1995 - 2023<br/>
					Nintendo/Creatures Inc./GAME FREAK inc. TM,<br/>
					®Nintendo.</Link>
				</div>

			</div>
	);
};

export default Footer;