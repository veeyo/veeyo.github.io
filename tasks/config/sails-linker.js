/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 *    https://github.com/Zolmeister/grunt-sails-linker
 *
 */
module.exports = function(grunt) {

  grunt.config.set('sails-linker', {
    devJs: {
      options: {
        startTag: '<!-- inject:js start -->',
        endTag: '<!-- inject:js end -->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp'
      },
      files: {
        '.tmp/**/*.html': require('../pipeline').jsFilesToInject
      }
    },

    devStyles: {
      options: {
        startTag: '<!-- inject:css start -->',
        endTag: '<!-- inject:css end -->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp'
      },
      files: {
        '.tmp/**/*.html': require('../pipeline').cssFilesToInject
      }
    },

    distJs: {
      options: {
        startTag: '<!-- inject:js start -->',
        endTag: '<!-- inject:js end -->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp'
      },
      files: {
        '.tmp/**/*.html': require('../pipeline').jsFilesToInject
      }
    },

    distStyles: {
      options: {
        startTag: '<!-- inject:css start -->',
        endTag: '<!-- inject:css end -->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp'
      },
      files: {
        '.tmp/**/*.html': require('../pipeline').cssFilesToInject
      }
    }
  });

  grunt.loadNpmTasks('grunt-sails-linker');
};
