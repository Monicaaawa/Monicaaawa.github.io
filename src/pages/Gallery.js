import React, { useState, useEffect } from "react";
import { Grid } from '@mui/material';

export default function Gallery() {
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    console.log("Fetching Instagram data...");
    const url =
      "https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,children&access_token=IGQVJWdHlWMy15dk8zY2hoZA0tiUUVVQ0E2d3dzYllkRHZAyMF9wai1saXRZARExJWWpNSkxNRGVWTEhEbHFLSnlMZAlJtYXBGUnktb0RVOXExTHZAFTkNqYWJzOVZA4WHVMWmlZAU09JZAlJYQ285QWt4V1VHcQZDZD";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Instagram data:", data);
        setFeed(data);
      })
      .catch((error) =>
        console.log("Error fetching Instagram data:", error)
      );
  }, []);

  if (!feed) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content">
        <div className="gallery">
            <Grid 
                container
                spacing={0.5}
                justifyContent="center"
                alignItems="center"
            >
                {feed.data.map((item) => (
                    <Grid item xs={12} sm={12} md={4} key={item.id}>
                            <img src={item.media_url} alt={item.caption} width={360} />
                    </Grid>
                ))}
            </Grid>
        </div>
    </div>
  );
}


// import React, { useState, useEffect } from "react";
// import { Grid } from '@mui/material';

// export default function Gallery() {
//   const [allMediaItems, setMediaItems] = useState([]);

// useEffect(() => {
//     console.log("Fetching Instagram data...");
//     const url =
//       "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,children&access_token=IGQVJWdHlWMy15dk8zY2hoZA0tiUUVVQ0E2d3dzYllkRHZAyMF9wai1saXRZARExJWWpNSkxNRGVWTEhEbHFLSnlMZAlJtYXBGUnktb0RVOXExTHZAFTkNqYWJzOVZA4WHVMWmlZAU09JZAlJYQ285QWt4V1VHcQZDZD";
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         data.data.forEach((item) => {
//           if (item.media_type === "CAROUSEL_ALBUM") {
//             item.children.data.forEach((child) => {
//               fetch("https://graph.instagram.com/"+ child.id +"?fields=id,media_url,caption&access_token=IGQVJWdHlWMy15dk8zY2hoZA0tiUUVVQ0E2d3dzYllkRHZAyMF9wai1saXRZARExJWWpNSkxNRGVWTEhEbHFLSnlMZAlJtYXBGUnktb0RVOXExTHZAFTkNqYWJzOVZA4WHVMWmlZAU09JZAlJYQ285QWt4V1VHcQZDZD")
//                 .then((childResponse) => childResponse.json())
//                 .then((childData) => {
//                   allMediaItems.push(childData);
//                   setMediaItems(allMediaItems);
//                 })
//                 .catch((error) => console.log("Error fetching child media item:", error));
//             });
//           } else {
//             allMediaItems.push(item);
//             setMediaItems(allMediaItems);
//           }

//         });
//       })
//       .catch((error) => console.log("Error fetching Instagram data:", error));
//   }, []);


//   if (!allMediaItems) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="section">
//         <Grid container spacing={3}>
//             {allMediaItems.map((item) => (
//                 <Grid item xs={4} key={item.id}>
//                         <img src={item.media_url} alt={item.caption} height={400}/>
//                 </Grid>
//             ))}
//         </Grid>
//     </div>
//   );
// }
