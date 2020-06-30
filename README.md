## agora-node-template
> agora node项目模板

### 开发
```bash
导入sql-init.sql（不是必须的，只是为了查看我们项目的项目，你可以用自己的表，需要修改配置）

yarn
yarn dev

访问 http://localhost:8083/demo，具体的router请到modules下查看
```

### 上线
1. 使用`pm2`，配置文件在`app.json`和`app.staging.json`
2. 使用`docker`，配置文件在`Makefile`

### 说明
- 企业微信消息推送请使用`src/utils/notice.ts`
- `Router`使用[agora-koa-decorator](https://www.npmjs.com/package/agora-koa-decorator)装饰器
- 如果有文档需求，建议使用[docway](http://www.docway.net/)，尽量不要用`swagger`，让文档和代码解耦
- `ORM`库使用[typeorm](https://typeorm.io/)
- 测试用例使用[mocha](https://mochajs.org/)，在`/test`目录

