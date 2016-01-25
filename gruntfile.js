module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '320',
            height: '240',
            suffix: '_small',
            quality: 40
          },{
            name: 'medium',
            width: '640',
            suffix: '_medium',
            quality: 50
          },{
            name: 'large',
            width: '1024',
            suffix: "large",
            quality: 90
        }]},
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'img/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};