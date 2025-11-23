import './SliderNavigation.scss';
import classNames from "classnames";
import Button from "@/components/Button/Button.jsx";

const SliderNavigation = (props) => {
    const {
        className,
        name,
        id,
        hasPagination = true,

        mode = '',
    } = props
    return (
        <div className={classNames(className, 'slider-navigation', {
            [`slider-navigation--${mode}`]: mode,
        })} id={id}
        data-js-slider-navigation=""
        >
            <Button classname='slider-navigation__arrow-button slider-navigation__arrow-button--previous'
                    iconName='arrow-left'
                    isLabelHidden
                    label='Previous slide'
                    mode='black-10'

                    extraAttrs={{
                        'data-js-slider-previous-button': '',
                    }}

            />

            {hasPagination && (
                <div className="slider-navigation__pagination" data-js-slider-pagination="" />
            )}

            <Button classname='slider-navigation__arrow-button slider-navigation__arrow-button--next'
                    iconName='arrow-right'
                    isLabelHidden
                    label='Next slide'
                    mode='black-10'
                    extraAttrs={{
                        'data-js-slider-next-button': '',
                    }}
            />
        </div>
    )

}


export default SliderNavigation