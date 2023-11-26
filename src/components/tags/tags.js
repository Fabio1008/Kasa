import './tags.scss'
import { useParams } from 'react-router-dom';
import datas from '../../data/data';


export default function Tags() {
    const idFicheLogement = useParams('id').id;
    const dataCurrentFicheLogement = datas.filter(data => data.id === idFicheLogement);

   return (
    <div className='tags'>
{dataCurrentFicheLogement[0].tags.map((tag, index) => {
    return (
        <button key={index}>{tag}</button>
    )
})}
</div>
   )
}

