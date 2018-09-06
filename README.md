# chrome_sou

ChromeExtensions Scheduled Open Url

指定日時に対象Urlを開くスケジューラー  
ChromeのLocalStorageを使用します。

## 拡張機能設定方法

[Chromeの拡張機能](chrome://extensions/)を開き以下の操作を行います。

1. デペロッパーモードをONにする
2. `パッケージ化されていない拡張機能を読み込む`を押し、クローンしたリポジトリの`dist/chrome_sou`ディレクトリを選択

## 使用方法

### スケジュール追加

![alt step1](https://github.com/mao-miyaji/chrome_sou/blob/stock/img/step1.png =×400)

Chrome右上の`Mマークのアイコン`からポップアップを開き、`+ボタン`をクリックします。

![alt step2](https://github.com/mao-miyaji/chrome_sou/blob/stock/img/step2.png =×400)

スケジュールに関する情報を入力し、`Addボタン`を押すと追加できます。  
データはLocalStorageに追加されます。

### スケジュール管理

![alt step3](https://github.com/mao-miyaji/chrome_sou/blob/stock/img/step3.png =×400)

登録したリストから各スケジュールを操作できます。  
有効化・無効化したい場合は`Activeスイッチ`を操作してください。  
削除する場合は`ゴミ箱ボタン`をクリックしてください。  