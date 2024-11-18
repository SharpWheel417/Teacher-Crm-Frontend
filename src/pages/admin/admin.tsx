/* eslint-disable prettier/prettier */
import { useState } from "react";

import DefaultLayout from "@/layouts/default";
import { Sidebar } from "@/components/admin/sidebar/sidebar";
import { NewsCard } from "@/components/newsCard";
import { UserList} from "@/components/userList";
import { StudentTable } from "@/components/studentTable";

export default function AdminPage() {
  const [roleComponent, setRoleComponent] = useState("none");

  const handleRoleState = (isRole: string) => {
    setRoleComponent(isRole);
  };


  const news = [
    {title: "xd", text: "xd", textTwo: "xd", srcImage: "https://random.imagecdn.app/270/170"},
    {title: "xd", text: "xd", textTwo: "xd", srcImage: "https://random-image-pepebigotes.vercel.app/api/random-image"},
    {title: "xd", text: "xd", textTwo: "xd", srcImage: "https://random.imagecdn.app/270/170"}
  ]


  const usersQuestions = [{
    srcImg: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    name: "Коля Герасимов",
    text: "Добрый день! Возникли вопросы по оплате..."
  }, {
    srcImg: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    name: "Алиса Селезнева",
    text: "Извините за беспокойство, хотел бы уточнить..."
  },

  { srcImg: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    name: "Юля Грибкова",
    text: "Пожалуйста, можете отправить мне контакты..."
  }]


  const users = [
    {
      id: "1",
      name: "Иван Иванов",
      role: "Ученик",
      team: "Английский",
      status: "Активен",
      age: "16",
      avatar: "https://i.pravatar.cc/150?43",
      email: "ivan.ivanov@example.com",
      actions: "Просмотр"
    },
    {
      id: "2",
      name: "Мария Петрова",
      role: "Ученик",
      team: "Математика",
      status: "Неактивен",
      age: "17",
      avatar: "https://i.pravatar.cc/150?42",
      email: "maria.petrova@example.com",
      actions: "Редактировать"
    },
    {
      id: "3",
      name: "Сергей Смирнов",
      role: "Ученик",
      team: "Русский язык",
      status: "Активен",
      age: "15",
      avatar: "https://i.pravatar.cc/150?41",
      email: "sergey.smirnov@example.com",
      actions: "Удалить"
    },
    {
      id: "4",
      name: "Екатерина Кузнецова",
      role: "Ученик",
      team: "Английский",
      status: "Активен",
      age: "16",
      avatar: "https://i.pravatar.cc/150?44",
      email: "ekaterina.kuznetsova@example.com",
      actions: "Просмотр"
    },
    {
      id: "5",
      name: "Алексей Соколов",
      role: "Ученик",
      team: "Математика",
      status: "Неактивен",
      age: "17",
      avatar: "https://i.pravatar.cc/150?45",
      email: "alexey.sokolov@example.com",
      actions: "Редактировать"
    },
    {
      id: "6",
      name: "Наталья Морозова",
      role: "Ученик",
      team: "Русский язык",
      status: "Активен",
      age: "15",
      avatar: "https://i.pravatar.cc/150?46",
      email: "natalya.morozova@example.com",
      actions: "Удалить"
    },
    {
      id: "7",
      name: "Дмитрий Киселев",
      role: "Ученик",
      team: "Английский",
      status: "Активен",
      age: "16",
      avatar: "https://i.pravatar.cc/150?47",
      email: "dmitry.kiselev@example.com",
      actions: "Просмотр"
    },
    {
      id: "8",
      name: "Ольга Орлова",
      role: "Ученик",
      team: "Математика",
      status: "Неактивен",
      age: "17",
      avatar: "https://i.pravatar.cc/150?48",
      email: "olga.orlova@example.com",
      actions: "Редактировать"
    },
    {
      id: "9",
      name: "Максим Захаров",
      role: "Ученик",
      team: "Русский язык",
      status: "Активен",
      age: "15",
      avatar: "https://i.pravatar.cc/150?49",
      email: "maksim.zakharov@example.com",
      actions: "Удалить"
    },
    {
      id: "10",
      name: "Анна Павлова",
      role: "Ученик",
      team: "Английский",
      status: "Активен",
      age: "16",
      avatar: "https://i.pravatar.cc/150?50",
      email: "anna.pavlova@example.com",
      actions: "Просмотр"
    }
  ];



  return (
    <DefaultLayout noneContainer={false}>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col" style={{width: '60%'}}>
        <div className="flex felx-row px-4">
          {news.map((item, index) => (

          <NewsCard
          key={index}
          srcImage={item.srcImage}
          style={{width: '270px', height:'270px', margin: '20px'}}
          text={item.text}
          textTwo={item.textTwo}
          title={item.title}
          />

        ))}

        </div>
        <div className="flex felx-row px-4">
        <UserList style={{marginLeft: '20px'}} users={usersQuestions} />
        </div>
        </div>
        <StudentTable users={users}/>

      </div>
    </DefaultLayout>
  );
}
