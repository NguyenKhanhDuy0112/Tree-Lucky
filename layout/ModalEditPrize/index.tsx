import { Button, Drawer, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import { Gift } from "../../models/gift.model";
import styles from "./ModalEditPrize.module.scss";
import giftService from "../../services/giftServices";
import { DeleteOutlined } from "@ant-design/icons";


interface ModalEditPrize {
  show: boolean,
  onClose: () => void
}

function ModalEditPrize(props: ModalEditPrize) {
  const { show, onClose } = props
  const [prizes, setPrizes] = useState<Gift[]>([])

  useEffect(() => {
    handleLoadGifts()
  }, [])

  const handleLoadGifts = () => {
    giftService.getGifts().then(res => setPrizes(res.data))
  }

  const handleCancel = () => {

  }

  const handleSubmit = (values: any) => {
    giftService.createGift({ name: values.gift }).then(res => {
      handleLoadGifts()
      message.success('Successfully')
    })
  }

  const handleDelete = (id: string) => {
    giftService.deleteGift(id).then(res => {
      handleLoadGifts()
      message.success('Successfully')
    })
  }

  return (
    <Drawer title="Edit Prizes" placement="right" onClose={onClose} open={show}>
      <Form onFinish={handleSubmit}>
        <div className="d-flex w-100">
          <Form.Item rules={[{ required: true, message: 'Please enter your prize' }]} style={{ flex: '1' }} name={'gift'}>
            <Input placeholder="Enter prize..." />
          </Form.Item>
          <Button htmlType="submit" className={`${styles['prize__button']} ms-1`}>
            Submit
          </Button>
        </div>
      </Form>
      {
        prizes.map((prize: Gift, index) => (
          <div key={index} className={`${styles['prize__item']} mb-2 d-flex justify-content-between align-items-center`}>
            <span>{prize.name}</span>

            <span onClick={() => handleDelete(prize._id)} className={`d-flex ${styles['prize__delete']}`}><DeleteOutlined /></span>
          </div>
        ))
      }
    </Drawer>
  );
}

export default ModalEditPrize;
