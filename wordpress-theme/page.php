<?php
/**
 * The template for displaying all pages
 *
 * @package Guurti
 */

get_header();
?>

<div class="content-area">
    <div class="container">
        <?php
        while (have_posts()) :
            the_post();
        ?>
            
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="page-header">
                    <?php guurti_breadcrumbs(); ?>
                    <h1 class="page-title"><?php the_title(); ?></h1>
                </header>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div class="featured-image">
                        <?php the_post_thumbnail('guurti-featured'); ?>
                    </div>
                <?php endif; ?>
                
                <div class="entry-content">
                    <?php
                    the_content();
                    
                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . __('Pages:', 'guurti'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>
                
                <?php if (get_edit_post_link()) : ?>
                    <footer class="entry-footer">
                        <?php
                        edit_post_link(
                            sprintf(
                                __('Edit %s', 'guurti'),
                                '<span class="screen-reader-text">' . get_the_title() . '</span>'
                            ),
                            '<span class="edit-link">',
                            '</span>'
                        );
                        ?>
                    </footer>
                <?php endif; ?>
            </article>
            
        <?php
        endwhile;
        ?>
    </div>
</div>

<?php
get_footer();
