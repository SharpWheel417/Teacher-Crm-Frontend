/* eslint-disable prettier/prettier */
import { useRouter } from "next/router";
import { Button } from "@nextui-org/button";
import { PiStudent } from "react-icons/pi";
import { FaCashRegister } from "react-icons/fa";
import { MdGroup, MdHotelClass } from "react-icons/md";
import { BsJournals } from "react-icons/bs";
import { CiMail, CiSettings, CiUser } from "react-icons/ci";

import { AdminAvatar } from "./admin";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  // const router = useRouter(); 

  const buttons = [
    { label: "Кабинет", icon: <CiUser style={{ fontSize: "20px" }} />, url: "/teacher" },
    { label: "Ученики", icon: <PiStudent style={{ fontSize: "20px" }} />, url: "/admin/students/add" },
    { label: "Занятия", icon: <MdHotelClass style={{ fontSize: "20px" }} />, url: "/admin/lessons" },
    { label: "Группы", icon: <MdGroup style={{ fontSize: "20px" }} />, url: "/admin/groups" },
    { label: "E Журнал", icon: <BsJournals style={{ fontSize: "20px" }} />, url: "/admin/journal" },
    { label: "Рассылки", icon: <CiMail style={{ fontSize: "20px" }} />, url: "/admin/mailing" },
    { label: "Финансы", icon: <FaCashRegister style={{ fontSize: "20px" }} />, url: "/admin/finance" },
    { label: "Настройки", icon: <CiSettings style={{ fontSize: "20px" }} />, url: "/admin/settings" },
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
        <div key={index} className="flex flex-col mt-5">
          <Button
            startContent={button.icon}
            variant="bordered"
            // variant={router.pathname === button.url ? "solid" : "bordered"}
            // onClick={() => router.push(button.url)}
          >
            {button.label}
          </Button>
          <br />
        </div>
      ))}
    </div>
  );
};
