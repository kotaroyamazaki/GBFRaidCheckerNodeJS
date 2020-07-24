module.exports = {

    /* 一度表示したIDは再度表示しない */
    newOnly: true,

    /* 救援がきたら音を鳴らす */
    isSound: false,

    /* ------------------------------------------ */
    /* マルチボスごとのトラッキングの有無を設定する */
    /* true で有効 / false で無効 */
    /* ------------------------------------------ */
    switch: {
        "グランデHL": false,
        "ルシファー": false,
        "ティアマト・マリスHL": false,
        "リヴァイアサン・マリスHL": false,
        "フロネシスHL": false,
        "アーカーシャHL": true,
        "四大天司HL": false,
        "シヴァHL": false,
        "エウロペHL": false,
        "ゴッドガード・ブローディアHL": false,
        "グリームニルHL": false,
        "メタトロンHL": false,
        "アバターHL": false,
        "プロトバハムート": false,
        "ジ・オーダー・グランデ": false,
        "アルティメットバハムート": false,
        "ティアマト・マグナ": false,
        "コロッサス・マグナ": false,
        "リヴァイアサン・マグナ": false,
        "ユグドラシル・マグナ": false,
        "シュヴァリエ・マグナ": false,
        "セレスト・マグナ": false,
        "ティアマト・マグナ HL": false,
        "コロッサス・マグナ HL": false,
        "リヴァイアサン・マグナ HL": false,
        "ユグドラシル・マグナ HL": false,
        "シュヴァリエ・マグナ HL": false,
        "セレスト・マグナ HL": false,
        "ローズクイーン": false,
        "黒麒麟": false,
        "黄龍": false,
        "黄龍・黒麒麟HL": false,
        "フラム＝グラス": false,
        "マキュラ・マリウス": false,
        "メドゥーサ": false,
        "ナタク": false,
        "アポロン": false,
        "Dエンジェル・オリヴィエ": false,
        "アテナ": false,
        "グラニ": false,
        "ガルーダ": false,
        "バアル": false,
        "オーディン": false,
        "リッチ": false,
        "プロトバハムート HL": false,
        "フラム＝グラス HL": false,
        "マキュラ・マリウス HL": false,
        "メドゥーサ HL": false,
        "ナタク HL": false,
        "アポロン HL": false,
        "Dエンジェル・オリヴィエ HL": false,
        "プロメテウス": false,
        "カー・オン": false,
        "ギルガメッシュ": false,
        "バイヴカハ": false,
        "ヘクトル": false,
        "アヌビス": false,
        "天司４種": false,
        "ミカエル": false,
        "ガブリエル": false,
        "ウリエル": false,
        "ラファエル": false,
        "アルティメットバハムート HL": false,
    },

    /* ------------------------------------------ */
    /** マルチボス名のマッチングキーワードとLv */
    /* ------------------------------------------ */
    detail: {
        "アーカーシャHL": { ja: "アーカーシャ", en: "Akasha", lv:"200" },
        "グランデHL": { ja: "グランデ", en: "Grand", lv:"200" },
        "フロネシスHL": { ja: "フロネシス", en: "Phronesis", lv:"150" },
        "ルシファー": { ja: "ルシファー", en: "Lucilius", lv:"150" },
        "ティアマト・マリスHL": { ja: "ティアマト", en: "Tiamat", lv:"150" },
        "リヴァイアサン・マリスHL": { ja: "リヴァイアサン", en: "Leviathan", lv:"150" },
        "四大天司HL": { ja: "四大天司", en: "Primarchs", lv:"" },
        "シヴァHL": { ja: "シヴァ", en: "Shiva", lv:"120" },
        "エウロペHL": { ja: "エウロペ", en:"Europa", lv:"120" },
        "ゴッドガード・ブローディアHL": { ja: "ブローディア", en: "Alexiel", lv:"120" },
        "グリームニルHL": { ja: "グリームニル", en: "Grimnir", lv:"120" },
        "メタトロンHL": { ja: "メタトロン", en: "Metatron", lv:"120" },
        "アバターHL": { ja: "アバター", en: "Avatar", lv:"120" },
        "プロトバハムート": { ja: "プロトバハムート", en: "Proto", lv:"100" },
        "ジ・オーダー・グランデ": { ja: "グランデ", en: "Order", lv:"100" },
        "アルティメットバハムート": { ja: "アルティメット", en: "Ultimate", lv:"150" },
        "ティアマト・マグナ": { ja: "ティアマト", en: "Tiamat", lv:"50" },
        "コロッサス・マグナ": { ja: "コロッサス", en: "Colossus", lv:"70" },
        "リヴァイアサン・マグナ": { ja: "リヴァイアサン", en: "Leviathan", lv:"60" },
        "ユグドラシル・マグナ": { ja: "ユグドラシル", en: "Yggdrasil", lv:"60" },
        "シュヴァリエ・マグナ": { ja: "シュヴァリエ", en: "Luminiera", lv:"75" },
        "セレスト・マグナ": { ja: "セレスト", en: "Celeste", lv:"75" },
        "ティアマト・マグナ HL": { ja: "ティアマト", en: "Tiamat", lv:"100" },
        "コロッサス・マグナ HL": { ja: "コロッサス", en: "Colossus", lv:"100" },
        "リヴァイアサン・マグナ HL": { ja: "リヴァイアサン", en: "Leviathan", lv:"100" },
        "ユグドラシル・マグナ HL": { ja: "ユグドラシル", en: "Yggdrasil", lv:"100" },
        "シュヴァリエ・マグナ HL": { ja: "シュヴァリエ", en: "Luminiera", lv:"100" },
        "セレスト・マグナ HL": { ja: "セレスト", en: "Celeste", lv:"100" },
        "ローズクイーン": { ja: "ローズクイーン", en: "", lv:"110" },
        "黒麒麟": { ja: "黒麒麟", en: "Qilin", lv:"100" },
        "黄龍": { ja: "黄龍", en: "Huanglong", lv:"100" },
        "黄龍・黒麒麟HL": { ja: "黄龍 黒麒麟,", en: "Huanglong Qilin", lv:"" },
        "フラム＝グラス": { ja: "フラム＝グラス", en: "", lv:"100" },
        "マキュラ・マリウス": { ja: "マキュラ", en: "", lv:"100" },
        "メドゥーサ": { ja: "メドゥーサ", en: "", lv:"100" },
        "ナタク": { ja: "ナタク", en: "", lv:"100" },
        "アポロン": { ja: "アポロン", en: "", lv:"100" },
        "Dエンジェル・オリヴィエ": { ja: "オリヴィエ", en: "", lv:"100" },
        "アテナ": { ja: "アテナ", en: "", lv:"100" },
        "グラニ": { ja: "グラニ", en: "", lv:"100" },
        "ガルーダ": { ja: "ガルーダ", en: "", lv:"100" },
        "バアル": { ja: "バアル", en: "", lv:"100" },
        "オーディン": { ja: "オーディン", en: "", lv:"100" },
        "リッチ": { ja: "リッチ", en: "", lv:"100" },
        "プロトバハムート HL": { ja: "プロトバハムート", en: "", lv:"150" },
        "フラム＝グラス HL": { ja: "フラム＝グラス", en: "", lv:"120" },
        "マキュラ・マリウス HL": { ja: "マキュラ", en: "", lv:"120" },
        "メドゥーサ HL": { ja: "メドゥーサ", en: "", lv:"120" },
        "ナタク HL": { ja: "ナタク", en: "", lv:"120" },
        "アポロン HL": { ja: "アポロン", en: "", lv:"120" },
        "Dエンジェル・オリヴィエ HL": { ja: "オリヴィエ", en: "", lv:"120" },
        "プロメテウス": { ja: "プロメテウス", en: "", lv:"120" },
        "カー・オン": { ja: "カー・オン", en: "", lv:"120" },
        "ギルガメッシュ": { ja: "ギルガメッシュ", en: "", lv:"120" },  
        "バイヴカハ": { ja: "バイヴカハ", en: "Morrigna", lv:"120" },
        "ヘクトル": { ja: "ヘクトル", en: "", lv:"120" },
        "アヌビス": { ja: "アヌビス", en: "", lv:"120" },
        "天司４種": { ja: "ミカエル ガブリエル ウリエル ラファエル", en: "", lv:"100" },
        "ミカエル": { ja: "ミカエル", en: "", lv:"100" },
        "ガブリエル": { ja: "ガブリエル", en: "", lv:"100" },
        "ウリエル": { ja: "ウリエル", en: "", lv:"100" },
        "ラファエル": { ja: "ラファエル", en: "", lv:"100" },
        "アルティメットバハムート HL": { ja: "アルティメット", en: "Ultimate", lv:"200" },
    }

};

