import Link from "next/link";
interface Props {
  className: string;
}
/**
 * サイドメニュー
 * @returns
 */
export default function SideMenu({ className }: Props): JSX.Element {
  return (
    <div className={className}>
      <h1>サイドメニュー</h1>
      <Link href={"/home"}>ホーム</Link>
    </div>
  );
}
