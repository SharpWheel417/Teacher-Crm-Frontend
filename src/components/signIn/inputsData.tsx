/* eslint-disable prettier/prettier */
import { Input } from "@nextui-org/input";
// eslint-disable-next-line prettier/prettier
import { Button } from "@nextui-org/button";

interface DataProps {
  isTeacher?: boolean,
}

export const InputsData: React.FC<DataProps> = ({isTeacher}) => {
  return (
    <div className="flex flex-row items-center justify-center py-3 w-full">
      <div className="flex flex-col" style={{ width: "30%", marginBottom: 'auto' }}>
        <h1 className="text-violet-400" style={{ fontSize: "30px" }}>Вход в аккаунт</h1>
        <br />
        <h5>Логин</h5>
        <Input className="" />
        <br />
        <h5>Пароль</h5>
        <Input className="" type="password" />
        <br />
        <Button className="bg-violet-600">Войти</Button>
      </div>

      <div className="" style={{ width: "30%", marginTop: '20px', marginBottom: 'auto' }}>
        <h1 style={{ textAlign: "center" }}>ИЛИ</h1>
      </div>

      <div className="flex flex-col" style={{ width: "30%" }}>
        <h1 className="text-violet-400" style={{ fontSize: "30px" }}>Регистрация аккаунта</h1>
        <br />
        <h5>Логин</h5>
        <Input className="" />
        <br />
        {isTeacher ?
        <div>
        <h5>Фамилия</h5>
        <Input className="" />
        <br />
        </div>
          : null
      }
        <h5>Почта</h5>
        <Input className="" />
        <br />
        <h5>Пароль</h5>
        <Input className="" type="password" />
        <br />
        <h5>Повторить пароль</h5>
        <Input className="" type="password" />
        <br />
        <Button
        className="bg-violet-600"
        onClick={() => { window.location.href = "/admin"}}>Регистарция</Button>
      </div>
    </div>
  );
};
