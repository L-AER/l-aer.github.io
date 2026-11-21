<script>
document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        document.querySelectorAll('.lang-btn').forEach((b) => {
            b.classList.toggle('is-active', b === btn);
        });
        document.querySelectorAll('.bio-copy').forEach((panel) => {
            const match = panel.dataset.langPanel === lang;
            panel.hidden = !match;
            panel.classList.toggle('is-active', match);
        });
    });
});
</script>
