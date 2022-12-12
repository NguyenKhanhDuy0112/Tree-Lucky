import { Modal } from "antd";
import React from "react";

interface WinnerModalProps {
    show: boolean,
    onClose: () => void,
    winner: string
}

const WinnerModal = (props: WinnerModalProps) => {
    const { onClose, show, winner } = props

    const handleOk = () => {
        onClose()
    }

    const handleCancel = () => {
        onClose()
    }

    return (
        <Modal centered={true} title="Prize" onCancel={handleCancel} open={show} footer={null}>
            {winner}
        </Modal>
    );
};

export default WinnerModal;
