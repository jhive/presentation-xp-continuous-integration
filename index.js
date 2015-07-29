// Configure Reveal
// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    overview: false,
    progress: true,
    history: true,
    keyboard:true,
    center: true,
    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none
    // Optional libraries used to extend on reveal.js
    dependencies: [
      {
        src: 'bower_components/reveal.js/lib/js/classList.js',
        condition: function() { return !document.body.classList; }
      },
    {
      src: 'bower_components/reveal.js/plugin/markdown/marked.js',
      condition: function() {
        return !!document.querySelector( '[data-markdown]' );
      }
    },
      {
        src: 'bower_components/reveal.js/plugin/markdown/markdown.js',
        condition: function() {
          return !!document.querySelector( '[data-markdown]' );
        }
      },
      {
        src: 'bower_components/reveal.js/plugin/remotes/remotes.js',
        async: true
      },
    {
      src: 'bower_components/reveal.js/plugin/highlight/highlight.js',
      async: true,
      callback: function() {
        hljs.initHighlightingOnLoad();
      }
    },
      {
        src: 'bower_components/reveal.js/plugin/zoom-js/zoom.js',
        async: true,
        condition: function() {
          return !!document.body.classList;
        }
      },
      {
        src: 'bower_components/reveal.js/plugin/leap/leap.js',
        async: true
      },
      {
        src: 'js/loadhtmlslides.js',
        condition: function() {
          return !!document.querySelector( '[data-html]' );
        }
      }]
});
