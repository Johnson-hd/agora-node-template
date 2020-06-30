## agora-node-template
> agora node项目模板

### 开发
```bash
导入sql-init.sql（仅为了让你体验我们的数据库连接，后续您可以使用自己的表）

yarn
yarn dev

访问 http://localhost:8083/demo，具体的router请到modules下查看
```

### 上线
1. 使用`pm2`，配置文件在`app.json`和`app.staging.json`
2. 使用`docker`，配置文件在`Makefile`

### 说明
- 企业微信消息推送请使用`src/utils/notice.ts`
- `Router`使用[agora-koa-decorator装饰器](https://www.npmjs.com/package/agora-koa-decorator)
- 如果有文档需求，建议使用[docway](http://www.docway.net/)，尽量不要用`swagger`，让文档和代码解耦
- `ORM`库使用[typeorm](https://typeorm.io/)
- 测试用例使用[mocha](https://mochajs.org/)，在`/test`目录

