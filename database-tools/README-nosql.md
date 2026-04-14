# README - NoSQL Databases

## 1) MongoDB (Document)

- Phù hợp: ứng dụng có schema linh hoạt, product iteration nhanh.
- Điểm mạnh:
  - JSON-like document, dễ thay đổi schema
  - Scale ngang tốt
- Cân nhắc:
  - Cần thiết kế index và model dữ liệu cẩn thận để tránh query chậm

## 2) Redis (In-memory key-value)

- Phù hợp: cache, session, queue nhẹ, rate limiting.
- Điểm mạnh:
  - Tốc độ rất nhanh (in-memory)
  - Nhiều data structure hữu ích
- Cân nhắc:
  - Không phải lựa chọn thay thế SQL cho dữ liệu nghiệp vụ chính

## 3) Cassandra (Wide-column)

- Phù hợp: workload ghi rất lớn, phân tán đa vùng.
- Điểm mạnh:
  - Khả năng scale ngang và HA cao
- Cân nhắc:
  - Data modeling khó hơn SQL

## 4) Elasticsearch / OpenSearch (Search + Analytics)

- Phù hợp: full-text search, log analytics.
- Điểm mạnh:
  - Tìm kiếm toàn văn mạnh
  - Aggregation linh hoạt
- Cân nhắc:
  - Thường dùng bổ trợ bên cạnh database chính

## 5) Neo4j (Graph)

- Phù hợp: fraud detection, recommendation, social graph.
- Điểm mạnh:
  - Truy vấn quan hệ phức tạp rất mạnh
- Cân nhắc:
  - Không phải bài toán nào cũng cần graph database

## 6) DynamoDB (Managed key-value/document)

- Phù hợp: hệ AWS, serverless backend, workload cần auto-scale nhanh.
- Điểm mạnh:
  - Managed service, giảm công vận hành
  - Khả năng scale lớn và latency ổn định
- Cân nhắc:
  - Cần thiết kế partition key đúng để tránh hot partition

## 7) Couchbase (Document + Cache)

- Phù hợp: realtime app, content platform, profile/session storage.
- Điểm mạnh:
  - Kết hợp document + key-value + query linh hoạt
  - Hiệu năng cao cho workload đọc/ghi nhanh
- Cân nhắc:
  - Cần tính toán licensing/edition theo nhu cầu doanh nghiệp

## 8) ScyllaDB (Wide-column)

- Phù hợp: workload lớn, throughput cao, cần độ trễ thấp.
- Điểm mạnh:
  - Tương thích Cassandra protocol
  - Tối ưu tài nguyên và latency tốt
- Cân nhắc:
  - Data modeling vẫn cần kỷ luật như nhóm wide-column

## 9) InfluxDB (Time-series)

- Phù hợp: metric, IoT telemetry, monitoring, event theo thời gian.
- Điểm mạnh:
  - Tối ưu cho dữ liệu time-series
  - Query và retention policy phù hợp observability
- Cân nhắc:
  - Không thay thế SQL OLTP cho dữ liệu giao dịch nghiệp vụ

## 10) Firebase (Firestore / Realtime Database)

- Phù hợp: mobile app, web app cần backend triển khai rất nhanh.
- Điểm mạnh:
  - Tích hợp Auth, analytics, hosting trong hệ Firebase
  - Realtime sync tốt cho ứng dụng tương tác cao
- Cân nhắc:
  - Cần thiết kế rules và truy vấn đúng để kiểm soát chi phí

## 11) Supabase (PostgreSQL BaaS)

- Phù hợp: startup/MVP cần SQL + Auth + Storage trong một nền tảng.
- Điểm mạnh:
  - Dựa trên PostgreSQL, hỗ trợ SQL mạnh
  - Có realtime, edge functions, và dashboard quản trị dễ dùng
- Cân nhắc:
  - Cần hiểu RLS policy để bảo mật dữ liệu đúng chuẩn

## 12) Apache CouchDB

- Phù hợp: ứng dụng cần replication mạnh và offline-first sync.
- Điểm mạnh:
  - Replication tốt giữa nhiều node/thiết bị
  - Mô hình document linh hoạt
- Cân nhắc:
  - Truy vấn analytics phức tạp thường cần công cụ bổ sung

## 13) Apache HBase

- Phù hợp: dữ liệu lớn theo mô hình wide-column trong hệ sinh thái Hadoop.
- Điểm mạnh:
  - Scale tốt cho big data workload
  - Thiết kế theo column-family cho truy cập theo key nhanh
- Cân nhắc:
  - Vận hành và mô hình dữ liệu phức tạp hơn document DB thông thường

## 14) ArangoDB

- Phù hợp: bài toán kết hợp document + graph + key-value.
- Điểm mạnh:
  - Multi-model linh hoạt trong một hệ
  - Có query language mạnh cho nhiều kiểu dữ liệu
- Cân nhắc:
  - Cần benchmark theo workload thực tế trước khi chuẩn hóa toàn hệ

## Khi nào nên chọn NoSQL?

- Schema thay đổi liên tục
- Cần scale ngang nhanh
- Cần tối ưu cho use case đặc thù (cache, search, graph)
