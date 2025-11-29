import './Devices.scss'

import Section from "@/layouts/Section/index.js";

import DevicesCard from "@/sections/DevicesCard/index.js";
import Grid from "@/components/Grid/Grid.jsx";

const Devices = () => {

    const devices = [
        {
            title: "Smartphones",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            srcIcon: '/devices/smartphones.svg',
        },
        {
            title: "Tablet",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            srcIcon: '/devices/tablet.svg',
        },
        {
            title: "Smart TV",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            srcIcon: '/devices/smartTV.svg',
        }
        ,
        {
            title: "Laptops",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            srcIcon: '/devices/laptops.svg',
        }
        ,
        {
            title: "Gaming Consoles",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            srcIcon: '/devices/gaming-consoles.svg',
        },
        {
            title: "VR Headsets",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            srcIcon: '/devices/VRHeadsets.svg',
        }
    ]

    return (
        <Section
            title="We Provide you streaming experience across various devices."
            titleId="devices-title"
            description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.">


            <Grid columns="3">
                {devices.map(({title, srcIcon, description}, index) => (
                    <DevicesCard title={title} description={description} srcIcon={srcIcon} key={index}/>
                ))}
            </Grid>

        </Section>
    )
}
export default Devices;