import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Details = () => {
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
  }, [])

  return (
    // <section>
    <section className="bg-cover w-full h-screen bg-no-repeat" style={{backgroundImage: `url("/img/img_${id}.jpg")`}}>
    {/* <div>
      <img className="bg-cover w-auto h-full bg-no-repeat rounded-sm" src={'/img/img_1.jpg'} alt="" />
    </div> */}
      <div>Este es el nombre del album: {albumDetails.title}</div>
    </section>
  )
}

export default Details