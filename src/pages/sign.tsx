/* eslint-disable prettier/prettier */
import { useState } from "react";

import DefaultLayout from "@/layouts/default";
import ChangeRole from "@/components/signIn/changeRole";
import { InputsData } from "@/components/signIn/inputsData";
import { title } from "@/components/primitives";


export default function SignPage() {
  const [roleComponent, setRoleComponent] = useState("none");

  const handleRoleState = (isRole: string) => {
    setRoleComponent(isRole);
  };

  return (
    <DefaultLayout>
      <div style={{ display: "flex", flexDirection: "column" }}>

        <div className="inline-block max-w-lg text-center justify-center ms-auto me-auto mb-5">
          <h1 className={title()}>Выберите&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>роль&nbsp;</h1>
        </div>

        <ChangeRole setRoleComponents={handleRoleState} />
        {roleComponent == "isStudent" ? <InputsData /> : null}
        {roleComponent == "isTeacher" ? <InputsData isTeacher /> : null}
        {/* {roleComponent == "isAdmin" ? <InputsData isTeacher /> : null} */}
      </div>
    </DefaultLayout>
  );
}
