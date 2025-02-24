import CurrentLocationCard from "~/components/current-location-card";
import GapController from "~/components/gap-control";
import LongShopCard from "~/components/long-shop-card";
import NearbyShopCard from "~/components/nearby-shop-card";
import SearchBar from "~/components/search-bar";
import XAxisSlide from "~/components/x-axis-slide";

function HomePage(){
    return <div>
        <CurrentLocationCard></CurrentLocationCard>
        <div className="px-5">
            <GapController gap={55}>
                <center><SearchBar></SearchBar></center>
                <div>
                    <GapController gap={15}>
                        <h1 className="text-[20px] font-bold">ร้านค้าใกล้เคียงยอดนิยม</h1>
                        <XAxisSlide>
                            <NearbyShopCard img_url={"public/teenoi.png"} name={"ตี๋น้อย พหลโยธิน 29"} distance={"500"}></NearbyShopCard>
                            <NearbyShopCard img_url={"public/teenoi.png"} name={"ตี๋น้อย พหลโยธิน 29"} distance={"500"}></NearbyShopCard>
                            <NearbyShopCard img_url={"public/teenoi.png"} name={"ตี๋น้อย พหลโยธิน 29"} distance={"500"}></NearbyShopCard>
                            <NearbyShopCard img_url={"public/teenoi.png"} name={"ตี๋น้อย พหลโยธิน 29"} distance={"500"}></NearbyShopCard>
                        </XAxisSlide>
                    </GapController>
                </div>
                <div>
                    <GapController gap={15}>
                        <h1 className="text-[20px] font-bold">ร้านค้าทั้งหมด</h1>
                        <LongShopCard img_url={"public/starbuck.png"} name={"ตี๋น้อย พหลโยธิน 29"} distance={"1.00"} total_queue={"35"}></LongShopCard>
                        <LongShopCard img_url={"public/starbuck.png"} name={"ตี๋น้อย พหลโยธิน 29"} distance={"1.00"} total_queue={"35"}></LongShopCard>
                        <LongShopCard img_url={"public/starbuck.png"} name={"ตี๋น้อย พหลโยธิน 29"} distance={"1.00"} total_queue={"35"}></LongShopCard>
                        <LongShopCard img_url={"public/starbuck.png"} name={"ตี๋น้อย พหลโยธิน 29"} distance={"1.00"} total_queue={"35"}></LongShopCard>
                    </GapController>
                </div>
            </GapController>
        </div>
    </div>
}

export default HomePage;