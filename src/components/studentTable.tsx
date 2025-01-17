/* eslint-disable prettier/prettier */
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
} from "@nextui-org/react";

import { EditIcon } from "@/icons/EdinIcon";
import { DeleteIcon } from "@/icons/DeleteIcon";
import { EyeIcon } from "@/icons/EyeIcon";

const statusColorMap: { [key: string]: any } = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export const StudentTable: React.FC<{
  users: {
    id: string;
    name: string;
    role: string;
    team: string;
    status: string;
    age: string;
    avatar: string;
    email: string;
    actions: string;
  }[];
}> = ({ users }) => {
  const columns = [
    { name: "NAME", uid: "name" },
    { name: "ROLE", uid: "role" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];

  const renderCell = React.useCallback(
    (
      user: {
        id: string;
        name: string;
        role: string;
        team: string;
        status: string;
        age: string;
        avatar: string;
        email: string;
        actions: string;
      },
      columnKey: keyof typeof user,
    ) => {
      const cellValue = user[columnKey];

      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{ radius: "lg", src: user.avatar }}
              description={user.email}
              name={cellValue}
            >
              {user.email}
            </User>
          );
        case "role":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
              <p className="text-bold text-sm capitalize text-default-400">
                {user.team}
              </p>
            </div>
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[user.status as keyof typeof statusColorMap]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Tooltip>
              <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [],
  );

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                {renderCell(item, columnKey as keyof typeof item)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
