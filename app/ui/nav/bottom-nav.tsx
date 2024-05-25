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

      <button>
        <EllipsisVerticalIcon className="size-6" />
      </button>
    </div>
  );
}
