<?php
/**
 * The template for displaying all single posts
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
                <header class="entry-header">
                    <?php guurti_breadcrumbs(); ?>
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                    
                    <div class="entry-meta">
                        <span class="posted-on">
                            <time datetime="<?php echo get_the_date('c'); ?>">
                                <?php echo get_the_date(); ?>
                            </time>
                        </span>
                        <span class="byline">
                            <?php _e('by', 'guurti'); ?> <?php the_author(); ?>
                        </span>
                        <?php if (has_category()) : ?>
                            <span class="cat-links">
                                <?php _e('in', 'guurti'); ?> <?php the_category(', '); ?>
                            </span>
                        <?php endif; ?>
                    </div>
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
                
                <footer class="entry-footer">
                    <?php
                    the_tags(
                        '<span class="tags-links">' . __('Tags:', 'guurti') . ' ',
                        ', ',
                        '</span>'
                    );
                    ?>
                </footer>
            </article>
            
            <?php
            // Post navigation
            the_post_navigation(array(
                'prev_text' => '<span class="nav-subtitle">' . __('Previous:', 'guurti') . '</span> <span class="nav-title">%title</span>',
                'next_text' => '<span class="nav-subtitle">' . __('Next:', 'guurti') . '</span> <span class="nav-title">%title</span>',
            ));
            
            // Comments
            if (comments_open() || get_comments_number()) :
                comments_template();
            endif;
            ?>
            
        <?php
        endwhile;
        ?>
    </div>
</div>

<?php
get_footer();
