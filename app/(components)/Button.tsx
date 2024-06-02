"use client";
import Link from "next/link";

type Props = {
  className?: string;
  clickFunc?: (e: any) => void;
  href?: string;
  children?: React.ReactNode;
};

export default function Button({
  className,
  clickFunc,
  href,
  children,
}: Props) {
  if (href) {
    return (
      <Link href={href}>
        <button
          onClick={clickFunc}
          className={`px-4 py-2 border rounded-lg ${className}`}
        >
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        onClick={clickFunc}
        className={`px-2 py-1 border rounded-lg ${className}`}
      >
        {children}
      </button>
    );
  }
}
