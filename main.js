// グローバルに展開
phina.globalize();

var SCREEN_WIDTH  = 1280;              // スクリーン幅
var SCREEN_HEIGHT = 720;              // スクリーン高さ

var FIRST_GAKURYOKU = 40;

var fc = 0;
var year = 0;
var gakuryoku = FIRST_GAKURYOKU;
var gakuryoku_label;
var gakuryokuFlag = false;
var gakuryoku0Count = 30;
var gakuryoku0Flag = true;
var damageFlag = false;
var damageFlag_boss2 = false;
var damageCount = 0;
var scene = "title";
var phase = "title";
var sceneInitFlag = true;
var phaseInitFlag = false;

var jiki;
var jikiSonzai = false;
var jikiHantei;
var shotFlag = false;
var back1MoveFlag = false;

var button_start1;
var button_start2;
var button_kamen1;
var button_kamen2;
var button_retry1;
var button_retry2;
var button_twitter1;
var button_twitter2;
var button_twitter_button;
var goukaku1;
var goukaku2;
var goukaku3;
var title;
var push;
var kekka;
var kekka_kabel;
var shiroid1;
var shiroid2;
var shiroid_button;
var rekisen1;
var rekisen2;
var rekisen_button;
var back1;
var back2;
var kokuban;

var boss1;
var boss1d;
var boss2;
var boss2d;

var jikiG;
var shotG;
var itemG;
var gakuryoku_upG;
var gakuryoku_downG;

var atack1G;
var boss1G;
var boss1dG;
var boss1a1G;
var boss1a2G;
var boss2G;
var boss2dG;
var boss2a1G;
var boss2a2G;
var boss2a31G;
var boss2a32G;

var JIKI_SIZE = 200;
var JIKI_SPEED = 8;
var JIKIHANTEI_SIZE = 1;
var KOKUBAN_HEIGHT = 230;
var MUTEKI_TIME = 60;
var SHOT_SIZE = 50;
var ITEM_SIZE = 60;
var GAKURYOKU_SIZE = 200;
var BULLET1_SIZE = 40;
var BOSS1_WIDTH = 600;
var BOSS1_HEIGHT = 200;
var BOSS2_WIDTH = 600;
var BOSS2_HEIGHT = 200;

var BOSS1_LIFE = 300;
var BOSS2_LIFE1 = 500;
var BOSS2_LIFE2 = 300;
var BOSS2_LIFE3 = 1500;

//ロゴのサイズに合わせて変える
var SHIROID_WIDTH = 302
var SHIROID_HEIGHT = 172
var REKISEN_WIDTH = 309;
var REKISEN_HEIGHT = 105;

var BUTTON_WIDTH = 228;
var BUTTON_HEIGHT = 90;


// 定数
var ASSETS = {
//画像読み込み
  image: {
    pic_back1: "./image/back1.jpg",
    pic_back2: "./image/back2.jpg",
    pic_jiki: "./image/jiki.png",
    pic_item: "./image/item.png",
    pic_gakuryoku_up: "./image/gakuryoku_up.png",
    pic_gakuryoku_down: "./image/gakuryoku_down.png",
    pic_bullet1: "./image/bullet1.png",
    pic_bullet2: "./image/bullet2.png",
    pic_boss1: "./image/boss1.png",
    pic_boss1d: "./image/boss1d.png",
    pic_boss2: "./image/boss2.png",
    pic_boss2d: "./image/boss2d.png",
    pic_shot: "./image/shot.png",
    pic_button_start1: "./image/button_start1.png",
    pic_button_start2: "./image/button_start2.png",
    pic_button_kamen1: "./image/button_kamen1.png",
    pic_button_kamen2: "./image/button_kamen2.png",
    pic_button_retry1: "./image/button_retry1.png",
    pic_button_retry2: "./image/button_retry2.png",
    pic_button_twitter1: "./image/button_twitter1.png",
    pic_button_twitter2: "./image/button_twitter2.png",
    pic_goukaku1: "./image/goukaku1.png",
    pic_goukaku2: "./image/goukaku2.png",
    pic_goukaku3: "./image/goukaku3.png",
    pic_title: "./image/title.png",
    pic_kekka: "./image/kekka.png",
    pic_kokuban: "./image/kokuban.png",
    pic_shiroid1: "./image/shiroid1.png",
    pic_shiroid2: "./image/shiroid2.png",
    pic_rekisen1: "./image/rekisen1.png",
    pic_rekisen2: "./image/rekisen2.png",
  },

//画像のアニメーション設定読み込み
  spritesheet: {
    ss_jiki: "./image/jikiSprite.ss",
  },

//フォントの読み込み
  font: {
    mainfont: "./image/07YasashisaAntique.otf",
  },

//音声読み込み
  sound: {
    se_howaa: "./sound/howaa.mp3",
    se_howa: "./sound/howa.mp3",
    se_daa: "./sound/daa.mp3",
    se_fuu: "./sound/fuu.mp3",
    se_zettai: "./sound/zettai.mp3",
    se_mattero: "./sound/mattero.mp3",
    se_ve: "./sound/ve.mp3",
    se_goukaku: "./sound/goukaku.mp3",
    se_kaan: "./sound/kaan.mp3",
    se_dosun: "./sound/dosun.mp3",
    se_dosun2: "./sound/dosun2.mp3",
    se_zkai: "./sound/zkai.mp3",
    bgm_ondai: "./sound/ondai.mp3",
    bgm_bgm1: "./sound/bgm1.mp3",
    bgm_bgm2: "./sound/bgm2.mp3",
    se_nar1: "./sound/nar1.mp3",
    se_nar2: "./sound/nar2.mp3",
    se_nar3: "./sound/nar3.mp3",
    se_nar4: "./sound/nar4.mp3",
    se_nar5: "./sound/nar5.mp3",
    se_nar6: "./sound/nar6.mp3",
    se_nar7: "./sound/nar7.mp3",
    se_nar8: "./sound/nar8.mp3",
    se_nar9: "./sound/nar9.mp3",
    se_nar10: "./sound/nar10.mp3",
    se_nar11: "./sound/nar11.mp3",
    se_nar12: "./sound/nar12.mp3",
  },

};

//音声再生用変数--------------------------
var se_howaaP;
var se_howaP;
var se_daaP;
var se_fuuP;
var se_zettaiP;
var se_matteroP;
var se_veP;
var se_goukakuP;
var se_kaanP;
var se_dosunP;
var se_dosun2P;
var se_zkaiP;
var bgm_ondaiP;
var bgm_bgm1P;
var bgm_bgm2P;
var se_narP;
//----------------------------------------------------


/*
 * メイン
 */
phina.define("MainScene", {
  // 継承
  superClass: 'DisplayScene',

  // 初期化
  init: function(options) {
    // super init
    this.superInit(options);

    //音声読み込み----------------------------------------------------
    se_howaaP = AssetManager.get('sound', 'se_howaa');
    se_howaP = AssetManager.get('sound', 'se_howa');
    se_daaP = AssetManager.get('sound', 'se_daa');
    se_fuuP = AssetManager.get('sound', 'se_fuu');
    se_zettaiP = AssetManager.get('sound', 'se_zettai');
    se_matteroP = AssetManager.get('sound', 'se_mattero');
    se_veP = AssetManager.get('sound', 'se_ve');
    se_goukakuP = AssetManager.get('sound', 'se_goukaku');
    se_kaanP = AssetManager.get('sound', 'se_kaan');
    se_dosunP = AssetManager.get('sound', 'se_dosun');
    se_dosun2P = AssetManager.get('sound', 'se_dosun2');
    se_zkaiP = AssetManager.get('sound', 'se_zkai');
    bgm_ondaiP = AssetManager.get('sound', 'bgm_ondai');
    bgm_bgm1P = AssetManager.get('sound', 'bgm_bgm1');
    bgm_bgm2P = AssetManager.get('sound', 'bgm_bgm2');
    se_narP = [ AssetManager.get('sound', 'se_nar1'),
                AssetManager.get('sound', 'se_nar2'),
                AssetManager.get('sound', 'se_nar3'),
                AssetManager.get('sound', 'se_nar4'),
                AssetManager.get('sound', 'se_nar5'),
                AssetManager.get('sound', 'se_nar6'),
                AssetManager.get('sound', 'se_nar7'),
                AssetManager.get('sound', 'se_nar8'),
                AssetManager.get('sound', 'se_nar9'),
                AssetManager.get('sound', 'se_nar10'),
                AssetManager.get('sound', 'se_nar11'),
                AssetManager.get('sound', 'se_nar12') ];


    //画像読み込み------------------------------------------------------------------------------
    //背景の表示
    back1 = Sprite("pic_back1").addChildTo(this);
    back1.origin.set(0, 0); // 左上基準に変更

    back2 = Sprite("pic_back2").addChildTo(this);
    back2.origin.set(0, 0); // 左上基準に変更
    back2.y = 0 - SCREEN_HEIGHT;

    shiroid_button = Button().addChildTo(this);
    shiroid_button.width = SHIROID_WIDTH;
    shiroid_button.height = SHIROID_HEIGHT;
    shiroid_button.alpha = 0;
    shiroid2 = Sprite("pic_shiroid2").addChildTo(this);
    shiroid1 = Sprite("pic_shiroid1").addChildTo(this);
    rekisen_button = Button().addChildTo(this);
    rekisen_button.width = REKISEN_WIDTH;
    rekisen_button.height = REKISEN_HEIGHT;
    rekisen_button.alpha = 0;
    rekisen2 = Sprite("pic_rekisen2").addChildTo(this);
    rekisen1 = Sprite("pic_rekisen1").addChildTo(this);
    button_start2 = Sprite("pic_button_start2").addChildTo(this);
    button_start1 = Sprite("pic_button_start1").addChildTo(this);
    title = Sprite("pic_title").addChildTo(this);
    push = Label("PUSH SPACE").addChildTo(this);
    kokuban = Sprite("pic_kokuban").addChildTo(this);
    kokuban.x = 500;
    kokuban.y = 150;
    kokuban.alpha = 0;


    //リザルト画面で表示するもの
    button_kamen2 = Sprite("pic_button_kamen2").addChildTo(this);
    button_kamen1 = Sprite("pic_button_kamen1").addChildTo(this);
    button_retry2 = Sprite("pic_button_retry2").addChildTo(this);
    button_retry1= Sprite("pic_button_retry1").addChildTo(this);
    button_twitter2 = Sprite("pic_button_twitter2").addChildTo(this);
    button_twitter1 = Sprite("pic_button_twitter1").addChildTo(this);
    goukaku1 = Sprite("pic_goukaku1").addChildTo(this);
    goukaku2 = Sprite("pic_goukaku2").addChildTo(this);
    goukaku3 = Sprite("pic_goukaku3").addChildTo(this);
    kekka = Sprite("pic_kekka").addChildTo(this);
    button_kamen2.y = 3000;
    button_kamen1.y = 3000;
    button_retry2.y = 3000;
    button_retry1.y = 3000;
    button_twitter2.y = 3000;
    button_twitter1.y = 3000;
    kekka.y = 3000;
    goukaku1.y = -3000;
    goukaku2.y = -3000;
    goukaku3.y = -3000;
    goukaku1.origin.set(0, 0); // 左上基準に変更
    goukaku2.origin.set(0, 0); // 左上基準に変更
    goukaku3.origin.set(0, 0); // 左上基準に変更
    //ツイッターボタン
    button_twitter_button = Button().addChildTo(this);
    button_twitter_button.width = BUTTON_WIDTH;
    button_twitter_button.height = BUTTON_HEIGHT;
    button_twitter_button.alpha = 0;
    button_twitter_button.y = 3000;
    //結果ラベル
    kekka_kabel = Label("結果").addChildTo(this);
    kekka_kabel.y = 3000;
    kekka_kabel.fill = 'black'; // 色を変更
    kekka_kabel.fontSize = 48; // フォントサイズを変更
    kekka_kabel.fontFamily = "mainfont";


    //グループ追加 下のほうが優先して表示される
    jikiG = DisplayElement().addChildTo(this);
    gakuryoku_downG = DisplayElement().addChildTo(this);
    gakuryoku_upG = DisplayElement().addChildTo(this);
    itemG = DisplayElement().addChildTo(this);
    atack1G = DisplayElement().addChildTo(this);
    shotG = DisplayElement().addChildTo(this);
    boss1a1G = DisplayElement().addChildTo(this);
    boss1a2G = DisplayElement().addChildTo(this);
    boss1dG = DisplayElement().addChildTo(this);
    boss1G = DisplayElement().addChildTo(this);
    boss2a1G = DisplayElement().addChildTo(this);
    boss2a2G = DisplayElement().addChildTo(this);
    boss2a31G = DisplayElement().addChildTo(this);
    boss2a32G = DisplayElement().addChildTo(this);
    boss2dG = DisplayElement().addChildTo(this);
    boss2G = DisplayElement().addChildTo(this);

    boss1d = boss1d_Model().addChildTo(boss1dG);
    boss1 = boss1_Model().addChildTo(boss1G); //中ボス召喚

    boss2d = boss2d_Model().addChildTo(boss2dG);
    boss2 = boss2_Model().addChildTo(boss2G); //ボス召喚

    gakuryoku_label = Label("学力").addChildTo(this);
    gakuryoku_label.alpha = 0;
    gakuryoku_label.fill = 'white';
    gakuryoku_label.fontSize = 24;
    gakuryoku_label.fontFamily = "mainfont";

  },


  // 更新
  update: function(app) {

    //操作受付
    var pointer = app.pointer;//画面タッチ、クリック取得
    var key = app.keyboard;//キーボード入力取得

    switch(scene){
      case "title":
      //タイトル--------------------------------------------------------------------------------------------------

        //初期化---------------------------------------
        if(sceneInitFlag == true){
            sceneInitFlag = false;
            fc = 0;
            phase = "title";
            bgm_ondaiP.play();
            var x = SCREEN_WIDTH/2;
            var y = 560;
            button_start1.x = x;
            button_start1.y = y;
            button_start2.x = x;
            button_start2.y = y;
            title.origin.set(0, 0); // 左上基準に変更
            push.x = x; // x 座標を指定
            push.y = 630; // y 座標を指定
            push.fill = 'black'; // 色を変更
            push.fontSize = 24; // フォントサイズを変更
            push.fontFamily = "mainfont";
            shiroid_button.x = 1100;
            shiroid2.x = 1100;
            shiroid1.x = 1100;
            rekisen_button.x = 1100;
            rekisen2.x = 1100;
            rekisen1.x = 1100;
            shiroid_button.y = 450;
            shiroid2.y = 450;
            shiroid1.y = 450;
            rekisen_button.y = 600;
            rekisen2.y = 600;
            rekisen1.y = 600;

            button_start1.setInteractive(true); //タッチ設定
            button_start1.onpointover = function() { //乗ったとき
              button_start1.alpha = 0;
            }
            button_start1.onpointout = function() { //離れたとき
              button_start1.alpha = 1;
            }
            button_start1.onpointend = function() { //タッチ終了時
              phase = "start";
              phaseInitFlag = true;
              bgm_ondaiP.stop();
              button_start1.setInteractive(false);
            }

            shiroid1.setInteractive(true); //タッチ設定
            shiroid1.onpointover = function() { //乗ったとき
              shiroid1.alpha = 0;
            }
            shiroid1.onpointout = function() { //離れたとき
              shiroid1.alpha = 1;
            }
            shiroid_button.onclick = function() {
              window.open('http://www.nicovideo.jp/tag/%E5%8B%89%E5%BC%B7%E3%82%B7%E3%83%AD%E3%82%A4%E3%83%89%E8%AA%95%E7%94%9F%E7%A5%AD2016');
            }
            rekisen1.setInteractive(true); //タッチ設定
            rekisen1.onpointover = function() { //乗ったとき
              rekisen1.alpha = 0;
            }
            rekisen1.onpointout = function() { //離れたとき
              rekisen1.alpha = 1;
            }
            rekisen_button.onclick = function() {
              window.open('http://www.nicovideo.jp/watch/sm0000000000');
            }

        }

        //タイトルメイン---------------------------------
        if(phase == "title"){
          if(key.getKey("space")){
            phase = "start";
            phaseInitFlag = true;
            bgm_ondaiP.stop();
            button_start1.setInteractive(false);
          }
          if(fc % 120 < 60){
            title.y += 0.05;
          }else{
            title.y -= 0.05;
          }

        }

        if(phase == "start"){
          if(phaseInitFlag == true){
            phaseInitFlag = false;
            fc = 0;
            se_kaanP.play();
          }

          if(fc < 20){ //20フレームで捌ける
            var moveSpeed = 40;
            title.y -= moveSpeed;
            button_start1.y += moveSpeed;
            button_start2.y += moveSpeed;
            push.y += moveSpeed;
            shiroid1.x += moveSpeed;
            shiroid2.x += moveSpeed;
            shiroid_button.x += moveSpeed;
            rekisen1.x += moveSpeed;
            rekisen2.x += moveSpeed;
            rekisen_button.x += moveSpeed;
          }

          if(fc == 30){
            jikiHantei = CircleShape().addChildTo(this); //自機の当たり判定
            jikiHantei.radius = JIKIHANTEI_SIZE; // 半径を設定
            jikiHantei.fill = "white";
            jikiHantei.alpha = 1;
            jiki = jiki_Model().addChildTo(jikiG); //自機召喚
            jiki.x = 0;
            jiki.y = SCREEN_HEIGHT/2;
            jiki.controlFlag = false;
            jiki.alpha = 0;
            se_zettaiP.play();
            bgm_bgm1P.play();
            back1MoveFlag = true;
            back1.x = 0;
          }

          if(fc > 30){
            jiki.x += 3;
            jiki.alpha += 0.02;
            if(jiki.alpha > 1)jiki.alpha = 1;
          }

          if(fc > 120){
            scene = "main";
            phase = "atack1";
            sceneInitFlag = true;
            phaseInitFlag = true;
            jiki.controlFlag = true;
            damageCount = MUTEKI_TIME + 1;
          }

        } //phase start 終わり

      //---------------------------------------------------------------------------------------------------------
      break;

      case "main":
      //メイン----------------------------------------------------------------------------------------------------
        //初期化---------------------------------------
        if(sceneInitFlag == true){
            sceneInitFlag = false;
            fc = 0;
        }

        //メインメイン----------------------------------

        //ばらまきフェイズ
        if(phase == "atack1"){
          var atack1Power = 30;
          if(fc > 200)atack1Power = 9;
          if(fc > 500)atack1Power = 7;
          if(fc > 900)atack1Power = 5;
          if(fc > 1300)atack1Power = 2;
          if(fc > 1500){
            phase = "boss1Mae";
            phaseInitFlag = true;
          }
          if(fc % atack1Power == 0){
            var atack1 = atack1_Model().addChildTo(atack1G);
          }
          //アイテム召喚
          var x = SCREEN_WIDTH + ITEM_SIZE/2;
          var y = jiki.y;
          var xs = -3;
          var ys = 0;
          if(fc == 200){var item = item_Model(x,y,xs,ys).addChildTo(itemG); se_zkaiP.play();}
          if(fc == 400){var item = item_Model(x,y,xs,ys).addChildTo(itemG); se_zkaiP.play();}
          if(fc == 600){var item = item_Model(x,y,xs,ys).addChildTo(itemG); se_zkaiP.play();}
          if(fc == 800){var item = item_Model(x,y,xs,ys).addChildTo(itemG); se_zkaiP.play();}
          if(fc == 1000){var item = item_Model(x,y,xs,ys).addChildTo(itemG); se_zkaiP.play();}
          if(fc == 1200){var item = item_Model(x,y,xs,ys).addChildTo(itemG); se_zkaiP.play();}
          if(fc == 1400){var item = item_Model(x,y,xs,ys).addChildTo(itemG); se_zkaiP.play();}

          //黒板表示
          if(fc < 150){
            kokuban.alpha += 0.01;
            if(kokuban.alpha > 1)kokuban.alpha = 1;
          }
          if(fc >= 150){
            kokuban.alpha -= 0.01;
            if(kokuban.alpha < 0)kokuban.alpha = 0;
          }

        }

        //中ボス前
        if(phase == "boss1Mae"){
          if(phaseInitFlag == true){ //初期化
            phaseInitFlag = false;
            fc = 0;
          }
          //中ボス登場処理
          if(fc == 300){
            boss1.x = (SCREEN_WIDTH + (BOSS1_WIDTH/2));
            boss1.y = SCREEN_HEIGHT/2;
          }
          if(fc > 300){
            boss1.x -= 5;
            if(fc == 305)se_kaanP.play();
          }
          if(boss1.x < 950){
            phase = "boss1";
            phaseInitFlag = true;
          }
        }

        //中ボス
        if(phase == "boss1"){
          if(phaseInitFlag == true){ //初期化
            phaseInitFlag = false;
            shotFlag = true;
            se_matteroP.play();
          }
          if(fc % 20 == 0){
            var boss1a1 = boss1a1_Model().addChildTo(boss1a1G); //自機狙い
          }
          var boss1a2 = boss1a2_Model().addChildTo(boss1a2G); //回転弾
          if(fc % 2 == 0)se_narP[Math.randint(0,11)].play();
          //中ボス撃破
          if(boss1.life <= 0){
            boss1.y = 2000;
            phase = "boss2Mae";
            phaseInitFlag = true;
            se_kaanP.play();
            for(var i=0;i<5;i++){
              var item = item_Model(SCREEN_WIDTH/2,SCREEN_HEIGHT/2,Math.randfloat(-0.5,0.5),Math.randfloat(-0.5,0.5)).addChildTo(itemG);
            }
          }
        }

        //ボス前
        if(phase == "boss2Mae"){
          if(phaseInitFlag == true){ //初期化
            phaseInitFlag = false;
            fc = 0;
            shotFlag = false;
            back1MoveFlag = false;
            bgm_bgm1P.stop();
          }
          var movef1 = 300;
          var movef2 = 400;
          if(fc >= movef1){
            if(fc == movef1){
              boss2.x = SCREEN_WIDTH / 2;
              boss2.y = 0 - (BOSS2_HEIGHT / 2);
              boss2.ySpeed = 60; //ボス落下
              se_dosunP.play();
              se_fuuP.stop();
            }
            //背景落下
            back2.y += 60;
            if(back2.y > 0)back2.y = 0;
            if(boss2.y >= (SCREEN_HEIGHT / 2)){
              boss2.y = SCREEN_HEIGHT / 2;
              boss2.ySpeed = 0;
              boss2.life = BOSS2_LIFE1;
              boss2.maxLife = BOSS2_LIFE1;
            }
          }
          if(fc >= movef2){
            if(fc == movef2){
              bgm_bgm2P.play();
              boss2.xSpeed = 30;
            }
            if(boss2.xSpeed >= 10)boss2.xSpeed -= 2;
            if(boss2.xSpeed <= 9)boss2.xSpeed -= 0.25;
            if(boss2.xSpeed <= 1)boss2.xSpeed = 1;
            if(boss2.x > 950){
              boss2.xSpeed = 0;
              phase = "boss2a1"
              phaseInitFlag = true;
            }
          }
        }

        //ボスアタック1
        if(phase == "boss2a1"){
          if(phaseInitFlag == true){ //初期化
            phaseInitFlag = false;
            boss2.ySpeed = 0.5;
            boss2.life = BOSS2_LIFE1;
            boss2.maxLife = BOSS2_LIFE1;
            shotFlag = true;
            se_matteroP.play();
          }
          if(fc % 30 == 0 && Math.randint(0,1) == 0)boss2.ySpeed = boss2.ySpeed * -1;
          if(boss2.y > (SCREEN_HEIGHT/2) + 200)boss2.ySpeed = boss2.ySpeed * -1
          if(boss2.y < (SCREEN_HEIGHT/2) - 200)boss2.ySpeed = boss2.ySpeed * -1
          if(fc % 30 == 0){
            se_dosun2P.play();
            var way = 50;
            var boss2a1 = new Array(way);
            for(var i=0;i<way;i++){
              boss2a1[i] = boss2a1_Model(i * (360 / way)).addChildTo(boss2a1G);
            }
          }
          if(boss2.life <= 0){
            se_kaanP.play();
            phase = "boss2a2Mae"
            phaseInitFlag = true;
          }
        }

        //ボスアタック2の準備
        if(phase == "boss2a2Mae"){
          if(phaseInitFlag == true){ //初期化
            phaseInitFlag = false;
            fc = 0;
          }
          if(fc > 120){
            phase = "boss2a2"
            phaseInitFlag = true;
          }
        }

        //ボスアタック2
        if(phase == "boss2a2"){
          if(phaseInitFlag == true){ //初期化
            phaseInitFlag = false;
            boss2.life = BOSS2_LIFE2;
            boss2.maxLife = BOSS2_LIFE2;
          }
          if(fc % 30 == 0){
            var way = 20;
            var boss2a2 = new Array(way);
            for(var i=0;i<way;i++){
              boss2a2[i] = boss2a2_Model().addChildTo(boss2a2G);
            }
          }
          if(fc % 30 == 5){
            //撃つごとにボスを移動
            se_dosun2P.play();
            if(boss2.y >= SCREEN_HEIGHT/2)boss2.moveY = Math.randint(100,150);
            else boss2.moveY = Math.randint(SCREEN_HEIGHT-125,SCREEN_HEIGHT-100);
            boss2.ySpeed = 30;
            if(boss2.y > boss2.moveY)boss2.ySpeed = -30;
          }
          if(boss2.ySpeed >= 0){ //減速
            boss2.ySpeed -= 0.9;
            if(boss2.y >= boss2.moveY)boss2.ySpeed = 0;
          }
          if(boss2.ySpeed < 0){ //減速
            boss2.ySpeed += 0.9;
            if(boss2.y < boss2.moveY)boss2.ySpeed = 0;
          }
          if(boss2.life <= 0){
            boss2.ySpeed = 0;
            phase = "boss2a3Mae"
            phaseInitFlag = true;
          }
        }


        //ボスアタック3の準備
        if(phase == "boss2a3Mae"){
          if(phaseInitFlag == true){ //初期化
            phaseInitFlag = false;
            if(boss2.y >= SCREEN_HEIGHT/2)boss2.ySpeed = -1;
            if(boss2.y < SCREEN_HEIGHT/2)boss2.ySpeed = 1;
            fc = 0;
            se_kaanP.play();
          }
          if(boss2.ySpeed < 0){
            if(boss2.y < SCREEN_HEIGHT/2)boss2.ySpeed = 0;
          }
          if(boss2.ySpeed >= 0){
            if(boss2.y >= SCREEN_HEIGHT/2)boss2.ySpeed = 0;
          }
          if(fc > 120 && boss2.ySpeed == 0){
            phase = "boss2a3";
            phaseInitFlag = true;
          }
        }


        //ボスアタック3
        if(phase == "boss2a3"){
          if(phaseInitFlag == true){ //初期化
            phaseInitFlag = false;
            boss2.life = BOSS2_LIFE3;
            boss2.maxLife = BOSS2_LIFE3;
          }
          var power = 12;
          for(var i=1;i<=4;i++){
            if(boss2.life >= boss2.maxLife * i / 4)power += 5;
          }
          if(fc % power == 0){
            var way = 13;
            var boss2a31 = new Array(way);
            for(var i=0;i<way;i++){
              boss2a31[i] = boss2a31_Model( i * (360 / way) ).addChildTo(boss2a31G);
            }
            var boss2a32 = new Array(way);
            for(var i=0;i<way;i++){
              boss2a32[i] = boss2a32_Model( i * (360 / way) ).addChildTo(boss2a32G);
            }
          }
          if(fc % (power-13) == 0)se_narP[Math.randint(0,11)].play();
          //ボス撃破
          if(boss2.life <= 0){
            bgm_bgm2P.stop();
            se_kaanP.play();
            boss2.y = 2000;
            phase = "clear";
            phaseInitFlag = true;
          }
        }

        //ボス撃破
        if(phase == "clear"){
          if(phaseInitFlag == true){ //初期化
            phaseInitFlag = false;
            fc = 0;
          }

          if(fc > 180){
            scene = "result";
            sceneInitFlag = true;
            jiki.controlFlag = false;
            jiki.y = 3000;
            shotFlag = false;
            se_goukakuP.play();
          }
        }


        //自機ショット----------------------------------------------------------------------------------
        if(shotFlag == true){
          if(fc % 5 == 0){
            var shot1 = shot_Model().addChildTo(shotG);
            if(gakuryoku >= 1){
              var shot2 = shot_Model().addChildTo(shotG);
              shot2.x = jiki.x - 40;
              shot2.y = jiki.y + 30;
              var shot3 = shot_Model().addChildTo(shotG);
              shot3.x = jiki.x - 40;
              shot3.y = jiki.y - 30;
            }
            if(gakuryoku >= 80){
              var shot4 = shot_Model().addChildTo(shotG);
              shot4.x = jiki.x;
              shot4.y = jiki.y + 90;
              var shot5 = shot_Model().addChildTo(shotG);
              shot5.x = jiki.x;
              shot5.y = jiki.y - 90;
            }
          }
        }

        //アイテムと自機の衝突判定----------------------------------------------------------------------------------
        if(jikiHantei != null && gakuryoku > 0){
          itemG.children.each(function(child) {
            if (jikiHantei.hitTestElement(child)) { // 衝突していたら
              child.remove();
              se_fuuP.stop();
              se_fuuP.play();
              gakuryoku += 5;
              var gakuryoku_up = gakuryoku_up_Model().addChildTo(gakuryoku_upG);
              gakuryokuFlag = true;
            }
          }, this);
        }


        //敵本体と自機の衝突判定----------------------------------------------------------------------------------
        if(jikiHantei != null && gakuryoku > 0){
          boss1G.children.each(function(child) {
            if (jikiHantei.hitTestElement(child)) { // 衝突していたら
              damageFlag = true;
            }
          }, this);
        }
        if(jikiHantei != null && gakuryoku > 0){
          boss2G.children.each(function(child) {
            if (jikiHantei.hitTestElement(child)) { // 衝突していたら
              damageFlag = true;
              damageFlag_boss2 = true;
            }
          }, this);
        }


        //敵弾と自機の衝突判定----------------------------------------------------------------------------------
        if(jikiHantei != null && gakuryoku > 0){
          atack1G.children.each(function(child) {
            if (jikiHantei.hitTestElement(child)) { // 衝突していたら
              child.remove();
              damageFlag = true;
            }
          }, this);
          boss1a1G.children.each(function(child) {
            if (jikiHantei.hitTestElement(child)) { // 衝突していたら
              child.remove();
              damageFlag = true;
            }
          }, this);
          boss1a2G.children.each(function(child) {
            if (jikiHantei.hitTestElement(child)) { // 衝突していたら
              child.remove();
              damageFlag = true;
            }
          }, this);
          boss2a1G.children.each(function(child) {
            if (jikiHantei.hitTestElement(child)) { // 衝突していたら
              child.remove();
              damageFlag = true;
            }
          }, this);
          boss2a2G.children.each(function(child) {
            if (jikiHantei.hitTestElement(child)) { // 衝突していたら
              child.remove();
              damageFlag = true;
            }
          }, this);
          boss2a31G.children.each(function(child) {
            if (jikiHantei.hitTestElement(child)) { // 衝突していたら
              child.remove();
              damageFlag = true;
            }
          }, this);
          boss2a32G.children.each(function(child) {
            if (jikiHantei.hitTestElement(child)) { // 衝突していたら
              child.remove();
              damageFlag = true;
            }
          }, this);
        }

        //ボスと自機ショットの衝突判定-----------------------------------
        if(boss1 != null && gakuryoku > 0){
          shotG.children.each(function(child) {
            if (boss1.hitTestElement(child)) {// 衝突していたら
              child.remove();
              boss1.life -= 1;
              se_veP.stop();
              se_veP.play();
            }
          }, this);
        }
        if(boss2 != null && gakuryoku > 0){
          shotG.children.each(function(child) {
            if (boss2.hitTestElement(child)) {// 衝突していたら
              child.remove();
              boss2.life -= 1;
              se_veP.stop();
              se_veP.play();
            }
          }, this);
        }

        //被弾時の動作
        if(damageFlag == true){
          damageFlag = false;
          if(damageCount > MUTEKI_TIME){
            damageCount = 0;
            gakuryoku -= 5;
            if(damageFlag_boss2 == true){ //ボスへの衝突時は99ダメージ
              gakuryoku -= 94;
              damageFlag_boss2 = false;
            }
            var gakuryoku_down = gakuryoku_down_Model().addChildTo(gakuryoku_downG);
            gakuryokuFlag = true;
            se_howaaP.play();
          }
        }
        //即死コマンド
        if(key.getKeyUp("escape")){
          if(damageCount > MUTEKI_TIME){
            damageFlag = true;
            gakuryoku = 5;
          }
        }

        //学力0
        if(gakuryoku <= 0){
          if(gakuryoku0Flag == true){
            gakuryoku0Flag = false
            gakuryoku = 0;
            gakuryoku0Count = 60;
            gakuryoku_label.x = jiki.x + 5;
            gakuryoku_label.y = jiki.y;
            back1MoveFlag = false;
            jiki.controlFlag = false;
            shotFlag = false;
            bgm_bgm1P.stop();
            bgm_bgm2P.stop();
          }
          jiki.y += 30;
          gakuryoku0Count--;
          if(gakuryoku0Count <= 0){
            scene = "result";
            sceneInitFlag = true;
          }
        }
        //無敵時間の点滅
        if(damageCount <= MUTEKI_TIME){
          if(damageCount % 4 <= 1)jiki.alpha = 0;
          if(damageCount % 4 >= 2)jiki.alpha = 1;
          if(damageCount == MUTEKI_TIME)jiki.alpha = 1;
        }
        //学力ラベル表示
        if(gakuryokuFlag == true){
          gakuryokuFlag = false;
          gakuryoku_label.alpha = 1;
          gakuryoku_label.text = gakuryoku;
          if(gakuryoku < 30)gakuryoku_label.fill = "red";
          if(gakuryoku >= 30)gakuryoku_label.fill = "white";
          if(gakuryoku >= 80)gakuryoku_label.fill = "yellow";
        }
        gakuryoku_label.alpha -= 0.01;
        if(gakuryoku_label.alpha < 0)gakuryoku_label.alpha = 0;

        damageCount ++;
      //---------------------------------------------------------------------------------------------------------
      break;


      case "result":
      //リザルト-----------------------------------------------------------------------------------------------
        //初期化---------------------------------------
        if(sceneInitFlag == true){
            sceneInitFlag = false;
            phase = "space";
            phaseInitFlag = true;
            gakuryoku_label.alpha = 0;
            se_kaanP.play();

            //中ボス初期化
            boss1.x = 3000;
            boss1.y = SCREEN_HEIGHT / 2;
            boss1.life = BOSS1_LIFE;
            //ボス初期化
            boss2.x = SCREEN_WIDTH / 2;
            boss2.y = -3000;
            boss2.maxLife = BOSS2_LIFE1;
            boss2.life = BOSS2_LIFE1;
            boss2.xSpeed = 0;
            boss2.ySpeed = 0;
            boss2.moveY = 0;

            //タイトル画面のオブジェクトを呼び戻す
            back1.x = 0;
            back2.y = 0 - SCREEN_HEIGHT;
            shiroid_button.x = 1150;
            shiroid2.x = 1100;
            shiroid1.x = 1100;
            rekisen_button.x = 1100;
            rekisen2.x = 1100;
            rekisen1.x = 1100;
            shiroid_button.y = 450;
            shiroid2.y = 450;
            shiroid1.y = 450;
            rekisen_button.y = 600;
            rekisen2.y = 600;
            rekisen1.y = 600;
            kokuban.alpha = 0;
            push.x = 450;
            push.y = 630;

            //オブジェクトを消す
            gakuryoku_downG.children.clear();
            gakuryoku_upG.children.clear();
            itemG.children.clear();
            atack1G.children.clear();
            shotG.children.clear();
            boss1a1G.children.clear();
            boss1a2G.children.clear();
            boss2a1G.children.clear();
            boss2a2G.children.clear();
            boss2a31G.children.clear();
            boss2a32G.children.clear();

            //リザルト画面のオブジェクトを表示
            kekka.x = 600;
            kekka.y = 430;
            kekka_kabel.x = 600;
            kekka_kabel.y = 430;
            //ツイッターボタン
            button_twitter1.x = 750;
            button_twitter2.x = 750;
            button_twitter_button.x = 750;
            button_twitter1.y = 560;
            button_twitter2.y = 560;
            button_twitter_button.y = 560;
            button_twitter1.setInteractive(true); //タッチ設定
            button_twitter1.onpointover = function() { //乗ったとき
              button_twitter1.alpha = 0;
            }
            button_twitter1.onpointout = function() { //離れたとき
              button_twitter1.alpha = 1;
            }

            if(gakuryoku >= 1){ //合格

              if(gakuryoku == 1){ //音大合格
                goukaku3.y = 0;
                if(year == 0)kekka_kabel.text = "音大現役合格";
                if(year >= 1)kekka_kabel.text = year + "浪 で 音大合格";
              }
              if(gakuryoku >= 2){ //普通の合格
                goukaku1.y = 0;
                if(year == 0)kekka_kabel.text = "現役合格　" + gakuryoku + "点";
                if(year >= 1)kekka_kabel.text = year + "浪 で 合格　" + gakuryoku + "点";
              }

              //仮面浪人ボタン
              button_kamen1.x = 450;
              button_kamen2.x = 450;
              button_kamen1.y = 560;
              button_kamen2.y = 560;
              button_kamen1.setInteractive(true); //タッチ設定
              button_kamen1.onpointover = function() { button_kamen1.alpha = 0; }
              button_kamen1.onpointout = function() { button_kamen1.alpha = 1; }
              button_kamen1.onpointend = function() { //タッチ終了時
                phase = "start";
                phaseInitFlag = true;
                button_kamen1.setInteractive(false);
              }
            }

            if(gakuryoku <= 0){ //不合格
              goukaku2.y = 0;
              if(year == 0)kekka_kabel.text = "現役不合格";
              if(year >= 1)kekka_kabel.text = "不合格　" + year + "浪";
              //もう1年ボタン
              button_retry1.x = 450;
              button_retry2.x = 450;
              button_retry1.y = 560;
              button_retry2.y = 560;
              button_retry1.setInteractive(true); //タッチ設定
              button_retry1.onpointover = function() { button_retry1.alpha = 0; }
              button_retry1.onpointout = function() { button_retry1.alpha = 1; }
              button_retry1.onpointend = function() { //タッチ終了時
                phase = "start";
                phaseInitFlag = true;
                button_kamen1.setInteractive(false);
              }
            }

            //ツイート機能
            button_twitter_button.onclick = function() {
              //ツイート機能
              var url = phina.social.Twitter.createURL({
                text: kekka_kabel.text,
                //hashtags: "避けゲーだあああああ!!!!!,勉強シロイド誕生祭2016",
                hashtags: "テスト",
                url: "http://test",
              });
              window.open(url);
            }

        }

        //リザルトメイン-----------------------------
        if(phase == "space"){
          if(key.getKey("space")){
            phase = "start";
            phaseInitFlag = true;
            button_kamen1.setInteractive(false);
            button_retry1.setInteractive(false);
          }
        }

        if(phase == "start"){
          if(phaseInitFlag == true){
            phaseInitFlag = false;
            fc = 0;
            se_kaanP.play();
            year++;
            gakuryoku = FIRST_GAKURYOKU;
            gakuryokuFlag = false;
            gakuryoku0Count = 30;
            gakuryoku0Flag = true;
            damageFlag = false;
            damageCount = 0;
          }

          if(fc < 20){ //30フレームで捌ける
            var moveSpeed = 40;
            goukaku1.y -= moveSpeed;
            goukaku2.y -= moveSpeed;
            goukaku3.y -= moveSpeed;
            kekka.x -= moveSpeed + 20;
            kekka_kabel.x -= moveSpeed + 20;
            button_kamen1.y += moveSpeed;
            button_kamen2.y += moveSpeed;
            button_retry1.y += moveSpeed;
            button_retry2.y += moveSpeed;
            button_twitter1.y += moveSpeed;
            button_twitter2.y += moveSpeed;
            button_twitter_button.y += moveSpeed;
            push.y += moveSpeed;
            shiroid1.x += moveSpeed;
            shiroid2.x += moveSpeed;
            shiroid_button.x += moveSpeed;
            rekisen1.x += moveSpeed;
            rekisen2.x += moveSpeed;
            rekisen_button.x += moveSpeed;
          }

          if(fc == 30){
            jiki.x = 0;
            jiki.y = SCREEN_HEIGHT/2;
            jiki.controlFlag = false;
            jiki.setPosition(jiki.x, jiki.y).physical.force(0, 0); //タッチ移動を停止
            jiki.alpha = 0;
            se_zettaiP.play();
            bgm_bgm1P.play();
            back1MoveFlag = true;
            back1.x = 0;
          }

          if(fc > 30){
            jiki.x += 3;
            jiki.alpha += 0.02;
            if(jiki.alpha > 1)jiki.alpha = 1;
          }

          if(fc > 120){
            scene = "main";
            phase = "atack1";
            sceneInitFlag = true;
            phaseInitFlag = true;
            jiki.controlFlag = true;
            damageCount = MUTEKI_TIME + 1;
          }

        } //phase start 終わり

      //---------------------------------------------------------------------------------------------------------
      break;

    } //swich終わり

    if(back1MoveFlag == true){ //背景を動かす
      back1.x -= 20;
      if(back1.x <= -SCREEN_WIDTH*2)back1.x = 0;
    }
    fc++; //フレームカウンター
  } //update終わり
});


/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({
    startLabel: 'main',   // MainScene から開始
    width: SCREEN_WIDTH,  // 画面幅
    height: SCREEN_HEIGHT,// 画面高さ
    assets: ASSETS,       // アセット読み込み
  });
  app.fps = 60;
  //app.enableStats(); //fps表示
  app.run(); // 実行
});


//自機のデータ-----------------------------------------------------------------------
phina.define("jiki_Model", {
  superClass: "phina.display.Sprite",
  init: function () {
    this.superInit("pic_jiki", JIKI_SIZE, JIKI_SIZE);
    var ss = phina.accessory.FrameAnimation("ss_jiki");
    ss.attachTo(this);
    this.ss = ss;
    this.ss.gotoAndPlay('start');
    this.x = 0;
    this.y = SCREEN_HEIGHT / 2;
    this.mc = 0; //タッチ移動フレームカウント
    this.controlFlag = true; //操作受付フラグ
  },
  update: function(app) {
    var p = app.pointer;//画面タッチ、クリック取得
    var key = app.keyboard;//キーボード入力取得
    var jikiXSpeed = 0;
    var jikiYSpeed = 0;

    if(this.controlFlag == true){
      //キーボード操作
      if (key.getKey('left'))jikiXSpeed -= JIKI_SPEED;
      if (key.getKey('right'))jikiXSpeed += JIKI_SPEED;
      if (key.getKey('up'))jikiYSpeed -= JIKI_SPEED;
      if (key.getKey('down'))jikiYSpeed += JIKI_SPEED;
      if(jikiXSpeed != 0 || jikiYSpeed != 0)this.setPosition(jiki.x, jiki.y).physical.force(0, 0); //タッチ移動を停止
      if(jikiXSpeed != 0 && jikiYSpeed != 0){ //斜め移動時
        jikiXSpeed *= 0.71;
        jikiYSpeed *= 0.71;
      }
      this.x += jikiXSpeed;
      this.y += jikiYSpeed;

      //タッチ操作
      if(p.getPointing()){ //タッチ中
        var fromX = this.x;
        var fromY = this.y;
        var toX = p.x;
        var toY = p.y;
        var direction = Math.atan2(toY - fromY, toX - fromX);
        var speed = JIKI_SPEED;
        var vx = Math.cos(direction) * speed;
        var vy = Math.sin(direction) * speed;
        this.setPosition(fromX, fromY).physical.force(vx, vy);
        //移動時間計測
        var kyori = Math.sqrt( ( (toY-fromY)*(toY-fromY) ) + ( (toX-fromX)*(toX-fromX) ) )
        this.mc = kyori / speed;
      }
      if(this.mc <= 0)this.setPosition(jiki.x, jiki.y).physical.force(0, 0); //タッチ移動を停止
      this.mc--;

      //移動範囲制御
      if(this.x > SCREEN_WIDTH)this.x = SCREEN_WIDTH;
      if(this.x < 0)this.x = 0;
      if(this.y > SCREEN_HEIGHT)this.y = SCREEN_HEIGHT;
      if(this.y < 0)this.y = 0;
    }

    //当たり判定の追従
    jikiHantei.x = this.x + 30;
    jikiHantei.y = this.y;
    //学力ラベルの追従
    if(gakuryoku > 0){
      gakuryoku_label.x = this.x + 5;
      gakuryoku_label.y = this.y;
    }

    //叫び
    // if(key.getKey('z')){
    //   if(key_z == 0){
    //     se_howaaP.play();
    //     key_z = 1;
    //   }
    // }else{key_z = 0;}
  }
});


//自機のショット-----------------------------------------------------------------------
phina.define("shot_Model", {
  superClass: "phina.display.Sprite",
  init: function() {
    this.superInit("pic_shot", SHOT_SIZE, SHOT_SIZE);
    this.x = jiki.x + 100;
    this.y = jiki.y;
    this.xSpeed = 50;
    this.ySpeed = 0;
  },
  update: function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    // 画面から見えなくなったら消す
    if (this.x > SCREEN_WIDTH + SHOT_SIZE) {
      this.remove();
    }
  }
});


//アイテム-----------------------------------------------------------------------
phina.define("item_Model", {
  superClass: "phina.display.Sprite",
  init: function(x,y,xSpeed,ySpeed) {
    this.superInit("pic_item", ITEM_SIZE, ITEM_SIZE);
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  },
  update: function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    // 画面から見えなくなったら消す
    if (this.x < 0 - ITEM_SIZE) {
      this.remove();
    }
  }
});


//学力-----------------------------------------------------------------------
phina.define("gakuryoku_up_Model", {
  superClass: "phina.display.Sprite",
  init: function() {
    this.superInit("pic_gakuryoku_up", GAKURYOKU_SIZE, GAKURYOKU_SIZE);
    this.x = jiki.x;
    this.y = jiki.y;
    this.ySpeed = -1;
    this.alpha = 1;
  },
  update: function() {
    this.y += this.ySpeed;
    this.alpha -= 0.02
    if (this.alpha < 0) {
      this.remove();
    }
  }
});
phina.define("gakuryoku_down_Model", {
  superClass: "phina.display.Sprite",
  init: function() {
    this.superInit("pic_gakuryoku_down", GAKURYOKU_SIZE, GAKURYOKU_SIZE);
    this.x = jiki.x;
    this.y = jiki.y;
    this.ySpeed = 1;
    this.alpha = 1;
  },
  update: function() {
    this.y += this.ySpeed;
    this.alpha -= 0.02
    if (this.alpha < 0) {
      this.remove();
    }
  }
});


//中ボス-----------------------------------------------------------------------
phina.define("boss1_Model", {
  superClass: "phina.display.Sprite",
  init: function() {
    this.superInit("pic_boss1", BOSS1_WIDTH, BOSS1_HEIGHT);
    this.x = 3000;
    this.y = SCREEN_HEIGHT / 2;
    this.life = BOSS1_LIFE;
  },
  update: function() {
    if(this.life <= 0){
      this.life = 0;
    }
    this.alpha = this.life / BOSS1_LIFE;
  }
});
phina.define("boss1d_Model", {
  superClass: "phina.display.Sprite",
  init: function() {
    this.superInit("pic_boss1d", BOSS1_WIDTH, BOSS1_HEIGHT);
  },
  update: function() {
    this.x = boss1.x;
    this.y = boss1.y;
  }
});


//ボス-----------------------------------------------------------------------
phina.define("boss2_Model", {
  superClass: "phina.display.Sprite",
  init: function() {
    this.superInit("pic_boss2", BOSS2_WIDTH, BOSS2_HEIGHT);
    this.x = SCREEN_WIDTH / 2;
    this.y = -3000;
    this.maxLife = BOSS2_LIFE1;
    this.life = BOSS2_LIFE1;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.moveY = 0; // ボスの移動先
  },
  update: function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.life <= 0){
      this.life = 0;
    }
    this.alpha = this.life / this.maxLife;
  }
});
phina.define("boss2d_Model", {
  superClass: "phina.display.Sprite",
  init: function() {
    this.superInit("pic_boss2d", BOSS2_WIDTH, BOSS2_HEIGHT);
  },
  update: function() {
    this.x = boss2.x;
    this.y = boss2.y;
  }
});


//ばらまき-----------------------------------------------------------------------
phina.define("atack1_Model", {
  superClass: "phina.display.Sprite",
  init: function() {
    this.superInit("pic_bullet1", BULLET1_SIZE, BULLET1_SIZE);
    this.frameIndex = Math.randint(0, 11);
    this.x = SCREEN_WIDTH + BULLET1_SIZE;
    this.y = Math.randint(0, SCREEN_HEIGHT);
    this.xSpeed = Math.randint(-3, -9);
    this.ySpeed = Math.randint(-0.2, 0.2);
  },
  update: function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    // 画面から見えなくなったら消す
    if (this.x < 0 - BULLET1_SIZE) {
      this.remove();
    }
  }
});


//中ボス攻撃------------------------------------------------------------------------
phina.define("boss1a1_Model", {
  superClass: "phina.display.Sprite",
  init: function() {
    this.superInit("pic_bullet1", BULLET1_SIZE, BULLET1_SIZE);
    this.frameIndex = Math.randint(0, 11);
    this.x = boss1.x;
    this.y = boss1.y;
    var fromX = this.x;
    var fromY = this.y;
    var toX = jiki.x;
    var toY = jiki.y;
    var direction = Math.atan2(toY - fromY, toX - fromX);
    var speed = 10;
    var vx = Math.cos(direction) * speed;
    var vy = Math.sin(direction) * speed;
    this.setPosition(fromX, fromY).physical.force(vx, vy);
  },
  update: function() {
    if (this.x < 0 - BULLET1_SIZE)this.remove(); // 画面から見えなくなったら消す
    if (this.y < 0 - BULLET1_SIZE)this.remove();
    if (this.x > SCREEN_WIDTH + BULLET1_SIZE)this.remove();
    if (this.y > SCREEN_HEIGHT + BULLET1_SIZE)this.remove();
  }
});
phina.define("boss1a2_Model", {
  superClass: "phina.display.Sprite",
  init: function() {
    this.superInit("pic_bullet1", BULLET1_SIZE, BULLET1_SIZE);
    this.frameIndex = Math.randint(0, 11);
    this.x = boss1.x;
    this.y = boss1.y;
    var direction = (fc % 6283) / 1000 * 200;
    var speed = 4;
    var vx = Math.cos(direction) * speed;
    var vy = Math.sin(direction) * speed;
    this.setPosition(this.x, this.y).physical.force(vx, vy);
  },
  update: function() {
    if (this.x < 0 - BULLET1_SIZE)this.remove(); // 画面から見えなくなったら消す
    if (this.y < 0 - BULLET1_SIZE)this.remove();
    if (this.x > SCREEN_WIDTH + BULLET1_SIZE)this.remove();
    if (this.y > SCREEN_HEIGHT + BULLET1_SIZE)this.remove();
  }
});


//ボスアタック1------------------------------------------------------------------------
phina.define("boss2a1_Model", {
  superClass: "phina.display.Sprite",
  init: function(direction) {
    this.superInit("pic_bullet2", BULLET1_SIZE, BULLET1_SIZE);
    this.frameIndex = Math.randint(0, 11);
    this.x = boss2.x;
    this.y = boss2.y;
    this.flag = true;
    this.direction = direction;
  },
  update: function() {
    if(this.flag == true){
      this.flag = false;
      var direction = this.direction * Math.DEG_TO_RAD;
      var speed = 10;
      var vx = Math.cos(direction) * speed;
      var vy = Math.sin(direction) * speed;
      this.setPosition(this.x, this.y).physical.force(vx, vy);
    }

    if (this.x < 0 - BULLET1_SIZE)this.remove(); // 画面から見えなくなったら消す
    if (this.y < 0 - BULLET1_SIZE)this.remove();
    if (this.x > SCREEN_WIDTH + BULLET1_SIZE)this.remove();
    if (this.y > SCREEN_HEIGHT + BULLET1_SIZE)this.remove();
  }
});


//ボスアタック2------------------------------------------------------------------------
phina.define("boss2a2_Model", {
  superClass: "phina.display.Sprite",
  init: function() {
    this.superInit("pic_bullet2", BULLET1_SIZE, BULLET1_SIZE);
    this.frameIndex = Math.randint(0, 11);
    this.x = boss2.x + 100;
    this.y = boss2.y;
    var fromX = this.x;
    var fromY = this.y;
    var toX = jiki.x;
    var toY = jiki.y + Math.randint(-50,50);
    var direction = Math.atan2(toY - fromY, toX - fromX);
    var speed = Math.randfloat(10,20);
    var vx = Math.cos(direction) * speed;
    var vy = Math.sin(direction) * speed;
    this.setPosition(fromX, fromY).physical.force(vx, vy);
  },
  update: function() {
    if (this.x < 0 - BULLET1_SIZE)this.remove(); // 画面から見えなくなったら消す
    if (this.y < 0 - BULLET1_SIZE)this.remove();
    if (this.x > SCREEN_WIDTH + BULLET1_SIZE)this.remove();
    if (this.y > SCREEN_HEIGHT + BULLET1_SIZE)this.remove();
  }
});


//ボスアタック3-1------------------------------------------------------------------------
phina.define("boss2a31_Model", {
  superClass: "phina.display.Sprite",
  init: function(direction) {
    this.superInit("pic_bullet1", BULLET1_SIZE, BULLET1_SIZE);
    this.frameIndex = Math.randint(0, 11);
    this.x = boss2.x;
    this.y = boss2.y;
    this.flag = true;
    this.direction = direction + (fc/4);
  },
  update: function() {
    if(this.flag == true){
      this.flag = false;
      var direction = this.direction * Math.DEG_TO_RAD;
      var speed = 7;
      var vx = Math.cos(direction) * speed;
      var vy = Math.sin(direction) * speed;
      this.setPosition(this.x, this.y).physical.force(vx, vy);
    }

    if (this.x < 0 - BULLET1_SIZE)this.remove(); // 画面から見えなくなったら消す
    if (this.y < 0 - BULLET1_SIZE)this.remove();
    if (this.x > SCREEN_WIDTH + BULLET1_SIZE)this.remove();
    if (this.y > SCREEN_HEIGHT + BULLET1_SIZE)this.remove();
  }
});

//ボスアタック3-2------------------------------------------------------------------------
phina.define("boss2a32_Model", {
  superClass: "phina.display.Sprite",
  init: function(direction) {
    this.superInit("pic_bullet2", BULLET1_SIZE, BULLET1_SIZE);
    this.frameIndex = Math.randint(0, 11);
    this.x = boss2.x;
    this.y = boss2.y;
    this.flag = true;
    this.direction = direction - (fc/2);
  },
  update: function() {
    if(this.flag == true){
      this.flag = false;
      var direction = this.direction * Math.DEG_TO_RAD;
      var speed = 7;
      var vx = Math.cos(direction) * speed;
      var vy = Math.sin(direction) * speed;
      this.setPosition(this.x, this.y).physical.force(vx, vy);
    }

    if (this.x < 0 - BULLET1_SIZE)this.remove(); // 画面から見えなくなったら消す
    if (this.y < 0 - BULLET1_SIZE)this.remove();
    if (this.x > SCREEN_WIDTH + BULLET1_SIZE)this.remove();
    if (this.y > SCREEN_HEIGHT + BULLET1_SIZE)this.remove();
  }
});
