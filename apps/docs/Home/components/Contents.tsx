"use client";

import { useState } from "react";
import MenuButton from "../../common/components/button/MenuButton";

export default function HomeContents(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </>
  );
}
