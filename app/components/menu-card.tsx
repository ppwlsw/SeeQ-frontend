import GapController from "./gap-control";

interface MenuCardProps{
    img_url: string;
    name: string
}

function MenuCard({img_url, name}:MenuCardProps){
    return(
        <GapController gap={10} algin="center">
            <img src={img_url} className="w-16 h-16 object-cover"></img>
            <p className="text-[12px] font-normal">{name}</p>
        </GapController>
    );
}

export default MenuCard