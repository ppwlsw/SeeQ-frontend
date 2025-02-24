import { useNavigate } from "react-router";

interface NearbyShopCardProps{
    img_url: string,
    name: string,
    distance: string
}

function NearbyShopCard({img_url, name, distance}:NearbyShopCardProps){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/shop");
    };

    return (
        <div className="flex flex-col" onClick={handleClick}>
            <img src={img_url} className="h-[126px] w-[180px] object-cover mb-4"/>
            <p className="mb-1">{name}</p>
            <p className="text-[#878787]">{distance} m</p>
        </div>
    );
}

export default NearbyShopCard