/* eslint-disable prettier/prettier */
import { useState } from "react";

import DefaultLayout from "@/layouts/default";
import ChangeRole from "@/components/signIn/changeRole";
import { InputsData } from "@/components/signIn/inputsData";


export default function SignPage() {
  const [roleComponent, setRoleComponent] = useState("none");

  const handleRoleState = (isRole: string) => {
    setRoleComponent(isRole);
  };

  return (
    <DefaultLayout>
      <ChangeRole setRoleComponents={handleRoleState} />
      {roleComponent == "isStudent" ? <InputsData /> : null}
      {roleComponent == "isTeacher" ? <InputsData isTeacher /> : null}
      {roleComponent == "isAdmin" ? <InputsData isTeacher /> : null}
    </DefaultLayout>
  );
}
