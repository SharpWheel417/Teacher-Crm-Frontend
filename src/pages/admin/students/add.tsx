/* eslint-disable prettier/prettier */

import DefaultLayout from "@/layouts/default";
import { Sidebar } from "@/components/admin/sidebar/sidebar";
import { Form } from "react-router-dom";
import { InputsData } from "@/components/signIn/inputsData";

export default function AdminStudentsAdd() {

  return (
    <DefaultLayout noneContainer={false}>
      <div className="flex flex-row">
        {/* <p>teestst</p> */}
        <Sidebar />
        {/* <StudentTable /> */}
        <InputsData />
        </div>
    </DefaultLayout>
  );
}
