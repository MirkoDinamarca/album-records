import Album from "../Album/Album"
const List = ({ albums, onClickDetailsHandler }) => {
  return (
    <section className="grid grid-cols-4 gap-6 items-center">
      {albums.length ?
        albums.map(album => {
          return <Album key={album.id} album={album} onClickDetailsHandler={onClickDetailsHandler} />
        }) : 
        <div className="col-span-4 font-bold tracking-wide">No se encontraron resultados</div>}
    </section>
  )
}

export default List