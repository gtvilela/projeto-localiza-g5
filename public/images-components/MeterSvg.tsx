import * as React from "react"

function MeterSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={512}
      height={512}
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        d="M437.02 74.98C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.98C26.628 123.332 0 187.62 0 256s26.629 132.667 74.98 181.02C123.332 485.372 187.62 512 256 512s132.667-26.629 181.02-74.98C485.372 388.668 512 324.38 512 256s-26.629-132.667-74.98-181.02zM256 482.462C131.129 482.462 29.538 380.871 29.538 256S131.129 29.538 256 29.538 482.462 131.129 482.462 256 380.871 482.462 256 482.462z"
        fill="#a8a8b3"
        data-original="#000000"
        xmlns="http://www.w3.org/2000/svg"
      />
      <path
        d="M392.913 121.54c-.355-.45-.733-.889-1.148-1.305a14.765 14.765 0 00-1.305-1.148C355.796 85.038 308.312 64 256 64c-52.313 0-99.797 21.039-134.461 55.088-.45.355-.888.733-1.304 1.147-.416.415-.793.855-1.148 1.305C85.038 156.204 64 203.688 64 256c0 51.286 19.971 99.5 56.235 135.764v.001l.001.002c2.884 2.884 6.664 4.325 10.443 4.325s7.56-1.442 10.443-4.326l.031-.035 48.702-48.702c5.768-5.768 5.768-15.119 0-20.887-5.767-5.768-15.119-5.768-20.887 0l-37.819 37.819c-21.203-25.376-33.993-56.253-36.943-89.191h53.485c8.157 0 14.769-6.613 14.769-14.769s-6.613-14.769-14.769-14.769H94.217c3.054-33.723 16.45-64.504 36.993-89.134l37.762 37.762c2.884 2.884 6.664 4.326 10.443 4.326s7.56-1.443 10.443-4.326c5.768-5.767 5.768-15.119 0-20.887l-37.762-37.762c24.631-20.543 55.412-33.939 89.135-36.993v53.475c0 8.157 6.613 14.769 14.769 14.769s14.769-6.613 14.769-14.769V94.217c33.723 3.054 64.504 16.45 89.134 36.993l-37.762 37.762c-5.768 5.768-5.768 15.119 0 20.887 2.884 2.884 6.664 4.326 10.443 4.326s7.56-1.441 10.443-4.326l37.762-37.762c20.543 24.63 33.939 55.411 36.993 89.134h-53.474c-8.157 0-14.769 6.613-14.769 14.769s6.613 14.769 14.769 14.769h53.485c-2.949 32.938-15.739 63.816-36.945 89.192l-37.819-37.82c-5.767-5.767-15.119-5.768-20.887 0-5.768 5.767-5.768 15.119 0 20.887l48.735 48.736c.36.36.735.698 1.122 1.014 5.8 4.732 14.359 4.393 19.765-1.014C428.029 355.5 448 307.285 448 256c0-52.312-21.038-99.796-55.087-134.46z"
        fill="#a8a8b3"
        data-original="#000000"
        xmlns="http://www.w3.org/2000/svg"
      />
      <path
        d="M293.79 302.792l-23.35-108.964a14.769 14.769 0 00-28.881 0L218.21 302.791c-2.458 11.467.361 23.275 7.734 32.395 7.374 9.121 18.329 14.352 30.056 14.352 11.728 0 22.683-5.231 30.055-14.352s10.193-20.927 7.735-32.394zm-30.706 13.825C262.062 317.88 259.785 320 256 320s-6.063-2.119-7.084-3.383c-1.021-1.264-2.617-3.935-1.824-7.636L256 267.412l8.908 41.569c.793 3.701-.802 6.373-1.824 7.636zM256 359.385c-24.431 0-44.308 19.876-44.308 44.308C211.692 428.124 231.569 448 256 448s44.308-19.876 44.308-44.308c0-24.431-19.877-44.307-44.308-44.307zm0 59.077c-8.144 0-14.769-6.625-14.769-14.769s6.625-14.769 14.769-14.769 14.769 6.625 14.769 14.769-6.625 14.769-14.769 14.769z"
        fill="#a8a8b3"
        data-original="#000000"
        xmlns="http://www.w3.org/2000/svg"
      />
    </svg>
  )
}

export default MeterSvg