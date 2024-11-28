import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IcProfile({props,color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 118 0 4 4 0 01-8 0zm0 6a5 5 0 00-5 5 3 3 0 003 3h12a3 3 0 003-3 5 5 0 00-5-5H5z"
        fill={color}
      />
    </Svg>
  )
}

export default IcProfile
