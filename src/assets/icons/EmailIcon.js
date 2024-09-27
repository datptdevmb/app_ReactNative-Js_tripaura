import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EmailIcon(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.25 6.25H22.5A3.75 3.75 0 0126.25 10v11.25A3.75 3.75 0 0122.5 25H6.25a3.75 3.75 0 01-3.75-3.75V10a3.75 3.75 0 013.75-3.75zm0 1.25c-.625 0-1.175.213-1.6.588l9.725 6.287L24.1 8.088a2.378 2.378 0 00-1.6-.588H6.25zm8.125 8.387L3.912 9.1c-.1.275-.162.588-.162.9v11.25a2.5 2.5 0 002.5 2.5H22.5a2.5 2.5 0 002.5-2.5V10c0-.313-.063-.625-.163-.9l-10.462 6.787z"
        fill="#fff"
      />
    </Svg>
  )
}

export default EmailIcon
