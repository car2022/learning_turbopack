"use client";
import Link from "next/link";
import MenuButton from "./button/MenuButton";
import { useState } from "react";
import SideMenu from "./SideMenu";
import styles from "./header.module.css";

/**
 * ヘッダー
 * @returns
 */
export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.header_container}>
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <Link href={"/home"} />
      {isOpen && (
        <div
          className={styles.side_menu_container}
          onClick={() => setIsOpen(!isOpen)}
        >
          <SideMenu className={styles.side_menu || ""} />
          <div className={styles.overlay}></div>
        </div>
      )}
    </div>
  );
}
