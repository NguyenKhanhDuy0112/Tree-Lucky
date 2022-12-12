import styles from "./Popup.module.scss"
import borderText from "../../assets/images/border-text.png";
import latern1 from "../../assets/images/latern1.gif";
import Image from "next/image";
import cloudImage from "../../assets/images/cloud.png";
import voucherImage from "../../assets/images/voucher.png";
import { CloseCircleOutlined } from "@ant-design/icons";

interface PopupProps {
    show: boolean,
    onClose: () => void
}

function Popup(props: PopupProps) {
    const { show, onClose } = props

    return (
        show ?
            <div className={`${styles['popup']}`}>
                <div onClick={onClose} className={`${styles['overlay']}`}></div>
                <div className={`${styles['popup__latern']} ${styles['popup__latern-1']}`}>
                    <Image
                        src={latern1}
                        alt=''
                        sizes="(min-width: 768px) 49vw,
              (min-width: 1200px) 49vw,
              49vw"
                        layout='fixed'
                    />
                </div>
                <div className={`${styles['popup__latern']} ${styles['popup__latern-2']}`}>
                    <Image
                        src={latern1}
                        alt=''
                        sizes="(min-width: 768px) 49vw,
              (min-width: 1200px) 49vw,
              49vw"
                        layout='fixed'
                    />
                </div>
                <div className={`${styles['content']}`}>
                    <div style={{ backgroundImage: `url(${borderText.src})` }} className={`${styles['popup__text']}`}>
                        <span>Vạn<br /> Sự<br /> Như<br /> Ý</span>
                    </div>
                    <div className={`${styles['content__center']}`}>
                        <span> Chúc mừng bạn đã nhận được</span><br />
                        <div className="my-2">
                            <Image
                                src={voucherImage}
                                alt=''
                                layout='fixed'
                            />
                        </div>
                        <span className={`${styles['content__center-gift-text']}`}>Vourcher 100k</span>
                        <div style={{ backgroundImage: `url(${cloudImage.src})` }} className={`${styles['content__center-cloud']} ${styles['content__center-cloud-1']}`}></div>
                        <div style={{ backgroundImage: `url(${cloudImage.src})` }} className={`${styles['content__center-cloud']} ${styles['content__center-cloud-2']}`}></div>
                        <div onClick={onClose} className={`${styles['content__center-close']}`}>
                            <CloseCircleOutlined />
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${borderText.src})` }} className={`${styles['popup__text']}`}>
                        <span>An<br /> Khang<br /> Thịnh<br /> Vượng</span>
                    </div>
                </div >
            </div >
            :
            <></>
    );
}

export default Popup;