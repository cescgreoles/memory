import classnames from "classnames";
import "../scss/Card.scss";
import backSideCard from "../assets/dorso.jpeg";

type CardProps = {
  image: string;
  onClick: (id: number) => void;
  id: number;
  isInactive: boolean;
  isFlipped: boolean;
  isDisabled: boolean;
};

function Card(props: CardProps) {
  const handleClick = () => {
    !props.isFlipped && !props.isDisabled && props.onClick(props.id);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": props.isFlipped,
        "is-inactive": props.isInactive,
      })}
      onClick={handleClick}
    >
      <div className="card-face">
        <img src={backSideCard} alt="card backside" />
      </div>
      <div className="card-face card-back-face">
        <img src={props.image} alt="card" />
      </div>
    </div>
  );
}

export default Card;
