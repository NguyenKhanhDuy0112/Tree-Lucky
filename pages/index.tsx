import styles from '../styles/Home.module.scss';
import DefaultLayout from '../containers/DefaultLayout';
import { ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import treeImage from "../assets/images/tree.png";
import luckyEnvelop from "../assets/images/lucky-envelop.png";
import mai from "../assets/images/mai.png";
import dao from "../assets/images/dao.png";
import Popup from '../components/Popup';

const Home = () => {
  const [active, setActive] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [numberEnvelop, setNumberEnvelop] = useState(0)

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActive(!active)
        setShowPopup(!showPopup)
      }, 1700)
    }
  }, [active])

  const handleActive = () => {
    const numberEnvelop = Math.floor(Math.random() * 14) + 1;
    setNumberEnvelop(numberEnvelop)
    setActive(!active)
  }

  return (
    <div className={`${styles['home']}`}>
      <div className='container'>

        <div className={`${styles['home__image']} ${active ? `${styles['active']}` : ''}`}>
          <Image
            src={treeImage}
            alt=''
            layout='fixed'
            onClick={handleActive}
          />

          {
            Array.from({ length: 13 }).map((item, index) => {
              return (
                <div key={index} className={`${styles['home__image-envelop']} ${styles[`home__image-envelop-${index + 1}`]} ${index + 1 === numberEnvelop ? styles['active'] : ''}`}>
                  <Image
                    src={luckyEnvelop}
                    alt=''
                    width={25}
                    height={40}
                    layout='fixed'
                  />
                </div>
              )
            })
          }
        </div>
      </div>
      <div style={{ backgroundImage: `url(${mai.src})` }} className={`${styles['home__image-mai']}`}></div>
      <div style={{ backgroundImage: `url(${dao.src})` }} className={`${styles['home__image-dao']}`}></div>
      <Popup show={showPopup} onClose={() => setShowPopup(!showPopup)} />
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export default Home
