import React from "react";

const AndroidIcon: React.StatelessComponent<{ width: String, height: String }> = ({ children, width, height }) => (
  <svg
    version="1"
    xmlns="http://www.w3.org/2000/svg"
    width={width || '100px'}
    height={height || '100px'}
    viewBox="0 0 128 128">
    <path fill="#A4C439" d="M13.699 107.138h8.047v17.421h-3.492v-14.026l-3.116.012h-.749c-1.74 0-2.707.073-2.9.218-1.039.282-1.917.882-2.634 1.8-.772 1.104-1.159 2.203-1.159 3.299 0 1.353.523 2.598 1.57 3.733.701.668 1.305 1.071 1.813 1.208.507.258 1.381.387 2.621.387h2.429v3.37h-2.911c-2.159 0-3.983-.567-5.474-1.703-1.079-.854-1.8-1.627-2.162-2.319-.902-1.434-1.354-2.9-1.354-4.398v-.507c0-2.095.785-4.016 2.356-5.763.95-.927 1.728-1.511 2.331-1.752.436-.242 1.035-.472 1.801-.688.684-.196 1.679-.292 2.983-.292zM39.324 110.617c.346.467.596.865.749 1.195.226.396.438.927.641 1.595.241.806.362 1.901.362 3.286v7.865h-3.492v-8.239c0-2.771-1.252-4.623-3.757-5.558-.572-.161-1.075-.245-1.511-.254-.435.009-.934.093-1.498.254-2.505.935-3.757 2.787-3.757 5.558v8.239h-3.504v-7.865c0-1.385.121-2.48.362-3.286.201-.668.415-1.199.641-1.595.153-.338.406-.736.761-1.195 1.877-2.304 4.209-3.456 6.995-3.456 2.788 0 5.123 1.152 7.008 3.456zM49.122 107.149c2.345 0 3.689.053 4.036.157.95.113 2.021.512 3.213 1.196.652.402 1.346 1.019 2.078 1.848 1.305 1.619 1.957 3.46 1.957 5.521 0 1.208-.233 2.348-.7 3.419-.918 2.086-2.429 3.593-4.53 4.519-.975.5-2.473.749-4.494.749h-7.406l-.387-.072v-3.311h8.167c.87 0 1.542-.076 2.018-.229 1.265-.427 2.19-1.063 2.778-1.909.717-1.07 1.075-2.114 1.075-3.129 0-1.022-.31-2.029-.93-3.021-.387-.571-.813-1.006-1.28-1.305-.854-.7-2.074-1.051-3.661-1.051h-8.167v-3.383h6.233zM62.219 107.149h11.188c1.973 0 3.52.592 4.639 1.776.5.467.846.918 1.039 1.353.436.87.652 1.72.652 2.55v.495c0 1.272-.552 2.517-1.654 3.733-.709.676-1.354 1.111-1.934 1.305 1.466 1.563 2.199 3.628 2.199 6.197h-3.516v-.266c0-1.9-.77-3.411-2.308-4.53-.878-.62-2.026-.931-3.443-.931h-6.862v-3.358h11.405c1.248 0 2.094-.616 2.537-1.849.048-.249.08-.459.096-.628 0-.685-.285-1.305-.857-1.86-.491-.387-1.015-.58-1.57-.58 0-.032-.169-.049-.508-.049h-11.103v-3.358zM90.26 107.161h.12c2.675 0 4.958 1.096 6.851 3.286 1.225 1.644 1.836 3.432 1.836 5.364v.121c0 2.674-1.119 4.945-3.358 6.813-1.627 1.209-3.411 1.813-5.352 1.813h-.121c-2.658 0-4.934-1.087-6.826-3.262-.66-.926-1.123-1.776-1.39-2.549-.313-.967-.471-1.913-.471-2.84v-.12c0-2.626 1.083-4.873 3.25-6.742 1.466-1.047 2.803-1.635 4.011-1.764.37-.079.853-.12 1.45-.12zm-5.232 8.675c0 1.515.592 2.844 1.776 3.987 1.055.901 2.162 1.353 3.322 1.353h.338c.935 0 1.885-.318 2.852-.954.998-.733 1.675-1.667 2.029-2.803.112-.298.193-.81.241-1.534 0-1.482-.575-2.791-1.728-3.927-1.079-.959-2.263-1.438-3.552-1.438-1.506 0-2.843.628-4.011 1.885-.491.645-.802 1.191-.931 1.643-.223.628-.336 1.224-.336 1.788zM100.879 107.161h3.491v17.397h-3.491v-17.397zM112.489 107.149c2.344 0 3.688.053 4.035.157.95.113 2.021.512 3.213 1.196.652.402 1.346 1.019 2.078 1.848 1.305 1.619 1.957 3.46 1.957 5.521 0 1.208-.233 2.348-.7 3.419-.918 2.086-2.429 3.593-4.53 4.519-.975.5-2.473.749-4.494.749h-7.406l-.387-.072v-3.311h8.167c.87 0 1.542-.076 2.018-.229 1.265-.427 2.19-1.063 2.778-1.909.717-1.07 1.075-2.114 1.075-3.129 0-1.022-.31-2.029-.93-3.021-.387-.571-.813-1.006-1.28-1.305-.854-.7-2.074-1.051-3.661-1.051h-8.167v-3.383h6.234zM29.184 36.363c-3.281-.002-5.941 2.664-5.942 5.943l.004 24.889c.001 3.291 2.662 5.947 5.945 5.947s5.944-2.656 5.941-5.945v-24.892c-.002-3.28-2.665-5.944-5.948-5.942m47.931-22.351l4.148-7.574c.221-.396.075-.9-.325-1.125-.405-.213-.905-.068-1.119.33l-4.19 7.654c-3.526-1.568-7.471-2.447-11.646-2.443-4.163-.004-8.107.873-11.619 2.434l-4.194-7.635c-.218-.402-.72-.549-1.116-.33-.403.219-.551.723-.327 1.117l4.149 7.57c-8.154 4.205-13.663 12.215-13.658 21.408l53.539-.006c0-9.193-5.499-17.183-13.642-21.4m-25.309 11.707c-1.231-.002-2.237-1.004-2.237-2.242 0-1.234 1.003-2.248 2.24-2.248 1.24 0 2.245 1.014 2.246 2.248 0 1.236-1.006 2.242-2.249 2.242m24.379-.004c-1.238.002-2.245-1.002-2.245-2.244.005-1.23 1.006-2.244 2.245-2.25 1.231.004 2.241 1.02 2.24 2.252.003 1.238-1.004 2.242-2.24 2.242m-38.75 11.771l.009 38.572c-.002 3.508 2.836 6.34 6.342 6.34l4.318.002.006 13.17c-.002 3.279 2.664 5.945 5.939 5.945 3.283 0 5.944-2.668 5.945-5.949l-.004-13.166 8.024-.002.003 13.168c0 3.277 2.667 5.947 5.942 5.941 3.284.002 5.946-2.666 5.945-5.945l-.004-13.166 4.334-.004c3.498.002 6.343-2.834 6.345-6.344l-.007-38.572-53.137.01zm67.317 4.813c0-3.283-2.66-5.945-5.943-5.943-3.282-.002-5.941 2.662-5.941 5.945l.005 24.891c-.001 3.285 2.658 5.941 5.942 5.941 3.282 0 5.941-2.656 5.941-5.945l-.004-24.889z" />
  </svg>
);

export default AndroidIcon;