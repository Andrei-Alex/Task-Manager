import { styles, ILinkList } from ".";
import Link from "next/link";
import React from "react";
/**
 * The LinkList component is a reusable React functional component that generates a list of links
 * based on an array of link elements provided as props. Each link element in the array consists of an id,
 * a name (representing the link label), and a navigateTo property specifying the URL or destination the link
 * should navigate to when clicked.
 *
 * This component efficiently renders the list of links using the React.memo higher-order component to optimize
 * rendering performance. It compares the previous and next props using a custom PropsAreEqual function, re-rendering
 * the component only when the listElements prop changes.
 *
 * ## Usage
 * ```jsx
 * <LinkList listElements={mainNavList} />
 * ```
 *
 * @component LinkList
 * @param {Object} props - Component props
 * @param {Array<Object>} props.listElements - Array of link elements
 * @returns {JSX.Element} - JSX element representing the link list
 */
export const LinkList: React.FC<ILinkList> = ({ listElements }) => {
  return (
    <ul className={styles.list}>
      {listElements.map((navElement: any) => (
        <li key={navElement.id}>
          <Link className={styles.link} href={navElement.navigateTo}>{navElement.name}</Link>
        </li>
      ))}
    </ul>
  );
};
function PropsAreEqual(prevProps: ILinkList, nextProps: ILinkList) {
  return JSON.stringify(prevProps.listElements) === JSON.stringify(nextProps.listElements)
}
export default React.memo(LinkList, PropsAreEqual);
