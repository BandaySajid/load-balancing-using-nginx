# Load Balancing Using NGINX

g

In this project, there are two implementations available: one utilizes NGINX as a load balancing server and reverse proxy, while the other uses a Node.js server to distribute traffic to other servers.

Run ```npm install``` first
Use the `nginx.conf` which is in the root of this project, if you want to use nginx as the loadbalancer.

To get started, you need to create two instances of `server.js`, one running on `PORT 9000` and the other on `PORT 9001`. You can then choose to use NGINX as the load balancing server or solely rely on the Node.js server for load balancing.

Please note that NGINX provides advanced load balancing features and is commonly used in production environments. The Node.js server implementation serves as a simplified demonstration of the algorithm for educational purposes.

#Here are the benchmarking results of the algorithm after using nginx as a reverse-proxy and a load balancer, the load-balancer was able to distribute traffic to both the servers equally.

```Server Software:        nginx/1.18.0
Server Hostname:        127.0.0.1
Server Port:            9090

Document Path:          /
Document Length:        15 bytes

Concurrency Level:      50
Time taken for tests:   3.136 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      2520000 bytes
HTML transferred:       150000 bytes
Requests per second:    3188.64 [#/sec] (mean)
Time per request:       15.681 [ms] (mean)
Time per request:       0.314 [ms] (mean, across all concurrent requests)
Transfer rate:          784.70 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       4
Processing:     0   15  11.3     14      47
Waiting:        0   15  11.3     14      47
Total:          0   16  11.3     14      48

Percentage of the requests served within a certain time (ms)
  50%     14
  66%     20
  75%     24
  80%     26
  90%     32
  95%     36
  98%     39
  99%     40
 100%     48 (longest request)
```
