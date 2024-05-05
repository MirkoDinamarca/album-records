import Album from "../Album/Album"
const List = ({ albums, onClickDetailsHandler }) => {
  return (
    <section className='grid grid-cols-4 gap-6 items-center'>
      {albums.map(album => {
        return <Album key={album.id} album={album} onClickDetailsHandler={onClickDetailsHandler} />
      })}
    </section>
  )
}

export default List