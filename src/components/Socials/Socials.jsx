import Button from "../Button"
import "./Socials.scss"
import classNames from "classnames"

const Socials = (props) => {
  const { className, socialLinks } = props

  return (
    <div className={classNames(className, "soc1als")}>
      <ul className="soc1als__list">
        {socialLinks.map(({ label, iconName, href }, index) => {
          return (
            <li className="soc1als__item" key={index}>
              <Button
                className="soc1als__link"
                mode="black-10"
                href={href}
                target="_blank"
                label={label}
                isLabelHidden
                iconName={iconName}
                hasFillIcon
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Socials
