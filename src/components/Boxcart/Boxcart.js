import styled, { keyframes, css } from "styled-components";
import axios from "axios";
import { IoTrashSharp, IoCart, IoChevronDownSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Delete_Package } from "../../redux/actions/packageAction";
import Inglaterra from "../../assets/images/svgs/Inglaterra.svg";
import Espanish from "../../assets/images/svgs/Espanish.svg";
import Francia from "../../assets/images/svgs/French.svg";

export default function Boxcart() {
  const [ShowContent, setShowContent] = useState(false);
  const { items } = useSelector((state) => state.package);
  const { addCart } = useSelector((state) => state.itemPackage);

  const dispatch = useDispatch();

  //   const English = items.find((x) => x.idiom === "English");
  //   const French = items.find((x) => x.idiom === "French");
  //   const Spanish = items.find((x) => x.idiom === "Spanish");

  const ClickDelete = (idiom) => {
    dispatch(Delete_Package(idiom));

    if (items.length === 1) {
      dispatch({ type: "Remove" });
    }
  };

  const handleShow = () => {
    setShowContent(!ShowContent);
  };
  let res = 0;
  res = items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);

  const ShowBanderas = (idiom) => {
    switch (idiom) {
      case "English":
        return (
          <>
            {" "}
            <img src={Inglaterra} width="25" height="25" /> <span>English</span>{" "}
          </>
        );
      case "Spanish":
        return (
          <>
            {" "}
            <img src={Espanish} width="25" height="25" /> <span>Spanish</span>{" "}
          </>
        );
      case "French":
        return (
          <>
            {" "}
            <img src={Francia} width="25" height="25" /> <sppan>French</sppan>{" "}
          </>
        );
      default:
        return "nada";
    }
  };

  useEffect(() => {
    setTimeout(motionButton, 2000);
  }, [addCart]);

  const motionButton = () => {
    dispatch({ type: "REMOVE_ADD_CART" });
  };

  /**
   * axios  peticion al server
   */

  const handlePay = (valor) => {};

  return (
    <>
      {ShowContent ? (
        ""
      ) : (
        <div>
          <BoxCartIcon motion={addCart} onClick={() => handleShow()}>
            <ItemsCart>{items.length}</ItemsCart>
            <IconCart />
          </BoxCartIcon>
        </div>
      )}
      <Content show={ShowContent}>
        <Box_close onClick={() => handleShow()}>
          <CloseButton>
            <IoChevronDownSharp />
          </CloseButton>
        </Box_close>
        <Content__Cart>
          <div>
            <Text_Subtotal>Subtotal</Text_Subtotal>
            <SubTotal>${res}</SubTotal>
            <Link to="/orderSummary">
              <Button_ProccedPay disabled={items.length > 0 ? false : true}>
                Cart details
              </Button_ProccedPay>
            </Link>
            <Link to="/payclient">
              <Button_ProccedPay pay={true}>
                Procced to payment
              </Button_ProccedPay>
            </Link>

            <Separador />
            <Text_Subtotal>Order Summary</Text_Subtotal>

            {items.map((item, index) => (
              <div key={index}>
                <BoxItems>
                  <IconsItems>{ShowBanderas(item.idiom)}</IconsItems>
                  <IconsItems>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 775 834"
                      fill="none"
                    >
                      <g clip-path="url(#clip0)">
                        <path
                          d="M449.31 120.34C449.31 136.82 449.12 153.34 449.37 169.79C449.61 185.79 456.96 198.21 470.21 206.66C486.4 216.98 503.01 215.81 518.88 205.76C532.88 196.92 539.06 183.49 539.16 167.23C539.3 143.89 539.16 120.55 539.16 97.23C539.16 89.47 539.16 89.42 546.07 92.56C578.405 107.239 608.605 126.225 635.85 149C669.362 177.07 697.905 210.586 720.28 248.14C745.141 289.696 761.894 335.59 769.65 383.39C772.523 401.255 774.144 419.299 774.5 437.39C776.629 529.156 745.922 618.666 687.91 689.8C653.093 732.928 609.375 768.032 559.745 792.711C510.114 817.391 455.741 831.066 400.34 832.8C305.271 836.115 212.337 804.143 139.43 743.04C109.451 718.061 83.4265 688.689 62.24 655.92C27.9268 603.061 7.08163 542.602 1.52605 479.828C-4.02953 417.054 5.87361 353.874 30.37 295.81C68.7838 205.007 140.191 132.141 230.2 91.9C230.47 91.78 230.73 91.65 231 91.54C235.12 89.72 235.74 90.07 235.75 94.71C235.79 118.343 235.79 141.977 235.75 165.61C235.75 170.13 235.7 174.67 236.98 179.07C242.19 196.95 253.4 209.07 271.87 212.72C296.18 217.54 320.28 201.37 324.87 177.06C325.443 173.903 325.717 170.699 325.69 167.49C325.69 135.537 325.69 103.587 325.69 71.64C325.69 70.32 325.69 69.01 325.69 67.7C325.8 63.84 326.12 63.36 329.77 62.82C341.31 61.1067 352.903 59.8967 364.55 59.19C375.49 58.52 386.42 58.25 397.35 58.59C413.385 59.0255 429.379 60.4448 445.24 62.84C448.78 63.38 449.24 63.91 449.24 68.26C449.24 80.36 449.24 92.47 449.24 104.58V120.34H449.31ZM387.52 237.28H181C161.75 237.28 142.49 237.35 123.24 237.22C121.731 237.134 120.226 237.446 118.877 238.125C117.527 238.804 116.379 239.827 115.55 241.09C103.52 257.068 123.7 331.77 114.603 349.582C100.367 377.41 115.949 349.393 110 380.08C108.09 389.93 114.603 409.95 114.663 420.1C114.783 441.84 110.22 449.77 110 471.5C109.945 482 108.01 507.19 110 517.5C120.237 574.203 87.1784 616.294 123.7 660.86C129.58 668.08 127.3 667 136.42 667C303.58 667 470.747 667 637.92 667C639.23 667 640.55 666.89 641.85 667C644.95 667.3 647.03 665.88 648.94 663.57C678.606 627.901 700.72 586.58 713.94 542.11C721.531 516.648 726.033 490.366 727.35 463.83C728.277 446.346 727.842 428.817 726.05 411.4C724.374 394.859 721.51 378.46 717.48 362.33C710.336 334.007 699.528 306.737 685.33 281.21C677.394 266.933 668.461 253.232 658.6 240.21C657.04 238.15 655.32 237.05 652.72 237.26C651.27 237.37 649.81 237.26 648.35 237.26L387.52 237.28Z"
                          fill="#314584"
                        />
                        <path
                          d="M522.11 98.56C522.11 121.3 522.11 144.043 522.11 166.79C522.11 183.21 511.78 194.79 495.45 196.39C485.56 197.39 477.91 193.03 472.01 185.39C467.902 180.006 465.76 173.379 465.94 166.61C465.94 141.83 465.94 117.047 465.94 92.26C465.94 71.4134 465.94 50.5667 465.94 29.72C465.94 20.11 469.29 11.95 477.22 6.23002C486 1.85966e-05 495.59 -2.23998 505.62 2.70002C516 7.81002 521.82 16.48 522 28.15C522.29 44.15 522.07 60.22 522.08 76.26L522.11 98.56Z"
                          fill="#314584"
                        />
                        <path
                          d="M308.61 98.29C308.61 121.49 308.4 144.69 308.69 167.88C308.86 182.49 297.46 196.29 279.59 196.57C271.76 196.69 265.28 193.05 260.06 187.23C254.5 181.01 252.51 173.54 252.45 165.42C252.45 158.71 252.45 152 252.45 145.29C252.45 108.53 252.45 71.7667 252.45 35C252.428 31.499 252.612 27.9996 253 24.52C255.2 5.35004 278.7 -6.42996 295 4.18004C303.59 9.77004 308.57 17.76 308.61 28.27C308.66 51.61 308.61 75 308.61 98.29Z"
                          fill="#314584"
                        />
                        <path
                          d="M181.013 552.98C181.013 543.07 181.013 533.16 181.013 523.25C181.013 518.93 181.423 518.49 185.803 518.48C205.483 518.44 225.15 518.44 244.803 518.48C249.043 518.48 249.643 519.1 249.653 523.31C249.693 543.13 249.693 562.95 249.653 582.77C249.653 586.91 249.023 587.53 244.743 587.54C225.063 587.587 205.397 587.587 185.743 587.54C181.413 587.54 181.033 587.07 181.013 582.7C180.983 572.8 181.013 562.89 181.013 552.98Z"
                          fill="#314584"
                        />
                        <path
                          d="M295.692 552.75C295.692 542.98 295.692 533.22 295.692 523.45C295.692 518.86 296.072 518.45 300.692 518.45C320.219 518.45 339.752 518.45 359.292 518.45C363.972 518.45 364.292 518.84 364.292 523.45C364.292 543.13 364.292 562.797 364.292 582.45C364.292 586.95 363.792 587.52 359.292 587.53C339.766 587.577 320.232 587.577 300.692 587.53C296.152 587.53 295.692 586.96 295.692 582.53C295.672 572.53 295.692 562.62 295.692 552.75Z"
                          fill="#314584"
                        />
                        <path
                          d="M478.962 552.71C478.962 562.62 478.962 572.53 478.962 582.44C478.962 587.12 478.602 587.54 474.072 587.55C454.546 587.597 435.016 587.597 415.482 587.55C410.772 587.55 410.302 587.01 410.292 582.16C410.292 562.78 410.292 543.4 410.292 524.02C410.294 523.001 410.35 521.983 410.462 520.97C410.491 520.377 410.737 519.815 411.154 519.393C411.571 518.97 412.13 518.716 412.722 518.68C414.023 518.528 415.332 518.452 416.642 518.45H472.642C479.002 518.45 479.022 518.45 479.022 524.72C478.996 534.047 478.976 543.377 478.962 552.71Z"
                          fill="#314584"
                        />
                        <path
                          d="M181.006 331.29C181.006 321.53 181.006 311.76 181.006 302C181.006 297.3 181.286 297 186.006 297C205.526 297 225.049 297 244.576 297C249.296 297 249.696 297.35 249.706 301.86C249.746 321.533 249.746 341.2 249.706 360.86C249.706 365.18 249.226 365.65 244.926 365.66C225.252 365.66 205.586 365.66 185.926 365.66C181.386 365.66 181.076 365.27 181.056 360.55C180.976 350.81 181.006 341.05 181.006 331.29Z"
                          fill="#314584"
                        />
                        <path
                          d="M295.744 331.24C295.744 321.48 295.744 311.71 295.744 301.95C295.744 297.31 296.064 297.01 300.744 297C320.271 297 339.798 297 359.325 297C364.075 297 364.394 297.3 364.404 301.88C364.404 321.547 364.404 341.213 364.404 360.88C364.404 365.21 363.975 365.64 359.615 365.65C339.948 365.65 320.281 365.65 300.615 365.65C296.095 365.65 295.764 365.26 295.744 360.51C295.724 350.77 295.744 341.03 295.744 331.24Z"
                          fill="#314584"
                        />
                        <path
                          d="M444.794 297C454.554 297 464.314 297 474.074 297C478.754 297 479.024 297.28 479.074 302C479.074 321.533 479.074 341.06 479.074 360.58C479.074 365.39 478.764 365.69 473.764 365.69C454.384 365.69 435.004 365.69 415.624 365.69C410.774 365.69 410.414 365.33 410.404 360.45C410.404 341.07 410.404 321.69 410.404 302.31C410.404 301.58 410.404 300.86 410.464 300.13C410.524 297.96 411.684 297.01 413.804 297.02C417.004 297.02 420.214 297.02 423.424 297.02L444.794 297Z"
                          fill="#314584"
                        />
                        <path
                          d="M559.424 297.031C569.184 297.031 578.954 297.031 588.714 297.031C593.434 297.031 593.714 297.341 593.714 301.931C593.754 321.611 593.754 341.278 593.714 360.931C593.714 365.241 593.284 365.661 588.904 365.671C569.224 365.671 549.558 365.671 529.904 365.671C525.504 365.671 525.084 365.251 525.074 360.951C525.074 341.271 525.074 321.604 525.074 301.951C525.074 297.341 525.404 297.051 530.074 297.031C539.894 296.961 549.664 297.031 559.424 297.031Z"
                          fill="#314584"
                        />
                        <path
                          d="M215 476.38C205.37 476.38 195.75 476.38 186.13 476.38C181.27 476.38 181 476.08 181 471.1C181 451.72 181 432.333 181 412.94C181 412.21 181 411.48 181 410.75C181 408.83 181.89 407.75 183.89 407.75C184.89 407.75 185.89 407.69 186.95 407.69H244.68C249.28 407.77 249.68 408.05 249.68 412.74C249.68 432.267 249.68 451.8 249.68 471.34C249.68 476.12 249.32 476.41 244.31 476.43C234.53 476.4 224.76 476.38 215 476.38Z"
                          fill="#314584"
                        />
                        <path
                          d="M330.04 407.701C339.81 407.701 349.58 407.701 359.35 407.701C364.06 407.701 364.35 408.011 364.35 412.621C364.35 432.301 364.35 451.984 364.35 471.671C364.35 476.011 363.94 476.411 359.56 476.421C339.873 476.421 320.187 476.421 300.5 476.421C296.1 476.421 295.69 476.021 295.68 471.701C295.68 451.867 295.68 432.037 295.68 412.211C295.68 408.111 296.1 407.731 300.24 407.711C310.21 407.671 320.12 407.701 330.04 407.701Z"
                          fill="#314584"
                        />
                        <path
                          d="M479.04 442.26C479.04 452.03 479.04 461.8 479.04 471.56C479.04 476.02 478.68 476.41 474.37 476.42C454.55 476.46 434.727 476.46 414.9 476.42C410.9 476.42 410.39 475.94 410.38 471.81C410.34 451.99 410.34 432.167 410.38 412.34C410.38 408.16 410.83 407.73 414.87 407.72C434.69 407.68 454.517 407.68 474.35 407.72C478.7 407.72 479.02 408.07 479.04 412.52C479.07 422.44 479.04 432.35 479.04 442.26Z"
                          fill="#314584"
                        />
                        <path
                          d="M593.783 442.55C593.783 452.17 593.783 461.79 593.783 471.42C593.783 476.09 593.433 476.42 588.783 476.42C569.243 476.42 549.703 476.42 530.163 476.42C525.353 476.42 525.063 476.1 525.053 471.1C525.053 451.707 525.053 432.313 525.053 412.92C525.053 412.05 525.053 411.17 525.143 410.3C525.132 409.97 525.189 409.64 525.309 409.332C525.429 409.024 525.611 408.744 525.843 408.508C526.075 408.272 526.352 408.086 526.658 407.961C526.964 407.836 527.293 407.774 527.623 407.78C528.783 407.71 529.953 407.69 531.113 407.69H587.543C588.133 407.69 588.713 407.69 589.293 407.69C593.293 407.81 593.713 408.14 593.733 412.33C593.813 422.42 593.783 432.49 593.783 442.55Z"
                          fill="#314584"
                        />
                        <rect
                          x="88"
                          y="218"
                          width="45"
                          height="454"
                          fill="#314584"
                        />
                        <rect
                          x="647"
                          y="223"
                          width="45"
                          height="454"
                          fill="#314584"
                        />
                        <rect
                          x="692"
                          y="287"
                          width="38"
                          height="311"
                          fill="#314584"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="774.61" height="833.06" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>{item.lesson}</span>
                  </IconsItems>
                  <IconsItems>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 538 538"
                      fill="none"
                    >
                      <g clip-path="url(#clip0)">
                        <path
                          d="M269 1.94984e-06C416.3 -0.559998 538.34 120.2 538 269.56C537.62 416.5 418.06 537.78 269 537.8C119.09 537.81 -0.63 415 -2.31666e-07 267.64C0.64 120.46 121.27 -0.519998 269 1.94984e-06ZM32.44 249.57C31.97 398.36 137.38 504.24 266.44 505.57C398.51 507 506 399.54 505.61 269C505.42 203.88 482.22 147.76 436.33 101.72C390.44 55.68 334.18 33 269.18 32C204.08 32.92 147.83 55.6 101.76 101.68C55.69 147.76 33.15 203.87 32.44 249.57Z"
                          fill="#314584"
                        />
                        <path
                          d="M101 418.46C101.116 414.586 102.524 410.862 105 407.88C106.4 406.09 106.44 406.07 105 404.27C100.647 399.043 96.57 393.61 92.77 387.97C82.0635 372.191 73.5428 355.035 67.44 336.97C62.6877 323.027 59.4621 308.609 57.82 293.97C57.67 292.62 57.49 291.27 57.37 289.92C57.09 286.97 56.88 286.74 53.97 286.33C49.9893 285.919 46.3124 284.014 43.68 281C38.87 275.41 37.83 269 40.33 262.16C42.69 255.69 47.57 252.16 54.33 251.16C56.92 250.76 57.05 250.67 57.33 248.1C59.5685 224.319 65.8627 201.097 75.94 179.44C83.5544 163.022 93.2253 147.639 104.72 133.66C106.35 131.66 106.79 131.97 104.72 129.28C102.262 126.176 100.968 122.308 101.065 118.349C101.162 114.39 102.643 110.591 105.25 107.61C111.09 100.76 119.83 98.88 127.25 102.92C128.221 103.479 129.15 104.108 130.03 104.8C131.81 106.12 131.81 106.16 133.61 104.68C137.817 101.227 142.15 97.9367 146.61 94.81C172.915 76.2251 203.115 63.8916 234.91 58.75C239.316 57.9718 243.758 57.4177 248.22 57.09C248.556 57.0802 248.89 57.0434 249.22 56.98C250.98 56.66 251.22 56.49 251.38 54.71C251.646 51.6655 252.701 48.7429 254.44 46.23C256.864 42.9542 260.314 40.5837 264.241 39.4963C268.168 38.409 272.347 38.6672 276.11 40.23C282.24 42.78 285.73 47.41 286.74 53.96C287.15 56.65 287.37 56.81 290.04 57.05C300.714 58.0266 311.291 59.8626 321.67 62.54C349.119 69.5218 374.892 81.929 397.47 99.03C399.96 100.9 402.35 102.92 404.8 104.84C406.41 106.1 406.42 106.08 408.01 104.84C411.027 102.281 414.835 100.844 418.79 100.77C422.982 100.829 427.033 102.297 430.289 104.938C433.545 107.58 435.817 111.24 436.74 115.33C437.91 120.75 436.46 125.45 433.11 129.69C431.75 131.42 431.69 131.42 433.11 133.19C440.699 142.386 447.513 152.197 453.48 162.52C464.461 181.559 472.397 202.199 477 223.69C478.827 232.035 480.11 240.489 480.84 249C480.99 250.75 481.11 250.88 483.07 251.1C489.66 251.83 494.45 255.1 497.26 261.1C501.98 271.18 496.58 283.15 486.14 285.89C485.22 286.13 484.25 286.2 483.3 286.35C481.3 286.66 481 286.98 480.82 288.9C479.632 301.807 477.245 314.576 473.69 327.04C467.056 350.406 456.44 372.453 442.31 392.21C439.38 396.32 436.31 400.29 433.1 404.21C431.67 405.97 431.66 406 433.1 407.87C437.4 413.52 438.45 419.64 435.26 426.09C431.99 432.7 426.53 436.45 419.1 436.79C415.212 436.9 411.42 435.58 408.44 433.08C406.26 431.35 406.26 431.38 404.22 433.08C376.421 455.982 343.255 471.439 307.84 478C301.63 479.17 295.38 480 289.1 480.64C287.1 480.85 287.1 480.84 286.72 482.89C286.546 484.477 286.211 486.041 285.72 487.56C284.727 490.242 283.063 492.625 280.887 494.48C278.711 496.336 276.095 497.603 273.29 498.16C269.462 499.155 265.411 498.845 261.78 497.278C258.148 495.711 255.143 492.978 253.24 489.51C252.157 487.359 251.479 485.027 251.24 482.63C251.03 480.85 250.99 480.83 249.19 480.63C207.076 476.738 167.089 460.338 134.37 433.54C134.06 433.28 133.77 433.01 133.45 432.78C131.81 431.58 131.96 431.04 129.89 432.78C120.67 440.45 108.65 436.2 103.63 427.78C101.904 424.978 100.994 421.751 101 418.46V418.46Z"
                          fill="#E6E6E6"
                        />
                        <path
                          d="M351.65 302.58C352.37 302.58 353.09 302.58 353.81 302.48C356.628 302.281 359.316 301.212 361.501 299.421C363.686 297.63 365.262 295.205 366.01 292.48C368.29 283.33 363.08 275.19 355.16 273.53C344.99 271.39 334.89 268.92 324.76 266.61C310.03 263.24 295.31 259.84 280.57 256.54C279.559 256.349 278.597 255.958 277.739 255.392C276.88 254.825 276.143 254.094 275.57 253.24C270.57 246.24 265.43 239.24 260.33 232.29C244.27 210.35 228.213 188.41 212.16 166.47C210.822 164.475 209.232 162.66 207.43 161.07C203.19 157.62 198.5 156.24 193.12 158.07C183.86 161.14 180.28 173.54 185.87 180.74C194.74 192.17 203.07 204.02 211.62 215.74C220.873 228.407 230.123 241.057 239.37 253.69C244.89 261.25 250.393 268.817 255.88 276.39C258.646 280.379 262.844 283.148 267.6 284.12C270.34 284.71 273.09 285.25 275.81 285.87C298.41 291.043 321.007 296.213 343.6 301.38C346.26 301.92 348.88 302.78 351.65 302.58Z"
                          fill="#314584"
                        />
                        <path
                          d="M119.05 428.79C120.296 428.844 121.538 428.622 122.688 428.14C123.837 427.658 124.866 426.927 125.7 426C136.787 414.893 147.887 403.793 159 392.7C160.344 391.475 161.262 389.854 161.622 388.072C161.981 386.29 161.764 384.44 161 382.79C160.346 380.965 159.183 379.366 157.648 378.182C156.113 376.998 154.271 376.279 152.34 376.11C149.13 375.75 146.64 377.26 144.46 379.45L125.8 398.11C121.11 402.81 116.37 407.46 111.74 412.23C108.85 415.23 108.06 418.79 109.84 422.61C110.586 424.439 111.861 426.005 113.502 427.106C115.142 428.207 117.074 428.793 119.05 428.79V428.79Z"
                          fill="#314584"
                        />
                        <path
                          d="M428.91 119.27C428.91 112.27 422.22 107.21 416.07 109.27C414.273 109.974 412.669 111.095 411.39 112.54L380 143.91C379.55 144.36 379.09 144.81 378.67 145.3C377.494 146.519 376.696 148.053 376.375 149.717C376.054 151.38 376.222 153.101 376.86 154.67C377.426 156.351 378.426 157.852 379.759 159.021C381.092 160.191 382.71 160.987 384.45 161.33C386.017 161.684 387.651 161.612 389.18 161.121C390.71 160.63 392.081 159.739 393.15 158.54C403.97 147.653 414.823 136.79 425.71 125.95C426.11 125.55 426.5 125.15 426.86 124.72C428.21 123.229 428.943 121.281 428.91 119.27Z"
                          fill="#314584"
                        />
                        <path
                          d="M79.81 278.54H102.13C103.13 278.54 104.05 278.54 105.01 278.46C106.782 278.336 108.455 277.597 109.74 276.37C111.286 274.895 112.343 272.982 112.769 270.889C113.194 268.795 112.968 266.621 112.12 264.66C110.73 261.1 107.54 259.07 103.2 259H58.33C57.5305 258.96 56.7295 258.96 55.93 259C53.502 259.082 51.2049 260.121 49.54 261.89C48.1519 263.61 47.3141 265.708 47.1358 267.911C46.9574 270.114 47.4467 272.319 48.54 274.24C49.3165 275.605 50.4572 276.727 51.8346 277.481C53.212 278.235 54.7718 278.591 56.34 278.51C64.14 278.51 72 278.54 79.81 278.54Z"
                          fill="#314584"
                        />
                        <path
                          d="M151.3 161.54C153.234 161.59 155.141 161.079 156.79 160.067C158.439 159.055 159.759 157.587 160.59 155.84C161.499 154.261 161.891 152.438 161.712 150.625C161.533 148.812 160.791 147.1 159.59 145.73C158.989 144.982 158.345 144.271 157.66 143.6C147.46 133.36 137.24 123.123 127 112.89C126.105 111.977 125.135 111.141 124.1 110.39C123.206 109.705 122.177 109.216 121.081 108.956C119.985 108.696 118.847 108.67 117.74 108.88C115.79 109.204 113.971 110.072 112.494 111.385C111.017 112.698 109.94 114.402 109.39 116.3C108.16 120.09 109.48 123.16 112.2 125.84C117.04 130.62 121.82 135.45 126.63 140.26C132.743 146.373 138.85 152.483 144.95 158.59C145.745 159.496 146.721 160.227 147.814 160.735C148.907 161.242 150.095 161.517 151.3 161.54V161.54Z"
                          fill="#314584"
                        />
                        <path
                          d="M428.91 418.86C428.91 415.86 428.17 414.08 425.57 411.46C419.483 405.34 413.38 399.233 407.26 393.14C402.56 388.44 397.88 383.74 393.17 379.07C387.41 373.36 380.04 376.5 377.17 382.13C375.27 385.92 375.99 389.61 379.17 392.86C385.937 399.66 392.72 406.447 399.52 413.22C403.84 417.46 408.103 421.72 412.31 426C413.506 427.307 415.061 428.233 416.78 428.66C418.238 428.943 419.741 428.904 421.183 428.545C422.624 428.186 423.97 427.517 425.126 426.583C426.281 425.65 427.219 424.474 427.873 423.14C428.526 421.806 428.88 420.345 428.91 418.86V418.86Z"
                          fill="#314584"
                        />
                        <path
                          d="M278.66 79.82C278.66 71.98 278.56 64.14 278.66 56.31C278.76 50.31 273.83 46.37 267.84 46.91C263.12 47.33 260.07 50.25 259.31 54.91C259.149 56.0159 259.072 57.1324 259.08 58.25C259.08 72.65 259.08 87.0467 259.08 101.44C259.083 102.557 259.157 103.672 259.3 104.78C259.444 106.47 260.093 108.078 261.163 109.394C262.233 110.711 263.675 111.674 265.3 112.16C267.026 112.837 268.905 113.027 270.732 112.71C272.559 112.392 274.263 111.579 275.66 110.36C276.657 109.498 277.441 108.419 277.953 107.205C278.465 105.991 278.689 104.675 278.61 103.36C278.64 95.5 278.66 87.66 278.66 79.82Z"
                          fill="#314584"
                        />
                        <path
                          d="M278.67 457.85C278.67 450.17 278.67 442.503 278.67 434.85C278.752 433.409 278.555 431.966 278.09 430.6C275.92 425.14 269.43 423.88 264.67 425.81C263.436 426.288 262.337 427.058 261.466 428.054C260.595 429.051 259.979 430.243 259.67 431.53C259.3 433.004 259.129 434.521 259.16 436.04C259.16 450.593 259.16 465.147 259.16 479.7C259.143 481.059 259.267 482.416 259.53 483.75C259.759 484.934 260.246 486.053 260.957 487.028C261.667 488.003 262.583 488.809 263.64 489.39C268.99 492.51 279.01 490.68 278.76 480.91C278.51 473.2 278.67 465.52 278.67 457.85Z"
                          fill="#314584"
                        />
                        <path
                          d="M457.93 278.54H480.93C482.37 278.615 483.811 278.421 485.18 277.97C492.18 275.31 492.07 265.48 488.18 261.77C487.106 260.693 485.784 259.897 484.33 259.45C483.025 259.11 481.678 258.956 480.33 258.99H458.27C450.44 258.99 442.6 258.99 434.77 258.99C429.6 258.99 426.17 261.88 425.27 266.73C424.47 271.02 426.13 275.23 429.38 277.24C431.06 278.187 432.975 278.634 434.9 278.53C442.58 278.53 450.25 278.54 457.93 278.54Z"
                          fill="#314584"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="537.98" height="537.8" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                    <span>{item.time}</span>
                  </IconsItems>
                  <IconsItems>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 538 538"
                      fill="none"
                    >
                      <g clip-path="url(#clip0)">
                        <path
                          d="M268.7 537.4C120.54 537.4 0 416.86 0 268.7C0 120.54 120.54 0 268.7 0C416.86 0 537.4 120.54 537.4 268.7C537.4 416.86 416.87 537.4 268.7 537.4ZM268.7 31.69C138.01 31.69 31.7 138.01 31.7 268.69C31.7 399.37 138.02 505.69 268.7 505.69C399.38 505.69 505.7 399.36 505.7 268.69C505.7 138.02 399.39 31.69 268.7 31.69V31.69Z"
                          fill="#314584"
                        />
                        <path
                          d="M244.62 107V64.28H292.54V106C346.28 112 381.39 137.543 397.87 182.63L319.75 207.09C311.75 185.957 295.44 175.39 270.82 175.39C250.193 175.39 239.877 182.057 239.87 195.39C239.838 197.701 240.287 199.994 241.189 202.122C242.091 204.249 243.427 206.166 245.11 207.75C248.61 211.163 258.26 214.63 274.06 218.15C310.147 226.05 336.017 233.117 351.67 239.35C367.323 245.583 380.35 256.133 390.75 271C401.15 285.88 406.353 303.46 406.36 323.74C406.36 352.173 396.25 375.99 376.03 395.19C355.81 414.39 327.98 425.987 292.54 429.98V473.16H244.62V429.94C184.38 422.793 146.523 391.097 131.05 334.85L218.41 318.62C225.903 344.247 244.79 357.06 275.07 357.06C298.69 357.06 310.503 350.57 310.51 337.59C310.622 334.441 309.923 331.315 308.48 328.514C307.037 325.712 304.899 323.328 302.27 321.59C296.777 317.757 287.043 314.423 273.07 311.59C218.17 300.39 183.353 286.143 168.62 268.85C153.887 251.557 146.52 231.683 146.52 209.23C146.52 184.443 154.59 162.443 170.73 143.23C186.87 124.017 211.5 111.94 244.62 107Z"
                          fill="#314584"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="537.4" height="537.4" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>${item.price}</span>
                  </IconsItems>
                </BoxItems>

                {/* <Items_Content key={index}>You have chosen the {item.lesson} package of {item.idiom} at this price: USD {item.price} </Items_Content> */}
                <BoxDelete>
                  <IconDelete onClick={() => ClickDelete(item.idiom)} />
                </BoxDelete>
                <hr />
              </div>
            ))}
          </div>
        </Content__Cart>
      </Content>
    </>
  );
}

const ButtonAnimation = keyframes`
    0%{
        transform: translateY(0em);
        animation-timing-function: ease-out;
    }
    50%{
        transform: translateY(-2.8em);
        animation-timing-function: ease-out;
    }
    100%{
        transform: translateY(0em);
        animation-timing-function: ease-out;
    }
`;

const BoxCartIcon = styled.div`
  position: fixed;
  z-index: 9;
  bottom: 0;
  right: 0;
  margin: 30px 10px;
  border-radius: 50%;
  background-color: rgba(255, 56, 56, 1);
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  box-shadow: 2px 0px 18px -4px rgba(0, 0, 0, 0.68);
  ${({ motion }) =>
    motion &&
    css`
      animation: 0.8s ${ButtonAnimation} ease-out infinite;
    `}
  @media (min-width: 1024px) {
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const IconCart = styled(IoCart)`
  color: #fff;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;
const Content = styled.div`
  z-index: 4;
  position: fixed;
  bottom: ${({ show }) => (show ? "0" : "-500px")};
  right: 0;
  width: 200px;
  background: white;
  height: 60vh;
  padding: 20px 5px;
  transition: 0.5s;
  box-shadow: -1px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;
const Content__Cart = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  margin-top: 15px;
  &::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(236, 240, 241, 1);
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: silver;
  }
  scrollbar-color: silver transparent;
  scrollbar-width: thin;
  /* scrollbar-color: silver transparent; */
`;
const Text_Subtotal = styled.p`
  font-size: 1.2rem;
  color: red;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin: 0;
  margin-bottom: 0.5rem;
`;
const SubTotal = styled.p`
  font-size: 1.5rem;
  text-align: center;
  line-height: normal;
  letter-spacing: normal;
  margin: 0;
`;
const Button_ProccedPay = styled.button`
  border: none;
  background: ${(props) => (props.pay ? "#FF3946" : "#314584")};
  padding: 4px 8px;
  color: white;
  font-size: 1rem;
  border-radius: 15px;
  margin-top: 5px;
  margin-left: ${(props) => (props.pay ? "8px" : "40px")};
  &:hover {
    background-color: ${(props) => (props.pay ? "#FF4C58" : "#455790")};
  }
`;
const Separador = styled.hr`
  margin: 10px 0;
`;
const BoxItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 6px;
`;
const IconsItems = styled.div`
  margin-top: 10px;
  & > span {
    margin-left: 5px;
    font-size: 16px;
  }
`;

const BoxDelete = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconDelete = styled(IoTrashSharp)`
  color: red;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;
const Box_close = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 4px;
  top: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    background-color: rgba(112, 111, 211, 0.2);
  }
`;
const CloseButton = styled.span`
  color: rgba(71, 71, 135, 1);
  font-size: 1.4rem;
`;
const ItemsCart = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #314584;
  z-index: 2;
  right: -15px;
  top: -12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: white;
  box-shadow: 0px 0px 8px 6px rgba(0, 0, 0, 0.08);
  margin-right: 10px;
`;
