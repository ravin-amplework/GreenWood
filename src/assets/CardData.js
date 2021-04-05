
import cat  from "../assets/cat.jpeg";
import eventImage from "../assets/eventImage.jpeg";
import eventImage2 from "../assets/eventImage2.jpeg";
import gym from "../assets/gym.jpeg";
import gym2 from "../assets/gym2.jpeg";
import gym3 from "../assets/gym2.jpeg";


 const CardData = {
  Events: [
     {  
      id: 1, 
      title: "LOVE + PROPAGANDA SATURDAY'S (seriesgrp)",
      image:  eventImage,
      content: "Davies Symphony Hall, San Francisco, CA",
      footer: "Starts at $809.10"
      },
      { 
       id:2,
      title: "LOVE + PROPAGANDA SATURDAY'S (seriesgrp)",
      image: eventImage2,
      content: "Davies Symphony Hall, San Francisco, CA",
      footer: "Starts at $809.10"
      },
     
     ],
 NearByStore :[
        {
        id:1,
        title: "Gold’s gym",
        image: gym,
        },
        {  
        id:2,
            title: "Gold’s gym",
            image: gym2,
        },
       
     ],
 LocalDeals :[
            {
            id:1,
            title: "15% OFF on Cardio & Yoga",
            image: gym3,
           },
            {  
            id:2,
                title: "15% OFF on Cardio & Yoga",
                image: gym3,
            },
           
            ],
  LatestProduct :[
         {
          id:1,
          title: "Roger Solid Wood One Seater Sofa…",
          image: gym,
        },
        {  
        id:2,
          title: "Roger Solid Wood One Seater Sofa…",
          image: gym2,
        },
       
        ],

};

export default CardData;