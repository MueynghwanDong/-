var mqtt=require('mqtt');
var Topic='#';
var Broker_URL= 'mqtt://70.12.247.88';
var Database_URL='70.12.247.91';

var options={
    clientId: 'MyMQTT',
    port:1883,
    username: 'mqtt_user',
    password: 'mqtt_password',
    keepalive: 60
};

var client=mqtt.connect(Broker_URL,options);
client.on('connect',mqtt_connect);
client.on('reconnect',mqtt_reconnect);
client.on('error',mqtt_error);
client.on('message',mqtt_messageReceived);
client.on('close',mqtt_close);

function mqtt_connect(){
    //console.log("Connecting MQTT");
    client.subscribe(Topic,mqtt_subscribe);
}

function mqtt_subscribe(err,granted){
    console.log("Subscribed to "+Topic);
    if (err) {console.log(err);}
}

function mqtt_reconnect(err){
    //console.log("Reconnect MQTT");
    //if (err) {console.log(err);}
    client = mqtt.connect(Broker_URL,options);
}

function mqtt_error(err){
    //console.log("Error");
    //if(err){console.log(err);}
}

function after_publish(){
    //do nothing
}

function mqtt_messageReceived(topic,message_str, packet){
    // var message_str=message.toString(); // convert byte array to string
    // message_str=message_str.replace(/\n$/,''); //remove new line
    // //payload syntax: clientID,topic,message
    // if(countInstances(message_str)!=1){
    //     console.log("Invalid payload");
    // }else{
        insert_message(topic,message_str,packet);
    // }
}

function mqtt_close(){
    //console.log("Close MQTT");
}

//////////////////////////////////////////////////
//////////////////// MYSQL ///////////////////////
//////////////////////////////////////////////////
var mysql=require('mysql');

var connection = mysql.createConnection({
    host: Database_URL,
    user: 'root',
    password : 'mysql',
    database : 'ptj_sub1'
});

connection.connect(function(err){
    if (err) throw err;
    //console.log("Database Connected!");
});

//insert a row into the tbl_messages table
function insert_message(topic,message_str,packet){
    var message_arr=extract_string(message_str);
    var bodyTemperature=message_arr[0];
    var heartRate=message_arr[1];
    var stepCount=message_arr[2];
    var sql = "INSERT INTO livestock(??, ??, ??,??) VALUES (?,?,?,?)";
    var params=['body_temperature', 'heart_rate', 'step_count', bodyTemperature, heartRate,stepCount];
    sql=mysql.format(sql,params);
    connection.query(sql,function(error,results){
        if(error) throw error;
        console.log("1 record inserted");
    });};

function extract_string(message_str){
    var message_arr=message_str.toString().split(" ");
    return message_arr;
};


function countInstances(message_str){
    var substrings=message_str.split(" ");
    return substrings.length-1;
};