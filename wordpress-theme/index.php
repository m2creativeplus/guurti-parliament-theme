<?php
/**
 * The main template file
 *
 * @package Guurti
 */

get_header();
?>

<div class="content-area">
    <div class="container">
        <?php if (have_posts()) : ?>
            
            <div class="page-header">
                <h1 class="page-title">
                    <?php
                    if (is_home() && !is_front_page()) :
                        single_post_title();
                    elseif (is_archive()) :
                        the_archive_title();
                    elseif (is_search()) :
                        printf(__('Search Results for: %s', 'guurti'), get_search_query());
                    else :
                        _e('Latest Updates', 'guurti');
                    endif;
                    ?>
                </h1>
                
                <?php
                if (is_archive()) :
                    the_archive_description('<div class="archive-description">', '</div>');
                endif;
                ?>
            </div>
            
            <div class="card-grid">
                <?php
                while (have_posts()) :
                    the_post();
                    get_template_part('template-parts/content', get_post_type());
                endwhile;
                ?>
            </div>
            
            <?php
            the_posts_pagination(array(
                'mid_size'  => 2,
                'prev_text' => __('&laquo; Previous', 'guurti'),
                'next_text' => __('Next &raquo;', 'guurti'),
            ));
            ?>
            
        <?php else : ?>
            
            <div class="page-header">
                <h1 class="page-title"><?php _e('Nothing Found', 'guurti'); ?></h1>
            </div>
            
            <div class="card">
                <p><?php _e('It seems we can\'t find what you\'re looking for.', 'guurti'); ?></p>
                <?php get_search_form(); ?>
            </div>
            
        <?php endif; ?>
    </div>
</div>

<?php
get_footer();
