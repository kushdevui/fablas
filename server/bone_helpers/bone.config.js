/**
 * Config for HELPERS
 * 
 */

const database_name = `fabalas`;
const DB_HOSTNAME = `localhost`;
const DB_PORT = 21105;
const USER = "kush1";
const PASSWORD = "Beat@2019";
const url = `mongodb://${USER}:${PASSWORD}@ds121105.mlab.com:21105/fabalas`;




export default {
    //mongodb://<dbuser>:<dbpassword>@ds121105.mlab.com:21105/fabalas
    "connectionString" : url,
    "successMsg" : "Database Connection SUCCESS!!!",
    "errorMsg" : "MONGO CONNECTION ERROR!!",
    "secret" : "BONY BONY FLUFF. PEOPLE CRY TO BUTTS. THIS IS MY SECRET. BLessed Old Gods. MINGLE mingle.... !!!!!! TO TO TOT TOTO x0x0 366 leapy!!"
}