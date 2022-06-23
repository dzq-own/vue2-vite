const pkg = require('./package.json');

process.env.VUE_APP_NAME = pkg.name;
process.env.VUE_APP_VERSION = pkg.version;
process.env.VUE_APP_DESCRIPTION = pkg.description;

const name = pkg.name;

const dayjs = require('dayjs')

const FileManagerPlugin = require('filemanager-webpack-plugin');

const createTime = dayjs().format('YYYY-MM-DD_HH_mm')

process.env.VUE_APP_CREATE_TIME = createTime;

const path = require('path');//引入path模块
function resolve(dir) {
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}


module.exports = {
    publicPath: './',
    css: {
        extract: true,
        modules: false,
        loaderOptions: {

        }
    },
    runtimeCompiler: true,
    devServer: {
        port: 8080,
        proxy: {

        },
    },
    chainWebpack: config => {// 简写路径
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@api', resolve('src/api'))
            .set('@utils', resolve('src/utils'))
    },
    configureWebpack: {
        plugins: [
            new FileManagerPlugin({
                events: {
                    onEnd: {
                        delete: [
                            './' + name + ".zip"
                        ],
                        copy: [
                            {
                                source: './src/version.txt',
                                destination: './dist/' + pkg.version + "_time_" + createTime
                            }
                        ],
                        archive: [
                            {
                                source: './dist',
                                destination: './' + name + ".zip"
                            }
                        ]
                    }
                }
            })
        ]
    }
};
