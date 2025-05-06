/* eslint-disable prettier/prettier */
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { GrUserAdmin } from "react-icons/gr";

const ChangeRole: React.FC<{ setRoleComponents: (role: string) => void }> = ({
  setRoleComponents,
}) => {
  const [heightCard, setHeightCard] = useState("h-96 w-96");
  const [fontIcon, setFontIcon] = useState("20vh");

  const [iconColor, setIconColor] = useState("rgb(124 58 237 / var(--tw-bg-opacity))");
  
  const [teachActive, setTeachActive] = useState("");
  const [studentActive, setStudentActive] = useState("");
  const [adminActive, setAdminActive] = useState("");
  
  
  const handleButtonClick = (isRole: string) => {
    setRoleComponents(isRole);
    
    // Меняем размер кнопки и иконки
    setHeightCard("h-20 w-20");
    setFontIcon('5vh')
    setIconColor("white");
    
    // Убираем окрас у кнопки
    setTeachActive("")
    setStudentActive("")
    setAdminActive("")

    // Окрашиваем кнопку цветом
    if (isRole == "isTeacher"){
      setTeachActive(" bg-violet-800")
    } else if (isRole == "isStudent"){
      setStudentActive(" bg-violet-800")
    }
    else{
      setAdminActive(" bg-violet-800")
    }
  };

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <Button
        isIconOnly
        className={ heightCard + teachActive}
        onClick={() => handleButtonClick("isTeacher")}
      >
        <div className="flex flex-col">

        <PiChalkboardTeacherLight style={{ fontSize: fontIcon, color: iconColor }} />
        <h2 style={{color: iconColor}}>Учитель</h2>
        </div>
      </Button>

      {/* <Button
        isIconOnly
        className={ heightCard + adminActive}
        onClick={() => handleButtonClick("isAdmin")}
      >
        <div className="flex flex-col">

        <GrUserAdmin style={{ fontSize: fontIcon }} />
        <h2>Админ</h2>
        </div>
      </Button> */}


      <Button
        isIconOnly
        className={ heightCard + studentActive}
        onClick={() => handleButtonClick("isStudent")}
      >
        <div className="flex flex-col">
        <PiStudent style={{ fontSize: fontIcon, color: iconColor }} />
        <h2 style={{color: iconColor}}>Ученик</h2>
        </div>
      </Button>
    </div>
  );
};

export default ChangeRole;
