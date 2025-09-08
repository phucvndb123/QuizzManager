// Chờ cho toàn bộ nội dung trang web được tải xong rồi mới chạy code JS
document.addEventListener('DOMContentLoaded', function() {

    // --- GIẢ LẬP TRẠNG THÁI ĐĂNG NHẬP ---
    // Thay đổi giá trị này giữa true và false để xem sự khác biệt
    const isLoggedIn = true; 

    // Lấy ra các element cần thay đổi từ HTML
    const guestView = document.getElementById('guest-view');
    const userView = document.getElementById('user-view');

    // Kiểm tra trạng thái đăng nhập và cập nhật giao diện
    if (isLoggedIn) {
        // Nếu đã đăng nhập
        guestView.style.display = 'none'; // Ẩn nút Login/Register
        userView.style.display = 'flex';  // Hiện khu vực avatar người dùng
    } else {
        // Nếu chưa đăng nhập
        guestView.style.display = 'flex'; // Hiện nút Login/Register
        userView.style.display = 'none';  // Ẩn khu vực avatar người dùng
    }

    console.log("Trang đã tải thành công và giao diện đã được cập nhật!");

});

