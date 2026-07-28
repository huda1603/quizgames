'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "835d0236247bbec82d1966264b86bd5d",
".git/config": "cd8403eae4e51105ee2dea67fa764f99",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "63c43c120e0916895bafb4cf97ef23f0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "74a509b15cbdfa55745de2c9adb76d3c",
".git/logs/refs/heads/gh-pages": "68e2f85ac52afc5d3c8429b04eae5794",
".git/logs/refs/heads/master": "181c14a70d57dbd114147e5b54dfe73e",
".git/logs/refs/remotes/origin/gh-pages": "5b0e08f1d394508ac9d1776c3d32e96a",
".git/objects/02/e4083eb9384f4baf1e6d1a1c4aa607c63eaa8f": "1056fc77ebb9f69b6ba0d160fdf35c77",
".git/objects/05/a9d6ba4d529e754086bb488dada915a80e5027": "3ce61d051dc515ec9d4ce74bcec4053e",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/f69fb996bfc30a667a4f56f394d4a407639a36": "289700e2c9dfc8fe43fcec8beddd5a8b",
".git/objects/0a/bc01fe5ec399d43fc00deece95eea7b0712933": "86fa6aee0ed2869a2b503c92c9b76730",
".git/objects/0b/8b0fd32b7fa7926b71dca00b837c3359ae850b": "0e1edd8cfd4dde84046ee682016a13ce",
".git/objects/0c/a9bb3d9fe4565384e2b1e212085e9a74fd483c": "d8705883d02ab853e8bebbfb7a6e4ef9",
".git/objects/0d/e5c758d096c4f1b247e021d0660b1fa593a711": "45cd5ca37add2809d6584bb774307743",
".git/objects/16/15298b8f651d77ee5ce89adf25776217a72e8f": "fdf66c9f6552dd2fc7827bafbbde33f9",
".git/objects/19/ffd2d731d207dbb29f983aa59895378b024a8e": "4dddd593acbee78d425eff150230a091",
".git/objects/1e/216e19dd29ff5f07df69635a66b90d54cc2f1b": "8b3ca74d293903e066913e1f7e6694cb",
".git/objects/1e/c4784d6897a0e3d50dfde05f0dd553673f3048": "010e5859053362f316920a35e29d2e75",
".git/objects/23/73452186d8e54f332a3256fa913240dd6d7c51": "fc83f85604bef097dbcaabfd66852edf",
".git/objects/28/c8bfc5c3aa252652c293a094ded08c8585c56a": "0f6fb1fac2d7005fde881027f48e0a73",
".git/objects/2c/c917aced02999ccc8aa1ee425984847aa23bf6": "aa37c3af58750c3da052c44c4ef3e8bb",
".git/objects/2e/f082a8831b3692dce823f390371f8f6fb51b03": "db6b8dbc389b7fbfabc05a58971db3cb",
".git/objects/30/e362b7ac55438dc234fd60cb182daabca099ea": "ee804b5b50fb476fbb9513cf13fab4fa",
".git/objects/34/4ed647b5d1b8f84e6c6108ab5b01f1c9d1ab72": "242665b4d92c20bccb23a8fb201f1e4e",
".git/objects/35/dce9d928db8a0a3da6412369f71ccadd4389df": "05996ea42a73f7fc0bb123113ff2f6f7",
".git/objects/36/c5044e0c344bdb2c503de4b0a97153d4f1ac1e": "f6527a86916f4aa7b24be70e232fcb7d",
".git/objects/37/295a5c9d8f2df07b191e7a2b00cca0a5859964": "d1a1b480d6564cdf2a7227712180c2c6",
".git/objects/39/0ef76458ddd444125cbdd47e91566235170e48": "ec41f9d13502a659a82c0a79190a6285",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/0eca76998d57443d07cdff2379d3e486bd97b7": "6d376bdd869cda8ca42115b23fbb755a",
".git/objects/3e/4e50fdb3a5871781171a5f570df4a3ad696d51": "dc3f4e59c2e0f57487d1a53e4b6a9edf",
".git/objects/3e/b3cd6842fd73397c51afe388a23cdd47254f9e": "1b0f1c4b8dd2c6dbb9d5e69882ad83fa",
".git/objects/41/cfb5c62191b6581478f2ccb911fa68291faec4": "d8121a6dd786abea892d4ade8e0d795e",
".git/objects/44/02622353789c9a341b390a5bef03ea7d19887d": "1e856ab3f1cb1cc1d97db07e2d345d9b",
".git/objects/44/34f7bf2f9c22c4a07c8f1b5fe8495d38a80a17": "8519c1666c5d520058fb8d672add9010",
".git/objects/45/d23ddbd0d666e6de33e20f6b748bcf5b1e7f5f": "aa2cc906430ffb451b61dac9082abb5c",
".git/objects/4d/752440c5ddb0fdccccc596aca915802831abbf": "7168a35057a14b366e7fea5eff2b72ef",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/0a80040e017d6446ea6992dee7a398df2d2e6c": "5ffb9e4e2ae1c8512ed18427150a4ac1",
".git/objects/53/b6684482cea80da27f6f197b94d96bb93dc468": "f76e52b8e28f54919078e3f17ad7d127",
".git/objects/56/56615fe92aa789f91dd553d6be6f886bf7fae5": "3adf10d41088be32ba143ca85f9be4f0",
".git/objects/56/a5babce051efc4e8ea4c05ca3e0c5417f80f8b": "65a5deaed6c066c59e76d73675a348fc",
".git/objects/57/c522b4c511d13bb26db44ae5ea041a434bef7e": "d8d50bc0ae17501ba4984800a1f5f266",
".git/objects/5b/0a2a81564014c96ef2ca60eb8461a2e2b40393": "37f98b87f3f39c32da0443e31efff5c9",
".git/objects/5e/0663652baa498bf91214dce71a8792324329ba": "73eba6e7c126e7783c44c4f15163a0b0",
".git/objects/61/895a629b142d97d88953f3374023917822b195": "f97fa17e7d3ebe59727a4c60da050a0a",
".git/objects/63/ee0de59248cd108c371ebbc4a01d59df8e7244": "3a34f06acb026b3981658d2f90c8e37c",
".git/objects/64/cdd831a92e23c7b0a8d4244ae416a2c0b35865": "2bcecbcef70ee788f6379c56b1628e90",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/5e4324fd63692876bb8355043e2cdf2e12e501": "b04ba9479a9617a9d554ad4c4d9b4da5",
".git/objects/6c/222d12b084989af8b1ac5ed74d6cdf9722d896": "61b80f7bcb1a81d519dc09d2bc79f41d",
".git/objects/6d/dae16b7f645ccc510819c54b852faae0e4c757": "2a7e4d1594e4c20f309a0effdbe06af1",
".git/objects/6f/311f2151b0678c025cc52db3b6aa3d95c51db8": "9424c2f198c5a6014fde61edda4e77f8",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/9c52b204492a51664cc18022ac1ed229ee565c": "afbdd06aaf0579c9358bfb0c72813f65",
".git/objects/70/eaabfad8495784d30bce595d9356906dd76743": "eef4e454d511a02a2332eed82576f81d",
".git/objects/71/045544c6f22492c78958f3c0d77fab7af0d991": "48ce530e0e2e230f5c25d613e7832084",
".git/objects/73/1a095dc80ec074e33ef814cf448452703f3deb": "152aec80f0ecc166ceea955fcc87ba2e",
".git/objects/75/452bfb194583798d49682d7cde4655ee55dd9c": "978c1556a3f51b1816c946d278b9bfb2",
".git/objects/76/cdf7e1fbe0cdf4b92730b9e0dcaf34e7ce3405": "2c804742ed9fa81cbbcd5ad66fb92ea6",
".git/objects/77/2fa17807bf97255b73001f10b0651bb03af3b6": "cfb38c622866b6785e2d3f620a1d1103",
".git/objects/78/e2952c081e6d2da4504ebad2ef2daf06f03556": "a64c8f921c4d9718073424486c027a48",
".git/objects/7a/7475486d9a07bb7698f2b37c373bb1323ec75d": "9050e2054100e946a1b85c1c0502b7c1",
".git/objects/7c/322b916f8e430e15eb06fb316c08f0b5d70ad5": "ac93571596546af80166fee91fce222a",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/82/7bceb69493bc0022d395e80c60aefd8b0bcd54": "552b65eec40cdf31feb0d03cd6904a35",
".git/objects/84/18533678f4a6545fc4171bc8aa84b6a5f97e1d": "50a2c02092098b9745a33be43b6a34ff",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/90/85fdd03cd7a69e8e554f78a2cfb9ab3747669b": "2b3440dbd6a8874950f463327b0bfa13",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9a/dbb4fad78a475801f013f75a48ba04e20a69ed": "744173828dd53ebdc2131222a059c477",
".git/objects/a1/03a796c4df695d793f57cb82f10952b4358a2e": "9f5475ba861d8fbcc473b2e8424a1696",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/6384fe394a9df774b82f7e16914b96c3dfc06e": "55c5695a4fc1b53628c53265e389feef",
".git/objects/a8/b41dd834a069c5a3e5cc7783bc946d76d4e157": "ebf0f2f50fbc5287348e78ce46ec5465",
".git/objects/a9/7c0bfe867d4996c1aaa6588f7ab6e20e3300c4": "197331ca66a4c8118ea1519ccfd3c965",
".git/objects/aa/217a9a8f2f06b3c881d2abae3f956e359d046e": "9678cfdac235b7c8e0e7ee99add477b8",
".git/objects/ab/1446202bd2cc2a59080aa98cf38b1a6bd77d54": "86803f1a9a0f58b1b48a4d1e12788bab",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b0/deda05db936898a6cd09de76e7b05739688ed9": "adddf618ce7fed9aeb42fd6a1ddb656d",
".git/objects/b1/90177adf2b018242058dcd9222a24bde8cd967": "522809c1a102d831aab6301f16a3f806",
".git/objects/b2/49cf88bc1cfe80962f81770ed95f34cd4851c3": "4f4522c6d5c747fc44bafd27a9732c00",
".git/objects/b2/7c1cc92b5cb43f0f2cf7231bb8caccac8fa06e": "f3992083bb2ecfea3546e029d4a2f123",
".git/objects/b2/d4e842550988a41642e0e2e711699301c9df02": "ffab528b78f3189a49a87163dee8c9a4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/aba0eff945948447d543bacee454cb687ab690": "baf3bbd90c16ce296526cfc70f02d6be",
".git/objects/b8/b70be8e8eb2a552bda641ccf7c23cc35fb2522": "a2f8f2ac5d8f121f45ad381964d9c59b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/398d704f32ddc3e6959b49508d19e764578602": "68218df610f4f7ff4866b705c3f00a09",
".git/objects/bd/a0cd06607187a21fa46cc944b17d65cfec341e": "3ce3c2591ed82d316f0d0a988a715094",
".git/objects/bf/8f7f7bc4684db8a06dda06a98b30d556ccefcc": "42def283631e9af58e0c5d15b90cf69c",
".git/objects/c4/f2849942c9e6a71218829ce220b8a37feb68a3": "0ad75aa065dcf2e4d5cc3884808e7b1a",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/03052c2efe3a2cc3665275d815f9a1830f5b26": "4fe93c4bb0267e5ebf378638ae084c5e",
".git/objects/c9/7a2d928acf5bf8f71fbc762afd92f874b861f7": "90ad51c1f3b02d1fea7bbe67d09d0dae",
".git/objects/d1/6a2f12b4c82a9e71c37b44767dc3c9011fae70": "434818d564b49367018e5e65033826e4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f74de9b48e8db851d88fde7a23eeec74b3f42d": "e54a7fa2ad362f6ee83f53bc2c499280",
".git/objects/d5/147cdc8b59801c6b952bae6acb967f78609539": "ff6999914bad08b6b996b685d7f17eae",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/c35b385a9142602ffa5b7b01b45fd5e03781d9": "9179e6297cc46ec3c762423985a5edcb",
".git/objects/dc/9e4f8c7c06a086169dba8d8081a28f97e7def0": "33d31c26f01fc3e4829ff216b354c620",
".git/objects/dd/59ebde799721624f7dc6c9772ad26db8067022": "219359f4a6ac18a77dc976240a42a629",
".git/objects/e1/a71de9c712e8992bc45c60d6acbf3fb825d508": "3b79d6a435a8c233f0cfe71c071bd1b2",
".git/objects/e3/00f20a21f0d31c4babd8a6f7a13fdcdafb9019": "8c07b8a9ef6435be8b0f6a9f7086e872",
".git/objects/e3/13f8a9d2369850e37bffe7d366ff43a7b50141": "5439844f4540d1645f326fd71fa3a64a",
".git/objects/e5/13abcc7779e80809145362508565d28c06b316": "fdabaeeccb07caad39be46ff656f1b04",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/def4e2e9ccfd8388cdd6822278f541f95bc971": "810a806881201e8a43ba69398619a102",
".git/objects/ee/cd0ecabf9c6a135a0758804369ccfb078c0117": "17ed7ce11bfcf8c1259adad1724de815",
".git/objects/f2/6de685043f8f9409f9060d4b909e0762dccc28": "6de868928256571fd88d9b34283e12a8",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/ba3d13d129847659e972a3684ea39bd07144fb": "e3d23307cb1a535da9420a36e59ee8d5",
".git/objects/f6/e0e966995f231722952153745e21008586b9c9": "e347e8462e9bee2d088dcd55866fcfce",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/802e50b3d6fe4796b83ec52936ace8d8d3b4d8": "e76bc5792fc7f50c9b8747a8f4fdde19",
".git/objects/f9/9022300762610a4ebca008dfbb8f6e955bf1f9": "8165d2c141205ed4795c985a39ae4439",
".git/objects/fb/6d2286bbdcd6098dd839225a03e6a85a2180c6": "844ad3ab933aebdda6c459b6543fddb9",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/gh-pages": "2ba54b6c3229a34684de64a28ab66cf0",
".git/refs/heads/master": "df2c098acb6e68ed1c77fba2fe85135e",
".git/refs/remotes/origin/gh-pages": "2ba54b6c3229a34684de64a28ab66cf0",
"assets/AssetManifest.bin": "5da32756a8ba25a715d372e2356b3649",
"assets/AssetManifest.bin.json": "c17ac644f593eb0325bb413f3af4953c",
"assets/assets/A.png": "ff12a72a1b8581eadbc8427f0dd200d3",
"assets/assets/B.png": "98ba76f584efb618a2b5ae2dd44017fd",
"assets/assets/bg.png": "60c75490991d1ddcf02e60cab7c2e59c",
"assets/assets/C.png": "1077ecfac0751e3da9a341d02b7449f0",
"assets/assets/correct.mp3": "f6452ee7d16bff6b3371044205086bf8",
"assets/assets/crown.png": "d9688d3bd81a63eb58fbd190072ee64b",
"assets/assets/D.png": "8377365ac5669f604a35004bd6cd9eff",
"assets/assets/dart.png": "12d854edf4818cfc4beaf50a3cd1efd8",
"assets/assets/desktop.ini": "a8b68bb8227f630caa5573e62ec7558b",
"assets/assets/duration.png": "6ef3e7dcfea14312e89d84873672ed25",
"assets/assets/dynamite.png": "99343820d28e07b2620ad3de81295654",
"assets/assets/firebase.png": "d6321e28267322b597897462c96f482a",
"assets/assets/flutter.png": "ff1730c74a2d8a050824d6aa3f34bc7d",
"assets/assets/heart.png": "11c3f8375ea7f41541fbc3bd9ac88347",
"assets/assets/hint.png": "b087da3bf8bb81627afacc1e3ed2e5a6",
"assets/assets/image_upscaled.png": "de175938d199ebfda1b921f3b7468b13",
"assets/assets/lvl.png": "b76785320ec5e33641af6ea6be200ac7",
"assets/assets/menu.png": "14fda9234d3fb1aba309fa84f03a1f96",
"assets/assets/music3.mp3": "f7aa75125c8c0c209b91266e72b85126",
"assets/assets/setting.png": "11a1858d005ecf6b26d9f966e3ca39c6",
"assets/assets/wrong.mp3": "9d34edfa15675bca31c2558da5895a21",
"assets/assets/yay.mp3": "d83afaf3946167039527aed06bdc69af",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "732019ac451bd96cafaa79c575ef05e7",
"assets/NOTICES": "5e478e283d367d7af0ed3cbe345832b6",
"assets/packages/animated_leaderboard/assets/crown.svg": "ca8e024f0583f2f471d7997a00749732",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "d5f35609d8bbd6911b6a5f4eccb2a1e3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "63dd4c36bf0c5da722a7898040cf7c6f",
"/": "63dd4c36bf0c5da722a7898040cf7c6f",
"main.dart.js": "f9e46fdc186d60e00fefce8dfab1b981",
"manifest.json": "c145d59c3ae6e4990c4e5dc5048d76cc",
"version.json": "612d57350c93c72eeb2aed90e319fe0a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
