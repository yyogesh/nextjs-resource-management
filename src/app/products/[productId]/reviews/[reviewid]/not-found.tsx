"use client"
import { usePathname } from "next/navigation";

export default function Home() {
   const pathName = usePathname();
   const path = pathName.split("/").slice(1);
   console.log("pathName", pathName);
    return (
     <div>Review Not found</div>
    );
  }
  