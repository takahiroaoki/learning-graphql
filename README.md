# learning-graphql

本レポジトリのコードは基本的に[初めてのGraphQL](https://www.amazon.co.jp/%E5%88%9D%E3%82%81%E3%81%A6%E3%81%AEGraphQL-%E2%80%95Web%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E5%AD%A6%E3%81%B6%E6%96%B0%E4%B8%96%E4%BB%A3API-Eve-Porcello/dp/487311893X/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1B0RN404E1P5Q&keywords=graphql&qid=1655551853&sprefix=gr%2Caps%2C294&sr=8-1)に基づいています。

ライブラリのバージョン、環境や学習のために、配布されたコードと異なる箇所が複数あります。元のコードは[著者のレポジトリ](https://github.com/MoonHighway/learning-graphql/tree/master/chapter-05/photo-share-api)からダウンロードすることができます。

## 実行環境

本レポジトリのコードの実行環境は以下です。

- Windows 10
- [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop) 4.2.0
- VSCode

## 動作確認

1. ./app.envファイル内の環境変数を設定してください。
CLIENT_ID, CLIENT_SECRETはGitHubのSettings > Developer settings > OAuth Appsから設定できます。

2. 本プロジェクトのディレクトリで、以下のコマンドを実行し、コンテナを起動します。

```
$ docker-compose up -d
```

3. http://localhost:4000 にアクセスする。

## 参考文献
- [初めてのGraphQL](https://www.amazon.co.jp/%E5%88%9D%E3%82%81%E3%81%A6%E3%81%AEGraphQL-%E2%80%95Web%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E5%AD%A6%E3%81%B6%E6%96%B0%E4%B8%96%E4%BB%A3API-Eve-Porcello/dp/487311893X/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1B0RN404E1P5Q&keywords=graphql&qid=1655551853&sprefix=gr%2Caps%2C294&sr=8-1)
