import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [albumDetails, setAlbumDetails] = useState({})

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(`../../mocks/album_${id}.json`)
        const result = await response.json();
        setAlbumDetails(result)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAlbums()
  }, [id])

  return (
    <section className="bg-no-repeat pt-4 xl:pt-52" style={{ backgroundImage: `url("/img/img_author_${id}.jpg")` }}>
      <section className="w-auto xl:w-1/2 py-3 pt-52 mx-auto text-gray-400 p-5 xl:p-0">
        <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-3 ">
          <div className="col-span-1 w-full h-full">
            <img className="bg-cover w-full md:w-1/2 xl:w-full h-auto rounded-lg" src={`/img/${albumDetails.image}`} alt="Imagen Album" />
          </div>
          <div className="col-span-2 flex flex-col">
            <h3 className="text-xl font-bold mt-3 xl:mt-0">{albumDetails.title}</h3>
            <div className="mt-3"><p className="tracking-wide">{albumDetails.description}</p></div>
          </div>
        </div>
        <br />
        <div className="text-2xl tracking-wide">Autor: <b>{albumDetails.autor}</b></div>
        <br />
        <hr className="border-2 border-gray-600 my-2" />
        <br />
        <div className="text-2xl tracking-wide mb-3">Calificaciones:</div>
        {/* Se fija en el mock los distintos datos para mapear */}
        {albumDetails && albumDetails.ratings && albumDetails.ratings.map(rating =>{
          return <>
            <article key={rating.source} className="flex justify-between p-3 rounded-md mb-2 hover:bg-gray-800 transition-all duration-10">
              <p><a target="_blank" className="text-blue-600" href={rating.link}>{rating.source}</a></p> 
              <p>{rating.rating}</p>
            </article>
          </>
        })} 
        <hr className="border-2 border-gray-600 my-2" />
        <br />
        <h2 className="text-2xl font-bold mb-3">Top Songs</h2>
        {albumDetails && albumDetails.songs && albumDetails.songs.map((song, index) => {
          const songNumber = index + 1;
          return (
            <article key={song.title} className="flex justify-between p-3 rounded-md mb-2 hover:bg-gray-800 transition-all duration-10">
              <p>{songNumber}. {song.title}</p>
              <p>{song.length}</p>
            </article>
          );
        })}

        <button onClick={() => navigate("/")} className="bg-gray-500 p-2 rounded-lg text-white w-24 font-semibold tracking-wider hover:bg-gray-600 cursor-pointer transition-all duration-10">Volver</button>
      </section>
    </section>

  )
}

export default Details