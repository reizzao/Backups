import { ISetIdadeMinima } from "../../setAdmIdade.ts";

export const fakeMaiorIdade: ISetIdadeMinima = {
  idadeMinima: 18,
  feedExceptionIdadeMinima() {
    return `Ops! só é permitido idade maior que ${this.idadeMinima}`;
  },
};

//

// type IFakeMaiorOrMenorIdade = {
//   hoje: string;
//   dataSimuladaMaiorQue18OK: string;
//   dataSimuladaMenorQue18FAIL: string;
// };
type IFakeMaiorOrMenorIdade = {
  hoje: string;
  dataSimuladaMaiorQue18OK: IDateFormat;
  dataSimuladaMenorQue18FAIL: IDateFormat;
};

// NEW

export type IDateFormat = { dd: string; mm: string; yy: string };
const dateFormatOK: IDateFormat = {
  dd: "18",
  mm: "05",
  yy: "2005",
};

const dateFormatFAIL: IDateFormat = {
  dd: "19",
  mm: "05",
  yy: "2005",
};

//

export const fakeMaiorOrMenorIdade: IFakeMaiorOrMenorIdade = {
  hoje: "Thu May 18 2023",
  dataSimuladaMaiorQue18OK: dateFormatOK,
  dataSimuladaMenorQue18FAIL: dateFormatFAIL,
};

// export const fakeMaiorOrMenorIdade: IFakeMaiorOrMenorIdade = {
//   hoje: "Thu May 18 2023",
//   dataSimuladaMaiorQue18OK: dateFormatOK.dd + "/" + dateFormatOK.mm + "/" +
//     dateFormatOK.yy,
//   dataSimuladaMenorQue18FAIL: dateFormatFAIL.dd + "/" + dateFormatFAIL.mm +
//     "/" + dateFormatFAIL.yy,
// };
