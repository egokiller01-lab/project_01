import type { Locale } from "../types";
import {
  INQUIRY_CONSENT_VERSION,
  INQUIRY_LIMITS,
} from "../lib/inquiryConstants";
import { products } from "./products";

export const inquiryTypes = [
  "product",
  "technical-support",
  "process-problem",
  "quotation",
  "distribution-partnership",
  "other",
] as const;

export type InquiryType = (typeof inquiryTypes)[number];

export const allowedFileExtensions = [
  "pdf",
  "jpg",
  "jpeg",
  "png",
  "xlsx",
  "docx",
] as const;

export const allowedFileMimeTypes = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export const inquiryLimits = INQUIRY_LIMITS;

export const consentVersion = INQUIRY_CONSENT_VERSION;

export const productProcessOptions = (locale: Locale) =>
  products[locale].map((product) => ({
    value: product.slug,
    label: product.title,
  }));

export const inquiryCopy: Record<
  Locale,
  {
    title: string;
    summary: string;
    statusTitle: string;
    statusSummary: string;
    requiredNote: string;
    optionalLabel: string;
    requiredLabel: string;
    submit: string;
    submitting: string;
    reset: string;
    uploadNote: string;
    infrastructureNotice: string;
    directContactTitle: string;
    directContactSummary: string;
    vietnamContact: string;
    koreaContact: string;
    fields: Record<string, string>;
    types: Record<InquiryType, string>;
    errors: Record<string, string>;
    states: Record<string, string>;
  }
> = {
  ko: {
    title: "Technical Inquiry",
    summary:
      "공정 조건, 제품군, 요청 자료를 정리해 기술 검토에 필요한 정보를 준비할 수 있습니다.",
    statusTitle: "접수 상태",
    statusSummary: "입력 내용을 확인한 뒤 현재 접수 가능 상태를 안내합니다.",
    requiredNote: "필수 항목",
    optionalLabel: "선택",
    requiredLabel: "필수",
    submit: "문의 내용 확인",
    submitting: "확인 중",
    reset: "입력 초기화",
    uploadNote:
      "첨부는 PDF, JPG/JPEG, PNG, XLSX, DOCX만 선택할 수 있습니다. 파일당 최대 10MB, 최대 3개입니다.",
    infrastructureNotice:
      "현재 화면에서는 입력 내용을 확인할 수 있으며, 실제 접수는 회사 확인 후 활성화됩니다.",
    directContactTitle: "바로 연락하기",
    directContactSummary:
      "온라인 접수가 활성화되기 전까지 전화 또는 이메일로 문의해 주세요.",
    vietnamContact: "베트남 법인",
    koreaContact: "한국 연락처",
    fields: {
      companyName: "회사명",
      contactName: "담당자명",
      email: "이메일",
      phone: "전화번호",
      country: "국가",
      website: "회사 웹사이트",
      inquiryType: "문의 유형",
      productProcess: "제품 또는 공정",
      message: "문의 내용",
      attachments: "첨부파일",
      consent: "개인정보 수집·이용 동의",
    },
    types: {
      product: "제품 문의",
      "technical-support": "기술지원",
      "process-problem": "공정 문제",
      quotation: "견적 요청",
      "distribution-partnership": "유통·협력",
      other: "기타",
    },
    errors: {
      required: "필수 항목을 입력해 주세요.",
      email: "이메일 형식을 확인해 주세요.",
      phone: "전화번호는 숫자, 공백, +, -, (, )만 사용할 수 있습니다.",
      website: "웹사이트 주소 형식을 확인해 주세요.",
      messageLength: "문의 내용은 20자 이상 3000자 이하로 입력해 주세요.",
      type: "허용된 문의 유형을 선택해 주세요.",
      locale: "지원 언어가 아닙니다.",
      fileCount: "첨부파일은 최대 3개까지 선택할 수 있습니다.",
      fileSize: "파일당 최대 10MB까지 선택할 수 있습니다.",
      fileType: "지원하지 않는 파일 형식입니다.",
      consent: "개인정보 수집·이용 동의가 필요합니다.",
      network: "전송 상태를 확인할 수 없습니다. 잠시 후 다시 시도해 주세요.",
      notConfigured: "현재 온라인 접수 준비 상태입니다.",
    },
    states: {
      ready: "입력 내용을 확인한 뒤 전송 상태를 점검합니다.",
      validationFailed: "입력값을 확인해 주세요.",
      notConfigured:
        "현재 온라인 접수 준비 상태라 실제 접수는 진행되지 않았습니다.",
      failed: "문의 내용을 접수하지 못했습니다.",
      success: "문의가 접수되었습니다. 참조번호를 확인해 주세요.",
    },
  },
  en: {
    title: "Technical Inquiry",
    summary:
      "Share process conditions, product family, and document needs to prepare information for technical review.",
    statusTitle: "Submission status",
    statusSummary:
      "The form checks the entered information and shows the current intake status.",
    requiredNote: "Required fields",
    optionalLabel: "Optional",
    requiredLabel: "Required",
    submit: "Check inquiry",
    submitting: "Checking",
    reset: "Reset form",
    uploadNote:
      "Attachments can be PDF, JPG/JPEG, PNG, XLSX, or DOCX. Maximum 10MB per file and 3 files.",
    infrastructureNotice:
      "This page can check the entered information. Actual online intake will be activated after company confirmation.",
    directContactTitle: "Contact us directly",
    directContactSummary:
      "Until online intake is activated, please contact our Vietnam or Korea office by phone or email.",
    vietnamContact: "Vietnam office",
    koreaContact: "Korea contact",
    fields: {
      companyName: "Company name",
      contactName: "Contact person",
      email: "Email",
      phone: "Phone",
      country: "Country",
      website: "Company website",
      inquiryType: "Inquiry type",
      productProcess: "Product or process",
      message: "Inquiry details",
      attachments: "Attachments",
      consent: "Personal data collection consent",
    },
    types: {
      product: "Product inquiry",
      "technical-support": "Technical support",
      "process-problem": "Process problem",
      quotation: "Quotation request",
      "distribution-partnership": "Distribution / partnership",
      other: "Other",
    },
    errors: {
      required: "Please complete this required field.",
      email: "Please check the email format.",
      phone: "Phone may contain digits, spaces, +, -, (, and ) only.",
      website: "Please check the website URL format.",
      messageLength: "Inquiry details must be between 20 and 3000 characters.",
      type: "Please select an allowed inquiry type.",
      locale: "Unsupported language.",
      fileCount: "Up to 3 files can be selected.",
      fileSize: "Each file must be 10MB or less.",
      fileType: "This file type is not supported.",
      consent: "Personal data collection consent is required.",
      network:
        "Submission status could not be checked. Please try again later.",
      notConfigured: "Online inquiry intake is being prepared.",
    },
    states: {
      ready: "Check the information before sending.",
      validationFailed: "Please check the highlighted fields.",
      notConfigured:
        "Online inquiry intake is being prepared, so no real inquiry was completed.",
      failed: "The inquiry could not be submitted.",
      success:
        "The inquiry has been received. Please keep the reference number.",
    },
  },
  vi: {
    title: "Liên hệ kỹ thuật",
    summary:
      "Gửi điều kiện quy trình, nhóm sản phẩm và nhu cầu tài liệu để chuẩn bị thông tin xem xét kỹ thuật.",
    statusTitle: "Trạng thái gửi",
    statusSummary:
      "Biểu mẫu kiểm tra thông tin đã nhập và hiển thị trạng thái tiếp nhận hiện tại.",
    requiredNote: "Thông tin bắt buộc",
    optionalLabel: "Tùy chọn",
    requiredLabel: "Bắt buộc",
    submit: "Kiểm tra nội dung",
    submitting: "Đang kiểm tra",
    reset: "Xóa nội dung",
    uploadNote:
      "Tệp đính kèm có thể là PDF, JPG/JPEG, PNG, XLSX hoặc DOCX. Tối đa 10MB mỗi tệp và 3 tệp.",
    infrastructureNotice:
      "Trang này có thể kiểm tra thông tin đã nhập. Tiếp nhận trực tuyến thực tế sẽ được kích hoạt sau khi công ty xác nhận.",
    directContactTitle: "Liên hệ trực tiếp",
    directContactSummary:
      "Trong thời gian chờ kích hoạt tiếp nhận trực tuyến, vui lòng liên hệ văn phòng Việt Nam hoặc Hàn Quốc qua điện thoại hoặc email.",
    vietnamContact: "Văn phòng Việt Nam",
    koreaContact: "Liên hệ Hàn Quốc",
    fields: {
      companyName: "Tên công ty",
      contactName: "Người phụ trách",
      email: "Email",
      phone: "Số điện thoại",
      country: "Quốc gia",
      website: "Website công ty",
      inquiryType: "Loại liên hệ",
      productProcess: "Sản phẩm hoặc quy trình",
      message: "Nội dung liên hệ",
      attachments: "Tệp đính kèm",
      consent: "Đồng ý thu thập và sử dụng dữ liệu cá nhân",
    },
    types: {
      product: "Hỏi về sản phẩm",
      "technical-support": "Hỗ trợ kỹ thuật",
      "process-problem": "Vấn đề quy trình",
      quotation: "Yêu cầu báo giá",
      "distribution-partnership": "Phân phối / hợp tác",
      other: "Khác",
    },
    errors: {
      required: "Vui lòng nhập thông tin bắt buộc.",
      email: "Vui lòng kiểm tra định dạng email.",
      phone: "Số điện thoại chỉ dùng chữ số, khoảng trắng, +, -, (, ).",
      website: "Vui lòng kiểm tra định dạng website.",
      messageLength: "Nội dung cần từ 20 đến 3000 ký tự.",
      type: "Vui lòng chọn loại liên hệ hợp lệ.",
      locale: "Ngôn ngữ không được hỗ trợ.",
      fileCount: "Có thể chọn tối đa 3 tệp.",
      fileSize: "Mỗi tệp tối đa 10MB.",
      fileType: "Định dạng tệp không được hỗ trợ.",
      consent: "Cần đồng ý thu thập và sử dụng dữ liệu cá nhân.",
      network: "Không kiểm tra được trạng thái gửi. Vui lòng thử lại sau.",
      notConfigured: "Kênh tiếp nhận trực tuyến đang được chuẩn bị.",
    },
    states: {
      ready: "Kiểm tra thông tin trước khi gửi.",
      validationFailed: "Vui lòng kiểm tra các mục được đánh dấu.",
      notConfigured:
        "Kênh tiếp nhận trực tuyến đang được chuẩn bị nên chưa hoàn tất tiếp nhận thực tế.",
      failed: "Không thể tiếp nhận nội dung liên hệ.",
      success:
        "Nội dung liên hệ đã được tiếp nhận. Vui lòng lưu mã tham chiếu.",
    },
  },
};
