$(document).ready(function() {
    // Ẩn tất cả các phần ban đầu
    $("#chiTiet").hide();
    $("#trinhPhatNhac").hide();
    $("#trinhPhatVideo").hide();

    // Hiển thị phần chi tiết
    $("#hienChiTiet").click(function() {
        $("#chiTiet").slideToggle();
        $("#trinhPhatNhac, #trinhPhatVideo").hide(); // Ẩn các phần khác
    });

    // Hiển thị trình phát nhạc
    $("#ngheNhac").click(function() {
        $("#trinhPhatNhac").slideToggle();
        $("#chiTiet, #trinhPhatVideo").hide(); // Ẩn các phần khác
    });

    // Hiển thị trình phát video
    $("#xemVideo").click(function() {
        $("#trinhPhatVideo").slideToggle();
        $("#chiTiet, #trinhPhatNhac").hide(); // Ẩn các phần khác
    });
});
