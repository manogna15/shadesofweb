import React from 'react';
import './style.css';
import card1 from './images/card1.png';
import card2 from './images/card2.png';
import card3 from './images/card3.png';
import card4 from './images/card4.png';
import card5 from './images/card5.png';
import card6 from './images/card6.png';

const CommunityCard = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className="community">
      
      <img src={imgSrc} alt={imgAlt} className="community-image1"></img>
      <p>{description}</p>
      <h4>{title}</h4>
    </div>
  );
};

/*const CommunityCard2 = ({ imgSrc, title}) => {
  return (
    <div className="community2">
      <img src={imgSrc} className="community-image2"></img>
      <h3>{title}</h3>
    </div>
  );
};*/
const CommunityCard2 = ({ imgSrc, title}) => {
  return (
        <div className = "head-text">
                <div className = "community2">
                  <img src = {imgSrc} alt = "Freedom Blog" className="community-image2"/>
                </div>
                  <div class='text-on-image'>{title}</div>
          </div>
  );
};


const Communities = () => {
  return (
    <>
    <div className="h22">COMMUNITIES WE MANAGE</div>
    <div className="communities">
      <div className="communities-list">
        <CommunityCard
          imgSrc={card1}
          imgAlt="Card1 Image"
          title="Arabian Ranches"
          description="Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Mediterranean architecture."
        />
        <CommunityCard
          imgSrc={card2}
          imgAlt="Card2 Image"
          title="Arabian Ranches II"
          description="Arabian Ranches II offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Mediterranean architecture."

        />
        <CommunityCard
          imgSrc={card3}
          imgAlt="Card3 Image"
          title="Downtown Dubai"
          description="The Centre of Now. The most prestigious square kilometre in the world. Downtown Dubai is no stranger to such accolades, and yet it's hard to overstate the prominence of this community."
        />
        <CommunityCard
          imgSrc={card4}
          imgAlt="Card4 Image"
          title="Dubai Hills Estate"
          description="Sustainably designed, Dubai Hills Estate is a first of its
          kind destination. This masterfully-planned 2,700-acre
          multi-purpose development will form an integral part of the
          Mohammed Bin Rashid City."
        />
        <CommunityCard
          imgSrc={card5}
          imgAlt="Card5 Image"
          title="Dubai Marina"
          description="Dubai Marina is one of the world’s largest, most
          meticulously planned waterfront developments and offers the
          exhilaration and vibrancy of a chic, urban lifestyle
          together with all the advantages of living on the water."
        />
        <CommunityCard
          imgSrc={card6}
          imgAlt="Card6 Image"
          title="Emirates Living"
          description="Launched in 2003, Emirates Living is a modern lifestyle
          community focused on outdoor leisure. Emirates Living
          offers a serene nature-filled sanctuary, with 8,659
          premium villas nestled within 52.2 million square feet of
          lush greenery."
        />
    </div>
    </div>
    <div className="communities">
      <h1>OUR SERVICES</h1>
      <div className="communities-list">
        <CommunityCard2
          imgSrc={card4}
          title="DUBAU HILLS ESTATE"
        />
        <CommunityCard2
          imgSrc={card5}
          title="DUBAI MARINA"
        />
        <CommunityCard2
          imgSrc={card6}
          title="EMIRATES LIVING"
        />
      </div>
    </div>
    
    </>
  );
};

export default Communities;