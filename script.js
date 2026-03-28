// 1. QUIZ DATA (Global Variable)
const quizQuestions = [
    { question: "What is the meaning of '水'?", options: ["Fire", "Water", "Tree", "Gold"], correct: 1 },
    { question: "How do you say 'School' in Japanese?", options: ["Gakkou", "Sensei", "Eki", "Uchi"], correct: 0 },
    { question: "Which particle marks the topic of a sentence?", options: ["Wo", "Ni", "Ka", "Wa"], correct: 3 },
    { question: "What is the meaning of 'たべる'?", options: ["To drink", "To see", "To eat", "To go"], correct: 2 },
    { question: "What is the meaning of '本'?", options: ["Tree", "Book", "Person", "Sun"], correct: 1 },
    { question: "How do you say 'Goodbye' politely?", options: ["Ohayou", "Konnichiwa", "Sayounara", "Oyasumi"], correct: 2 },
    { question: "Which particle indicates 'possession'?", options: ["Wa", "Wo", "Ni", "No"], correct: 3 },
    { question: "What is the meaning of 'いぬ'?", options: ["Cat", "Bird", "Fish", "Dog"], correct: 3 },
    { question: "Translate 'Sensei'.", options: ["Student", "Doctor", "Teacher", "Engineer"], correct: 2 },
    // --- KANJI SECTION (34 Questions) ---
    { question: "What is the meaning of the Kanji '日'?", options: ["Moon", "Sun/Day", "Gold", "Tree"], correct: 1 },
    { question: "How is '月' read in '一月' (January)?", options: ["Tsuki", "Gatsu", "Getsu", "Katsu"], correct: 1 },
    { question: "Which Kanji means 'Fire'?", options: ["水", "木", "金", "火"], correct: 3 },
    { question: "What is the meaning of '水'?", options: ["Soil", "Wind", "Water", "Rice Field"], correct: 2 },
    { question: "Which Kanji represents 'Tree'?", options: ["本", "木", "林", "森"], correct: 1 },
    { question: "What does '金' mean in the context of 'お金'?", options: ["Gold/Money", "Friday", "Metal", "King"], correct: 0 },
    
    
];

// 2. MAIN FUNCTION TO SHOW CONTENT
function showContent(type) {
    const display = document.getElementById('display-area');
    
    // Safety check: If the display area doesn't exist, stop here
    if (!display) {
        console.error("Error: Could not find an element with id='display-area'");
        return;
    }

    let html = "";

    if (type === 'kanji') {
        html = `<h3>N5 Kanji List</h3>
        <table>
            <thead>
                <tr><th>No.</th><th>Kanji</th><th>Onyomi</th><th>Kunyomi</th><th>Meaning</th><th>Pronunciation</th></tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>一</td><td>イチ</td><td>ひと</td><td>One</td><td>一人 (Hitori)</td></tr>
<tr><td>2</td><td>二</td><td>ニ</td><td>ふた</td><td>Two</td><td>二つ (Futatsu)</td></tr>
<tr><td>3</td><td>三</td><td>サン</td><td>み</td><td>Three</td><td>三日 (Mikka)</td></tr>
<tr><td>4</td><td>四</td><td>シ</td><td>よ / よん</td><td>Four</td><td>四月 (Shigatsu)</td></tr>
<tr><td>5</td><td>五</td><td>ゴ</td><td>いつ</td><td>Five</td><td>五つ (Itsutsu)</td></tr>
<tr><td>6</td><td>六</td><td>ロク</td><td>む</td><td>Six</td><td>六日 (Muika)</td></tr>
<tr><td>7</td><td>七</td><td>シチ</td><td>なな</td><td>Seven</td><td>七つ (Nanatsu)</td></tr>
<tr><td>8</td><td>八</td><td>ハチ</td><td>や</td><td>Eight</td><td>八日 (Youka)</td></tr>
<tr><td>9</td><td>九</td><td>キュウ / ク</td><td>ここの</td><td>Nine</td><td>九九 (Kuku)</td></tr>
<tr><td>10</td><td>十</td><td>ジュウ</td><td>とお</td><td>Ten</td><td>十日 (Tooka)</td></tr>
<tr><td>11</td><td>百</td><td>ヒャク</td><td>---</td><td>Hundred</td><td>三百 (Sanbyaku)</td></tr>
<tr><td>12</td><td>千</td><td>セン</td><td>ち</td><td>Thousand</td><td>三千 (Sanzen)</td></tr>
<tr><td>13</td><td>万</td><td>マン</td><td>---</td><td>Ten Thousand</td><td>一万円 (Ichimanen)</td></tr>
<tr><td>14</td><td>円</td><td>エン</td><td>まる</td><td>Yen / Circle</td><td>千円 (Senen)</td></tr>
<tr><td>15</td><td>時</td><td>ジ</td><td>とき</td><td>Time / Hour</td><td>四時 (Yoji)</td></tr>
<tr><td>16</td><td>分</td><td>フン / ブン</td><td>わ-かる</td><td>Minute / Understand</td><td>五分 (Gofun)</td></tr>
<tr><td>17</td><td>半</td><td>ハン</td><td>なか</td><td>Half</td><td>三時半 (Sanjihan)</td></tr>
<tr><td>18</td><td>午</td><td>ゴ</td><td>---</td><td>Noon</td><td>午前 (Gozen)</td></tr>
<tr><td>19</td><td>今</td><td>コン</td><td>いま</td><td>Now</td><td>今日 (Kyou)</td></tr>
<tr><td>20</td><td>週</td><td>シュウ</td><td>---</td><td>Week</td><td>来週 (Raishuu)</td></tr>
<tr><td>21</td><td>日</td><td>ニチ / ニ</td><td>ひ / -び</td><td>Day / Sun</td><td>日本 (Nippon)</td></tr>
<tr><td>22</td><td>月</td><td>ゲツ / ガツ</td><td>つき</td><td>Month / Moon</td><td>一月 (Ichigatsu)</td></tr>
<tr><td>23</td><td>火</td><td>カ</td><td>ひ</td><td>Fire</td><td>火曜日 (Kayoubi)</td></tr>
<tr><td>24</td><td>水</td><td>スイ</td><td>みず</td><td>Water</td><td>水曜日 (Suiyoubi)</td></tr>
<tr><td>25</td><td>木</td><td>モク</td><td>き</td><td>Tree / Wood</td><td>木曜日 (Mokuyoubi)</td></tr>
<tr><td>26</td><td>金</td><td>キン</td><td>かね</td><td>Gold / Money</td><td>お金 (Okane)</td></tr>
<tr><td>27</td><td>土</td><td>ド</td><td>つち</td><td>Earth / Soil</td><td>土曜日 (Doyoubi)</td></tr>
<tr><td>28</td><td>山</td><td>サン</td><td>やま</td><td>Mountain</td><td>富士山 (Fujisan)</td></tr>
<tr><td>29</td><td>川</td><td>セン</td><td>かわ</td><td>River</td><td>小川 (Ogawa)</td></tr>
<tr><td>30</td><td>田</td><td>デン</td><td>た</td><td>Rice field</td><td>田中 (Tanaka)</td></tr>
<tr><td>31</td><td>天</td><td>テン</td><td>あま</td><td>Heaven / Sky</td><td>天気 (Tenki)</td></tr>
<tr><td>32</td><td>気</td><td>キ</td><td>---</td><td>Spirit / Air</td><td>元気 (Genki)</td></tr>
<tr><td>33</td><td>雨</td><td>ウ</td><td>あめ</td><td>Rain</td><td>大雨 (Ooame)</td></tr>
<tr><td>34</td><td>電</td><td>デン</td><td>---</td><td>Electricity</td><td>電車 (Densha)</td></tr>
<tr><td>35</td><td>車</td><td>シャ</td><td>くるま</td><td>Car / Vehicle</td><td>自転車 (Jidensha)</td></tr>
<tr><td>36</td><td>門</td><td>モン</td><td>かど</td><td>Gate</td><td>正門 (Seimon)</td></tr>
<tr><td>37</td><td>道</td><td>ドウ</td><td>みち</td><td>Road / Way</td><td>書道 (Shodou)</td></tr>
<tr><td>38</td><td>空</td><td>クウ</td><td>そら / あ-く</td><td>Sky / Empty</td><td>空港 (Kuukou)</td></tr>
<tr><td>39</td><td>海</td><td>カイ</td><td>うみ</td><td>Sea / Ocean</td><td>海外 (Kaigai)</td></tr>
<tr><td>40</td><td>花</td><td>カ</td><td>はな</td><td>Flower</td><td>花火 (Hanabi)</td></tr>
<tr><td>41</td><td>人</td><td>ジン / ニン</td><td>ひと</td><td>Person</td><td>日本人 (Nihonjin)</td></tr>
<tr><td>42</td><td>子</td><td>シ</td><td>こ</td><td>Child</td><td>子供 (Kodomo)</td></tr>
<tr><td>43</td><td>女</td><td>ジョ</td><td>おんな</td><td>Woman</td><td>女の子 (Onnanoko)</td></tr>
<tr><td>44</td><td>男</td><td>ダン</td><td>おとこ</td><td>Man</td><td>男の子 (Otokoko)</td></tr>
<tr><td>45</td><td>父</td><td>フ</td><td>ちち</td><td>Father</td><td>お父さん (Otousan)</td></tr>
<tr><td>46</td><td>母</td><td>ボ</td><td>はは</td><td>Mother</td><td>お母さん (Okaasan)</td></tr>
<tr><td>47</td><td>友</td><td>ユウ</td><td>とも</td><td>Friend</td><td>友達 (Tomodachi)</td></tr>
<tr><td>48</td><td>先</td><td>セン</td><td>さき</td><td>Before / Previous</td><td>先生 (Sensei)</td></tr>
<tr><td>49</td><td>生</td><td>セイ</td><td>う-まれる</td><td>Life / Birth</td><td>学生 (Gakusei)</td></tr>
<tr><td>50</td><td>名</td><td>メイ</td><td>な</td><td>Name</td><td>名前 (Namae)</td></tr>
<tr><td>51</td><td>上</td><td>ジョウ</td><td>うえ</td><td>Up / Above</td><td>机の上 (Tsukue no ue)</td></tr>
<tr><td>52</td><td>下</td><td>カ / ゲ</td><td>した</td><td>Down / Below</td><td>地下鉄 (Chikatetsu)</td></tr>
<tr><td>53</td><td>中</td><td>チュウ</td><td>なか</td><td>Inside / Middle</td><td>中国 (Chuugoku)</td></tr>
<tr><td>54</td><td>外</td><td>ガイ</td><td>そと</td><td>Outside</td><td>外国 (Gaikoku)</td></tr>
<tr><td>55</td><td>右</td><td>ユウ / ウ</td><td>みぎ</td><td>Right</td><td>右手 (Migite)</td></tr>
<tr><td>56</td><td>左</td><td>サ</td><td>ひだり</td><td>Left</td><td>左手 (Hidarite)</td></tr>
<tr><td>57</td><td>前</td><td>ゼン</td><td>まえ</td><td>Before / Front</td><td>午前 (Gozen)</td></tr>
<tr><td>58</td><td>後</td><td>ゴ</td><td>うし-ろ / あと</td><td>After / Behind</td><td>午後 (Gogo)</td></tr>
<tr><td>59</td><td>北</td><td>ホク</td><td>きた</td><td>North</td><td>北海道 (Hokkaido)</td></tr>
<tr><td>60</td><td>南</td><td>ナン</td><td>みなみ</td><td>South</td><td>南国 (Nangoku)</td></tr>
<tr><td>61</td><td>行</td><td>コウ</td><td>い-く</td><td>To go</td><td>銀行 (Ginkou)</td></tr>
<tr><td>62</td><td>来</td><td>ライ</td><td>く-る</td><td>To come</td><td>来月 (Raigetsu)</td></tr>
<tr><td>63</td><td>出</td><td>シュツ</td><td>で-る</td><td>Exit / Go out</td><td>出口 (Deguchi)</td></tr>
<tr><td>64</td><td>入</td><td>ニュウ</td><td>はい-る</td><td>Enter / Put in</td><td>入口 (Iriguchi)</td></tr>
<tr><td>65</td><td>見</td><td>ケン</td><td>み-る</td><td>To see / look</td><td>見学 (Kengaku)</td></tr>
<tr><td>66</td><td>聞</td><td>ブン</td><td>き-く</td><td>To hear / listen</td><td>新聞 (Shinbun)</td></tr>
<tr><td>67</td><td>書</td><td>ショ</td><td>か-く</td><td>To write</td><td>辞書 (Jisho)</td></tr>
<tr><td>68</td><td>読</td><td>ドク</td><td>よ-む</td><td>To read</td><td>読書 (Dokusho)</td></tr>
<tr><td>69</td><td>話</td><td>ワ</td><td>はな-す</td><td>To speak / talk</td><td>電話 (Denwa)</td></tr>
<tr><td>70</td><td>言</td><td>ゲン</td><td>い-う</td><td>To say</td><td>言語 (Gengo)</td></tr>
<tr><td>71</td><td>買</td><td>バイ</td><td>か-う</td><td>To buy</td><td>買い物 (Kaimono)</td></tr>
<tr><td>72</td><td>食</td><td>ショク</td><td>た-べる</td><td>To eat</td><td>食べ物 (Tabemono)</td></tr>
<tr><td>73</td><td>飲</td><td>イン</td><td>の-む</td><td>To drink</td><td>飲み物 (Nomimono)</td></tr>
<tr><td>74</td><td>立</td><td>リツ</td><td>た-つ</td><td>To stand</td><td>国立 (Kokuritsu)</td></tr>
<tr><td>75</td><td>休</td><td>キュウ</td><td>やす-む</td><td>To rest</td><td>休日 (Kyuujitsu)</td></tr>
<tr><td>76</td><td>歩</td><td>ホ</td><td>ある-く</td><td>To walk</td><td>散歩 (Sanpo)</td></tr>
<tr><td>77</td><td>使</td><td>シ</td><td>つか-う</td><td>To use</td><td>大使館 (Taishikan)</td></tr>
<tr><td>78</td><td>作</td><td>サク</td><td>つく-る</td><td>To make</td><td>作文 (Sakubun)</td></tr>
<tr><td>79</td><td>始</td><td>シ</td><td>はじ-める</td><td>To begin</td><td>開始 (Kaishi)</td></tr>
<tr><td>80</td><td>終</td><td>シュウ</td><td>お-わる</td><td>To end / finish</td><td>終点 (Shuuten)</td></tr>
<tr><td>81</td><td>大</td><td>ダイ</td><td>おお-きい</td><td>Big</td><td>大好き (Daisuki)</td></tr>
<tr><td>82</td><td>小</td><td>ショウ</td><td>ちい-さい</td><td>Small</td><td>小学校 (Shougakkou)</td></tr>
<tr><td>83</td><td>高</td><td>コウ</td><td>たか-い</td><td>High / Expensive</td><td>高校 (Koukou)</td></tr>
<tr><td>84</td><td>安</td><td>アン</td><td>やす-い</td><td>Cheap / Safe</td><td>安心 (Anshin)</td></tr>
<tr><td>85</td><td>新</td><td>シン</td><td>あたら-しい</td><td>New</td><td>新聞 (Shinbun)</td></tr>
<tr><td>86</td><td>古</td><td>コ</td><td>ふる-い</td><td>Old</td><td>中古 (Chuuko)</td></tr>
<tr><td>87</td><td>長</td><td>チョウ</td><td>なが-い</td><td>Long / Leader</td><td>校長 (Kouchou)</td></tr>
<tr><td>88</td><td>多</td><td>タ</td><td>おお-い</td><td>Many / Much</td><td>多分 (Tabun)</td></tr>
<tr><td>89</td><td>少</td><td>ショウ</td><td>すく-ない</td><td>Few / Little</td><td>少し (Sukoshi)</td></tr>
<tr><td>90</td><td>白</td><td>ハク</td><td>しろ-い</td><td>White</td><td>白人 (Hakujin)</td></tr>
<tr><td>91</td><td>赤</td><td>セキ</td><td>あか-い</td><td>Red</td><td>赤ちゃん (Akachan)</td></tr>
<tr><td>92</td><td>青</td><td>セイ</td><td>あお-い</td><td>Blue</td><td>青年 (Seinen)</td></tr>
<tr><td>93</td><td>黒</td><td>コク</td><td>くろ-い</td><td>Black</td><td>黒板 (Kokuban)</td></tr>
<tr><td>94</td><td>明</td><td>メイ</td><td>あか-るい</td><td>Bright / Light</td><td>明日 (Ashita)</td></tr>
<tr><td>95</td><td>国</td><td>コク</td><td>くに</td><td>Country</td><td>外国 (Gaikoku)</td></tr>
<tr><td>96</td><td>学</td><td>ガク</td><td>まな-ぶ</td><td>Study / Learn</td><td>学生 (Gakusei)</td></tr>
<tr><td>97</td><td>校</td><td>コウ</td><td>---</td><td>School</td><td>学校 (Gakkou)</td></tr>
<tr><td>98</td><td>店</td><td>テン</td><td>みせ</td><td>Shop / Store</td><td>売店 (Baiten)</td></tr>
<tr><td>99</td><td>社</td><td>シャ</td><td>やしろ</td><td>Company / Shrine</td><td>会社 (Kaisha)</td></tr>
<tr><td>100</td><td>京</td><td>キョウ</td><td>みやco</td><td>Capital</td><td>東京 (Tokyo)</td></tr>
            </tbody>
        </table>`;
    } 
    else if (type === 'vocab') {
        html = `<h3>N5 Vocabulary List</h3>
        <table>
            <thead>
                <tr><th>No.</th><th>Vocabulary</th><th>Meaning</th><th>Pronunciation</th><th>Example</th></tr>
                <tr><td>1</td><td>私 (わたし)</td><td>I / Me</td><td>Watashi</td><td>私は学生です。(Watashi wa gakusei desu.)</td></tr>
<tr><td>2</td><td>あなた</td><td>You</td><td>Anata</td><td>あなたはだれですか。(Anata wa dare desu ka?)</td></tr>
<tr><td>3</td><td>人 (ひと)</td><td>Person</td><td>Hito</td><td>あの人はだれですか。(Ano hito wa dare desu ka?)</td></tr>
<tr><td>4</td><td>子供 (こども)</td><td>Child</td><td>Kodomo</td><td>子供が三人います。(Kodomo ga san-nin imasu.)</td></tr>
<tr><td>5</td><td>お父さん (おとうさん)</td><td>Father</td><td>Otousan</td><td>お父さんは元気です。(Otousan wa genki desu.)</td></tr>
<tr><td>6</td><td>お母さん (おかあさん)</td><td>Mother</td><td>Okaasan</td><td>お母さんは料理が好きです。(Okaasan wa ryouri ga suki desu.)</td></tr>
<tr><td>7</td><td>お兄さん (おにいさん)</td><td>Older Brother</td><td>Oniisan</td><td>お兄さんは大学生です。(Oniisan wa daigakusei desu.)</td></tr>
<tr><td>8</td><td>お姉さん (おねえさん)</td><td>Older Sister</td><td>Oneesan</td><td>お姉さんはきれいです。(Oneesan wa kirei desu.)</td></tr>
<tr><td>9</td><td>弟 (おとうと)</td><td>Younger Brother</td><td>Otouto</td><td>弟は高校生です。(Otouto wa koukousei desu.)</td></tr>
<tr><td>10</td><td>妹 (いもうと)</td><td>Younger Sister</td><td>Imouto</td><td>妹はかわいいです。(Imouto wa kawaii desu.)</td></tr>
<tr><td>11</td><td>家族 (かぞく)</td><td>Family</td><td>Kazoku</td><td>家族は四人です。(Kazoku wa yo-nin desu.)</td></tr>
<tr><td>12</td><td>友達 (ともだち)</td><td>Friend</td><td>Tomodachi</td><td>友達と遊びます。(Tomodachi to asobimasu.)</td></tr>
<tr><td>13</td><td>先生 (せんせい)</td><td>Teacher</td><td>Sensei</td><td>日本語の先生です。(Nihongo no sensei desu.)</td></tr>
<tr><td>14</td><td>学生 (がくせい)</td><td>Student</td><td>Gakusei</td><td>私は大学生です。(Watashi wa daigakusei desu.)</td></tr>
<tr><td>15</td><td>留学生 (りゅうがくせい)</td><td>Foreign Student</td><td>Ryuugakusei</td><td>彼は留学生です。(Kare wa ryuugakusei desu.)</td></tr>
<tr><td>16</td><td>医者 (いしゃ)</td><td>Doctor</td><td>Isha</td><td>医者になりたいです。(Isha ni naritai desu.)</td></tr>
<tr><td>17</td><td>会社員 (かいしゃいん)</td><td>Office Worker</td><td>Kaishayin</td><td>父は会社員です。(Chichi wa kaishayin desu.)</td></tr>
<tr><td>18</td><td>主婦 (しゅふ)</td><td>Housewife</td><td>Shufu</td><td>母は主婦です。(Haha wa shufu desu.)</td></tr>
<tr><td>19</td><td>男の人 (おとこのひと)</td><td>Man</td><td>Otoko no hito</td><td>男の人がいます。(Otoko no hito ga imasu.)</td></tr>
<tr><td>20</td><td>女の人 (おんなのひと)</td><td>Woman</td><td>Onna no hito</td><td>女の人がいます。(Onna no hito ga imasu.)</td></tr>
<tr><td>21</td><td>名前 (なまえ)</td><td>Name</td><td>Namae</td><td>お名前は何ですか。(Onamae wa nan desu ka?)</td></tr>
<tr><td>22</td><td>出身 (しゅっしん)</td><td>Hometown/Origin</td><td>Shusshin</td><td>出身はどこですか。(Shusshin wa doko desu ka?)</td></tr>
<tr><td>23</td><td>誰 (だれ)</td><td>Who</td><td>Dare</td><td>だれが来ましたか。(Dare ga kimashita ka?)</td></tr>
<tr><td>24</td><td>皆さん (みなさん)</td><td>Everyone</td><td>Minasan</td><td>皆さん、こんにちは。(Minasan, konnichiwa.)</td></tr>
<tr><td>25</td><td>一人 (ひとり)</td><td>One person</td><td>Hitori</td><td>一人で行きます。(Hitori de ikimasu.)</td></tr>
<tr><td>26</td><td>学校 (がっこう)</td><td>School</td><td>Gakkou</td><td>学校へ行きます。(Gakkou e ikimasu.)</td></tr>
<tr><td>27</td><td>教室 (きょうしつ)</td><td>Classroom</td><td>Kyoushitsu</td><td>教室は広いです。(Kyoushitsu wa hiroi desu.)</td></tr>
<tr><td>28</td><td>大学 (だいがく)</td><td>University</td><td>Daigaku</td><td>大学で勉強します。(Daigaku de benkyou shimasu.)</td></tr>
<tr><td>29</td><td>高校 (こうこう)</td><td>High School</td><td>Koukou</td><td>高校生になりました。(Koukousei ni narimashita.)</td></tr>
<tr><td>30</td><td>本 (ほん)</td><td>Book</td><td>Hon</td><td>本を読みます。(Hon wo yomimasu.)</td></tr>
<tr><td>31</td><td>辞書 (じしょ)</td><td>Dictionary</td><td>Jisho</td><td>辞書を使います。(Jisho wo tsukaimasu.)</td></tr>
<tr><td>32</td><td>雑誌 (ざっし)</td><td>Magazine</td><td>Zasshi</td><td>雑誌を買いました。(Zasshi wo kaimashita.)</td></tr>
<tr><td>33</td><td>新聞 (しんぶん)</td><td>Newspaper</td><td>Shinbun</td><td>新聞を読みます。(Shinbun wo yomimasu.)</td></tr>
<tr><td>34</td><td>ノート</td><td>Notebook</td><td>Nooto</td><td>ノートに書きます。(Nooto ni kakimasu.)</td></tr>
<tr><td>35</td><td>鉛筆 (えんぴつ)</td><td>Pencil</td><td>Enpitsu</td><td>鉛筆で書きます。(Enpitsu de kakimasu.)</td></tr>
<tr><td>36</td><td>万年筆 (まんねんひつ)</td><td>Fountain Pen</td><td>Mannen-hitsu</td><td>これは万年筆です。(Kore wa mannen-hitsu desu.)</td></tr>
<tr><td>37</td><td>鍵 (かぎ)</td><td>Key</td><td>Kagi</td><td>車の鍵を忘れました。(Kuruma no kagi wo wasuremashita.)</td></tr>
<tr><td>38</td><td>時計 (とけい)</td><td>Watch/Clock</td><td>Tokei</td><td>新しい時計です。(Atarashii tokei desu.)</td></tr>
<tr><td>39</td><td>鞄 (かばん)</td><td>Bag</td><td>Kaban</td><td>鞄の中に本があります。(Kaban no naka ni hon ga arimasu.)</td></tr>
<tr><td>40</td><td>机 (つくえ)</td><td>Desk</td><td>Tsukue</td><td>机の上にペンがあります。(Tsukue no ue ni pen ga arimasu.)</td></tr>
<tr><td>41</td><td>椅子 (いす)</td><td>Chair</td><td>Isu</td><td>椅子に座ります。(Isu ni suwarimasu.)</td></tr>
<tr><td>42</td><td>会社 (かいしゃ)</td><td>Company</td><td>Kaisha</td><td>大きい会社です。(Ookii kaisha desu.)</td></tr>
<tr><td>43</td><td>仕事 (しごと)</td><td>Work/Job</td><td>Shigoto</td><td>仕事が忙しいです。(Shigoto ga isogashii desu.)</td></tr>
<tr><td>44</td><td>日本語 (にほんご)</td><td>Japanese Language</td><td>Nihongo</td><td>日本語を勉強します。(Nihongo wo benkyou shimasu.)</td></tr>
<tr><td>45</td><td>英語 (えいご)</td><td>English Language</td><td>Eigo</td><td>英語が話せますか。(Eigo ga hanasemasu ka?)</td></tr>
<tr><td>46</td><td>勉強 (べんきょう)</td><td>Study</td><td>Benkyou</td><td>毎日勉強します。(Mainichi benkyou shimasu.)</td></tr>
<tr><td>47</td><td>質問 (しつもん)</td><td>Question</td><td>Shitsumon</td><td>質問があります。(Shitsumon ga arimasu.)</td></tr>
<tr><td>48</td><td>答え (こたえ)</td><td>Answer</td><td>Kotae</td><td>答えがわかりません。(Kotae ga wakarimasen.)</td></tr>
<tr><td>49</td><td>試験 (しけん)</td><td>Exam</td><td>Shiken</td><td>明日は試験です。(Ashita wa shiken desu.)</td></tr>
<tr><td>50</td><td>宿題 (しゅくだい)</td><td>Homework</td><td>Shukudai</td><td>宿題をします。(Shukudai wo shimasu.)</td></tr>
<tr><td>51</td><td>家 (いえ)</td><td>House</td><td>Ie</td><td>家に帰ります。(Ie ni kaerimasu.)</td></tr>
<tr><td>52</td><td>部屋 (へや)</td><td>Room</td><td>Heya</td><td>部屋はきれいです。(Heya wa kirei desu.)</td></tr>
<tr><td>53</td><td>窓 (まど)</td><td>Window</td><td>Mado</td><td>窓を開けます。(Mado wo akemasu.)</td></tr>
<tr><td>54</td><td>ドア</td><td>Door</td><td>Doa</td><td>ドアを閉めます。(Doa wo shimemasu.)</td></tr>
<tr><td>55</td><td>電気 (でんき)</td><td>Electricity/Light</td><td>Denki</td><td>電気をつけます。(Denki wo tsukemasu.)</td></tr>
<tr><td>56</td><td>電話 (でんわ)</td><td>Telephone</td><td>Denwa</td><td>電話をかけます。(Denwa wo kakemasu.)</td></tr>
<tr><td>57</td><td>携帯 (けいたい)</td><td>Mobile phone</td><td>Keitai</td><td>携帯を忘れた。(Keitai wo wasureta.)</td></tr>
<tr><td>58</td><td>パソコン</td><td>PC/Laptop</td><td>Pasokon</td><td>パソコンを使います。(Pasokon wo tsukaimasu.)</td></tr>
<tr><td>59</td><td>テレビ</td><td>TV</td><td>Terebi</td><td>テレビを見ます。(Terebi wo mimasu.)</td></tr>
<tr><td>60</td><td>ラジオ</td><td>Radio</td><td>Rajio</td><td>ラジオを聞きます。(Rajio wo kikimasu.)</td></tr>
<tr><td>61</td><td>カメラ</td><td>Camera</td><td>Kamera</td><td>カメラで撮ります。(Kamera de torimasu.)</td></tr>
<tr><td>62</td><td>冷蔵庫 (れいぞうこ)</td><td>Refrigerator</td><td>Reizouko</td><td>冷蔵庫に水がある。(Reizouko ni mizu ga aru.)</td></tr>
<tr><td>63</td><td>洗濯機 (せんたくき)</td><td>Washing machine</td><td>Sentakuki</td><td>洗濯機を回す。(Sentakuki wo mawasu.)</td></tr>
<tr><td>64</td><td>お風呂 (おふろ)</td><td>Bath</td><td>Ofuro</td><td>お風呂に入ります。(Ofuro ni hairimasu.)</td></tr>
<tr><td>65</td><td>石鹸 (せっけん)</td><td>Soap</td><td>Sekken</td><td>石鹸で洗います。(Sekken de araimasu.)</td></tr>
<tr><td>66</td><td>タオル</td><td>Towel</td><td>Taoru</td><td>タオルを貸して。(Taoru wo kashite.)</td></tr>
<tr><td>67</td><td>鏡 (かがみ)</td><td>Mirror</td><td>Kagami</td><td>鏡を見ます。(Kagami wo mimasu.)</td></tr>
<tr><td>68</td><td>傘 (かさ)</td><td>Umbrella</td><td>Kasa</td><td>傘をさします。(Kasa wo sashimasu.)</td></tr>
<tr><td>69</td><td>靴 (くつ)</td><td>Shoes</td><td>Kutsu</td><td>靴を脱ぎます。(Kutsu wo nugimasu.)</td></tr>
<tr><td>70</td><td>靴下 (くつした)</td><td>Socks</td><td>Kutsushita</td><td>靴下を履きます。(Kutsushita wo hakimasu.)</td></tr>
<tr><td>71</td><td>服 (ふく)</td><td>Clothes</td><td>Fuku</td><td>新しい服です。(Atarashii fuku desu.)</td></tr>
<tr><td>72</td><td>シャツ</td><td>Shirt</td><td>Shatsu</td><td>白いシャツを着ます。(Shiroi shatsu wo kimasu.)</td></tr>
<tr><td>73</td><td>ズボン</td><td>Pants/Trousers</td><td>Zubon</td><td>ズボンを履く。(Zubon wo haku.)</td></tr>
<tr><td>74</td><td>帽子 (ぼうし)</td><td>Hat/Cap</td><td>Boushi</td><td>帽子をかぶります。(Boushi wo kaburimasu.)</td></tr>
<tr><td>75</td><td>眼鏡 (めがね)</td><td>Glasses</td><td>Megane</td><td>眼鏡をかけます。(Megane wo kakemasu.)</td></tr>
<tr><td>76</td><td>財布 (さいふ)</td><td>Wallet/Purse</td><td>Saifu</td><td>財布がありません。(Saifu ga arimasen.)</td></tr>
<tr><td>77</td><td>お金 (おかね)</td><td>Money</td><td>Okane</td><td>お金を払います。(Okane wo haraimasu.)</td></tr>
<tr><td>78</td><td>切手 (きって)</td><td>Stamp</td><td>Kitte</td><td>切手を貼ります。(Kitte wo harimasu.)</td></tr>
<tr><td>79</td><td>葉書 (はがき)</td><td>Postcard</td><td>Hagaki</td><td>葉書を出します。(Hagaki wo dashimasu.)</td></tr>
<tr><td>80</td><td>手紙 (てがみ)</td><td>Letter</td><td>Tegami</td><td>手紙を書きました。(Tegami wo kakimashita.)</td></tr>
<tr><td>81</td><td>食べ物 (たべもの)</td><td>Food</td><td>Tabemono</td><td>食べ物が好きです。(Tabemono ga suki desu.)</td></tr>
<tr><td>82</td><td>飲み物 (のみもの)</td><td>Drink/Beverage</td><td>Nomimono</td><td>飲み物を買います。(Nomimono wo kaimasu.)</td></tr>
<tr><td>83</td><td>朝ご飯 (あさごはん)</td><td>Breakfast</td><td>Asagohan</td><td>朝ご飯を食べます。(Asagohan wo tabemasu.)</td></tr>
<tr><td>84</td><td>昼ご飯 (ひるごはん)</td><td>Lunch</td><td>Hirugohan</td><td>昼ご飯を食べました。(Hirugohan wo tabemashita.)</td></tr>
<tr><td>85</td><td>晩ご飯 (ばんごはん)</td><td>Dinner</td><td>Bangohan</td><td>晩ご飯を作ります。(Bangohan wo tsukurimasu.)</td></tr>
<tr><td>86</td><td>お弁当 (おべんとう)</td><td>Box lunch</td><td>Obentou</td><td>お弁当を作った。(Obentou wo tsukutta.)</td></tr>
<tr><td>87</td><td>卵 (たまご)</td><td>Egg</td><td>Tamago</td><td>卵を食べます。(Tamago wo tabemasu.)</td></tr>
<tr><td>88</td><td>肉 (にく)</td><td>Meat</td><td>Niku</td><td>肉は高いです。(Niku wa takai desu.)</td></tr>
<tr><td>89</td><td>魚 (さかな)</td><td>Fish</td><td>Sakana</td><td>魚が嫌いです。(Sakana ga kirai desu.)</td></tr>
<tr><td>90</td><td>野菜 (やさい)</td><td>Vegetable</td><td>Yasai</td><td>野菜を食べなさい。(Yasai wo tabenasai.)</td></tr>
<tr><td>91</td><td>果物 (くだもの)</td><td>Fruit</td><td>Kudamono</td><td>果物が好きです。(Kudamono ga suki desu.)</td></tr>
<tr><td>92</td><td>水 (みず)</td><td>Water</td><td>Mizu</td><td>水を飲みます。(Mizu wo nomimasu.)</td></tr>
<tr><td>93</td><td>お茶 (おちゃ)</td><td>Tea</td><td>Ocha</td><td>お茶をどうぞ。(Ocha wo douzo.)</td></tr>
<tr><td>94</td><td>牛乳 (ぎゅうにゅう)</td><td>Milk</td><td>Gyuunyuu</td><td>牛乳を飲む。(Gyuunyuu wo nomu.)</td></tr>
<tr><td>95</td><td>お酒 (おさけ)</td><td>Alcohol/Sake</td><td>Osake</td><td>お酒が好きです。(Osake ga suki desu.)</td></tr>
<tr><td>96</td><td>料理 (りょうり)</td><td>Cooking/Cuisine</td><td>Ryouri</td><td>料理が上手です。(Ryouri ga jouzu desu.)</td></tr>
<tr><td>97</td><td>塩 (しお)</td><td>Salt</td><td>Shio</td><td>塩をかけます。(Shio wo kakemasu.)</td></tr>
<tr><td>98</td><td>砂糖 (さとう)</td><td>Sugar</td><td>Satou</td><td>砂糖を入れます。(Satou wo iremasu.)</td></tr>
<tr><td>99</td><td>醤油 (しょうゆ)</td><td>Soy sauce</td><td>Shouyu</td><td>醤油をください。(Shouyu wo kudasai.)</td></tr>
<tr><td>100</td><td>お皿 (おさら)</td><td>Plate/Dish</td><td>Osara</td><td>お皿を洗います。(Osara wo araimasu.)</td></tr>
<tr><td>101</td><td>駅 (えき)</td><td>Station</td><td>Eki</td><td>駅で待ちます。(Eki de machimasu.)</td></tr>
<tr><td>102</td><td>電車 (でんしゃ)</td><td>Train</td><td>Densha</td><td>電車に乗ります。(Densha ni norimasu.)</td></tr>
<tr><td>103</td><td>地下鉄 (ちかてつ)</td><td>Subway</td><td>Chikatetsu</td><td>地下鉄は速い。(Chikatetsu wa hayai.)</td></tr>
<tr><td>104</td><td>バス</td><td>Bus</td><td>Basu</td><td>バスで行きます。(Basu de ikimasu.)</td></tr>
<tr><td>105</td><td>タクシー</td><td>Taxi</td><td>Takushii</td><td>タクシーを呼ぶ。(Takushii wo yobu.)</td></tr>
<tr><td>106</td><td>飛行機 (ひこうき)</td><td>Airplane</td><td>Hikouki</td><td>飛行機で行く。(Hikouki de iku.)</td></tr>
<tr><td>107</td><td>自転車 (じてんしゃ)</td><td>Bicycle</td><td>Jidensha</td><td>自転車を借りる。(Jidensha wo kariru.)</td></tr>
<tr><td>108</td><td>車 (くるま)</td><td>Car</td><td>Kuruma</td><td>車が欲しいです。(Kuruma ga hoshii desu.)</td></tr>
<tr><td>109</td><td>道 (みち)</td><td>Road/Street</td><td>Michi</td><td>道を渡ります。(Michi wo watarimasu.)</td></tr>
<tr><td>110</td><td>橋 (はし)</td><td>Bridge</td><td>Hashi</td><td>橋を渡る。(Hashi wo wataru.)</td></tr>
<tr><td>111</td><td>交差点 (こうさてん)</td><td>Intersection</td><td>Kousaten</td><td>交差点を曲がる。(Kousaten wo magaru.)</td></tr>
<tr><td>112</td><td>角 (かど)</td><td>Corner</td><td>Kado</td><td>角を右に曲がる。(Kado wo migi ni magaru.)</td></tr>
<tr><td>113</td><td>公園 (こうえん)</td><td>Park</td><td>Kouen</td><td>公園へ行こう。(Kouen e ikou.)</td></tr>
<tr><td>114</td><td>銀行 (ぎんこう)</td><td>Bank</td><td>Ginkou</td><td>銀行はどこ？(Ginkou wa doko?)</td></tr>
<tr><td>115</td><td>郵便局 (ゆうびんきょく)</td><td>Post Office</td><td>Yuubinkyoku</td><td>郵便局へ行く。(Yuubinkyoku e iku.)</td></tr>
<tr><td>116</td><td>図書館 (としょかん)</td><td>Library</td><td>Toshokan</td><td>図書館で借りる。(Toshokan de kariru.)</td></tr>
<tr><td>117</td><td>病院 (びょういん)</td><td>Hospital</td><td>Byouin</td><td>病院へ行きます。(Byouin e ikimasu.)</td></tr>
<tr><td>118</td><td>薬局 (やっきょく)</td><td>Pharmacy</td><td>Yakkyoku</td><td>薬局で買う。(Yakkyoku de kau.)</td></tr>
<tr><td>119</td><td>デパート</td><td>Department store</td><td>Depaato</td><td>デパートで買い物。(Depaato de kaimono.)</td></tr>
<tr><td>120</td><td>店 (みせ)</td><td>Store/Shop</td><td>Mise</td><td>この店は高い。(Kono mise wa takai.)</td></tr>
<tr><td>121</td><td>レストラン</td><td>Restaurant</td><td>Resutoran</td><td>レストランに行く。(Resutoran ni iku.)</td></tr>
<tr><td>122</td><td>喫茶店 (きっさてん)</td><td>Coffee shop</td><td>Kissaten</td><td>喫茶店で休もう。(Kissaten de yasumou.)</td></tr>
<tr><td>123</td><td>パン屋 (ぱんや)</td><td>Bakery</td><td>Panya</td><td>パン屋で買う。(Panya de kau.)</td></tr>
<tr><td>124</td><td>映画館 (えいがかん)</td><td>Movie theater</td><td>Eigakan</td><td>映画館に行こう。(Eigakan ni ikou.)</td></tr>
<tr><td>125</td><td>大使館 (たいしかん)</td><td>Embassy</td><td>Taishikan</td><td>大使館へ行く。(Taishikan e iku.)</td></tr>
<tr><td>126</td><td>昨日 (きのう)</td><td>Yesterday</td><td>Kinou</td><td>昨日は雨だった。(Kinou wa ame datta.)</td></tr>
<tr><td>127</td><td>今日 (きょう)</td><td>Today</td><td>Kyou</td><td>今日はいい天気。(Kyou wa ii tenki.)</td></tr>
<tr><td>128</td><td>明日 (あした)</td><td>Tomorrow</td><td>Ashita</td><td>明日会いましょう。(Ashita aimashou.)</td></tr>
<tr><td>129</td><td>毎日 (まいにち)</td><td>Every day</td><td>Mainichi</td><td>毎日走ります。(Mainichi hashirimasu.)</td></tr>
<tr><td>130</td><td>毎週 (まいしゅう)</td><td>Every week</td><td>Maishuu</td><td>毎週泳ぎます。(Maishuu oyogimasu.)</td></tr>
<tr><td>131</td><td>毎月 (まいつき)</td><td>Every month</td><td>Maitsuki</td><td>毎月貯金する。(Maitsuki chokin suru.)</td></tr>
<tr><td>132</td><td>毎年 (まいねん)</td><td>Every year</td><td>Mainen</td><td>毎年旅行する。(Mainen ryokou suru.)</td></tr>
<tr><td>133</td><td>朝 (あさ)</td><td>Morning</td><td>Asa</td><td>朝、散歩します。(Asa, sanpo shimasu.)</td></tr>
<tr><td>134</td><td>昼 (ひる)</td><td>Noon/Daytime</td><td>Hiru</td><td>昼におにぎり。(Hiru ni onigiri.)</td></tr>
<tr><td>135</td><td>夜 (よる)</td><td>Night</td><td>Yoru</td><td>夜は暗いです。(Yoru wa kurai desu.)</td></tr>
<tr><td>136</td><td>今朝 (けさ)</td><td>This morning</td><td>Kesa</td><td>今朝は早かった。(Kesa wa hayakatta.)</td></tr>
<tr><td>137</td><td>今晩 (こんばん)</td><td>Tonight</td><td>Konban</td><td>今晩飲みます。(Konban nomimasu.)</td></tr>
<tr><td>138</td><td>先週 (せんしゅう)</td><td>Last week</td><td>Senshuu</td><td>先週休みだった。(Senshuu yasumi datta.)</td></tr>
<tr><td>139</td><td>今週 (こんしゅう)</td><td>This week</td><td>Konshuu</td><td>今週は忙しい。(Konshuu wa isogashii.)</td></tr>
<tr><td>140</td><td>来週 (らいしゅう)</td><td>Next week</td><td>Raishuu</td><td>来週行きます。(Raishuu ikimasu.)</td></tr>
<tr><td>141</td><td>先月 (せんげつ)</td><td>Last month</td><td>Sengetsu</td><td>先月会いました。(Sengetsu aimashita.)</td></tr>
<tr><td>142</td><td>今月 (こんげつ)</td><td>This month</td><td>Kongetsu</td><td>今月は暇です。(Kongetsu wa hima desu.)</td></tr>
<tr><td>143</td><td>来月 (らいげつ)</td><td>Next month</td><td>Raigetsu</td><td>来月帰ります。(Raigetsu kaerimasu.)</td></tr>
<tr><td>144</td><td>去年 (きょねん)</td><td>Last year</td><td>Kyonen</td><td>去年来ました。(Kyonen kimashita.)</td></tr>
<tr><td>145</td><td>今年 (ことし)</td><td>This year</td><td>Kotoshi</td><td>今年は暑い。(Kotoshi wa atsui.)</td></tr>
<tr><td>146</td><td>来年 (らいねん)</td><td>Next year</td><td>Rainen</td><td>来年、卒業。(Rainen, sotsugyou.)</td></tr>
<tr><td>147</td><td>春 (はる)</td><td>Spring</td><td>Haru</td><td>春が来ました。(Haru ga kimashita.)</td></tr>
<tr><td>148</td><td>夏 (なつ)</td><td>Summer</td><td>Natsu</td><td>夏休みは海へ。(Natsu yasumi wa umi e.)</td></tr>
<tr><td>149</td><td>秋 (あき)</td><td>Autumn</td><td>Aki</td><td>秋は涼しいです。(Aki wa suzushii desu.)</td></tr>
<tr><td>150</td><td>冬 (ふゆ)</td><td>Winter</td><td>Fuyu</td><td>冬は寒いです。(Fuyu wa samui desu.)</td></tr>

            </thead>
            <tbody>
                
            </tbody>
        </table>`;
    } 
    else if (type === 'grammar') {
        html = `<h3>N5 Grammar List</h3>
        <table>
            <thead>
                <tr><th>No.</th><th>Grammar Point</th><th>Meaning</th><th>Pronunciation</th><th>Example</th></tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>～は ～です</td><td>Topic marker + "is/am/are"</td><td>Wa ... desu</td><td>私は学生です。(I am a student.)</td></tr>
<tr><td>2</td><td>～は ～ではありません</td><td>Negative form of "is" (am not/is not)</td><td>Wa ... dewa arimasen</td><td>田中さんは先生ではありません。(Mr. Tanaka is not a teacher.)</td></tr>
<tr><td>3</td><td>～か</td><td>Question marker</td><td>ka</td><td>元気ですか。(Are you well?)</td></tr>
<tr><td>4</td><td>～の</td><td>Possessive particle (A's B)</td><td>no</td><td>私の本です。(It is my book.)</td></tr>
<tr><td>5</td><td>～も</td><td>Also / Too</td><td>mo</td><td>私も学生です。(I am also a student.)</td></tr>
<tr><td>6</td><td>～に / ～へ 行きます</td><td>Direction markers (Go to...)</td><td>ni / e ikimasu</td><td>日本へ行きます。(I am going to Japan.)</td></tr>
<tr><td>7</td><td>～で</td><td>Location of action (At/In)</td><td>de</td><td>図書館で勉強します。(I study at the library.)</td></tr>
<tr><td>8</td><td>～を</td><td>Object marker</td><td>wo</td><td>水を飲みます。(I drink water.)</td></tr>
<tr><td>9</td><td>～が あります</td><td>Existence (Inanimate objects)</td><td>ga arimasu</td><td>本があります。(There is a book.)</td></tr>
<tr><td>10</td><td>～が います</td><td>Existence (Living things)</td><td>ga imasu</td><td>猫がいます。(There is a cat.)</td></tr>
<tr><td>11</td><td>～と</td><td>And / With</td><td>to</td><td>友達と行きます。(I will go with a friend.)</td></tr>
<tr><td>12</td><td>～から ～まで</td><td>From ... to ...</td><td>kara ... made</td><td>９時から５時までです。(It is from 9:00 to 5:00.)</td></tr>
<tr><td>13</td><td>～に</td><td>Specific time marker (At [time])</td><td>ni</td><td>６時に起きます。(I wake up at 6:00.)</td></tr>
<tr><td>14</td><td>～ませんか</td><td>Invitation (Won't you...?)</td><td>masen ka</td><td>お茶を飲みませんか。(Won't you drink tea?)</td></tr>
<tr><td>15</td><td>～ましょう</td><td>Let's do...</td><td>mashou</td><td>食べましょう。(Let's eat!)</td></tr>
<tr><td>16</td><td>～てください</td><td>Please do... (Request)</td><td>te kudasai</td><td>書いてください。(Please write.)</td></tr>
<tr><td>17</td><td>～ています</td><td>Present Progressive (-ing)</td><td>te imasu</td><td>本を読んでいます。(I am reading a book.)</td></tr>
<tr><td>18</td><td>～てもいいです</td><td>Permission (May I...?)</td><td>te mo ii desu</td><td>入ってもいいですか。(May I enter?)</td></tr>
<tr><td>19</td><td>～てはいけません</td><td>Prohibition (Must not...)</td><td>te wa ikemasen</td><td>ここで食べてはいけません。(You must not eat here.)</td></tr>
<tr><td>20</td><td>～まえに</td><td>Before doing...</td><td>mae ni</td><td>寝る前に本を読みます。(Before sleeping, I read a book.)</td></tr>
<tr><td>21</td><td>～たあとで</td><td>After doing...</td><td>ta ato de</td><td>食べたあとで、薬を飲みます。(After eating, I take medicine.)</td></tr>
<tr><td>22</td><td>～たいです</td><td>Want to do...</td><td>tai desu</td><td>日本に行きたいです。(I want to go to Japan.)</td></tr>
<tr><td>23</td><td>～ながら</td><td>While doing... (simultaneous)</td><td>nagara</td><td>音楽を聞きながら勉強します。(I study while listening to music.)</td></tr>
<tr><td>24</td><td>～ことが できます</td><td>Can do... (Ability)</td><td>koto ga dekimasu</td><td>日本語を話すことができます。(I can speak Japanese.)</td></tr>
<tr><td>25</td><td>～ことが あります</td><td>Have done... (Experience)</td><td>koto ga arimasu</td><td>寿司を食べたことがあります。(I have eaten sushi before.)</td></tr>
<tr><td>26</td><td>～なりたい</td><td>Want to become...</td><td>naritai</td><td>医者になりたいです。(I want to become a doctor.)</td></tr>
<tr><td>27</td><td>～ほうがいいです</td><td>Had better... (Advice)</td><td>hou ga ii desu</td><td>病院へ行ったほうがいいです。(You had better go to the hospital.)</td></tr>
<tr><td>28</td><td>～つもりです</td><td>Plan/Intention</td><td>tsumori desu</td><td>明日、買い物に行くつもりです。(I plan to go shopping tomorrow.)</td></tr>
<tr><td>29</td><td>～すぎる</td><td>Too much (Excessive)</td><td>sugiru</td><td>食べすぎました。(I ate too much.)</td></tr>
<tr><td>30</td><td>～ほうが ～より</td><td>Comparison (A is more than B)</td><td>hou ga ... yori</td><td>りんごのほうがオレンジより好きです。(I like apples more than oranges.)</td></tr>
            </tbody>
        </table>`;
    } 
    else if (type === 'practice') {
        html = `<h3>JLPT N5 Practice Quiz</h3>
                <div id="quiz-container">
                    ${generateQuizHTML()}
                    <button class="submit-btn" onclick="calculateResults()">Submit Quiz & See Score</button>
                    <div id="result-display"></div>
                </div>`;
    }

    // Update the page and scroll to the top of the content
    display.innerHTML = html;
    display.scrollIntoView({ behavior: 'smooth' });
}

// 3. HELPER FUNCTION TO GENERATE QUIZ HTML
function generateQuizHTML() {
    return quizQuestions.map((q, qIndex) => `
        <div class="quiz-question" style="margin-bottom: 20px; text-align: left; padding: 10px; border-bottom: 1px solid #eee;">
            <p><strong>Q${qIndex + 1}:</strong> ${q.question}</p>
            ${q.options.map((opt, optIndex) => `
                <label style="display: block; margin: 5px 0; cursor: pointer;">
                    <input type="radio" name="question${qIndex}" value="${optIndex}">
                    ${opt}
                </label>
            `).join('')}
        </div>
    `).join('');
}

// 4. FUNCTION TO CALCULATE MARKS
function calculateResults() {
    let score = 0;
    
    quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });

    const resultDiv = document.getElementById('result-display');
    const percentage = (score / quizQuestions.length) * 100;
    
    resultDiv.innerHTML = `
        <div style="margin-top: 20px; padding: 20px; background: #e8f5e9; border: 2px solid #2e7d32; border-radius: 10px;">
            <h4>Your Result: ${score} / ${quizQuestions.length}</h4>
            <p>Percentage: ${percentage.toFixed(1)}%</p>
            <p>${percentage >= 80 ? "🎉 Excellent!" : "📖 Keep studying!"}</p>
        </div>
    `;
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}
