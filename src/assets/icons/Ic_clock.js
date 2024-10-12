import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IcClock(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <Path
        d="M9 16.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15zM9 15A6 6 0 109 3a6 6 0 000 12zm.75-6h3v1.5h-4.5V5.25h1.5V9z"
        fill="#0572E7"
      />
    </Svg>
  )
}

export default IcClock
