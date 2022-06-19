# learning-graphql

本レポジトリのコードは基本的に[初めてのGraphQL](https://www.amazon.co.jp/%E5%A2%97%E8%A3%9C%E6%94%B9%E8%A8%82%E7%89%88-Java%E8%A8%80%E8%AA%9E%E3%81%A7%E5%AD%A6%E3%81%B6%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E5%85%A5%E9%96%80-%E7%B5%90%E5%9F%8E-%E6%B5%A9-ebook/dp/B00I8ATHGW/ref=pd_sbs_1/357-3813772-7623335?pd_rd_w=38s08&pf_rd_p=4e34a507-1281-42ae-953a-93a761caa89c&pf_rd_r=RGM2E8CPX41ETJHWJV98&pd_rd_r=1a0c6eb1-76b8-49fe-971a-98d7510a0775&pd_rd_wg=9654E&pd_rd_i=B00I8ATHGW&psc=1](https://www.amazon.co.jp/%E5%88%9D%E3%82%81%E3%81%A6%E3%81%AEGraphQL-%E2%80%95Web%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E5%AD%A6%E3%81%B6%E6%96%B0%E4%B8%96%E4%BB%A3API-Eve-Porcello/dp/487311893X/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1B0RN404E1P5Q&keywords=graphql&qid=1655551853&sprefix=gr%2Caps%2C294&sr=8-1))に基づいています。

環境や学習のために、配布されたコードと異なる箇所が複数あります。元のコードは[著者のレポジトリ](https://www.sbcr.jp/product/4797327030/](https://github.com/MoonHighway/learning-graphql/tree/master/chapter-05/photo-share-api))からダウンロードすることができます。

## 実行環境

本レポジトリのコードの実行環境は以下です。

- Windows 10
- [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop) 4.2.0
- VSCode

## 動作確認

1. 本プロジェクトのディレクトリで、以下のコマンドを実行し、コンテナを起動します。

```
$ docker-compose up -d
```

2. http://localhost:4000にアクセスするとGraphQL Playgroundにアクセスできます。
## 参考文献
- [初めてのGraphQL](https://www.amazon.co.jp/%E5%A2%97%E8%A3%9C%E6%94%B9%E8%A8%82%E7%89%88-Java%E8%A8%80%E8%AA%9E%E3%81%A7%E5%AD%A6%E3%81%B6%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E5%85%A5%E9%96%80-%E7%B5%90%E5%9F%8E-%E6%B5%A9-ebook/dp/B00I8ATHGW/ref=pd_sbs_1/357-3813772-7623335?pd_rd_w=38s08&pf_rd_p=4e34a507-1281-42ae-953a-93a761caa89c&pf_rd_r=RGM2E8CPX41ETJHWJV98&pd_rd_r=1a0c6eb1-76b8-49fe-971a-98d7510a0775&pd_rd_wg=9654E&pd_rd_i=B00I8ATHGW&psc=1](https://www.amazon.co.jp/%E5%88%9D%E3%82%81%E3%81%A6%E3%81%AEGraphQL-%E2%80%95Web%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E5%AD%A6%E3%81%B6%E6%96%B0%E4%B8%96%E4%BB%A3API-Eve-Porcello/dp/487311893X/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1B0RN404E1P5Q&keywords=graphql&qid=1655551853&sprefix=gr%2Caps%2C294&sr=8-1))
