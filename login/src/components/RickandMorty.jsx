import { useEffect, useState } from "react";
import './RickandMorty.css';

function RickandMorty() {

    const [info, setInfo] = useState([]);
    const [page, setPage] = useState(1);


    async function getInformation() {
        const information = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const data = await information.json();
        const arrr = data.results;
        setInfo(arrr);
    }

    function paginatioHandler(){
        setPage(page +1);
        getInformation();
    }

    useEffect(() => {
        getInformation();

    }, [])

    return (
        <>
        <div className="cards-container">
            {info.map((i) => (
                <div className="card-character" key={i.name} style={{ backgroundImage: `url(${i.image})` }}>
                    <div className="filter">
                        <h1 className="name-character">{i.name}</h1>
                        <h2 className="status-character">{i.status}</h2>

                    </div>
                </div>
            ))}
        </div>
        <button>prev</button>
        <button onClick={()=>{paginatioHandler()}}>next</button>
        </>
    );
}

export default RickandMorty;