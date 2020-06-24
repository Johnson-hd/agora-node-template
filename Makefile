# dockerhub登录
.PHONY: docker.login.agorahub
docker.login.agorahub:
	@docker login -u web-hub -p thePassword hub.agoralab.co

# 镜像构建-staging
.PHONY: docker.build-staging
docker.build-staging:docker.login.agorahub
	@docker build -t agora-node-template:staging -f ./Dockerfile.staging .

# 打tag-staging
.PHONY: docker.tag-staging
docker.tag-staging:docker.build-staging
	@docker tag agora-node-template:staging hub.agoralab.co/web/agora-node-template:staging

# docker镜像推到agora dockerhub-staging
.PHONY: docker.publish-staging
docker.publish-staging:docker.tag-staging
	@docker push hub.agoralab.co/web/agora-node-template:staging

# 启动容器-staging
.PHONY: docker.reload.staging
docker.reload.staging:docker.login.agorahub
	@docker pull hub.agoralab.co/web/agora-node-template:staging; docker stop agora-node-template.staging; docker container rm agora-node-template.staging; docker run --name agora-node-template.staging -p 8083:8083 -e NODE_ENV="staging" -e PORT="8083" --restart=always -d hub.agoralab.co/web/agora-node-template:staging

# 镜像构建-生产
.PHONY: docker.build
docker.build:docker.login.agorahub
	@docker build -t agora-node-template:latest -f ./Dockerfile .

# 打tag-生产
.PHONY: docker.tag
docker.tag:docker.build
	@docker tag agora-node-template:latest hub.agoralab.co/web/agora-node-template:latest

# docker镜像推到agora dockerhub-生产
.PHONY: docker.publish
docker.publish:docker.tag
	@docker push hub.agoralab.co/web/agora-node-template:latest

# 启动容器-生产
.PHONY: docker.reload
docker.reload:docker.login.agorahub
	@docker pull hub.agoralab.co/web/agora-node-template:latest; docker stop agora-node-template; docker container rm agora-node-template; docker run --name agora-node-template -p 8083:8083 -e NODE_ENV="production" -e PORT="8083" --restart=always -d hub.agoralab.co/web/agora-node-template:latest


