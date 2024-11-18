/* eslint-disable prettier/prettier */
import { Button } from "@nextui-org/button";
import { PiStudent } from "react-icons/pi";
import { FaCashRegister } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { BsJournals } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { MdHotelClass } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

import { AdminAvatar } from "./admin";

export const Sidebar: React.FC = () => {
  const buttons = [
    { label: "Кабинет", icon: <CiUser style={{ fontSize: "20px" }} /> },
    { label: "Клиенты", icon: <PiStudent style={{ fontSize: "20px" }} /> },
    { label: "Занятия", icon: <MdHotelClass style={{ fontSize: "20px" }} /> },
    { label: "Группы", icon: <MdGroup style={{ fontSize: "20px" }} /> },
    { label: "E Журнал", icon: <BsJournals style={{ fontSize: "20px" }} /> },
    { label: "Рассылки", icon: <CiMail style={{ fontSize: "20px" }} /> },
    { label: "Финансы", icon: <FaCashRegister style={{ fontSize: "20px" }} /> },
    { label: "Настройки", icon: <CiSettings style={{ fontSize: "20px" }} /> },
  ];

  return (
    <div
      className="flex flex-col justify-content-center"
      style={{
        height: "100vh",
        width: "20vh",
        borderRight: "1px solid white",
        padding: "20px",
      }}
    >
      <AdminAvatar login="SummerDeath" src="" />
      <br />
      {buttons.map((button, index) => (
      <div
      key={index}
      className="flex flex-col">

        <Button
          startContent={button.icon}
          variant="bordered"
        >
          {button.label}
        </Button>

        <br />
        </div>
      ))}
    </div>
  );
};