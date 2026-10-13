// Data and Logic for SAFE-LS Portal

// --- Scenarios Data (12 Scenarios across 4 Groups) ---
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
    question: 'Tình huống 2: Một người tự xưng là nhân viên kỹ thuật hỗ trợ hệ thống giáo dục gửi tin nhắn yêu cầu thầy/cô cung cấp mã xác thực OTP gửi về điện thoại để "nâng cấp tài khoản giảng dạy". Thầy/cô sẽ:',
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
    question: 'Tình huống 3: Bạn đang sử dụng công cụ AI (như ChatGPT/Gemini) để nhờ tóm tắt bảng điểm, hồ sơ học sinh hoặc phân tích một tài liệu nội bộ của trường. Bạn nên làm gì trước khi tải lên?',
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
    question: 'Tình huống 4: Bạn nhận được đường link qua Facebook/Zalo từ một người bạn với nội dung: "Bình chọn cho tớ tham gia cuộc thi này nhé, chỉ cần đăng nhập tài khoản Google/Facebook là xong". Bạn sẽ:',
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
    question: 'Tình huống 5: Sau một hoạt động tập thể sôi nổi của lớp, giáo viên muốn đăng ảnh kỷ niệm lên mạng xã hội. Tuy nhiên trong ảnh có góc chụp bảng thông báo dán danh sách tên, điểm số và số điện thoại phụ huynh. Cách xử lý đúng là:',
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
    question: 'Tình huống 6: Một học sinh nhận được lời mời tham gia sự kiện "Nhận 1000 quân huy / Kim cương game miễn phí" với yêu cầu nhập tài khoản Facebook và mã OTP gửi về máy. Học sinh nên làm gì?',
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
    question: 'Tình huống 8: Một trào lưu trên TikTok/Facebook rủ học sinh tải ảnh chân dung cận cảnh và ảnh căn cước công dân lên một ứng dụng AI nước ngoài để "tạo video hoạt hình tương lai". Bạn sẽ:',
    options: [
      { text: 'A. Tải ảnh lên ngay để bắt kịp xu hướng trào lưu.', isCorrect: false },
      { text: 'B. Từ chối tham gia và cảnh báo bạn bè vì nguy cơ dữ liệu sinh trắc học khuôn mặt và giấy tờ tùy thân bị đánh cắp.', isCorrect: true },
      { text: 'C. Rủ thêm cả lớp cùng tải ảnh lên.', isCorrect: false },
      { text: 'D. Chỉnh ảnh đen trắng rồi mới tải lên.', isCorrect: false }
    ],
    explanation: 'Hình ảnh khuôn mặt chất lượng cao kết hợp thông tin cá nhân có thể bị lợi dụng để huấn luyện AI Deepfake (giả mạo khuôn mặt gọi điện video lừa đảo người thân).',
    risk: 'Nguy cơ bị lạm dụng dữ liệu sinh trắc học để lừa đảo Deepfake tống tiền hoặc chiếm đoạt tài khoản ngân hàng.',
    bestAction: 'Thận trọng tối đa với các ứng dụng yêu cầu tải dữ liệu khuôn mặt và giấy tờ tùy thân.'
  }
];

// --- 12 Assessment Questions for Section 6 (Pre/Post Test) ---
const quizQuestions = [
  {
    skill: 'Nhận diện dữ liệu cá nhân',
    q: 'Câu 1: Theo quy định hiện hành, thông tin nào sau đây thuộc nhóm Dữ liệu cá nhân cần được bảo vệ?',
    options: [
      'A. Họ và tên, số điện thoại, ngày sinh, hình ảnh khuôn mặt cá nhân.',
      'B. Địa chỉ cổng thông tin điện tử của Bộ Giáo dục & Đào tạo.',
      'C. Tên danh lam thắng cảnh du lịch tại tỉnh Lạng Sơn.',
      'D. Định lý Toán học hoặc kiến thức khoa học tự nhiên.'
    ],
    correct: 0
  },
  {
    skill: 'Nhận diện dữ liệu cá nhân',
    q: 'Câu 2: Trong trường học, tài liệu nào sau đây TUYỆT ĐỐI KHÔNG được tự ý chia sẻ công khai lên mạng xã hội?',
    options: [
      'A. Kế hoạch tổ chức lễ khai giảng năm học mới của nhà trường.',
      'B. Bảng tổng hợp điểm số chi tiết kèm số định danh cá nhân/SĐT phụ huynh của học sinh.',
      'C. Bài thơ chào mừng ngày Nhà giáo Việt Nam 20/11.',
      'D. Lịch thi đấu thể thao giữa các lớp.'
    ],
    correct: 1
  },
  {
    skill: 'Bảo vệ tài khoản và mật khẩu',
    q: 'Câu 3: Đâu là nguyên tắc tạo mật khẩu an toàn và đúng đắn nhất?',
    options: [
      'A. Dùng ngày tháng năm sinh hoặc số điện thoại cho dễ nhớ.',
      'B. Dùng một mật khẩu duy nhất cho tất cả các tài khoản mạng xã hội và email.',
      'C. Mật khẩu dài tối thiểu 10 ký tự, kết hợp chữ hoa, chữ thường, số, ký tự đặc biệt và bật xác thực 2 bước (2FA).',
      'D. Ghi mật khẩu lên mảnh giấy rồi dán ngay trên màn hình máy tính.'
    ],
    correct: 2
  },
  {
    skill: 'Bảo vệ tài khoản và mật khẩu',
    q: 'Câu 4: Khi nhận được tin nhắn yêu cầu cung cấp mã xác thực OTP từ một người tự xưng là bạn bè hoặc cơ quan chức năng, bạn xử lý thế nào?',
    options: [
      'A. Đọc hoặc gửi mã OTP ngay vì họ là người quen.',
      'B. Tuyệt đối không cung cấp mã OTP cho bất kỳ ai dưới mọi hình thức.',
      'C. Cung cấp mã OTP nhưng yêu cầu họ dùng nhanh trong 5 phút.',
      'D. Đổi mã OTP khác rồi mới gửi.'
    ],
    correct: 1
  },
  {
    skill: 'Nhận diện nguy cơ và lừa đảo',
    q: 'Câu 5: Dấu hiệu nào sau đây giúp bạn nhận biết một đường liên kết (link) có nguy cơ lừa đảo giả mạo (Phishing)?',
    options: [
      'A. Tên miền có lỗi chính tả hoặc ký tự lạ cố tình nhái theo trang chính thức (ví dụ: g00gle-login.xyz thay vì google.com).',
      'B. Nội dung tin nhắn mang tính chất thúc ép khẩn cấp: "Tài khoản sẽ bị khóa trong 10 phút nếu không bấm vào".',
      'C. Đường link hứa hẹn trúng thưởng số tiền lớn hoặc nhận quà miễn phí bất ngờ.',
      'D. Cả A, B và C đều là dấu hiệu lừa đảo.'
    ],
    correct: 3
  },
  {
    skill: 'Nhận diện nguy cơ và lừa đảo',
    q: 'Câu 6: Nếu một tài khoản Zalo/Facebook có tên và ảnh đại diện giống hệt giáo viên chủ nhiệm nhắn tin vay tiền gấp, hành động chuẩn là gì?',
    options: [
      'A. Chuyển tiền ngay để giúp thầy/cô.',
      'B. Gọi điện thoại trực tiếp hoặc gặp trực tiếp thầy/cô để xác minh thông tin.',
      'C. Chuyển tiếp tin nhắn cho các bạn trong lớp cùng quyên góp.',
      'D. Hỏi số tài khoản rồi chuyển một nửa số tiền.'
    ],
    correct: 1
  },
  {
    skill: 'Quản lý quyền riêng tư',
    q: 'Câu 7: Hành vi nào thể hiện kỹ năng quản lý quyền riêng tư tốt khi sử dụng mạng xã hội?',
    options: [
      'A. Luôn bật tính năng chia sẻ vị trí thời gian thực (check-in) mọi lúc mọi nơi.',
      'B. Đặt quyền riêng tư bài viết phù hợp (bạn bè/chỉ mình tôi), kiểm tra danh sách ứng dụng được liên kết tài khoản định kỳ.',
      'C. Kết bạn bừa bãi với tất cả người lạ trên mạng.',
      'D. Công khai số điện thoại và địa chỉ nhà riêng lên trang cá nhân.'
    ],
    correct: 1
  },
  {
    skill: 'Quản lý quyền riêng tư',
    q: 'Câu 8: Khi cài đặt một ứng dụng học tập hoặc trò chơi mới trên điện thoại, bạn nên chú ý điều gì?',
    options: [
      'A. Bấm "Cho phép tất cả các quyền" ngay để ứng dụng mở nhanh.',
      'B. Chỉ cấp những quyền thực sự cần thiết (từ chối cấp quyền truy cập danh bạ, vị trí nếu ứng dụng không cần).',
      'C. Không quan tâm ứng dụng đòi quyền gì.',
      'D. Cấp quyền truy cập micro và camera vô điều kiện.'
    ],
    correct: 1
  },
  {
    skill: 'Sử dụng AI an toàn',
    q: 'Câu 9: Khi sử dụng các công cụ trí tuệ nhân tạo (AI như ChatGPT, Gemini), quy tắc "3 câu hỏi" trước khi nhập dữ liệu là gì?',
    options: [
      'A. Đây có phải dữ liệu cá nhân không? – Có cần thiết đưa vào AI không? – Đã loại bỏ/ẩn danh thông tin nhận diện chưa?',
      'B. AI có tính tiền không? – AI có nhanh không? – AI có thông minh không?',
      'C. Bài toán này dễ hay khó? – AI có giải được không? – Có nên hỏi thêm không?',
      'D. AI có nói tiếng Việt không? – Có cần lưu lịch sử không? – AI có chính xác không?'
    ],
    correct: 0
  },
  {
    skill: 'Sử dụng AI an toàn',
    q: 'Câu 10: Giáo viên muốn dùng AI để thiết kế nhận xét học bạ cuối kỳ cho học sinh. Cách làm an toàn nhất là:',
    options: [
      'A. Tải danh sách gồm cả họ tên thật, điểm số và số điện thoại lên công cụ AI.',
      'B. Ẩn danh hóa: Chỉ đưa các dữ liệu đặc điểm (ví dụ: "Học sinh A: chăm chỉ, toán khá, môn văn cần cố gắng") mà không kèm họ tên hay trường lớp.',
      'C. Gửi link trang quản lý giáo dục (VnEdu/SMAS) cho AI truy cập.',
      'D. Nhờ người lạ dùng tài khoản AI của họ làm hộ.'
    ],
    correct: 1
  },
  {
    skill: 'Xử lý sự cố',
    q: 'Câu 11: Bước ĐẦU TIÊN cần làm ngay khi phát hiện tài khoản cá nhân có dấu hiệu bị lộ mật khẩu hoặc bị xâm nhập là gì?',
    options: [
      'A. Dừng ngay hành vi nguy cơ và tiến hành đổi mật khẩu ngay lập tức từ thiết bị an toàn, đăng xuất khỏi mọi thiết bị lạ.',
      'B. Đi ngủ và đợi xem ngày mai tài khoản có bình thường lại không.',
      'C. Xóa vĩnh viễn tài khoản và vứt điện thoại.',
      'D. Đăng bài lên Facebook để trách móc người khác.'
    ],
    correct: 0
  },
  {
    skill: 'Xử lý sự cố',
    q: 'Câu 12: Khi học sinh phát hiện mình bị kẻ xấu trên mạng đe dọa, tống tiền hoặc phát tán thông tin giả mạo, học sinh nên liên hệ đầu mối nào?',
    options: [
      'A. Im lặng chịu đựng và làm theo mọi yêu cầu của kẻ xấu.',
      'B. Báo ngay cho cha mẹ, Giáo viên chủ nhiệm, Ban Giám hiệu nhà trường và gọi Tổng đài Quốc gia Bảo vệ Trẻ em 111.',
      'C. Đe dọa lại đối tượng trên mạng.',
      'D. Rủ các bạn cùng lớp đi tìm kẻ xấu để giải quyết.'
    ],
    correct: 1
  }
];

// App State
let currentView = 'home';
let currentScenarioFilter = 'all';
let userAnswers = {};
let quizMode = 'pre'; // 'pre' or 'post'
let currentRole = 'student';

// DOM Init
document.addEventListener('DOMContentLoaded', () => {
  renderScenarios();
  renderQuizQuestions();
  setupEventListeners();
  generateQRCode();
});

// Navigation Handling
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
  
  // Update nav pills
  document.querySelectorAll('.nav-pill').forEach(pill => {
    if (pill.dataset.target === viewId) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupEventListeners() {
  // Nav pills click
  document.querySelectorAll('.nav-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      const target = e.currentTarget.dataset.target;
      navigateTo(target);
    });
  });

  // Portal cards click
  document.querySelectorAll('.portal-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const target = e.currentTarget.dataset.target;
      navigateTo(target);
    });
  });

  // Back buttons click
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navigateTo('home');
    });
  });

  // Logo click
  document.getElementById('brandLogo').addEventListener('click', () => {
    navigateTo('home');
  });

  // QR Modal triggers
  const qrModal = document.getElementById('qrModal');
  document.getElementById('openQrBtn').addEventListener('click', () => {
    qrModal.classList.add('open');
  });
  document.getElementById('closeQrBtn').addEventListener('click', () => {
    qrModal.classList.remove('open');
  });
  qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) {
      qrModal.classList.remove('open');
    }
  });

  // Filter Scenarios
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

  // Quiz Mode Tabs
  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const mode = e.currentTarget.dataset.mode;
      toggleAssessmentMode(mode);
    });
  });
}

// Generate Scannable QR Code
function generateQRCode() {
  let currentUrl = window.location.href;
  if (currentUrl.includes('localhost') || currentUrl.includes('127.0.0.1')) {
    // Ưu tiên đường link công khai để điện thoại quét mã QR vào được ngay
    currentUrl = 'https://fd4e2b41744a0b.lhr.life';
  }
  const qrImg = document.getElementById('qrImageDisplay');
  const qrText = document.getElementById('qrUrlText');
  
  if (qrText) qrText.textContent = currentUrl;
  if (qrImg) {
    const encoded = encodeURIComponent(currentUrl);
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encoded}&bgcolor=ffffff&color=1d4ed8`;
  }
}

// Render Interactive Scenarios (Section 4)
function renderScenarios() {
  const container = document.getElementById('scenariosContainer');
  if (!container) return;

  const filtered = scenariosData.filter(s => {
    if (currentScenarioFilter === 'all') return true;
    return s.group === currentScenarioFilter;
  });

  container.innerHTML = filtered.map(s => `
    <div class="scenario-card" id="scenario-${s.id}">
      <div class="scenario-meta">
        <span class="badge-tag">${s.groupName}</span>
        <span style="font-size: 0.8rem; color: #64748b; font-weight: 600;">Đối tượng: ${s.target === 'teacher' ? 'Giáo viên' : (s.target === 'student' ? 'Học sinh' : 'Cả GV & HS')}</span>
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

// Handle Scenario Option Selection
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

// Password Strength Simulator (Section 3)
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
    text.textContent = 'Mức độ: Rất yếu (Dễ bị dò quét bằng từ điển)';
    text.style.color = '#dc2626';
  } else if (score < 75) {
    fill.style.background = '#f59e0b';
    text.textContent = 'Mức độ: Trung bình (Nên thêm ký tự hoa, số và ký tự đặc biệt)';
    text.style.color = '#d97706';
  } else {
    fill.style.background = '#10b981';
    text.textContent = 'Mức độ: Rất mạnh (Đáp ứng tiêu chuẩn an toàn SAFE-LS)';
    text.style.color = '#059669';
  }
}

// Assessment Mode Toggle (Section 6)
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

// Render 12 Quiz Questions
function renderQuizQuestions() {
  const container = document.getElementById('quizQuestionsContainer');
  if (!container) return;

  container.innerHTML = quizQuestions.map((q, qIdx) => `
    <div class="content-box" style="margin-bottom: 1.25rem; background: #ffffff;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <span class="badge-tag">${q.skill}</span>
        <span style="font-size: 0.8rem; color: #64748b; font-weight: 600;">Câu ${qIdx + 1} / 12</span>
      </div>
      <div style="font-weight: 700; color: #0f172a; margin-bottom: 0.75rem;">${q.q}</div>
      <div class="options-list">
        ${q.options.map((opt, optIdx) => `
          <label style="display: flex; align-items: center; gap: 0.65rem; padding: 0.65rem 0.85rem; border: 1px solid #e2e8f0; border-radius: 8px; cursor: pointer;">
            <input type="radio" name="quiz_q_${qIdx}" value="${optIdx}" onchange="recordQuizAnswer(${qIdx}, ${optIdx})">
            <span>${opt}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');
}

let quizAnswers = {};
window.recordQuizAnswer = function(qIdx, optIdx) {
  quizAnswers[qIdx] = optIdx;
};

// Submit Quiz and calculate 4-Level Evaluation
window.submitQuiz = function() {
  const answeredCount = Object.keys(quizAnswers).length;
  if (answeredCount < quizQuestions.length) {
    alert(`Bạn còn ${quizQuestions.length - answeredCount} câu chưa hoàn thành. Vui lòng làm hết 12 câu để có kết quả chính xác nhất!`);
    return;
  }

  let correctCount = 0;
  const skillScores = {};

  quizQuestions.forEach((q, idx) => {
    if (!skillScores[q.skill]) {
      skillScores[q.skill] = { total: 0, correct: 0 };
    }
    skillScores[q.skill].total++;

    if (quizAnswers[idx] === q.correct) {
      correctCount++;
      skillScores[q.skill].correct++;
    }
  });

  const percentage = Math.round((correctCount / quizQuestions.length) * 100);

  // 4-level scale from Proposal Part IV.2
  let level = '';
  let levelClass = '';
  let levelDesc = '';

  if (percentage < 50) {
    level = 'Mức 1 – Chưa đạt';
    levelClass = 'is-wrong';
    levelDesc = 'Chưa nhận diện hoặc xử lý đúng tình huống an toàn dữ liệu. Cần tham gia ngay các khóa bồi dưỡng mô hình SAFE-LS.';
  } else if (percentage < 70) {
    level = 'Mức 2 – Đạt một phần';
    levelClass = 'is-wrong';
    levelDesc = 'Có nhận biết cơ bản về dữ liệu cá nhân nhưng chưa biết cách xử lý đầy đủ khi gặp nguy cơ mạng.';
  } else if (percentage < 85) {
    level = 'Mức 3 – Đạt';
    levelClass = 'is-correct';
    levelDesc = 'Có khả năng nhận diện và xử lý cơ bản các nguy cơ bảo mật tài khoản và quyền riêng tư trong môi trường số.';
  } else {
    level = 'Mức 4 – Thành thạo';
    levelClass = 'is-correct';
    levelDesc = 'Có khả năng nhận diện nhanh, lựa chọn biện pháp phù hợp và biết tìm kiếm hỗ trợ khi cần thiết. Đạt chuẩn kỹ năng SAFE-LS!';
  }

  const resultBox = document.getElementById('quizResultBox');
  resultBox.style.display = 'block';
  resultBox.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.25rem;">
      <h3 style="font-size: 1.35rem; color: #1e3a8a; margin-bottom: 0.35rem;">KẾT QUẢ ĐÁNH GIÁ KỸ NĂNG SAFE-LS</h3>
      <div style="font-size: 2.25rem; font-weight: 800; color: #1d4ed8;">${percentage}% (${correctCount}/12 câu đúng)</div>
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
  `;

  resultBox.scrollIntoView({ behavior: 'smooth' });
};
