import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Const/routes";
import { useEffect, useState } from "react";
import style from "./Home.module.css";
import List from "../../Components/List/List";
const Home = () => {

    const navigate = useNavigate();
    const [listAlbums, setListAlbums] = useState([]);
    const [filterAlbums, setFilterAlbums] = useState([]);

    /**
     * Al momento de iniciar el Component 'Home' realiza un fetch al mock de 'Albums'
     * Los datos que trae lo colocamos en el state de 'albums'
     * (Mirko)
     */
    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await fetch("../../mocks/albums.json")
                const result = await response.json();
                setListAlbums(result)
                setFilterAlbums(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAlbums()
    }, [])

    const onClickDetailsHandler = (id_album) => {
        const url = `${ROUTES.details}/${id_album}`
        navigate(url);
    };

    /**
     * Buscador de Albums
     */
    const onChangeSearch = (param) => {
        if (!param.target.value) {
            setFilterAlbums(listAlbums)
        } else {
            let albumsFilter = listAlbums.filter(album =>
                album.name.toLowerCase().includes(param.target.value.toLowerCase())
            );
            setFilterAlbums(albumsFilter)
        }
    };

    return (
        <div className={style.home}>

            {/* Input para buscar las tareas */}
            <div className="flex justify-center">
                <input className="text-center w-52 h-12 mb-5 border-double border-4 border-red-700 text-black rounded-md" type="text" placeholder="Buscar..." onChange={onChangeSearch} />
            </div>
            <List albums={filterAlbums} onClickDetailsHandler={onClickDetailsHandler} />

        </div>
    )
}

export default Home