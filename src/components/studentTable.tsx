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
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
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
    attendance: string; // Новое поле
    grades: string; // Новое поле
  }[];
}> = ({ users }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = React.useState<typeof users[0] | null>(null);



  const columns = [
    { name: "ФИО", uid: "name" },
    { name: "Предмет", uid: "role" },
    // { name: "STATUS", uid: "status" },
    { name: "Успеваемость", uid: "attendance" }, // Новая колонка
    { name: "Посление оценки", uid: "grades" },         // Новая колонка
    { name: "Действия", uid: "actions" },
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
        attendance: string;
        grades: string;
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
              name={cellValue?.toString()}
            >
              {user.email}
            </User>
          );
        case "role":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{user.team}</p>
              {/* <p className="text-bold text-sm capitalize text-default-400">
                {user.team}
              </p> */}
            </div>
          );
        case "status":
          return (
            <p className="text-bold text-sm capitalize">{cellValue?.toString()}</p>
            // <Chip
            //   className="capitalize"
            //   color={statusColorMap[user.status as keyof typeof statusColorMap]}
            //   size="sm"
            //   variant="flat"
            // >
            //   {cellValue?.toString()}
            // </Chip>
          );
        case "attendance":
          return <span>{user.attendance}%</span>;
        case "grades":
          return (
            <div className="flex flex-col gap-1">
              <div className="text-sm text-default-500">
                <span className="font-semibold">{user.grades}</span>
              </div>
            </div>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span
                  className="text-lg text-default-400 cursor-pointer active:opacity-50"
                  onClick={() => {
                    setSelectedUser(user);
                    onOpen();
                  }}
                >
                  <EyeIcon />
                </span>
              </Tooltip>

              {/* <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <DownloadIcon />
                </span>
              </Tooltip> */}

              {/* <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon />
                </span>
              </Tooltip> */}
            </div>
          );
        default:
          return cellValue;
      }
    },
    [],
  );

  return (
    <>
    <Table  aria-label="Student table with grades and attendance">
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
    <Modal isOpen={isOpen} onClose={onClose} size="md">
  <ModalContent>
    <ModalHeader className="flex flex-col gap-1">
      Информация об ученике
    </ModalHeader>
    <ModalBody>
      {selectedUser && (
        <div className="space-y-2">
          <p><strong>Имя:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Команда:</strong> {selectedUser.team}</p>
          <p><strong>Возраст:</strong> {selectedUser.age}</p>
          <p><strong>Статус:</strong> {selectedUser.status}</p>
          <p><strong>Роль:</strong> {selectedUser.role}</p>
        </div>
      )}
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={onClose}>
        Закрыть
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>


    </>
  );
};
