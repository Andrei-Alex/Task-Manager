import { styles, ILinkList } from ".";
import Link from "next/link";
import React from "react";

const LinkList: React.FC<ILinkList> = ({ listElements }) => {
  return (
    <ul>
      {listElements.map((navElement: any) => (
        <li key={navElement.id}>
          <Link href={navElement.navigateTo}>{navElement.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
