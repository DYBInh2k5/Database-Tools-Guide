# README - Database Admin and Dev Tools

## SQL Clients / GUI

- DBeaver: đa nền tảng, hỗ trợ nhiều DB, phù hợp cho dev và DBA.
- DataGrip: IDE cho database (JetBrains), hỗ trợ query và schema management tốt.
- TablePlus: giao diện gọn, nhanh, hợp cho dev.
- Beekeeper Studio: SQL client hiện đại, nhẹ, hỗ trợ nhiều hệ CSDL.
- DbVisualizer: SQL client đa năng cho nhu cầu enterprise.
- pgAdmin: chuyên cho PostgreSQL.
- MySQL Workbench: chuyên cho MySQL.
- SSMS (SQL Server Management Studio): chuyên cho SQL Server.

## Migration / Schema Versioning

- Flyway: dễ dùng, deployment schema theo version.
- Liquibase: linh hoạt, support changelog XML/YAML/SQL.
- Alembic: thông dụng với Python + SQLAlchemy.
- Prisma Migrate: phù hợp hệ Node.js/TypeScript dùng Prisma.
- Atlas (Ariga): schema-as-code, diff schema và migration tự động.
- Sqitch: change management tập trung vào deploy/revert/verify.

## Backup / Replication / HA

- PostgreSQL: pg_dump, pg_basebackup, Patroni.
- MySQL: mysqldump, Percona XtraBackup, Group Replication.
- SQL Server: native backup + Always On Availability Groups.

## Monitoring / Observability

- Prometheus + Grafana: metric và dashboard tổng quát.
- pg_stat_statements (PostgreSQL): theo dõi query chậm.
- Percona Monitoring and Management (PMM): quan sát MySQL/PostgreSQL.
- ELK/OpenSearch stack: phân tích log.
- Datadog: quan sát production theo hướng APM + logs + metrics.
- New Relic: full-stack observability cho ứng dụng và database.

## Chiến lược chọn tool

1. Bắt đầu từ stack hiện tại của team.
2. Ưu tiên tool có cộng đồng lớn và tài liệu tốt.
3. Chuẩn hóa migration + backup trước khi tối ưu hiệu năng.
4. Đặt monitoring từ đầu để tránh "mù" khi lên production.
