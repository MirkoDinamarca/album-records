import { useNavigate } from "react-router-dom";

const Album = ({ album }) => {
    const navigate = useNavigate();
    const { title, image } = album.albums
    return (
        <div className="relative rounded-sm hover:animate-pulse hover:cursor-pointer transition-all duration-300 xs:h-full xl:w-auto 2xl:h-96 shadow_album" onClick={() => navigate(`/details/${album.id}`)}>
            <img className="bg-cover w-full md:w-auto h-auto 2xl:h-full bg-no-repeat rounded-sm bg-gray-400" src={`/img/${image}`} alt="Imagen Album" />
            <div className="absolute h-16 w-full bottom-0 bg-white rounded-sm">
                <div className="flex items-center justify-evenly">
                    <div className="flex flex-col gap-2 text-center">
                        <p className="text-gray-800"><b>{title}</b></p>
                        <p className="text-gray-500">{album.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Album