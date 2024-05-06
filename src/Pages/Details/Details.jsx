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
    <section className="bg-no-repeat" style={{ backgroundImage: `url("/img/img_author_${id}.jpg")` }}>
      <section className="w-1/2 py-3 pt-52 mx-auto text-gray-400" >
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-1 w-full h-full">
            <img className="bg-cover w-full h-auto rounded-lg" src={`/img/${albumDetails.image}`} alt="Imagen Album" />
          </div>
          <div className="col-span-2 flex flex-col">
            <h3 className="text-xl font-bold">{albumDetails.title}</h3>
            <div className="mt-3"><p className="tracking-wide">{albumDetails.description}</p></div>
          </div>
        </div>
        <br />
        <div className="text-2xl tracking-wide">Autor: <b>{albumDetails.autor}</b></div>
        <hr className="border-2 border-gray-600 my-2" />
        <br />
        <h2 className="text-2xl font-bold mb-3">Top <span className="text-blue-600">Songs</span></h2>
        {albumDetails && albumDetails.songs && albumDetails.songs.map(song => {
          return <>
            <article className="flex justify-between p-3 rounded-md mb-2 hover:bg-gray-800 transition-all duration-10">
              <p>{song.title}</p>
              <p>{song.length}</p>
            </article>
          </>
        })}

        <button onClick={() => navigate("/")} className="bg-gray-500 p-2 rounded-lg text-white w-24 font-semibold tracking-wider hover:bg-gray-600 cursor-pointer transition-all duration-10">Volver</button>
      </section>
    </section>

  )
}

export default Details