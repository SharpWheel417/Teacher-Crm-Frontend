/* eslint-disable prettier/prettier */
import { Accordion, AccordionItem, Avatar, Button } from "@nextui-org/react";

export const UserList: React.FC<{ users: { srcImg: string, name: string, text: string }[], style: any }> = ({
  users,
  style
}) => {
  return (
    <Accordion selectionMode="multiple" style={style}>
      {users.map((user, index) => (
        <AccordionItem
          key={index}
          aria-label={user.name}
          startContent={
            <Avatar
              isBordered
              isFocusable
              color="primary"
              radius="lg"
              src={user.srcImg}
            />
          }
          subtitle="4 unread messages"
          title={user.name}
        >
          <div className="flex flex-col">
          {user.text}
          <br />
          <br />
          <Button style={{width: '20%'}}>Ответить</Button>
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};