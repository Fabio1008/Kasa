import './ficheLogement.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/data'
import Header from "../../components/header/Header";
import Slider from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collapse/Collapse';

import Error from '../Error404/error404'
import Tags from '../../components/tags/tags';
import Rating from '../../components/rating/rating';

export default function FicheLogement() {
	
	const [imageSlider, setImageSlider] = useState([]);

	const idFicheLogement = useParams('id').id;
	const dataCurrentFicheLogement = datas.filter(data => data.id === idFicheLogement);
	
	useEffect(() => {
		const DataCurrentFicheLogement = datas.filter(data => data.id === idFicheLogement);
		if (DataCurrentFicheLogement.length !== 0) {
			setImageSlider(DataCurrentFicheLogement[0].pictures);
		}
	}, [idFicheLogement]);
// Vérification de la présence de données pour cet identifiant
if (dataCurrentFicheLogement.length === 0) {
	// Aucune donnée trouvée, retourne le composant Error404
	return <Error/>
}
	const name = dataCurrentFicheLogement[0].host.name.split(' '); 

	const description  = dataCurrentFicheLogement[0].description;
	const equipments = dataCurrentFicheLogement[0].equipments;

	return (
		<>
			<Header/>
			<Slider imageSlider={imageSlider}/>
			<main className="ficheLogement">
				<div className="ficheLogement_content">
					<div className="ficheLogement_content_infos">
						<h1>{dataCurrentFicheLogement[0].title}</h1>
						<p>{dataCurrentFicheLogement[0].location}</p>
						<Tags Tags={Tags}/>
					</div>					
					<div className="ficheLogement_content_host">
						<div>
							<div className='ficheLogement_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentFicheLogement[0].host.picture} alt="host of this accomodation" />
						</div>
							
						<div className="ficheLogement_content_host_stars">
							<Rating rating={Rating}/>
						</div>
					</div>
				</div>
				<div className="ficheLogement_collapse">
					<div className="ficheLogement_collapse_item">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="ficheLogement_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
			<Footer/>
		</>
	)
}
