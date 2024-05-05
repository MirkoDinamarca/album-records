import { useNavigate } from 'react-router-dom';

const Album = ({ album, onClickDetailsHandler }) => {
    const navigate = useNavigate();
    const { title, image } = album.albums
    return (
        <div className='relative rounded-sm hover:animate-pulse transition-all duration-300' style={{ width: 'auto', height: '300px', boxShadow: 'rgb(95 92 92) 16px 18px 5px -9px' }} onClick={() => navigate(`/details/${album.id}`)}>
            <img className="bg-cover w-auto h-full bg-no-repeat rounded-sm bg-gray-400" src={`/img/${image}`} alt="Imagen Album" />
            <div className='absolute h-16 w-full bottom-0 bg-white rounded-sm'>
                <div className='flex items-center justify-evenly'>
                    <div className='flex flex-col gap-2 '>
                        <p className='text-gray-800'><b>{title}</b></p>
                        <p className='text-gray-500'>{album.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Album