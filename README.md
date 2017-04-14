# ローカル実行
```
npm start
```
# ローカル変更監視
ソースを修正すると応答値がコンソールに自動で表示される。
\<json-file-path\> はlambdaのevent引数になる。
```
sls webpack watch -f <function-name> -p <json-file-path>
```

例）
```
sls webpack watch -f getTicket -p jsons/tickets/readOne/index.json
```

# デプロイ
```
npm run build
```
### 実行してみる
```
curl -X PUT https://<youre-api-gateway-domain>/dev/tickets/hoge -d '{ "fuga" : "fugaaaa" }' -H "x-api-key: <youre-api-key>"
```

```
curl -X GET https://<youre-api-gateway-domain>/dev/tickets/hoge -H "x-api-key: <youre-api-key>"
```
