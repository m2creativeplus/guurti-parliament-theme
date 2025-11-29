<?php
/**
 * The front page template
 *
 * @package Guurti
 */

get_header();
?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="container">
        <h1><?php _e('Golaha Guurtida Jamhuuriyadda Somaliland', 'guurti'); ?></h1>
        <p><?php _e('House of Elders - The Upper Chamber of the Parliament of Somaliland', 'guurti'); ?></p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="<?php echo esc_url(home_url('/about')); ?>" class="btn btn-primary">
                <?php _e('About the Guurti', 'guurti'); ?>
            </a>
            <a href="<?php echo esc_url(home_url('/members')); ?>" class="btn btn-outline">
                <?php _e('View Members', 'guurti'); ?>
            </a>
        </div>
    </div>
</section>

<div class="content-area">
    <div class="container">
        
        <!-- Quick Links -->
        <section style="margin-bottom: 3rem;">
            <h2><?php _e('Quick Links', 'guurti'); ?></h2>
            <div class="card-grid">
                <div class="card">
                    <h3><?php _e('Committees', 'guurti'); ?></h3>
                    <p><?php _e('View all parliamentary committees and their work.', 'guurti'); ?></p>
                    <a href="<?php echo esc_url(home_url('/committees')); ?>" class="btn btn-primary">
                        <?php _e('View Committees', 'guurti'); ?>
                    </a>
                </div>
                
                <div class="card">
                    <h3><?php _e('Legislation', 'guurti'); ?></h3>
                    <p><?php _e('Access current bills and laws under review.', 'guurti'); ?></p>
                    <a href="<?php echo esc_url(home_url('/legislation')); ?>" class="btn btn-primary">
                        <?php _e('View Legislation', 'guurti'); ?>
                    </a>
                </div>
                
                <div class="card">
                    <h3><?php _e('Documents', 'guurti'); ?></h3>
                    <p><?php _e('Access official documents and reports.', 'guurti'); ?></p>
                    <a href="<?php echo esc_url(home_url('/documents')); ?>" class="btn btn-primary">
                        <?php _e('View Documents', 'guurti'); ?>
                    </a>
                </div>
                
                <div class="card">
                    <h3><?php _e('Calendar', 'guurti'); ?></h3>
                    <p><?php _e('View upcoming sessions and events.', 'guurti'); ?></p>
                    <a href="<?php echo esc_url(home_url('/calendar')); ?>" class="btn btn-primary">
                        <?php _e('View Calendar', 'guurti'); ?>
                    </a>
                </div>
            </div>
        </section>
        
        <!-- Latest News -->
        <section style="margin-bottom: 3rem;">
            <h2><?php _e('Latest News', 'guurti'); ?></h2>
            <div class="card-grid">
                <?php
                $news_query = new WP_Query(array(
                    'post_type' => 'news',
                    'posts_per_page' => 3,
                ));
                
                if ($news_query->have_posts()) :
                    while ($news_query->have_posts()) : $news_query->the_post();
                ?>
                    <div class="card">
                        <?php if (has_post_thumbnail()) : ?>
                            <div style="margin-bottom: 1rem;">
                                <?php the_post_thumbnail('guurti-thumbnail'); ?>
                            </div>
                        <?php endif; ?>
                        <h3><?php the_title(); ?></h3>
                        <p class="text-muted"><?php echo get_the_date(); ?></p>
                        <?php the_excerpt(); ?>
                        <a href="<?php the_permalink(); ?>" class="btn btn-outline">
                            <?php _e('Read More', 'guurti'); ?>
                        </a>
                    </div>
                <?php
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>
        </section>
        
        <!-- Upcoming Events -->
        <section>
            <h2><?php _e('Upcoming Events', 'guurti'); ?></h2>
            <div class="card-grid">
                <?php
                $events_query = new WP_Query(array(
                    'post_type' => 'event',
                    'posts_per_page' => 3,
                    'meta_key' => '_event_date',
                    'orderby' => 'meta_value',
                    'order' => 'ASC',
                ));
                
                if ($events_query->have_posts()) :
                    while ($events_query->have_posts()) : $events_query->the_post();
                ?>
                    <div class="card">
                        <h3><?php the_title(); ?></h3>
                        <?php
                        $event_date = get_post_meta(get_the_ID(), '_event_date', true);
                        if ($event_date) :
                        ?>
                            <p class="text-muted">
                                <?php echo date_i18n(get_option('date_format'), strtotime($event_date)); ?>
                            </p>
                        <?php endif; ?>
                        <?php the_excerpt(); ?>
                        <a href="<?php the_permalink(); ?>" class="btn btn-outline">
                            <?php _e('View Details', 'guurti'); ?>
                        </a>
                    </div>
                <?php
                    endwhile;
                    wp_reset_postdata();
                else :
                ?>
                    <p><?php _e('No upcoming events at this time.', 'guurti'); ?></p>
                <?php endif; ?>
            </div>
        </section>
        
    </div>
</div>

<?php
get_footer();
