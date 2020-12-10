import Other1 from "./Other1";
import Other2 from "./Other2";
import Other3 from "./Other3";
import Review from "./Review";
import More from "./More";

const steps = [
  {
    id: "1",
    message:
      "สวัสดีค่ะ แชทบอทยินดีต้อนรับค่ะ คุณสามารถตรวจสอบอาการโควิด19 ได้หลังจากตอบแบบสอบถามค่ะ",
    trigger: "2",
  },
  {
    id: "2",
    message: "คุณมีไข้สูง > 37.5°C",
    trigger: "question1",
  },
  {
    id: "question1",
    options: [
      { value: "yes", label: "ใช่", trigger: "4" },
      { value: "no", label: "ไม่", trigger: "4" },
    ],
  },
  {
    id: "4",
    message:
      "คุณมีอาการเจ็บคอ หรือมีน้ำมูกไหม (มีอาการหลายวัน,เสมหะอาจมีปนเลือด)",
    trigger: "question2",
  },
  {
    id: "question2",
    options: [
      { value: "yes", label: "ใช่ ", trigger: "6" },
      { value: "no", label: "ไม่", trigger: "6" },
    ],
  },
  {
    id: "6",
    message: "คุณมีอาการท้องเสียไหม",
    trigger: "question3",
  },
  {
    id: "question3",
    options: [
      { value: "yes", label: "ใช่ ", trigger: "8" },
      { value: "no", label: "ไม่", trigger: "8" },
    ],
  },
  {
    id: "8",
    message: "คุณมีอาการคลื่นไส้อาเจียนไหม",
    trigger: "question4",
  },
  {
    id: "question4",
    options: [
      { value: "yes", label: "ใช่ ", trigger: "10" },
      { value: "no", label: "ไม่", trigger: "10" },
    ],
  },
  {
    id: "10",
    message: "คุณมีอาการเลือดออกตามผิวหนังไหม",
    trigger: "question5",
  },
  {
    id: "question5",
    options: [
      { value: "yes", label: "ใช่ ", trigger: "12" },
      { value: "no", label: "ไม่", trigger: "12" },
    ],
  },
  {
    id: "12",
    message: "คุณมีอาการปวดเมื่อยไหม",
    trigger: "question6",
  },
  {
    id: "question6",
    options: [
      { value: "yes", label: "ใช่ ", trigger: "14" },
      { value: "no", label: "ไม่", trigger: "14" },
    ],
  },
  {
    id: "14",
    message: "คุณมีอาการหายใจลำบาก",
    trigger: "question7",
  },
  {
    id: "question7",
    options: [
      { value: "yes", label: "ใช่ ", trigger: "16" },
      { value: "no", label: "ไม่", trigger: "16" },
    ],
  },
  {
    id: "16",
    message: "คุณมีอาการปอดอักเสบ",
    trigger: "question8",
  },
  {
    id: "question8",
    options: [
      { value: "yes", label: "ใช่ ", trigger: "review" },
      { value: "no", label: "ไม่", trigger: "review" },
    ],
  },
  {
    id: "review",
    component: <Review />,
    asMessage: true,
    trigger: "other",
  },
  {
    id: "other",
    options: [
      { value: "1", label: "วิธีการป้องกันโควิด", trigger: "other1" },
      { value: "2", label: "โรงพยาบาลที่รับตรวจโควิด", trigger: "other2" },
      { value: "3", label: "การรักษาโควิด", trigger: "other3" },
      { value: "4", label: "สอบถามเพิ่มเติม", trigger: "more" },
      { value: "5", label: "กล้บไปทำแบบทดสอบ", trigger: "1" },
    ],
  },
  {
    id: 'more',
    user: true,
    trigger: 'answer',
  },
  {
    id: "answer",
    component: <More/>,
    asMessage: true,
    trigger: "after",
  },
  {
    id: "after",
    options: [
      { value: "1", label: "ถามเพิ่มเติม", trigger: "more" },
      { value: "2", label: "เริ่มต้นใหม่", trigger: "other" },
    ],
  },
  {
    id: "other1",
    component: <Other1 />,
    asMessage: true,
    trigger: "other",
  },
  {
    id: "other2",
    component: <Other2 />,
    asMessage: true,
    trigger: "other",
  },
  {
    id: "other3",
    component: <Other3 />,
    asMessage: true,
    trigger: "other",
  },
];

export default steps;