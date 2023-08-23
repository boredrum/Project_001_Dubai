import React from "react";

function ContactMap() {

  return (
    <>
      <div id="map_block">
        <iframe src="https://maps.google.com/maps?width=1800&amp;height=768&amp;hl=en&amp;q=25.10185010422024,%2055.18450660821276+(My%20Business%20N269%20King%20Str,%2005th%20Floor,%20Utral%20Hosue%20Building,%20%20Dubai,%20VIC%203000,%20UAE.ame)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
      </div>
    </>
  );
}

export default ContactMap;

// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// const center = { lat: 48.8584, lng: 2.2945 };

// function ContactMap() {
// 	const { isLoaded } = useJsApiLoader({
// 		googleMapsApiKey: "",
// 	});

// 	if (!isLoaded) return <div>Loading...</div>;

// 	return (
// 		<>
// 			<div id="map_block">
// 				<GoogleMap
// 					center={center}
// 					zoom={15}
// 					mapContainerStyle={{ width: "100%", height: "100%" }}
// 				></GoogleMap>
// 			</div>
// 		</>
// 	);
// }

// export default ContactMap;
