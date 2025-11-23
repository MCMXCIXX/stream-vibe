import './Category.scss'
import Section from "@/layouts/Section/Section.jsx";
import CategoryCard from "@/components/CategoryCard/CategoryCard.jsx";
import Slider from "@/components/Slider/Slider.jsx";
import SliderNavigation from "@/components/Slider/Components/SliderNavigation/SliderNavigation.jsx";
import categoryItems from "@/sections/Category/categoryItems.js";

const Category = () => {


    const sliderNavigationId = 'categories-slider-navigation';

    return (
        <Section
            title="Explore our wide variety of categories"
            titleId="category-title"
            description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
            className=""
            isActionsOnMobile
            actions={
                <SliderNavigation  mode="tile" id={sliderNavigationId} />
            }

            isActionsHiddenOnMobile

        >

            <Slider isBeyondTheVieportOnMobileS hasScrollbar navigationTargetElementId={sliderNavigationId}>
                {categoryItems.map((item, index) => (
                    <CategoryCard title={item.title} imagesData={item.imagesData} key={index}/>
                ))}
            </Slider>


        </Section>
    )
}

export default Category