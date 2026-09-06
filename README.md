# TikTok Clone

Đây là project học tập mô phỏng giao diện và một số tính năng chính của TikTok bằng React, Node.js và MongoDB.

Mã nguồn gốc được thực hiện từ năm 2022 và được giữ gần với cấu trúc ban đầu. Project đã được chỉnh sửa, bảo trì nhẹ để có thể cài đặt, chạy và build lại trên môi trường Node.js hiện tại. Một số cảnh báo từ các dependency cũ vẫn có thể xuất hiện nhưng không làm build thất bại.

## Những phần đã được cập nhật

- Làm sạch các nội dung ghi công cá nhân còn sót lại trong giao diện và source code.
- Bổ sung file môi trường mẫu, tài liệu cài đặt và hướng dẫn build.
- Sửa trạng thái loading để giao diện không hiển thị skeleton vô hạn khi API gặp lỗi.
- Bỏ các khoảng chờ giả khi tải video và dữ liệu sidebar.
- Bổ sung chế độ demo khi MongoDB chưa sẵn sàng.
- Đóng gói một bộ media demo tối thiểu để project chạy được ngay sau khi clone.
- Cho phép cấu hình địa chỉ backend bằng `REACT_APP_BASE_URL`.

## Tính năng chính

- Trang video đề xuất.
- Trang tài khoản đang theo dõi.
- Hồ sơ người dùng và danh sách video.
- Xem chi tiết video, bình luận, lượt thích và chia sẻ.
- Đăng ký, đăng nhập và khôi phục mật khẩu.
- Upload video.
- Trang âm nhạc và hashtag.
- Dashboard quản trị tài khoản, người dùng, video, âm nhạc, xu hướng và thống kê.

## Các trang chính

| Trang | Đường dẫn | Mô tả |
| --- | --- | --- |
| Trang chủ | `/` | Danh sách video đề xuất. |
| Đang Follow | `/following` | Video từ các tài khoản đang theo dõi. |
| Hồ sơ | `/:nickname` | Thông tin và video của người dùng. |
| Chi tiết video | `/:nickname/video/:id` | Video, thông tin và bình luận. |
| Âm nhạc | `/music/:name-:id` | Các video sử dụng một âm thanh. |
| Hashtag | `/tag/:name` | Các video thuộc một hashtag. |
| Upload | `/upload` | Đăng video mới. |
| Live | `/live` | Trang Live đang ở dạng placeholder. |
| Đăng nhập | `/login` | Chọn phương thức đăng nhập. |
| Email hoặc số điện thoại | `/login/phone-or-email` | Form đăng nhập. |
| Đăng ký | `/register` | Chọn phương thức đăng ký. |
| Form đăng ký | `/register/phone-or-email` | Tạo tài khoản mới. |
| Quên mật khẩu | `/login/forget-password` | Giao diện khôi phục mật khẩu. |

## Dashboard quản trị

Project có dashboard tại `/admin/dashboard`. Đường dẫn này tự chuyển tới trang quản lý tài khoản. Luồng đăng nhập chuyển tài khoản có role khác `user` vào dashboard.

| Chức năng | Đường dẫn |
| --- | --- |
| Quản lý tài khoản | `/admin/dashboard/manageAccount` |
| Quản lý người dùng | `/admin/dashboard/manageUser` |
| Quản lý video | `/admin/dashboard/manageVideo` |
| Quản lý âm nhạc | `/admin/dashboard/manageMusic` |
| Quản lý xu hướng/hashtag | `/admin/dashboard/manageTrendy` |
| Quản lý đơn từ | `/admin/dashboard/manageReport` |
| Báo cáo thống kê | `/admin/dashboard/manageTotal` |

Các thao tác quản trị cần backend, MongoDB và access token hợp lệ. Frontend hiện chưa có route guard riêng cho nhóm route dashboard.

## Công nghệ

- Frontend: React 18, React Router, Sass, Material UI và Axios.
- Backend: Node.js, Express, JWT, Multer và Mongoose.
- Database: MongoDB.

## Cấu trúc project

```text
client/                 React frontend và cấu hình build
server/                 Express API
server/demo-assets/     Media tối thiểu dùng cho chế độ demo
server/Public/          Media local/upload, không được Git theo dõi
```

## Yêu cầu môi trường

- Node.js 18 trở lên.
- npm.
- MongoDB chạy ở cổng `27017` nếu muốn sử dụng dữ liệu thật và các thao tác ghi.

MongoDB không bắt buộc nếu chỉ muốn xem giao diện và video demo.

## Cài đặt lần đầu

Clone repository và đi vào thư mục project:

```bash
git clone https://github.com/lynknt0603/tiktok-clone-2022.git
cd tiktok-clone-2022
```

### 1. Cài backend

```bash
cd server
npm ci
```

Tạo file `server/.env` từ `server/.env.example`. Trên PowerShell:

```powershell
Copy-Item .env.example .env
```

Cấu hình mặc định:

```env
PORT=5000
PORT_MONGO=27017
DATABASE_NAME=tiktok
SECRECT_JWT=replace-with-your-own-random-secret
```

Hãy thay `SECRECT_JWT` bằng một chuỗi bí mật riêng nếu sử dụng đăng nhập thật. Tên biến `SECRECT_JWT` được giữ nguyên theo source code hiện tại.

Khởi động backend:

```bash
npm start
```

Backend chạy tại [http://localhost:5000](http://localhost:5000).

### 2. Cài frontend

Mở terminal thứ hai tại thư mục project:

```bash
cd client
npm ci
```

Tạo file `client/.env` từ `client/.env.example`. Trên PowerShell:

```powershell
Copy-Item .env.example .env
```

Giá trị mặc định:

```env
REACT_APP_BASE_URL=http://localhost:5000
```

Khởi động frontend ở chế độ development:

```bash
npm start
```

Truy cập [http://localhost:3000](http://localhost:3000).

## Chế độ demo không cần MongoDB

Nếu không kết nối được MongoDB, backend tự chuyển các API đọc chính sang dữ liệu demo. Trang chủ, video, tài khoản gợi ý, hashtag và âm nhạc vẫn hiển thị bằng media trong `server/demo-assets`.

Bạn vẫn phải chạy cả backend và frontend. Các chức năng ghi dữ liệu như đăng ký, đăng nhập, upload, follow và thích video cần MongoDB.

## Chạy với MongoDB

1. Cài và khởi động MongoDB tại `localhost:27017`.
2. Giữ `DATABASE_NAME=tiktok` hoặc đổi sang tên database mong muốn.
3. Khởi động lại backend.
4. Import dữ liệu cũ nếu có bản backup; repository không chứa bản dump database gốc.

Khi MongoDB kết nối thành công, các API sẽ tự sử dụng dữ liệu trong database thay cho dữ liệu demo.

## Build frontend production

Đảm bảo đã cài dependency trong `client`, sau đó chạy:

```bash
cd client
npm ci
npm run build
```

Kết quả production được tạo tại `client/build`. Build thành công có thể vẫn hiển thị cảnh báo ESLint, Browserslist cũ hoặc bundle lớn.

Để chạy thử bản production:

```bash
npx serve -s build -l 3000
```

Backend vẫn phải chạy ở terminal khác:

```bash
cd server
npm start
```

Nếu deploy backend ở địa chỉ khác, tạo `client/.env.production` trước khi build:

```env
REACT_APP_BASE_URL=https://api.example.com
```

Sau đó chạy lại `npm run build`. Lưu ý một số thao tác cũ trong project vẫn dùng trực tiếp `localhost:5000` và cần được chuẩn hóa thêm nếu deploy đầy đủ lên production.

## Kiểm tra build

Lệnh đã được dùng để xác nhận phiên bản hiện tại:

```bash
cd client
npm run build
```

Kết quả: build hoàn tất và thư mục `client/build` được tạo thành công. Các cảnh báo còn lại không chặn quá trình build.

## Ghi chú

Đây là project học tập sử dụng nhiều dependency từ năm 2022. Chế độ demo chỉ phục vụ việc xem giao diện và video mẫu; không thay thế database cho toàn bộ chức năng ứng dụng.
