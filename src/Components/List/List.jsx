import Album from "../Album/Album"
const List = ({ albums }) => {
  return (
    <section className="grid container my-10 pb-52 mx-auto xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 items-center p-5 xl:p-0">
      {albums.length ?
        albums.map(album => {
          return <Album key={album.id} album={album} />
        }) : 
        <div className="col-span-4 font-bold tracking-wide">No se encontraron resultados</div>}
    </section>
  )
}

export default List