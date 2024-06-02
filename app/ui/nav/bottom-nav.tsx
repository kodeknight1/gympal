import { HomeIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function BottomNav() {
  return (
    <div className="btm-nav">
      <button>
        <Link href="/">
          <HomeIcon className="size-6 text-blue-500" />
        </Link>
      </button>

      <div>
        <details className="w-full flex dropdown dropdown-top">
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href="/exercises">Exercises</Link>
            </li>
            <li>
              <Link href="/workouts">Workouts</Link>
            </li>
            <li>
              <Link href="/plans">Plans</Link>
            </li>
          </ul>
          <summary className="btn border-0 bg-transparent">
            <EllipsisVerticalIcon className="size-6" />
          </summary>
        </details>
      </div>
    </div>
  );
}
