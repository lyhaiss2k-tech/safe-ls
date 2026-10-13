// ==========================================
// SAFE-LS - CỔNG GIÁO DỤC BẢO VỆ DỮ LIỆU CÁ NHÂN
// ==========================================

// --- 1. NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM CHO GIÁO VIÊN (18 CÂU) ---
const teacherQuizQuestions = [
  {
    id: 'gv_1',
    skill: 'Nhận diện dữ liệu cá nhân',
    q: 'Câu 1 (GV): Trong công tác quản lý lớp học, thông tin nào sau đây thuộc nhóm DỮ LIỆU CÁ NHÂN NHẠY CẢM của học sinh cần được bảo vệ ở cấp độ cao nhất?',
    options: [
      'A. Thời khóa biểu học tập các môn trong tuần của cả lớp.',
      'B. Số định danh cá nhân (CCCD), hoàn cảnh gia đình đặc biệt, tình trạng sức khỏe và học bạ của học sinh.',
      'C. Danh sách các bài hát trong chương trình ngoại khóa văn nghệ.',
      'D. Tên các tổ chuyên môn trong trường học.'
    ],
    correct: 1,
    explanation: 'Theo Luật Bảo vệ DLCN số 91/2025/QH15, số định danh, hồ sơ sức khỏe và hoàn cảnh cá nhân là dữ liệu nhạy cảm, tuyệt đối không được tự ý công khai.'
  },
  {
    id: 'gv_2',
    skill: 'Nhận diện dữ liệu cá nhân',
    q: 'Câu 2 (GV): Sau khi chấm thi cuối kỳ, giáo viên muốn thông báo kết quả cho phụ huynh. Cách làm nào sau đây là ĐÚNG QUY ĐỊNH và an toàn nhất?',
    options: [
      'A. Chụp ảnh toàn bộ bảng điểm có đủ họ tên, ngày sinh, điểm thi rồi gửi lên nhóm Zalo chung của lớp.',
      'B. Đăng tải file Excel điểm lên trang Facebook cá nhân để phụ huynh tiện tải về xem.',
      'C. Gửi kết quả riêng qua sổ liên lạc điện tử chính thức của trường hoặc gửi tin nhắn riêng cho từng phụ huynh.',
      'D. Nhờ ban cán sự lớp in bảng điểm dán công khai ở cổng trường.'
    ],
    correct: 2,
    explanation: 'Điểm số chi tiết gắn liền với danh tính cá nhân không được công khai tập thể trên các nhóm mở nhằm bảo vệ quyền riêng tư của học sinh.'
  },
  {
    id: 'gv_3',
    skill: 'Nhận diện dữ liệu cá nhân',
    q: 'Câu 3 (GV): Khi sử dụng các dịch vụ chuyển đổi file trực tuyến miễn phí (như nén file, chuyển Word sang PDF), giáo viên cần lưu ý điều gì?',
    options: [
      'A. Tải lên bình thường vì các trang web miễn phí đều tự động xóa file sau 1 phút.',
      'B. Không tải lên các văn bản chứa danh sách đầy đủ thông tin định danh học sinh hoặc tài liệu thi mật lên các website không rõ nguồn gốc.',
      'C. Chỉ cần đổi tên file là hoàn toàn yên tâm.',
      'D. Dùng trình duyệt ẩn danh thì máy chủ chuyển đổi file sẽ không đọc được nội dung.'
    ],
    correct: 1,
    explanation: 'Các dịch vụ chuyển đổi trực tuyến trôi nổi có thể lưu trữ và thu thập toàn bộ dữ liệu văn bản được tải lên máy chủ của họ.'
  },
  {
    id: 'gv_4',
    skill: 'Bảo vệ tài khoản và mật khẩu',
    q: 'Câu 4 (GV): Giáo viên quản lý tài khoản phần mềm quản lý giáo dục (như VnEdu, SMAS, CSDL ngành). Biện pháp bảo vệ tài khoản nào sau đây là TỐT NHẤT?',
    options: [
      'A. Đặt mật khẩu là số điện thoại hoặc ngày sinh của mình để tránh bị quên khi bận rộn.',
      'B. Sử dụng mật khẩu mạnh dài trên 10 ký tự, đổi mật khẩu định kỳ và không lưu thông tin đăng nhập trên máy tính phòng hội đồng.',
      'C. Chia sẻ tài khoản cho đồng nghiệp cùng tổ chuyên môn để nhờ nhập điểm hộ.',
      'D. Luôn chọn "Ghi nhớ mật khẩu" trên mọi thiết bị trong trường.'
    ],
    correct: 1,
    explanation: 'Tài khoản quản lý giáo dục nắm giữ toàn bộ thông tin học sinh trường lớp, giáo viên cần bảo mật nghiêm ngặt và không dùng chung.'
  },
  {
    id: 'gv_5',
    skill: 'Bảo vệ tài khoản và mật khẩu',
    q: 'Câu 5 (GV): Khi rời khỏi máy tính tại bàn giáo viên trong giờ ra chơi hoặc phòng hội đồng, thao tác bắt buộc của giáo viên là gì?',
    options: [
      'A. Để nguyên màn hình vì các thầy cô khác trong trường đều là người quen.',
      'B. Nhấn tổ hợp phím Windows + L (hoặc Đăng xuất) để khóa màn hình máy tính.',
      'C. Tắt màn hình bằng nút nguồn vật lý nhưng không khóa máy.',
      'D. Đậy một tờ giấy lên bàn phím.'
    ],
    correct: 1,
    explanation: 'Khóa màn hình máy tính giúp ngăn chặn việc học sinh hoặc người lạ vô tình/cố ý truy cập vào phần mềm nhập điểm hay hồ sơ trường học.'
  },
  {
    id: 'gv_6',
    skill: 'Bảo vệ tài khoản và mật khẩu',
    q: 'Câu 6 (GV): Giáo viên nhận được cuộc gọi tự xưng là cán bộ công nghệ thông tin Phòng/Sở GD&ĐT yêu cầu đọc mã xác thực OTP gửi về máy để "đồng bộ dữ liệu viên chức". Thầy/cô sẽ:',
    options: [
      'A. Đọc ngay mã OTP để kịp tiến độ cập nhật hồ sơ ngành.',
      'B. Yêu cầu họ cho biết chức vụ rồi mới đọc mã.',
      'C. Tuyệt đối không cung cấp mã OTP, tắt máy và liên hệ lại lãnh đạo nhà trường hoặc đầu mối CNTT chính thức để xác minh.',
      'D. Đọc nửa đầu mã OTP để thử.'
    ],
    correct: 2,
    explanation: 'Cơ quan quản lý và kỹ thuật viên chân chính KHÔNG BAO GIỜ yêu cầu người dùng cung cấp mã OTP dưới bất kỳ hình thức nào.'
  },
  {
    id: 'gv_7',
    skill: 'Nhận diện nguy cơ và lừa đảo',
    q: 'Câu 7 (GV): Một email gửi đến hòm thư giáo viên có tiêu đề "Thông báo khẩn từ Bộ GD&ĐT: Hướng dẫn khen thưởng năm học" đính kèm file `Huongdan_khenthuong.exe` (hoặc link lạ). Hành động đúng là:',
    options: [
      'A. Tải về và mở file chạy ngay để xem hướng dẫn khen thưởng.',
      'B. Chuyển tiếp email cho tất cả giáo viên trong trường cùng xem.',
      'C. Nhận diện dấu hiệu mã độc từ đuôi file lạ (.exe) và địa chỉ người gửi không phải tên miền chính thống (@moet.gov.vn), không mở file và báo cáo bộ phận CNTT.',
      'D. Mở file trên điện thoại thay vì máy tính.'
    ],
    correct: 2,
    explanation: 'Email giả mạo văn bản chỉ đạo ngành giáo dục là phương thức phổ biến để lây nhiễm mã độc tống tiền (Ransomware) vào mạng máy tính trường học.'
  },
  {
    id: 'gv_8',
    skill: 'Nhận diện nguy cơ và lừa đảo',
    q: 'Câu 8 (GV): Giáo viên nhận được tin nhắn từ tài khoản Facebook có hình ảnh và tên giống hệt Hiệu trưởng nhà trường nhắn tin: "Thầy/cô đang ở đâu, chuyển khoản gấp cho tôi 5 triệu đồng để tiếp đoàn kiểm tra, tí nữa về tôi trả". Thầy/cô sẽ:',
    options: [
      'A. Chuyển tiền ngay lập tức vì sợ Hiệu trưởng phê bình.',
      'B. Gọi điện thoại trực tiếp hoặc gặp trực tiếp Hiệu trưởng để xác minh thông tin.',
      'C. Nhắn tin hỏi số tài khoản rồi chuyển một nửa số tiền.',
      'D. Vay mượn đồng nghiệp khác gom đủ tiền chuyển khoản.'
    ],
    correct: 1,
    explanation: 'Kẻ xấu thường tạo tài khoản mạo danh cán bộ quản lý trường học để lừa đảo chuyển tiền. Luôn xác minh trực tiếp qua cuộc gọi thoại thông thường.'
  },
  {
    id: 'gv_9',
    skill: 'Nhận diện nguy cơ và lừa đảo',
    q: 'Câu 9 (GV): Khi phụ huynh nhờ giáo viên chuyển đường link bình chọn "Cuộc thi tài năng nhí / Giáo viên sáng tạo" vào nhóm lớp để cả lớp vào đăng nhập bình chọn, giáo viên nên làm gì?',
    options: [
      'A. Gửi ngay vào nhóm lớp và yêu cầu học sinh vào bình chọn nhiệt tình.',
      'B. Kiểm tra kỹ nguồn gốc cuộc thi, tên miền; nếu trang yêu cầu người tham gia đăng nhập tài khoản Facebook/Google thì tuyệt đối không chia sẻ.',
      'C. Tự mình đăng nhập thử nhiều lần xem sao.',
      'D. Đăng lên trang web của trường.'
    ],
    correct: 1,
    explanation: 'Rất nhiều trang web bình chọn giải thưởng là bẫy Phishing lừa đánh cắp tài khoản mạng xã hội của phụ huynh và học sinh.'
  },
  {
    id: 'gv_10',
    skill: 'Quản lý quyền riêng tư',
    q: 'Câu 10 (GV): Giáo viên muốn đăng video ngắn và hình ảnh về hoạt động trải nghiệm dã ngoại của lớp lên mạng xã hội. Điều kiện cần tuân thủ là gì?',
    options: [
      'A. Đăng thoải mái vì đây là hoạt động ngoại khóa mang tính giáo dục.',
      'B. Cần có sự đồng ý của cha mẹ/người giám hộ học sinh, không để lộ các thông tin cá nhân định danh và không đăng những hình ảnh nhạy cảm của các em.',
      'C. Chỉ cần gắn thẻ tên (tag) phụ huynh vào bài viết là được.',
      'D. Đăng vào ban đêm để ít người xem.'
    ],
    correct: 1,
    explanation: 'Theo Nghị định 356/2025/NĐ-CP và Luật Trẻ em, việc công khai hình ảnh học sinh trên không gian mạng phải bảo đảm quyền riêng tư và có sự đồng ý của gia đình.'
  },
  {
    id: 'gv_11',
    skill: 'Quản lý quyền riêng tư',
    q: 'Câu 11 (GV): Khi cài đặt ứng dụng soạn bài giảng hoặc trợ giảng trên điện thoại thông minh, ứng dụng yêu cầu cấp quyền "Truy cập danh bạ, vị trí GPS và micro liên tục". Quyết định đúng là:',
    options: [
      'A. Bấm đồng ý tất cả để app hoạt động đầy đủ tính năng.',
      'B. Từ chối cấp quyền danh bạ và vị trí vì không phục vụ trực tiếp cho tính năng soạn bài giảng.',
      'C. Tắt điện thoại đi bật lại rồi đồng ý.',
      'D. Cài thêm 3 app tương tự để so sánh.'
    ],
    correct: 1,
    explanation: 'Nguyên tắc bảo vệ dữ liệu: Chỉ cấp những quyền thực sự cần thiết tối thiểu cho ứng dụng hoạt động.'
  },
  {
    id: 'gv_12',
    skill: 'Quản lý quyền riêng tư',
    q: 'Câu 12 (GV): Khi chia sẻ tài liệu ôn tập cho học sinh qua Google Drive, giáo viên nên thiết lập quyền chia sẻ như thế nào?',
    options: [
      'A. Đặt quyền "Bất kỳ ai có đường liên kết đều có thể Chỉnh sửa (Editor)".',
      'B. Chỉ đặt quyền "Người xem (Viewer)", tắt tùy chọn cho phép người xem tải xuống hoặc chỉnh sửa nếu là tài liệu bản quyền nội bộ.',
      'C. Cung cấp cả tài khoản và mật khẩu Google Drive của giáo viên cho lớp.',
      'D. Để công khai toàn bộ thư mục cá nhân lên mạng.'
    ],
    correct: 1,
    explanation: 'Để quyền Editor công khai có thể dẫn đến việc tài liệu bị sửa đổi, xóa mất dữ liệu hoặc kẻ xấu tải file chứa mã độc vào thư mục của giáo viên.'
  },
  {
    id: 'gv_13',
    skill: 'Sử dụng AI an toàn',
    q: 'Câu 13 (GV): Giáo viên muốn dùng ChatGPT/Gemini để hỗ trợ viết nhận xét học bạ cuối năm cho 40 học sinh trong lớp. Quy trình an toàn nhất là:',
    options: [
      'A. Tải lên bảng danh sách gồm Họ tên thật, Ngày sinh, Điểm số từng môn và yêu cầu AI viết nhận xét.',
      'B. Ẩn danh hóa hoàn toàn: Chỉ đưa đặc điểm năng lực (ví dụ: Học sinh 1: Toán giỏi, Văn khá; Học sinh 2: có năng khiếu vẽ) mà không kèm bất kỳ thông tin nhận diện nào.',
      'C. Chụp ảnh học bạ gửi lên cho AI tự phân tích.',
      'D. Chia sẻ đường link quản lý điểm số của trường cho AI đăng nhập.'
    ],
    correct: 1,
    explanation: 'Quy tắc 3 câu hỏi trước khi dùng AI: Luôn dừng lại, loại bỏ thông tin định danh cá nhân của học sinh trước khi đưa vào công cụ AI.'
  },
  {
    id: 'gv_14',
    skill: 'Sử dụng AI an toàn',
    q: 'Câu 14 (GV): Giáo viên đang tham gia biên soạn đề thi tuyển sinh/chọn học sinh giỏi cấp trường. Có nên đưa ma trận và toàn bộ ngân hàng câu hỏi đề thi dự thảo vào các app AI trực tuyến không?',
    options: [
      'A. Nên đưa vào để AI thẩm định độ khó và sửa lỗi chính tả nhanh nhất.',
      'B. Tuyệt đối không, vì dữ liệu gửi lên các nền tảng AI có thể được dùng để tái huấn luyện mô hình và có nguy cơ lộ lọt bí mật đề thi.',
      'C. Đưa vào lúc đêm khuya vì lúc đó ít người dùng AI nên không sợ lộ.',
      'D. Đổi ngôn ngữ sang tiếng Anh rồi đưa vào.'
    ],
    correct: 1,
    explanation: 'Đề thi chưa công bố là tài liệu mật của ngành giáo dục. Đưa vào công cụ AI công cộng tiềm ẩn rủi ro rò rỉ dữ liệu nghiêm trọng.'
  },
  {
    id: 'gv_15',
    skill: 'Sử dụng AI an toàn',
    q: 'Câu 15 (GV): Một trang web giới thiệu "Công cụ AI nhận diện tính cách học sinh qua quét ảnh khuôn mặt và vân tay". Giáo viên nên xử lý thế nào?',
    options: [
      'A. Tổ chức chụp ảnh toàn bộ học sinh trong lớp gửi lên web để thử nghiệm.',
      'B. Cảnh giác, không thu thập và cung cấp dữ liệu sinh trắc học của học sinh cho các ứng dụng chưa được cơ quan quản lý thẩm định.',
      'C. Vận động phụ huynh đóng tiền mua gói VIP của ứng dụng này.',
      'D. Yêu cầu ban cán sự lớp tự thu thập dữ liệu gửi lên app.'
    ],
    correct: 1,
    explanation: 'Dữ liệu sinh trắc học (khuôn mặt, vân tay) của trẻ em được pháp luật bảo vệ nghiêm ngặt. Nghiêm cấm thu thập trái phép.'
  },
  {
    id: 'gv_16',
    skill: 'Xử lý sự cố',
    q: 'Câu 16 (GV): Khi giáo viên phát hiện tài khoản email hoặc mạng xã hội của mình bị kẻ xấu chiếm quyền điều khiển và đang gửi tin nhắn vay tiền cho phụ huynh, bước đầu tiên cần làm là gì?',
    options: [
      'A. Im lặng để xem kẻ xấu làm gì tiếp theo.',
      'B. Lập tức thông báo khẩn cấp qua nhóm lớp/kênh khác cảnh báo phụ huynh, đồng thời tiến hành đổi mật khẩu hoặc báo cáo hỗ trợ khóa tài khoản ngay.',
      'C. Chờ hết ngày xem tài khoản có tự phục hồi không.',
      'D. Chuyển tiền theo yêu cầu của kẻ xấu để chuộc lại tài khoản.'
    ],
    correct: 1,
    explanation: 'Thông báo khẩn cấp tới phụ huynh là biện pháp First Response quan trọng nhất để ngăn chặn việc phụ huynh bị lừa tiền.'
  },
  {
    id: 'gv_17',
    skill: 'Xử lý sự cố',
    q: 'Câu 17 (GV): Một giáo viên vô tình làm mất thẻ nhớ/USB chứa danh sách dữ liệu hồ sơ học sinh của trường tại nơi công cộng. Giáo viên cần hành động như thế nào?',
    options: [
      'A. Giấu kín không nói với ai vì sợ bị kỷ luật.',
      'B. Báo cáo ngay cho Ban Giám hiệu nhà trường và bộ phận quản trị để rà soát mức độ nhạy cảm của dữ liệu và kích hoạt phương án ứng phó kịp thời.',
      'C. Mua USB mới để thay thế và coi như không có chuyện gì.',
      'D. Đăng bài lên mạng xã hội treo thưởng tìm lại.'
    ],
    correct: 1,
    explanation: 'Báo cáo trung thực và kịp thời với lãnh đạo nhà trường giúp chủ động kiểm soát thiệt hại và bảo vệ thông tin học sinh theo quy định.'
  },
  {
    id: 'gv_18',
    skill: 'Xử lý sự cố',
    q: 'Câu 18 (GV): Khi phát hiện học sinh trong trường đang bị đối tượng trên mạng đe dọa, tống tiền bằng hình ảnh cắt ghép, giáo viên cần phối hợp đầu mối nào?',
    options: [
      'A. Yêu cầu học sinh tự giải quyết vì đây là việc riêng tư trên mạng.',
      'B. Trấn an học sinh, phối hợp cùng phụ huynh, Ban Giám hiệu, Tổ tư vấn tâm lý và liên hệ Tổng đài Quốc gia 111 hoặc cơ quan Công an (PA05).',
      'C. Đăng hình ảnh kẻ đe dọa lên trang Facebook của trường để cộng đồng mạng truy tìm.',
      'D. Khuyên học sinh nghỉ học vài ngày để tránh rắc rối.'
    ],
    correct: 1,
    explanation: 'Bảo vệ học sinh trước nguy cơ xâm hại trên môi trường số là trách nhiệm của nhà trường; cần phối hợp ngay với các đơn vị chuyên môn và cơ quan công an.'
  }
];

// --- 2. NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM CHO HỌC SINH (18 CÂU) ---
const studentQuizQuestions = [
  {
    id: 'hs_1',
    skill: 'Nhận diện dữ liệu cá nhân',
    q: 'Câu 1 (HS): Thông tin nào sau đây của em là DỮ LIỆU CÁ NHÂN QUAN TRỌNG mà em tuyệt đối không nên công khai trên mạng xã hội?',
    options: [
      'A. Tên câu lạc bộ thể thao mà em yêu thích.',
      'B. Họ tên đầy đủ, ngày tháng năm sinh, số điện thoại, địa chỉ nhà riêng và số định danh (CCCD).',
      'C. Tên một bài thơ em học trong sách giáo khoa.',
      'D. Màu sắc em yêu thích.'
    ],
    correct: 1,
    explanation: 'Họ tên, ngày sinh, CCCD, địa chỉ và SĐT là dữ liệu định danh, kẻ xấu có thể dùng để mạo danh em hoặc tìm đến nhà quấy rối.'
  },
  {
    id: 'hs_2',
    skill: 'Nhận diện dữ liệu cá nhân',
    q: 'Câu 2 (HS): Khi chụp ảnh thẻ học sinh hoặc Căn cước công dân để nộp hồ sơ trực tuyến, điều em cần làm trước khi đăng ảnh lên mạng xã hội là gì?',
    options: [
      'A. Chỉnh sửa bộ lọc màu cho ảnh thật đẹp rồi đăng công khai.',
      'B. Tuyệt đối KHÔNG đăng ảnh thẻ học sinh / CCCD lên mạng xã hội vì có chứa mã QR và đầy đủ thông tin định danh cá nhân.',
      'C. Rủ thêm các bạn cùng chụp thẻ học sinh đăng lên chung.',
      'D. Đăng lên phần Tin (Story) 24 giờ vì nghĩ 24 giờ sau ảnh sẽ tự mất.'
    ],
    correct: 1,
    explanation: 'Thẻ học sinh và CCCD có chứa mã định danh và mã QR. Người lạ có thể quét mã QR để lấy toàn bộ thông tin nhạy cảm của em.'
  },
  {
    id: 'hs_3',
    skill: 'Nhận diện dữ liệu cá nhân',
    q: 'Câu 3 (HS): Hành động nào sau đây là TÔN TRỌNG quyền riêng tư dữ liệu của bạn bè trong lớp?',
    options: [
      'A. Chụp lén bạn lúc ngủ gật rồi đăng lên nhóm Facebook công khai để mọi người cười đùa.',
      'B. Hỏi ý kiến bạn và được bạn đồng ý trước khi đăng ảnh hoặc gắn thẻ (tag) bạn lên mạng xã hội.',
      'C. Cho số điện thoại của bạn cho người lạ trên mạng khi họ hỏi.',
      'D. Gửi danh sách số điện thoại của cả lớp cho trung tâm gia sư.'
    ],
    correct: 1,
    explanation: 'Tôn trọng quyền riêng tư của người khác là văn hóa số văn minh; luôn xin phép trước khi đăng ảnh hoặc chia sẻ thông tin của bạn bè.'
  },
  {
    id: 'hs_4',
    skill: 'Bảo vệ tài khoản và mật khẩu',
    q: 'Câu 4 (HS): Mật khẩu nào sau đây được coi là MẠNH và AN TOÀN nhất cho tài khoản học tập của em?',
    options: [
      'A. `12345678` hoặc `abcdefgh`.',
      'B. Ngày tháng năm sinh của em (ví dụ: `15082010`).',
      'C. `HocSinhLangSon@2026!` (kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt).',
      'D. Tên người yêu thích hoặc tên thú cưng viết liền không dấu.'
    ],
    correct: 2,
    explanation: 'Mật khẩu mạnh cần dài trên 10 ký tự, kết hợp chữ hoa, thường, số và ký tự đặc biệt, không chứa thông tin dễ đoán.'
  },
  {
    id: 'hs_5',
    skill: 'Bảo vệ tài khoản và mật khẩu',
    q: 'Câu 5 (HS): Sau khi đăng nhập tài khoản Microsoft Teams / Google Classroom trên máy tính phòng Tin học của trường, em phải làm gì trước khi hết giờ?',
    options: [
      'A. Chỉ cần đóng cửa sổ trình duyệt (bấm dấu X màu đỏ).',
      'B. Bấm nút Đăng xuất (Sign out), không chọn lưu mật khẩu và xóa lịch sử duyệt web nếu cần.',
      'C. Tắt màn hình máy tính rồi đứng dậy ra về.',
      'D. Để nguyên để buổi sau vào đỡ phải đăng nhập lại.'
    ],
    correct: 1,
    explanation: 'Chỉ tắt trình duyệt mà không Đăng xuất thì tài khoản vẫn mở, bạn ngồi máy sau có thể vào đọc trộm tin nhắn hoặc đổi mật khẩu của em.'
  },
  {
    id: 'hs_6',
    skill: 'Bảo vệ tài khoản và mật khẩu',
    q: 'Câu 6 (HS): Một người bạn thân cùng lớp hỏi mượn tài khoản và mật khẩu Facebook/Zalo của em để "vào đọc một tin nhắn riêng", em nên làm gì?',
    options: [
      'A. Đưa ngay vì là bạn thân nên hoàn toàn tin tưởng nhau.',
      'B. Từ chối khéo léo và giải thích rằng mật khẩu cá nhân phải tự bảo mật; có thể hỗ trợ bạn bằng cách khác.',
      'C. Đổi mật khẩu dễ cho bạn dùng rồi đổi lại sau.',
      'D. Đọc cả mã xác thực OTP gửi về điện thoại cho bạn.'
    ],
    correct: 1,
    explanation: 'Mật khẩu là bí mật cá nhân tuyệt đối. Nhiều trường hợp bạn bè bất cẩn làm lộ mật khẩu hoặc bị kẻ xấu lợi dụng gây hiểu lầm đáng tiếc.'
  },
  {
    id: 'hs_7',
    skill: 'Nhận diện nguy cơ và lừa đảo',
    q: 'Câu 7 (HS): Em thấy một bài đăng trên mạng: "Tặng 2000 Quân Huy / Kim Cương Free Fire miễn phí nhân dịp sinh nhật game, bấm vào link `garenarewards-nhanqua.top` để nhận". Em sẽ:',
    options: [
      'A. Bấm vào ngay và đăng nhập tài khoản Facebook/Garena để nhận quà.',
      'B. Chia sẻ link cho cả lớp cùng vào nhận cho vui.',
      'C. Nhận diện đây là bẫy lừa đảo giả mạo (Phishing) để cướp nick game, tuyệt đối không bấm vào link và cảnh báo bạn bè.',
      'D. Tạo tài khoản ảo để thử nhận quà.'
    ],
    correct: 2,
    explanation: 'Không có nhà phát hành game chính thống nào tặng quà bằng cách yêu cầu đăng nhập trên các trang web có tên miền lạ.'
  },
  {
    id: 'hs_8',
    skill: 'Nhận diện nguy cơ và lừa đảo',
    q: 'Câu 8 (HS): Bạn nhận được tin nhắn từ một tài khoản có tên và avatar giống hệt Giáo viên chủ nhiệm: "Cô đang bận việc gia đình gấp, em nạp hộ cô thẻ điện thoại 100k tí lên lớp cô trả nhé". Em xử lý thế nào?',
    options: [
      'A. Chạy đi mua thẻ nạp ngay vì sợ cô trừ điểm chuyên cần.',
      'B. Nhờ bố mẹ gọi điện thoại trực tiếp cho cô giáo chủ nhiệm để xác minh, không vội vàng mua thẻ nạp theo tin nhắn mạng xã hội.',
      'C. Nhắn tin hỏi số seri thẻ rồi gửi.',
      'D. Gửi tin nhắn vào nhóm lớp giục các bạn khác nạp cùng.'
    ],
    correct: 1,
    explanation: 'Kẻ xấu thường hack hoặc tạo nick giả mạo thầy cô để lừa học sinh. Luôn nhớ nguyên tắc: Gọi điện xác minh trực tiếp.'
  },
  {
    id: 'hs_9',
    skill: 'Nhận diện nguy cơ và lừa đảo',
    q: 'Câu 9 (HS): Một người lạ trên mạng nhắn tin hứa hẹn: "Tuyển em làm người mẫu ảnh tuổi teen / đại sứ học đường, chỉ cần gửi ảnh toàn thân và chụp CCCD để nhận hợp đồng 5 triệu đồng". Em nên làm gì?',
    options: [
      'A. Chụp gửi ngay vì cơ hội kiếm tiền và nổi tiếng rất hấp dẫn.',
      'B. Rủ bạn thân cùng tham gia ứng tuyển.',
      'C. Cảnh giác với chiêu trò dụ dỗ thu thập hình ảnh nhạy cảm và thông tin cá nhân; báo ngay cho bố mẹ hoặc thầy cô giáo.',
      'D. Tự gửi ảnh một mình không cho bố mẹ biết.'
    ],
    correct: 2,
    explanation: 'Đây là chiêu trò phổ biến của các đối tượng xấu nhằm thu thập hình ảnh, thông tin để tống tiền hoặc lừa đảo qua mạng.'
  },
  {
    id: 'hs_10',
    skill: 'Quản lý quyền riêng tư',
    q: 'Câu 10 (HS): Khi đăng bài viết trên mạng xã hội Facebook hoặc TikTok, chế độ hiển thị nào là AN TOÀN NHẤT cho học sinh?',
    options: [
      'A. Chế độ "Công khai (Public)" để nhận được thật nhiều lượt like từ người lạ.',
      'B. Chế độ "Bạn bè (Friends)" và thường xuyên lọc lại danh sách bạn bè, không kết bạn với người lạ không rõ danh tính.',
      'C. Luôn bật tính năng chia sẻ vị trí (check-in) nơi em đang ở theo thời gian thực.',
      'D. Đăng công khai kèm số điện thoại để mọi người tiện liên lạc.'
    ],
    correct: 1,
    explanation: 'Giới hạn người xem ở chế độ Bạn bè giúp ngăn ngừa kẻ xấu theo dõi thói quen, lịch trình và đời tư của em.'
  },
  {
    id: 'hs_11',
    skill: 'Quản lý quyền riêng tư',
    q: 'Câu 11 (HS): Khi tải một trò chơi mới trên điện thoại, trò chơi yêu cầu quyền "Truy cập danh bạ, quyền đọc tin nhắn SMS và vị trí GPS". Em nên:',
    options: [
      'A. Bấm "Cho phép tất cả" để vào chơi game ngay.',
      'B. Từ chối các quyền không liên quan đến game hoặc gỡ cài đặt nếu game bắt buộc phải cấp các quyền nhạy cảm vô lý này.',
      'C. Bấm cho phép rồi tắt máy đi ngủ.',
      'D. Cài thêm nhiều game tương tự.'
    ],
    correct: 1,
    explanation: 'Game thông thường không cần đọc tin nhắn SMS hay danh bạ. Các app đòi quyền này thường là app gián điệp đánh cắp mã OTP ngân hàng của gia đình.'
  },
  {
    id: 'hs_12',
    skill: 'Quản lý quyền riêng tư',
    q: 'Câu 12 (HS): Hành động nào sau đây bị coi là XÂM PHẠM QUYỀN RIÊNG TƯ của người khác và có thể vi phạm pháp luật?',
    options: [
      'A. Tự ý đọc trộm nhật ký, tin nhắn trên điện thoại của bạn bè khi bạn không để ý.',
      'B. Lập nhóm kín để nói xấu và đăng tải thông tin cá nhân của người khác lên mạng.',
      'C. Chia sẻ tài khoản mạng xã hội của người khác cho bên thứ ba khi chưa được phép.',
      'D. Cả A, B và C đều là hành vi xâm phạm quyền riêng tư.'
    ],
    correct: 3,
    explanation: 'Tất cả các hành vi trên đều xâm phạm quyền bất khả xâm phạm về đời sống riêng tư và bí mật cá nhân theo pháp luật Việt Nam.'
  },
  {
    id: 'hs_13',
    skill: 'Sử dụng AI an toàn',
    q: 'Câu 13 (HS): Một trào lưu trên TikTok rủ học sinh tải ảnh chân dung khuôn mặt rõ nét lên ứng dụng AI nước ngoài để "tạo video hoạt hình tương lai". Nguy cơ tiềm ẩn lớn nhất là gì?',
    options: [
      'A. Tốn dung lượng pin điện thoại.',
      'B. Dữ liệu khuôn mặt bị thu thập để kẻ xấu dùng công nghệ Deepfake ghép mặt em vào các video lừa đảo hoặc nhạy cảm.',
      'C. AI sẽ vẽ tranh không được đẹp như mong muốn.',
      'D. Bị bạn bè trêu chọc vì tranh hoạt hình xấu.'
    ],
    correct: 1,
    explanation: 'Hình ảnh khuôn mặt chất lượng cao có thể bị lợi dụng để huấn luyện AI Deepfake nhằm mạo danh gọi video lừa tiền người thân trong gia đình.'
  },
  {
    id: 'hs_14',
    skill: 'Sử dụng AI an toàn',
    q: 'Câu 14 (HS): Khi dùng các công cụ AI (như ChatGPT, Gemini) để giải bài tập, em TUYỆT ĐỐI KHÔNG NÊN đưa thông tin nào vào phần trò chuyện?',
    options: [
      'A. Đề bài Toán hoặc bài thơ cần phân tích.',
      'B. Họ tên thật, trường lớp, địa chỉ nhà, số điện thoại hoặc bí mật riêng tư của bản thân và bạn bè.',
      'C. Câu hỏi về lịch sử, địa lý Việt Nam.',
      'D. Từ vựng tiếng Anh cần dịch nghĩa.'
    ],
    correct: 1,
    explanation: 'Mọi thông tin em gõ vào AI có thể được lưu trữ trên máy chủ công cộng. Tuyệt đối không chia sẻ dữ liệu cá nhân vào prompt.'
  },
  {
    id: 'hs_15',
    skill: 'Sử dụng AI an toàn',
    q: 'Câu 15 (HS): Nếu em thấy trên mạng xuất hiện một video bạn cùng lớp đang có hành vi nhạy cảm nhưng khẩu hình miệng và khuôn mặt có dấu hiệu giật lag bất thường (nghi là video AI Deepfake ghép mặt), em nên làm gì?',
    options: [
      'A. Tải video về và gửi ngay cho cả lớp cùng xem.',
      'B. Báo ngay cho bạn bị hại và thầy cô giáo/bố mẹ biết để cùng xử lý, tuyệt đối không bấm like, bình luận hay chia sẻ phát tán video giả mạo.',
      'C. Đăng video lên TikTok để kiếm tương tác.',
      'D. Nhắn tin trêu chọc bạn.'
    ],
    correct: 1,
    explanation: 'Lan truyền hình ảnh Deepfake giả mạo là hành vi tiếp tay cho bạo lực mạng và có thể bị xử lý theo Luật An ninh mạng.'
  },
  {
    id: 'hs_16',
    skill: 'Xử lý sự cố',
    q: 'Câu 16 (HS): Nếu em lỡ bấm vào một đường link lạ và phát hiện tài khoản mạng xã hội của mình tự động nhắn tin spam cho bạn bè, em cần làm gì ngay lập tức?',
    options: [
      'A. Đổi mật khẩu ngay lập tức, đăng xuất khỏi tất cả thiết bị lạ và thông báo cho bạn bè biết tài khoản đang bị tấn công.',
      'B. Xóa ứng dụng và không dùng điện thoại nữa.',
      'C. Chờ vài ngày xem tài khoản có tự hết không.',
      'D. Nhắn tin xin kẻ tấn công trả lại tài khoản.'
    ],
    correct: 0,
    explanation: 'Đổi mật khẩu và đăng xuất khỏi mọi thiết bị là bước khẩn cấp đầu tiên để ngăn chặn kẻ xấu tiếp tục chiếm quyền điều khiển.'
  },
  {
    id: 'hs_17',
    skill: 'Xử lý sự cố',
    q: 'Câu 17 (HS): Khi bị một người lạ trên mạng nhắn tin đe dọa tống tiền hoặc bắt ép làm điều xấu nếu không sẽ tung ảnh riêng tư, hành động ĐÚNG ĐẮN NHẤT của em là:',
    options: [
      'A. Im lặng làm theo mọi yêu cầu của kẻ xấu vì sợ bị lộ.',
      'B. Chụp màn hình toàn bộ tin nhắn để làm bằng chứng, chặn tài khoản đó và BÁO NGAY CHO BỐ MẸ, THẦY CÔ hoặc gọi Tổng đài 111 để được bảo vệ.',
      'C. Chửi bới thách thức lại kẻ xấu trên mạng.',
      'D. Giấu bố mẹ và đi vay tiền bạn bè để nộp cho kẻ xấu.'
    ],
    correct: 1,
    explanation: 'Kẻ xấu sẽ không bao giờ dừng lại nếu em thỏa hiệp. Luôn lưu bằng chứng và báo ngay cho người lớn đáng tin cậy để được can thiệp kịp thời.'
  },
  {
    id: 'hs_18',
    skill: 'Xử lý sự cố',
    q: 'Câu 18 (HS): Số điện thoại của TỔNG ĐÀI QUỐC GIA BẢO VỆ TRẺ EM tại Việt Nam (hỗ trợ miễn phí 24/7 khi học sinh bị xâm hại, bạo lực mạng, tống tiền) là số nào?',
    options: [
      'A. 113',
      'B. 115',
      'C. 111',
      'D. 114'
    ],
    correct: 2,
    explanation: 'Tổng đài 111 là đường dây nóng miễn phí của Nhà nước, trực 24/7 để tiếp nhận và can thiệp bảo vệ trẻ em, học sinh trong mọi tình huống khẩn cấp.'
  }
];

// --- 3. BỘ TÌNH HUỐNG THỰC HÀNH MÔ PHỎNG (SCENARIO SIMULATOR CHO GIÁO VIÊN VÀ HỌC SINH) ---
const scenariosData = [
  {
    id: 1,
    group: 'data',
    groupName: 'Dữ liệu cá nhân',
    target: 'all',
    question: 'Tình huống 1: Một ứng dụng hoặc trang web yêu cầu bạn nhập số điện thoại, ngày sinh, email và tải ảnh chụp CCCD/thẻ học sinh để nhận quà tặng tri ân. Bạn sẽ làm gì?',
    options: [
      { text: 'A. Điền đầy đủ ngay lập tức để không bỏ lỡ phần quà miễn phí.', isCorrect: false },
      { text: 'B. Nhập số điện thoại của người khác để tránh lộ thông tin của mình.', isCorrect: false },
      { text: 'C. Dừng lại, từ chối cung cấp vì đây là dữ liệu định danh nhạy cảm có nguy cơ bị thu thập trái phép.', isCorrect: true },
      { text: 'D. Chỉ tải ảnh thẻ học sinh lên nhưng giấu số điện thoại.', isCorrect: false }
    ],
    explanation: 'Dữ liệu định danh (CCCD, thẻ học sinh, SĐT) có thể bị đối tượng xấu lợi dụng để mạo danh, mở tài khoản trái phép hoặc tống tiền. Quà tặng miễn phí thường là "mồi nhử" thu thập dữ liệu.',
    risk: 'Nguy cơ bị lộ lọt dữ liệu cá nhân, bị bán dữ liệu cho bên thứ ba, bị quấy rối hoặc lừa đảo tài chính.',
    bestAction: 'Tuân thủ nguyên tắc: Không cung cấp thông tin cá nhân cho các chương trình không rõ nguồn gốc.'
  },
  {
    id: 2,
    group: 'account',
    groupName: 'Mật khẩu & Tài khoản',
    target: 'teacher',
    question: 'Tình huống 2 (GV): Một người tự xưng là nhân viên kỹ thuật hỗ trợ hệ thống giáo dục gửi tin nhắn yêu cầu thầy/cô cung cấp mã xác thực OTP gửi về điện thoại để "nâng cấp tài khoản giảng dạy". Thầy/cô sẽ:',
    options: [
      { text: 'A. Cung cấp ngay để tránh tài khoản giảng dạy bị khóa hoặc gián đoạn.', isCorrect: false },
      { text: 'B. Hỏi thêm một vài câu rồi chụp màn hình gửi mã OTP cho họ.', isCorrect: false },
      { text: 'C. Tuyệt đối không cung cấp mã OTP và kiểm tra lại qua kênh chính thức của nhà trường/nhà mạng.', isCorrect: true },
      { text: 'D. Gửi mã OTP nhưng yêu cầu họ xóa sau khi nâng cấp xong.', isCorrect: false }
    ],
    explanation: 'Mã OTP là chìa khóa bảo mật cuối cùng để đăng nhập hoặc đổi mật khẩu. Nhân viên kỹ thuật chân chính KHÔNG BAO GIỜ yêu cầu người dùng cung cấp mã OTP.',
    risk: 'Bị chiếm đoạt toàn quyền tài khoản email, cổng thông tin trường học, mất dữ liệu và lộ thông tin học sinh.',
    bestAction: 'Khắc ghi Nguyên tắc 3: Không bao giờ chia sẻ mã OTP với bất kỳ ai, dưới bất kỳ hình thức nào.'
  },
  {
    id: 3,
    group: 'ai',
    groupName: 'AI & Dữ liệu',
    target: 'all',
    question: 'Tình huống 3: Bạn đang sử dụng công cụ AI (như ChatGPT/Gemini) để nhờ tóm tắt tài liệu, bảng điểm hoặc văn bản học tập. Bạn nên làm gì trước khi tải lên?',
    options: [
      { text: 'A. Tải toàn bộ file lên ngay vì AI có chế độ bảo mật tự động.', isCorrect: false },
      { text: 'B. Dừng lại, kiểm tra và chủ động xóa/ẩn toàn bộ họ tên, ngày sinh, SĐT, địa chỉ trước khi đưa vào AI.', isCorrect: true },
      { text: 'C. Chỉ đổi tên tiêu đề file rồi tải lên bình thường.', isCorrect: false },
      { text: 'D. Không cần quan tâm vì dữ liệu đưa lên AI sẽ không ai đọc được.', isCorrect: false }
    ],
    explanation: 'Quy tắc 3 câu hỏi trước khi dùng AI: Dữ liệu đưa lên các mô hình AI có thể được lưu trữ và dùng để huấn luyện mô hình, có nguy cơ rò rỉ dữ liệu nhạy cảm ra ngoài.',
    risk: 'Vi phạm quyền riêng tư và quy định bảo vệ dữ liệu cá nhân theo Nghị định 356/2025/NĐ-CP và Luật Bảo vệ dữ liệu cá nhân.',
    bestAction: 'Thực hiện quy trình: Dừng lại – Kiểm tra – Loại bỏ thông tin nhận diện – Mới đưa vào AI.'
  },
  {
    id: 4,
    group: 'phishing',
    groupName: 'Nhận diện Lừa đảo',
    target: 'student',
    question: 'Tình huống 4 (HS): Bạn nhận được đường link qua Facebook/Zalo từ một người bạn với nội dung: "Bình chọn cho tớ tham gia cuộc thi này nhé, chỉ cần đăng nhập tài khoản Google/Facebook là xong". Bạn sẽ:',
    options: [
      { text: 'A. Bấm vào link và đăng nhập ngay để ủng hộ bạn mình.', isCorrect: false },
      { text: 'B. Kiểm tra kỹ tên miền (URL), không nhập thông tin đăng nhập và gọi điện xác nhận lại với bạn bè xem có bị hack nick không.', isCorrect: true },
      { text: 'C. Nhập tài khoản nhưng dùng mật khẩu giả để thử.', isCorrect: false },
      { text: 'D. Chuyển tiếp đường link cho cả lớp cùng bình chọn.', isCorrect: false }
    ],
    explanation: 'Đây là hình thức lừa đảo giả mạo (Phishing) rất phổ biến. Kẻ gian chiếm nick của bạn bè rồi gửi web đăng nhập giả để cướp tài khoản của những người khác.',
    risk: 'Bị mất quyền kiểm soát tài khoản mạng xã hội/Google, bị kẻ xấu dùng tài khoản để đi vay tiền hoặc lừa gạt bạn bè.',
    bestAction: 'Quy tắc 4: Luôn kiểm tra địa chỉ trang web (URL) và liên hệ trực tiếp với người gửi qua kênh khác.'
  },
  {
    id: 5,
    group: 'data',
    groupName: 'Dữ liệu cá nhân',
    target: 'teacher',
    question: 'Tình huống 5 (GV): Sau một hoạt động tập thể sôi nổi của lớp, giáo viên muốn đăng ảnh kỷ niệm lên mạng xã hội. Tuy nhiên trong ảnh có góc chụp bảng thông báo dán danh sách tên, điểm số và số điện thoại phụ huynh. Cách xử lý đúng là:',
    options: [
      { text: 'A. Cứ đăng lên vì hoạt động tập thể rất ý nghĩa, ít ai để ý đến góc bảng.', isCorrect: false },
      { text: 'B. Cắt cúp (crop) ảnh hoặc làm mờ (blur) hoàn toàn phần bảng có thông tin danh sách trước khi đăng.', isCorrect: true },
      { text: 'C. Đăng ảnh ở chế độ chỉ bạn bè xem là hoàn toàn yên tâm.', isCorrect: false },
      { text: 'D. Chờ phụ huynh nhắc nhở rồi mới gỡ ảnh.', isCorrect: false }
    ],
    explanation: 'Thông tin học sinh và phụ huynh là dữ liệu cần bảo vệ nghiêm ngặt. Khi đăng ảnh trường lớp, giáo viên cần có thói quen soi chiếu các chi tiết xung quanh.',
    risk: 'Lộ dữ liệu cá nhân của cả tập thể học sinh, tạo điều kiện cho các trung tâm quảng cáo rác hoặc kẻ xấu gọi điện quấy rối.',
    bestAction: 'Kiểm tra kỹ mọi hình ảnh trước khi công khai lên mạng xã hội.'
  },
  {
    id: 6,
    group: 'phishing',
    groupName: 'Nhận diện Lừa đảo',
    target: 'student',
    question: 'Tình huống 6 (HS): Một học sinh nhận được lời mời tham gia sự kiện "Nhận 1000 quân huy / Kim cương game miễn phí" với yêu cầu nhập tài khoản Facebook và mã OTP gửi về máy. Học sinh nên làm gì?',
    options: [
      { text: 'A. Nhập nhanh vì sự kiện sắp hết giờ.', isCorrect: false },
      { text: 'B. Tuyệt đối không nhập, nhận diện đây là chiêu trò lừa đảo chiếm đoạt tài khoản và cảnh báo cho bạn bè.', isCorrect: true },
      { text: 'C. Lập tài khoản mới để lấy mã nhận quà.', isCorrect: false },
      { text: 'D. Nhờ bạn thân nhập hộ để thử độ an toàn.', isCorrect: false }
    ],
    explanation: 'Không có nhà phát hành game chính thống nào tặng quà miễn phí bằng cách yêu cầu người dùng cung cấp mật khẩu hoặc mã OTP đăng nhập.',
    risk: 'Mất toàn bộ tài khoản game, mất tài khoản mạng xã hội gắn liền và các dữ liệu trò chuyện riêng tư.',
    bestAction: 'Thực hiện 4 KHÔNG: Không tin ngay – Không nhấp ngay – Không cung cấp ngay.'
  },
  {
    id: 7,
    group: 'account',
    groupName: 'Mật khẩu & Tài khoản',
    target: 'all',
    question: 'Tình huống 7: Khi bạn sử dụng máy tính tại phòng Tin học của trường hoặc quán Internet để đăng nhập tài khoản học tập/email, bạn cần làm gì trước khi rời đi?',
    options: [
      { text: 'A. Chỉ cần đóng cửa sổ trình duyệt (bấm dấu X đỏ).', isCorrect: false },
      { text: 'B. Đăng xuất (Sign out) hoàn toàn, chọn không lưu mật khẩu và xóa lịch sử/dữ liệu duyệt web trên máy đó.', isCorrect: true },
      { text: 'C. Khởi động lại máy tính mà không cần đăng xuất.', isCorrect: false },
      { text: 'D. Để nguyên vì người sau vào sẽ không biết mật khẩu.', isCorrect: false }
    ],
    explanation: 'Chỉ tắt trình duyệt mà không đăng xuất có thể vẫn lưu phiên đăng nhập (Cookie/Session). Người dùng sau mở lên có thể vào thẳng tài khoản của bạn.',
    risk: 'Bị người khác xem trộm email, tin nhắn hoặc đổi mật khẩu tài khoản.',
    bestAction: 'Luôn đăng xuất và sử dụng chế độ Khách (Guest) hoặc Ẩn danh khi dùng máy tính công cộng.'
  },
  {
    id: 8,
    group: 'ai',
    groupName: 'AI & Dữ liệu',
    target: 'student',
    question: 'Tình huống 8 (HS): Một trào lưu trên TikTok/Facebook rủ học sinh tải ảnh chân dung cận cảnh và ảnh căn cước công dân lên một ứng dụng AI nước ngoài để "tạo video hoạt hình tương lai". Bạn sẽ:',
    options: [
      { text: 'A. Tải ảnh lên ngay để bắt kịp xu hướng trào lưu.', isCorrect: false },
      { text: 'B. Từ chối tham gia và cảnh báo bạn bè vì nguy cơ dữ liệu sinh trắc học khuôn mặt và giấy tờ tùy thân bị đánh cắp.', isCorrect: true },
      { text: 'C. Rủ thêm cả lớp cùng tải ảnh lên.', isCorrect: false },
      { text: 'D. Chỉnh ảnh đen trắng rồi mới tải lên.', isCorrect: false }
    ],
    explanation: 'Hình ảnh khuôn mặt chất lượng cao kết hợp thông tin cá nhân có thể bị lợi dụng để huấn luyện AI Deepfake (giả mạo khuôn mặt gọi điện video lừa đảo người thân).',
    risk: 'Nguy cơ bị lạm dụng dữ liệu sinh trắc học để lừa đảo Deepfake tống tiền hoặc chiếm đoạt tài khoản ngân hàng.',
    bestAction: 'Thận trọng tối đa với các ứng dụng yêu cầu tải dữ liệu khuôn mặt và giấy tờ tùy thân.'
  },
  {
    id: 9,
    group: 'phishing',
    groupName: 'Nhận diện Lừa đảo',
    target: 'teacher',
    question: 'Tình huống 9 (GV): Giáo viên nhận được một cuộc gọi thông báo: "Con của thầy/cô (hoặc học sinh trong lớp) bị tai nạn giao thông đang cấp cứu tại Bệnh viện đa khoa tỉnh, yêu cầu chuyển gấp viện phí 20 triệu đồng vào tài khoản viện phí khẩn cấp". Giáo viên xử lý thế nào?',
    options: [
      { text: 'A. Hoảng loạn chuyển tiền ngay lập tức để kịp cứu người.', isCorrect: false },
      { text: 'B. Giữ bình tĩnh, không chuyển tiền; lập tức gọi điện cho nhà trường/gia đình học sinh hoặc bệnh viện qua số hotline chính thức để xác minh.', isCorrect: true },
      { text: 'C. Đăng thông tin lên mạng xã hội kêu gọi quyên góp viện phí.', isCorrect: false },
      { text: 'D. Tắt máy và không làm gì cả.', isCorrect: false }
    ],
    explanation: 'Đây là thủ đoạn lừa đảo "Con đang cấp cứu" nhắm vào tâm lý lo lắng của giáo viên và phụ huynh. Luôn bình tĩnh xác minh qua kênh chính thống.'
  },
  {
    id: 10,
    group: 'data',
    groupName: 'Dữ liệu cá nhân',
    target: 'student',
    question: 'Tình huống 10 (HS): Trong giờ ra chơi, một bạn trong lớp để quên điện thoại trên bàn không khóa màn hình. Bạn khác rủ em mở điện thoại bạn lên xem trộm tin nhắn Zalo và ảnh riêng tư. Em sẽ:',
    options: [
      { text: 'A. Cùng xem trộm và chụp lại để trêu bạn.', isCorrect: false },
      { text: 'B. Từ chối và nhắc nhở bạn không được xem trộm vì đó là xâm phạm quyền riêng tư, sau đó hỗ trợ cất điện thoại an toàn cho bạn.', isCorrect: true },
      { text: 'C. Xem trộm một mình rồi không nói cho ai biết.', isCorrect: false },
      { text: 'D. Cầm điện thoại đi giấu để dọa bạn.', isCorrect: false }
    ],
    explanation: 'Tôn trọng quyền riêng tư và bảo mật của người khác là phẩm chất quan trọng của công dân số văn minh trong nhà trường.'
  },
  {
    id: 11,
    group: 'account',
    groupName: 'Mật khẩu & Tài khoản',
    target: 'teacher',
    question: 'Tình huống 11 (GV): Để tiện cho việc phụ đạo học sinh, giáo viên muốn lập một nhóm Zalo/Telegram. Để bảo đảm an toàn dữ liệu, giáo viên nên thiết lập như thế nào?',
    options: [
      { text: 'A. Mở link tham gia nhóm công khai để bất kỳ ai trên mạng cũng có thể tự do bấm vào tham gia.', isCorrect: false },
      { text: 'B. Bật tính năng phê duyệt thành viên của trưởng nhóm, chỉ cho phép đúng phụ huynh/học sinh trong danh sách tham gia.', isCorrect: true },
      { text: 'C. Đặt quyền phó nhóm cho tất cả học sinh.', isCorrect: false },
      { text: 'D. Không cần cài đặt gì.', isCorrect: false }
    ],
    explanation: 'Nhóm lớp mở link công khai thường bị đối tượng xấu trà trộn vào phát tán tin nhắn rác, link lừa đảo hoặc hình ảnh độc hại.'
  },
  {
    id: 12,
    group: 'phishing',
    groupName: 'Nhận diện Lừa đảo',
    target: 'all',
    question: 'Tình huống 12: Bạn nhận được tin nhắn SMS từ đầu số thông báo "Tài khoản ngân hàng/dịch vụ công của bạn bị khóa, vui lòng truy cập link `dichvucong-xacthuc.net` để mở khóa". Bạn sẽ:',
    options: [
      { text: 'A. Truy cập link và điền tài khoản mật khẩu ngay vì sợ bị khóa.', isCorrect: false },
      { text: 'B. Nhận diện dấu hiệu giả mạo (cổng dịch vụ công quốc gia có tên miền đuôi .gov.vn), không bấm link và báo cáo tin nhắn rác tới tổng đài 156.', isCorrect: true },
      { text: 'C. Chuyển tiếp tin nhắn cho người thân nhờ mở khóa hộ.', isCorrect: false },
      { text: 'D. Gọi lại số điện thoại đó để chửi bới.', isCorrect: false }
    ],
    explanation: 'Các cơ quan nhà nước và ngân hàng chỉ dùng tên miền chính thống (đuôi .gov.vn hoặc .vn), không bao giờ dùng tên miền quốc tế (.net, .xyz, .top) để yêu cầu đăng nhập.'
  },
  {
    id: 13,
    group: 'data',
    groupName: 'Dữ liệu cá nhân',
    target: 'teacher',
    question: 'Tình huống 13 (GV): Thầy/cô cần nén file hoặc chuyển đổi danh sách học sinh nhận trợ cấp/hộ nghèo từ Word sang PDF. Một số trang web miễn phí trên mạng có tính năng này. Thầy/cô nên làm gì?',
    options: [
      { text: 'A. Tải trực tiếp cả file lên trang web miễn phí vì thao tác rất nhanh chóng và tiện lợi.', isCorrect: false },
      { text: 'B. Tuyệt đối không tải văn bản chứa thông tin cá nhân học sinh lên các website đổi file trôi nổi; nên dùng tính năng "Lưu dưới dạng PDF" (Save As PDF) có sẵn trong Microsoft Word trên máy tính.', isCorrect: true },
      { text: 'C. Đổi tên file trước rồi tải lên là hoàn toàn an toàn.', isCorrect: false },
      { text: 'D. Dùng trình duyệt ẩn danh để nén file.', isCorrect: false }
    ],
    explanation: 'Các công cụ chuyển đổi file miễn phí trực tuyến có thể sao lưu dữ liệu văn bản vào máy chủ của họ, dẫn tới rò rỉ danh sách và hoàn cảnh nhạy cảm của học sinh.',
    risk: 'Lộ dữ liệu cá nhân nhạy cảm của học sinh ra Internet, vi phạm Luật Bảo vệ DLCN số 91/2025/QH15.',
    bestAction: 'Ưu tiên xử lý tài liệu nội bộ offline bằng phần mềm văn phòng có sẵn trên máy tính.'
  },
  {
    id: 14,
    group: 'ai',
    groupName: 'AI & Dữ liệu',
    target: 'teacher',
    question: 'Tình huống 14 (GV): Thầy/cô muốn dùng ChatGPT để gợi ý các lời nhận xét học bạ phong phú cho 40 học sinh trong lớp. Cách làm nào sau đây là AN TOÀN VÀ ĐÚNG CHUẨN NHẤT?',
    options: [
      { text: 'A. Sao chép toàn bộ bảng Excel gồm: Họ tên, Ngày sinh, Điểm số, Đánh giá đạo đức vào prompt của ChatGPT.', isCorrect: false },
      { text: 'B. Ẩn danh hóa dữ liệu: Chỉ nhập dạng "Học sinh A: chăm chỉ, điểm Toán 8.5, cần rèn thêm kỹ năng thuyết trình" và yêu cầu AI gợi ý nhận xét chung, sau đó thầy/cô tự ghép vào sổ điểm.', isCorrect: true },
      { text: 'C. Chụp ảnh học bạ tải lên cho AI đọc nhận diện ký tự (OCR).', isCorrect: false },
      { text: 'D. Không nên dùng AI dưới mọi hình thức vì bị cấm hoàn toàn.', isCorrect: false }
    ],
    explanation: 'Giáo viên hoàn toàn có thể ứng dụng AI để nâng cao hiệu suất làm việc, miễn là tuân thủ nguyên tắc ẩn danh hóa: Tuyệt đối không đưa họ tên và dữ liệu định danh của học sinh vào mô hình AI.',
    risk: 'Dữ liệu học bạ và danh tính học sinh bị nhà cung cấp AI lưu trữ hoặc dùng để huấn luyện mô hình công cộng.',
    bestAction: 'Ứng dụng AI thông minh: Giữ ý tưởng – Ẩn danh dữ liệu cá nhân.'
  },
  {
    id: 15,
    group: 'data',
    groupName: 'Dữ liệu cá nhân',
    target: 'student',
    question: 'Tình huống 15 (HS): Một tài khoản lạ trên Facebook nhắn tin khen em có ngoại hình đẹp, ngỏ ý mời em tham gia "Dự án người mẫu học đường" với thù lao 5 triệu đồng, yêu cầu em gửi ảnh chân dung, ảnh toàn thân và chụp 2 mặt CCCD để "làm hồ sơ bảo hiểm". Em sẽ:',
    options: [
      { text: 'A. Chụp gửi ngay vì cơ hội kiếm tiền và nổi tiếng rất hấp dẫn.', isCorrect: false },
      { text: 'B. Cảnh giác với chiêu trò thu thập hình ảnh và CCCD để lừa đảo hoặc tống tiền; không gửi thông tin và báo ngay cho bố mẹ/thầy cô.', isCorrect: true },
      { text: 'C. Chỉ gửi ảnh toàn thân nhưng không gửi CCCD.', isCorrect: false },
      { text: 'D. Giấu bố mẹ và tự đi gặp người đó theo địa chỉ hẹn.', isCorrect: false }
    ],
    explanation: 'Đây là cạm bẫy dụ dỗ phổ biến nhắm vào học sinh để thu thập hình ảnh nhạy cảm và căn cước công dân nhằm tống tiền, bôi nhọ hoặc đăng ký tài khoản tín dụng đen.',
    risk: 'Nguy cơ bị xâm hại danh dự, tống tiền hoặc bị lợi dụng thông tin CCCD vào các đường dây lừa đảo.',
    bestAction: 'Khắc ghi: Tuyệt đối không cung cấp hình ảnh riêng tư và CCCD cho người lạ trên mạng.'
  },
  {
    id: 16,
    group: 'account',
    groupName: 'Mật khẩu & Tài khoản',
    target: 'student',
    question: 'Tình huống 16 (HS): Một người bạn thân cùng lớp mượn tài khoản và mật khẩu Facebook của em với lý do: "Cho tớ mượn nick 10 phút để vào xem trang cá nhân một bạn khác do nick tớ bị chặn". Em xử lý thế nào?',
    options: [
      { text: 'A. Đưa ngay mật khẩu vì bạn bè thân thiết nên tin tưởng tuyệt đối.', isCorrect: false },
      { text: 'B. Từ chối khéo léo và giải thích rằng tài khoản cá nhân phải tự bảo mật; em có thể ngồi cùng để mở giúp bạn xem thông tin nếu hợp lý.', isCorrect: true },
      { text: 'C. Đổi mật khẩu thành dãy số dễ nhớ rồi đọc cho bạn, sau đó không đổi lại.', isCorrect: false },
      { text: 'D. Đọc cả mã xác thực 2 lớp (2FA) gửi về máy cho bạn.', isCorrect: false }
    ],
    explanation: 'Mật khẩu và tài khoản mạng xã hội là bí mật riêng tư cá nhân. Cho mượn tài khoản có thể dẫn đến việc bạn bè vô tình làm lộ nick hoặc dùng nick của em gây hiểu lầm, tranh cãi.',
    risk: 'Mất quyền kiểm soát tài khoản cá nhân, rò rỉ tin nhắn riêng tư và dễ nảy sinh mâu thuẫn học đường.',
    bestAction: 'Tài khoản là cá nhân – Tuyệt đối không chia sẻ mật khẩu cho bất kỳ ai!'
  }
];

// --- 4. APP STATE ---
let currentView = 'home';
let currentScenarioFilter = 'all';
let currentScenarioRole = 'teacher'; // 'teacher' hoặc 'student'
let currentTargetRole = 'teacher'; // 'teacher' hoặc 'student'

// Lấy danh sách câu hỏi đang hoạt động (Ưu tiên tùy chỉnh từ Admin trong LocalStorage)
function getActiveQuestions(role) {
  const isTeacher = (role === 'teacher' || role === 'gv');
  const key = isTeacher ? 'safels_custom_teacher_questions' : 'safels_custom_student_questions';
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Lỗi đọc ngân hàng câu hỏi từ LocalStorage:', err);
  }
  return isTeacher ? teacherQuizQuestions : studentQuizQuestions;
}

let currentActiveQuestions = getActiveQuestions('teacher');
let quizAnswers = {};


// --- 5. KHỞI TẠO HỆ THỐNG (DOM INIT) ---
document.addEventListener('DOMContentLoaded', () => {
  renderScenarios();
  setupEventListeners();
  generateQRCode();
  loadTargetRole(currentTargetRole);
});

// Chuyển đổi View mượt mà
function navigateTo(viewId) {
  document.querySelectorAll('.section-view').forEach(view => {
    view.classList.remove('active');
  });
  
  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.add('active');
    currentView = viewId;
  }

  if (viewId === 'module-6') {
    renderQuizQuestions();
  }
  
  document.querySelectorAll('.nav-pill').forEach(pill => {
    if (pill.dataset.target === viewId) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cấu hình Event Listeners
function setupEventListeners() {
  document.querySelectorAll('.nav-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      const target = e.currentTarget.dataset.target;
      navigateTo(target);
    });
  });

  document.querySelectorAll('.portal-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const target = e.currentTarget.dataset.target;
      navigateTo(target);
    });
  });

  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navigateTo('home');
    });
  });

  const logo = document.getElementById('brandLogo');
  if (logo) {
    logo.addEventListener('click', () => navigateTo('home'));
  }

  // QR Modal
  const qrModal = document.getElementById('qrModal');
  const openQrBtn = document.getElementById('openQrBtn');
  const closeQrBtn = document.getElementById('closeQrBtn');
  if (openQrBtn && qrModal) {
    openQrBtn.addEventListener('click', () => qrModal.classList.add('open'));
  }
  if (closeQrBtn && qrModal) {
    closeQrBtn.addEventListener('click', () => qrModal.classList.remove('open'));
  }
  if (qrModal) {
    qrModal.addEventListener('click', (e) => {
      if (e.target === qrModal) qrModal.classList.remove('open');
    });
  }

  // Lọc tình huống
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentScenarioFilter = e.currentTarget.dataset.filter;
      renderScenarios();
    });
  });

  // Password checker
  const pwInput = document.getElementById('pwTesterInput');
  if (pwInput) {
    pwInput.addEventListener('input', checkPasswordStrength);
  }

  // Chuyển đổi chế độ Đánh giá / Khảo sát
  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const mode = e.currentTarget.dataset.mode;
      toggleAssessmentMode(mode);
    });
  });
}

// Chuyển đổi đối tượng làm bài (Giáo viên vs Học sinh)
window.switchQuizRole = function(role) {
  currentTargetRole = role;
  loadTargetRole(role);
};

function loadTargetRole(role) {
  const gvBtn = document.getElementById('roleBtnTeacher');
  const hsBtn = document.getElementById('roleBtnStudent');
  const infoText = document.getElementById('quizRoleInfoText');

  currentActiveQuestions = getActiveQuestions(role);

  if (role === 'teacher') {
    if (gvBtn) gvBtn.classList.add('active');
    if (hsBtn) hsBtn.classList.remove('active');
    if (infoText) {
      infoText.innerHTML = `🎓 <strong>Bộ đề kiểm tra dành cho Giáo viên (${currentActiveQuestions.length} câu nghiệp vụ sư phạm)</strong><br><span style="font-size: 0.84rem; color: #475569;">Bao gồm: Bảo mật điểm số, hồ sơ lớp, quy tắc ảnh học sinh, AI soạn bài, lừa đảo công văn ngành, Luật 91/2025/QH15.</span>`;
    }
  } else {
    if (gvBtn) gvBtn.classList.remove('active');
    if (hsBtn) hsBtn.classList.add('active');
    if (infoText) {
      infoText.innerHTML = `🎒 <strong>Bộ đề kiểm tra dành cho Học sinh (${currentActiveQuestions.length} câu học đường & mạng xã hội)</strong><br><span style="font-size: 0.84rem; color: #475569;">Bao gồm: Tài khoản học trực tuyến, bẫy game/học bổng ảo, bạo lực mạng, trào lưu AI nhạy cảm, số khẩn cấp 111.</span>`;
    }
  }

  quizAnswers = {};
  const resBox = document.getElementById('quizResultBox');
  if (resBox) resBox.style.display = 'none';
  renderQuizQuestions();
}

// Tạo mã QR chuẩn xác
function generateQRCode() {
  const currentUrl = 'https://safe-ls.vercel.app';
  const qrImg = document.getElementById('qrImageDisplay');
  const qrText = document.getElementById('qrUrlText');
  
  if (qrText) qrText.textContent = currentUrl;
  if (qrImg) {
    const encoded = encodeURIComponent(currentUrl);
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encoded}&bgcolor=ffffff&color=1d4ed8`;
  }
}

// Chuyển đổi đối tượng tình huống (Giáo viên vs Học sinh)
window.switchScenarioRole = function(role) {
  currentScenarioRole = role;
  const teacherBtn = document.getElementById('scenarioRoleTeacher');
  const studentBtn = document.getElementById('scenarioRoleStudent');
  const infoText = document.getElementById('scenarioRoleInfoText');

  if (role === 'teacher') {
    if (teacherBtn) teacherBtn.classList.add('active');
    if (studentBtn) studentBtn.classList.remove('active');
    if (infoText) {
      infoText.innerHTML = `🎓 <em>Các tình huống nghiệp vụ thực tế của Giáo viên: xử lý bảng điểm, ảnh lớp, dùng AI nhận xét học sinh, cuộc gọi mạo danh, tài khoản quản lý giáo dục...</em>`;
    }
  } else {
    if (teacherBtn) teacherBtn.classList.remove('active');
    if (studentBtn) studentBtn.classList.add('active');
    if (infoText) {
      infoText.innerHTML = `🎒 <em>Các tình huống học đường & mạng xã hội của Học sinh: bẫy game nhận quà, link bình chọn giả, trào lưu AI, quyền riêng tư và bạo lực mạng...</em>`;
    }
  }

  renderScenarios();
};

// Render các tình huống mô phỏng theo đối tượng và chuyên mục
function renderScenarios() {
  const container = document.getElementById('scenariosContainer');
  if (!container) return;

  const filtered = scenariosData.filter(s => {
    // 1. Lọc theo đối tượng (Giáo viên vs Học sinh)
    const matchRole = (s.target === currentScenarioRole || s.target === 'all');
    if (!matchRole) return false;

    // 2. Lọc theo danh mục
    if (currentScenarioFilter === 'all') return true;
    return s.group === currentScenarioFilter;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: #64748b; background: #ffffff; border-radius: 12px; border: 1px dashed #cbd5e1; margin-top: 1rem;">
        <p style="font-weight: 600; font-size: 1rem; margin-bottom: 0.5rem;">Chưa có tình huống trong danh mục này cho đối tượng đã chọn.</p>
        <p style="font-size: 0.88rem;">Vui lòng bấm chọn <strong>"Tất cả tình huống"</strong> ở thanh lọc phía trên để trải nghiệm.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(s => `
    <div class="scenario-card" id="scenario-${s.id}">
      <div class="scenario-meta">
        <span class="badge-tag">${s.groupName}</span>
        <span style="font-size: 0.82rem; color: #1e40af; font-weight: 700;">Đối tượng: ${s.target === 'teacher' ? '🎓 Giáo viên' : (s.target === 'student' ? '🎒 Học sinh' : '👥 Cả GV & HS')}</span>
      </div>
      <div class="scenario-question">${s.question}</div>
      <div class="options-list">
        ${s.options.map((opt, idx) => `
          <button class="option-btn" onclick="selectScenarioOption(${s.id}, ${idx})">
            <span>${opt.text}</span>
          </button>
        `).join('')}
      </div>
      <div class="scenario-feedback" id="feedback-${s.id}"></div>
    </div>
  `).join('');
}

// Xử lý chọn đáp án tình huống
window.selectScenarioOption = function(scenarioId, optionIdx) {
  const scenario = scenariosData.find(s => s.id === scenarioId);
  if (!scenario) return;

  const card = document.getElementById(`scenario-${scenarioId}`);
  const feedbackEl = document.getElementById(`feedback-${scenarioId}`);
  const optionBtns = card.querySelectorAll('.option-btn');

  const selectedOpt = scenario.options[optionIdx];

  optionBtns.forEach((btn, idx) => {
    btn.disabled = true;
    if (scenario.options[idx].isCorrect) {
      btn.classList.add('correct');
    } else if (idx === optionIdx) {
      btn.classList.add('wrong');
    }
  });

  feedbackEl.className = 'scenario-feedback show ' + (selectedOpt.isCorrect ? 'is-correct' : 'is-wrong');
  feedbackEl.innerHTML = `
    <div style="font-weight: 700; margin-bottom: 0.35rem;">
      ${selectedOpt.isCorrect ? '✅ Phương án xử lý CHÍNH XÁC!' : '❌ Phương án CHƯA PHÙ HỢP!'}
    </div>
    <div style="margin-bottom: 0.35rem;"><strong>Phân tích:</strong> ${scenario.explanation}</div>
    <div style="margin-bottom: 0.35rem;"><strong>⚠️ Nguy cơ tiềm ẩn:</strong> ${scenario.risk}</div>
    <div style="color: #1e40af; font-weight: 600;"><strong>💡 Lời khuyên SAFE-LS:</strong> ${scenario.bestAction}</div>
  `;
};

// Kiểm tra mật khẩu mô phỏng
function checkPasswordStrength(e) {
  const val = e.target.value;
  const fill = document.getElementById('pwStrengthFill');
  const text = document.getElementById('pwStrengthText');
  
  if (!val) {
    fill.style.width = '0%';
    text.textContent = 'Hãy nhập thử mật khẩu mẫu để kiểm tra';
    text.style.color = '#64748b';
    return;
  }

  let score = 0;
  if (val.length >= 8) score += 25;
  if (val.length >= 12) score += 15;
  if (/[A-Z]/.test(val)) score += 20;
  if (/[0-9]/.test(val)) score += 20;
  if (/[^A-Za-z0-9]/.test(val)) score += 20;

  fill.style.width = score + '%';

  if (score < 40) {
    fill.style.background = '#ef4444';
    text.textContent = 'Mức độ: Rất yếu (Dễ bị bẻ khóa trong vài giây)';
    text.style.color = '#dc2626';
  } else if (score < 75) {
    fill.style.background = '#f59e0b';
    text.textContent = 'Mức độ: Trung bình (Nên thêm ký tự hoa, số và ký tự đặc biệt)';
    text.style.color = '#d97706';
  } else {
    fill.style.background = '#10b981';
    text.textContent = 'Mức độ: Rất mạnh (Đạt chuẩn bảo mật SAFE-LS)';
    text.style.color = '#059669';
  }
}

// Chuyển đổi tab Kiểm tra và Khảo sát
function toggleAssessmentMode(mode) {
  const testBox = document.getElementById('quizTestBox');
  const surveyBox = document.getElementById('surveyBox');

  if (mode === 'quiz') {
    testBox.style.display = 'block';
    surveyBox.style.display = 'none';
    renderQuizQuestions();
  } else {
    testBox.style.display = 'none';
    surveyBox.style.display = 'block';
  }
}

// Render câu hỏi trắc nghiệm (18 câu)
function renderQuizQuestions() {
  const container = document.getElementById('quizQuestionsContainer');
  if (!container) return;

  container.innerHTML = currentActiveQuestions.map((q, qIdx) => `
    <div class="content-box" style="margin-bottom: 1.15rem; background: #ffffff;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.35rem;">
        <span class="badge-tag">${q.skill}</span>
        <span style="font-size: 0.8rem; color: #64748b; font-weight: 600;">Câu ${qIdx + 1} / ${currentActiveQuestions.length}</span>
      </div>
      <div style="font-weight: 700; color: #0f172a; margin-bottom: 0.75rem;">${q.q}</div>
      <div class="options-list">
        ${q.options.map((opt, optIdx) => `
          <label style="display: flex; align-items: flex-start; gap: 0.65rem; padding: 0.65rem 0.85rem; border: 1px solid #e2e8f0; border-radius: 8px; cursor: pointer; transition: background 0.15s ease;">
            <input type="radio" name="quiz_q_${qIdx}" value="${optIdx}" style="margin-top: 0.25rem;" onchange="recordQuizAnswer(${qIdx}, ${optIdx})">
            <span style="font-size: 0.92rem; color: #1e293b;">${opt}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');
}

window.recordQuizAnswer = function(qIdx, optIdx) {
  quizAnswers[qIdx] = optIdx;
};

// Chấm điểm và Tự động gửi kết quả về Google Sheets
window.submitQuiz = async function() {
  const answeredCount = Object.keys(quizAnswers).length;
  if (answeredCount < currentActiveQuestions.length) {
    alert(`Bạn còn ${currentActiveQuestions.length - answeredCount} câu chưa hoàn thành. Vui lòng làm đủ ${currentActiveQuestions.length} câu để có kết quả chính xác nhất!`);
    return;
  }

  let correctCount = 0;
  const skillScores = {};

  currentActiveQuestions.forEach((q, idx) => {
    if (!skillScores[q.skill]) {
      skillScores[q.skill] = { total: 0, correct: 0 };
    }
    skillScores[q.skill].total++;

    if (quizAnswers[idx] === q.correct) {
      correctCount++;
      skillScores[q.skill].correct++;
    }
  });

  const percentage = Math.round((correctCount / currentActiveQuestions.length) * 100);

  // Thang 4 mức theo đề án (Phần IV.2)
  let level = '';
  let levelDesc = '';

  if (percentage < 50) {
    level = 'Mức 1 – Chưa đạt';
    levelDesc = 'Chưa nhận diện hoặc xử lý đúng tình huống an toàn dữ liệu. Cần tham gia ngay các khóa bồi dưỡng mô hình SAFE-LS.';
  } else if (percentage < 70) {
    level = 'Mức 2 – Đạt một phần';
    levelDesc = 'Có nhận biết cơ bản về dữ liệu cá nhân nhưng chưa biết cách xử lý đầy đủ khi gặp nguy cơ mạng.';
  } else if (percentage < 85) {
    level = 'Mức 3 – Đạt';
    levelDesc = 'Có khả năng nhận diện và xử lý cơ bản các nguy cơ bảo mật tài khoản và quyền riêng tư trong môi trường số.';
  } else {
    level = 'Mức 4 – Thành thạo';
    levelDesc = 'Có khả năng nhận diện nhanh, lựa chọn biện pháp phù hợp và biết tìm kiếm hỗ trợ khi cần thiết. Đạt chuẩn kỹ năng SAFE-LS!';
  }

  const participantName = document.getElementById('participantNameInput')?.value.trim() || 'Ẩn danh';
  const participantOrg = document.getElementById('participantOrgInput')?.value.trim() || 'Lạng Sơn';

  // Chuẩn bị payload gửi về Google Sheets & Lưu Admin
  const submissionData = {
    timestamp: new Date().toLocaleString('vi-VN'),
    role: currentTargetRole === 'teacher' ? 'Giáo viên' : 'Học sinh',
    name: participantName,
    organization: participantOrg,
    score: `${correctCount}/${currentActiveQuestions.length}`,
    percentage: percentage,
    level: level,
    skill1: skillScores['Nhận diện dữ liệu cá nhân'] ? `${skillScores['Nhận diện dữ liệu cá nhân'].correct}/${skillScores['Nhận diện dữ liệu cá nhân'].total}` : 'N/A',
    skill2: skillScores['Bảo vệ tài khoản và mật khẩu'] ? `${skillScores['Bảo vệ tài khoản và mật khẩu'].correct}/${skillScores['Bảo vệ tài khoản và mật khẩu'].total}` : 'N/A',
    skill3: skillScores['Nhận diện nguy cơ và lừa đảo'] ? `${skillScores['Nhận diện nguy cơ và lừa đảo'].correct}/${skillScores['Nhận diện nguy cơ và lừa đảo'].total}` : 'N/A',
    skill4: skillScores['Quản lý quyền riêng tư'] ? `${skillScores['Quản lý quyền riêng tư'].correct}/${skillScores['Quản lý quyền riêng tư'].total}` : 'N/A',
    skill5: skillScores['Sử dụng AI an toàn'] ? `${skillScores['Sử dụng AI an toàn'].correct}/${skillScores['Sử dụng AI an toàn'].total}` : 'N/A',
    skill6: skillScores['Xử lý sự cố'] ? `${skillScores['Xử lý sự cố'].correct}/${skillScores['Xử lý sự cố'].total}` : 'N/A'
  };

  // Lưu lịch sử vào LocalStorage cho Admin Dashboard
  saveSubmissionLocally(submissionData);

  // Tự động gửi về Google Sheets nếu có cấu hình
  const syncStatus = await sendToGoogleSheet(submissionData);

  const resultBox = document.getElementById('quizResultBox');
  resultBox.style.display = 'block';
  resultBox.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.25rem;">
      <h3 style="font-size: 1.35rem; color: #1e3a8a; margin-bottom: 0.35rem;">KẾT QUẢ ĐÁNH GIÁ KỸ NĂNG SAFE-LS</h3>
      <div style="font-size: 0.9rem; color: #64748b; margin-bottom: 0.5rem;">Người làm bài: <strong>${participantName}</strong> (${participantOrg}) · Đối tượng: <strong>${submissionData.role}</strong></div>
      <div style="font-size: 2.25rem; font-weight: 800; color: #1d4ed8;">${percentage}% (${correctCount}/${currentActiveQuestions.length} câu đúng)</div>
      <div style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin-top: 0.25rem;">Xếp loại: <span class="badge-tag" style="font-size: 1rem;">${level}</span></div>
      <p style="color: #475569; max-width: 650px; margin: 0.5rem auto 0;">${levelDesc}</p>
    </div>

    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; margin-bottom: 1.25rem;">
      <h4 style="font-weight: 700; color: #1e293b; margin-bottom: 0.85rem;">Phân tích theo 6 nhóm kỹ năng cơ bản (Phần V.9):</h4>
      ${Object.keys(skillScores).map(skill => {
        const s = skillScores[skill];
        const pct = Math.round((s.correct / s.total) * 100);
        return `
          <div class="skill-bar-row">
            <div class="skill-bar-label">
              <span>${skill}</span>
              <span>${s.correct}/${s.total} (${pct}%)</span>
            </div>
            <div class="skill-bar-track">
              <div class="skill-bar-fill" style="width: ${pct}%;"></div>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 0.75rem 1rem; text-align: center; font-size: 0.88rem; color: #15803d; font-weight: 600;">
      ${syncStatus ? '✅ Kết quả đã tự động lưu thành công vào Google Sheets của cô giáo!' : '💾 Kết quả đã được ghi nhận vào hệ thống SAFE-LS!'}
    </div>
  `;

  resultBox.scrollIntoView({ behavior: 'smooth' });
};

// Lưu dữ liệu vào LocalStorage
function saveSubmissionLocally(data) {
  try {
    const list = JSON.parse(localStorage.getItem('safels_submissions') || '[]');
    list.unshift(data);
    localStorage.setItem('safels_submissions', JSON.stringify(list));
  } catch (err) {
    console.warn('LocalStorage error:', err);
  }
}

// Gắn URL Webhook và ngân hàng câu hỏi lên window an toàn, tránh lỗi trùng biến const
window.DEFAULT_GSHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbyhTm79tQOIUDtQ6WOy_J0ssF0YBACRXWg_jqboq0tRnHUhT1Gxl_rJJoW7YTKM2G-8RQ/exec';
window.teacherQuizQuestions = typeof teacherQuizQuestions !== 'undefined' ? teacherQuizQuestions : [];
window.studentQuizQuestions = typeof studentQuizQuestions !== 'undefined' ? studentQuizQuestions : [];
window.DEFAULT_TEACHER_QUESTIONS = window.teacherQuizQuestions;
window.DEFAULT_STUDENT_QUESTIONS = window.studentQuizQuestions;
window.getActiveQuestions = getActiveQuestions;


// Hàm gửi dữ liệu sang Google Sheets Webhook
async function sendToGoogleSheet(data) {
  const webhookUrl = localStorage.getItem('safels_gsheet_url') || window.DEFAULT_GSHEET_WEBHOOK_URL;
  if (!webhookUrl) return false;

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return true;
  } catch (err) {
    console.error('Lỗi gửi Google Sheets:', err);
    return false;
  }
}

