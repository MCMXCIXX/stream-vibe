import './CategoryCard.scss';
import {Image} from "minista";
import Icon from "@/components/Icon/Icon.jsx";

const CategoryCard = (props) => {

    const {
        className,
        title,
        imagesData,
    } = props


    const images = getRandomImagesPath(imagesData.nameFolder, imagesData.maxItems);


    return (

        <a href={'/' + title.toLowerCase()} className="category-card">
            <div className="category-card__images">
                {images.map((imageSrc, index) => {
                    return (

                        <Image className="category-card__image" src={imageSrc} key={index}/>
                    )
                })}
            </div>
            <span className="category-card__body">
                <h3 className="category-card__title">{title}</h3>
                <Icon name="arrow-right" className="category-card__icon"/>
            </span>

        </a>
    )

}

function getRandomImagesPath(nameFolder, maxItems) {
    let resultPath = [];
    let count = 0;
    let basePath = 'src/assets/images/categories';
    while (count < maxItems) {

        let randomIndex = Math.floor(Math.random() * maxItems) + 1;
        if (!resultPath.includes(`${basePath}/${nameFolder}/${randomIndex}.jpg`)) {
            resultPath.push(`${basePath}/${nameFolder}/${randomIndex}.jpg`);
            count++;
        }
    }

    return resultPath;
}

export default CategoryCard;