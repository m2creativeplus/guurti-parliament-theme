<?php
/**
 * Golaha Guurtida JSL Theme Functions
 *
 * @package Guurti
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function guurti_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');
    
    // Let WordPress manage the document title
    add_theme_support('title-tag');
    
    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(1200, 800, true);
    
    // Add custom image sizes
    add_image_size('guurti-featured', 800, 600, true);
    add_image_size('guurti-thumbnail', 300, 200, true);
    add_image_size('guurti-member', 400, 400, true);
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'guurti'),
        'footer' => __('Footer Menu', 'guurti'),
        'quick-links' => __('Quick Links', 'guurti'),
    ));
    
    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    
    // Add theme support for selective refresh for widgets
    add_theme_support('customize-selective-refresh-widgets');
    
    // Add support for editor styles
    add_theme_support('editor-styles');
    add_editor_style('assets/css/editor-style.css');
    
    // Add support for responsive embeds
    add_theme_support('responsive-embeds');
    
    // Load text domain for translations
    load_theme_textdomain('guurti', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'guurti_setup');

/**
 * Set the content width
 */
function guurti_content_width() {
    $GLOBALS['content_width'] = apply_filters('guurti_content_width', 1200);
}
add_action('after_setup_theme', 'guurti_content_width', 0);

/**
 * Register widget areas
 */
function guurti_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'guurti'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here to appear in your sidebar.', 'guurti'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer 1', 'guurti'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in footer column 1.', 'guurti'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer 2', 'guurti'),
        'id'            => 'footer-2',
        'description'   => __('Add widgets here to appear in footer column 2.', 'guurti'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer 3', 'guurti'),
        'id'            => 'footer-3',
        'description'   => __('Add widgets here to appear in footer column 3.', 'guurti'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer 4', 'guurti'),
        'id'            => 'footer-4',
        'description'   => __('Add widgets here to appear in footer column 4.', 'guurti'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'guurti_widgets_init');

/**
 * Enqueue scripts and styles
 */
function guurti_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('guurti-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
    
    // Enqueue custom JavaScript
    wp_enqueue_script('guurti-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array(), '1.0', true);
    wp_enqueue_script('guurti-language-toggle', get_template_directory_uri() . '/assets/js/language-toggle.js', array(), '1.0', true);
    wp_enqueue_script('guurti-accessibility', get_template_directory_uri() . '/assets/js/accessibility.js', array(), '1.0', true);
    
    // Localize scripts
    wp_localize_script('guurti-language-toggle', 'guurtiVars', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('guurti_nonce'),
    ));
    
    // Add comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'guurti_scripts');

/**
 * Register Custom Post Types
 */
function guurti_register_post_types() {
    // Members
    register_post_type('member', array(
        'labels' => array(
            'name' => __('Members', 'guurti'),
            'singular_name' => __('Member', 'guurti'),
            'add_new' => __('Add New Member', 'guurti'),
            'add_new_item' => __('Add New Member', 'guurti'),
            'edit_item' => __('Edit Member', 'guurti'),
            'view_item' => __('View Member', 'guurti'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-groups',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'members'),
        'show_in_rest' => true,
    ));
    
    // Committees
    register_post_type('committee', array(
        'labels' => array(
            'name' => __('Committees', 'guurti'),
            'singular_name' => __('Committee', 'guurti'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-networking',
        'supports' => array('title', 'editor', 'thumbnail'),
        'rewrite' => array('slug' => 'committees'),
        'show_in_rest' => true,
    ));
    
    // Legislation
    register_post_type('legislation', array(
        'labels' => array(
            'name' => __('Legislation', 'guurti'),
            'singular_name' => __('Bill', 'guurti'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-media-document',
        'supports' => array('title', 'editor', 'excerpt', 'custom-fields'),
        'rewrite' => array('slug' => 'legislation'),
        'show_in_rest' => true,
    ));
    
    // Documents
    register_post_type('document', array(
        'labels' => array(
            'name' => __('Documents', 'guurti'),
            'singular_name' => __('Document', 'guurti'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-pdf',
        'supports' => array('title', 'editor', 'excerpt'),
        'rewrite' => array('slug' => 'documents'),
        'show_in_rest' => true,
    ));
    
    // News
    register_post_type('news', array(
        'labels' => array(
            'name' => __('News', 'guurti'),
            'singular_name' => __('News Article', 'guurti'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-megaphone',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'author'),
        'rewrite' => array('slug' => 'news'),
        'show_in_rest' => true,
    ));
    
    // Events
    register_post_type('event', array(
        'labels' => array(
            'name' => __('Events', 'guurti'),
            'singular_name' => __('Event', 'guurti'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-calendar',
        'supports' => array('title', 'editor', 'thumbnail'),
        'rewrite' => array('slug' => 'events'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'guurti_register_post_types');

/**
 * Register Taxonomies
 */
function guurti_register_taxonomies() {
    // Committee Categories
    register_taxonomy('committee_category', 'committee', array(
        'labels' => array(
            'name' => __('Committee Types', 'guurti'),
            'singular_name' => __('Committee Type', 'guurti'),
        ),
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => array('slug' => 'committee-type'),
    ));
    
    // Legislation Status
    register_taxonomy('legislation_status', 'legislation', array(
        'labels' => array(
            'name' => __('Status', 'guurti'),
            'singular_name' => __('Status', 'guurti'),
        ),
        'hierarchical' => true,
        'show_in_rest' => true,
    ));
    
    // Document Categories
    register_taxonomy('document_category', 'document', array(
        'labels' => array(
            'name' => __('Document Categories', 'guurti'),
            'singular_name' => __('Document Category', 'guurti'),
        ),
        'hierarchical' => true,
        'show_in_rest' => true,
    ));
}
add_action('init', 'guurti_register_taxonomies');

/**
 * Add Custom Fields Support
 */
function guurti_add_meta_boxes() {
    // Member details
    add_meta_box(
        'member_details',
        __('Member Details', 'guurti'),
        'guurti_member_details_callback',
        'member',
        'normal',
        'high'
    );
    
    // Legislation details
    add_meta_box(
        'legislation_details',
        __('Legislation Details', 'guurti'),
        'guurti_legislation_details_callback',
        'legislation',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'guurti_add_meta_boxes');

function guurti_member_details_callback($post) {
    wp_nonce_field('guurti_member_details', 'guurti_member_nonce');
    
    $region = get_post_meta($post->ID, '_member_region', true);
    $term_start = get_post_meta($post->ID, '_member_term_start', true);
    $committees = get_post_meta($post->ID, '_member_committees', true);
    
    ?>
    <p>
        <label for="member_region"><?php _e('Region:', 'guurti'); ?></label>
        <input type="text" id="member_region" name="member_region" value="<?php echo esc_attr($region); ?>" class="widefat">
    </p>
    <p>
        <label for="member_term_start"><?php _e('Term Start:', 'guurti'); ?></label>
        <input type="date" id="member_term_start" name="member_term_start" value="<?php echo esc_attr($term_start); ?>" class="widefat">
    </p>
    <p>
        <label for="member_committees"><?php _e('Committees:', 'guurti'); ?></label>
        <textarea id="member_committees" name="member_committees" class="widefat" rows="3"><?php echo esc_textarea($committees); ?></textarea>
    </p>
    <?php
}

function guurti_legislation_details_callback($post) {
    wp_nonce_field('guurti_legislation_details', 'guurti_legislation_nonce');
    
    $bill_number = get_post_meta($post->ID, '_bill_number', true);
    $introduced_date = get_post_meta($post->ID, '_introduced_date', true);
    $status = get_post_meta($post->ID, '_legislation_status', true);
    
    ?>
    <p>
        <label for="bill_number"><?php _e('Bill Number:', 'guurti'); ?></label>
        <input type="text" id="bill_number" name="bill_number" value="<?php echo esc_attr($bill_number); ?>" class="widefat">
    </p>
    <p>
        <label for="introduced_date"><?php _e('Date Introduced:', 'guurti'); ?></label>
        <input type="date" id="introduced_date" name="introduced_date" value="<?php echo esc_attr($introduced_date); ?>" class="widefat">
    </p>
    <p>
        <label for="legislation_status"><?php _e('Status:', 'guurti'); ?></label>
        <select id="legislation_status" name="legislation_status" class="widefat">
            <option value="draft" <?php selected($status, 'draft'); ?>><?php _e('Draft', 'guurti'); ?></option>
            <option value="under-review" <?php selected($status, 'under-review'); ?>><?php _e('Under Review', 'guurti'); ?></option>
            <option value="passed" <?php selected($status, 'passed'); ?>><?php _e('Passed', 'guurti'); ?></option>
            <option value="enacted" <?php selected($status, 'enacted'); ?>><?php _e('Enacted', 'guurti'); ?></option>
        </select>
    </p>
    <?php
}

function guurti_save_meta_boxes($post_id) {
    // Check nonces and autosave
    if (!isset($_POST['guurti_member_nonce']) && !isset($_POST['guurti_legislation_nonce'])) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    // Save member details
    if (isset($_POST['guurti_member_nonce']) && wp_verify_nonce($_POST['guurti_member_nonce'], 'guurti_member_details')) {
        if (isset($_POST['member_region'])) {
            update_post_meta($post_id, '_member_region', sanitize_text_field($_POST['member_region']));
        }
        if (isset($_POST['member_term_start'])) {
            update_post_meta($post_id, '_member_term_start', sanitize_text_field($_POST['member_term_start']));
        }
        if (isset($_POST['member_committees'])) {
            update_post_meta($post_id, '_member_committees', sanitize_textarea_field($_POST['member_committees']));
        }
    }
    
    // Save legislation details
    if (isset($_POST['guurti_legislation_nonce']) && wp_verify_nonce($_POST['guurti_legislation_nonce'], 'guurti_legislation_details')) {
        if (isset($_POST['bill_number'])) {
            update_post_meta($post_id, '_bill_number', sanitize_text_field($_POST['bill_number']));
        }
        if (isset($_POST['introduced_date'])) {
            update_post_meta($post_id, '_introduced_date', sanitize_text_field($_POST['introduced_date']));
        }
        if (isset($_POST['legislation_status'])) {
            update_post_meta($post_id, '_legislation_status', sanitize_text_field($_POST['legislation_status']));
        }
    }
}
add_action('save_post', 'guurti_save_meta_boxes');

/**
 * Breadcrumbs Function
 */
function guurti_breadcrumbs() {
    if (is_front_page()) {
        return;
    }
    
    echo '<nav class="breadcrumbs" aria-label="' . __('Breadcrumb', 'guurti') . '">';
    echo '<a href="' . home_url('/') . '">' . __('Home', 'guurti') . '</a> &raquo; ';
    
    if (is_category() || is_single()) {
        the_category(' &raquo; ');
        if (is_single()) {
            echo ' &raquo; ' . get_the_title();
        }
    } elseif (is_page()) {
        echo get_the_title();
    } elseif (is_search()) {
        echo __('Search Results', 'guurti');
    } elseif (is_404()) {
        echo __('404 Not Found', 'guurti');
    }
    
    echo '</nav>';
}

/**
 * Multilingual Support Helper
 */
function guurti_get_current_language() {
    // Check if Polylang is active
    if (function_exists('pll_current_language')) {
        return pll_current_language();
    }
    
    // Check if WPML is active
    if (defined('ICL_LANGUAGE_CODE')) {
        return ICL_LANGUAGE_CODE;
    }
    
    // Default to site language
    return substr(get_locale(), 0, 2);
}

/**
 * Custom Excerpt Length
 */
function guurti_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'guurti_excerpt_length');

/**
 * Custom Excerpt More
 */
function guurti_excerpt_more($more) {
    return '... <a href="' . get_permalink() . '">' . __('Read More', 'guurti') . '</a>';
}
add_filter('excerpt_more', 'guurti_excerpt_more');
