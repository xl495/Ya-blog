<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>

<footer id="footer" class="footer" role="contentinfo">
    &copy; <?php echo date('Y'); ?> <a href="<?php $this->options->siteUrl(); ?>"><?php $this->options->title(); ?></a>.
    <?php _e('由 <a href="http://www.typecho.org">Typecho</a> 强力驱动'); ?>.
</footer>

<?php $this->footer(); ?>
<script src="https://unpkg.com/vue@next"></script>
<script src="<?php $this->options->themeUrl('./dist/main.js'); ?>"></script>

</body>

</html>