# Database Tools Guide (2026)

Tài liệu này tổng hợp các công cụ Database phổ biến hiện nay để bạn tham khảo nhanh.

Bao gồm cả các nền tảng hiện đại như Firebase, Supabase, Neon, PlanetScale và nhiều công cụ khác.

## Website mini để xem nhanh

- Mở `site/index.html` để xem giao diện tổng hợp.
- Các trang con:
  - `site/relational.html` (SQL)
  - `site/nosql.html` (NoSQL)
  - `site/devtools.html` (Admin và Dev Tools)
  - `site/compare.html` (So sánh nhanh)
  - `site/usecases.html` (Chọn theo bài toán)
  - `site/cloud.html` (Cloud Databases)
  - `site/installation.html` (Cài đặt, cách dùng, extension)
  - `site/alltools.html` (Catalog đầy đủ có bộ lọc)

## Các tài liệu trong workspace

- `database-tools/README-relational.md`: Database quan hệ (SQL)
- `database-tools/README-nosql.md`: Database phi quan hệ (NoSQL)
- `database-tools/README-admin-devtools.md`: Công cụ quản trị và dev tools
- `database-tools/README-cloud.md`: Dịch vụ Cloud Database
- `database-tools/README-usecases.md`: Chọn database theo use case
- `database-tools/README-install-usage-extension.md`: Cài đặt, cách xài, VS Code extension

## Cách dùng bộ tài liệu này

1. Bắt đầu với SQL nếu bạn làm hệ thống giao dịch, báo cáo, ERP, CRM.
2. Chọn NoSQL nếu bạn cần scale ngang nhanh, schema linh hoạt, hoặc dữ liệu phi cấu trúc.
3. Xem phần dev tools để chọn công cụ truy vấn, migration, backup, monitoring.

## Ghi chú nhanh

- Không có 1 database tốt nhất cho mọi bài toán.
- Ưu tiên chọn theo yêu cầu: consistency, latency, scale, chi phí vận hành, kỹ năng team.
- Nếu chưa chắc chắn, PostgreSQL thường là lựa chọn cân bằng tốt để bắt đầu.

## Deploy GitHub Pages (GitHub Actions)

1. Đảm bảo repository dùng branch `main`.
2. Vào Settings > Pages của repo, chọn `Deploy from a branch`.
3. Chọn branch `gh-pages` và folder `/ (root)`.
4. Push code lên `main`, workflow `deploy-pages.yml` sẽ tự publish thư mục `site/` lên `gh-pages`.
5. Mở đúng URL Pages: `https://dybinh2k5.github.io/Database-Tools-Guide/`.

Lưu ý: nếu bạn mở URL repo `https://github.com/DYBInh2k5/Database-Tools-Guide` thì GitHub sẽ hiển thị README (đây là trang code, không phải trang Pages).
