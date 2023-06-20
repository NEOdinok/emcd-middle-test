import React, { ReactNode } from "react";
import styles from './layout.module.scss';
import Header from "../Header/Header";

interface Props {
  children: ReactNode,
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main>{ children }</main>
		</div>
	);
}
 
export default Layout;