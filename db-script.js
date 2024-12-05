const stations = [
  {
    title: "AFN Tokyo",
    location: "Tokyo (Japan)",
    genre: "",
    img: "https://www.radio.net/300/afntokyo.png?version=3371c49c3d16574538eee2a0e4bb4342",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/AFNP_TKO.mp3",
  },
  {
    title: "Nichijou Shuffle",
    location: "Tokyo (Japan)",
    genre: "",
    img: "https://www.radio.net/300/nichijou-shuffle.jpeg?version=e925f0b1de6469fd0e5e236db3e2240c",
    url: "https://node-22.zeno.fm/rbr1kqmcwnhvv?zs=SaqHdTPWRd2r_Drg7OUZpg&rj-ttl=3&rj-tok=AAABgT2I29EAlfr6atKbU5Ff7Q",
  },
  {
    title: "BOX : Japan City Pop",
    location: "Tokyo (Japan)",
    genre: "pop",
    img: "https://dx7vbl8yjmzxy.cloudfront.net/new_images/radioapp_img_osr295191.jpg",
    url: "https://play.streamafrica.net/JapanCityPop",
  },
  {
    title: "Japan Hits - Asia DREAM Radio",
    location: "Tokyo (Japan)",
    genre: "",
    img: "https://www.radio.net/300/asiadream.png?version=54e4f86aa6cba36e212996dc2064edd4",
    url: "https://cast1.torontocast.com:2120/;",
  },
  {
    title: "ビームFM (Beam FM)",
    location: "Tokyo (Japan)",
    genre: "",
    img: "https://static.mytuner.mobi/media/tvos_radios/vs4uqp2uyxcf.png",
    url: "https://ice1.streeemer.com:8020/radio.aac",
  },
  {
    title: "J-Pop Powerplay Kawaii",
    location: "Tokyo (Japan)",
    genre: "",
    img: "https://static.mytuner.mobi/media/tvos_radios/bytgkfy7xy4q.jpg",
    url: "https://kathy.torontocast.com:3060/;",
  },
  {
    title: "BOX : Anime Radio -アニメラジオ",
    location: "Tokyo (Japan)",
    genre: "",
    img: "https://static.mytuner.mobi/media/tvos_radios/045/box-weeb-radio-network-anime.a588a7a6.png",
    url: "https://stream-160.zeno.fm/6rd41zgh2uhvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiI2cmQ0MXpnaDJ1aHZ2IiwiaG9zdCI6InN0cmVhbS0xNjAuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IkItNzNuQktuUXBDMjRyYW5Gd1AxUGciLCJpYXQiOjE3Mjc1OTkyNTIsImV4cCI6MTcyNzU5OTMxMn0.bar5GZ3t5aMEPqsXs9MfpUVooXdEQ30hfkHOgihZ0To",
  },
  {
    title: "Hiroaki FM",
    location: "Tokyo (Japan)",
    genre: "",
    img: "https://static.mytuner.mobi/media/tvos_radios/fde4cbtxjprq.jpg",
    url: "http://cassini.shoutca.st:8000/;",
  },
  {
    title: "Mouv' Classics",
    location: "Paris (France)",
    genre: "",
    img: "https://www.radiofrance.fr/s3/cruiser-production-eu3/2024/08/d840c0d8-c442-465b-b052-3564934ed402/200x200_sc_tunnel-incarne-1400x1400-240818.webp",
    url: "https://icecast.radiofrance.fr/mouvclassics-midfi.mp3",
  },
  {
    title: "France Info",
    location: "Paris (France)",
    genre: "",
    img: "https://www.francetvinfo.fr/assets/common/images/programs/default-square-2c1d8719.jpg",
    url: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3",
  },
  {
    title: "France Bleu Paris",
    location: "Paris (France)",
    genre: "",
    img: "https://www.francebleu.fr/s3/cruiser-production/2023/08/fc204aab-daaa-414e-b9dc-898c1f6fa2cc/400x400_sc_micro-2-paysage.jpg",
    url: "https://icecast.radiofrance.fr/fb1071-lofi.mp3?ID=pd569ib97j",
  },
  {
    title: "Jazz Radio - Groov’up",
    location: "Paris (France)",
    genre: "jazz",
    img: "https://www.jazzradiosuisse.ch/media/option/logo-jazzradio-52715.webp",
    url: "https://jazz-wr13.ice.infomaniak.ch/jazz-wr13-128.mp3",
  },
  {
    title: "FIP",
    location: "Paris (France)",
    genre: "",
    img: "https://www.radiofrance.fr/s3/cruiser-production/2023/12/ac2d2fa9-897e-45de-9443-4752c302c8ea/200x200_sc_2023-fip-tape-3000x3000-v4.webp",
    url: "https://icecast.radiofrance.fr/fip-hifi.aac",
  },
  {
    title: "Nation Radio Scotland",
    location: "Edinburgh",
    genre: "",
    img: "https://mmo.aiircdn.com/677/65ba2f1ab7e15.png",
    url: "http://edge-ads-05-gos2.sharp-stream.com/nationscotlandi.aac",
  },
  {
    title: "Heart Scotland West",
    location: "Edinburgh",
    genre: "",
    img: "https://static.mytuner.mobi/media/tvos_radios/57r5XdxNqR.png",
    url: "https://ice-sov.musicradio.com/HeartGlasgowMP3",
  },
  {
    title: "Capital Edinburgh",
    location: "Edinburgh",
    genre: "",
    img: "https://static.mytuner.mobi/media/tvos_radios/W8PSxxvH4M.png",
    url: "https://media-ice.musicradio.com/CapitalEdinburgh",
  },
  {
    title: "Greatest Hits Non-Stop",
    location: "Edinburgh",
    genre: "",
    img: "https://static.mytuner.mobi/media/tvos_radios/ayywdbzmun4u.png",
    url: "https://s8.myradiostream.com:58238/listen.mp3?nocache=1727598764",
  },
  {
    title: "Pure Radio Scotland",
    location: "Edinburgh",
    genre: "",
    img: "https://static.mytuner.mobi/media/tvos_radios/cyg3vxdsthha.png",
    url: "https://listen-pureradio.sharp-stream.com/pure_radio.mp3?Device=LivePlayer&_=532281&awparams=companionAds%3Atrue&listenerid=8196d2c78a734f244852a3f8bbbecbcb",
  },
  {
    title: "Heart FM London 106.2",
    location: "London",
    genre: "",
    img: "https://static.mytuner.mobi/media/tvos_radios/rFGM25552n.png",
    url: "https://media-ssl.musicradio.com/HeartLondon",
  },
  {
    title: "Capital FM London",
    location: "London",
    genre: "",
    img: "https://static.mytuner.mobi/media/tvos_radios/Drt6RrkVvw.png",
    url: "https://media-ssl.musicradio.com/Capital",
  },
  {
    title: "Smooth Chill",
    location: "London",
    genre: "",
    img: "https://static.mytuner.mobi/media/tvos_radios/Yh9zNuJHt9.png",
    url: "https://media-ssl.musicradio.com/SmoothChill",
  },
  {
    title: "BBC Radio 1",
    location: "London",
    genre: "",
    img: "https://static.mytuner.mobi/media/tvos_radios/BFcU2vjUXh.png",
    url: "https://media-ssl.musicradio.com/SmoothChill",
  },
  {
    title: "WCRX Chicago's Underground Radio",
    location: "Chicago (USA)",
    genre: "",
    img: "https://images.squarespace-cdn.com/content/v1/5a9ec0255417fc5100d91a01/1540853422091-9LSO0RL6MK0IKGD4SE1Z/WCRX_logo_black-01.png?format=1500w",
    url: "https://wcrx.streamguys1.com/live",
  },
  {
    title: "KIIS FM",
    location: "Chicago (USA)",
    genre: "pop",
    img: "https://i.iheart.com/v3/re/assets.brands/6040110a9538edc2d6937e84?ops=gravity(%22center%22),contain(300,300)&quality=80",
    url: "https://n1fb-e2.revma.ihrhls.com/zc849?rj-ttl=5&rj-tok=AAABkjpPB4wAJRqhN_juLlkkuw",
  },
  {
    title: "WBEZ Public Radio",
    location: "Chicago (USA)",
    genre: "",
    img: "https://www.radio.net/300/wbez.png?version=481944b088a9a63d7fd31b41360c1f82",
    url: "https://stream.wbez.org/wbez128.mp3",
  },
  {
    title: "KIIS FM 102.7 ",
    location: "LosAngeles (USA)",
    genre: "pop",
    img: "https://www.radio.net/300/kiis1027.png?version=e404047b12aebfd4b9a7d10b3a70d7ef",
    url: "https://n1fb-e2.revma.ihrhls.com/zc185?rj-ttl=5&rj-tok=AAABkjqaNvgACzlxUsx4RYreUw",
  },
  {
    title: "KTWV The Wave",
    location: "LosAngeles (USA)",
    genre: "",
    img: "https://www.radio.net/300/ktwv.png?version=30b6265bac7737a8577b3fd8c312fd75",
    url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CIWVFM.mp3",
  },
  {
    title: "KOST 103.5",
    location: "LosAngeles (USA)",
    genre: "",
    img: "https://www.radio.net/300/kost1035.png?version=08527f7451341311cd422d0a6a7764d7",
    url: "https://n3eb-e2.revma.ihrhls.com/zc193?rj-ttl=5&rj-tok=AAABkjqdRZQAMErs2jltsr_SjA",
  },
  {
    title: "La Mera Mera 980 AM",
    location: "LosAngeles (USA)",
    genre: "",
    img: "https://www.radio.net/300/la-mera-mera-980-am.png?version=d042589ff993c76aa1473754f44d56f4",
    url: "https://16603.live.streamtheworld.com/KFWBAM_SC",
  },
  {
    title: "Proton Radio",
    location: "LosAngeles (USA)",
    genre: "",
    img: "https://www.radio.net/300/proton.png?version=908c1e35b1d37125bce84e1592ad83fe",
    url: "https://shoutcast.protonradio.com/stream",
  },
  {
    title: "KLAA Angels Radio AM 830",
    location: "LosAngeles (USA)",
    genre: "",
    img: "https://www.radio.net/300/klaa-angels-radio-am-830.jpeg?version=9120c62301e0ff42b1e9555907e4f424",
    url: "https://klaa.streamguys1.com/live",
  },
  {
    title: "Radio Seribatu - Komodo",
    location: "Bali",
    genre: "",
    img: "https://www.radio.net/300/seribatukomodo.jpeg?version=3cf18161ecdc32b15f6d50ee56c39dae",
    url: "https://komodo.out.airtime.pro:8000/komodo_a",
  },
  {
    title: "Phoenix Radio Bali",
    location: "Bali",
    genre: "",
    img: "https://www.radio.net/300/phoenixradiobaliid.png?version=38f617131fe7083ec3eb6a4bd3f3495a",
    url: "https://live.phoenixradiobali.com:8250/phoenixradio",
  },
  {
    title: "Blender Beats",
    location: "Sydney (Australia)",
    genre: "",
    img: "https://www.radio.net/300/hitblenderbeats.jpeg?version=fbdadaecf94c99763bed4edcd3118562",
    url: "https://legacy.scahw.com.au/2blenderbeats_32",
  },
  {
    title: "2UE 954 & DAB +",
    location: "Sydney (Australia)",
    genre: "",
    img: "https://www.radio.net/300/2ue.png?version=584f6097647c9c8294a17c71b131fc57",
    url: "https://23203.live.streamtheworld.com/ACE_2UEAAC.aac?dist=cra_radioapp",
  },
  {
    title: "Nova 96.9",
    location: "Sydney (Australia)",
    genre: "",
    img: "https://www.radio.net/300/nova-969-fm.png?version=fac796e6212d8acf96cdd80fa39a8827",
    url: "https://21363.live.streamtheworld.com/NOVA_969_AAC48.aac?src=digitalradioplus-com-au",
  },
  {
    title: "ItaliaFM",
    location: "Sydney (Australia)",
    genre: "pop, rock",
    img: "https://www.radio.net/300/italiafm.png?version=9ad84395a7bb903bb43bc9b7137a8730",
    url: "http://nebula.shoutca.st:9273/stream",
  },
  {
    title: "K100.5 Kaninn",
    location: "Iceland",
    genre: "",
    img: "https://www.radio.net/300/k1005.png?version=91f2e2754150a8ff12b93eefa3c613b1",
    url: "https://ice-11.spilarinn.is/kaninnmobile",
  },
  {
    title: "Flashback 70s",
    location: "Reykjavík, Iceland",
    genre: "pop",
    img: "",
    url: "https://ice-11.spilarinn.is/70flashback",
  },
  {
    title: "Létt Bylgjan",
    location: "Reykjavík, Iceland",
    genre: "",
    img: "https://www.radio.net/300/lettbylgjan.png?version=47678d65dd271d55cec3dae15da6460e",
    url: "https://icecast.visir.is/orbLettBylgjan.aac",
  },
  {
    title: "X-id 97.7 FM",
    location: "Iceland",
    genre: "rock",
    img: "https://www.radio.net/300/xid977.png?version=ee369857c562c7ec4c8aba1861f4c894",
    url: "https://icecast.visir.is/orbXid.aac",
  },
  {
    title: "Gull Bylgjan",
    location: "Iceland",
    genre: "old",
    img: "https://www.radio.net/300/gullbylgjan.png?version=f960b78e35d290f3cbda9a4ef94919cc",
    url: "https://icecast.visir.is/orbGullBylgjan.aac",
  },
  {
    title: "KissFM 104.5",
    location: "Iceland",
    genre: "",
    img: "",
    url: "https://ice-11.spilarinn.is/kissfm",
  },
  {
    title: "Russkoe Radio",
    location: "Moskow (Russia)",
    genre: "pop",
    img: "https://www.radio.net/300/russkoe.png?version=b8cc1806e61f5ccbf62815017a1b5a49",
    url: "https://rusradio.hostingradio.ru/rusradio96.aacp",
  },
  {
    title: "Radio Chanson",
    location: "Moskow (Russia)",
    genre: "old",
    img: "https://www.radio.net/300/chansonru.png?version=f4a34774252dfaf84660f3817ae48a80",
    url: "https://chanson.hostingradio.ru:8041/chanson128.mp3",
  },
  {
    title: "Europa Plus",
    location: "Moskow (Russia)",
    genre: "pop",
    img: "https://www.radio.net/300/europaplusru.png?version=486cf93ef4a9d83fcd137f71d56fd567",
    url: "https://ep256.hostingradio.ru:8052/europaplus256.mp3",
  },
  {
    title: "Humor FM",
    location: "Moskow (Russia)",
    genre: "talk",
    img: "https://www.radio.net/300/humorfmnonstop.png?version=ddbea258c501ebc6d6d73adf9296f161",
    url: "https://ic4.101.ru:8000/stream/air/aac/64/102",
  },
  {
    title: "AvtoRadio",
    location: "Moskow (Russia)",
    genre: "pop",
    img: "https://www.radio.net/300/avtoradioru.png?version=77eed818ddb5733638ca205023f668a2",
    url: "https://ic7.101.ru:8000/v3_1",
  },
  {
    title: "DFM Club",
    location: "Moskow (Russia)",
    genre: "electro",
    img: "https://www.radio.net/300/dfmclub.png?version=611241f105f1a90f4da6e48a2ad412ce",
    url: "https://dfm-dfmclub.hostingradio.ru/dfmclub96.aacp",
  },
  {
    title: "Radio Kiss Kiss",
    location: "Rome (Italy)",
    genre: "",
    img: "https://www.prfm.ru/logo/kiss-kiss-130.jpg",
    url: "https://kisskiss.fluidstream.eu/KissKiss.aac",
  },
  {
    title: "RDS",
    location: "Rome (Italy)",
    genre: "",
    img: "https://www.radio.net/300/rds.png?version=f0c654cd114373b5b308e0551826a7fe",
    url: "https://icstream.rds.radio/rds",
  },
  {
    title: "ITALIAN RADIO - Only (romantic)",
    location: "Rome (Italy)",
    genre: "romantic",
    img: "https://www.radio.net/300/italianradioromantic.png?version=f3a38134fc6266d6915ccb0e6574b15e",
    url: "https://italianradio.streamingmedia.it/play",
  },
  {
    title: "Radio Dancefloor 90s",
    location: "Rome (Italy)",
    genre: "old",
    img: "https://www.radio.net/300/dancefloor90s.png?version=a32b2862f481e8d56021af746c032330",
    url: "https://audio.radiodancefloor.it/dancefloor.mp3",
  },
  {
    title: "Radio Mambo",
    location: "Rome (Italy)",
    genre: "",
    img: "https://www.radio.net/300/mambo.png?version=1fecd09f878d3d9a1f7d8e8ecfae860e",
    url: "https://mambo.newradio.it/stream",
  },
  {
    title: "Radio Globo",
    location: "Rome (Italy)",
    genre: "pop",
    img: "https://www.radio.net/300/globo.png?version=782a04ac78fb3a14faefb36862b2ef11",
    url: "https://globo.newradio.it/globorm64",
  },
  {
    title: "KISS FM España",
    location: "Madrid (Spain)",
    genre: "pop",
    img: "https://www.radio.net/300/kissfmes.png?version=2cf98f63a49bb70efecaee465bbeb4ea",
    url: "https://bbkissfm.kissfmradio.cires21.com/bbkissfm.mp3?wmsAuthSign=c2VydmVyX3RpbWU9MDkvMjkvMjAyNCAxMDowNToxOSBBTSZoYXNoX3ZhbHVlPXE3MjBUMTEvTUpjbzBSMDBHYjI4UWc9PSZ2YWxpZG1pbnV0ZXM9MTQ0MCZpZD0zNjExNzcwOTU=",
  },
  {
    title: "Los 40 Principales España",
    location: "Madrid (Spain)",
    genre: "pop",
    img: "https://www.radio.net/300/los-40-principales.jpeg?version=a5ce66441a9b318c18d305d7e2db413e",
    url: "https://28023.live.streamtheworld.com/LOS40AAC.aac",
  },
  {
    title: "Los 40 Urban",
    location: "Madrid (Spain)",
    genre: "",
    img: "https://static.mytuner.mobi/media/tvos_radios/wjjjFDCWEd.jpg",
    url: "https://23603.live.streamtheworld.com/LOS40_URBANAAC.aac",
  },
  {
    title: "CADENA 100",
    location: "Madrid (Spain)",
    genre: "pop",
    img: "https://www.radio.net/300/cadena100.png?version=4694f826cc2861848c5e1ec1ec3b4907",
    url: "https://cadena100-cope-rrcast.flumotion.com/cope/cadena100.mp3",
  },
  {
    title: "Radio Marca Nacional",
    location: "Madrid (Spain)",
    genre: "",
    img: "https://www.radio.net/300/radiomarcanacional.png?version=3da59912437c02c1bd03674d11f72255",
    url: "https://24363.live.streamtheworld.com/RADIOMARCA_NACIONAL.mp3?dist=radioes",
  },
  {
    title: "Los 40 Classic",
    location: "Madrid (Spain)",
    genre: "",
    img: "https://cdn.instant.audio/images/logos/emisora-org-es/los40classic.png",
    url: "https://27863.live.streamtheworld.com/LOS40_CLASSICAAC.aac",
  },
];

import { MongoClient } from "mongodb";

// Define the MongoDB connection URL
const url = 'mongodb://localhost:27017'; // Update with your database URL
const dbName = 'Family-radio'; // Replace with your database name

// Connect to MongoDB
async function run() {
    const client = new MongoClient(url);

    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB');

        // Access the database and collection
        const db = client.db(dbName);
        const collection = db.collection('stations'); // Replace with your collection name

        // Insert multiple objects into the collection
        const result = await collection.insertMany(stations);
        console.log('Inserted documents:', result.insertedIds);
    } catch (err) {
        console.error('Error inserting documents:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Run the function
run().catch(console.error);