/* eslint-disable prettier/prettier */
import { Image } from "@nextui-org/react";

export const AdminAvatar: React.FC<{ src: string; login: string }> = ({
  src,
  login,
}) => {
  const exampleAvatar = "https://i.pravatar.cc/300";

  return (
    <div className="flex flex-col">
      <Image
        isBlurred
        alt={src === "" ? "Fallback Avatar" : ""}
        src={src === "" ? exampleAvatar : src}
        style={{ borderRadius: "50%" }}
      />
      <br />
      <p className="text-center">{login}</p>
    </div>
  );
};
