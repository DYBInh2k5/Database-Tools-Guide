# README - Relational Databases (SQL)

## 1) PostgreSQL

- Phù hợp: hệ thống nghiệp vụ, fintech, ecommerce, analytics có giao dịch.
- Điểm mạnh:
  - ACID tốt, feature đầy đủ (JSONB, index phong phú, extension mạnh)
  - Cộng đồng lớn, cloud support rộng
- Cân nhắc:
  - Cần tối ưu query/index khi dữ liệu lớn

## 2) MySQL

- Phù hợp: web app phổ biến, startup cần đơn giản để vận hành.
- Điểm mạnh:
  - Phổ biến, dễ tìm tài liệu, dễ thuê nhân sự
  - Hiệu năng đọc tốt, ecosystem lớn
- Cân nhắc:
  - Một số tính năng nâng cao kém linh hoạt hơn PostgreSQL

## 3) Microsoft SQL Server

- Phù hợp: doanh nghiệp dùng hệ sinh thái Microsoft.
- Điểm mạnh:
  - Tooling doanh nghiệp tốt (SSMS, BI integration)
  - Bảo mật, governance, reporting mạnh
- Cân nhắc:
  - Chi phí license có thể cao tùy mô hình sử dụng

## 4) MariaDB

- Phù hợp: thay thế MySQL theo hướng open-source.
- Điểm mạnh:
  - Tương thích cao với MySQL
  - Có nhiều tùy chọn engine
- Cân nhắc:
  - Cần test kỹ tính tương thích nếu migrate từ/đến MySQL

## 5) Oracle Database

- Phù hợp: doanh nghiệp lớn, workload mission-critical.
- Điểm mạnh:
  - Bảo mật, HA, ecosystem enterprise rất mạnh
  - Tốt cho hệ thống cần governance chặt chẽ
- Cân nhắc:
  - Chi phí và độ phức tạp vận hành thường cao hơn

## 6) SQLite

- Phù hợp: mobile app, desktop app, local cache, embedded systems.
- Điểm mạnh:
  - Nhẹ, không cần server riêng
  - Triển khai cực nhanh cho ứng dụng đơn máy
- Cân nhắc:
  - Không tối ưu cho hệ thống multi-user concurrent cao

## 7) CockroachDB

- Phù hợp: hệ thống phân tán đa region, cloud-native.
- Điểm mạnh:
  - Distributed SQL, failover tốt
  - Scale ngang để mở rộng
- Cân nhắc:
  - Cần benchmark kỹ cho query phức tạp và chi phí tài nguyên

## 8) TiDB

- Phù hợp: bài toán MySQL-compatible nhưng cần scale lớn/HTAP.
- Điểm mạnh:
  - Tương thích SQL và scale ngang
  - Tốt cho phân tích kết hợp giao dịch
- Cân nhắc:
  - Vận hành phức tạp hơn hệ SQL đơn node

## 9) YugabyteDB

- Phù hợp: hệ thống cần PostgreSQL-compatible và triển khai multi-region.
- Điểm mạnh:
  - Distributed SQL với khả năng chịu lỗi tốt
  - Tương thích PostgreSQL cho nhiều ứng dụng hiện có
- Cân nhắc:
  - Cần hiểu kiến trúc phân tán để vận hành hiệu quả

## 10) SingleStore

- Phù hợp: realtime analytics, HTAP và dữ liệu tăng trưởng nhanh.
- Điểm mạnh:
  - SQL tốc độ cao cho cả đọc phân tích và ghi giao dịch
  - Khả năng mở rộng tốt cho workload lớn
- Cân nhắc:
  - Cần đánh giá chi phí theo mô hình triển khai

## 11) IBM Db2

- Phù hợp: doanh nghiệp truyền thống cần ổn định cao và governance chặt.
- Điểm mạnh:
  - Mạnh về enterprise workload
  - Hệ sinh thái lâu năm trong nhiều ngành lớn
- Cân nhắc:
  - Đường cong học và vận hành có thể cao

## 12) DuckDB

- Phù hợp: analytics cục bộ, data science, ETL lightweight.
- Điểm mạnh:
  - In-process, nhẹ, chạy tốt trên máy đơn
  - Truy vấn analytical SQL rất nhanh cho file data cục bộ
- Cân nhắc:
  - Không phải lựa chọn thay cho hệ OLTP production nhiều người dùng

## Khi nào nên chọn SQL?

- Dữ liệu có quan hệ rõ ràng
- Cần giao dịch chính xác, consistency cao
- Cần báo cáo/truy vấn phức tạp bằng SQL
