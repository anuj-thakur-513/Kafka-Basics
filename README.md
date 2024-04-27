
# Kafka Basics

Apache Kafka is an open-source, distributed streaming platform that can store, process, publish, and subscribe to streams of records in real time



## Run Locally

Clone the project

```bash
git clone https://github.com/anuj-thakur-513/Kafka-Basics.git
```

Go to the project directory

```bash
cd Kafka-Basics
```

Install dependencies

```bash
npm install
```

Start Zookeper Container and expose PORT ```2181```

```bash
docker run -p 2181:2181 zookeeper
```

Start Kafka Container, expose PORT ```9092``` and setup ENV variables

```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

