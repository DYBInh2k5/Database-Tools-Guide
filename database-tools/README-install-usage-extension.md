# README - Cài đặt, Cách dùng, và VS Code Extension

## 1) PostgreSQL

- Cài đặt:
  - Installer chính thức hoặc package manager.
  - Khởi tạo user và database riêng cho môi trường dev.
- Cách dùng nhanh:
  - Kết nối qua psql hoặc GUI.
  - Tạo bảng, index, và chạy EXPLAIN cho query quan trọng.
- Extension tương thích:
  - SQLTools + PostgreSQL Driver.
  - PostgreSQL extension.

## 2) MySQL / MariaDB

- Cài đặt:
  - MySQL Installer (Windows) hoặc package manager.
  - Tạo schema, user, phân quyền tối thiểu.
- Cách dùng nhanh:
  - Dùng MySQL Workbench hoặc client trong VS Code.
  - Kiểm tra charset/collation ngay từ đầu.
- Extension tương thích:
  - SQLTools + MySQL/MariaDB Driver.

## 3) SQL Server

- Cài đặt:
  - SQL Server Developer Edition.
  - Cài SSMS để quản trị ban đầu.
- Cách dùng nhanh:
  - Tạo login và database cho từng ứng dụng.
  - Viết script schema và seed data.
- Extension tương thích:
  - SQL Server (mssql) extension.

## 4) MongoDB

- Cài đặt:
  - MongoDB Community hoặc Atlas.
- Cách dùng nhanh:
  - Tạo collection, đặt index theo field truy vấn chính.
  - Dùng aggregation pipeline cho báo cáo.
- Extension tương thích:
  - MongoDB for VS Code.

## 5) Redis

- Cài đặt:
  - Cài native hoặc chạy container.
- Cách dùng nhanh:
  - Thiết lập key TTL cho cache.
  - Tách prefix key theo module để dễ quản trị.
- Extension tương thích:
  - Redis for VS Code.

## 6) Neo4j

- Cài đặt:
  - Neo4j Desktop hoặc server.
- Cách dùng nhanh:
  - Mô hình node/relationship theo use case.
  - Tạo index/constraint cho các thuộc tính tra cứu.
- Extension tương thích:
  - Neo4j for VS Code.

## 7) Firebase

- Cài đặt:
  - Tạo project trên Firebase Console.
  - Cài Firebase CLI để chạy local emulator và deploy.
- Cách dùng nhanh:
  - Bật Firestore hoặc Realtime Database.
  - Bật Authentication, tạo rules bảo mật theo môi trường.
- Extension tương thích:
  - Firebase VS Code Extension.

## 8) Supabase

- Cài đặt:
  - Tạo project trên Supabase Cloud hoặc chạy local bằng Supabase CLI.
  - Khởi tạo database schema và bật RLS policies.
- Cách dùng nhanh:
  - Dùng SQL Editor để tạo bảng/index/function.
  - Kết nối client SDK cho auth, storage, realtime.
- Extension tương thích:
  - Supabase VS Code Extension.
  - SQLTools + PostgreSQL Driver (để query sâu).

## 9) Distributed SQL (CockroachDB / YugabyteDB / TiDB)

- Cài đặt:
  - Dùng bản local cluster cho dev hoặc tạo cloud trial.
  - Thiết lập kết nối TLS và test failover cơ bản.
- Cách dùng nhanh:
  - Chạy bài test transaction và latency theo khu vực.
  - So sánh mức tương thích SQL với ứng dụng hiện tại.
- Extension tương thích:
  - SQLTools + PostgreSQL/MySQL driver tùy hệ.

## 10) SQL Client và GUI mở rộng

- Beekeeper Studio: giao diện nhẹ cho truy vấn hằng ngày.
- DbVisualizer: phù hợp đội enterprise quản lý nhiều DB.
- DataGrip/DBeaver: lựa chọn mạnh cho đa hệ CSDL.

## 11) Công cụ migration

- Flyway: tốt cho SQL script versioning rõ ràng.
- Liquibase: mạnh với changelog đa định dạng.
- Alembic: tiêu chuẩn cho Python SQLAlchemy.
- Prisma Migrate: phù hợp Node.js, TypeScript, Prisma ORM.
- Atlas (Ariga): schema-as-code cho môi trường hiện đại.
- Sqitch: change management theo deploy/revert/verify.

## 12) Checklist tương thích extension cho team

1. Chọn 1 extension chính cho mỗi loại DB, tránh cài trùng quá nhiều.
2. Dùng file cấu hình kết nối mẫu cho dev mới.
3. Chuẩn hóa workflow: connect, query, migration, review schema.
4. Lưu script SQL/NoSQL trong repo thay vì thao tác thủ công hoàn toàn.
