import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IcCalendar(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <Path
                d="M12 3.167H4c-1.197 0-2.167.97-2.167 2.166V12c0 1.197.97 2.167 2.167 2.167h8c1.197 0 2.167-.97 2.167-2.167V5.333c0-1.196-.97-2.166-2.167-2.166z"
                stroke="#7D848D"
                strokeWidth={1.1}
            />
            <Path
                d="M4.5 1.833v2.334M2.5 6.167h11M11.833 1.833v2.334"
                stroke="#7D848D"
                strokeWidth={1.1}
                strokeLinecap="round"
            />
            <Path
                d="M5.5 9.333a.5.5 0 100-1 .5.5 0 000 1zM8.167 9.333a.5.5 0 100-1 .5.5 0 000 1zM10.833 9.333a.5.5 0 100-1 .5.5 0 000 1zM5.5 12a.5.5 0 100-1 .5.5 0 000 1zM8.167 12a.5.5 0 100-1 .5.5 0 000 1zM10.833 12a.5.5 0 100-1 .5.5 0 000 1z"
                fill="#7D848D"
            />
        </Svg>
    )
}

export default IcCalendar
