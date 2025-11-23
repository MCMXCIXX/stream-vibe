import Hero from "@/sections/Hero"
import Category from "@/sections/Category/Category.jsx";

export const metadata = {
  title: "Home",
    isHeaderFixed : true,
}

export default function () {
  return (
    <>
      <Hero />
        <Category />
    </>
  )
}
