import React, { useState, useEffect } from 'react'
import { Banner } from '../types/Banner';

import styles from '../styles/EditBannerTemplateBs.module.css'

import { imageData } from '@/utils/data';

interface BannerImageCompProps {
  banner: Banner;
  onClose: () => void;
  setData: React.Dispatch<React.SetStateAction<Banner[]>>;
}

const EditBannerTemplateBs: React.FC<BannerImageCompProps> = ({ banner, onClose, setData }) => {
  const titleClass = `${styles[`${banner.classname}Title`]}`;
  const descriptionClass = `${styles[`${banner.classname}Description`]}`;
  const buttonClass = `${styles[`${banner.classname}Button`]}`;
  const imageClass = `${styles[`${banner.classname}Image`]}`;

  const [updatedTitle, setUpdatedTitle] = useState(banner.title);
  const [updatedDescription, setUpdatedDescription] = useState(banner.description);
  const [updatedImage, setUpdatedImage] = useState(banner.image);

  const handleImageSelection = (selectedImage: string) => {
    setUpdatedImage(selectedImage);
  };

  useEffect(() => {
   
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[banner.id - 1] = {
        ...updatedData[banner.id - 1],
        title: updatedTitle,
        description: updatedDescription,
        image: updatedImage,
      };
      console.log(updatedData);
      return updatedData;
    });

  }, [updatedTitle, updatedDescription, updatedImage]);

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.overlayBanner}>
        <div className={styles.content}>
          <div className={styles.editBanner}>
            <p>Edit Banner</p>
            <p onClick={onClose}>X</p>
          </div>
          <div className={styles.banner}>
            <div className={styles.bannerEditContainer} style={{ backgroundImage: `url(${banner.background})` }}>
              <img className={imageClass} src={updatedImage} alt={banner.title} />
              <div className={styles.bannerEditContainerContents}>
                <p className={titleClass}>{updatedTitle}</p>
                <p className={descriptionClass}>{updatedDescription}</p>
                <button className={buttonClass}>{banner.cta}</button>
              </div>
            </div>
          </div>
          <div className={styles.images}>
            <p>Images</p>
            <div className={styles.imageContainer}>
              {imageData.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} onClick={() => handleImageSelection(image)} />
              ))}
            </div>
          </div>
          <div className={styles.title}>
            <p>Title</p>
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
          </div>
          <div className={styles.description}>
            <p>Description</p>
            <input
              type="text"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            />
          </div>
          <div className={styles.buttonDone} >
            <button onClick={onClose}>Done</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default EditBannerTemplateBs;
