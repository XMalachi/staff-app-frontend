import React from 'react'
import styles from './Loader.module.css'
import { ScaleLoader} from "react-spinners";


function Loader() {
  return <div className={styles.scaleLoaderContainer}>
            <ScaleLoader
                color="#fff"
                cssOverride={{}}
                height={60}
                width={7}
                className={styles.scaleLoader}
            />
  </div>
}


export default Loader

