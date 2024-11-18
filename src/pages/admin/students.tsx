/* eslint-disable prettier/prettier */
import { useState } from "react";

import DefaultLayout from "@/layouts/default";
import { Sidebar } from "@/components/admin/sidebar/sidebar";
import {StudentTable} from "@/components/studentTable";

export default function AdminStudentsPage() {




  return (
    <DefaultLayout noneContainer={false}>
      <div className="flex flex-row">
        <Sidebar />
        {/* <StudentTable /> */}
        </div>
    </DefaultLayout>
  );
}
