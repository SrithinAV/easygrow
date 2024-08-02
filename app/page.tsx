"use client"

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import BannerImageComp from "@/components/BannerImageComp";
import { bannerData } from "@/utils/data";
import { Banner } from "@/types/Banner";
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs";






export default function Home() {

  const [data, setData] = useState(bannerData);
  const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null)

  console.log(selectedBanner);



  return (
    <>
      <div className={styles.banner}>

        <div className={styles.gridContainer}>
          {data.map((banner, index) => (
            <div key={index} className={styles.gridItem}>

              <BannerImageComp clsName={banner.classname} key={banner.id} banner={banner} onEdit={() => setSelectedBanner(banner)} />
            </div>


          ))}
        </div>


      </div>
      {selectedBanner && (
        <EditBannerTemplateBs
          setData={setData}
          banner={selectedBanner}
          onClose={() => setSelectedBanner(null)}
        />
      )}
    </>
  );
}
