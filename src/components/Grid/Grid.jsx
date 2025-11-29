import './Grid.scss'
import classNames from "classnames";


const Grid = (props) => {
    const {
        className,
        children,
        columns
    } = props;
    return (
        <ul className={classNames('grid', {
            [`grid--${columns}`]: columns > 1
        })}>

            {children.map((child, index) => (
                <li key={index} className="grid__item">
                    {child}
                </li>
            ))

            }
        </ul>
    )
}

export default Grid