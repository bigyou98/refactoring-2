// 함수를 명령으로 바꾸기

/// 명령 하나만 하는 객체를 커맨드 객체, 커맨드 패턴이라고 함
export function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

// 커맨드 패턴이라고 한다.
export class ScoringGuide {
  stateWithLowCertification(state) {
    return state < 5;
  }
}

class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this.candidate = candidate;
    this.medicalExam = medicalExam;
    this.scoringGuide = scoringGuide;
  }
  execute() {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;
    let certificationGrade = "regular";

    if (this.medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }

    if (
      this.this.scoringGuide.stateWithLowCertification(
        this.candidate.originState
      )
    ) {
      certificationGrade = "low";
      result -= 5;
    }
    // lots more code like this
    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
}
