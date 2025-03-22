import React, { useEffect, useState } from 'react'

const DeviceType = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            const mobileDevices = /android|iphone|ipad|ipod|windows phone/i;
            const mobile = mobileDevices.test(userAgent);

            setIsMobile(mobile);
            localStorage.setItem("deviceType", mobile ? "mobile" : "pc");
        };

        checkDevice();
    }, []);

    return isMobile;
}

export default DeviceType