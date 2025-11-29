<?php
/**
 * The footer for the Guurti theme
 *
 * @package Guurti
 */
?>

</main><!-- #main-content -->

<footer class="site-footer" role="contentinfo">
    <div class="container">
        <div class="footer-widgets">
            <?php if (is_active_sidebar('footer-1')) : ?>
                <div class="footer-column">
                    <?php dynamic_sidebar('footer-1'); ?>
                </div>
            <?php endif; ?>
            
            <?php if (is_active_sidebar('footer-2')) : ?>
                <div class="footer-column">
                    <?php dynamic_sidebar('footer-2'); ?>
                </div>
            <?php endif; ?>
            
            <?php if (is_active_sidebar('footer-3')) : ?>
                <div class="footer-column">
                    <?php dynamic_sidebar('footer-3'); ?>
                </div>
            <?php endif; ?>
            
            <?php if (is_active_sidebar('footer-4')) : ?>
                <div class="footer-column">
                    <?php dynamic_sidebar('footer-4'); ?>
                </div>
            <?php endif; ?>
        </div>
        
        <div class="site-info">
            <p>
                &copy; <?php echo date('Y'); ?> 
                <?php _e('Golaha Guurtida Jamhuuriyadda Somaliland', 'guurti'); ?> - 
                <?php _e('House of Elders of the Republic of Somaliland', 'guurti'); ?>
            </p>
            <p>
                <?php _e('All Rights Reserved', 'guurti'); ?> | 
                <a href="<?php echo esc_url(home_url('/privacy-policy')); ?>">
                    <?php _e('Privacy Policy', 'guurti'); ?>
                </a> | 
                <a href="<?php echo esc_url(home_url('/accessibility')); ?>">
                    <?php _e('Accessibility', 'guurti'); ?>
                </a>
            </p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
