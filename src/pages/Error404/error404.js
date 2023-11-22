import './error404.scss'
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<div className='Error404'>
			<Header />
			<div className="Error404_infos">
				<h1 className='Error404_infos_title'>404</h1>
				<p className='Error404_infos_content'>La page que vous <br className='Error404_infos_None'/>recherchez n'existe pas.</p>
			</div>
				<Link className='Error404_infos_return' to='/'>Retourner sur la page d'accueil</Link>
				<Footer />
		</div>
	)
}
