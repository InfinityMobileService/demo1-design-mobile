# MBH Customer App — Mobile HTML Mockup Spec (สำหรับ agent ทุกตัว)

เป้าหมาย: ออกแบบ **แอปมือถือสำหรับลูกค้าที่ผ่อนมือถือกับ "บ้านมือถือ MOBILE HOME (MBH)"**
เป็น **static HTML mockup ล้วน** เพื่อ confirm design กับลูกค้า
**ห้ามเขียน/เรียก API เด็ดขาด ห้ามใส่ JS logic** ใช้ mock data ภาษาไทยสมจริง

ผู้ใช้คือ "ลูกค้าปลายทาง" ไม่ใช่พนักงาน — โทนต้องเป็นแอปการเงินผู้บริโภค อ่านง่าย ปุ่มใหญ่ นิ้วโป้งกดถึง
(backoffice ของพนักงานอยู่คนละโปรเจกต์ที่ `../new-design-bo/` ห้ามแก้)

## Theme — Mobile fintech + Gold accent
- พื้นหลังจอ `--page` เทาอ่อน #F4F4F7, การ์ดขาวขอบ `--line` radius 16
- **ทองใช้เป็น accent เท่านั้น**: ปุ่ม primary, แท็บ active, progress, ตัวเลขเน้น — พื้นผิวหลักเป็นขาว/เทา
- การ์ด hero (`.hero`) เป็นพื้นน้ำตาลเข้ม/ดำ + เรืองทอง ใช้เฉพาะ "ยอดหลักของหน้า" หน้าละไม่เกิน 1 อัน
- ห้าม hardcode สีในไฟล์หน้า ใช้ CSS variable ที่มีอยู่ (`var(--gold-500)`, `var(--ink-3)` ฯลฯ)
- inline style ใช้ได้เฉพาะเรื่องเล็ก เช่น `style="width:42%"` ของ progress bar, margin เฉพาะจุด

## กติกาเหล็ก
1. ไฟล์ HTML แบนราบใน `/Users/sutthiphong/Documents/infinity/new-design-mobile/` (ไม่มี subfolder ยกเว้น `assets/`)
2. ทุกหน้าใช้ skeleton นี้เป๊ะ ๆ:

```html
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ชื่อหน้า — บ้านมือถือ MBH</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/theme.css">
</head>
<body>
<div class="app">
<script>window.PAGE = { title: "ชื่อหน้า", tab: "<tab-id หรือไม่ใส่>", back: "<ไฟล์ก่อนหน้า.html>" };</script>
<script src="assets/layout.js"></script>
<div class="screen">
  <!-- เนื้อหาหน้า -->
</div>
</div>
</body>
</html>
```

3. `window.PAGE` (อ่าน `assets/layout.js` ประกอบ):
   - `title` ข้อความบน app bar
   - `tab` ใส่เมื่อหน้านั้นเป็น 1 ใน 5 แท็บล่าง: `home` | `schedule` | `history` | `support` | `profile`
     **หน้าลูกหรือหน้าใน flow ห้ามใส่ `tab`** (จะได้ไม่มีแท็บล่างมาบัง)
   - `back` ชื่อไฟล์ปลายทางปุ่มย้อนกลับ — หน้าลูกทุกหน้าต้องมี
   - `right` ปุ่มมุมขวา เช่น `[{ ico:"bell", href:"notifications.html", dot:true }]`
   - `bare: true` ไม่มี app bar (ใช้กับ onboarding/login/otp/pay-success)
   - `dark: true` app bar โปร่งใสอักษรขาว
4. `assets/theme.css` มี class ครบแล้ว **อ่าน theme.css ก่อนเขียน ห้ามเขียน CSS ใหม่ ห้ามสร้างไฟล์ CSS เพิ่ม**
   class ที่มี: `.appbar .appbar-title .icon-btn`, `.screen`, `.tabbar .tab-item`,
   `.h1 .h2 .h3 .sub .muted .num .amount .amount-sm .section-title`,
   `.card .card-head .card-title .card-flush`, `.hero`,
   `.btn .btn-primary .btn-outline .btn-ghost .btn-danger .btn-dark .btn-block .btn-sm .btn-lg`, `.action-bar`,
   `.badge badge-success|warning|danger|info|gold|solid|on-dark`, `.chip-row .chip`,
   `.list .list-item (.body .title .desc .trail .chev) .list-ico (.g .r .b .y .n)`,
   `.kv .k .v .kv.total`, `.divider .divider-dashed`,
   `.stats .stats-3 .stat`, `.progress .progress-bar`, `.timeline .tl-item (.done .active)`,
   `.field .input .select .textarea .hint .input-group .search .otp`,
   `.choice .radio-dot .switch .upload-box`,
   `.alert alert-success|warning|danger|info`, `.avatar .avatar-lg`,
   `.chat-thread .bubble (.me .them) .chat-day .composer`,
   `.empty .skeleton .qr-box .device-thumb`,
   `.grid-2 .row .row-between .col .gap-* .mt-* .mb-* .text-center .text-right .flex-1 .t-success .t-danger .t-warning .t-gold`
5. ดู `home.html` เป็นตัวอย่าง pattern ที่ถูกต้อง — โครง เนื้อหา และระดับความละเอียดควรใกล้เคียงกัน
6. **Icons: ใช้ Lucide เท่านั้น ห้ามใช้ emoji** — เขียน `<i data-lucide="ชื่อไอคอน"></i>`
   layout.js โหลด lucide CDN + เรียก `lucide.createIcons()` ให้อัตโนมัติแล้ว
7. ลิงก์ระหว่างหน้าใช้ชื่อไฟล์ตรง ๆ เช่น `href="pay-qr.html"` — ปุ่มไม่ต้องทำงานจริง มีแค่ลิงก์เปลี่ยนหน้า
8. **ห้ามใส่ `<script>` อื่นนอกจาก `window.PAGE` + `layout.js`**
9. ความยาวเนื้อหา: หน้า list ให้ mock 5–8 แถว, หน้า detail ให้ครบทุกฟิลด์ที่ลูกค้าอยากเห็น
   อย่าทำหน้าโล่ง ๆ 3 บรรทัดจบ

## Mock data (ต้องสอดคล้องกันทุกหน้า — ลูกค้าคนเดียวกัน)
- ลูกค้า: **นายสมชาย ใจดี** เบอร์ **081-234-5678** เลขบัตร 1-2345-67890-12-3
- สัญญาปัจจุบัน: **LN-2568-0417** · เครื่อง **iPhone 15 128GB สีดำ** · IMEI 356789104523781
- ราคาเครื่อง ฿28,900 · ดาวน์ ฿5,000 · ผ่อน **12 งวด งวดละ ฿3,200** · ทำสัญญา 25 มี.ค. 2568
- ชำระแล้ว 5 งวด (งวดที่ 1–5, ทุกวันที่ 25) · **งวดถัดไป = งวดที่ 6 ครบกำหนด 25 ส.ค. 2568**
- คงเหลือ ฿22,400 · วันนี้คือ **20 ส.ค. 2568**
- สัญญาเก่าที่ปิดแล้ว: LN-2567-1188 · Samsung Galaxy A54 · ปิดครบ 10 งวด เมื่อ 15 ก.พ. 2568
- ช่องทางชำระ: พร้อมเพย์ QR, โอนธนาคาร (กสิกรไทย 123-4-56789-0 บจก. บ้านมือถือ), เคาน์เตอร์เซอร์วิส, ชำระที่สาขา
- วันที่ทั้งหมดใช้ พ.ศ. รูปแบบ `25 ส.ค. 2568` · เงินใช้ `฿3,200`

## รายชื่อไฟล์ทั้งหมด + เจ้าของ

| ไฟล์ | tab | back | เจ้าของ | เนื้อหา |
|---|---|---|---|---|
| index.html | - | - | claude | หน้ารวมลิงก์ทุกหน้า (สำหรับ preview) |
| onboarding.html | - | - | claude | 3 สไลด์แนะนำแอป + ปุ่มเริ่มใช้งาน |
| login.html | - | - | claude | เข้าสู่ระบบด้วยเบอร์โทร |
| otp.html | - | login.html | claude | กรอก OTP 6 หลัก |
| home.html | home | - | claude (เสร็จแล้ว) | หน้าแรก |
| loan-detail.html | - | home.html | cursor | รายละเอียดสัญญา: ข้อมูลเครื่อง ยอดรวม ดาวน์ ดอกเบี้ย งวด สรุปยอดคงเหลือ ปุ่มไปหน้าตารางงวด |
| payment-schedule.html | schedule | - | cursor | ตารางงวดผ่อน 12 งวด: งวด/วันครบกำหนด/ยอด/สถานะ (จ่ายแล้ว 5, ถัดไป 1, รอ 6) + สรุปด้านบน |
| payment-history.html | history | - | cursor | ประวัติการชำระ: filter chip (ทั้งหมด/สำเร็จ/ไม่สำเร็จ), รายการพร้อมช่องทาง+เวลา, ลิงก์ใบเสร็จ |
| pay-methods.html | - | home.html | grok | เลือกช่องทางชำระ (`.choice` 4 แบบ) + สรุปยอด + ปุ่มถัดไปไป pay-qr.html |
| pay-qr.html | - | pay-methods.html | grok | QR พร้อมเพย์ (`.qr-box`) + ยอด + นับถอยหลัง + ขั้นตอน + ปุ่มยืนยันไป pay-success.html |
| pay-success.html | - | - | grok | ชำระสำเร็จ (`bare:true`) ไอคอนติ๊ก ยอด เลขอ้างอิง สรุปงวดถัดไป ปุ่มกลับหน้าแรก/บันทึกสลิป |
| contract.html | - | loan-detail.html | grok | สัญญาและเอกสาร: รายการเอกสาร (สัญญาเช่าซื้อ/ตารางผ่อน/ใบรับเครื่อง) + สรุปเงื่อนไข + ปุ่มดาวน์โหลด |
| device-info.html | - | home.html | codex | เครื่องของฉัน: รูป/สเปก IMEI สถานะล็อก คำเตือนเรื่องค้างชำระจะถูกล็อก ประวัติสถานะเครื่อง (timeline) |
| profile.html | profile | - | codex | บัญชี: avatar ชื่อ เบอร์, เมนูตั้งค่า (ข้อมูลส่วนตัว/ที่อยู่/แจ้งเตือน .switch/ภาษา/PIN), สัญญาเก่า, ออกจากระบบ |
| notifications.html | - | home.html | codex | แจ้งเตือน: กลุ่มวันนี้/สัปดาห์นี้/ก่อนหน้า, ชนิด เตือนครบกำหนด/ชำระสำเร็จ/โปรโมชัน/ระบบ, ตัวที่ยังไม่อ่านเน้น |
| support-chat.html | support | - | codex | แชทช่วยเหลือ: `.chat-thread` 8–10 บับเบิล คุยเรื่องเลื่อนงวด, chip คำถามด่วน, `.composer` ล่างจอ |

เสร็จแล้วตอบสรุปรายชื่อไฟล์ที่สร้าง ไม่ต้องรัน server ไม่ต้องแก้ไฟล์ของ agent อื่น

---

# รอบที่ 2 (อัปเดต 20 ส.ค. 2568) — ยอดค้างชำระ / การทวงถาม / แจ้งสลิป

ลูกค้าขอเพิ่ม 3 เรื่อง: **เห็นข้อมูลการทวงถาม**, **เห็นรายการที่ต้องจ่าย**, **ส่งสลิปแจ้งชำระเงินได้**
อ้างอิงแอปตัวอย่าง (CUSTOMER CONNECT): การ์ดสัญญาด้านบน → แถบสรุป "ยอดชำระแล้ว / วงเงินทั้งหมด" →
progress bar → แท็บ "รายการรอเรียกเก็บ | รายการเสร็จสมบูรณ์" → แถวรายการที่มีชื่อเครื่อง เลขสัญญา (งวด/ทั้งหมด)
สถานะทวงถามสีแดง และยอดเงิน

## Mock data v2 — **แทนที่ของเดิมทั้งหมด ทุกหน้าต้องอัปเดตให้ตรงกัน**
- ลูกค้า/สัญญา/เครื่อง เหมือนเดิม: นายสมชาย ใจดี · LN-2568-0417 · iPhone 15 128GB
- ผ่อน 12 งวด งวดละ ฿3,200 · **ยอดจัดทั้งหมด ฿38,400** · **ชำระแล้ว ฿12,800** · **คงเหลือ ฿25,600**
- ชำระครบแล้ว 4 งวด (งวดที่ 1–4 ตรงเวลา ทุกวันที่ 25)
- **งวดที่ 5 ครบกำหนด 25 ก.ค. 2568 = ค้างชำระเกินกำหนด 26 วัน — "ระยะที่ 1"**
  ยอดงวด ฿3,200 + ค่าติดตามทวงถาม ฿200 = **฿3,400**
- งวดที่ 6 ครบกำหนด 25 ส.ค. 2568 ฿3,200 (อีก 5 วัน) · งวดที่ 7–12 ยังไม่ถึงกำหนด
- **ยอดที่ต้องชำระตอนนี้ ฿3,400** (แสดงเป็นตัวเลขหลักของหน้าแรก)
- ระยะทวงถาม: ระยะที่ 1 = ค้าง 1–30 วัน (SMS + โทรแจ้งเตือน, ค่าติดตาม ฿200) ·
  ระยะที่ 2 = 31–60 วัน (จดหมายแจ้งเตือน + เจ้าหน้าที่เข้าพบ, ค่าติดตาม ฿500) ·
  ระยะที่ 3 = เกิน 60 วัน (ล็อกเครื่อง / เรียกคืนเครื่องตามสัญญา)
- ประวัติติดต่อทวงถาม: 26 ก.ค. SMS แจ้งครบกำหนด · 2 ส.ค. โทรแจ้ง (รับสาย รับปากจ่าย 10 ส.ค.) ·
  12 ส.ค. SMS เตือนซ้ำ · 18 ส.ค. โทรแจ้ง (ไม่รับสาย)
- แจ้งสลิปแล้วรอตรวจสอบ 1 รายการ: โอน 19 ส.ค. 2568 เวลา 14:22 ฿3,400 กสิกรไทย สถานะ **รอตรวจสอบ**
- ธนาคารรับโอน: กสิกรไทย 123-4-56789-0 · ไทยพาณิชย์ 456-7-89012-3 · ชื่อบัญชี บจก. บ้านมือถือ โมบายโฮม

## ไฟล์ใหม่ + งานอัปเดต

| ไฟล์ | tab | back | เจ้าของ | เนื้อหา |
|---|---|---|---|---|
| home.html | home | - | claude | ทำใหม่ตาม reference: ยอดค้าง ฿3,400 + แถบเตือนทวงถาม |
| index.html | - | - | claude | เพิ่มลิงก์หน้าใหม่ |
| **due-list.html** (ใหม่) | - | home.html | cursor | "รายการที่ต้องชำระ": การ์ดสัญญาบนสุด + แถบ `ยอดชำระแล้ว ฿12,800 / วงเงินทั้งหมด ฿38,400` + `.progress` + `.tabs` 2 แท็บ (รายการรอเรียกเก็บ 8 / รายการเสร็จสมบูรณ์ 4) + `.due-row` ต่อรายการ: ชื่อเครื่อง, `LN-2568-0417 (5/12)`, `.stage-tag` แดง "หนี้ค้างชำระเกินกำหนด ระยะที่ 1" สำหรับงวด 5, ยอดบาทชิดขวา, งวดถัดไปเป็น badge เหลือง, ที่เหลือเทา · แถวคลิกไป loan-detail.html · ปุ่มล่าง `.action-bar` ไป pay-methods.html |
| loan-detail.html | - | home.html | cursor | อัปเดต mock v2 + เพิ่มบล็อกยอดค้างชำระ ฿3,400 และลิงก์ collection-detail.html |
| payment-schedule.html | schedule | - | cursor | อัปเดต v2: งวด 1–4 จ่ายแล้ว, งวด 5 badge danger "เกินกำหนด 26 วัน", งวด 6 badge warning, 7–12 รอ |
| payment-history.html | history | - | cursor | อัปเดต v2: มี 4 รายการสำเร็จ + 1 รายการ "รอตรวจสอบ" (สลิปที่แจ้งไว้ 19 ส.ค.) ลิงก์ไป slip-status.html |
| **pay-slip.html** (ใหม่) | - | pay-methods.html | grok | แจ้งชำระเงิน/ส่งสลิป: เลือกงวดที่ชำระ (`.select`), ธนาคารที่โอนเข้า (`.select`), วันที่+เวลาโอน, จำนวนเงิน (prefill ฿3,400), `.upload-box` แนบสลิป + `.slip-preview` ตัวอย่างที่แนบแล้ว + `.file-item`, `.hint` เตือนตรวจสอบภายใน 1 ชม. ทำการ, `.action-bar` ปุ่มส่งสลิป ไป slip-status.html |
| **slip-status.html** (ใหม่) | - | payment-history.html | grok | สถานะการแจ้งชำระ: `.timeline` (แจ้งสลิปแล้ว → เจ้าหน้าที่กำลังตรวจสอบ → ตัดยอดสำเร็จ), การ์ดสรุปยอด/เลขอ้างอิง SLP-680819-0032, รูปสลิปที่แนบ, ปุ่มติดต่อเจ้าหน้าที่ |
| pay-methods.html | - | home.html | grok | อัปเดต v2 ยอด ฿3,400 + เพิ่มตัวเลือก "โอนแล้วแจ้งสลิป" ลิงก์ไป pay-slip.html |
| pay-qr.html / pay-success.html | - | - | grok | อัปเดตยอดเป็น ฿3,400 (งวด 5 + ค่าติดตาม) และ pay-qr เพิ่มปุ่ม "โอนแล้ว แจ้งสลิป" |
| **collection-detail.html** (ใหม่) | - | home.html | codex | รายละเอียดการทวงถาม: `.overdue-bar` ด้านบน, การ์ดยอดค้าง (งวด ฿3,200 + ค่าติดตาม ฿200 = ฿3,400 ใช้ `.kv` + `.kv.total`), บล็อกอธิบาย 3 ระยะ (ระยะที่ 1 active), `.timeline` ประวัติติดต่อ 4 รายการ, ปุ่ม "ชำระเลย" + "ขอเลื่อนงวด" (ไป support-chat.html) |
| notifications.html | - | home.html | codex | อัปเดต v2: เพิ่มแจ้งเตือนทวงถาม (เกินกำหนด 26 วัน, เตือนค่าติดตาม, แจ้งรับสลิปแล้ว) ตัวยังไม่อ่านเน้น |
| device-info.html | - | home.html | codex | อัปเดต v2: เพิ่ม `.alert alert-warning` เตือนว่าค้างเกิน 60 วัน (ระยะที่ 3) เครื่องจะถูกล็อกตามสัญญา |
| profile.html / support-chat.html | - | - | codex | อัปเดต v2: support-chat ให้บทสนทนาเป็นเรื่องขอเลื่อนงวดที่ค้าง 26 วัน + chip "แจ้งสลิป" ลิงก์ pay-slip.html |

## class ใหม่ใน theme.css (ห้ามเขียน CSS เอง ใช้ตัวนี้)
`.tabs .tab (.active) .tab .count` · `.overdue-bar` · `.due-row (.trail)` · `.stage-tag` ·
`.slip-preview (.remove)` · `.file-item (.name)`

---

# รอบที่ 3 (ตัด scope) — เหลือแค่ "ยอด/การชำระเงิน" + "บัญชี"

**ตารางไฟล์ในรอบที่ 1 และ 2 ด้านบนถือว่าใช้ไม่ได้แล้ว ใช้รายการนี้เป็นตัวจริง**

ลบทิ้งถาวรแล้ว 8 หน้า: `onboarding.html` `login.html` `otp.html` `loan-detail.html`
`contract.html` `device-info.html` `notifications.html` `support-chat.html`

เหลือ 11 หน้า (+ index):

| ไฟล์ | tab | back | เจ้าของ |
|---|---|---|---|
| index.html | - | - | claude |
| home.html | home | - | claude |
| due-list.html | - | home.html | cursor |
| collection-detail.html | - | home.html | codex |
| payment-schedule.html | schedule | - | cursor |
| payment-history.html | history | - | cursor |
| pay-methods.html | - | home.html | grok |
| pay-qr.html | - | pay-methods.html | grok |
| pay-success.html | - | - | grok |
| pay-slip.html | - | pay-methods.html | grok |
| slip-status.html | - | payment-history.html | grok |
| profile.html | profile | - | codex |

การเปลี่ยนแปลงอื่น:
- **แท็บล่างเหลือ 4**: `home` (หน้าแรก) · `schedule` (งวดผ่อน) · `history` (ประวัติ) · `profile` (บัญชี)
  — `support` ถูกถอดออกจาก `assets/layout.js` แล้ว
- `.tabbar` เปลี่ยนจาก grid 5 คอลัมน์เป็น flex (`.tab-item { flex: 1 }`) จำนวนแท็บยืดเองได้
- ปุ่ม/ลิงก์ที่เคยชี้หน้าที่ถูกลบ ถูกย้ายปลายทางแล้ว:
  แถวใน due-list → collection-detail (งวดค้าง) / payment-schedule (งวดอื่น) ·
  collection-detail ปุ่มที่สองเป็น "โอนแล้ว แจ้งสลิป" → pay-slip ·
  slip-status ปุ่มล่าง → home · profile ปุ่มออกจากระบบ → home
- ไม่มีหน้า login แล้ว จุดเข้าคือ `index.html` (hub) หรือ `home.html`

---

# รอบที่ 4 (redesign) — ระบบใหม่ v3 "canon"

**ทุกอย่างก่อนหน้านี้เรื่องหน้าตาถือว่ายกเลิก** โครงหน้า/flow/mock data v2/แท็บ 4 อันเดิมทั้งหมด แต่ **หน้าตาเขียนใหม่จาก `assets/theme.css` v3**

ทิศทางที่ลูกค้าเลือกเอง: **มาตรฐานแอปการเงินไทย ทำให้เนี้ยบที่สุด** (canon, seed 402bb3ea)
เพดานงานฝีมือ: SCB EASY / KPLUS / KMA · Krungsri เฟิร์สต์ชอยส์ / tplus · TrueMoney / เป๋าตัง · Revolut / Wise / Monzo
**ทำตามขนบเต็มที่ ห้ามแอบใส่ลูกเล่นสวนทาง** ไม่มีธีมประหลาด ไม่มีสีแปลก

## กฎใหม่ที่ต่างจากเดิม (อ่านให้ครบก่อนแก้)

1. **อ่าน `assets/theme.css` ใหม่ทั้งไฟล์ก่อนเขียน** token กับ class เปลี่ยนเกือบหมด
2. **`.hero` ถูกลบแล้ว** แผงยอดหลักของหน้าคือ `.balance` (พื้นขาว ไม่ใช่พื้นเข้ม) **หน้าละหนึ่งอันเท่านั้น**
3. **ตัวเลขที่ใหญ่ที่สุดในหน้าต้องเป็นยอดที่ผู้ใช้ต้องจ่าย** ใช้ `.amount-xl` (34px) ที่เดียวต่อหน้า
   ระดับรอง `.amount-lg` `.amount-md` `.amount-sm` — เลิกใช้ class `.amount` เก่า
4. **ห้ามการ์ดซ้อนการ์ด** `.card` ห้ามอยู่ใน `.card` และห้ามใช้การ์ดไอคอน+หัวข้อ+ข้อความขนาดเท่ากันเรียงเป็นโครงหน้า
5. **ห้ามใส่ kicker/eyebrow เหนือหัวข้อ** หัวข้อพูดเองได้
6. **สีเป็นความหมาย ไม่ใช่การตกแต่ง** — แดง = ค้างชำระ, ส้ม = ใกล้ครบกำหนด, เขียว = สำเร็จ, ทอง = accent ของแบรนด์และปุ่มหลัก อย่างอื่นเป็นเทา/ขาว
   ทุกครั้งที่ใช้สีสื่อสถานะ **ต้องมีข้อความกำกับด้วย** ห้ามสื่อด้วยสีเดี่ยว ๆ
7. **แถบสถานะค้างชำระใช้ `.notice`** (ข้อความนำ สีตาม) ไม่ใช่ `.overdue-bar` เดิม
8. **แถบ 12 งวดใช้ `.ticks`** (12 ขีด ขีดละงวด: `.paid` ทอง / `.overdue` แดง / `.due` ส้ม / เปล่า = ยังไม่ถึง) พร้อม `role="img"` และ `aria-label` อธิบายเป็นข้อความ — ใช้แทน progress bar เส้นเดียวได้ทุกที่ที่พูดถึง 12 งวด
9. **แท็บบนหน้า (รอเรียกเก็บ/เสร็จสมบูรณ์) ใช้ `.tabs > .tab`** ซึ่งตอนนี้เป็น segmented control พื้นเทา ไม่ใช่ขีดใต้แบบเดิม
10. **ปุ่มหลักสูง 52px** (`.btn`), ปุ่มติดล่างจอใช้ `.action-bar` ซึ่งตอนนี้ตั้ง margin ติดขอบจอให้เองแล้ว — วางเป็นลูกตัวสุดท้ายของ `.screen`
11. **สถานะที่ต้องมีจริงเมื่อเกี่ยวข้อง**: hover / active / disabled (`.is-disabled`) / loading (`.is-loading`) / error (`.input.is-error` + `.field .error`) / empty (`.empty`)
12. `<head>` เพิ่ม `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` ต่อจาก preconnect เดิม
13. **คัดลอกคอมเมนต์ direction contract จาก `home.html`** (บล็อก THESIS/OWN-WORLD/STORY/FIRST VIEWPORT/FORM/FINISH) ไปวางเป็นสิ่งแรกหลัง `<body>` ของทุกหน้าที่คุณแก้ ห้ามแก้ข้อความในบล็อกนั้น
14. ห้ามเขียน CSS ใหม่ ห้ามสร้างไฟล์ CSS/JS ห้ามใส่ JS logic ห้าม emoji (Lucide เท่านั้น) — เหมือนเดิม
15. `window.PAGE` เหมือนเดิม (`title` / `tab` / `back` / `right` / `bare`) layout.js ใส่ `has-tabbar` ให้ `.screen` เองแล้ว **ห้ามใส่ class `no-tab` อีก** (ถูกลบ)

## ดู `home.html` เป็นแบบอ้างอิงของระบบใหม่ — โครง จังหวะ ระยะห่าง และระดับตัวเลขต้องใกล้เคียงกัน

## เจ้าของงานรอบนี้

| ไฟล์ | เจ้าของ |
|---|---|
| home.html, assets/*, DESIGN-SPEC.md | claude (เสร็จแล้ว) |
| due-list.html, payment-schedule.html, payment-history.html | cursor |
| pay-methods.html, pay-qr.html, pay-success.html, pay-slip.html, slip-status.html | grok |
| collection-detail.html, profile.html, index.html | codex |

Mock data v2 เดิมทุกตัวเลข ห้ามเปลี่ยน: ชำระแล้ว ฿12,800 / ยอดจัดทั้งหมด ฿38,400 / คงเหลือ ฿25,600 · งวด 1–4 จ่ายแล้ว · งวด 5 ค้าง 26 วัน ระยะที่ 1 = ฿3,200 + ค่าติดตาม ฿200 = ฿3,400 · งวด 6 ครบ 25 ส.ค. 2568 · สลิปรอตรวจสอบ 19 ส.ค. 2568 14:22 ฿3,400
