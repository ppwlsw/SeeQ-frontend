import { useEffect, useState } from "react";
import MarkerPopup,{ type MarkerData } from "~/components/marker_popup";
import { Loader2 } from "lucide-react";

function MapPage() {
  const [selectedPlace, setSelectedPlace] = useState<MarkerData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState<MarkerData[]>([]); // Store fetched places
  const zoomLevel = 15;

  useEffect(() => {
    if (typeof document !== "undefined") {
      (async () => {
        try {
          const L = await import("leaflet");
          setIsLoading(true);

          let map = L.map("map").setView([13.84791, 100.57132], zoomLevel);

          L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '<a href="https://www.openstreetmap.org/#map=16/13.84791/100.57132"></a>',
          }).addTo(map);

          navigator.geolocation.getCurrentPosition(
            async (position) => {
              console.log(position.coords);
              let { latitude, longitude } = position.coords;
              let userLocation = L.latLng(latitude, longitude);

              var customUsermarker = new L.Icon({
                iconUrl: "././public/here-icon.png",

                iconSize: [46, 46],
                iconAnchor: [12, 41],
              });

              const userMarker = L.marker(userLocation, {
                icon: customUsermarker,
              }).addTo(map);
              userMarker.on("click", () =>
                console.log("User Location Clicked")
              );

              try {
                const response = await fetch(
                  `http://localhost:80/api/users/nearby-shops?latitude=${latitude}&longitude=${longitude}`,
                  {
                    headers: {
                      "Access-Control-Allow-Origin": "*",
                      Authorization:
                        "Bearer 1|u3WNYITEtW5wq1ixUaaJRp6CYPKjOCIxj5BDEPK1796b94b6",
                    },
                  }
                );
                if (!response.ok)
                  throw new Error("Failed to fetch nearby shops");

                const responseData = await response.json();
                const shops = responseData.data.map((shop: any) => ({
                  id: shop.id,
                  title: shop.name,
                  address: shop.address,
                  imgUrl: shop.image_url,
                  coords: [
                    parseFloat(shop.latitude),
                    parseFloat(shop.longitude),
                  ],
                  distance: shop.distance,
                  is_open: shop.is_open,
                }));

                console.log(shops);

                setPlaces(shops);

                shops.forEach((place: any) => {
                  const shopMarker = new L.Icon({
                    iconUrl: place["imgUrl"] ?? "../../def-res-icon.png",
                    shadowSize: [36, 36],
                    iconSize: [48, 48],
                  });
                  const marker = L.marker(place.coords, {
                    icon: shopMarker,
                  }).addTo(map);
                  marker.on("click", () => setSelectedPlace(place));
                });
              } catch (error) {
                console.error("Error fetching nearby shops:", error);
              }
            },
            (error) => {
              console.error("Geolocation error:", error);
              setIsLoading(false);
            },
            { maximumAge: 60, timeout: 5000, enableHighAccuracy: true }
          );
        } catch (error) {
          console.error("Error loading map:", error);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, []);

  return (
    <div className="relative flex flex-col">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-50">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-cyan-900" />
            <p className="text-cyan-900 font-medium">Loading map...</p>
          </div>
        </div>
      ) : null}
      <div id="map" className="w-screen h-[90vh] z-0" />
      {selectedPlace && <MarkerPopup markerData={selectedPlace} />}
    </div>
  );
}

export default MapPage;
