import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Header = () => {
  const iconStyle = "h-6 w-6 mx-auto";
  return (
    <nav className="flex flex-row justify-between  px-10 py-5">
      <p className="text-lg text-center self-center">مایلیتوس</p>
      <ol className="flex flex-row items-center  gap-5 list-none">
        <li>
          <Link href="">خانه</Link>
        </li>
        <li>
          <Link href="">دوره ها</Link>
        </li>
        <li>
          <Link href="">تخفیف ها</Link>
        </li>
        <li>
          <Link href="">ارتباط باما</Link>
        </li>
        <li>
          <Link href="">درباره ما</Link>
        </li>
      </ol>
      <Link
        href="/login"
        className="flex flex-row gap-2 right-0 px-3 py-2 text-sm font-medium text-center items-center text-white bg-fuchsia-700 rounded-lg hover:bg-fuchsia-800  dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700">
        <p>ورود</p>
        <UserIcon className={iconStyle} />
      </Link>
    </nav>
  );
};

export default Header;
