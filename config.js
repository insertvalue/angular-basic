/**
 * Created by hongdian on 2014/12/23.
 * 配置文件
 */
var config = {
    host: 'localhost',
    // 程序运行的端口
    port: 4000,

    // mongodb 配置
    db: 'mongodb://127.0.0.1/mongo_test',
    db_name: 'ordering_system',

    session_secret: process.env.SESSION_SECRET || 'SESSION_SECRET',
    cookie_secret: process.env.COOKIE_SECRET || 'COOKIE_SECRET',
    auth_cookie_name: process.env.AUTH_COOKIE_NAME || 'canku_secret',
    login_path: '/user/login',//用户登录地址
    time_zone: 8,//时区，不般不用改
    admin_user_email: process.env.ADMIN_USER_EMAIL || 'admin@admin.com',//默认超级管理员的邮箱地址
    nodeMailer: {
        host: "smtp.126.com",
        service: "126",
        from: "node_test_mail@126.com",
        auth: {
            user: "node_test_mail@126.com",
            pass: "admin123"
        }
    },
    upload_path: "D:/node_upload",
    img_server: "http://172.16.22.19:8000",
    email_templ_pwd: ""
}

exports.config = config;