<?php
/**
 * Template part for displaying posts
 *
 * @package Guurti
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('card'); ?>>
    <?php if (has_post_thumbnail()) : ?>
        <div class="post-thumbnail">
            <a href="<?php the_permalink(); ?>">
                <?php the_post_thumbnail('guurti-thumbnail'); ?>
            </a>
        </div>
    <?php endif; ?>
    
    <header class="entry-header">
        <?php
        the_title('<h3 class="entry-title"><a href="' . esc_url(get_permalink()) . '">', '</a></h3>');
        ?>
        
        <div class="entry-meta">
            <span class="posted-on">
                <time datetime="<?php echo get_the_date('c'); ?>">
                    <?php echo get_the_date(); ?>
                </time>
            </span>
        </div>
    </header>
    
    <div class="entry-summary">
        <?php the_excerpt(); ?>
    </div>
    
    <footer class="entry-footer">
        <a href="<?php the_permalink(); ?>" class="btn btn-outline btn-sm">
            <?php _e('Read More', 'guurti'); ?>
        </a>
    </footer>
</article>
