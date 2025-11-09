import classNames from "classnames"
import "./Icon.scss"
import { Icon as MinistaIcon } from "minista"

const Icon = (props) => {
  const { className, name, hasFill = false } = props

  return (
    <span className={classNames(className, "icon")}>
      <MinistaIcon
        fill={hasFill ? "currentColor" : "none"}
        stroke={hasFill ? "none" : "hasFill"}
        iconId={name}
      />
    </span>
  )
}

export default Icon
