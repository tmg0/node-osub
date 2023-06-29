FROM node
WORKDIR /.output
COPY ./dist /.output
COPY ./package.json /.output/package.json
RUN npm install
CMD ["bash", "-c", "pkg . -t node16-linux-arm64 --out-path dist && tail -f /dev/null"]
