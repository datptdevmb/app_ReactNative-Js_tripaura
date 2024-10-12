import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IcBelow(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={12}
            viewBox="0 0 24 12"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.289 10.157L5.632 4.5l1.414-1.414 4.95 4.95 4.95-4.95L18.36 4.5l-5.657 5.657a1 1 0 01-1.414 0z"
                fill="#6D6B6B"
            />
        </Svg>
    )
}

export default IcBelow
