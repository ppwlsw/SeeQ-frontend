function CurrentLocationCard() {
    return (
        <div className="rounded-b-[20px] h-[9.9vh] bg-primary-dark shadow-md px-6 mb-5">
            <div className="flex gap-3.5">
                <div className="rounded-md bg-white w-[47px] h-[47px]"></div>
                <div className="flex flex-col text-white">
                    <p>Current location</p>
                    <p className="truncate w-[65vw]">Soi 1/1 Khwaeng Bang Khae Nuea, Khet Bang Khae, Krung Thep Maha Nakhon 10160</p>
                </div>
            </div>
        </div>
    );
}

export default CurrentLocationCard;
