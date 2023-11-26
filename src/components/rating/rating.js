import datas from "../../data/data";
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';
import { useParams } from "react-router-dom";

export default function Rating() {

const idFicheLogement = useParams('id').id;
const dataCurrentFicheLogement = datas.filter(data => data.id === idFicheLogement);
const rating = dataCurrentFicheLogement[0].rating;
return (
<div className="ficheLogement_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
)
}