import React, {memo, useEffect, useState} from "react";
import { UserEntry } from "@/types";
import UserCard from "../UserCard/UserCard";

interface Props {
  fetchUsers: () => Promise<Array<UserEntry>>;
}

const CardsPage: React.FC<Props> = memo(({ fetchUsers }) => {
    const [users, setUsers] = useState<Array<UserEntry>>([]);

    // this one
    // console.log('users', users);

    useEffect(() => {
        fetchUsers().then(data => {
          setUsers(data);
        })
    }, []);

    return users.map((user) =>  {
      return (
          <UserCard
            key={user.email}
            email={user.email}
            name={`${user.name.title} ${user.name.first} ${user.name.last}`}
            imageURL={user.picture.large}
          />
      )
    })
})

export default CardsPage;
