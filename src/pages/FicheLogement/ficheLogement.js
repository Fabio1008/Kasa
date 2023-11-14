import './ficheLogement.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/data'
import Header from "../../components/header/Header";
import Slider from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';


export default function FicheLogement() {
	
	const [imageSlider, setImageSlider] = useState([]);

	const idFicheLogement = useParams('id').id;
	const dataCurrentFicheLogement = datas.filter(data => data.id === idFicheLogement);
	
	useEffect(() => {
		const DataCurrentFicheLogement = datas.filter(data => data.id === idFicheLogement);
		setImageSlider(DataCurrentFicheLogement[0].pictures);
	}, [idFicheLogement]);

	const name = dataCurrentFicheLogement[0].host.name.split(' '); 
	const rating = dataCurrentFicheLogement[0].rating;
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
						<div>
							{dataCurrentFicheLogement[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
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
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
			</main>
			<Footer/>
		</>
	)
}
