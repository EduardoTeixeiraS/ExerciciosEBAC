module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: { // Configurando o plugin de compilação do LESS
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less' // 'Arquivo destino': 'Arquivo origem'
                }
            },
            production: { // Configurando o ambiente de produção (ambiente final)
                options: {
                    compress: true // Comprimir o arquivo
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less' // 'Arquivo destino': 'Arquivo origem'
                }
            }
        },
        uglify: { // Configurando o plugin de minificação do Js
            target: {
                files: { 
                    'dist/scripts/main.min.js': 'src/scripts/main.js' // 'Arquivo destino': 'Arquivo origem'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less'); //Plugin para compilar LESS
    grunt.loadNpmTasks('grunt-contrib-uglify'); //Plugin para minificar o JavaScript
    grunt.loadNpmTasks('grunt-contrib-watch'); //Plugin que observa as mudanças de determinado arquivo

    grunt.registerTask('default', ['watch']); //Adicionando funções para a função default
    grunt.registerTask('build', ['less:production', 'uglify']); // Comandos para a build
}