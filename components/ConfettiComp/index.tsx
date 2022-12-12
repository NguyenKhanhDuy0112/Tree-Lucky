import Confetti from "react-confetti";

interface ConfettiProps {
    width: number,
    height: number,
}

const ConfettiComp = (props: ConfettiProps) => {
    const { width, height } = props
    return <Confetti width={width} height={height} />;
};

export default ConfettiComp;
