FROM node:latest as frontend
COPY app /app
WORKDIR /app
RUN yarn && yarn build


FROM golang as backend
RUN mkdir /app
COPY go.mod /app
COPY go.sum /app
WORKDIR /app
RUN go mod download
COPY . /app
RUN CGO_ENABLED=0 go build -o NotionSlider .


FROM alpine as runner
RUN mkdir -p /app/current
RUN mkdir -p /app/current/app
WORKDIR /app/current
COPY --from=backend /app/NotionSlider ./NotionSlider
RUN chmod a+x NotionSlider
COPY --from=frontend /app/dist app/dist
RUN ls /app/current
ENTRYPOINT /app/current/NotionSlider

