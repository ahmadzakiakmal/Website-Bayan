import Image from "next/image";
import ComingSoon from "./coming-soon";
import KluMap from "@/../public/KluMap.svg";
import SideDeco from "@/components/SideDeco";
import Footer from "@/components/Footer";
import { HiCursorClick } from "react-icons/hi";
import { useState } from "react";

export default function ProfilePage() {
  const [activeVillage, setActiveVillage] = useState<null | "bayan" | "senaru">(null);
  return (
    <main className="bg-white min-h-screen">
      <section className="z-[1] w-full flex flex-col justify-center items-center relative overflow-x-hidden pt-[160px] px-[5%]">
        <h1
          data-aos="fade-right"
          className="text-[26px] md:text-[31px] pb-[18px] text-green-1 text-center"
        >
          Kenali Desa <strong>Bayan</strong> dan Desa <strong>Senaru</strong>
        </h1>
        <section className="z-[1] w-full flex flex-col lg:flex-row justify-center items-center pb-10">
          <div className="w-[90%] max-w-[450px] mt-5 relative flex flex-col justify-center items-center">
            <div data-aos="fade-left">
              <svg
                className="w-full h-fit"
                width="1492"
                height="1888"
                viewBox="0 0 1492 1888"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M749.5 1884.5L753.5 1887.5L756.5 1881L759.5 1875L765 1865.5L770 1853.5L776 1837.5L784 1828L788.5 1825.5L797 1819.5L802.5 1816.5L814 1812.5L818.5 1808.5L831 1794.5L854.5 1777L860.5 1768.5L862.5 1759L874.5 1738.5L899.5 1692V1687L899 1682L896 1675.5L876 1638.5L872 1634V1625L875 1618.5L876 1614.5L875 1612.5L876 1610.5L881 1606.5L881.5 1601.5L881 1584L868 1553.5L863 1538.5V1528.5L867 1520.5L866.5 1517.5L868.5 1512.5L878 1509L876 1503.5L878.5 1499L881.5 1496.5L886 1495H892.5L895 1493L901 1485L903 1484H906L914 1481V1478L916 1476.5L918 1476L925 1470.5V1465.5L929 1462.5L931.5 1462L938 1455L942 1455.5L943.5 1452L945 1449.5H947L956 1443L960 1435.5V1431L964.5 1421L966.5 1419L974 1414L976 1410V1407L977 1406L979 1405.5V1399.5L981 1395L981.5 1387L984 1381.5L998 1375.5H1001L1004.5 1373L1007 1368L1012.5 1365.5V1360L1015.5 1356L1018.5 1350L1020.5 1344.5L1024 1340L1027 1339.5L1032.5 1333L1034 1332.5L1035.5 1329.5L1038 1324.5L1041 1322L1042.5 1320L1046.5 1315.5L1043.5 1309L1044 1306.5V1302L1041.5 1294.5V1292.5L1043 1288.5L1045.5 1288H1050.5L1052.5 1286.5L1052 1284.5L1052.5 1283L1053.5 1282L1057 1278L1057.5 1276L1061 1273.5H1063.5L1068.5 1269L1070.5 1268L1076.5 1267.5L1078 1263.5L1079.5 1260L1081.5 1258L1085.5 1255.5L1087 1255L1090 1250L1095 1244.5L1098 1242.5L1099.5 1240L1102.5 1238.5L1110.5 1235.5L1113 1233.5L1115.5 1232.5L1116.5 1230.5L1117 1229L1117.5 1227.5L1120.5 1225.5L1125 1222L1131 1219L1132.5 1216L1133 1212.5L1133.5 1207L1131 1203.5L1130 1198.5V1193.5L1133 1191L1138 1190.5V1186.5L1140 1183V1180.5L1136 1176V1174L1140 1169L1139 1164.5V1160.5L1142.5 1157.5L1146 1155.5L1148.5 1154.5L1150 1153.5L1148.5 1150.5L1150.5 1147L1152 1145L1151 1141.5L1150.5 1138L1154 1134L1157 1135L1160 1133.5L1163 1124L1169.5 1122.5L1172.5 1118.5L1175 1106.5L1179.5 1103.5V1097.5L1181 1092L1182.5 1088.5L1181.5 1086L1182 1082.5L1183.5 1079L1184.5 1076L1186.5 1075H1189L1192 1075.5L1195 1076L1196.5 1075.5L1198.5 1074.5H1200.5L1202.5 1075L1204 1075.5H1206L1207 1074.5L1208 1072.5L1208.5 1070L1210 1069L1213 1067L1216.5 1066L1219.5 1064.5L1221 1063.5L1223 1062.5L1226 1060L1228.5 1059.5L1231 1059L1233 1057.5L1234.5 1056L1236 1054.5V1051L1236.5 1049L1237.5 1047.5L1242.5 1045.5L1245 1044.5L1246 1042.5L1246.5 1038.5L1247 1034.5L1248.5 1033L1249.5 1031V1026L1250.5 1023L1252 1021L1254.31 1019.5H1258L1262 1018L1265.5 1016L1268 1014L1269 1012L1268 1010L1266.5 1009L1265 1005.5L1264 1004V1001.5V999L1265.5 996.5L1267 994.5L1266.5 992.5L1267 990L1268.5 987V984.5L1266 981L1266.5 978.5L1268.5 976.5L1274 973.5L1275 971.5L1271.5 967.5L1270 965V962V958L1272 955L1273 951V944.5L1272 939.5L1271 935.5V929L1270 924.5V920.5L1271 918.5L1272 917.5L1276 916.5L1276.5 914.5L1277.5 912L1279.5 907L1282 902L1283 899.5L1283.5 896.5L1285.5 895.5L1287 893L1288.5 890L1289 887.5V885L1290.5 884L1289 882L1288 879.5L1286.5 876.5L1286 874L1287 871L1289 870L1290.5 869.5L1292.5 869L1293.5 867.5V863L1292.5 861V858.5L1294 856.5L1289 853.5L1288 851.5L1288.5 850V848V846L1286.5 841.5V839.5L1287.5 837.5L1288.5 835L1290 833L1292.5 829L1293.5 827L1295 825L1296.5 822.5L1298.5 821L1300.5 820L1302.5 819L1303.5 818.5L1304 817V815.5L1307.5 813.5L1310.5 810L1309.5 809L1309 808V806L1310.5 804.5L1312.5 802.5L1313.5 798V794.5L1314 790L1314.5 787L1315 782.5L1314 779L1313 776.5V773.5L1312.5 769L1311 766L1309 762.5L1307.5 760.5L1305 758L1301 757L1298.5 755.5L1298 753.5L1297 750.5L1295 748L1292.5 742.5L1292 739.5L1291 737.5L1290 736V731V727L1289 724.5V721L1288.5 718L1287 716L1285.5 713V710.5L1286.5 707.5L1287.5 706V702.5L1286.5 699.5L1286 697.5L1286.5 696L1287 694V692.5V689.5L1287.5 687.5L1288 686L1289 683.5V680.5V679L1288.5 676.5V674L1289.5 671.5L1290.5 669L1292.5 667L1295 665L1296.5 664.5L1298 663L1298.5 661.5L1299 658.5L1297.5 657L1296 656.5L1294.5 655L1294 653V652L1295 650.5L1296.5 649L1297.5 646V644L1298 642L1298.5 639V636L1298 633.5L1296.5 630.182L1295 627L1295.5 623.5V619.5L1296.5 617L1298.5 614.5L1297.5 612.5V610.5L1298 608L1300.5 603L1302.5 599.5V598L1301.5 596.5L1299.5 593.5L1297.5 590.5V589L1298 587L1298.5 584.5V583L1297 581.5L1295.5 580.5L1294 578.5L1293.5 577L1294 574L1294.5 572.5L1296.5 570.188L1297.5 567.5L1298 564.5V562L1297.5 558L1296.5 554.5L1295.5 552L1294.5 547.5L1293.5 544.5L1292.5 541L1292 539.5L1291 538L1289.5 536.5L1289 534.5L1289.5 532L1290.5 530L1291.5 529V526.5L1292 525L1294 522.5L1295.5 521L1297 519L1298 517L1299.5 514L1300.5 511.5L1301.5 509L1303 506L1304 504L1304.5 501L1304 497.5V496L1304.5 494.5L1305.5 493H1307.5L1308.5 492.5L1312.5 490.5H1314L1315.5 490L1317 489.5L1317.5 488.5L1319.5 486.5L1320.5 486L1324 484.5L1324.5 484V481.5L1325 480L1328.5 475.5L1332 471.5L1334 469L1339 465L1341.5 464L1342 463V461.5L1350 453.5L1351 452.5L1351.5 449L1351 446L1350 444.5L1349 443.5V441.5L1352.5 434V432L1353.5 430L1355 429.5L1356.5 429L1359 430L1361 429L1361.5 427.5L1362 425.5L1364 422L1367.5 421L1369.5 419.5L1378 411.5L1383 409.5L1384 409L1386.5 405L1387 402.5L1387.5 398L1388 395L1388.5 393.5L1389.5 392.5H1391.5L1394.5 393.5L1396 394L1398 394.5L1399 393.5V392.5V391L1397.5 387.5L1397 385.5L1397.5 383.5L1398 381.5L1399 379.5L1400 377.5L1401.5 376.5L1403.5 375.5L1406.5 375L1409 375.5L1411.5 376L1414 375.5L1416.5 374L1417 371.5L1417.5 369.5L1418 365L1418.5 360L1420 355L1424 351.5L1426.5 350.5L1428.5 349.5L1430 348L1430.5 346.5L1431.5 344.5L1432.5 341.5L1433.5 340.5L1435.5 340L1438.5 339.5L1441 339L1443 338.5L1445 337.5L1446.5 335.5L1447 333V331.5L1446 329.5V328.5L1447.5 327.5L1450.5 325.5L1453 324.5L1454 323L1453.5 320L1453 317.5V315.5L1454 314L1455.5 313L1458 312L1461 310L1464 309L1466 308L1471.5 307H1474.5L1481 306.5L1484 306L1485.5 305.5L1486.5 304L1492 295.5L1491 292.5L1490.5 291.5L1487.5 290L1484.5 288.5L1478 286L1472.5 283L1468 279.5L1465.5 276.5L1460 265.5L1456 263L1449 263.5L1440 263L1433.5 262.5L1428.5 261L1410.5 250L1402.5 244L1399 238.5L1394.5 236.5L1391 234L1389 231L1388 228.5L1380.5 220L1378.5 215.5L1375.5 213L1374.5 211.5L1367.5 210.5L1366 211.5H1363.5L1360.5 213.5H1359L1355 210V212.5L1347 215.5H1339L1330 212L1325.5 209L1317 205.5L1291.5 188.5L1285 184L1276.5 180L1271.5 179L1261.5 173H1256L1248 170L1243 168L1237 164.5L1234.5 161L1230.5 156L1224 148.5L1209 141.5L1198.5 143L1188 145.5L1178 143L1168 141.5L1161 143L1153 145.5H1144H1136.5L1132 147H1116.5L1109 148.5L1099 150L1082.5 153.5L1055.5 150L1045 148.5L1039 145.5L1029 137L1014.5 121.5L1011 119.5H1008.5L1002 117L997 113.5L991 107L985 103.5L975 101L964 95L957 90.5H954L946.5 92.5L933 99.5L927.5 100L918.5 99.5L904.5 98.5L897 97L884.5 92.5L868 87L860 84L850 78.5L843 76L837.5 72.5L818 64L809.5 62L782.5 55.5L768 52.5H763.5L755 53.5H746.5L721 61L709 62H672L648 59H620L609.5 58.5L604 57L596.5 55.5L590 53.5L585.5 53L582 51.5L575.5 49L572 46.5L567 47L563.5 46L556 42.5L547.5 38.5L543 37L539.5 36.5L533 37.5H524.5L517 35.5L510 33.5L506.5 31.5L497.5 25L493 21L485 13.5L482 11L480 9.5L477.5 7L473.5 5L471.5 4.5L468.5 3.5L465.5 2.5L461.5 1L458.5 0.5H450.5L441.5 3L437.5 3.5L433 5L426.5 7L424 7.5L421.5 8.5L412 11.5H410.5L406.5 13.5L405 14L392 16.5L384.5 19H382.5L374.5 22L365.5 22.5L361 23L358 25L356 25.5L353.5 28.5L350.5 30.5L346 31H337L332 30L325.5 27.5L318.5 24.5L314 20.5L311 18L307 16L304 13L303 11L301.5 10L299.5 9.5L297 8H294.5L293 7L290.5 6.5H285L280.5 7L278 8H275.5L274.5 9L271.5 9.5L270 10L268.5 10.5H266L264 12L261 13L258.5 13.5L255.5 14L252.5 14.5L250 16L246.5 17L244.5 19.5L242 21H240L234.5 21.5L233.5 22.5L230.5 24H228L225 26L221 29L213.5 32L205.5 36.5L201.5 37L192.5 37.5L187.5 36H181.5L177 37L170 40.5C168.667 41.1667 165.8 42.9 165 44.5C164.2 46.1 158.667 48.5 156 49.5L152 52L150.5 53L145.5 57L140.5 60L135.5 63L134 63.5L127.5 67L124 69H121.5L118 69.5L116 69L112.5 68H106.5L105 70L103 71.5L98 71H91L89.5 72H88.5H87.5L86 72.5L83.5 73.5L82 75L81 76.5L80 77.5L79 78.5L77.5 79L75 79.5L68.5 84L63.5 87L61 87.5L58 88.5L55.5 90H52.5C51 90.5 48 91.7 48 92.5C48 93.3 48.3333 94.1667 48.5 94.5L47.5 95.5L45.5 95L43 95.5L39.5 97H33.5L28 99L20.5 101L18 102.5L16 104.5L13.5 105.5L10 107L8.5 109.5V111L9.5 114.5L9 117L8.5 118.5L6.5 119H5L2 120.5L2.5 121.5L3.5 124L5 125L5.5 127L4.5 128L3 129L2 131.5L0.5 134V135.5L1.5 137L2 138.5L0.5 145L0 148L0.5 150L1.5 151.5L3.5 153.5L4.5 155L6.5 158.5L7 161L8.5 162L9 165.5V169.5L8.5 171.5L7.5 173.5L5.5 174.5L4.5 176V177.5L5.5 178.5L8.5 181L12.5 183.5L13.5 185L16 189L16.5 190.5L17.5 192V193.5L19 195.5L19.5 197L20 199V201.5L21.5 202.5L24.5 204L27.5 206L30 210V211.5L30.5 212.5L33 215L33.5 216L34 218.5L35 225.5L38.5 230.5L42 236L43.5 240L45.5 243L45 245L44.5 246.5L45.5 248V250L43.5 252L45.5 253.5L47.5 255.5C47.8333 256.333 49.3 258.2 52.5 259C56.1 255.8 58.3333 257.667 59 259C59.8333 262 61.6 268.8 62 272C62.4 275.2 62.5 277.667 62.5 278.5V281.5L60.5 284L58.5 285V288V290.5L60.5 293L61.5 296L62.5 298L63.5 299.5L65.5 302L66 304L68 305L69 306.5L70 308L69.5 310.5V314.5L69 316.5V318L69.5 319L70 321V324L69 326L66 330C65.8333 330.667 65.6 332.3 66 333.5C66.4 334.7 66.1667 335.667 66 336L65.5 343L64 345V346.5L65 348.5V352L67 354V357L68 358.5V360.5L70.5 363L72 365L73 367.5L74 371V378.5L75 380.5L77 382.5L79.5 386.5L81 387L82.5 389H84L85.5 390.5L87.5 393L88 395.5L87.5 398.5L88 401L88.5 402.5V404.5L89.5 409L90.5 410.5L92 411.5L93.5 413V415L94 416.5L96 418L96.5 420.5L95.5 423L95 425L95.5 428.5L96.5 430.5L97.5 432.5L98.5 434L97 435.5V438.5L98 441.5L98.5 444.5L99 447L100.5 449L101 450V452L103 454L102.5 456.5L104.5 458.5L104 462L101.5 465L103.5 467L105.5 469L106.5 471.5L106 474L105.5 476L105 481L105.5 483.5L107 486.5L109 488L110.5 489.5V492L111 492.5L112.5 493.5H115.5L121 496L123 497.5L128 501.5L135.5 508L139 511.5H142.5L144 512.5L148.5 515.5V517L148 519.5L148.5 521L152.5 525.5L156 531.5L158.5 536.5V541L159.5 543.5L163.5 548L164 550.5L164.5 555V558.5L165 560.5L169.5 565L170 568L170.5 569.5L172.5 572L174 573.5V576L173.5 578L172.5 582V584.5L175.5 588.5L179 594L181.5 597.5L185.5 602.5L187.5 606L194.5 616V619L195 620.5L203 630L203.5 635L206 640L207 643.5L210.5 654L213 661L214 662.5L217 664L220 667L224 672L226.5 677.5L226 687.5L228 693L228.5 697L229 700.5L228.5 705V712L230 721L231 727.5L232.5 734L237 746.5L239.5 754L241.5 760.5L243 764L248.5 779.5L250 784L251 788.5L252 792L253 794.5L255 799.5L256 802L258.5 807L260.5 809.5L267 814.5L268 816.5L270 821.5L270.5 825L273.5 833.5L277 836L279 838.5L283.5 846L285.5 851.5V857.5L286 860.5L287.5 864L288 869L289.5 872L289 876L288 879.5L286.5 882.5L286 889.5L285 895.5V901.5L286 904L288 909.5L290 914L291.5 917V920L292.5 922L294 924L296 926L297.5 928L301 930L307 931L310.5 932L313 933L318 936L319.5 936.5L325.5 938L327 940.5L327.5 942.5L329.5 944L331 944.5L332.5 945L333.5 946L335.5 948L339.5 950.5L343.5 953L349 955.5L351 956.5L360 962.5L363 965L365 967L366.5 969.5L371 979.5L372.5 987L373 992L374 994.5L374.5 996.5L375.5 998.5L377.5 1002.5L378.5 1007L378 1011V1015.5L378.5 1020.5L380.5 1026L384.5 1037.5L387 1042L390.5 1047L391 1050L393.5 1056L397 1063L399 1069L401 1078L404.5 1088.5L405.5 1092L407 1094L410 1098L415 1101.5L418.5 1103.5L423.5 1104L443.5 1117L444 1119L448 1127L452 1131.5L457.5 1134.5L461.5 1137.5L466 1150.5L468 1154.5L470 1158L471 1161.5L473.5 1165L480 1172L481 1175.5L483.5 1178.5L486.5 1180.5L495 1186.5L501 1191.5L513 1197.5L520 1201.5L525.5 1209.5L528 1214.5L533 1224.5V1228L534 1231L536.5 1239L538.5 1243.5L548.5 1261.5L553.5 1266L558.5 1273.5L561 1277L566.5 1288L570.5 1297L576.5 1306.5L584 1316L589 1326.5L592.5 1332L595.5 1337L596.5 1340L598 1344L597.5 1349L595 1354L592.5 1361L592 1363L588 1367.5L586 1371.5L585.5 1373L584.5 1378L583.5 1383V1400L585.5 1406L588 1411L596 1419.5L601.5 1421L605.5 1422L611 1423.5L615 1427L617 1430.5L619.5 1433.5L623.5 1438.5L629 1443.5L637 1452.5L641.5 1462L645.5 1468.5L646 1471.5L647.5 1476L651.5 1483.5L654 1488.5L655 1492.5L646.5 1499.5L642.5 1502.5L638 1505.5L631 1511.5L628.5 1514L621 1523L602.5 1549.5L596.5 1565L591 1582L586 1592.5L578.5 1605L571.5 1618L558 1640L555 1650.5L554.5 1659L553.5 1676V1680.5L555 1686.5V1688.5L554 1694L559.5 1708.5L562 1717L568.5 1723.5L572 1731L570.5 1741L570 1746.5L570.5 1759L571 1771L576 1778L582.5 1779.5L618.5 1783.5L628 1784L636 1786L640.5 1791.5L646.5 1798L652.5 1806L661.5 1812.5L671.5 1816.5L680 1824L692 1828.5L704.5 1832L716 1838.5L721 1847L729 1867L737 1876.5L741.5 1879.5L745.5 1883L749.5 1884.5Z"
                  className={
                    "cursor-pointer transition " +
                    (activeVillage == null ? "fill-[#247771]" : "fill-[#308681] hover:fill-[#247771]")
                  }
                  onClick={() => {
                    setActiveVillage(null);
                  }}
                />
                <path
                  className={
                    "cursor-pointer transition " +
                    (activeVillage == "senaru" ? "fill-[#FBB200]" : "fill-[#fcd05f] hover:fill-[#FBB200]/95")
                  }
                  d="M891 477L890 470L876.5 469L870.5 466L862.5 465L862 462L854.5 463.5L852 462L826.5 461L829 458L829.5 451L833 445L834.5 437.5L832.5 431L826.5 427V423L828 417.5L824.5 411.5L817.5 404.5L814.5 400L810 398.5H801.5L800 395.5L795 385L797.5 379.5L802 375L801.5 371.5L802 368V363L806 358V355L803 352L801.5 342.5L796 339L783 338.5L771.5 339L766 341L752.5 339.5H734L676.5 342L672 343.5L669.5 343H652L639 345L621 348.5L619 354L623 359L627.5 368.5L623 375.5L628.5 377.5L631 381.5L627.5 384.5V391L633.5 393.5L637 403.5L637.5 409L633 415.5L629.5 413H624L622.5 416.5L626.5 419H631V422.5L628.5 431L629 437H626.5L624 442.5L618 446L618.5 451.5L616.5 455.5L620.5 460L619 465.5L621.5 467L621 469L618.5 471.5L617.5 478L620 479.5L626.5 491L622.5 493V496.5L624 499.5L627.5 500L626.5 502.5L616 508.5L617.5 511.5L616.5 513.5L619 524L616.5 530V538L612.5 540.5L603.5 544L601 543.5L595 547.5L596.5 550L594 553L594.5 556L593 557.5L593.5 561L595.5 564L595 567L592.5 568L595 571L593.5 574L589 574.5L587.5 576.765L592 580.5L591 587L592 594L590 596L587.5 597.5L588 600.5L593 603.5V606L591 609L593 612L597 614.5L600 620.5L604 624L606 627.5L608.5 626.5L612 627L613.5 628.5V634.5L617.5 640L618.5 646L623.5 648.5L624 652.5L628 655L629 657.5L626 659L626.5 661L630.5 664.5L630 670L633 672.5L634 676.5L629 681L629.5 684.5L634 685.5L636.5 690L632.5 698.5L635.5 704.5L638 709L635.5 713.5L639.5 715.5L639 719.5L641.5 725.5L644.5 734.5L651.5 743.5L654 748.5L652.5 752L655.5 754.5L656.5 758.5L655.5 764L649 769.5L647.5 774L649.5 778L652.5 779L656 777.5H661L664 780.5L663 787.5L664 791L657 796.5L658.5 800L658 805L660 809.5L660.5 813.5L663.5 814.5L665 816.5L669.5 820.5L675 829L674 831.5L674.5 834.5L674 838L678 842L677 845.5L669.5 849.5L669 853.5L671.5 857.5V862L668 866L667 871.5L669 875L668 879L669.5 881.5L672 883L673 889L672 892L677 894.5L679.5 899L686 905L684.5 908L691 917.5L692 923.5L689 929V932.5L693 936L696.5 937.5V941L700.5 943.5L699.5 947.5L700.5 951L702 956.5L704.5 967L703.5 970.5L700.5 972L697.5 975V978L700.5 982.5L699.5 992L701 998L701.5 1015L699 1020L701 1028L707 1035.5L706.5 1042.5L704.5 1045.5L705 1048.5L707.5 1053.5L708.5 1065L706 1070V1075L705 1083.5L705.5 1093L693.5 1111L694 1113.5L691.5 1115.5L685 1118L679 1124.5L678 1127.5L670 1135.5L663 1144L658.5 1155L657 1161.5V1166.5L654.5 1170.5V1176.5L653 1181L652.5 1184L653 1196L651.5 1205L650 1207.5L643.5 1221L642.5 1224.5V1230L645 1234.5L652 1240.5L654.5 1246.5V1258L658.5 1263L659.5 1278.5L657.5 1283L658 1294L663 1304L661.5 1308.5V1312L663.5 1315.5L665 1325L671 1332.5L671.5 1337L677 1346.5L682 1349L687 1353.5L687.5 1367L688 1374.5L689.5 1380.5L690.5 1390L691.833 1393.5L696.5 1400.5L699.5 1408L701 1412L705.5 1417.5L707 1421.5L708.5 1426L711.5 1434L712 1440.5L715.5 1443.5L715 1449L712.5 1453.5V1457L709 1460L708.5 1462L706 1463.5L705.5 1466.5L701.5 1467L697 1472.5L685 1478.5L679 1479.5L675 1482L670 1483.5L663 1488L655 1492.5L646.5 1499.5L642.5 1502.5L638 1505.5L631 1511.5L628.5 1514L621 1523L602.5 1549.5L596.5 1565L591 1582L586 1592.5L578.5 1605L571.5 1618L558 1640L555 1650.5L553.5 1676V1680.5L555 1686.5V1688.5L554 1694L559.5 1708.5L562 1717L568.5 1723.5L572 1731L570.5 1741L570 1746.5L571 1771L576 1778L582.5 1779.5L618.5 1783.5L628 1784L636 1786L640.5 1791.5L646.5 1798L652.5 1806L661.5 1812.5L671.5 1816.5L680 1824L692 1828.5L704.5 1832L716 1838.5L721 1847L729 1867L737 1876.5L741.5 1879.5L745.5 1883L749.5 1884.5L753.5 1887.5L757 1880L759.5 1875L765 1865.5L770 1853.5L776 1837.5L784 1828L788.5 1825.5L797 1819.5L802.5 1816.5L814 1812.5L818.5 1808.5L831 1794.5L854.5 1777L860.5 1768.5L862.5 1759L869.5 1747L873 1741L874.5 1738.5L878.5 1731L881.5 1725.5L885.5 1718L892.5 1705L899.5 1692V1687L899 1682L896 1675.5L876 1638.5L872 1634V1625L875 1618.5L876 1614.5L875 1612.5L876 1610.5L881 1606.5L881.5 1601.5L881 1584L868 1553.5L863 1538.5V1528.5L863.5 1527.5L853 1524.5L851.5 1522L845.5 1516.5L841 1516L839 1513L833.5 1509.5H830L817.5 1500.5L807 1495.5L798 1486.5L794.5 1478.5L787.5 1471L785 1466L780 1461.5L773 1453.5L755 1444L751 1440L743.5 1424L743 1418L741.5 1408.5L739 1402L736.5 1393.5V1391L733 1384.5L734 1378.5L732.5 1369.5L730.5 1364.5L730 1357.5L726.5 1353L724.5 1348.5L721 1344V1338.5L718.5 1333.5V1330L721 1327.5V1322.5L720.5 1319V1315.5L723 1310.5V1306.5L723.5 1299.5L728.5 1295L728 1288.5L729 1278.5L728 1271L723.5 1265L720.5 1257L724.5 1249L725.5 1234L730.5 1225.5L730 1218L729 1214V1207.5L726.5 1202L730 1195.5L729 1191.5L725 1187L729 1180L730 1172L733 1165L727 1164L723 1159.5L725.5 1153L726.5 1148.5L728 1145.5H730.5L733 1143.5V1136L736 1132.5L737 1129H740.5L747 1121L746.5 1117L754.5 1111V1108L756.5 1104.5L758 1097.5V1094L756.5 1091V1088L759 1086.5L761.5 1084.5L761 1081L759 1078.5L760 1075L764 1062.5L763.5 1058.5V1056L766 1048L765.5 1042.5L764 1037L767 1030.5V1026L763 1022.5L761 1018.5L759 1017H757L755 1013.5L759 1006L768 999L770.5 995V992.5L768 990L764 988L760 983.5L760.5 979.5L765.5 966.5L765 955L763 950L759 946L750.5 930V923L751.5 916L756.5 906V886.5L751.5 875.5L747 872.5L741 870.5L738 865L737 860L735.5 856.5L735 851.5L731 846.5V844L733 839.5L737.5 836L739 831L739.5 826.5L741 823L739.5 820L738 818.5L737.5 815L739 811.5L741 809L739.5 806V801L743 797L747.5 795.5L751 796.5V799L749.5 801.5L750 803.5L753 805.5L758 802.5L761 803.5L763.5 806.5L768 806L771 802.5L769 799.5L770 797L771 792.5L774 786L776 781L779.5 778.5L780 771L782.5 767L788 763L792.5 757.5L791.5 755V752.5L794 752L798 754.5L800.5 754L804 748V745.5L807.5 740V736.5L809 735.5L814 735L818 729V725L816.5 721.5L812.5 719.5L810.5 717V714.5L812.5 711V709L811 706.5L811.5 703.5L811 700.5L812.5 698V695.5L814.5 693.5L818 694.5H821.5L822.5 692L825 689L825.5 686L823 683L821.5 680.5V678L825.5 676H832.5L835.5 675.5L844 670L844.5 668L842.5 667.5L839 667L838 664V662L843 656.5L842 651L847 645.5V641.5L842 637.5L841 635.5L844 632H846.5L854 622.5L855.5 618L858.5 615L859 610L864.5 604V596L867.5 591L865 586.5L869 582L872.5 575.5L875.5 574V571L874.5 568L876.5 562L875 557.5V554.5L874 551.5L875 546.5L874 542L875.5 539L883.5 534.5L884.5 529.5L889 524L888.5 519.5L890 517L893.5 515L894 512L892 509L887.5 506L888.5 495L889.5 491.5L889 488L889.5 483.5L888 479.5L891 477Z"
                  stroke="#FFF"
                  strokeWidth={5}
                  onClick={() => {
                    setActiveVillage("senaru");
                  }}
                />
                <path
                  className={
                    "cursor-pointer transition " +
                    (activeVillage == "bayan" ? "fill-[#FBB200]" : "fill-[#fcd05f] hover:fill-[#FBB200]/95")
                  }
                  d="M940 442L935 439L934 440.5L934.5 446L933.5 450L948.5 457L949.5 458.5L948 465L939.5 466L933.5 471.5H926V469.5L911.5 468L909 464.5L898.5 459.5L897 461.5H895L890 470L891 477L888 479.5L889.5 483.5L889 488L889.5 491.5L888.5 495L887.5 506L892 509L894 512L893.5 515L890 517L888.5 519.5L889 524L884.5 529.5L883.5 534.5L875.5 539L874 542L875 546.5L874 551.5L875 554.5V557.5L876.5 562L874.5 568L875.5 571V574L872.5 575.5L869 582L865 586.5L867.5 591L864.5 596V604L859 610L858.5 615L855.5 618L854 622.5L850 627.5L846.5 632H844L841 635.5L842 637.5L847 641.5V645.5L842 651L843 656.5L838 662V664L839 667L842.5 667.5L844.5 668L844 670L835.5 675.5L832.5 676H825.5L821.5 678V680.5L823 683L825.5 686L825 689L822.5 692L821.5 694.5H818L814.5 693.5L812.5 695.5V698L811 700.5L811.5 703.5L811 706.5L812.5 709V711L810.5 714.5V717L812.5 719.5L816.5 721.5L818 725V729L814 735L809 735.5L807.5 736.5V740L804 745.5V748L800.5 754L798 754.5L794 752L791.5 752.5V755L792.5 757.5L788 763L782.5 767L780 771L779.5 778.5L776 781L774 786L771 792.5L770 797L769 799.5L771 802.5L768 806L763.5 806.5L761 803.5L758 802.5L753 805.5L750 803.5L749.5 801.5L751 799V796.5L747.5 795.5L743 797L739.5 801V806L741 809L739 811.5L737.5 815L738 818.5L739.5 820L741 823L739.5 826.5L739 831L737.5 836L733 839.5L731 844V846.5L735 851.5L735.5 856.5L737 860L738 865L741 870.5L747 872.5L751.5 875.5L756.5 886.5V906L751.5 916L750.5 923V930L759 946L763 950L765 955L765.5 966.5L760.5 979.5L760 983.5L764 988L768 990L770.5 992.5V995L768 999L759 1006L755 1013.5L757 1017H759L761 1018.5L763 1022.5L767 1026V1030.5L764 1037L765.5 1042.5L766 1048L763.5 1056V1058.5L764 1062.5L760 1075L759 1078.5L761 1081L761.5 1084.5L759 1086.5L756.5 1088V1091L758 1094V1097.5L756.5 1104.5L754.5 1108V1111L746.5 1117L747 1121L740.5 1129H737L736 1132.5L733 1136V1143.5L730.5 1145.5H728L726.5 1148.5L725.5 1153L723 1159.5L727 1164L733 1165L730 1172L729 1180L725 1187L729 1191.5L730 1195.5L726.5 1202L729 1207.5V1214L730 1218L730.5 1225.5L725.5 1234L724.5 1249L720.5 1257L723.5 1265L728 1271L729 1278.5L728 1288.5L728.5 1295L723.5 1299.5L723 1306.5V1310.5L720.5 1315.5V1319L721 1322.5V1327.5L718.5 1330V1333.5L721 1338.5V1344L724.5 1348.5L726.5 1353L730 1357.5L730.5 1364.5L732.5 1369.5L734 1378.5L733 1384.5L736.5 1391V1393.5L739 1402L741.5 1408.5L743 1418L743.5 1424L751 1440L755 1444L773 1453.5L780 1461.5L785 1466L787.5 1471L794.5 1478.5L798 1486.5L807 1495.5L817.5 1500.5L830 1509.5H833.5L839 1513L841 1516L845.5 1516.5L851.5 1522L853 1524.5L863.5 1527.5L864.5 1525.5L850 1466.5L846 1457.5L837.5 1447L834 1431.5L835.5 1427L847 1417.5L858 1407L862 1399.5L871.5 1392L877.5 1381L878.5 1374L901 1343.5L899.5 1330.5L900.5 1320.5L902.5 1315.5V1308L907 1292L910.5 1282L908.5 1275.5L904 1268L904.5 1258.5L902.5 1245.5L902 1236L906 1222.5V1210L908.5 1201.5L912 1196.5L917.5 1179L923 1166.5L925 1155.5L921 1145.5L916.5 1142.5L915 1133V1129L920.5 1118V1113L919.5 1106.5L914.5 1095L911.5 1091.5L906 1074.5L907.5 1070.5L911.5 1065L921 1057.5L924 1051.5V1043L922.5 1037L920 1032.5L915.5 1029L915 1012.5L922 1006.5L928 996.5L931 986L929.5 970.5L928.5 946L931.5 937L937.5 925.5L945 916.5V906L940.5 901.5L942.5 895V890.5L939.5 883L940 872L954.5 865.5L960.5 859L962.5 852.5L972 838.5L975 831.5L975.5 825L978.5 820L980.5 809V800L974.5 789L976 784V779L973 773L972.5 770L974.5 764.5L979 759.5L984 758.5L985 755.5L984.5 753L981.5 750.5L982.5 748.5H987L989.5 747L990.5 745L989.5 741.5V724L996 718.5L1002 713L1004.5 709L1012.5 701.5L1016.5 700L1019.5 696V694L1018 689.5L1018.5 687L1020.5 685L991.5 672L989 671.5L984.5 669L987 665.5L991 657L999 649L1002 643.5L1006 639L1008.5 638.5L1013 634L1015 629.5L1017.5 626.5V624.5L1009 624L1003.5 622L1004 617.5L1000.5 616.5L992.5 607L984 602.5L987 594L988 590V586L984 578.5V576L985 571.5V560.5L981.5 551.5V548.5L982 545.5V541.5L979.5 538.5V537L985.5 530.5L983 521.5L986.5 510.5L986 503L987.5 498.5L987 496.5L984 494.5L982.5 490L982 487L982.5 482L980 479.5L976.5 478.5L972 471.5V468.5L974 463.5L975.5 458L978 454L975.5 450L976.5 444.5L975.5 439V435.5L977.5 429L981 424.5L982 420L982.5 411.5L981 409L976 418L975.5 428L974 431.5L971 432.5L967 433L951 441L948 446.5L944.5 447L940 442Z"
                  fill="#FCD05F"
                  stroke="#FFF"
                  strokeWidth={5}
                  onClick={() => {
                    setActiveVillage("bayan");
                  }}
                />
              </svg>
            </div>
            <div
              className="mt-4 w-max bg-green-1 text-white px-4 py-2 rounded-full flex items-center gap-2"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <HiCursorClick className="text-[20px]" />
              Klik pada peta untuk berinteraksi
            </div>
          </div>

          <div
            className="mt-[30px] w-[90%] max-w-[730px]"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2 className="text-[26px] font-bold text-center mb-[15px] font-poppins text-green-1">
              {activeVillage === null ? "Kecamatan Bayan" : activeVillage == "bayan" ? "Desa Bayan" : "Desa Senaru"}
            </h2>
            <p className="text-[19px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </section>
        <SideDeco position={true} />
        <SideDeco position={false} />
      </section>

      <section className="flex flex-col justify-center items-center relative overflow-x-hidden pt-20">
        <h1
          data-aos="fade-right"
          className="text-[26px] md:text-[31px] text-green-1 text-center"
        >
          <strong>Misi</strong> Kecamatan <strong>Bayan</strong>
        </h1>
        <p
          data-aos="fade-left"
          data-aos-delay="200"
          className="text-[20px] md:text-[26px] text-center mt-[30px] w-[90%] max-w-[730px]"
        >
          “Lorem ipsum dolor sit amet. consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.”
        </p>
        <SideDeco position={true} />
        <SideDeco position={false} />
      </section>

      <section className="flex flex-col justify-center items-center relative overflow-x-hidden pt-20 pb-[50px] md:pb-[150px]">
        <h1
          data-aos="fade-right"
          data-aos-delay="400"
          className="text-[26px] md:text-[31px] text-green-1 text-center"
        >
          <strong>Visi</strong> Kecamatan <strong>Bayan</strong>
        </h1>
        <p
          data-aos="fade-left"
          data-aos-delay="600"
          className="text-[20px] md:text-[26px] text-center mt-[30px] w-[90%] max-w-[730px]"
        >
          “Lorem ipsum dolor sit amet. consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.”
        </p>
        <SideDeco position={true} />
        <SideDeco position={false} />
      </section>
      <Footer />
    </main>
  );
}
