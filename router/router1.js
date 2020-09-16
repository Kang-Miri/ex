module.exports = function(app){
    var bodyParser = require("body-parser");
    var urlencodeParser = bodyParser.urlencoded({extended:false});
    var mysql = require("mysql2");

    var conn_info = {
        host :"localhost",
        port : 3320,
        user : "root",
        password : "1234",
        database : "cobweb"
    };

    let conn = mysql.createConnection(conn_info);

    conn.connect(function(err){
        if(err){
            console.log('접속오류');
            console.log(err);
        }else{
            console.log('접속성공');
            let sql1 = "insert into custommers (user_code, user_name,user_id, user_pwd) values ?";
            let input_data1 = [1,"강미리","miri","miri"];
            conn.query(sql1, [input_data1], (err, result)=>{
                console.log("저장완료");
            });
            conn.end();
        }
    });

    app.get("/",function(req,res){
        res.render("root_login.html");
    });
}