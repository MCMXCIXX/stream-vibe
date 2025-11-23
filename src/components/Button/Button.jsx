import classNames from "classnames"
import "./Button.scss"
import Icon from "../Icon/Icon"

const Button = (props) => {
    const {
        className,
        href,
        type = "button",
        target,
        // '' (default)
        // transparent
        // black-10
        mode = "",
        label,
        isLabelHidden = false,
        iconName,
        // before or after
        iconPosition = "before",
        hasFillIcon,
        extraAttrs,
    } = props

    const isLink = href !== undefined
    const Component = isLink ? "a" : "button"
    const linkProps = {href, target}
    const buttonProps = {type}
    const specificProps = isLink ? linkProps : buttonProps
    const title = isLabelHidden ? label : undefined
    const iconComponent = iconName && (
        <Icon className="button__icon" name={iconName} hasFill={hasFillIcon}/>
    )
    return (
        <Component
            className={classNames(className, "button", {[`button--${mode}`]: mode})}
            title={title}
            aria-label={title}
            {...specificProps}
            {...extraAttrs}
        >
            {iconPosition === "before" && iconComponent}
            {!isLabelHidden && <span className="button__label">{label}</span>}
            {iconPosition === "after" && iconComponent}
        </Component>
    )
}

export default Button
