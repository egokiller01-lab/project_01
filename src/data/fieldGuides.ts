import type { ProductSlug } from "./products";

type Article = { title: string; path: string };
export const fieldGuides: { family: ProductSlug; ko: Article; vi: Article }[] =
  [
    {
      family: "post-treatment-specialty",
      ko: {
        title: "금도금 단자에 손자국·변색이 생길 때 후처리제 교체 전 점검법",
        path: "/gold-plating-post-treatment-fingerprint-discoloration/",
      },
      vi: {
        title:
          "Dấu vân tay và đổi màu trên đầu cực mạ vàng: cần kiểm tra gì trước khi đổi hóa chất?",
        path: "/vi/xu-ly-sau-ma-vang-dau-van-tay-doi-mau/",
      },
    },
    {
      family: "conversion-coating",
      ko: {
        title: "인산염피막 처리 후 도장이 벗겨질 때 어디부터 점검할까?",
        path: "/phosphate-guide/",
      },
      vi: {
        title: "Bong sơn sau phosphat hóa: nên kiểm tra từ công đoạn nào?",
        path: "/vi/phosphating-la-gi-vi-sao-quan-trong-truoc-khi-son/",
      },
    },
    {
      family: "electroless-plating",
      ko: {
        title:
          "무전해니켈 도금액 수명이 짧아질 때 아인산염·MTO로 보는 재생과 교체",
        path: "/electroless-nickel-bath-life-phosphite-regeneration/",
      },
      vi: {
        title:
          "Bể mạ niken hóa học nhanh hết tuổi thọ: khi nào nên tái sinh hoặc thay bể?",
        path: "/vi/tuoi-tho-be-nickel-hoa-hoc-phosphite-tai-sinh/",
      },
    },
    {
      family: "aluminum-anodizing",
      ko: {
        title: "아노다이징 후 염색 번짐과 백화, 봉공 불량을 어떻게 구별할까?",
        path: "/anodizing-sealing-defects-dye-bleeding-white-spots/",
      },
      vi: {
        title:
          "Loang màu và đốm trắng sau anod hóa: làm sao nhận biết lỗi bịt kín?",
        path: "/vi/loi-bit-kin-anod-hoa-loang-mau-dom-trang/",
      },
    },
    {
      family: "conversion-coating",
      ko: {
        title: "아연니켈 크로메이트 색상 편차, 도금·수세·건조 단계별 점검법",
        path: "/zinc-nickel-passivation-color-variation-diagnosis/",
      },
      vi: {
        title:
          "Lệch màu sau thụ động hóa kẽm–niken: kiểm tra lớp mạ, rửa và sấy",
        path: "/vi/lech-mau-thu-dong-hoa-kem-niken-chan-doan/",
      },
    },
    {
      family: "post-treatment-specialty",
      ko: {
        title:
          "은도금 접점이 변색되면 접촉저항도 높아질까? 황화·보관 조건 점검",
        path: "/silver-plating-electrical-contact-reliability/",
      },
      vi: {
        title:
          "Tiếp điểm mạ bạc đổi màu có làm tăng điện trở tiếp xúc? Kiểm tra sunfua hóa và bảo quản",
        path: "/vi/ma-bac-tiep-diem-dien-do-tin-cay/",
      },
    },
  ];
