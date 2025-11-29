import Hero from "@/sections/Hero"
import Category from "@/sections/Category/Category.jsx";
import Devices from "@/sections/Devices/index.js";

export const metadata = {
  title: "Home",
    isHeaderFixed : true,
}

export default function () {
  return (
    <>
      <Hero />
        <Category />
        <Devices />
    </>
  )
}
