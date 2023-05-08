# Chrome_sou

ChromeExtensions Scheduled Open Url   
指定日時に対象URLを開くスケジューラー  

## Requirement

![angular version](https://img.shields.io/badge/angular-6.1.7-brightgreen)
![angular-cli version](https://img.shields.io/badge/angular%2Fcli%20-6.1.5-brightgreen)

* Google Chrome
* Google Chrome LocalStorage

## Usage

### 拡張機能設定

[Chromeの拡張機能](chrome://extensions/)を開き以下の操作を行います。

1. デペロッパーモードをONにする
2. `パッケージ化されていない拡張機能を読み込む`を押し、クローンしたリポジトリの`dist/chrome_sou`ディレクトリを選択

### スケジュール追加

1. Chrome右上の`Mマークのアイコン`からポップアップを開き、`+ボタン`をクリックします。
<img src="https://github.com/mao-miyaji/chrome_sou/blob/stock/img/step1.png" width="400">

2. スケジュールに関する情報を入力し、`Addボタン`を押すと追加できます。  
データはLocalStorageに追加されます。
<img src="https://github.com/mao-miyaji/chrome_sou/blob/stock/img/step2.png" width="400">


### スケジュール管理

登録したリストから各スケジュールを操作できます。  
有効化・無効化したい場合は`Activeスイッチ`を操作してください。  
削除する場合は`ゴミ箱ボタン`をクリックしてください。  

<img src="https://github.com/mao-miyaji/chrome_sou/blob/stock/img/step3.png" width="400">

## Note

社内ブログで本拡張機能について紹介しています。  
https://blog.fox-hound.tech/676/

## Author

Mao Miyaji
