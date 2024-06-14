import styles from "./MenuButton.module.css";
interface Props {
  isOpen: boolean;
  onClick: VoidFunction;
}

/**
 * サイドメニュー
 * @returns
 */
export default function MenuButton({ isOpen, onClick }: Props): JSX.Element {
  return (
    <div className={styles.menu_button_container}>
      <button onClick={onClick} data-is_open={isOpen}>
        <span />
        <span />
        <span />
      </button>
    </div>
  );
}
