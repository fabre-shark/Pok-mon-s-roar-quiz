var masterlist = {};
function getCSV(onload){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "pokemon_status.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
	
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function(){
        convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
        onload();
    }
}

// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        var record = tmp[i].split(',');
        var id = record[0];
        if (/^\d+$/.test(id)){
            masterlist[id] = {
                name: record[1]
            }
        }
    }

    console.log(masterlist);
}
