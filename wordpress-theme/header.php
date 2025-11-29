<?php
/**
 * The header for the Guurti theme
 *
 * @package Guurti
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#main-content">
    <?php _e('Skip to content', 'guurti'); ?>
</a>

<header class="site-header" role="banner">
    <div class="container">
        <div class="site-branding">
            <?php if (has_custom_logo()) : ?>
                <div class="site-logo">
                    <?php the_custom_logo(); ?>
                </div>
            <?php endif; ?>
            
            <div class="site-title">
                <h1>
                    <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                        <?php bloginfo('name'); ?>
                    </a>
                </h1>
                <?php
                $description = get_bloginfo('description', 'display');
                if ($description || is_customize_preview()) :
                ?>
                    <p class="subtitle"><?php echo $description; ?></p>
                <?php endif; ?>
            </div>
            
            <!-- Language Toggle -->
            <div class="language-toggle">
                <button onclick="setLanguage('so')" class="lang-btn <?php echo (guurti_get_current_language() == 'so') ? 'active' : ''; ?>">
                    Soomaali
                </button>
                <button onclick="setLanguage('en')" class="lang-btn <?php echo (guurti_get_current_language() == 'en') ? 'active' : ''; ?>">
                    English
                </button>
                <button onclick="setLanguage('ar')" class="lang-btn <?php echo (guurti_get_current_language() == 'ar') ? 'active' : ''; ?>">
                    العربية
                </button>
            </div>
        </div>
    </div>
    
    <nav class="main-navigation" role="navigation" aria-label="<?php _e('Primary Menu', 'guurti'); ?>">
        <div class="container">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class'     => 'primary-menu',
                'container'      => false,
                'fallback_cb'    => false,
            ));
            ?>
        </div>
    </nav>
</header>

<main id="main-content" class="site-main">
