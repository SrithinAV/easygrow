// src/components/BannerImageComp.tsx

import React from 'react';
import styles from '../styles/BannerImageComp.module.css';
import { Banner } from '../types/Banner';
import { BiSolidPencil } from "react-icons/bi";

interface BannerImageCompProps {
  clsName: string;
  banner: Banner;

  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ clsName, banner, onEdit }) => {


  const titleClass = `${styles[`${clsName}Title`]}`;
  const descriptionClass = `${styles[`${clsName}Description`]}`;
  const buttonClass = `${styles[`${clsName}Button`]}`;
  const imageClass = `${styles[`${clsName}Image`]}`;



  return (

    <div className={styles.bannerImageContainer} style={{ backgroundImage: `url(${banner.background})` }}>

      <div className={imageClass}>
        <img src={banner.image} alt={banner.title} />
      </div>
      <div className={styles.bannerEdit} >
        <BiSolidPencil onClick={onEdit} className={styles.bannerEditPencil} />
      </div>
      <div className={styles.bannerContent}>
        <p className={titleClass}>{banner.title}</p>
        <p className={descriptionClass}>{banner.description}</p>
        <button className={buttonClass}>{banner.cta}</button>
      </div>

    </div>

  );
};

export default BannerImageComp;
