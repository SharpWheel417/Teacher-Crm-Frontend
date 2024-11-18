/* eslint-disable prettier/prettier */
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export const NewsCard: React.FC<{
  style: any;
  title: string;
  text: string;
  textTwo: string;
  srcImage: string;
}> = ({style, title, text, textTwo, srcImage }) => {
  return (
    <Card  className="py-4" style={style}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">{text}</small>
        <h4 className="font-bold text-large">{textTwo}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          isBlurred
          alt="Card background"
          className="object-cover rounded-xl"
          src={srcImage}
          width={270}
        />
      </CardBody>
    </Card>
  );
};
