<!DOCTYPE html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta name="description"
        content="INNOVATIVE STAIN is a premium-quality wood stain solution specially developed to enhance the natural beauty, depth, and character of wooden surfaces.">
    <meta name="keywords"
        content="Innovative Wood Stain, Wood Stain, Wood Finish, Furniture Polish, Innovative Coatings">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="../themes/cms/assets/images/static/Innovative-Trading-logo.svg" />
    <title>INNOVATIVE WOOD STAIN | Innovative Coatings</title>

    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&amp;display=swap" rel="stylesheet"
        media="all">
    <link href="../themes/cms/assets/css/bundle.min.css" rel="stylesheet" media="all">
    <link href="../themes/cms/assets/css/inner.css" rel="stylesheet" media="all">
    <link href="../themes/cms/assets/css/home.css" rel="stylesheet" media="all">
    <link href="../themes/cms/assets/css/products.css" rel="stylesheet" media="all">
    <script src="../themes/cms/assets/js/jquery.min.js"></script>
    <script src="../themes/cms/assets/js/bundle.min.js"></script>

    <style>
        .stain-slider-wrapper {
            position: relative;
            background: #FAFAFA;
            background: white;
            border: 1px solid #EFEFEF;
            border-radius: 8px;
            padding: 40px 20px;
            box-shadow: 0 10px 30px rgba(60, 74, 85, 0.08);
            max-width: 480px;
            margin: 0 auto;
        }

        .stain-slider-init .stain-slide-item {
            outline: none;
            text-align: center;
        }

        .stain-slider-init .stain-slide-item img {
            max-height: 420px;
            width: auto;
            max-width: 100%;
            object-fit: contain;
            display: block;
            margin: 0 auto;
        }

        .stain-slider-prev,
        .stain-slider-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            cursor: pointer;
            width: 36px;
            height: 36px;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all .2s ease;
        }

        .stain-slider-prev {
            left: 10px;
        }

        .stain-slider-next {
            right: 10px;
        }

        .stain-slider-prev svg,
        .stain-slider-next svg {
            width: 20px;
            height: 20px;
        }

        .stain-slider-prev svg path,
        .stain-slider-next svg path {
            fill: #777;
            transition: fill .2s ease;
        }

        .stain-slider-prev:hover,
        .stain-slider-next:hover {
            background: #0060AF;
        }

        .stain-slider-prev:hover svg path,
        .stain-slider-next:hover svg path {
            fill: #FFF;
        }

        .color-badge-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 14px;
            margin-bottom: 25px;
        }

        .color-badge {
            display: inline-flex;
            align-items: center;
            padding: 7px 16px;
            background: #F4F6F8;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 500;
            color: #444;
            border: 1px solid #E5E9EE;
            transition: all .2s ease;
        }

        .color-badge:hover {
            background: #0060AF;
            color: #FFF;
            border-color: #0060AF;
        }

        .color-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 8px;
        }
    </style>
</head>

<body>

    <section class="MenuBar">
        <div class="container">
            <div class="logo">
                <a href="../index.php">
                    <img src="../themes/cms/assets/images/static/Innovative-logo.png" alt="Innovative Trading"
                        width="150" height="100">
                </a>
            </div>
            <div class="menuHamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    </section>

    <!-- Menu items -->
    <section class="menuItems">
        <div class="menuItems__close">
            <svg id="Component_20_2" data-name="Component 20 – 2" xmlns="http://www.w3.org/2000/svg" width="40"
                height="40" viewBox="0 0 40 40">
                <g id="Rectangle_431" data-name="Rectangle 431" fill="none" stroke="#fff" stroke-width="1">
                    <rect width="40" height="40" stroke="none" />
                    <rect x="0.5" y="0.5" width="39" height="39" fill="none" />
                </g>
                <g id="Group_1016" data-name="Group 1016" transform="translate(-0.929)">
                    <path id="Path_876" data-name="Path 876" d="M0,0H22.627" transform="translate(12.929 12) rotate(45)"
                        fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                    <path id="Path_877" data-name="Path 877" d="M0,0H22.627"
                        transform="translate(12.929 28) rotate(-45)" fill="none" stroke="#fff" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="1.5" />
                </g>
            </svg>
        </div>
        <ul>
            <li><a href="../index.php">Home</a></li>
            <li><a href="../about-us.php">About Us</a></li>
            <li class="active"><a href="../products.php">Products</a></li>
            <li><a href="../NewsMedia.php">News and Media</a></li>
            <li><a href="../galary.php">Gallary</a></li>
            <li><a href="../contact-us.php">Contact Us</a></li>
        </ul>
    </section>

    <!-- Product Detail Section -->
    <section class="product-detail-section" style="padding: 130px 0 80px 0; min-height: 80vh;">
        <div class="container">
            <div class="row" style="display: flex; flex-wrap: wrap; align-items: center;">

                <!-- Product Images Slider Column (3 Images) -->
                <div class="col-md-6 col-sm-6 chooseColor__right" style="margin-bottom: 30px;">
                    <div class="stain-slider-wrapper">

                        <!-- Slider Prev Arrow -->
                        <a href="javascript:void(0)" class="stain-slider-prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path
                                    d="M9,18a9,9,0,1,1,9-9A9.01,9.01,0,0,1,9,18ZM8,5.5a.5.5,0,0,0-.354.853L10.293,9,7.646,11.646a.5.5,0,0,0,0,.707.5.5,0,0,0,.707,0l3-3a.5.5,0,0,0,0-.707l-3-3A.5.5,0,0,0,8,5.5Z"
                                    transform="translate(18 18) rotate(180)" fill="#777" />
                            </svg>
                        </a>

                        <!-- 3 Images Slider -->
                        <div class="stain-slider-init">
                            <!-- Image 1 (4.5L) -->
                            <div class="stain-slide-item">
                                <img src="../admin/uploads/products/innovative-stain/Innovative-Wood-Stain-4.5L.jpeg"
                                    alt="Innovative Wood Stain 4.5L" style="background-color: white;">
                                <p style="font-size: 13px; color: #888; margin-top: 10px; margin-bottom: 0;">Pack Size:
                                    4.5 Litre</p>
                            </div>
                            <!-- Image 2 (1L) -->
                            <div class="stain-slide-item">
                                <img src="../admin/uploads/products/innovative-stain/wood-stain-1L.png"
                                    alt="Innovative Wood Stain 1L">
                                <p style="font-size: 13px; color: #888; margin-top: 10px; margin-bottom: 0;">Pack Size:
                                    1 Litre</p>
                            </div>
                            <!-- Image 3 (500ml) -->
                            <div class="stain-slide-item">
                                <img src="../admin/uploads/products/innovative-stain/Innovative-wood-stain-500ml.png"
                                    alt="Innovative Wood Stain 500ml">
                                <p style="font-size: 13px; color: #888; margin-top: 10px; margin-bottom: 0;">Pack Size:
                                    500 ml</p>
                            </div>
                        </div>

                        <!-- Slider Next Arrow -->
                        <a href="javascript:void(0)" class="stain-slider-next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path
                                    d="M9,18a9,9,0,1,1,9-9A9.01,9.01,0,0,1,9,18ZM8,5.5a.5.5,0,0,0-.354.853L10.293,9,7.646,11.646a.5.5,0,0,0,0,.707.5.5,0,0,0,.707,0l3-3a.5.5,0,0,0,0-.707l-3-3A.5.5,0,0,0,8,5.5Z"
                                    fill="#777" />
                            </svg>
                        </a>

                    </div>
                </div>

                <!-- Product Content Column -->
                <div class="col-md-6 col-sm-6 chooseColor__left" style="padding-left: 30px;">
                    <span
                        style="display: inline-block; color: #0060AF; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px;">Product
                        Overview</span>
                    <h2
                        style="font-size: 32px; font-weight: 600; color: #333; margin-top: 0; margin-bottom: 24px; line-height: 1.3;">
                        INNOVATIVE WOOD STAIN</h2>

                    <h4 style="font-size: 18px; font-weight: 500; color: #555; margin-bottom: 16px;">Description:</h4>
                    <p style="font-size: 15px; color: #666; line-height: 1.8; margin-bottom: 16px;">
                        INNOVATIVE STAIN is a premium-quality wood stain solution specially developed to enhance the
                        natural beauty, depth, and character of wooden surfaces. It provides rich, uniform, and
                        attractive color while preserving the natural grain and texture of the wood.
                    </p>
                    <p style="font-size: 15px; color: #666; line-height: 1.8; margin-bottom: 24px;">
                        Designed for both decorative and professional wood finishing applications, INNOVATIVE STAIN
                        offers excellent color penetration, smooth application, and consistent finishing performance. It
                        is suitable for furniture, doors, cabinets, wooden panels, and other interior wood surfaces.
                    </p>

                    <h4 style="font-size: 18px; font-weight: 500; color: #555; margin-bottom: 16px;">Key Features:</h4>
                    <ul style="list-style: none; padding-left: 0; margin-bottom: 25px;">
                        <li
                            style="display: flex; align-items: center; margin-bottom: 10px; font-size: 15px; color: #555;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="#0060AF" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round" style="margin-right: 12px; flex-shrink: 0;">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Rich and uniform color</span>
                        </li>
                        <li
                            style="display: flex; align-items: center; margin-bottom: 10px; font-size: 15px; color: #555;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="#0060AF" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round" style="margin-right: 12px; flex-shrink: 0;">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Enhances natural wood grain</span>
                        </li>
                        <li
                            style="display: flex; align-items: center; margin-bottom: 10px; font-size: 15px; color: #555;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="#0060AF" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round" style="margin-right: 12px; flex-shrink: 0;">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Excellent penetration and coverage</span>
                        </li>
                        <li
                            style="display: flex; align-items: center; margin-bottom: 10px; font-size: 15px; color: #555;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="#0060AF" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round" style="margin-right: 12px; flex-shrink: 0;">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Smooth and consistent application</span>
                        </li>
                        <li
                            style="display: flex; align-items: center; margin-bottom: 10px; font-size: 15px; color: #555;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="#0060AF" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round" style="margin-right: 12px; flex-shrink: 0;">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Available in attractive wood shades</span>
                        </li>
                        <li
                            style="display: flex; align-items: center; margin-bottom: 10px; font-size: 15px; color: #555;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="#0060AF" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round" style="margin-right: 12px; flex-shrink: 0;">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Ideal for professional furniture finishing</span>
                        </li>
                        <li
                            style="display: flex; align-items: center; margin-bottom: 10px; font-size: 15px; color: #555;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="#0060AF" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round" style="margin-right: 12px; flex-shrink: 0;">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>Compatible with various wood coating systems</span>
                        </li>
                    </ul>

                    <h4 style="font-size: 18px; font-weight: 500; color: #555; margin-bottom: 8px;">Colour Range:</h4>
                    <p style="font-size: 14px; color: #666; line-height: 1.7; margin-bottom: 10px;">
                        INNOVATIVE STAIN is available in a rich and versatile range of colours, specially designed to
                        enhance the natural beauty, grain, and character of wood. Suitable for furniture, doors,
                        cabinets, wooden panels, and other professional wood-finishing applications.
                    </p>

                    <!-- Available Colours Badges -->
                    <div class="color-badge-list">
                        <span class="color-badge"><span class="color-dot"
                                style="background: #E5A823;"></span>YELLOW</span>
                        <span class="color-badge"><span class="color-dot" style="background: #65000B;"></span>ROSE
                            WOOD</span>
                        <span class="color-badge"><span class="color-dot"
                                style="background: #1B4D89;"></span>BLUE</span>
                        <span class="color-badge"><span class="color-dot"
                                style="background: #111111;"></span>BLACK</span>
                        <span class="color-badge"><span class="color-dot"
                                style="background: #2E6F40;"></span>GREEN</span>
                        <span class="color-badge"><span class="color-dot"
                                style="background: #D9531E;"></span>ORANGE</span>
                        <span class="color-badge"><span class="color-dot"
                                style="background: #9A6635;"></span>TEAK</span>
                        <span class="color-badge"><span class="color-dot"
                                style="background: #4A151B;"></span>MAHAGONY</span>
                        <span class="color-badge"><span class="color-dot"
                                style="background: #5C4033;"></span>WALNUT</span>
                    </div>

                    <p style="font-size: 15px; font-weight: 600; color: #0060AF; margin-bottom: 30px;">
                        INNOVATIVE STAIN — Rich Colours. Natural Beauty. Premium Wood Finish.
                    </p>

                    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                        <a href="../contact-us.php" class="see-all-products-btn"
                            style="background: #0060AF; color: #fff; border-color: #0060AF;">
                            <span>Inquire Now</span>
                        </a>
                        <a href="../products.php" class="see-all-products-btn">
                            <span>Back to Products</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <?php include '../assets/151b2384/css/footer.php'; ?>

    <script src="../themes/cms/assets/js/products.js"></script>

</body>

</html>