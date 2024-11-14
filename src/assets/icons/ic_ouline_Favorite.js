import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Ic_ouFavorite({style,props}) {
  return (
    <Svg
      width={20}
      height={18}
      viewBox="0 0 20 18"
      fill="none"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.45 9.908l6.953 6.531c.24.225.36.338.5.366.064.012.13.012.193 0 .142-.028.261-.14.5-.366l6.953-6.53a5.203 5.203 0 00.549-6.983l-.31-.399C15.82-.009 11.87.416 10.487 3.314a.54.54 0 01-.974 0C8.13.416 4.18-.01 2.212 2.527l-.31.4a5.203 5.203 0 00.549 6.981H2.45z"
        stroke="white"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default Ic_ouFavorite
