import React, { useEffect } from "react";
import '../styles/SocialMedia.css';
import {LinkedInEmbed} from 'react-social-media-embed';
import Title from "../components/Title";
import Button from "../components/Button";

/**
 * @function SocialMedia
 * @desc Componente funcional que muestra una sección de redes sociales con publicaciones de LinkedIn.
 * @category Sections
 * @returns {JSX.Element}
 */
export default function SocialMedia() {
  let screenHeight=window.innerHeight;
let socialMediaHeight=0;
    if(screenHeight>768){
        socialMediaHeight=screenHeight/2;
    }else{
        socialMediaHeight=screenHeight/3;
    }

  return (
      <>
        <div className="containerTSocialMedia">
            <Title text={'Social media'}  estilo="SectionHistory"/>
        </div>
        <div className="rowSocialMedia">
            <LinkedInEmbed 
                url="https://www.linkedin.com/embed/feed/update/urn:li:share:7083079225162743808"
                postUrl="https://www.linkedin.com/posts/innovaspacearg_independenciaargentina-9dejulio-tecnologaedasatelital-activity-7083920252853510144-go4j?utm_source=share&utm_medium=member_desktop"
                width={"95%"}
                height={socialMediaHeight} 
                scrolling="no"
            />
            <LinkedInEmbed 
                url="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7079832252037181440"
                postUrl="https://www.linkedin.com/posts/innovaspacearg_aejrbitapolar-sataezlites-informaciaejn-activity-7079832318357495809-HgqN?utm_source=share&utm_medium=member_desktop"
                width={"95%"}
                height={socialMediaHeight}
                className={"EmbeddedSocialMedia"}
            />
            <LinkedInEmbed 
                url="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7064223599229829121"
                postUrl="https://www.linkedin.com/posts/innovaspacearg_agtech-y-la-tecnolog%C3%ADa-satelital-activity-7064223642011713537-Dx6G?utm_source=share&utm_medium=member_desktop"
                width={"95%"}
                height={socialMediaHeight} 
                scrolling="no"
            />
        </div>
        <div className="ButtonWrapperSocialMedia">
            <Button estilo="Welcome" text={'Show more'}/>  
        </div>
      </>

  );
}
