const { log } = require("async");
const { expand } = require("braces");
const { file } = require("grunt");
const { flatten } = require("lodash");
const { match } = require("micromatch");
const { clean } = require("underscore.string");

module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    "./dev/style/main.css" : "./src/style/main.less"
                }
            },
            production: {
                options:{
                    compress: true,
                },
                files: {
                    "./dist/style/main.min.css" : "./src/style/main.less"
                }
            }
        },
        // Watch
        watch: {
            less: {
                files:["./src/style/**/*.less"], // OS ** indicam qualquer pasta de ser observados e, o * indica que qualquer arquivos deve ser observados.
                tasks: ["less:development"]
            },
            html:{
                files:['src/index.html'],
                tasks: ['replace:dev']
            }
        },

        //Replace
        replace:{
            // Development
            dev:{
                options:{
                    patterns:[
                        {
                            match:"CSS_ADDRESS",
                            replacement:"./style/main.css"
                        },
                        {
                            match:"JS_ADDRESS",
                            replacement:"../src/script/main.js"
                        }
                    ]
                },
                files:[
                    {
                       expand:true,
                       flatten:true,
                       src: ['src/index.html'],
                       dest:"dev/" 
                    }
                ]
            },
            // Production
            dist:{
                options:{
                    patterns:[
                        {
                            match:"CSS_ADDRESS",
                            replacement:"./style/main.min.css"
                        },
                        {
                            match:"JS_ADDRESS",
                            replacement:"./script/main.min.js"
                        }
                    ]
                },
                files:[
                    {
                       expand:true,
                       flatten:true,
                       src: ['prebuild/index.html'],
                       dest:"dist/" 
                    }
                ]
            }
        },

        // Minificação do index.html
        htmlmin:{
            dist:{
                options:{
                    removeComments:true,
                    collapseWhitespace:true
                },
                files:{
                    'prebuild/index.html' : 'src/index.html'
                }
            }
        },

        // Deleta a pasta. Pasta na nuvem tem problema de permisão para deletar. Não consegui resolver.
        clean: ['prebuild'],
        
        // Minifica o arquivo main.js
        uglify:{
            target:{
                files:{
                    'dist/script/main.min.js' : 'src/script/main.js'
                }
            }
        }
    });
    
    // Carregas os pacotes
    grunt.loadNpmTasks("grunt-contrib-less")
    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks("grunt-replace")
    grunt.loadNpmTasks("grunt-contrib-htmlmin")
    grunt.loadNpmTasks("grunt-contrib-clean")
    grunt.loadNpmTasks("grunt-contrib-uglify")
    
    grunt.registerTask("tarefa1",function(){
        const mensage = "Olá grunt"
        console.log(mensage)
    })

    // grunt.registerTask("default", ["tarefa1" , "less"]) // Executa as duas tarefas ao mesmo tempo.
    grunt.registerTask("default", ["watch"])
    grunt.registerTask("build", ["less:production","htmlmin:dist","replace:dist","clean", "uglify"])
    

}