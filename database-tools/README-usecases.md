# README - Database theo Use Case

## 1) Web app giao dịch (Ecommerce, ERP, CRM)

- Gợi ý: PostgreSQL hoặc MySQL.
- Kết hợp thêm Redis cho cache/session.

## 2) Realtime profile/feed

- Gợi ý: MongoDB hoặc Couchbase.
- Nếu cần search nâng cao: thêm OpenSearch.

## 3) Log analytics / full-text search

- Gợi ý: OpenSearch.
- Nếu có metric thời gian thực: thêm InfluxDB.

## 4) Recommendation / fraud detection

- Gợi ý: Neo4j cho quan hệ đồ thị.
- Giữ SQL cho dữ liệu nghiệp vụ lõi.

## 5) Scale phân tán đa vùng

- Gợi ý: CockroachDB, TiDB, Cassandra, ScyllaDB.
- Cần benchmark độ trễ và chi phí hạ tầng trước khi chốt.

## 6) Cloud/serverless

- AWS: DynamoDB, Aurora Serverless.
- Azure/GCP: chọn managed SQL hoặc NoSQL theo hệ sinh thái đội ngũ.
