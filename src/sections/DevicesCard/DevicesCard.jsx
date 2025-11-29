import './DevicesCard.scss';

const DevicesCard = (props) => {
    const {title, srcIcon, description} = props
    return <div className="devices-card">
        <div className="devices-card__header">
            <div className="devices-card__image-wrapper">
                <img src={srcIcon} className="devices-card__image" width={72} height={72} alt="" />
            </div>
            <h3 className="devices-card__title h4">{title}</h3>
        </div>
        <p className="devices-card__description">{description}</p>
    </div>;
};

export default DevicesCard;