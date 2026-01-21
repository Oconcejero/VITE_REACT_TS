import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;

  const width = {
    width: "350px",
  };

  return (
    <div className="card" style={width}>
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  tittle: string;
  text?: string;
}

export function CardBody(props: CardBodyProps) {
  const { tittle, text } = props;
  return (
    <>
      <h5 className="card-title">{tittle}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
